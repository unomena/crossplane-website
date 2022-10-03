import React, { useCallback, useMemo, useState } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import Image from 'next/image';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography, Modal } from '@mui/material';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useFormik, FormikHelpers } from 'formik';
import { FocusError } from 'focus-formik-error';
import * as yup from 'yup';

import { AxiosError } from 'axios';

import { format } from 'date-fns';

import countries from 'country-region-data/data.json';

import * as routes from 'src/routes';

import handleGetStaticProps from 'src-new/utils/handleGetStaticProps';
import axiosInstance from 'src-new/utils/axiosInstance';
import handleFormError from 'src-new/utils/handleFormError';
import getSessionData from 'src-new/utils/getSessionData';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';
import CSelect from 'src-new/elements/CSelect';
import CCheckbox from 'src-new/elements/CCheckbox';
import Link from 'src-new/elements/Link';
import DangerousDiv from 'src-new/elements/DangerousDiv';
import CMSImage from 'src-new/elements/CMSImage';

import eventBooth from 'public/new-images/icons/event-booth-icon.svg';
import eventDate from 'public/new-images/icons/event-date-icon.svg';
import eventLocation from 'public/new-images/icons/event-location-icon.svg';
import ArrowRight from 'src-new/svg/ArrowRight';
import ArrowRightRounded from 'src-new/svg/ArrowRightRounded';
import CloseIcon from '@mui/icons-material/Close';

const root: SxProps = {
  '& p:not(.MuiTypography-root):not(.Mui-error)': {
    margin: '0px 0px 24px',
    fontSize: '16px',
    lineHeight: '28px',
    color: COLORS.linkWater,

    '& a': {
      textDecoration: 'none',
      color: COLORS.cornflower,
      fontWeight: 600,
    },

    [MQ.md]: {
      fontSize: '20px',
      lineHeight: '32px',
    },
  },

  '& small:not(.MuiTypography-root)': {
    margin: '0px 0px 24px',
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },
};

const headerSection: SxProps = {
  pt: { _: 13, md: 20 },
  pb: 10,
};

const detailStyles: SxProps = {
  position: 'relative',
  width: '100%',
  minWidth: '30px',
  maxWidth: '30px',
  height: '30px',
  borderRadius: '100%',
  overflow: 'hidden',
  mr: 2,
};

const sessionItemStyles: SxProps = {
  '&:not(:last-of-type)': {
    mb: 3,
  },
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 2,
  gridTemplateColumns: 'repeat(1, 1fr)',
  borderBottom: `solid 1px ${COLORS.linkWater}`,
  pb: 3,

  [MQ.lg]: {
    gridTemplateColumns: '1fr 1fr 1fr .5fr .25fr',
  },
};

// TO DO: INVESTIGATE FIX FOR IMAGE RESPONSIVENESS RELATED TO HEIGHT CONCERNS
const responsiveImg: SxProps = {
  width: '100%',
  maxWidth: '450px',

  '& > span': {
    position: 'unset !important',
  },

  '& img': {
    objectFit: 'contain',
    width: '100% !important',
    position: 'relative !important',
    height: 'unset !important',
  },

  [MQ.lg]: {
    maxWidth: '100%',
  },
};

const formStyles: SxProps = {
  p: 3,
  backgroundColor: COLORS.elephant,
  borderRadius: 3,
  maxWidth: { _: '100%', md: 600 },
  my: { _: 5, md: 10 },
  mx: { _: 5, md: 'auto' },

  '& .MuiTypography-root': {
    color: COLORS.linkWater,
  },
};

interface FormValues {
  first_name: string;
  last_name: string;
  job_title: string;
  company: string;
  email: string;
  country: string;
  state: string;
  meeting_type: string;
}

