import React, { useCallback, useMemo, useState } from 'react';

import Image from 'next/image';

import { MQ } from 'src/theme';
import { Box, SxProps, Typography, Hidden } from '@mui/material';

// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// import { useFormik, FormikHelpers } from 'formik';
// import * as yup from 'yup';

// import { AxiosError } from 'axios';

// import countries from 'country-region-data/data.json';

import * as routes from 'src/routes';

// import axiosInstance from 'src-new/utils/axiosInstance';
// import handleFormError from 'src-new/utils/handleFormError';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
// import CTextField from 'src-new/elements/CTextField';
// import CSelect from 'src-new/elements/CSelect';
// import CCheckbox from 'src-new/elements/CCheckbox';
// import Link from 'src-new/elements/Link';

// import headerBg from 'public/new-images/home-page/header-bg.jpg';
import placeHolder from 'public/new-images/placeholder.png';
import ArrowRight from 'src-new/svg/ArrowRight';

const headerSection: SxProps = {
  pt: { _: 13, md: 20 },
  pb: 10,
  // backgroundImage: `url(${headerBg.src})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'top center',

  // '@media screen and (min-width: 1980px)': {
  //   backgroundSize: 'contain',
  // },
};

const detailStyles: SxProps = {
  position: 'relative',
  width: '100%',
  minWidth: '60px',
  maxWidth: '60px',
  height: '60px',
  borderRadius: '100%',
  overflow: 'hidden',
  mr: 3,
};

const sessionItemStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',

  '&:not(:last-of-type)': {
    mb: 3,
  },
};

// const formStyles: SxProps = {
//   m: 0,
//   p: 3,
//   backgroundColor: COLORS.elephant,
//   borderRadius: 3,

//   '& .MuiTypography-root': {
//     color: COLORS.linkWater,
//   },
// };

// interface FormValues {
//   first_name: string;
//   last_name: string;
//   job_title: string;
//   company: string;
//   email: string;
//   country: string;
//   state: string;
//   legal_consent: boolean;
// }

// const GiftForm = () => {
//   const { executeRecaptcha } = useGoogleReCaptcha();

//   const [loading, setLoading] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [recaptchaError, setRecaptchaError] = useState(null);

//   const schema = yup.object({
//     first_name: yup.string().required('Please enter your first name'),
//     last_name: yup.string().required('Please enter your last name'),
//     job_title: yup.string().required('Please enter your job title'),
//     company: yup.string().required('Please enter your company name'),
//     email: yup.string().email('Please enter valid email').required('Please enter your email'),
//     country: yup.string().required('Please select a country'),
//     state: yup.string(),
//     legal_consent: yup.boolean(),
//   });

//   const handleReCaptchaVerify = useCallback(async () => {
//     if (!executeRecaptcha) {
//       console.log('Execute recaptcha not yet available');
//       return;
//     }
//     const token = await executeRecaptcha('resource_request');
//     return token;
//   }, [executeRecaptcha]);

//   const handleSubmit = async (values: FormValues, { setFieldError }: FormikHelpers<FormValues>) => {
//     try {
//       setLoading(true);

//       const token = await handleReCaptchaVerify();

//       const postData = {
//         recaptcha_token: token,
//         ...values,
//       };

//       const res = await axiosInstance.post('/api/resource-request', postData);

//       if (!res.data.recaptcha_error) {
//         setFormSubmitted(true);
//         setLoading(false);

//         if (res.data.resource) {
//           window.open(res.data.resource, '_blank');
//         }
//       } else {
//         setRecaptchaError(res.data.recaptcha_error);
//         setLoading(false);
//       }
//     } catch (err) {
//       const error = err as AxiosError;
//       handleFormError('Request Submit', error, setFieldError);
//       setLoading(false);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       first_name: '',
//       last_name: '',
//       job_title: '',
//       company: '',
//       email: '',
//       country: '',
//       state: '',
//       legal_consent: false,
//     },
//     validationSchema: schema,
//     onSubmit: handleSubmit,
//   });

//   const countryOptions = useMemo(() => {
//     return countries.map((c) => ({ value: c.countryName, label: c.countryName }));
//   }, [countries]);

//   const regionOptions = useMemo(() => {
//     const country = countries.find((c) => c.countryName === formik.values.country);
//     if (!country) {
//       return [];
//     }
//     return country.regions.map((r) => ({ value: r.name, label: r.name }));
//   }, [formik.values.country, countries]);

