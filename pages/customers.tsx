import React from 'react';

import Image from 'next/image';

import { Box, SxProps, Typography } from '@mui/material';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import { CornerCard } from 'src-new/elements/CornerCard';

import dfdsLogo from 'public/new-images/trusted-logos/dfds.svg';
import grupoLogo from 'public/new-images/trusted-logos/grupo.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import ptcLogo from 'public/new-images/trusted-logos/ptc.svg';

const headerSectionLeft: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  ml: 21,
};

const customerSectionHeader: SxProps = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
};

type Props = {};

const Customers = ({}: Props) => {
  return (
    <PageProvider displayTitle="Customers">
      <Section bgcolor="firefly">
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box sx={headerSectionLeft}>
            <Typography variant="h1_new" sx={{ mb: 3 }}>
              Our Customers
            </Typography>
            <Typography variant="body_big" sx={{ maxWidth: 475 }}>
              Upbound is trusted by leading enterprises in various industries
            </Typography>
          </Box>
          <Box sx={{ flex: 1, height: 700 }}></Box>
        </Box>
      </Section>
      <Section bgcolor="elephant" sx={{ pt: 23.5, pb: 34.125 }}>
        <Box sx={customerSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 3 }}>
            Trusted by the industry's best
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          <CornerCard styleType="logoContained">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                p: 3,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '80px',
                  position: 'relative',
                }}
              >
                <Image src={dfdsLogo.src} alt="DFDS" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard styleType="logoContained">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                p: 3,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '80px',
                  position: 'relative',
                }}
              >
                <Image
                  src={grupoLogo.src}
                  alt="Grupo Boticario"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard styleType="logoContained">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                p: 3,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '80px',
                  position: 'relative',
                }}
              >
                <Image src={dbLogo.src} alt="DB" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard styleType="logoContained">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                p: 3,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '80px',
                  position: 'relative',
                }}
              >
                <Image src={plotlyLogo.src} alt="plotly" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard styleType="logoContained">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                p: 3,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '80px',
                  position: 'relative',
                }}
              >
                <Image src={ptcLogo.src} alt="ptc" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Customers;
