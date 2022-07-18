import React from 'react';

import { Box, Container } from '@mui/material';
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
      sx={{
        bgcolor: bgcolor ? COLORS.elephant : 'transparent',
        ...styles,
      }}
    >
      {hasContainer ? <Container maxWidth="xl">{children}</Container> : children}
    </Box>
  );
};

export default Section;
