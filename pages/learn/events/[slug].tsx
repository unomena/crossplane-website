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

import countries from 'country-region-data/data.json';

import handleGetStaticProps from 'src-new/utils/handleGetStaticProps';
import axiosInstance from 'src-new/utils/axiosInstance';
import handleFormError from 'src-new/utils/handleFormError';
import getSessionData from 'src-new/utils/getSessionData';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';
import CSelect from 'src-new/elements/CSelect';
import Link from 'src-new/elements/Link';

import eventBooth from 'public/new-images/icons/event-booth-icon.svg';
import eventDate from 'public/new-images/icons/event-date-icon.svg';
import eventLocation from 'public/new-images/icons/event-location-icon.svg';
import ArrowRight from 'src-new/svg/ArrowRight';
import ArrowRightRounded from 'src-new/svg/ArrowRightRounded';
import CloseIcon from '@mui/icons-material/Close';
import { format } from 'date-fns';

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

const ScheduleForm = (props: EventPage) => {
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

interface GiftFormValues {
  email: string;
}

const GiftForm = (props: EventPage) => {
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
            {props.section_3_form_title}
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

const SessionItem = ({ sessionItem }: { sessionItem: SpeakingSession }) => {
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

const SessionItemSection = ({ section_1_items }: { section_1_items: SpeakingSessions }) => {
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
} & EventPage;

const Event = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

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
              <div dangerouslySetInnerHTML={{ __html: props.header_richtext }}></div>
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
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={detailStyles}>
                    <Image src={eventDate} alt="placeholder" layout="fill" objectFit="cover" />
                  </Box>
                  <Box>
                    <Typography variant="body_normal">
                      {startDate && <>{startDate}</>} - {endDate && <>{endDate}</>}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={detailStyles}>
                    <Image src={eventLocation} alt="placeholder" layout="fill" objectFit="cover" />
                  </Box>
                  <Box>
                    <Typography variant="body_normal">{props.location}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={detailStyles}>
                    <Image src={eventBooth} alt="placeholder" layout="fill" objectFit="cover" />
                  </Box>
                  <Box>
                    <Typography variant="body_normal">{props.booth_number}</Typography>
                  </Box>
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
        <Section sx={{ pt: 15, pb: 10 }}>
          <Box
            sx={{
              [MQ.lg]: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              },
            }}
          >
            <Box
              sx={{
                [MQ.lg]: {
                  width: '50%',
                },
              }}
            >
              <Typography variant="h3_new" sx={{ mb: 3 }}>
                {props.section_2_title}
              </Typography>
              <div dangerouslySetInnerHTML={{ __html: props.section_2_richtext }}></div>
              <Button
                styleType={props.section_2_button_style_type}
                endIcon={<ArrowRight />}
                onClick={handleOpen}
              >
                {props.section_2_button_text}
              </Button>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
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
                    }}
                  >
                    <CloseIcon onClick={() => setOpen(false)} fontSize="large" color="inherit" />
                  </Box>
                  <ScheduleForm {...props} />
                </>
              </Modal>
            </Box>
          </Box>
        </Section>
        {props.section_3_title && (
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
                  {props.section_3_title}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: props.section_3_richtext }}></div>
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

export default Event;

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = [];
  try {
    const res = await axiosInstance.get(`/api/v2/pages/?type=app.EventDetailPage`);
    const events = res.data.items;

    paths = events.map((event: { meta: { slug: string } }) => ({
      params: { slug: event.meta.slug },
    }));
  } catch (error) {
    console.log('get EventDetailPage paths', error);
  }

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(context, `/learn/events/${context?.params?.slug}`);

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
