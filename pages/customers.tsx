import React from 'react';

import { Box, SxProps, Typography } from '@mui/material';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';

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
              Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod
            </Typography>
          </Box>
          <Box sx={{ flex: 1, height: 700 }}></Box>
        </Box>
      </Section>
      <Section bgcolor="elephant" sx={{ py: 9 }}>
        <Box sx={customerSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 3 }}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body_normal" sx={{ maxWidth: 635 }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor.
          </Typography>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Customers;
