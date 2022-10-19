/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/react';
import { Box, Typography, SxProps } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import * as routes from 'src/routes';

import { Anchor, Link } from 'src/elements/Anchor';
import { Img } from 'src/elements/Img';
import CTACard from 'src/components/CTACard';

import cncfLogo from 'public/cncf-logo.png';
import logo from 'public/crossplane-logo.svg';

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

type Props = {
  isFooterVisible?: boolean;
  hideCTACard?: boolean;
  ctaTitle?: string;
  ctaParagraph?: string;
  ctaBtnText?: string;
  ctaBtnLink?: string;
  ctaBtnTwo?: boolean;
  ctaBtnTwoText?: string;
  ctaBtnTwoLink?: string;
  ctaCustomSx?: SxProps;
};

const PageFooter = ({
  isFooterVisible = true,
  hideCTACard,
  ctaTitle,
  ctaParagraph,
  ctaBtnText,
  ctaBtnLink,
  ctaBtnTwo,
  ctaBtnTwoText,
  ctaBtnTwoLink,
  ctaCustomSx,
}: Props) => {
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
          btnTwo={ctaBtnTwo}
          btnTwoText={ctaBtnTwoText}
          btnTwoLink={ctaBtnTwoLink}
          customSx={ctaCustomSx}
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
                <Img src={logo} alt="logo" width={190} />
              </Link>
            </Box>
            <Box
              sx={{
                pl: { _: 0, md: 5 },
                display: { _: 'block', md: 'flex' },
                justifyContent: 'space-between',
                width: { _: '100%', md: '50%' },
                ...footerLinks,
              }}
            >
              <Link href={routes.twitterUrl} target="_blank">
                Twitter
              </Link>
              <Link href={routes.youtubeUrl} target="_blank">
                Youtube
              </Link>
              <Link href={routes.podcastUrl} target="_blank">
                Podcast
              </Link>
              <Link href={routes.forumUrl} target="_blank">
                Forum
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
              <Anchor href={routes.cncfUrl}>
                <Img src={cncfLogo} alt="cncfLogo" sx={{ width: '233px', height: '37px', mb: 3 }} />
              </Anchor>
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
                © Crossplane Authors 2022. Documentation distributed under{' '}
                <Link href={routes.creativeCommonsUrl} color="turquoise" target="_blank">
                  CC-BY-4.0
                </Link>
                .
              </Typography>
              <Typography fontWeight={600}>
                © 2022 The Linux Foundation. All rights reserved. The Linux Foundation has
                registered trademarks and uses trademarks. For a list of trademarks of The Linux
                Foundation, please see our{' '}
                <Link href={routes.trademarkUsageUrl} target="_blank">
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
