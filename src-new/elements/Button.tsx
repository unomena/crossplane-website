import React from 'react';

import { Button as MuiButton, ButtonProps, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

const scale = 1.05;

const defaultStyles: SxProps = {
  textTransform: 'none',
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
};

const whiteContained: SxProps = {
  backgroundColor: '#fff',
  color: COLORS.cornflower,

  '&:hover': {
    backgroundColor: '#fff',
    transform: `scale(${scale})`,
  },
};

const whiteOutlined: SxProps = {
  backgroundColor: 'unset',
  color: '#fff',
  border: '1px solid #fff',

  '&:hover': {
    backgroundColor: 'unset',
    transform: `scale(${scale})`,
  },
};

const cornflowerContained: SxProps = {
  backgroundColor: COLORS.cornflower,
  color: '#fff',

  '&:hover': {
    backgroundColor: COLORS.cornflower,
    transform: `scale(${scale})`,
  },
};

const gradientContained: SxProps = {
  backgroundImage: `linear-gradient(-55deg, ${COLORS.turquoise} 0%, ${COLORS.cornflower} 100%)`,
  color: '#fff',

  '&:hover': {
    transform: `scale(${scale})`,
  },
};

const linkWaterContained: SxProps = {
  backgroundColor: COLORS.linkWater,
  color: COLORS.firefly,

  '&:hover': {
    backgroundColor: COLORS.linkWater,
    transform: `scale(${scale})`,
  },
};

const typeStyles = {
  whiteContained,
  whiteOutlined,
  cornflowerContained,
  gradientContained,
  linkWaterContained,
};

const small: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: '14px',
  lineHeight: '14px',
  borderRadius: '20px',
  px: '16px',
  height: '38px',
};

const normal: SxProps = {
  fontFamily: 'Avenir-Black',
  fontSize: '16px',
  lineHeight: '16px',
  borderRadius: '24px',
  px: '30px',
  height: '48px',
};

const large: SxProps = {
  fontFamily: 'Avenir-Heavy',
  fontSize: '18px',
  lineHeight: '18px',
  borderRadius: '32px',
  px: '36px',
  height: '64px',
};

const sizeStyles = {
  small,
  normal,
  large,
};

type Props = {
  styleType?:
    | 'whiteContained'
    | 'whiteOutlined'
    | 'cornflowerContained'
    | 'gradientContained'
    | 'linkWaterContained';
  sizeType?: 'small' | 'normal' | 'large';
} & ButtonProps;

const Button = ({
  children,
  styleType = 'whiteContained',
  sizeType = 'normal',
  ...props
}: Props) => {
  return (
    <MuiButton
      variant=""
      {...props}
      sx={{
        ...defaultStyles,
        ...typeStyles[styleType],
        ...sizeStyles[sizeType],
        ...props.sx,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
