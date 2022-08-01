import React, { useCallback, useState } from 'react';

// import Image from 'next/image';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { AxiosError } from 'axios';

import * as routes from 'src/routes';

import { Img } from 'src/elements/Img';

import axiosInstance from 'src-new/utils/axiosInstance';
import handleFormError from 'src-new/utils/handleFormError';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';
import CCheckbox from 'src-new/elements/CCheckbox';
import Link from 'src-new/elements/Link';

import twitterLogo from 'public/twitter.svg';
import slackLogo from 'public/slack.svg';

// import headerBg from 'public/new-images/home-page/header-bg.jpg';
// import placeHolder from 'public/new-images/Whitepaper-mockup.png';
// import ArrowRight from 'src-new/svg/ArrowRight';
// import CheckIcon from 'public/new-images/icons/check.svg';

const headerSection: SxProps = {
  pt: { _: 13, md: 20 },
  pb: 10,
  textAlign: 'center',
  // backgroundImage: `url(${headerBg.src})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'top center',

  // '@media screen and (min-width: 1980px)': {
  //   backgroundSize: 'contain',
  // },
};

const formStyles: SxProps = {
  m: 0,
  p: 3,
  pb: 4.25,
  backgroundColor: COLORS.elephant,
  borderRadius: 3,

  '& .MuiTypography-root': {
    color: COLORS.linkWater,
  },
  '& .MuiFormControlLabel-root': {
    display: 'block',
  },
};

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  become_a_partner: boolean;
  partner_with_upbound: boolean;
  vendor_support_for_crossplane: boolean;
  legal_consent: boolean;
}

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);

  const schema = yup.object({
    first_name: yup.string().required('Please enter your name'),
    last_name: yup.string().required('Please enter your surname'),
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
    company: yup.string().required('Please enter your company name'),
    become_a_partner: yup.boolean(),
    partner_with_upbound: yup.boolean(),
    vendor_support_for_crossplane: yup.boolean(),
    legal_consent: yup.boolean(),
  });

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    const token = await executeRecaptcha('resource_request');
    return token;
  }, [executeRecaptcha]);

  const handleSubmit = async (values: FormValues, { setFieldError }: FormikHelpers<FormValues>) => {
    try {
      setLoading(true);

      const token = await handleReCaptchaVerify();

      const postData = {
        recaptcha_token: token,
        ...values,
      };

      const res = await axiosInstance.post('/api/contact-request', postData);

      if (!res.data.recaptcha_error) {
        setFormSubmitted(true);
        setLoading(false);
      } else {
        setRecaptchaError(res.data.recaptcha_error);
        setLoading(false);
      }
    } catch (err) {
      const error = err as AxiosError;
      handleFormError('Submit', error, setFieldError);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      become_a_partner: false,
      partner_with_upbound: false,
      vendor_support_for_crossplane: false,
      legal_consent: false,
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={formStyles}>
      {!formSubmitted && !recaptchaError ? (
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              [MQ.sm]: {
                display: 'flex',
                alignItems: 'center',
              },
            }}
          >
            <Box
              sx={{
                [MQ.sm]: {
                  mr: 1,
                  width: '50%',
                },
              }}
            >
              <CTextField
                name="first_name"
                label="Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
            </Box>
            <Box
              sx={{
                [MQ.sm]: {
                  ml: 1,
                  width: '50%',
                },
              }}
            >
              <CTextField
                name="last_name"
                label="Surname"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Box>
          </Box>
          <CTextField
            name="email"
            label="Business Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <CTextField
            name="company"
            label="Company"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
          />
          <Box sx={{ mt: 3, mb: 2 }}>
            <Typography variant="body_big">We'd love a little context</Typography>
            <Typography variant="body_small">
              What best describes your interest in Upbound?
            </Typography>
          </Box>
          <CCheckbox
            checked={formik.values.legal_consent}
            onChange={formik.handleChange}
            name="become_a_partner"
            label="Interested in becoming an Upbound customer"
          />
          <CCheckbox
            checked={formik.values.legal_consent}
            onChange={formik.handleChange}
            name="partner_with_upbound"
            label="Interested in partnering with Upbound"
          />
          <CCheckbox
            checked={formik.values.legal_consent}
            onChange={formik.handleChange}
            name="vendor_support_for_crossplane"
            label="Interested in vendor support for Crossplane"
          />
          <Box sx={{ mt: 3, mb: 2 }}>
            <Typography variant="body_big">Stay in the loop</Typography>
            <Typography variant="body_small">
              Subscribe to stay in the know about exciting product announcements, educational
              material and Upbound promotions. You can always unsubscribe in the email footer. Read
              our Privacy Policy to learn more.
            </Typography>
          </Box>
          <CCheckbox
            checked={formik.values.legal_consent}
            onChange={formik.handleChange}
            name="legal_consent"
            label="Yes, send me occasional emails from Upbound"
          />
          <Typography sx={{ fontSize: 12, mt: 3 }}>
            By clicking the button below you understand that Upbound will process your personal
            information in accordance with our{' '}
            <Link href={routes.privacyRoute} muiProps={{ target: '_blank', fontWeight: 700 }}>
              Privacy Policy
            </Link>
            .
          </Typography>{' '}
          <Box mt={5} textAlign="center">
            <Button
              styleType={loading ? 'disabled' : 'cornflowerContained'}
              type="submit"
              disabled={loading}
              loading={loading}
            >
              SUBMIT
            </Button>
          </Box>
        </form>
      ) : (
        <>
          {formSubmitted && <Typography variant="body_big">Thank you for submitting!</Typography>}
          {recaptchaError && <Typography variant="body_big">{recaptchaError}</Typography>}
        </>
      )}
    </Box>
  );
};

type Props = {};

const ContactPage = ({}: Props) => {
  return (
    <PageProvider hideCTACard removeFooterPadding>
      <Section sx={headerSection}>
        <Box>
          <Typography variant="h2_new" sx={{ mb: 3 }}>
            Drop us a note.
          </Typography>
          <Typography variant="body_big">
            Interested in talking to Upbound? We'd love to hear from you! Please fill out the form
            below and an Upbound and Crossplane expert will reach out to you shortly.
          </Typography>
        </Box>
      </Section>
      <Section>
        <ContactForm />
      </Section>
      <Section>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 5,
          }}
        >
          <Link href={routes.crossplaneSlackUrl} muiProps={{ target: '_blank', mr: 2 }}>
            <Img src={slackLogo} alt="Slack" width={32} />
          </Link>
          <Link href={routes.twitterUrl} muiProps={{ target: '_blank' }}>
            <Img src={twitterLogo} alt="Twitter" width={32} />
          </Link>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default ContactPage;
