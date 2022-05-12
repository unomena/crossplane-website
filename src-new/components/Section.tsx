import React from 'react';

import { Box, Container } from '@mui/material';
import { SxProps } from '@mui/system';
import { COLORS } from 'src/theme';

const topRight: SxProps = {
  clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)',
  // mt: '-10%',
};
const topLeft: SxProps = {
  clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)',
  mt: '-10%',
};
const btmRight: SxProps = {
  clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
  // mb: '-10%',
};
const btmLeft: SxProps = {
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 90%)',
  // mb: '-10%',
};
const topBtmRight: SxProps = {
  clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)',
  // mt: '-10%',
};

const angleStyles = {
  topRight,
  topLeft,
  btmRight,
  btmLeft,
  topBtmRight,
};

type Props = {
  hasContainer?: Boolean;
  angleTop?: 'topRight' | 'topLeft';
  angleBottom?: 'btmRight' | 'btmLeft';
  angleTopBottom?: 'topBtmRight';
  bgcolor?: Boolean;
  sx?: SxProps;
  children: React.ReactNode;
};

const Section = ({
  hasContainer = true,
  angleTop,
  angleBottom,
  angleTopBottom,
  bgcolor,
  sx,
  children,
}: Props) => {
  let styles: SxProps = {
    bgcolor: bgcolor ? COLORS.elephant : 'transparent',
    ...sx,
  };
  if (angleTop) {
    styles = Object.assign(styles, { ...angleStyles[angleTop] });
  }
  if (angleBottom) {
    styles = Object.assign(styles, { ...angleStyles[angleBottom] });
  }
  if (angleTopBottom) {
    styles = Object.assign(styles, { ...angleStyles[angleTopBottom] });
  }
  return (
    <Box sx={styles}>
      {hasContainer ? <Container maxWidth="xl">{children}</Container> : children}
    </Box>
  );
};

export default Section;
