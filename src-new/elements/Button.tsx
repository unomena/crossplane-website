import React from 'react';

import { Box, Button as MuiButton, ButtonProps, CircularProgress, SxProps } from '@mui/material';
import { COLORS, fontAvenirBold, fontAvenirRoman, MQ } from 'src/theme';

const scale = 1.05;

const hoverScale: SxProps = {
  transform: { md: `scale(${scale})` },
};

const defaultStyles: SxProps = {
  textTransform: 'none',
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
};

const whiteContained: SxProps = {
  backgroundColor: '#fff',
  color: COLORS.cornflower,

  '&:hover': {
    backgroundColor: '#fff',
    ...hoverScale,
  },
};

const whiteOutlined: SxProps = {
  backgroundColor: 'unset',
  color: '#fff',
  border: '1px solid #fff',

  '&:hover': {
    backgroundColor: 'unset',
    ...hoverScale,
  },
};

const cornflowerContained: SxProps = {
  backgroundColor: COLORS.cornflower,
  color: '#fff',

  '&:hover': {
    backgroundColor: COLORS.cornflower,
    ...hoverScale,
  },
};

const gradientContained: SxProps = {
  backgroundImage: `linear-gradient(-55deg, ${COLORS.turquoise} 0%, ${COLORS.cornflower} 100%)`,
  color: '#fff',

  '&:hover': {
    ...hoverScale,
  },
};

const linkWaterContained: SxProps = {
  backgroundColor: COLORS.linkWater,
  color: COLORS.firefly,

  '&:hover': {
    backgroundColor: COLORS.linkWater,
    ...hoverScale,
  },
};

const disabled: SxProps = {
  backgroundColor: '#cccccc',
  color: 'rgba(0, 0, 0, 0.26)',

  '&:hover': {
    backgroundColor: '#cccccc',
  },
};

const typeStyles = {
  whiteContained,
  whiteOutlined,
  cornflowerContained,
  gradientContained,
  linkWaterContained,
  disabled,
};

const small: SxProps = {
  ...fontAvenirRoman,
  fontSize: '14px',
  lineHeight: '14px',
  borderRadius: '20px',
  px: '16px',
  height: '38px',
};

const normal: SxProps = {
  ...fontAvenirBold,
  fontSize: '16px',
  lineHeight: '16px',
  borderRadius: '24px',
  px: '30px',
  height: '48px',
};

const large: SxProps = {
  ...fontAvenirBold,
  borderRadius: '32px',
  fontSize: '14px',
  lineHeight: '18px',
  px: '14px',
  height: '52px',

  [MQ.md]: {
    fontSize: '18px',
    lineHeight: '18px',
    px: '36px',
    height: '64px',
  },
};

const sizeStyles = {
  small,
  normal,
  large,
};

const loadingContainer: SxProps = {
  position: 'absolute',
};

type Props = {
  styleType?:
    | 'whiteContained'
    | 'whiteOutlined'
    | 'cornflowerContained'
    | 'gradientContained'
    | 'linkWaterContained'
    | 'disabled';
  sizeType?: 'small' | 'normal' | 'large';
  loading?: boolean;
} & ButtonProps;

const Button = ({
  children,
  styleType = 'whiteContained',
  sizeType = 'normal',
  loading,
  ...props
}: Props) => {
  return (
    <MuiButton
      {...props}
      sx={{
        ...defaultStyles,
        ...typeStyles[styleType],
        ...sizeStyles[sizeType],
        ...props.sx,
      }}
    >
      {children}
      {loading && (
        <Box sx={loadingContainer}>
          <CircularProgress size={24} />
        </Box>
      )}
    </MuiButton>
  );
};

export default Button;
