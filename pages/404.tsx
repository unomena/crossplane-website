import React from 'react';

import { Box, Typography } from '@mui/material';

import PageProvider from 'src/components/PageProvider';

import Link from 'src/elements/Link';
import { COLORS } from 'src/theme';

const FourOhFour: React.FC = () => {
  return (
    <PageProvider hideCTACard displayTitle="Crossplane - Page Not Found">
      <Box
        textAlign="center"
        mx="auto"
        px="30px"
        pt="180px"
        maxWidth="900px"
        sx={{ pt: { _: 16, md: 24 }, pb: { _: 0, md: 6 } }}
      >
        <Typography variant="h1" color="white" sx={{ mb: '30px', fontWeight: 600 }}>
          404
        </Typography>
        <Typography variant="h1" color="white" sx={{ mb: '30px', fontWeight: 600 }}>
          Sorry, we can’t find the page you’re looking for…
        </Typography>
        <Typography variant="h6" color="white" sx={{ mb: '25px' }}>
          Feel free to go{' '}
          <Link href="/" muiProps={{ color: COLORS.turquoise }}>
            back to our homepage
          </Link>
          {''}.
        </Typography>
      </Box>
    </PageProvider>
  );
};

export default FourOhFour;