const ScheduleForm = (props: EventV2Page) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);

  const schema = yup.object({
    first_name: yup.string().required('Please enter your first name'),
    last_name: yup.string().required('Please enter your last name'),
    job_title: yup.string().required('Please enter your job title'),
    company: yup.string().required('Please enter your company name'),
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
    country: yup.string().required('Please select a country'),
    state: yup.string(),
    meeting_type: yup.string().required('Please select a meeting type'),
  });

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    const token = await executeRecaptcha('schedule_meeting');
    return token;
  }, [executeRecaptcha]);

  const handleSubmit = async (values: FormValues, { setFieldError }: FormikHelpers<FormValues>) => {
    try {
      setLoading(true);

      const data = await getSessionData();

      const token = await handleReCaptchaVerify();

      const postData = {
        recaptcha_token: token,
        page_id: props.id,
        ...data,
        ...values,
      };

      const res = await axiosInstance.post('/api/schedule-meeting', postData);

      if (!res.data.recaptcha_error) {
        setFormSubmitted(true);
        setLoading(false);
      } else {
        setRecaptchaError(res.data.recaptcha_error);
        setLoading(false);
      }
    } catch (err) {
      const error = err as AxiosError;
      handleFormError('Schedule meeting request', error, setFieldError);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      job_title: '',
      company: '',
      email: '',
      country: '',
      state: '',
      meeting_type: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  const countryOptions = useMemo(() => {
    return countries.map((c) => ({ value: c.countryName, label: c.countryName }));
  }, [countries]);

  const regionOptions = useMemo(() => {
    const country = countries.find((c) => c.countryName === formik.values.country);
    if (!country) {
      return [];
    }
    return country.regions.map((r) => ({ value: r.name, label: r.name }));
  }, [formik.values.country, countries]);

  return (
    <Box sx={formStyles}>
      {!formSubmitted && !recaptchaError ? (
        <>
          <Typography variant="body_normal" sx={{ mb: 1 }}>
            Submit form below to get in touch
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <FocusError formik={formik} />
            <CTextField
              name="first_name"
              label="First Name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={formik.touched.first_name && Boolean(formik.errors.first_name)}
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <CTextField
              name="last_name"
              label="Last Name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={formik.touched.last_name && Boolean(formik.errors.last_name)}
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
            <CTextField
              name="job_title"
              label="Job Title"
              value={formik.values.job_title}
              onChange={formik.handleChange}
              error={formik.touched.job_title && Boolean(formik.errors.job_title)}
              helperText={formik.touched.job_title && formik.errors.job_title}
            />
            <CTextField
              name="company"
              label="Company"
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
            />
            <CTextField
              name="email"
              label="Business Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CSelect
              name="country"
              label="Country"
              options={[{ value: '', label: 'Select Country' }, ...countryOptions]}
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
            <CSelect
              name="state"
              label="State/Region"
              options={[{ value: '', label: 'Select State/Region' }, ...regionOptions]}
              disabled={!formik.values.country}
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
            <CSelect
              name="meeting_type"
              label="Schedule some time with us or let us know when to contact you!"
              options={[
                { value: 'Book a demo', label: 'Book a demo' },
                { value: 'Book a partner meeting', label: 'Book a partner meeting' },
                { value: 'Book a sales meeting', label: 'Book a sales meeting' },
                { value: 'Contact me after the event', label: 'Contact me after the event' },
              ]}
              value={formik.values.meeting_type}
              onChange={formik.handleChange}
              error={formik.touched.meeting_type && Boolean(formik.errors.meeting_type)}
              helperText={formik.touched.meeting_type && formik.errors.meeting_type}
            />
            <Typography sx={{ fontSize: 12, mt: 1.5 }}>
              Upbound needs the contact information you provide to us to contact you about our
              products and services. You may unsubscribe from these communications at any time. For
              information on how to unsubscribe, as well as our privacy practices and commitment to
              protecting your privacy, please review our{' '}
              <Link href={routes.privacyRoute} muiProps={{ target: '_blank', fontWeight: 700 }}>
                Privacy Policy
              </Link>
              .
            </Typography>
            <Box mt={3} textAlign="center">
              <Button
                styleType={loading ? 'disabled' : 'cornflowerContained'}
                type="submit"
                disabled={loading}
                loading={loading}
              >
                Schedule a meeting
              </Button>
            </Box>
          </form>
        </>
      ) : (
        <>
          {formSubmitted && (
            <Typography variant="body_big" textAlign="center">
              Thank you for submitting!
            </Typography>
          )}
          {recaptchaError && <Typography variant="body_big">{recaptchaError}</Typography>}
        </>
      )}
    </Box>
  );
};

interface RegisterFormValues {
  email: string;
  first_name: string;
  last_name: string;
  company: string;
  legal_consent: boolean;
}

const RegisterForm = (props: EventV2Page) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);

  const schema = yup.object({
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
    first_name: yup.string().required('Please enter your first name'),
    last_name: yup.string().required('Please enter your last name'),
    company: yup.string().required('Please enter your company name'),
    legal_consent: yup.boolean(),
  });

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    const token = await executeRecaptcha('drink_request');
    return token;
  }, [executeRecaptcha]);

  const handleSubmit = async (
    values: RegisterFormValues,
    { setFieldError }: FormikHelpers<RegisterFormValues>
  ) => {
    try {
      setLoading(true);

      const data = await getSessionData();

      const token = await handleReCaptchaVerify();

      const postData = {
        recaptcha_token: token,
        page_id: props.id,
        ...data,
        ...values,
      };

      const res = await axiosInstance.post('/api/drink-request', postData);

      if (!res.data.recaptcha_error) {
        setFormSubmitted(true);
        setLoading(false);
      } else {
        setRecaptchaError(res.data.recaptcha_error);
        setLoading(false);
      }
    } catch (err) {
      const error = err as AxiosError;
      handleFormError('Register', error, setFieldError);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      company: '',
      legal_consent: false,
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={formStyles}>
      {!formSubmitted && !recaptchaError ? (
        <>
          <Typography variant="body_normal" sx={{ mb: 1 }}>
            Submit form below to register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <FocusError formik={formik} />
            <CTextField
              name="email"
              label="Business Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CTextField
              name="first_name"
              label="First Name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={formik.touched.first_name && Boolean(formik.errors.first_name)}
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <CTextField
              name="last_name"
              label="Last Name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={formik.touched.last_name && Boolean(formik.errors.last_name)}
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
            <CTextField
              name="company"
              label="Company"
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
            />
            <Typography sx={{ fontSize: 12, my: 1.5 }}>
              Subscribe to stay in the know about exciting product announcements, educational
              material and Upbound promotions. You can always unsubscribe in the email footer. Read
              our{' '}
              <Link href={routes.privacyRoute} muiProps={{ target: '_blank', fontWeight: 700 }}>
                Privacy Policy{' '}
              </Link>
              to learn more.
            </Typography>

            <CCheckbox
              checked={formik.values.legal_consent}
              onChange={formik.handleChange}
              name="legal_consent"
              label="Yes, send me occasional emails from Upbound"
            />
            <Typography sx={{ fontSize: 12, mb: 2 }}>
              You can unsubscribe from these communications at any time. For more information on how
              to unsubscribe, our privacy practices, and how we are committed to protecting and
              respecting your privacy, please review our Privacy Policy.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              By clicking the button below you understand that Upbound will process your personal
              information in accordance with our{' '}
              <Link href={routes.privacyRoute} muiProps={{ target: '_blank', fontWeight: 700 }}>
                Privacy Policy
              </Link>
              .
            </Typography>
            <Box mt={3} textAlign="center">
              <Button
                styleType={loading ? 'disabled' : 'cornflowerContained'}
                type="submit"
                disabled={loading}
                loading={loading}
              >
                Register now
              </Button>
            </Box>
          </form>
        </>
      ) : (
        <>
          {formSubmitted && (
            <Typography variant="body_big" textAlign="center">
              Thank you for submitting!
            </Typography>
          )}
          {recaptchaError && <Typography variant="body_big">{recaptchaError}</Typography>}
        </>
      )}
    </Box>
  );
};

