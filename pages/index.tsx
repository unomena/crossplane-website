import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Box } from '@mui/material';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import Header from '../src/elements/Header';
import PageProvider from '../src/components/PageProvider';

const getPerson = async () => {
  const randomPerson = Math.floor(Math.random() * (83 - 1 + 1)) + 1;

  try {
    const res = await axios.get(`https://swapi.dev/api/people/${randomPerson}/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

interface PageProps {
  person?: {
    name?: string;
  };
}

const Home: NextPage<PageProps> = ({ person }) => {
  // const [person, setPerson] = useState('');

  // useEffect(() => {
  //   (async () => {
  //     const person = await getPerson();
  //     setPerson(person);
  //   })();
  // }, []);

  return (
    <PageProvider>
      <Box pt={{ _: '37px', m: '80px' }} bgcolor="cornflower" textAlign="center">
        <Box mx="auto" maxWidth="1156px" px="30px">
          {/* <Header variant="h1" bold={true} sx={{ mb: { _: '10px', l: '25px' } }}>
            Star Wars Api Test
          </Header> */}
        </Box>
        {/* <Wave type="white" /> */}
      </Box>
      <Box textAlign="center" height={100}>
        {/* <Header variant="h2" color="fillBlackBlack">
          {person ? `Welcome to this test, ${person}!` : 'Loading...'}
        </Header> */}
      </Box>
    </PageProvider>
  );
};

export async function getStaticProps() {
  // const randomPerson = Math.floor(Math.random() * (83 - 1 + 1)) + 1;
  // const res = await axios.get(`https://swapi.dev/api/people/${randomPerson}/`);
  // console.log(res.data);
  const res = { data: null };

  // Pass data to the page via props
  return { props: { person: res.data } };
}

export default Home;
