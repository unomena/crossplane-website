import React from 'react';

import Image from 'next/image';

import { gradient_1, MQ } from 'src/theme';
import { Box, SxProps, Typography, Grid } from '@mui/material';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
// import Link from 'src-new/elements/Link';
import CornerCard from 'src-new/elements/CornerCard';
import Slider from 'src-new/components/Slider';

import ArrowRight from 'src-new/svg/ArrowRight';
import headerImg from 'public/new-images/products-page/products-header.png';
import internalCloudImg from 'public/new-images/products-page/internal-cloud-platform.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import quoteCircle from 'public/new-images/icons/quote-circle.svg';

import * as routes from 'src/routes';

const productsSectionHeader: SxProps = {
  textAlign: 'center',
};

const headerButtons: SxProps = {
  mt: 7.5,
  mb: 10,
  display: 'flex',
  alignItems: 'center',
};

const iconBtmRight: SxProps = {
  position: 'absolute',
  content: '""',
  bottom: '0',
  right: '0',
  zIndex: '-2',
};

// const gridLayout: SxProps = {
//   display: 'grid',
//   gap: 2,
//   gridTemplateColumns: 'repeat(1, 1fr)',

//   [MQ.md]: {
//     gridTemplateColumns: 'repeat(3, 1fr)',
//   },
// };

// const logoSVG: SxProps = {
//   width: '100%',
//   height: '100%',
//   maxHeight: '80px',
//   position: 'relative',
// };

// const iconBtmRight: SxProps = {
//   position: 'absolute',
//   content: '""',
//   bottom: '0',
//   right: '0',
//   zIndex: '-2',
// };

type Props = {};

const Products = ({}: Props) => {
  return (
    <PageProvider displayTitle="Products">
      <Section sx={{ py: 34.125, overflow: 'hidden' }}>
        <Grid container spacing={2} columns={12} sx={{ alignItems: 'center' }}>
          <Grid item md={7}>
            <Box>
              <Typography variant="h1_new" sx={{ mb: 3, ...gradient_1 }}>
                Upbound
              </Typography>
              <Typography variant="body_big">
                The easiest way to build, deploy, and manage your internal cloud platforms using
                control planes.
              </Typography>
              <Box sx={headerButtons}>
                <Button
                  styleType="gradientContained"
                  sizeType="large"
                  sx={{ width: 208, mr: '10px', '& > .MuiButton-iconSizeMedium': { mr: '10px' } }}
                >
                  Get Started
                </Button>
                <Button
                  styleType="whiteOutlined"
                  sizeType="large"
                  sx={{ width: 208, ml: '10px', '& > .MuiButton-iconSizeMedium': { ml: '16px' } }}
                  endIcon={<ArrowRight />}
                >
                  Contact Us
                </Button>
                {/* <Link href={routes.faqRoute} endIcon={<ArrowRight />}>
                  Contact Us
                </Link> */}
              </Box>
            </Box>{' '}
          </Grid>
          <Grid item md={5}>
            <Box sx={{ position: 'relative', width: '100%', height: '905px' }}>
              <Image src={headerImg.src} alt="Products graphic" layout="fill" objectFit="contain" />
            </Box>
          </Grid>
        </Grid>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 23.5, pb: 10 }}>
        <Box sx={productsSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 7.5 }}>
            A platform for building internal cloud platforms
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', height: '540px' }}>
            <Image
              src={internalCloudImg.src}
              alt="Internal cloud platform"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
      </Section>
      <Section sx={{ pt: 23.5, pb: 10 }}>
        <Box sx={productsSectionHeader}>
          <Typography variant="h3_new" sx={{ mb: 7.5 }}>
            Trusted by the industry’s best
          </Typography>
        </Box>
        <Slider>
          <CornerCard styleType="quoteCard">
            <Box>
              <Typography
                variant="h3_new"
                sx={{
                  mb: 3,
                  lineHeight: '34px',
                  ...gradient_1,
                }}
              >
                We chose Upbound as our partner in this important transformation…
              </Typography>
              <Typography variant="body_small">
                …because they created Crossplane and offer enterprise-grade products and services
                that will help us accelerate time to market."
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ position: 'relative', width: '105px', height: '33px', mr: 2 }}>
                  <Image src={plotlyLogo.src} alt="plotly" layout="fill" objectFit="contain" />
                </Box>
                <Box>
                  <Typography variant="h6_new">Jack Parmer</Typography>
                  <Typography
                    variant="body_xs"
                    sx={{ fontFamily: 'Avenir-Oblique', maxWidth: '200px' }}
                  >
                    CEO and co-founder Plotly
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={iconBtmRight} width={'84px'} height={'84px'}>
              <Image src={quoteCircle.src} alt="arrow icon" layout="fill" objectFit="contain" />
            </Box>
          </CornerCard>

          <CornerCard styleType="quoteCard">
            <Box>
              <Typography
                variant="h3_new"
                sx={{
                  mb: 3,
                  lineHeight: '34px',
                  ...gradient_1,
                }}
              >
                Upbound Cloud automates and simplifies…
              </Typography>
              <Typography variant="body_small">
                …how software developers manage the lifecycle of our application portfolios,
                allowing us to innovate more quickly.
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ position: 'relative', width: '52px', height: '37px', mr: 2 }}>
                  <Image src={dbLogo.src} alt="DB" layout="fill" objectFit="contain" />
                </Box>
                <Box>
                  <Typography variant="h6_new">Jan Willies</Typography>
                  <Typography
                    variant="body_xs"
                    sx={{ fontFamily: 'Avenir-Oblique', maxWidth: '200px' }}
                  >
                    Platform Architect at Accenture referring to Deutsche Bahn
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={iconBtmRight} width={'84px'} height={'84px'}>
              <Image src={quoteCircle.src} alt="arrow icon" layout="fill" objectFit="contain" />
            </Box>
          </CornerCard>
        </Slider>
      </Section>
    </PageProvider>
  );
};

export default Products;
