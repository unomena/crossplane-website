import React from 'react';

import Image from 'next/image';

import { fontAvenirRomanItalic, gradient_1, MQ } from 'src/theme';
import { Box, SxProps, Typography, Grid } from '@mui/material';

import quotes from 'src-new/constants/quotes';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import CornerCard from 'src-new/elements/CornerCard';
import Slider from 'src-new/components/Slider';

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

const logoContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '250px',
  maxWidth: '355px',
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

type QuoteCardProps = {
  quote: {
    title: string;
    body: string;
    person: string;
    role: string;
    logo: string | StaticImport;
    logoSize: {
      width: number;
      height: number;
    };
  };
};

const QuoteCard = ({ quote }: QuoteCardProps) => {
  const { title, body, person, role, logo, logoSize } = quote;

  return (
    <CornerCard cornerSize="cornerLG" icon={quoteCircle} iconSize="normal">
      <Box display="flex" flexDirection="column">
        <Box flex={1}>
          <Typography
            variant="h3_new"
            sx={{
              mb: 3,
              lineHeight: '34px',
              ...gradient_1,
            }}
          >
            {title}
          </Typography>
          <Typography variant="body_small">{body}</Typography>
        </Box>
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ position: 'relative', display: 'flex', mr: 3 }}>
            <Image src={logo} alt="company logo" width={logoSize.width} height={logoSize.height} />
          </Box>
          <Box>
            <Typography variant="h6_new">{person}</Typography>
            <Typography variant="body_xs" sx={{ ...fontAvenirRomanItalic, maxWidth: '200px' }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CornerCard>
  );
};

type Props = {};

const Customers = ({}: Props) => {
  return (
    <PageProvider displayTitle="Customers">
      <Section sx={{ pt: 23.5, pb: 26, overflow: 'hidden' }}>
        <Grid container spacing={2} columns={12} sx={{ alignItems: 'center' }}>
          <Grid item md={7}>
            <Box>
              <Typography variant="h1_new" sx={{ mb: 3 }}>
                Our Customers
              </Typography>
              <Typography variant="body_big">
                Upbound is trusted by leading enterprises in various industries
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Slider axis="vertical">
              {quotes.map((quote) => (
                <QuoteCard key={quote.title} quote={quote} />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Section>
      <Section bgcolor angleTop="topLeft" sx={{ pt: 23.5, pb: 34.125 }}>
        <Box sx={customerSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 7.5 }}>
            Trusted by the industry's best
          </Typography>
        </Box>
        <Box sx={gridLayout}>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box sx={logoContainer}>
              <Box sx={logoSVG}>
                <Image src={dfdsLogo} alt="DFDS" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box sx={logoContainer}>
              <Box sx={logoSVG}>
                <Image src={grupoLogo} alt="Grupo Boticario" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box sx={logoContainer}>
              <Box sx={logoSVG}>
                <Image src={dbLogo} alt="DB" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box sx={logoContainer}>
              <Box sx={logoSVG}>
                <Image src={plotlyLogo} alt="plotly" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box sx={logoContainer}>
              <Box sx={logoSVG}>
                <Image src={ptcLogo} alt="ptc" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Customers;
