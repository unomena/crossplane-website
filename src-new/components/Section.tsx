import React from 'react';

import { Box, Breakpoint, Container } from '@mui/material';
import { SxProps } from '@mui/system';
import { COLORS, MQ } from 'src/theme';

const topRight: SxProps = {
  clipPath: 'polygon(0 45px, 100% 0, 100% 100%, 0% 100%)',
  // clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)',
  // [MQ.xl]: {
  //   clipPath: 'polygon(0 7%, 100% 0, 100% 100%, 0% 100%)',
  // },
};
const topLeft: SxProps = {
  clipPath: 'polygon(0 0, 100% 45px, 100% 100%, 0% 100%)',
  // clipPath: 'polygon(0 0, 100% 7%, 100% 100%, 0% 100%)',
  // [MQ.xl]: {
  //   clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)',
  // },
};
const btmRight: SxProps = {
  clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)',
  [MQ.xl]: {
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
  },
};
const btmLeft: SxProps = {
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 97%)',
  [MQ.xl]: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 90%)',
  },
};
const topBtmRight: SxProps = {
  clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0% 100%)',
  [MQ.xl]: {
    clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)',
  },
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
  maxWidth?: Breakpoint;
  sx?: SxProps;
  id?: string;
  children: React.ReactNode;
};

const Section = ({
  hasContainer = true,
  angleTop,
  angleBottom,
  angleTopBottom,
  bgcolor,
  maxWidth = 'xl',
  sx,
  id,
  children,
}: Props) => {
  let styles: SxProps = {
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
    <Box
      id={id}
      sx={{
        bgcolor: bgcolor ? COLORS.elephant : 'transparent',
        ...styles,
      }}
    >
      {hasContainer ? <Container maxWidth={maxWidth}>{children}</Container> : children}
    </Box>
  );
};

export default Section;
