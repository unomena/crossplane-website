import React from 'react';

import { COLORS } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import { Anchor } from 'src/elements/Anchor';
import { AnchorButton } from 'src/elements/Button';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import { Carousel } from './Carousel';

import * as routes from 'src/routes';

import ArrowRight from 'src/svg/ArrowRight';

export const CallToActionCarousel: React.FC<{
  currentPage: Parameters<typeof Carousel>[0]['currentPage'];
}> = ({ currentPage }) => (
  <Box mb={{ _: '0', md: '35px' }}>
    <Carousel currentPage={currentPage} />
    <AnchorButton
      href={routes.cloudRegisterUrl}
      btnType="aquaMarineFill"
      bold={true}
      hasShadow={true}
      sx={{
        mt: '35px',
        mb: { _: '8px', sm: '20px' },
        width: { _: '100%', sm: 'auto' },
      }}
    >
      Try Upbound for Free
    </AnchorButton>
    <Hidden smUp>
      <AnchorButton
        href={routes.contactSalesUrl}
        btnType="whiteOutline"
        bold={true}
        hasShadow={true}
        sx={{ width: '100%' }}
      >
        Request a Demo
      </AnchorButton>
    </Hidden>
    <Hidden mdDown>
      <Paragraph color="white">
        Get a free tour from a team specialist,{' '}
        <Anchor href={routes.contactSalesUrl}>
          <Span bold={true} sx={{ mr: '5px' }}>
            Request a Demo
          </Span>
          <ArrowRight fill={COLORS.white} width="13px" height="12px" />
        </Anchor>
      </Paragraph>
    </Hidden>
  </Box>
);
