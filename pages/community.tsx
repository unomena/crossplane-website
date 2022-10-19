import React from 'react';

import Image from 'next/image';

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
// import placeholder from 'public/placeholder.png';

const headerSection: SxProps = {
  position: 'relative',
  pt: { _: 13, md: 24 },
  pb: { _: 13, md: 16 },
  textAlign: 'center',
  maxWidth: 950,
  mx: 'auto',
};

const cardStyles: SxProps = {
  position: 'absolute',
  zIndex: 2,
  bottom: -150,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
  maxWidth: 750,
  p: 5,
  mx: 'auto',
};

const btnContainer: SxProps = {
  mt: 4,
  // mb: { _: 6, sm: 10 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: { _: 'center', md: 'left' },
  flexDirection: { _: 'column', sm: 'row' },

  '& .MuiButton-startIcon': {
    mr: 1.25,
    display: 'flex',
    alignItems: 'center',
  },

  '& > button, a': {
    mx: { _: 0, sm: '10px' },

    ':first-of-type': {
      ml: 0,
      mb: { _: '20px', sm: 0 },
    },
    '& ~ a': {
      mr: 0,
    },
  },
};

// TO DO: INVESTIGATE FIX FOR IMAGE RESPONSIVENESS RELATED TO HEIGHT CONCERNS
// const responsiveImg: SxProps = {
//   width: '100%',
//   maxWidth: '450px',
//   my: 10,

//   '& > span': {
//     position: 'unset !important',
//   },

//   '& img': {
//     objectFit: 'contain',
//     width: '100% !important',
//     position: 'relative !important',
//     height: 'unset !important',
//   },

//   [MQ.lg]: {
//     maxWidth: '100%',
//   },
// };

type Props = {};

const Why = ({}: Props) => {
  return (
    <PageProvider
      ctaTitle="Are you using Crossplane in Production"
      ctaParagraph={'Share your success story and receive special Crossplane swag.'}
      ctaBtnText="Share your story"
      ctaBtnLink="/upbound-preview"
    >
      <Section sx={headerSection}>
        <Typography variant="h2" color={COLORS.linkWater}>
          Companies with Commercial Crossplane Offerings
        </Typography>
        {/* <Box sx={responsiveImg}>
          <Image src={placeholder} alt="placeholder" layout="fill" />
        </Box> */}
        <Box sx={cardStyles}>
          <Box sx={{ position: 'relative', width: { _: '100%', md: '40%' } }}>
            <Image src={upboundLogo} alt="upboundLogo" layout="responsive" />
          </Box>
          <Box sx={{ width: { _: '100%', md: '60%' } }}>
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
          pb: { _: 16, md: 23.5 },
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
          }}
        >
          <Box sx={{ position: 'relative', maxWidth: 350, mx: 'auto', mb: 5 }}>
            <Image src={cncfLogoColor} alt="cncfLogoColor" layout="responsive" />
          </Box>
          <Typography variant="h5">
            Crossplane is a Cloud Native Computing Foundation project
          </Typography>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Why;
