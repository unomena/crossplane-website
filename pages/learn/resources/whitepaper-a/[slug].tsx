import React, { useCallback, useMemo, useState } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useFormik, FormikHelpers } from 'formik';
import { FocusError } from 'focus-formik-error';
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
import CornerCard from 'src-new/elements/CornerCard';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';
import CSelect from 'src-new/elements/CSelect';
import CCheckbox from 'src-new/elements/CCheckbox';
import Link from 'src-new/elements/Link';
import CMSImage from 'src-new/elements/CMSImage';

import smallHeroBg from 'public/new-images/home-page/sml-hero-bg.jpg';

const headerSection: SxProps = {
  pt: { _: 13, md: 20 },
  pb: 10,
  backgroundImage: `url(${smallHeroBg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',

  '@media screen and (min-width: 1980px)': {
    backgroundSize: 'contain',
  },
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 2,
  gridTemplateColumns: 'repeat(1, 1fr)',

  '& > div:hover': {
    backgroundImage: 'linear-gradient(-45deg, transparent 42px, #1B3549 0 100%)',
  },

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};
const formStyles: SxProps = {
  m: 0,
  p: 3,
  backgroundColor: COLORS.elephant,
  borderRadius: 3,

  '& .MuiTypography-root:not(.MuiLink-root)': {
    color: COLORS.linkWater,
  },
};

// TO DO: INVESTIGATE FIX FOR IMAGE RESPONSIVENESS RELATED TO HEIGHT CONCERNS
const responsiveImg: SxProps = {
  width: '100%',

  '& > span': {
    position: 'unset !important',
  },

  '& img': {
    objectFit: 'contain',
    width: '100% !important',
    position: 'relative !important',
    height: 'unset !important',
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

const HeaderForm = (props: WhitepaperAPage) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [showMore, setShowMore] = useState(false);
  const onClick = () => setShowMore(true);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resourceLink, setResourceLink] = useState('');
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
    const token = await executeRecaptcha('resource_request');
    return token;
  }, [executeRecaptcha]);

  const handleSubmit = async (values: FormValues, { setFieldError }: FormikHelpers<FormValues>) => {
    try {
      setLoading(true);

      const data = await getSessionData();

      const token = await handleReCaptchaVerify();

      const postData = {
        page_version: 'v1',
        recaptcha_token: token,
        page_id: props.id,
        ...data,
        ...values,
      };

      const res = await axiosInstance.post('/api/resource-request', postData);

      if (!res.data.recaptcha_error) {
        setFormSubmitted(true);
        setLoading(false);

        if (res.data.resource) {
          setResourceLink(res.data.resource);
          window.open(res.data.resource, '_blank');
        }
      } else {
        setRecaptchaError(res.data.recaptcha_error);
        setLoading(false);
      }
    } catch (err) {
      const error = err as AxiosError;
      handleFormError('WhitePaper Submit', error, setFieldError, setRecaptchaError);
      setLoading(false);
    }
    document.body.scrollTo(0, 0);
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
            Submit your contact info below to download
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <FocusError formik={formik} />
            <Box
              sx={{
                [MQ.sm]: {
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            >
              <CTextField
                name="email"
                label="Business Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              {!showMore ? (
                <Box
                  sx={{
                    mt: 2,
                    textAlign: 'center',

                    [MQ.sm]: {
                      ml: 2,
                      mt: 0,
                      textAlign: 'left',
                    },
                  }}
                >
                  <Button
                    styleType="cornflowerContained"
                    onClick={onClick}
                    sx={{ minWidth: '180px' }}
                  >
                    Download Now
                  </Button>
                </Box>
              ) : null}
            </Box>
            {showMore ? (
              <>
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
                  By clicking the button below you understand that Upbound will process your
                  personal information in accordance with our{' '}
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
                    Download Whitepaper
                  </Button>
                </Box>
              </>
            ) : null}
          </form>
        </>
      ) : (
        <>
          {formSubmitted && (
            <>
              <Typography sx={{ fontSize: '28px', fontWeight: 700, mb: 2 }}>Thank you!</Typography>
              <Typography variant="body_normal" mb={2}>
                Thanks for downloading our latest whitepaper. Issues downloading? Re-download{' '}
                <Link
                  href={resourceLink}
                  muiProps={{ target: '_blank', fontWeight: 700, color: COLORS.cornflower }}
                >
                  here
                </Link>
                .
              </Typography>
              <Typography variant="body_normal" mb={3}>
                Like our content? There’s more! Check our blog for more info.
              </Typography>
              <Button
                styleType="cornflowerContained"
                href={routes.upboundBlogUrl}
                target="_blank"
                sx={{ mb: 1 }}
              >
                Read blog
              </Button>
            </>
          )}
          {recaptchaError && <Typography variant="body_big">{recaptchaError}</Typography>}
        </>
      )}
    </Box>
  );
};

const CornerCardItem = ({ cornerCardItem }: { cornerCardItem: WhitepaperACard }) => {
  const { image, title, text } = cornerCardItem;

  return (
    <CornerCard iconSize="small">
      <Box display="flex" flexDirection="column">
        <Box sx={{ position: 'relative', width: '48px', height: '48px', mb: 3 }}>
          {image && image[0] && (
            <CMSImage value={image[0].value} layout="intrinsic" objectFit="contain" />
          )}
        </Box>
        <Box flex={1}>
          <Typography
            variant="h4_new"
            sx={{
              mb: 3,
              lineHeight: '34px',
            }}
          >
            {title}
          </Typography>
          <Typography variant="body_small">{text}</Typography>
        </Box>
      </Box>
    </CornerCard>
  );
};

const CardSection = ({ section_1_card_items }: { section_1_card_items: WhitepaperACards }) => {
  return (
    <Box sx={{ my: { _: 7.5, md: 10 }, ...gridLayout }}>
      {section_1_card_items.map((item) => (
        <CornerCardItem key={item.id} cornerCardItem={item} />
      ))}
    </Box>
  );
};

// const displayTitle = 'Products - The Universal Cloud Platform';
// const metaImg = OGImgProducts.src;

type Props = {
  isPreview?: boolean;
} & WhitepaperAPage;

const WhitepaperA = (props: Props) => {
  return (
    <PageProvider
      cms_head_props={props.cms_head_props}
      isPreview={props.isPreview}
      ctaTitle={props.contact_title}
      ctaParagraph={props.contact_text}
      ctaBtnText={
        props.contact_button && props.contact_button[0] && props.contact_button[0].value?.text
      }
      ctaBtnLink={
        props.contact_button && props.contact_button[0] && props.contact_button[0].value?.link
          ? props.contact_button[0].value.link[0].value
          : undefined
      }
    >
      <Section sx={headerSection}>
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
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              width: '100%',
              [MQ.lg]: {
                width: '55%',
              },
            }}
          >
            <Typography variant="h2_new" sx={{ mb: 3 }}>
              {props.header_title}
            </Typography>
            <Typography variant="body_big" sx={{ mb: 5 }}>
              {props.header_text}
            </Typography>
            <HeaderForm {...props} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              [MQ.lg]: {
                width: '45%',
              },
            }}
          >
            <Box sx={{ pl: { _: 0, lg: '100px' } }}>
              <Box sx={responsiveImg}>
                {props.header_image && props.header_image[0] && (
                  <CMSImage value={props.header_image[0].value} layout="fill" priority />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 20, pb: { _: 10, lg: 30 } }}>
        <Box textAlign="center">
          <Typography variant="h2_new" sx={{ mb: 3.75 }}>
            {props.section_1_title}
          </Typography>
          <Typography variant="body_normal" sx={{ maxWidth: '886px', mx: 'auto' }}>
            {props.section_1_text}
          </Typography>
        </Box>
        <CardSection section_1_card_items={props.section_1_card_items} />
      </Section>
    </PageProvider>
  );
};

export default WhitepaperA;

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = [];
  try {
    const res = await axiosInstance.get(`/api/v2/pages/?type=app.ResourceDetailPageV1`);
    const whitepapers = res.data.items;

    paths = whitepapers.map((whitepaper: { meta: { slug: string } }) => ({
      params: { slug: whitepaper.meta.slug },
    }));
  } catch (error) {
    console.log('get ResourceDetailPage paths', error);
  }

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(
    context,
    `/learn/resources/whitepaper-a/${context?.params?.slug}`
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
