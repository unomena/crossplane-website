import React from 'react';

import Image from 'next/image';

import { gradient_1, MQ } from 'src/theme';
import { Box, SxProps, Typography, Grid } from '@mui/material';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import { CornerCard } from 'src-new/elements/CornerCard';

import dfdsLogo from 'public/new-images/trusted-logos/dfds.svg';
import grupoLogo from 'public/new-images/trusted-logos/grupo.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import ptcLogo from 'public/new-images/trusted-logos/ptc.svg';
import arrowCircle from 'public/new-images/icons/arrow-circle.svg';
import quoteCircle from 'public/new-images/icons/quote-circle.svg';

const customerSectionHeader: SxProps = {
  textAlign: 'center',
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 2,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

const logoSVG: SxProps = {
  width: '100%',
  height: '100%',
  maxHeight: '80px',
  position: 'relative',
};

const iconBtmRight: SxProps = {
  position: 'absolute',
  content: '""',
  bottom: '0',
  right: '0',
  zIndex: '-2',
};

type Props = {};

const Customers = ({}: Props) => {
  return (
    <PageProvider displayTitle="Customers">
      <Section bgcolor="firefly" sx={{ py: 23.5 }}>
        <Grid container spacing={2} columns={12} sx={{ alignItems: 'center' }}>
          <Grid item md={7}>
            <Box>
              <Typography variant="h1_new" sx={{ mb: 3 }}>
                Our Customers
              </Typography>
              <Typography variant="body_big">
                Upbound is trusted by leading enterprises in various industries
              </Typography>
            </Box>{' '}
          </Grid>
          <Grid item md={5}>
            <CornerCard styleType="quoteCard">
              <Box>
                <Typography
                  variant="h3_new"
                  sx={{
                    mb: 3,
                    ...gradient_1,
                  }}
                >
                  We chose Upbound as our partner in this important transformation…
                </Typography>
                <Typography variant="body_small">
                  …because they created Crossplane and offer enterprise-grade products and services
                  that will help us accelerate time to market."
                </Typography>
              </Box>
              <Box sx={iconBtmRight} width={'84px'} height={'84px'}>
                <Image src={quoteCircle.src} alt="arrow icon" layout="fill" objectFit="contain" />
              </Box>
            </CornerCard>
          </Grid>
        </Grid>
      </Section>
      <Section bgcolor="elephant" sx={{ pt: 23.5, pb: 34.125 }}>
        <Box sx={customerSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 7.5 }}>
            Trusted by the industry's best
          </Typography>
        </Box>
        <Box sx={gridLayout}>
          <CornerCard styleType="logoContained">
            <Box sx={logoSVG}>
              <Image src={dfdsLogo.src} alt="DFDS" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={iconBtmRight} width={'48px'} height={'48px'}>
              <Image src={arrowCircle.src} alt="arrow icon" layout="fill" objectFit="contain" />
            </Box>
          </CornerCard>
          <CornerCard styleType="logoContained">
            <Box sx={logoSVG}>
              <Image src={grupoLogo.src} alt="Grupo Boticario" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={iconBtmRight} width={'48px'} height={'48px'}>
              <Image src={arrowCircle.src} alt="arrow icon" layout="fill" objectFit="contain" />
            </Box>
          </CornerCard>
          <CornerCard styleType="logoContained">
            <Box sx={logoSVG}>
              <Image src={dbLogo.src} alt="DB" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={iconBtmRight} width={'48px'} height={'48px'}>
              <Image src={arrowCircle.src} alt="arrow icon" layout="fill" objectFit="contain" />
            </Box>
          </CornerCard>
          <CornerCard styleType="logoContained">
            <Box sx={logoSVG}>
              <Image src={plotlyLogo.src} alt="plotly" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={iconBtmRight} width={'48px'} height={'48px'}>
              <Image src={arrowCircle.src} alt="arrow icon" layout="fill" objectFit="contain" />
            </Box>
          </CornerCard>
          <CornerCard styleType="logoContained">
            <Box sx={logoSVG}>
              <Image src={ptcLogo.src} alt="ptc" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={iconBtmRight} width={'48px'} height={'48px'}>
              <Image src={arrowCircle.src} alt="arrow icon" layout="fill" objectFit="contain" />
            </Box>
          </CornerCard>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Customers;
