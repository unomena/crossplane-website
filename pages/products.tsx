import React from 'react';

import Image from 'next/image';

import { gradient_1, MQ } from 'src/theme';
import { Box, SxProps, Typography, Grid } from '@mui/material';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';
import CornerCard from 'src-new/elements/CornerCard';
import Slider from 'src-new/components/Slider';

import headerImg from 'public/new-images/products-page/products-header-bg.png';
import headerBg from 'public/new-images/home-page/header-bg.jpg';
import internalCloudImg from 'public/new-images/products-page/internal-cloud-platform.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import arrowCircle from 'public/new-images/icons/arrow-circle.svg';
import quoteCircle from 'public/new-images/icons/quote-circle.svg';
import shapesIcon from 'public/new-images/icons/shapes-icon.svg';

const productsSectionHeader: SxProps = {
  textAlign: 'center',
};
const caseStudiesSection: SxProps = {
  backgroundImage: `url(${headerBg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',

  '@media screen and (min-width: 1980px)': {
    backgroundSize: 'contain',
  },
};

const headerButtons: SxProps = {
  mt: 7.5,
  mb: 10,
  display: 'flex',
  alignItems: 'center',
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 2,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

type Props = {};

const Products = ({}: Props) => {
  return (
    <PageProvider displayTitle="Products">
      <Section sx={{ pt: 40, pb: 23.5, display: 'flex', position: 'relative' }}>
        <Grid container spacing={2} columns={12} sx={{ alignItems: 'center' }}>
          <Grid item md={6}>
            <Box>
              <Typography variant="h1_new" sx={{ mb: 3, ...gradient_1 }}>
                Upbound
              </Typography>
              <Typography variant="body_big">
                The easiest way to build, deploy, and manage your internal cloud platforms using
                control planes.
              </Typography>
              <Box sx={headerButtons}>
                <Button styleType="gradientContained" sx={{ width: 156, mr: 3 }}>
                  Try for free
                </Button>
                <Link href="/" muiProps={{ color: '#fff' }} hasArrow>
                  Contact Us
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'absolute',
                right: '0',
                top: '20%',
                bottom: '0',
                zIndex: '1',
              }}
            >
              <Box sx={{ position: 'relative', width: '656px', height: '901px' }}>
                <Image
                  src={headerImg.src}
                  alt="Products graphic"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 23.5, pb: 10 }}>
        <Box sx={productsSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 7.5 }}>
            A platform for building internal cloud platforms
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', height: '540px' }}>
          <Image
            src={internalCloudImg.src}
            alt="Internal cloud platform"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Section>
      <Section sx={{ pt: 23.5, pb: 34.125, ...caseStudiesSection }}>
        <Box sx={productsSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 3.75 }}>
            Any platform. Any business
          </Typography>
          <Typography variant="body_normal" sx={{ maxWidth: '886px', mx: 'auto' }}>
            Upbound can manage any infrastructure environment — cloud or on-prem. Customers compose
            their own custom API interface into their custom platform running on Upbound
          </Typography>
        </Box>
        <Box sx={{ my: 10, ...gridLayout }}>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h3_new"
                  sx={{
                    mb: 3,
                    lineHeight: '34px',
                  }}
                >
                  Internal Developer Platform
                </Typography>
                <Typography variant="body_small">
                  Upbound makes building Internal Developer Platforms straightforward. Platform
                  teams compose their custom cloud API, and Upbound dynamically renders a
                  self-service console for it.
                </Typography>
              </Box>

              <Box sx={{ position: 'relative', width: '48px', height: '48px', mt: 3 }}>
                <Image src={shapesIcon.src} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h3_new"
                  sx={{
                    mb: 3,
                    lineHeight: '34px',
                  }}
                >
                  Infrastructure-as-Code Modernization
                </Typography>
                <Typography variant="body_small">
                  Upbound’s control planes continuously reconcile infrastructure resources they
                  manage, eliminating configuration drift entirely. Using control planes, teams can
                  unify both their application and infrastructure deployment workflows.
                </Typography>
              </Box>

              <Box sx={{ position: 'relative', width: '48px', height: '48px', mt: 3 }}>
                <Image src={shapesIcon.src} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h3_new"
                  sx={{
                    mb: 3,
                    lineHeight: '34px',
                  }}
                >
                  Global Application Deployment
                </Typography>
                <Typography variant="body_small">
                  Deploy workloads across zones, regions, and vendors by building applications
                  against your Internal Cloud Platforms running in Upbound. Infrastructure
                  environment where the application is deployed simply becomes a configuration
                  detail chosen during deployment.
                </Typography>
              </Box>

              <Box sx={{ position: 'relative', width: '48px', height: '48px', mt: 3 }}>
                <Image src={shapesIcon.src} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
        </Box>
        <Box sx={productsSectionHeader}>
          <Typography variant="h3_new" sx={{ mb: 7.5 }}>
            Trusted by the industry’s best
          </Typography>
        </Box>
        <Slider>
          <CornerCard cornerSize="cornerLG" icon={quoteCircle} iconSize="normal">
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
          </CornerCard>

          <CornerCard cornerSize="cornerLG" icon={quoteCircle} iconSize="normal">
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
          </CornerCard>
        </Slider>
      </Section>
    </PageProvider>
  );
};

export default Products;