interface GiftFormValues {
  email: string;
}

const GiftForm = (props: EventV2Page) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);

  const schema = yup.object({
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
  });

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    const token = await executeRecaptcha('claim_gift');
    return token;
  }, [executeRecaptcha]);

  const handleSubmit = async (
    values: GiftFormValues,
    { setFieldError }: FormikHelpers<GiftFormValues>
  ) => {
    try {
      setLoading(true);

      const data = await getSessionData();

      const token = await handleReCaptchaVerify();

      const postData = {
        recaptcha_token: token,
        ...data,
        ...values,
      };

      const res = await axiosInstance.post('/api/claim-gift', postData);

      if (!res.data.recaptcha_error) {
        setFormSubmitted(true);
        setLoading(false);
      } else {
        setRecaptchaError(res.data.recaptcha_error);
        setLoading(false);
      }
    } catch (err) {
      const error = err as AxiosError;
      handleFormError('Claim Submit', error, setFieldError);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={{ maxWidth: { _: '100%', md: 500 } }}>
      {!formSubmitted && !recaptchaError ? (
        <>
          <Typography variant="body_normal" sx={{ mb: 1 }}>
            {props.section_4_form_title}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <CTextField
              name="email"
              label="Email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Box mt={3}>
              <Button
                styleType={loading ? 'disabled' : 'cornflowerContained'}
                type="submit"
                disabled={loading}
                loading={loading}
                endIcon={<ArrowRight />}
              >
                Submit to claim
              </Button>
            </Box>
          </form>
        </>
      ) : (
        <>
          {formSubmitted && <Typography variant="body_big">Thank you for submitting!</Typography>}
          {recaptchaError && <Typography variant="body_big">{recaptchaError}</Typography>}
        </>
      )}
    </Box>
  );
};

