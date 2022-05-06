import React from 'react';

import { Button as MuiButton, ButtonProps, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

const defaultStyles: SxProps = {
  fontFamily: 'Avenir-Black',
  textTransform: 'none',
  borderRadius: 24,
  px: 4,
  py: 2,
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
};

type typeStylesProps = {
  whiteContained: SxProps;
  purpleContained: SxProps;
};

const typeStyles: typeStylesProps = {
  whiteContained: {
    backgroundColor: '#fff',
    color: COLORS.purple,

    '&:hover': {
      backgroundColor: '#fff',
      transform: 'scale(1.1)',
    },
  },
  purpleContained: {
    backgroundColor: COLORS.purple,
    color: '#fff',

    '&:hover': {
      backgroundColor: COLORS.purple,
      transform: 'scale(1.1)',
    },
  },
};

type sizeStylesProps = {
  small: SxProps;
  default: SxProps;
  large: SxProps;
};

const sizeStyles: sizeStylesProps = {
  small: {
    fontSize: '14px',
    lineHeight: '14px',
  },
  default: {
    fontSize: '16px',
    lineHeight: '16px',
  },
  large: {
    fontSize: '18px',
    lineHeight: '18px',
  },
};

type Props = {
  styleType?: 'whiteContained' | 'purpleContained';
  sizeType?: 'small' | 'default' | 'large';
  sx?: SxProps;
} & ButtonProps;

export const Button = ({
  children,
  styleType = 'whiteContained',
  sizeType = 'default',
  sx,
  ...props
}: Props) => {
  return (
    <MuiButton
      sx={{
        ...defaultStyles,
        ...typeStyles[styleType],
        ...sizeStyles[sizeType],
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
