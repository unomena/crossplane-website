import React from 'react';

import Image from 'next/future/image';

import { Box, Typography, SxProps } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import * as routes from 'src/routes';

import Link from 'src/elements/Link';
import CTACard from 'src/components/CTACard';

import cncfLogo from 'public/cncf-logo.png';
import logo from 'public/crossplane-logo.svg';
import XIcon from '@mui/icons-material/X';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ForumIcon from '@mui/icons-material/Forum';
import PolicyIcon from '@mui/icons-material/Policy';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footerContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: '88px 20px 78px 20px',
  margin: '0 auto',
  maxWidth: '1440px',
  color: COLORS.blueBayoux,
  [MQ.xl]: {
    padding: '96px 140px 78px 140px',
  },
};

const footerLinks: SxProps = {
  '& a': {
    display: 'block',
    textDecoration: 'none',

    '&:not(:last-of-type)': {
      pb: { _: 2, md: 0 },
    },

    '&:hover': {
      color: '#fff',
    },
  },
};

const copyRights: SxProps = {
  '& a': {
    color: `${COLORS.turquoise} !important`,
    fontWeight: 600,
  },
};

const gridLayout: SxProps = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '20px',

  [MQ.md]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [MQ.lg]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

type Props = {
  isFooterVisible?: boolean;
  hideCTACard?: boolean;
  ctaTitle?: string;
  ctaParagraph?: string;
  ctaBtnText?: string;
  ctaBtnLink?: string;
  ctaBtnStyleType?: ButtonStyleType;
  ctaBtnTarget?: string;
  ctaBtnTwo?: boolean;
  ctaBtnTwoText?: string;
  ctaBtnTwoLink?: string;
  ctaBtnTwoTarget?: string;
  ctaBtnTwoStyleType?: ButtonStyleType;
  // ctaCustomSx?: SxProps;
};

const PageFooter = ({
  isFooterVisible = true,
  hideCTACard,
  ctaTitle,
  ctaParagraph,
  ctaBtnText,
  ctaBtnLink,
  ctaBtnStyleType,
  ctaBtnTarget,
  ctaBtnTwo,
  ctaBtnTwoText,
  ctaBtnTwoLink,
  ctaBtnTwoTarget,
  ctaBtnTwoStyleType,
}: // ctaCustomSx,
Props) => {
  if (isFooterVisible === false) {
    return null;
  }

  return (
    <Box>
      {!hideCTACard && (
        <CTACard
          title={ctaTitle}
          paragraph={ctaParagraph}
          btnText={ctaBtnText}
          btnLink={ctaBtnLink}
          btnStyleType={ctaBtnStyleType}
          btnTarget={ctaBtnTarget}
          btnTwo={ctaBtnTwo}
          btnTwoText={ctaBtnTwoText}
          btnTwoLink={ctaBtnTwoLink}
          btnTwoTarget={ctaBtnTwoTarget}
          btnTwoStyleType={ctaBtnTwoStyleType}
          // customSx={ctaCustomSx}
        />
      )}
      <Box sx={footerContainer}>
        <Box>
          <Box sx={{ display: { _: 'block', md: 'flex' }, alignItems: 'center', mb: 6 }}>
            <Box
              sx={{
                pr: 5,
                mb: { _: 5, md: 0 },
                width: { _: '100%', md: '50%' },
              }}
            >
              <Link href={routes.home}>
                <Box>
                  <Image
                    src={logo}
                    alt="logo"
                    style={{ width: '100%', maxWidth: 152, height: 'auto' }}
                  />
                </Box>
              </Link>
            </Box>
            <Box
              sx={{
                pl: { _: 0, md: 5 },
                display: { _: 'block', md: 'flex' },
                justifyContent: 'space-between',
                width: { _: '100%', md: '50%' },
                ...footerLinks,
                ...gridLayout,
              }}
            >
              <Link href={routes.twitterUrl} muiProps={{ target: '_blank' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <XIcon color="inherit" fontSize="small" sx={{ mr: 0.75 }} />
                  Twitter
                </Box>
              </Link>
              <Link href={routes.youtubeUrl} muiProps={{ target: '_blank' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <YouTubeIcon color="inherit" fontSize="small" sx={{ mr: 0.75 }} />
                  Youtube
                </Box>
              </Link>
              <Link href={routes.podcastUrl} muiProps={{ target: '_blank' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PodcastsIcon color="inherit" fontSize="small" sx={{ mr: 0.75 }} />
                  Podcast
                </Box>
              </Link>
              <Link href={routes.forumUrl} muiProps={{ target: '_blank' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ForumIcon color="inherit" fontSize="small" sx={{ mr: 0.75 }} />
                  Forum
                </Box>
              </Link>
              <Link href={routes.privacyUrl}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PolicyIcon color="inherit" fontSize="small" sx={{ mr: 0.75 }} />
                  Privacy Policy
                </Box>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: { _: 'block', md: 'flex' },
              alignItems: 'center',
              flexDirection: 'row-reverse',
            }}
          >
            <Box
              sx={{
                pl: { _: 0, md: 5 },
                width: { _: '100%', md: '50%' },
              }}
            >
              <Link href={routes.cncfUrl} muiProps={{ target: '_blank' }}>
                <Box>
                  <Image
                    src={cncfLogo}
                    alt="cncfLogo"
                    style={{ width: '100%', maxWidth: 233, height: 'auto', marginBottom: '24px' }}
                  />
                </Box>
              </Link>
              <Typography color={COLORS.blueBayoux}>
                We are a Cloud Native Computing Foundation project.
              </Typography>
            </Box>
            <Box
              sx={{
                pr: { _: 0, md: 5 },
                borderRight: { _: 'none', md: '.5px solid #fff' },
                width: { _: '100%', md: '50%' },
                ...copyRights,
              }}
            >
              <Typography fontWeight={600} sx={{ mb: 2 }}>
                © Crossplane Authors 2023. Documentation distributed under{' '}
                <Link
                  href={routes.creativeCommonsUrl}
                  muiProps={{ color: COLORS.turquoise, target: '_blank' }}
                >
                  CC-BY-4.0
                </Link>
                .
              </Typography>
              <Typography fontWeight={600}>
                © 2023 The Linux Foundation. All rights reserved. The Linux Foundation has
                registered trademarks and uses trademarks. For a list of trademarks of The Linux
                Foundation, please see our{' '}
                <Link
                  href={routes.trademarkUsageUrl}
                  muiProps={{ color: COLORS.turquoise, target: '_blank' }}
                >
                  Trademark Usage
                </Link>{' '}
                page.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageFooter;
