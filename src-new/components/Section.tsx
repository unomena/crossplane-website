import React from 'react';

import { Box } from '@mui/material';
import { SxProps } from '@mui/system';
import { COLORS } from 'src/theme';

type Props = {
  bgcolor: 'darkBlue1' | 'darkBlue2';
  sx?: SxProps;
  children: React.ReactNode;
};

const Section = ({ bgcolor, sx, children }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: COLORS[bgcolor],
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
