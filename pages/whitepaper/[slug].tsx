import React, { useCallback, useMemo, useState } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography, List, ListItem, Hidden } from '@mui/material';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { AxiosError } from 'axios';

import countries from 'country-region-data/data.json';

import * as routes from 'src/routes';

import handleGetStaticProps from 'src-new/utils/handleGetStaticProps';
import axiosInstance from 'src-new/utils/axiosInstance';
import handleFormError from 'src-new/utils/handleFormError';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';
import CSelect from 'src-new/elements/CSelect';
import CCheckbox from 'src-new/elements/CCheckbox';
import Link from 'src-new/elements/Link';
import CMSImage from 'src-new/elements/CMSImage';

import headerBg from 'public/new-images/home-page/header-bg.jpg';
import placeHolder from 'public/new-images/Whitepaper-mockup.png';
import ArrowRight from 'src-new/svg/ArrowRight';
import CheckIcon from 'public/new-images/icons/check.svg';

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

const header_listStyles: SxProps = {
  color: COLORS.linkWater,
  mt: 10,

  '& h3': {
    margin: '0px 0px 24px',
  },

  '& h4': {
    margin: '0px 0px 24px',
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '28px',

    [MQ.md]: {
      fontSize: '20px',
      lineHeight: '32px',
    },
  },

  '& p': {
    margin: '0px 0px 24px',
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },

  '& ul': {
    mt: 0,
    pl: 2,
    py: 0,
    listStyle: 'disc',

    '& li': {
      display: 'list-item',
      lineHeight: '28px',
      p: 1,

      '&::marker': {
        color: COLORS.sun,
      },
    },
  },

  [MQ.lg]: {
    mt: 0,
  },
};

const listItemStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
};

const section_1_listStyles: SxProps = {
  mt: 5,
  p: 0,
  '& li': {
    p: '0',
    '&:not(:last-of-type)': {
      mb: 3,
    },
    '& a': {
      color: COLORS.cornflower,
      textDecoration: 'none',
    },
  },

  [MQ.lg]: {
    mt: 0,
  },
};

const formStyles: SxProps = {
  m: 0,
  // mt: 5,
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

const HeaderForm = (props: WhitepaperPage) => {
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
    const token = await executeRecaptcha('resource_request');
    return token;
  }, [executeRecaptcha]);

  const handleSubmit = async (values: FormValues, { setFieldError }: FormikHelpers<FormValues>) => {
    try {
      setLoading(true);

      const token = await handleReCaptchaVerify();

      const postData = {
        page_version: 'v2',
        recaptcha_token: token,
        page_id: props.id,
        ...values,
      };

      const res = await axiosInstance.post('/api/resource-request/', postData);

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
                Download Whitepaper
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

// const list = [
//   {
//     id: 1,
//     text: 'Enable a faster time to deployment',
//   },
//   {
//     id: 2,
//     text: 'Lower Capex AND Opex',
//   },
//   {
//     id: 3,
//     text: 'Reduce risk while innovating faster',
//   },
//   {
//     id: 4,
//     text: 'And so much more — including happier software engineers!',
//   },
// ];

const iconListContent = [
  {
    id: 1,
    icon: CheckIcon,
    text: 'Upbound is committed to open source.',
  },
  {
    id: 2,
    icon: CheckIcon,
    text: (
      <>
        Upbound is powered by <a href="https://crossplane.io/">Crossplane</a>, a Kubernetes add-on.
      </>
    ),
  },
  {
    id: 3,
    icon: CheckIcon,
    text: 'Upbound is the cloud on your terms.',
  },
];

// type IconListItemProps = {
//   iconListItem: {
//     text: string;
//     icon: string | StaticImport;
//   };
// };

// const IconListItem = ({ iconListItem }: IconListItemProps) => {
//   const { id, text, icon } = iconListItem;

//   return (
//     <ListItem>
//       <Box sx={listItemStyles}>
//         <Box sx={{ mr: 2 }}>
//           <Box
//             sx={{
//               position: 'relative',
//               display: 'flex',
//               width: 18,
//             }}
//           >
//             <Image src={icon} alt="icon" />
//           </Box>
//         </Box>

//         <Typography variant="body_small">{text}</Typography>
//       </Box>
//     </ListItem>
//   );
// };

// const displayTitle = 'Products - The Universal Cloud Platform';
// const metaImg = OGImgProducts.src;

type Props = {
  isPreview?: boolean;
} & WhitepaperPage;

const Whitepaper = (props: Props) => {
  return (
    <PageProvider hideCTACard removeFooterPadding isPreview={props.isPreview}>
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
            <Box sx={{ position: 'relative', width: '100%', height: '374px', mb: 5 }}>
              <CMSImage
                value={props.header_image[0].value}
                layout="fill"
                objectFit="contain"
                priority
              />
            </Box>
            <Hidden lgDown>
              <Box sx={header_listStyles}>
                <div dangerouslySetInnerHTML={{ __html: props.header_richtext }}></div>
              </Box>
            </Hidden>
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
                [MQ.lg]: {
                  position: 'sticky',
                  top: '0',
                },
              }}
            >
              <HeaderForm {...props} />
            </Box>
          </Box>
        </Box>
        <Hidden lgUp>
          <Box sx={header_listStyles}>
            <div dangerouslySetInnerHTML={{ __html: props.header_richtext }}></div>
          </Box>
        </Hidden>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ py: 20, pb: { _: 15, lg: 20 } }}>
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
              [MQ.lg]: {
                flex: 1,
                width: '50%',
              },
            }}
          >
            <Typography variant="h3_new" sx={{ mb: 3 }}>
              {props.section_1_title}
            </Typography>
            <Typography variant="body_normal" sx={{ mb: 5 }}>
              {props.section_1_text}
            </Typography>
            {props.section_1_button[0] && (
              <Button
                sx={{ width: { _: 225, sm: 208 } }}
                cmsValue={props.section_1_button[0].value}
              >
                {props.section_1_button[0].value.text}
              </Button>
            )}
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
            <Box
              sx={{
                pl: { _: 0, lg: '100px' },
                color: COLORS.linkWater,
                ...section_1_listStyles, // rename to section_1_listStyles
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: props.section_1_richtext }}></div>
              {/* <List sx={section_1_listStyles}>
                {iconListContent.map((iconListItem) => (
                  // <IconListItem key={iconListItem.id} iconListItem={iconListItem} />
                  <ListItem key={iconListItem.id}>
                    <Box sx={listItemStyles}>
                      <Box sx={{ mr: 2 }}>
                        <Box
                          sx={{
                            position: 'relative',
                            display: 'flex',
                            width: 18,
                          }}
                        >
                          <Image src={iconListItem.icon} alt="icon" />
                        </Box>
                      </Box>

                      <Typography variant="body_small">{iconListItem.text}</Typography>
                    </Box>
                  </ListItem>
                ))}
              </List> */}
            </Box>
          </Box>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Whitepaper;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axiosInstance.get(`/api/v2/pages/?type=app.ResourceDetailPage`);
  const whitepapers = res.data.items;

  const paths = whitepapers.map((whitepaper: { meta: { slug: string } }) => ({
    params: { slug: whitepaper.meta.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(context, `/whitepaper/${context?.params?.slug}`);

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
