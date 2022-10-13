/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/react';
import { Box, Typography } from '@mui/material';

import PageProvider from 'src/components/PageProvider';

import { Link } from 'src/elements/Anchor';

const FourOhFour: React.FC = () => {
  return (
    <PageProvider displayTitle="Crossplane - Page Not Found">
      <Box textAlign="center" mx="auto" px="30px" pt="180px" maxWidth="900px">
        <Typography variant="h1" color="white" sx={{ mb: '30px', fontWeight: 600 }}>
          404
        </Typography>
        <Typography variant="h1" color="white" sx={{ mb: '30px', fontWeight: 600 }}>
          Sorry, we can’t find the page you’re looking for…
        </Typography>
        <Typography variant="h6" color="white" sx={{ mb: '25px' }}>
          Feel free to go <Link href="/">back to the homepage</Link> or check out these helpful
          links.
        </Typography>
      </Box>
    </PageProvider>
  );
};

export default FourOhFour;
