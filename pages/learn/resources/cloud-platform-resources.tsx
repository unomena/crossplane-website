import React from 'react';

import Image from 'next/image';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

// import { useFormik, FormikHelpers } from 'formik';
// import * as yup from 'yup';

import * as routes from 'src/routes';

// import axiosInstance from 'src-new/utils/axiosInstance';
// import handleFormError from 'src-new/utils/handleFormError';
import getSessionData from 'src-new/utils/getSessionData';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import CornerCard from 'src-new/elements/CornerCard';
import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';

import placeHolder from 'public/new-images/Whitepaper-mockup.png';

const headerSection: SxProps = {
  pt: 20,
  pb: 10,
  textAlign: 'center',

  'p:last-of-type': {
    mb: 0,
  },
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 2,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

const contentCardData = [
  {
    img: placeHolder,
    img_alt: 'img one',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
  {
    img: placeHolder,
    img_alt: 'img two',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
  {
    img: placeHolder,
    img_alt: 'img three',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
  {
    img: placeHolder,
    img_alt: 'img three',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
  {
    img: placeHolder,
    img_alt: 'img three',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
];

type ContentCardProps = {
  contentCard: {
    img: string | StaticImport;
    img_alt: string;
    tag: string;
    title: string;
  };
};

const ContentCardItem = ({ contentCard }: ContentCardProps) => {
  const { img, img_alt, tag, title } = contentCard;

  return (
    <Box sx={{ mb: 3 }}>
      <Box display="flex" flexDirection="column">
        <Box sx={{ position: 'relative', width: '100%', height: '250px', mb: 3, mx: 'auto' }}>
          <Image src={img} alt={img_alt} layout="fill" objectFit="contain" />
        </Box>
        <Box flex={1}>
          <Typography variant="body_small" sx={{ fontWeight: 600, color: COLORS.turquoise, mb: 1 }}>
            {tag}
          </Typography>
          <Typography variant="body_normal">{title}</Typography>
        </Box>
      </Box>
    </Box>
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
      ctaBtnLink={routes.contactRoute}
    >
      <Section sx={headerSection}>
        <Box>
          <Typography variant="h1_new" sx={{ mb: 3 }}>
            Rise above the clouds
          </Typography>
          <Box maxWidth={600} mx="auto">
            <Typography variant="body_big" sx={{ mb: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel leo elit. Integer at
              massa quam.
            </Typography>
          </Box>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: { _: 10, md: 20 }, pb: 40 }}>
        <Box sx={gridLayout}>
          {contentCardData.map((contentCard) => (
            <ContentCardItem key={contentCard.title} contentCard={contentCard} />
          ))}
        </Box>
      </Section>
    </PageProvider>
  );
};

export default LandingPageV1;
