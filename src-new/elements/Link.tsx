import React from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

type Props = {
  muiProps?: MuiLinkProps;
  children: React.ReactNode;
} & NextLinkProps;

const Link = ({ href, muiProps, children }: Props) => {
  return (
    <NextLink href={href} passHref>
      <MuiLink underline="none" {...muiProps}>
        {children}
      </MuiLink>
    </NextLink>
  );
};

export default Link;
