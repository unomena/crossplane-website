import React from 'react';

import { Box, Container } from '@mui/material';
import { SxProps } from '@mui/system';
import { COLORS } from 'src/theme';

type angleStylesProps = {
  topRight: SxProps;
  topLeft: SxProps;
  btmRight: SxProps;
  btmLeft: SxProps;
};

const angleStyles: angleStylesProps = {
  topRight: {
    clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)',
  },
  topLeft: {
    clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)',
  },
  btmRight: {
    clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)',
  },
  btmLeft: {
    clipPath: 'polygon(0 20%, 100% 0%, 100% 100%, 0 85%)',
  },
};

type Props = {
  hasContainer?: Boolean;
  angle?: 'topRight' | 'topLeft' | 'btmRight' | 'btmLeft';
  bgcolor?: 'firefly' | 'elephant';
  sx?: SxProps;
  children: React.ReactNode;
};

const Section = ({ hasContainer = true, angle, bgcolor, sx, children }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: COLORS[bgcolor],
        ...angleStyles[angle],
        ...sx,
      }}
    >
      {hasContainer ? <Container maxWidth="xl">{children}</Container> : children}
    </Box>
  );
};

export default Section;
