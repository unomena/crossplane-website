import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography, List, ListItem } from '@mui/material';

import { useFormik, FormikProps, FormikHelpers } from 'formik';
import * as yup from 'yup';

import * as routes from 'src/routes';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import CTextField from 'src-new/elements/CTextField';

import ArrowRight from 'src-new/svg/ArrowRight';
import placeHolder from 'public/new-images/place-holder-img.png';
import DeployWithConfidenceIcon from 'public/new-images/home-page/features/DeployWithConfidenceIcon.svg';

const listStyles: SxProps = {
  pl: 2,
  py: 0,
  listStyle: 'disc',

  '& li': {
    display: 'list-item',
    pl: '8px',
    '&::marker': {
      color: COLORS.sun,
    },
  },
};

const listItemStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
};

const iconListStyles: SxProps = {
  mt: 5,
  p: 0,
  '& li': {
    p: '0',
    '&:not(:last-of-type)': {
      mb: 3,
    },
    '& img': {
      pr: '16px',
    },
  },

  [MQ.lg]: {
    mt: 0,
  },
};

const formStyles: SxProps = {
  m: 0,
  mt: 5,
  p: 3,
  backgroundColor: COLORS.bigStone,
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
  const schema = yup.object({
    first_name: yup.string().required('Please enter your name'),
    last_name: yup.string().required('Please enter your surname'),
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
  });

  const handleSubmit = async (values: FormValues, { setFieldError }: FormikHelpers<FormValues>) => {
    console.log(values);
    // try {
    //   let postData = {
    //     first_name: values.first_name,
    //     last_name: values.last_name,
    //     email: values.email,
    //   };
    //   postData = trimPostData(postData);
    //   await axiosInstance.patch('/api/v1/authentication/profile/update/', getFormData(postData));
    //   await getUser();
    //   setStep(2);
    // } catch (error) {
    //   handleFormError('step1 user register submit', error, setFieldError);
    // }
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
      <Typography variant="body_normal" sx={{ mb: 1 }}>
        Submit your contact info below to download
      </Typography>
      <form onSubmit={formik.handleSubmit}>
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
        <CTextField
          name="email"
          label="Business Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Box mt={3} textAlign="center">
          <Button
            styleType={formik.isValid && !formik.isSubmitting ? 'cornflowerContained' : 'disabled'}
            disabled={formik.isSubmitting}
            type="submit"
          >
            Download Whitepaper
          </Button>
        </Box>
      </form>
    </Box>
  );
};

const list = [
  {
    id: 1,
    text: 'Enable a faster time to deployment',
  },
  {
    id: 2,
    text: 'Lower Capex AND Opex',
  },
  {
    id: 3,
    text: 'Reduce risk but also innovate faster',
  },
  {
    id: 4,
    text: 'And so much more- including happier software engineers!',
  },
];

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

const iconListContent = [
  {
    icon: DeployWithConfidenceIcon,
    text: 'Upbound is committed to open source.',
  },
  {
    icon: DeployWithConfidenceIcon,
    text: 'Upbound is powered by Crossplane.',
  },
  {
    icon: DeployWithConfidenceIcon,
    text: 'Upbound is the cloud on your terms.',
  },
];

type IconListItemProps = {
  iconListItem: {
    text: string;
    icon: string | StaticImport;
  };
};

const IconListItem = ({ iconListItem }: IconListItemProps) => {
  const { text, icon } = iconListItem;

  return (
    <ListItem>
      <Box sx={listItemStyles}>
        <Box sx={{ mr: 2 }}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              width: 24,
              [MQ.md]: {
                width: 30,
              },
            }}
          >
            <Image src={icon} alt="icon" />
          </Box>
        </Box>

        <Typography variant="body_small">{text}</Typography>
      </Box>
    </ListItem>
  );
};

// const displayTitle = 'Products - The Universal Cloud Platform';
// const metaImg = OGImgProducts.src;

type Props = {};

const LandingPage = ({}: Props) => {
  return (
    <PageProvider hideTryForFreeCard removeFooterPadding>
      <Section sx={{ pt: 20, pb: 10 }}>
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
                flex: 1,
                width: '50%',
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
            <Box sx={{ position: 'relative', width: '100%', height: '374px' }}>
              <Image src={placeHolder} alt="placeholder" layout="fill" objectFit="contain" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              [MQ.lg]: {
                flex: 1,
                width: '50%',
              },
            }}
          >
            <Box sx={{ pl: { _: 0, lg: '100px' } }}>
              <HeaderForm />
            </Box>
          </Box>
        </Box>
      </Section>
      <Section sx={{ py: 10 }}>
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
            Every company is a cloud company today.
          </Typography>
          <Typography variant="body_normal" sx={{ mb: 3 }}>
            Even if you’re not selling software, digital experiences running in the cloud are
            business-critical components for you and your business. So how do you manage it all?
          </Typography>
          <Typography variant="body_normal" sx={{ mb: 0 }}>
            Enter Upbound who can help you future proof your platform as well as:
          </Typography>
          <List sx={listStyles}>
            {list.map((listItem) => (
              <ListItem key={listItem.id}>
                <Typography variant="body_small">{listItem.text}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ py: 20, pb: { _: 15, lg: 20 } }}>
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
            <Typography variant="h3_new" sx={{ mb: 3 }}>
              Ready to jump to the next level?
            </Typography>
            <Typography variant="body_normal" sx={{ mb: 5 }}>
              Click below to fill out our contact form and an Upbound and Crossplane expert will
              reach out to schedule a meeting with you shortly.
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
              href={routes.contactSalesUrl}
            >
              Contact Us
            </Button>
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
              <List sx={iconListStyles}>
                {iconListContent.map((iconListItem) => (
                  <IconListItem key={iconListItem.text} iconListItem={iconListItem} />
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default LandingPage;
