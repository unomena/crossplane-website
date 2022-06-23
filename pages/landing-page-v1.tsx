import React, { useState } from 'react';

import Image from 'next/image';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography, List, ListItem } from '@mui/material';

import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { AxiosError } from 'axios';

import * as routes from 'src/routes';

import axiosInstance from 'src-new/utils/axiosInstance';
import handleFormError from 'src-new/utils/handleFormError';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';
import CornerCard from 'src-new/elements/CornerCard';

import headerBg from 'public/new-images/home-page/header-bg.jpg';
import placeHolder from 'public/new-images/Whitepaper-mockup.png';
import ArrowRight from 'src-new/svg/ArrowRight';
import DeployWithConfidenceIcon from 'public/new-images/home-page/features/DeployWithConfidenceIcon.svg';
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
  mt: 5,
  p: 3,
  backgroundColor: COLORS.elephant,
  borderRadius: 3,

  '& .MuiTypography-root': {
    color: COLORS.linkWater,
  },

  [MQ.lg]: {
    mt: 0,
  },
};

interface FormValues {
  first_name: string;
  last_name: string;
  job_title: string;
  company: string;
  email: string;
}

const HeaderForm = () => {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const [setSubmitted, setFormSubmitted] = useState(false);

  const schema = yup.object({
    first_name: yup.string().required('Please enter your name'),
    last_name: yup.string().required('Please enter your surname'),
    job_title: yup.string().required('Please enter your job title'),
    company: yup.string().required('Please enter your company name'),
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
  });

  const handleSubmit = async (values: FormValues, { setFieldError }: FormikHelpers<FormValues>) => {
    try {
      const res = await axiosInstance.post('/api/resource-request', values);
      console.log(res.data);

      setFormSubmitted(true);

      if (res.data.resource) {
        window.open(res.data.resource, '_blank');
      }
    } catch (err) {
      const error = err as AxiosError;
      handleFormError('WhitePaper Submit', error, setFieldError);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      job_title: '',
      company: '',
      email: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={formStyles}>
      {!setSubmitted ? (
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" alignItems="center">
            <CTextField
              name="email"
              label="Business Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            {!showResults ? (
              <Box ml={2}>
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
          {showResults ? (
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
              <Box mt={3} textAlign="center">
                <Button styleType="cornflowerContained" type="submit">
                  Download Whitepaper
                </Button>
              </Box>
            </>
          ) : null}
        </form>
      ) : (
        <Typography variant="body_big">Thank you for submitting!</Typography>
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
    icon_alt: 'placeholder text',
    title: 'Lorem ipsum dolor sit amet',
    paragraph:
      // eslint-disable-next-line max-len
      'Nunc facilisis molestie tincidunt. Integer accumsan urna vel pellentesque aliquam. Suspendisse consectetur feugiat ex sed egestas. ',
  },
  {
    icon: caseStudyIconTwo,
    icon_alt: 'placeholder text',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    paragraph:
      // eslint-disable-next-line max-len
      'Nunc facilisis molestie tincidunt. Integer accumsan urna vel pellentesque aliquam. Suspendisse consectetur feugiat ex sed egestas. ',
  },
  {
    icon: caseStudyIconThree,
    icon_alt: 'placeholder text',
    title: 'Lorem ipsum dolor.',
    paragraph:
      // eslint-disable-next-line max-len
      'Nunc facilisis molestie tincidunt. Integer accumsan urna vel pellentesque aliquam. Suspendisse consectetur feugiat ex sed egestas. ',
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
    <PageProvider>
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
      <Box>
        <Section bgcolor angleTop="topRight" sx={{ pb: { _: 30, md: 33.125 }, pt: 23.5 }}>
          <Box textAlign="center">
            <Typography variant="h2_new" sx={{ mb: 3.75 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body_normal" sx={{ maxWidth: '886px', mx: 'auto' }}>
              Nunc facilisis molestie tincidunt. Integer accumsan urna vel pellentesque aliquam.
              Suspendisse consectetur feugiat ex sed egestas.
            </Typography>
          </Box>
          <Box sx={{ my: { _: 7.5, md: 10 }, ...gridLayout }}>
            {cornerCardContent.map((cornerCardItem) => (
              <CornerCardItem key={cornerCardItem.title} cornerCardItem={cornerCardItem} />
            ))}
          </Box>
        </Section>
      </Box>
    </PageProvider>
  );
};

export default LandingPageV1;
