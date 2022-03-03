/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import { Box, styled, SxProps } from '@mui/system';

import { shouldForwardProp } from '../theme';

import Image, { ImageProps } from 'next/image';

// import { css } from '@emotion/core';
// import { StyledComponent } from '@emotion/styled';
// import * as styledSystem from 'styled-system';

// type ImgProps = React.DetailedHTMLProps<
//   Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'>,
//   HTMLImageElement
// >;

// const baseStyledSystem = styledSystem.compose(
//   styledSystem.color,
//   styledSystem.layout,
//   styledSystem.space,
//   styledSystem.typography,
//   styledSystem.position,
//   styledSystem.flexShrink
// );

const StyledImage = styled(Image, { shouldForwardProp })<ImageProps & { otherStyles?: any }>(
  ({ theme, otherStyles }) => ({
    ...otherStyles,
  })
);

// export const ImageTag: StyledComponent<ImgProps, any, object> = styled('img', {
//   shouldForwardProp,
// })(baseStyledSystem) as any;

export const Img: React.FC<
  ImageProps & { height?: string | number; width?: string | number; sx?: SxProps }
> = ({ alt, width, height, src, sx, ...props }) => {
  return (
    <Box width={width} height={height} sx={sx}>
      <StyledImage src={src || ''} alt={alt || ''} layout="responsive" {...props} />
    </Box>
  );
};

export const Avatar: React.FC<ImageProps> = ({ ...props }) => {
  let otherStyles: any = {
    borderRadius: '100%',
    flexShrink: '0',
  };

  return <StyledImage otherStyles={otherStyles} {...props} />;
};

// export const Avatar = styled(Img, { shouldForwardProp })<ImgProps & { size?: string }>`
//   border-radius: 100%;
//   flex-shrink: 0;
//   ${({ size }) =>
//     size &&
//     css`
//       width: ${size};
//       height: ${size};
//     `}
// `;
