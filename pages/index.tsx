import React from 'react';
import type { NextPage } from 'next';

import { Box } from '@mui/material';

import Header from 'src/elements/Header';
import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';

const Home: NextPage = () => {
  return (
    <PageProvider>
      <Box pt={{ _: '37px', m: '80px' }} bgcolor="cornflower" textAlign="center">
        <Box mx="auto" maxWidth="1156px" px="30px">
          <Header variant="h1" bold={true} sx={{ mb: { _: '10px', l: '25px' } }}>
            Star Wars Api Test
          </Header>
        </Box>
        <Wave type="white" />
      </Box>
    </PageProvider>
  );
};

export default Home;
