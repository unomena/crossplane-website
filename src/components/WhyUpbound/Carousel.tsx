import React from 'react';

import { styled } from '@mui/system';
import { Box } from '@mui/material';

import { Link } from 'src/elements/Anchor';

import * as routes from 'src/routes';

import carouselPip from 'public/why-upbound/carousel-pip.svg';
import carouselPipCurrent from 'public/why-upbound/carousel-pip-current.svg';

const CarouselItem = styled(Box)`
  a {
    line-height: 12px;
    height: 12px;
    padding: 0;
  }

  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  & > a > img:first-of-type {
    display: none;
  }

  &:hover > a > img {
    display: none;

    &:first-of-type {
      display: inline;
    }
  }
`;

const CarouselPip: React.FC<{ isCurrent?: boolean; to: string }> = ({ isCurrent, to }) => {
  return (
    <CarouselItem className={isCurrent ? 'current' : ''}>
      {isCurrent && <img src={carouselPipCurrent.src} alt="current page carousel pip" />}
      {!isCurrent && (
        <Link href={to}>
          <img src={carouselPipCurrent.src} alt="current page carousel pip" />
          <img src={carouselPip.src} alt="Page carousel pip" />
        </Link>
      )}
    </CarouselItem>
  );
};

const Carousel: React.FC<{ currentPage: 'universal' | 'beyond' | 'empower' | 'self-service' }> = ({
  currentPage,
}) => {
  return (
    <Box display="flex" justifyContent="center">
      <CarouselPip
        to={routes.whyUpboundUniversalCloudPlatformRoute}
        isCurrent={currentPage === 'universal'}
      />
      <CarouselPip to={routes.whyUpboundBeyondIacRoute} isCurrent={currentPage === 'beyond'} />
      <CarouselPip to={routes.whyUpboundEmpowerRoute} isCurrent={currentPage === 'empower'} />
      <CarouselPip
        to={routes.whyUpboundSelfServiceRoute}
        isCurrent={currentPage === 'self-service'}
      />
    </Box>
  );
};

export { Carousel };
