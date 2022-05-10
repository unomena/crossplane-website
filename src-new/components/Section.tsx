import React from 'react';

import { Box, Container } from '@mui/material';
import { SxProps } from '@mui/system';
import { COLORS } from 'src/theme';

type angleStylesProps = {
  1: SxProps;
  2: SxProps;
  3: SxProps;
  4: SxProps;
};

const angleStyles: angleStylesProps = {
  1: {
    fontSize: '14px',
    lineHeight: '14px',
  },
  2: {
    fontSize: '16px',
    lineHeight: '16px',
  },
  3: {
    fontSize: '18px',
    lineHeight: '18px',
  },
  4: {
    fontSize: '18px',
    lineHeight: '18px',
  },
};

type Props = {
  hasContainer?: Boolean;
  angle?: '1' | '2' | '3' | '4';
  bgcolor: 'firefly' | 'elephant';
  sx?: SxProps;
  children: React.ReactNode;
};

const Section = ({ hasContainer = true, angle, bgcolor, sx, children }: Props) => {
  return (
    <>
      {angle && (
        <Box
          sx={{
            ...angleStyles[angle],
          }}
        />
      )}
      <Box
        sx={{
          bgcolor: COLORS[bgcolor],
          ...sx,
        }}
      >
        {hasContainer ? <Container maxWidth="xl">{children}</Container> : children}
      </Box>
    </>
  );
};

export default Section;
