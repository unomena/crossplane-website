import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import { Box, SxProps } from '@mui/material';

const root: SxProps = {
  '.axis-vertical .slide': {
    my: 3.75,
  },
  '.axis-horizontal .slide': {
    mx: 1.875,
  },
  '.carousel.carousel-slider': {
    overflow: 'visible',
  },
  '.carousel .slider-wrapper': {
    overflow: 'visible',
  },
  '.carousel .slide': {
    textAlign: 'left',
  },
  '.slide > div': {
    opacity: '.25',
  },
  '.selected > div': {
    backgroundImage: `linear-gradient(-45deg, transparent 75px, #6D64F5 0%, #C9C3FF 100%)`,
    opacity: '1',
  },
};

type Props = {
  children: React.ReactChild[];
  axis?: 'vertical' | 'horizontal';
};

const Slider = ({ children, axis = 'horizontal' }: Props) => {
  return (
    <Box sx={root}>
      <Carousel
        axis={axis}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        interval={7000}
        infiniteLoop={true}
        centerMode={true}
      >
        {children}
      </Carousel>
    </Box>
  );
};

export default Slider;
