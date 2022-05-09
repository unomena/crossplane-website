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

const whiteContained: SxProps = {
  backgroundColor: '#fff',
  color: COLORS.purple,

  '&:hover': {
    backgroundColor: '#fff',
    transform: 'scale(1.1)',
  },
};

const purpleContained: SxProps = {
  backgroundColor: COLORS.purple,
  color: '#fff',

  '&:hover': {
    backgroundColor: COLORS.purple,
    transform: 'scale(1.1)',
  },
};

const typeStyles = {
  whiteContained,
  purpleContained,
};

const small: SxProps = {
  fontSize: '14px',
  lineHeight: '14px',
};

const normal: SxProps = {
  fontSize: '16px',
  lineHeight: '16px',
};

const large: SxProps = {
  fontSize: '18px',
  lineHeight: '18px',
};

const sizeStyles = {
  small,
  normal,
  large,
};

type Props = {
  styleType?: 'whiteContained' | 'purpleContained';
  sizeType?: 'small' | 'normal' | 'large';
} & ButtonProps;

export const Button = ({
  children,
  styleType = 'whiteContained',
  sizeType = 'normal',
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
    </MuiButton>
  );
};
