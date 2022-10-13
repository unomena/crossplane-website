/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

// import Image from 'next/image';

import { jsx } from '@emotion/react';
import { Box, Typography, SxProps } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import * as routes from 'src/routes';

import { Anchor, Link } from 'src/elements/Anchor';
import { Img } from 'src/elements/Img';
import CTACard from 'src/components/CTACard';

import cncfIcon from 'public/cncf-icon.png';
import logo from 'public/crossplane-logo.svg';

const largeFooterWidthContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: '88px 20px 78px 20px',
  margin: '0 auto',
  maxWidth: '1440px',
  [MQ.xl]: {
    padding: '96px 140px 78px 140px',
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
      <Box sx={largeFooterWidthContainer}>
        <Box>
          <Box sx={{ display: { _: 'block', md: 'flex' }, alignItems: 'center', mb: 6 }}>
            <Box
              sx={{
                pr: 5,
                width: { _: '100%', md: '50%' },
              }}
            >
              <Link href={routes.home}>
                <Img src={logo} alt="logo" width={190} />
              </Link>
            </Box>
            <Box
              sx={{
                pl: 5,
                width: { _: '100%', md: '50%' },
              }}
            >
              <Link href={routes.twitterUrl}>Twitter</Link>
              <Link href={routes.youtubeUrl}>Youtube</Link>
              <Link href="">Podcast</Link>
              <Link href={routes.forumUrl}>Forum</Link>
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
                pl: 5,
                width: { _: '100%', md: '50%' },
              }}
            >
              <Anchor href={routes.cncfUrl}>
                <Img src={cncfIcon} alt="cncfIcon" sx={{ width: '233px', height: '37px', mb: 3 }} />
              </Anchor>
              <Typography color={COLORS.fillBlackGray}>
                We are a Cloud Native Computing Foundation project.
              </Typography>
            </Box>
            <Box
              sx={{
                pr: 5,
                borderRight: { _: 'none', md: '.5px solid #fff' },
                width: { _: '100%', md: '50%' },
              }}
            >
              <Typography>
                © Crossplane Authors 2022. Documentation distributed under CC-BY-4.0.
              </Typography>
              <Typography>
                © 2022 The Linux Foundation. All rights reserved. The Linux Foundation has
                registered trademarks and uses trademarks. For a list of trademarks of The Linux
                Foundation, please see our Trademark Usage page.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageFooter;
