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
  pl: '16px',
  listStyle: 'disc',

  '& li': {
    display: 'list-item',
    pl: '8px',
    '&::marker': {
      color: COLORS.sun,
    },
  },
};

const iconListStyles: SxProps = {
  pl: '16px',

  '& li': {
    pl: '0',
    '& img': {
      pr: '16px',
    },
  },
};

const formStyles: SxProps = {
  margin: 0,
  padding: 3,
  backgroundColor: COLORS.bigStone,
  borderRadius: 3,

  '& .MuiTypography-root': {
    color: COLORS.linkWater,
  },
};

interface FormValues {
  first_name: string;
  last_name: string;
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
      email: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={formStyles}>
      <Typography variant="body_normal" sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
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
          name="email"
          label="Email"
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
    text: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit.',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do.',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod.',
  },
];

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

const iconListContent = [
  {
    icon: DeployWithConfidenceIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero nunc, egestas a congue eget.',
  },
  {
    icon: DeployWithConfidenceIcon,
    text: 'Phasellus libero nunc, egestas a congue eget.',
  },
  {
    icon: DeployWithConfidenceIcon,
    text: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod.',
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
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
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
              Header lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body_big" sx={{ mb: 5 }}>
              Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod tempor
              incididunt.
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
      <Box>
        <Section bgcolor angleTopBottom="topBtmRight" sx={{ py: 20 }}>
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
              Header 2 lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body_normal" sx={{ mb: 3 }}>
              Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod tempor
              incididunt.
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
      </Box>
      <Box>
        <Section angleTop="topRight" sx={{ py: 20 }}>
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
                Header 2 lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body_normal" sx={{ mb: 5 }}>
                Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod tempor
                incididunt.
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
                href=""
              >
                CTA
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
      </Box>
    </PageProvider>
  );
};

export default LandingPage;
