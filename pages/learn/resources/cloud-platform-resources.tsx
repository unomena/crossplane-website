import React from 'react';

import { GetStaticProps } from 'next';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

import handleGetStaticProps from 'src-new/utils/handleGetStaticProps';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Link from 'src-new/elements/Link';
import CMSImage from 'src-new/elements/CMSImage';

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

  [MQ.sm]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [MQ.lg]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

// TO DO: INVESTIGATE FIX FOR IMAGE RESPONSIVENESS RELATED TO HEIGHT CONCERNS
const responsiveImg: SxProps = {
  position: 'relative',
  width: '100%',
  maxWidth: '347px',
  mb: 3,
  mr: 'auto',
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

const ContentCardItem = ({ contentCard }: { contentCard: ResourceListItem }) => {
  const { resource_type, listing_image, listing_title, resource_document, resource_link } =
    contentCard;

  return (
    <Box>
      <Link
        href={resource_document ? resource_document.meta?.download_url : resource_link}
        muiProps={{ target: '_blank' }}
      >
        <Box display="flex" flexDirection="column">
          <Box sx={responsiveImg}>
            {listing_image && listing_image[0] && (
              <CMSImage value={listing_image[0].value} layout="fill" priority />
            )}
          </Box>
          <Box flex={1}>
            <Typography
              variant="body_small"
              sx={{ fontWeight: 600, color: COLORS.turquoise, mb: 1 }}
            >
              {resource_type}
            </Typography>
            <Typography
              sx={{ color: COLORS.linkWater, fontSize: '20px', lineHeight: '32px', mb: 0 }}
            >
              {listing_title}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

const ListingSection = ({ resource_items }: { resource_items: ResourceList }) => {
  return (
    <Box sx={gridLayout}>
      {resource_items &&
        resource_items.map((item) => <ContentCardItem key={item.id} contentCard={item} />)}
    </Box>
  );
};

// const displayTitle = 'Products - The Universal Cloud Platform';
// const metaImg = OGImgProducts.src;

type Props = {
  isPreview?: boolean;
} & ResourceListingPage;

const ResourceListing = (props: Props) => {
  return (
    <PageProvider
      cms_head_props={props.cms_head_props}
      isPreview={props.isPreview}
      ctaTitle={props.contact_section_title}
      ctaParagraph={props.contact_section_text}
      ctaBtnText={
        props.contact_section_button &&
        props.contact_section_button[0] &&
        props.contact_section_button[0].value?.text
      }
      ctaBtnLink={
        props.contact_section_button &&
        props.contact_section_button[0] &&
        props.contact_section_button[0].value?.link
          ? props.contact_section_button[0].value.link[0].value
          : undefined
      }
    >
      <Section sx={headerSection}>
        <Box>
          <Typography variant="h1_new" sx={{ mb: 3 }}>
            {props.header_title}
          </Typography>
          <Box maxWidth={800} mx="auto">
            <Typography variant="body_big" sx={{ mb: 5 }}>
              {props.header_text}
            </Typography>
          </Box>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 20, pb: { _: 15, lg: 40 } }}>
        <ListingSection resource_items={props.resource_items} />
      </Section>
    </PageProvider>
  );
};

export default ResourceListing;

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(
    context,
    '/learn/resources/cloud-platform-resources',
    true
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
