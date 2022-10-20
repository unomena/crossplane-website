/* eslint-disable jsx-a11y/alt-text */
import React, { useMemo } from 'react';

import Image, { ImageProps } from 'next/future/image';

type CMSImageProps = {
  value: ImageValue;
} & Omit<ImageProps, 'src' | 'alt'>;

const CMSImage = ({ value, ...props }: CMSImageProps) => {
  const imageData: ImageProps | undefined = useMemo(() => {
    if (value.image) {
      const image = { ...value, ...value.image };
      let data: ImageProps = {
        src: image.url,
        alt: image.title,
      };
      if (image.width) {
        data = { ...data, width: image.width };
      }
      if (image.height) {
        data = { ...data, height: image.height };
      }
      return data;
    } else if (value.svg_image) {
      const image = { ...value, ...value.svg_image };
      let data: ImageProps = {
        src: image.url,
        alt: image.title,
      };
      if (image.view_box) {
        const viewBoxSplit = image.view_box.split(' ');
        data = {
          ...data,
          width: viewBoxSplit[2],
          height: viewBoxSplit[3],
        };
      }
      if (image.width) {
        data = { ...data, width: image.width };
      }
      if (image.height) {
        data = { ...data, height: image.height };
      }
      if (!image.view_box && !image.width && !image.height) {
        data = { ...data, fill: true };
      }
      return data;
    }
    return undefined;
  }, [value]);

  if (!imageData) {
    return null;
  }

  return <Image style={{ width: '100%', height: 'auto' }} {...imageData} {...props} priority />;
};

export default CMSImage;
