import React from 'react';

import Image from 'next/future/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import * as routes from 'src/routes';

import PageProvider from 'src/components/PageProvider';
import Section from 'src/components/Section';
import Link from 'src/elements/Link';
import Button from 'src/elements/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import upboundLogo from 'public/upbound-logo.svg';
import cncfLogoColor from 'public/cncf-logo-color.png';
import gradientGraphicHeader from 'public/background-graphics/gradient-graphic-header.png';
import gradientGraphicSM from 'public/background-graphics/gradient-graphic-sm.png';

const headerSection: SxProps = {
  position: 'relative',
  pt: { _: 13, md: 23.5 },
  pb: { _: 13, md: 23.5 },
  maxWidth: 950,
  mx: 'auto',
};

const cardStyles: SxProps = {
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
  maxWidth: 750,
  mt: 5,
  mx: 'auto',
  p: 5,

  [MQ.md]: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: -150,
    left: 0,
    right: 0,
    mt: 0,
  },
};

const btnContainer: SxProps = {
  mt: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: { _: 'center', md: 'left' },
  flexDirection: { _: 'column', xs: 'row' },

  '& .MuiButton-startIcon': {
    mr: 1.25,
    display: 'flex',
    alignItems: 'center',
  },

  '& > button, a': {
    mx: { _: 0, xs: '10px' },

    ':first-of-type': {
      ml: 0,
      mb: { _: '20px', xs: 0 },
    },
    '& ~ a': {
      mr: 0,
    },
  },
};

type Props = {};

const Why = ({}: Props) => {
  return (
    <PageProvider>
      <Section sx={headerSection}>
        <Typography variant="h2" textAlign="center" color="#fff">
          Companies with Commercial Crossplane Offerings
        </Typography>
        <Box sx={{ maxWidth: 476, mx: 'auto', mt: 6 }}>
          <Image
            src={gradientGraphicHeader}
            alt="gradient graphic"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Box sx={cardStyles}>
          <Box sx={{ width: { _: '100%', md: '50%' }, pr: { _: 0, md: 5 } }}>
            <Box sx={{ maxWidth: 295, mx: 'auto', mb: { _: 3, md: 0 } }}>
              <Image
                src={upboundLogo}
                alt="upboundLogo"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Box>
          <Box sx={{ width: { _: '100%', md: '50%' } }}>
            <Typography
              variant="body_normal"
              sx={{
                mb: 2,
              }}
            >
              Upbound is the creator of open source Crossplane — the modern, cloud native
              alternative to Infrastructure as Code (IaC).
            </Typography>
            <Box sx={btnContainer}>
              <Button styleType="gradientContained" href={routes.upboundUrl}>
                Learn More
              </Button>
              <Button styleType="darkOutlined" startIcon={<GitHubIcon />} href={routes.githubUrl}>
                GitHub
              </Button>
            </Box>
          </Box>
        </Box>
      </Section>

      <Section
        angleTop="topRight"
        sx={{
          pt: { _: 16, md: 23.5 },
          // pb: { _: 16, md: 23.5 },
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Box
          sx={{
            pb: { _: 13, md: 16 },
            borderBottom: `1px solid ${COLORS.blueBayoux}`,
            '& a': {
              textDecorationColor: COLORS.turquoise,
            },
          }}
        >
          <Typography variant="body_normal" sx={{ whiteSpace: 'break-spaces' }}>
            Building on top of Crossplane or offering support? {'\n'}
            <Link
              href="mailto:info@crossplane.io"
              muiProps={{
                target: '_blank',
                fontWeight: 700,
                underline: 'always',
                color: COLORS.turquoise,
              }}
            >
              Let us know
            </Link>{' '}
            and we will add your logo to this page.
          </Typography>
        </Box>
        <Box
          sx={{
            pt: { _: 13, md: 16 },
            pb: { _: 13, md: 16 },
          }}
        >
          <Box sx={{ maxWidth: 350, mx: 'auto', mb: 5 }}>
            <Image
              src={cncfLogoColor}
              alt="cncfLogoColor"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Typography variant="h5" sx={{ mb: 0 }}>
            Crossplane is a Cloud Native Computing Foundation project
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 476, mx: 'auto' }}>
          <Image
            src={gradientGraphicSM}
            alt="gradient graphic"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Why;