//   return (
//     <Box sx={formStyles}>
//       {!formSubmitted && !recaptchaError ? (
//         <>
//           <Typography variant="body_normal" sx={{ mb: 1 }}>
//             Lorem ipsum dolor sit amet
//           </Typography>
//           <form onSubmit={formik.handleSubmit}>
//             <CTextField
//               name="first_name"
//               label="First Name"
//               value={formik.values.first_name}
//               onChange={formik.handleChange}
//               error={formik.touched.first_name && Boolean(formik.errors.first_name)}
//               helperText={formik.touched.first_name && formik.errors.first_name}
//             />
//             <CTextField
//               name="last_name"
//               label="Last Name"
//               value={formik.values.last_name}
//               onChange={formik.handleChange}
//               error={formik.touched.last_name && Boolean(formik.errors.last_name)}
//               helperText={formik.touched.last_name && formik.errors.last_name}
//             />
//             <CTextField
//               name="job_title"
//               label="Job Title"
//               value={formik.values.job_title}
//               onChange={formik.handleChange}
//               error={formik.touched.job_title && Boolean(formik.errors.job_title)}
//               helperText={formik.touched.job_title && formik.errors.job_title}
//             />
//             <CTextField
//               name="company"
//               label="Company"
//               value={formik.values.company}
//               onChange={formik.handleChange}
//               error={formik.touched.company && Boolean(formik.errors.company)}
//               helperText={formik.touched.company && formik.errors.company}
//             />
//             <CTextField
//               name="email"
//               label="Business Email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//             <CSelect
//               name="country"
//               label="Country"
//               options={[{ value: '', label: 'Select Country' }, ...countryOptions]}
//               value={formik.values.country}
//               onChange={formik.handleChange}
//               error={formik.touched.country && Boolean(formik.errors.country)}
//               helperText={formik.touched.country && formik.errors.country}
//             />
//             <CSelect
//               name="state"
//               label="State/Region"
//               options={[{ value: '', label: 'Select State/Region' }, ...regionOptions]}
//               disabled={!formik.values.country}
//               value={formik.values.state}
//               onChange={formik.handleChange}
//               error={formik.touched.state && Boolean(formik.errors.state)}
//               helperText={formik.touched.state && formik.errors.state}
//             />
//             <CCheckbox
//               checked={formik.values.legal_consent}
//               onChange={formik.handleChange}
//               name="legal_consent"
//               label="Yes, send me occasional emails from Upbound"
//             />
//             <Typography sx={{ fontSize: 12 }}>
//               By clicking the button below you understand that Upbound will process your personal
//               information in accordance with our{' '}
//               <Link href={routes.privacyRoute} muiProps={{ target: '_blank', fontWeight: 700 }}>
//                 Privacy Policy
//               </Link>
//               .
//             </Typography>
//             <Box mt={3} textAlign="center">
//               <Button
//                 styleType={loading ? 'disabled' : 'cornflowerContained'}
//                 type="submit"
//                 disabled={loading}
//                 loading={loading}
//               >
//                 Request Event
//               </Button>
//             </Box>
//           </form>
//         </>
//       ) : (
//         <>
//           {formSubmitted && <Typography variant="body_big">Thank you for submitting!</Typography>}
//           {recaptchaError && <Typography variant="body_big">{recaptchaError}</Typography>}
//         </>
//       )}
//     </Box>
//   );
// };

const sessionItems = [
  {
    session_name: 'Session Name',
    speaker: 'Speaker',
    location: 'Location',
  },
  {
    session_name: 'Session Name',
    speaker: 'Speaker',
    location: 'Location',
  },
];

type SessionItemProps = {
  sessionItem: {
    session_name: string;
    speaker: string;
    location: string;
  };
};

const SessionItem = ({ sessionItem }: SessionItemProps) => {
  const { session_name, speaker, location } = sessionItem;

  return (
    <Box sx={sessionItemStyles}>
      <Box>
        <Box sx={{ display: { _: 'block', sm: 'flex' } }}>
          <Typography variant="body_normal">{session_name}</Typography>
          <Typography variant="body_normal">{speaker}</Typography>
          <Typography variant="body_normal">{location}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

type Props = {};

const Event = ({}: Props) => {
  return (
    <PageProvider hideCTACard>
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
              Header lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body_big" sx={{ mb: { _: 5, lg: 0 } }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non convallis diam.
              Nunc id luctus enim, in efficitur lacus. Praesent a ornare justo. Aenean ut risus
              rutrum, aliquet ante ac, dignissim tortor. Integer hendrerit malesuada urna quis
              laoreet. Nullam suscipit ipsum neque, a aliquet.
            </Typography>
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
                  <Image src={placeHolder} alt="placeholder" layout="fill" objectFit="cover" />
                </Box>
                <Box>
                  <Typography variant="body_normal">Date, 2022</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={detailStyles}>
                  <Image src={placeHolder} alt="placeholder" layout="fill" objectFit="cover" />
                </Box>
                <Box>
                  <Typography variant="body_normal">Location</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={detailStyles}>
                  <Image src={placeHolder} alt="placeholder" layout="fill" objectFit="cover" />
                </Box>
                <Box>
                  <Typography variant="body_normal">Booth #</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 15, pb: 10 }}>
        <Box>
          <Typography variant="h3_new" sx={{ mb: 5, textAlign: 'center' }}>
            Speakers
          </Typography>
          {sessionItems.map((sessionItem) => (
            <SessionItem key={sessionItem.session_name} sessionItem={sessionItem} />
          ))}
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
              Subheader lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body_normal" sx={{ mb: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non convallis diam.
              Nunc id luctus enim, in efficitur lacus. Praesent a ornare justo. Aenean ut risus
              rutrum, aliquet ante ac, dignissim tortor. Integer hendrerit malesuada urna quis
              laoreet. Nullam suscipit ipsum neque, a aliquet.
            </Typography>
            <Button
              styleType="cornflowerContained"
              sx={{
                width: { _: 225, sm: 208 },
                '& > .MuiButton-iconSizeMedium': {
                  ml: '16px',
                  '& > svg': {
                    height: { _: 12, md: 13 },
                    width: { _: 7, md: 8 },
                  },
                },
              }}
              endIcon={<ArrowRight />}
              href={routes.contactRoute}
            >
              Scedule a meeting
            </Button>
          </Box>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 15, pb: 10 }}>
        <Box
          sx={{
            [MQ.lg]: {
              display: 'flex',
              // alignItems: 'center',
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
              Claim your gift
            </Typography>
            <Typography variant="body_normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non convallis diam.
              Nunc id luctus enim, in efficitur lacus.
            </Typography>
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
            <Box sx={{ pl: { _: 0, lg: '100px' } }}>
              <Typography variant="body_normal" sx={{ mb: 5 }}>
                Lorem ipsum dolor sit amet
              </Typography>
              {/* <GiftForm /> */}
            </Box>
          </Box>
        </Box>
      </Section>{' '}
    </PageProvider>
  );
};

export default Event;
