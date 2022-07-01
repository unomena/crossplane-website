import React, { useCallback, useMemo, useState } from 'react';

import Image from 'next/image';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { AxiosError } from 'axios';

import countries from 'country-region-data/data.json';

import * as routes from 'src/routes';

import axiosInstance from 'src-new/utils/axiosInstance';
import handleFormError from 'src-new/utils/handleFormError';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import CornerCard from 'src-new/elements/CornerCard';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';
import CSelect from 'src-new/elements/CSelect';
import CCheckbox from 'src-new/elements/CCheckbox';
import Link from 'src-new/elements/Link';

import headerBg from 'public/new-images/home-page/header-bg.jpg';
import placeHolder from 'public/new-images/Whitepaper-mockup.png';
import caseStudyIconOne from 'public/new-images/icons/case-study-icon-one.svg';
import caseStudyIconTwo from 'public/new-images/icons/case-study-icon-two.svg';
import caseStudyIconThree from 'public/new-images/icons/case-study-icon-three.svg';

const headerSection: SxProps = {
  pt: { _: 13, md: 20 },
  pb: 10,
  backgroundImage: `url(${headerBg.src})`,
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

const HeaderForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [showMore, setShowMore] = useState(false);
  const onClick = () => setShowMore(true);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);

  const schema = yup.object({
    first_name: yup.string().required('Please enter your name'),
    last_name: yup.string().required('Please enter your surname'),
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

      const token = await handleReCaptchaVerify();

      const postData = {
        recaptcha_token: token,
        ...values,
      };

      const res = await axiosInstance.post('/api/resource-request', postData);

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
      handleFormError('WhitePaper Submit', error, setFieldError);
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
            Submit your contact info below to download
          </Typography>
          <form onSubmit={formik.handleSubmit}>
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
                  label="Name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                  helperText={formik.touched.first_name && formik.errors.first_name}
                />
                <CTextField
                  name="last_name"
                  label="Surname"
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
          {formSubmitted && <Typography variant="body_big">Thank you for submitting!</Typography>}
          {recaptchaError && <Typography variant="body_big">{recaptchaError}</Typography>}
        </>
      )}
    </Box>
  );
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

const cornerCardContent = [
  {
    icon: caseStudyIconOne,
    icon_alt: 'icon one',
    title: 'Enable a faster time to deployment',
    paragraph:
      // eslint-disable-next-line max-len
      'Applications and new features are shipped faster so businesses can innovate quicker.',
  },
  {
    icon: caseStudyIconTwo,
    icon_alt: 'icon two',
    title: 'Lower Capex AND Opex',
    paragraph:
      // eslint-disable-next-line max-len
      'Cloud computing bills are reduced and Reduced labor costs since SRE doesn’t need to scale as much.',
  },
  {
    icon: caseStudyIconThree,
    icon_alt: 'icon three',
    title: 'Reduce risk but also innovate faster',
    paragraph:
      // eslint-disable-next-line max-len
      'Big fixes and governance controlled all in one place and software engineers can focus on building rather than infrastructure provisioning, configuration, and management.',
  },
];

type CornerCardItemProps = {
  cornerCardItem: {
    icon: string | StaticImport;
    icon_alt: string;
    title: string;
    paragraph: string;
  };
};

const CornerCardItem = ({ cornerCardItem }: CornerCardItemProps) => {
  const { icon, icon_alt, title, paragraph } = cornerCardItem;

  return (
    <CornerCard iconSize="small">
      <Box display="flex" flexDirection="column">
        <Box sx={{ position: 'relative', width: '48px', height: '48px', mb: 3 }}>
          <Image src={icon} alt={icon_alt} layout="fill" objectFit="contain" />
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
          <Typography variant="body_small">{paragraph}</Typography>
        </Box>
      </Box>
    </CornerCard>
  );
};

// const displayTitle = 'Products - The Universal Cloud Platform';
// const metaImg = OGImgProducts.src;

type Props = {};

const LandingPageV1 = ({}: Props) => {
  return (
    <PageProvider
      ctaTitle="Ready to jump to the next level?"
      // eslint-disable-next-line max-len
      ctaParagraph="Click below to fill out our contact form and an Upbound and Crossplane expert will reach out to schedule a meeting with you shortly."
      ctaBtnText="Contact Us"
      ctaBtnLink={routes.contactSalesUrl}
    >
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
                width: '55%',
              },
            }}
          >
            <Typography variant="h2_new" sx={{ mb: 3 }}>
              Upbound: A platform for platform teams
            </Typography>
            <Typography variant="body_big" sx={{ mb: 5 }}>
              We give you the easiest way to build your internal cloud platform- read our whitepaper
              to learn how.
            </Typography>
            <HeaderForm />
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
              <Box sx={{ position: 'relative', width: '100%', height: '374px' }}>
                <Image src={placeHolder} alt="placeholder" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 20, pb: { _: 20, md: 30 } }}>
        <Box textAlign="center">
          <Typography variant="h2_new" sx={{ mb: 3.75 }}>
            Every company is a cloud company today.
          </Typography>
          <Typography variant="body_normal" sx={{ maxWidth: '886px', mx: 'auto' }}>
            Even if you’re not selling software, digital experiences running in the cloud are
            business-critical components for you and your business. So how do you manage it all?
            Enter Upbound who can help you future proof your platform.
          </Typography>
        </Box>
        <Box sx={{ my: { _: 7.5, md: 10 }, ...gridLayout }}>
          {cornerCardContent.map((cornerCardItem) => (
            <CornerCardItem key={cornerCardItem.title} cornerCardItem={cornerCardItem} />
          ))}
        </Box>
      </Section>
    </PageProvider>
  );
};

export default LandingPageV1;
