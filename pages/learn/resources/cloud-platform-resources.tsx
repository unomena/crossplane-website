import React from 'react';

import { GetStaticProps } from 'next';

import { COLORS, MQ } from 'src/theme';
import { Box, SxProps, Typography } from '@mui/material';

import * as routes from 'src/routes';

import axiosInstance from 'src-new/utils/axiosInstance';
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

// interface StaticRequire {
//   default: StaticImageData;
// }
// declare type StaticImport = StaticRequire | StaticImageData;

// const contentCardData = [
//   {
//     href: 'https://www.upbound.io/',
//     img: placeHolder,
//     img_alt: 'img one',
//     tag: 'Content Type',
//     title:
//       // eslint-disable-next-line max-len
//       'Title: Lorem ipsum',
//   },
//   {
//     href: 'https://www.upbound.io/',
//     img: placeHolder,
//     img_alt: 'img two',
//     tag: 'Content Type',
//     title:
//       // eslint-disable-next-line max-len
//       'Title: Lorem ipsum',
//   },
//   {
//     href: 'https://www.upbound.io/',
//     img: placeHolder,
//     img_alt: 'img three',
//     tag: 'Content Type',
//     title:
//       // eslint-disable-next-line max-len
//       'Title: Lorem ipsum',
//   },
//   {
//     href: 'https://www.upbound.io/',
//     img: placeHolder,
//     img_alt: 'img three',
//     tag: 'Content Type',
//     title:
//       // eslint-disable-next-line max-len
//       'Title: Lorem ipsum',
//   },
//   {
//     href: 'https://www.upbound.io/',
//     img: placeHolder,
//     img_alt: 'img three',
//     tag: 'Content Type',
//     title:
//       // eslint-disable-next-line max-len
//       'Title: Lorem ipsum',
//   },
// ];

// type ContentCardProps = {
//   contentCard: {
//     href: string;
//     img: string | StaticImport;
//     img_alt: string;
//     tag: string;
//     title: string;
//   };
// };

// const ContentCardItem = ({ contentCard }: ContentCardProps) => {
// const { href, img, img_alt, tag, title } = contentCard;

const ContentCardItem = ({ contentCard }: { contentCard: ResourceListItem }) => {
  const { resource_type, listing_image, listing_title, relative_url } = contentCard;

  return (
    <Box>
      <Link href={relative_url}>
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
            <Typography variant="body_normal" sx={{ mb: 0 }}>
              {listing_title}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

const ListingSection = ({ resource_list }: { resource_list: ResourceList }) => {
  return (
    <Box sx={gridLayout}>
      {resource_list.map((item) => (
        <ContentCardItem key={item.id} contentCard={item} />
      ))}
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
      ctaBtnText="Contact Us"
      ctaBtnLink={routes.contactRoute}
    >
      <Section sx={headerSection}>
        <Box>
          <Typography variant="h1_new" sx={{ mb: 3 }}>
            {props.header_title}
          </Typography>
          <Box maxWidth={600} mx="auto">
            <Typography variant="body_big" sx={{ mb: 5 }}>
              {props.header_text}
            </Typography>
          </Box>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 20, pb: { _: 15, lg: 40 } }}>
        <ListingSection resource_list={props.resource_list} />
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

  let resource_list;

  try {
    const { data } = await axiosInstance.get(
      // eslint-disable-next-line max-len
      'api/v2/pages/?type=app.ResourceDetailPage&fields=resource_type,listing_image,listing_title,header_title,header_image_mobile,relative_url'
    );
    resource_list = data.items.map((item: ResourceListItem) => {
      return {
        ...item,
        listing_title: item.listing_title || item.header_title,
        listing_image:
          item.listing_image && item.listing_image[0]
            ? item.listing_image
            : item.header_image_mobile,
      };
    });
  } catch (error) {
    console.log('get ResourceDetailPage list', error);
  }

  if (returnValue && resource_list) {
    return {
      props: { ...returnValue, resource_list },
    };
  } else {
    return {
      notFound: true,
    };
  }
};
