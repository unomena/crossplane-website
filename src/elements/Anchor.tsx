/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/react';
import { styled, SxProps } from '@mui/system';

import NextLink from 'next/link';

import { COLORS, fontAvenirBold, fontAvenirRoman, shouldForwardProp } from 'src/theme';

type Hover = 'underline' | 'opacity' | 'none';

export interface AnchorProps {
  href?: string;
  color?: keyof typeof COLORS;
  bold?: boolean;
  hover?: Hover;
  sx?: SxProps;
}

const getHoverStyle = (hover: Hover) => {
  switch (hover) {
    case 'underline': {
      return {
        '&:hover': {
          textDecoration: 'underline',
        },
      };
    }
    case 'opacity': {
      return {
        '&:hover': {
          opacity: 0.7,
        },
      };
    }
    case 'none':
    default: {
      return {
        '&:hover': {
          textDecoration: 'none',
        },
      };
    }
  }
};

const StyledAnchor = styled('a', { shouldForwardProp })<{ otherStyles?: any }>(
  ({ otherStyles }) => ({
    cursor: 'pointer',
    textDecoration: 'underline',
    transition: 'all 0.2s ease-in-out',

    '&, &:visited': {
      color: 'inherit',
    },
    ...otherStyles,
  })
);

export const Anchor = React.forwardRef<
  HTMLAnchorElement,
  AnchorProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, bold, hover = 'none', ...props }, ref) => {
  const fontStyle = bold ? fontAvenirBold : fontAvenirRoman;
  const hoverStyle = getHoverStyle(hover);

  const otherStyles = { ...fontStyle, ...hoverStyle };

  return (
    <StyledAnchor otherStyles={otherStyles} {...props} ref={ref}>
      {children}
    </StyledAnchor>
  );
});

export const Link = React.forwardRef<
  HTMLAnchorElement,
  AnchorProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, href, bold, hover = 'none', ...props }, ref) => {
  const fontStyle = bold ? fontAvenirBold : fontAvenirRoman;
  const hoverStyle = getHoverStyle(hover);

  const otherStyles = { ...fontStyle, ...hoverStyle };

  return (
    <NextLink href={href || ''} passHref>
      <StyledAnchor otherStyles={otherStyles} {...props} ref={ref}>
        {children}
      </StyledAnchor>
    </NextLink>
  );
});
