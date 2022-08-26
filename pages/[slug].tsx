import React, { useCallback, useState } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import { COLORS } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useFormik, FormikHelpers } from 'formik';
import { FocusError } from 'focus-formik-error';
import * as yup from 'yup';

import { AxiosError } from 'axios';

import * as routes from 'src/routes';

import { Img } from 'src/elements/Img';

import handleGetStaticProps from 'src-new/utils/handleGetStaticProps';
import axiosInstance from 'src-new/utils/axiosInstance';
import handleFormError from 'src-new/utils/handleFormError';
import getSessionData from 'src-new/utils/getSessionData';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';
import CCheckbox from 'src-new/elements/CCheckbox';
import Link from 'src-new/elements/Link';

import twitterLogo from 'public/twitter.svg';
import slackLogo from 'public/slack.svg';

const headerSection: SxProps = {
  pt: { _: 13, md: 20 },
  pb: 10,
  textAlign: 'center',
};

const formStyles: SxProps = {
  m: '0 auto',
  p: 3,
  // pb: 4.25,
  backgroundColor: COLORS.elephant,
  borderRadius: 3,
  maxWidth: '630px',

  '& .MuiTypography-root': {
    color: COLORS.linkWater,
  },
};

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  become_customer: boolean;
  become_partner: boolean;
  crossplane_vendor_support: boolean;
  legal_consent: boolean;
}

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);

  const schema = yup.object({
    first_name: yup.string().required('Please enter your first name'),
    last_name: yup.string().required('Please enter your last name'),
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
    company: yup.string().required('Please enter your company name'),
    become_customer: yup.boolean(),
    become_partner: yup.boolean(),
    crossplane_vendor_support: yup.boolean(),
    legal_consent: yup.boolean(),
  });

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    const token = await executeRecaptcha('contact_request');
    return token;
  }, [executeRecaptcha]);

  const handleSubmit = async (values: FormValues, { setFieldError }: FormikHelpers<FormValues>) => {
    try {
      setLoading(true);

      const data = await getSessionData();

      const token = await handleReCaptchaVerify();

      const postData = {
        recaptcha_token: token,
        ...data,
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
      document.body.scrollTo(0, 0);
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
      become_customer: false,
      become_partner: false,
      crossplane_vendor_support: false,
      legal_consent: false,
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={formStyles}>
      {!formSubmitted && !recaptchaError ? (
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
            checked={formik.values.become_customer}
            onChange={formik.handleChange}
            name="become_customer"
            label="Interested in becoming an Upbound customer"
          />
          <CCheckbox
            checked={formik.values.become_partner}
            onChange={formik.handleChange}
            name="become_partner"
            label="Interested in partnering with Upbound"
          />
          <CCheckbox
            checked={formik.values.crossplane_vendor_support}
            onChange={formik.handleChange}
            name="crossplane_vendor_support"
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
          {formSubmitted && (
            <Typography variant="body_big" textAlign="center">
              Thank you for submitting!
            </Typography>
          )}
          {recaptchaError && (
            <Typography variant="body_big" textAlign="center">
              {recaptchaError}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

type Props = {
  isPreview?: boolean;
} & ContactPage;

const Contact = (props: Props) => {
  return (
    <PageProvider
      hideCTACard
      removeFooterPadding
      cms_head_props={props.cms_head_props}
      isPreview={props.isPreview}
    >
      <Section sx={headerSection}>
        <Box>
          <Typography variant="h2_new" sx={{ mb: 3 }}>
            {props.header_title}
          </Typography>
          <Typography variant="body_big">{props.header_text}</Typography>
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

export default Contact;

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = [];
  try {
    const res = await axiosInstance.get(`/api/v2/pages/?type=app.ContactPage`);
    // const res = await axiosInstance.get(`/api/v2/pages/?type=${ContactPage}&fields=relative_url`);
    const contactPages = res.data.items;

    paths = contactPages.map((contactpage: { meta: { slug: string } }) => ({
      params: { slug: contactpage.meta.slug },
    }));
  } catch (error) {
    console.log('get ContactPage paths', error);
  }

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(context, `/${context?.params?.slug}`);

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