const SessionItem = ({ sessionItem }: { sessionItem: SpeakingSessionV2 }) => {
  const { session_name, speaker, date_time, room, link } = sessionItem;

  return (
    <Box sx={sessionItemStyles}>
      <Link href={link} muiProps={{ target: '_blank' }}>
        <Box sx={gridLayout}>
          <Box>
            <Typography variant="body_small" component="span" fontWeight={600}>
              {session_name}
            </Typography>
          </Box>
          <Typography variant="body_small">{speaker}</Typography>
          <Typography variant="body_small">{date_time}</Typography>
          <Typography variant="body_small">{room}</Typography>
          <Box
            sx={{
              display: { _: 'none', lg: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowRightRounded height={50} color={COLORS.cornflower} />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

const SessionItemSection = ({ section_1_items }: { section_1_items: SpeakingSessionsV2 }) => {
  return (
    <>
      {section_1_items.map((item) => (
        <SessionItem key={item.id} sessionItem={item} />
      ))}
    </>
  );
};

type Props = {
  isPreview?: boolean;
} & EventV2Page;

const EventV2 = (props: Props) => {
  const [openSchedule, setOpenSchedule] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenSchedule = () => setOpenSchedule(true);
  const handleOpenRegister = () => setOpenRegister(true);

  const startDate = useMemo(() => {
    if (!props.start_date) {
      return null;
    }
    return format(new Date(props.start_date), 'MMM dd, yyyy');
  }, [props.start_date]);

  const endDate = useMemo(() => {
    if (!props.end_date) {
      return null;
    }
    return format(new Date(props.end_date), 'MMM dd, yyyy');
  }, [props.end_date]);

  return (
    <PageProvider cms_head_props={props.cms_head_props} isPreview={props.isPreview} hideCTACard>
      <Box sx={root}>
        <Section sx={headerSection}>
          <Box
            sx={{
              [MQ.lg]: {
                display: 'flex',
                flexDirection: 'row',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                width: '100%',
                [MQ.lg]: {
                  width: '50%',
                },
              }}
            >
              <Typography variant="h2_new" sx={{ mb: 3 }}>
                {props.header_title}
              </Typography>
              <DangerousDiv content={props.header_richtext} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                [MQ.lg]: {
                  position: 'relative',
                  width: '50%',
                  minHeight: '100%',
                },
              }}
            >
              <Box
                sx={{
                  pl: { _: 0, lg: '100px' },
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={detailStyles}>
                      <Image src={eventDate} alt="date icon" layout="fill" objectFit="cover" />
                    </Box>
                    <Box>
                      <Typography variant="body_normal">
                        {startDate && <>{startDate}</>} - {endDate && <>{endDate}</>}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={detailStyles}>
                      <Image
                        src={eventLocation}
                        alt="location icon"
                        layout="fill"
                        objectFit="cover"
                      />
                    </Box>
                    <Box>
                      <Typography variant="body_normal">{props.location}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={detailStyles}>
                      <Image src={eventBooth} alt="booth icon" layout="fill" objectFit="cover" />
                    </Box>
                    <Box>
                      <Typography variant="body_normal">{props.booth_number}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={responsiveImg}>
                  {props.header_image && props.header_image[0] && (
                    <CMSImage value={props.header_image[0].value} layout="fill" priority />
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Section>
        <Section bgcolor angleTop="topRight" sx={{ pt: 20, pb: 15 }}>
          <Box>
            <Typography variant="h3_new" sx={{ mb: 5, textAlign: 'center' }}>
              {props.section_1_title}
            </Typography>
            <SessionItemSection section_1_items={props.section_1_items} />
          </Box>
        </Section>
        {props.section_2_title && (
          <Section sx={{ pt: 15, pb: 10 }}>
            <Box
              sx={{
                [MQ.md]: {
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                },
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  display: { _: 'block', md: 'none' },
                  mb: 5,
                }}
              >
                <Box>
                  <Box sx={responsiveImg}>
                    {props.section_2_image && props.section_2_image[0] && (
                      <CMSImage value={props.section_2_image[0].value} layout="fill" priority />
                    )}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  [MQ.md]: {
                    width: '50%',
                  },
                }}
              >
                <Typography variant="h3_new" sx={{ mb: 3 }}>
                  {props.section_2_title}
                </Typography>
                <DangerousDiv content={props.section_2_richtext} />
                <Button
                  styleType={props.section_2_button_style_type}
                  endIcon={<ArrowRight />}
                  onClick={handleOpenSchedule}
                >
                  {props.section_2_button_text}
                </Button>
                <Modal
                  open={openSchedule}
                  onClose={() => setOpenSchedule(false)}
                  aria-labelledby="schedule-meeting"
                  aria-describedby="schedule-meeting-modal"
                  sx={{ overflow: 'scroll' }}
                >
                  <>
                    <Box
                      sx={{
                        color: COLORS.linkWater,
                        position: 'fixed',
                        top: '3rem',
                        right: '3rem',
                        cursor: 'pointer',
                        zIndex: 1,
                      }}
                    >
                      <CloseIcon
                        onClick={() => setOpenSchedule(false)}
                        fontSize="large"
                        color="inherit"
                      />
                    </Box>
                    <ScheduleForm {...props} />
                  </>
                </Modal>
              </Box>
              <Box
                sx={{
                  width: '50%',
                  display: { _: 'none', md: 'block' },
                }}
              >
                <Box sx={{ pl: '50px' }}>
                  <Box sx={responsiveImg}>
                    {props.section_2_image && props.section_2_image[0] && (
                      <CMSImage value={props.section_2_image[0].value} layout="fill" priority />
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Section>
        )}
        {props.section_3_title && (
          <Section sx={{ pb: 10 }}>
            <Box
              sx={{
                [MQ.md]: {
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                },
              }}
            >
              <Box
                sx={{
                  width: { _: '100%', md: '50%' },
                  mb: { _: 5, md: 0 },
                }}
              >
                <Box sx={{ pr: { _: 0, md: '50px' } }}>
                  <Box sx={responsiveImg}>
                    {props.section_3_image && props.section_3_image[0] && (
                      <CMSImage value={props.section_3_image[0].value} layout="fill" priority />
                    )}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: { _: '100%', md: '50%' },
                }}
              >
                <Typography variant="h3_new" sx={{ mb: 3 }}>
                  {props.section_3_title}
                </Typography>
                <DangerousDiv content={props.section_3_richtext} />
                <Button
                  styleType={props.section_3_button_style_type}
                  endIcon={<ArrowRight />}
                  onClick={handleOpenRegister}
                >
                  {props.section_3_button_text}
                </Button>
                <Modal
                  open={openRegister}
                  onClose={() => setOpenRegister(false)}
                  aria-labelledby="register"
                  aria-describedby="register-modal"
                  sx={{ overflow: 'scroll' }}
                >
                  <>
                    <Box
                      sx={{
                        color: COLORS.linkWater,
                        position: 'fixed',
                        top: '3rem',
                        right: '3rem',
                        cursor: 'pointer',
                        zIndex: 1,
                      }}
                    >
                      <CloseIcon
                        onClick={() => setOpenRegister(false)}
                        fontSize="large"
                        color="inherit"
                      />
                    </Box>
                    <RegisterForm {...props} />
                  </>
                </Modal>
              </Box>
            </Box>
          </Section>
        )}
        {props.section_4_title && (
          <Section bgcolor angleTop="topRight" sx={{ pt: 15, pb: 10 }}>
            <Box
              sx={{
                [MQ.lg]: {
                  display: 'flex',
                  flexDirection: 'row',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  color: COLORS.linkWater,
                  [MQ.lg]: {
                    width: '60%',
                  },
                }}
              >
                <Typography variant="h3_new" sx={{ mb: 3 }}>
                  {props.section_4_title}
                </Typography>
                <DangerousDiv content={props.section_3_richtext} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  [MQ.lg]: {
                    width: '40%',
                  },
                }}
              >
                <Box sx={{ pl: { _: 0, lg: '50px' } }}>
                  <GiftForm {...props} />
                </Box>
              </Box>
            </Box>
          </Section>
        )}
      </Box>
    </PageProvider>
  );
};

export default EventV2;

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = [];
  try {
    const res = await axiosInstance.get(`/api/v2/pages/?type=app.EventV2DetailPage`);
    const events = res.data.items;

    paths = events.map((event: { meta: { slug: string } }) => ({
      params: { slug: event.meta.slug },
    }));
  } catch (error) {
    console.log('get EventV2DetailPage paths', error);
  }

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(context, `/event/${context?.params?.slug}`);

  if (returnValue) {
    return {
      props: returnValue,
    };
  } else {
    return {
      notFound: true,
    };
  }
};
