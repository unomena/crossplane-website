import React from 'react';

import Image from 'next/image';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

import * as routes from 'src/routes';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Link from 'src-new/elements/Link';

import placeHolder from 'public/new-images/placeholder.png';

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
  gap: 5,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

// TO DO: INVESTIGATE FIX FOR IMAGE RESPONSIVENESS RELATED TO HEIGHT CONCERNS
const responsiveImg: SxProps = {
  position: 'relative',
  width: '100%',
  mb: 3,
  mx: 'auto',
  [MQ.md]: {
    height: '250px !important',
  },

  '& > span': {
    position: 'unset !important',
    [MQ.md]: {
      position: 'absolute !important',
    },
  },

  '& img': {
    objectFit: 'contain',
    width: '100% !important',
    position: 'relative !important',
    height: 'unset !important',
    [MQ.md]: {
      objectFit: 'cover',
      position: 'absolute !important',
    },
  },
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

const contentCardData = [
  {
    href: 'https://www.upbound.io/',
    img: placeHolder,
    img_alt: 'img one',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
  {
    href: 'https://www.upbound.io/',
    img: placeHolder,
    img_alt: 'img two',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
  {
    href: 'https://www.upbound.io/',
    img: placeHolder,
    img_alt: 'img three',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
  {
    href: 'https://www.upbound.io/',
    img: placeHolder,
    img_alt: 'img three',
    tag: 'Content Type',
    title:
      // eslint-disable-next-line max-len
      'Title: Lorem ipsum',
  },
  {
    href: 'https://www.upbound.io/',
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
    href: string;
    img: string | StaticImport;
    img_alt: string;
    tag: string;
    title: string;
  };
};

const ContentCardItem = ({ contentCard }: ContentCardProps) => {
  const { href, img, img_alt, tag, title } = contentCard;

  return (
    <Box>
      <Link href={href}>
        <Box display="flex" flexDirection="column">
          <Box sx={responsiveImg}>
            <Image src={img} alt={img_alt} layout="fill" priority />
          </Box>
          <Box flex={1}>
            <Typography
              variant="body_small"
              sx={{ fontWeight: 600, color: COLORS.turquoise, mb: 1 }}
            >
              {tag}
            </Typography>
            <Typography variant="body_normal" sx={{ mb: 0 }}>
              {title}
            </Typography>
          </Box>
        </Box>
      </Link>
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
      <Section bgcolor angleTop="topRight" sx={{ pt: 20, pb: { _: 15, lg: 40 }}}>
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
