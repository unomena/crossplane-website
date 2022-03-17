/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/react';
import { Box, SxProps } from '@mui/system';

// import { shouldForwardProp } from 'src/theme';

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

// const StyledImage = styled(Image, { shouldForwardProp })<ImageProps & { otherStyles?: any }>(
//   ({ otherStyles }) => ({
//     ...otherStyles,
//   })
// );

// export const ImageTag: StyledComponent<ImgProps, any, object> = styled('img', {
//   shouldForwardProp,
// })(baseStyledSystem) as any;

export const Img: React.FC<
  ImageProps & {
    src: StaticImageData;
    height?: string | number;
    width?: string | number;
    sx?: SxProps;
  }
> = ({ src, alt, width, height, sx, ...props }) => {
  return (
    <Box width={width} height={height} sx={sx}>
      <Image
        src={src}
        alt={alt || ''}
        layout="responsive"
        placeholder={src.width > 40 ? 'blur' : 'empty'}
        blurDataURL={src.src}
        {...props}
      />
    </Box>
  );
};

export const Avatar: React.FC<
  ImageProps & { src: StaticImageData; size?: string | number; sx?: SxProps }
> = ({ src, alt, size, sx, ...props }) => {
  return (
    <Box width={size} height={size} sx={{ borderRadius: '100%', flexShrink: '0', ...sx }}>
      <Image
        src={src}
        alt={alt || ''}
        layout="responsive"
        placeholder={src.width > 40 ? 'blur' : 'empty'}
        blurDataURL={src.src}
        {...props}
      />
    </Box>
  );
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
