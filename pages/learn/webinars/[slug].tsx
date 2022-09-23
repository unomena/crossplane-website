import React, { useCallback, useMemo, useState } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { AxiosError } from 'axios';

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
import CMSImage from 'src-new/elements/CMSImage';

const root: SxProps = {
  '& h3:not(.MuiTypography-root)': {
    margin: '0px 0px 24px',
    fontFamily: 'Avenir-Black, Arial, sans-serif',
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '-0.25px',
    color: COLORS.linkWater,

    [MQ.md]: {
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '-0.4px',
    },
  },

  '& p:not(.MuiTypography-root)': {
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

const listStyles: SxProps = {
  '& ul': {
    pl: 2,
    py: 0,
    listStyle: 'disc',

    '& li': {
      display: 'list-item',
      pl: '8px',
      color: COLORS.linkWater,
      '&::marker': {
        color: COLORS.sun,
      },
    },
  },
};

const speakerItemStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',

  '&:not(:last-of-type)': {
    mb: 3,
  },
};

const speakerCardStyles: SxProps = {
  bgcolor: COLORS.elephant,
  borderRadius: '10px',
  p: 5,

  '&:not(:last-of-type)': {
    mb: 5,
  },

  [MQ.sm]: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const formStyles: SxProps = {
  m: 0,
  p: 3,
  backgroundColor: COLORS.elephant,
  borderRadius: 3,

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
  legal_consent: boolean;
}

const HeaderForm = (props: WebinarPage) => {
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
    legal_consent: yup.boolean(),
  });

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    const token = await executeRecaptcha('webinar_request');
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

      const res = await axiosInstance.post('/api/webinar-request', postData);

      if (!res.data.recaptcha_error) {
        setFormSubmitted(true);
        setLoading(false);

        if (res.data.resource) {
          window.open(res.data.resource, '_blank');
        }
      } else {
        setRecaptchaError(res.data.recaptcha_error);
        setLoading(false);
      }
    } catch (err) {
      const error = err as AxiosError;
      handleFormError('Request Submit', error, setFieldError);
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
      legal_consent: false,
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
            <CCheckbox
              checked={formik.values.legal_consent}
              onChange={formik.handleChange}
              name="legal_consent"
              label="Yes, send me occasional emails from Upbound"
            />
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
                Request webinar
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

const SpeakerListItem = ({ speakerListItem }: { speakerListItem: SpeakerCard }) => {
  const { image, name, job_title } = speakerListItem;

  return (
    <Box sx={speakerItemStyles}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minWidth: '100px',
          maxWidth: '100px',
          height: '100px',
          borderRadius: '100%',
          overflow: 'hidden',
          mr: 4,
        }}
      >
        {image && image[0] && <CMSImage value={image[0].value} layout="fill" objectFit="cover" />}
      </Box>
      <Box>
        <Typography variant="body_small" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="body_small">{job_title}</Typography>
      </Box>
    </Box>
  );
};

const SpeakerListItemSection = ({ speaker_items }: { speaker_items: SpeakerCards }) => {
  return (
    <>
      {speaker_items.map((item) => (
        <SpeakerListItem key={item.id} speakerListItem={item} />
      ))}
    </>
  );
};

const SpeakerCard = ({ speakerCard }: { speakerCard: SpeakerCard }) => {
  const { image, name, job_title, company, bio } = speakerCard;

  return (
    <Box sx={speakerCardStyles}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minWidth: '120px',
          maxWidth: '120px',
          height: '120px',
          borderRadius: '100%',
          overflow: 'hidden',
          mb: { _: 3, sm: 0 },

          [MQ.sm]: {
            mr: 4,
          },
        }}
      >
        {image && image[0] && <CMSImage value={image[0].value} layout="fill" objectFit="cover" />}
      </Box>
      <Box>
        <Box sx={{ display: { _: 'block', sm: 'flex' } }}>
          <Typography variant="body_normal" sx={{ mb: 2 }}>
            <Typography variant="body_normal" component="span" sx={{ fontWeight: 600 }}>
              {name}
            </Typography>
            , {job_title}, {company}
          </Typography>
        </Box>
        <Typography variant="body_small">{bio}</Typography>
      </Box>
    </Box>
  );
};

const SpeakerCardSection = ({ speaker_items }: { speaker_items: SpeakerCards }) => {
  return (
    <>
      {speaker_items.map((item) => (
        <SpeakerCard key={item.id} speakerCard={item} />
      ))}
    </>
  );
};

type Props = {
  isPreview?: boolean;
} & WebinarPage;

const Webinar = (props: Props) => {
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
              <Typography variant="body_big" sx={{ mb: 5 }}>
                {props.header_text}
              </Typography>
              <SpeakerListItemSection speaker_items={props.speaker_items} />
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
                <HeaderForm {...props} />
              </Box>
            </Box>
          </Box>
        </Section>
        <Section sx={{ pb: 10 }}>
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
                [MQ.lg]: {
                  flex: 1,
                  width: '50%',
                },
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: props.section_1_left_richtext }}></div>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                [MQ.lg]: {
                  flex: 1,
                  width: '50%',
                },
              }}
            >
              <Box sx={{ pl: { _: 0, lg: '100px' }, pt: { _: 4, lg: 0 } }}>
                <Box sx={listStyles}>
                  <div dangerouslySetInnerHTML={{ __html: props.section_1_right_richtext }}></div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Section>
        <Section sx={{ pb: 10 }}>
          <Box>
            <Typography variant="h3_new" sx={{ mb: 5, textAlign: 'center' }}>
              {props.section_2_title}
            </Typography>
            <SpeakerCardSection speaker_items={props.speaker_items} />
          </Box>
        </Section>
        <Section bgcolor angleTop="topRight" sx={{ pt: 15, pb: 10 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3_new" sx={{ mb: 3 }}>
              {props.section_3_title}
            </Typography>
            <Box sx={{ maxWidth: '700px', mx: 'auto' }}>
              <Typography variant="body_normal" sx={{ mb: 5 }}>
                {props.section_3_text}
              </Typography>
            </Box>
            {props.section_3_button && props.section_3_button[0] && (
              <Button cmsValue={props.section_3_button[0].value}>
                {props.section_3_button[0].value.text}
              </Button>
            )}
          </Box>
        </Section>
      </Box>
    </PageProvider>
  );
};

export default Webinar;

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = [];
  try {
    const res = await axiosInstance.get(`/api/v2/pages/?type=app.webinardetailpage`);
    const webinars = res.data.items;

    paths = webinars.map((webinar: { meta: { slug: string } }) => ({
      params: { slug: webinar.meta.slug },
    }));
  } catch (error) {
    console.log('get WebinarDetailPage paths', error);
  }

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(
    context,
    `/learn/webinars/${context?.params?.slug}`
  );

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
