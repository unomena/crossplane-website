/* eslint-disable jsx-a11y/alt-text */
import React, { useMemo } from 'react';

import Image, { ImageProps } from 'next/image';

type CMSImageProps = {
  value: ImageValue;
  priority?: boolean;
};

const CMSImage = ({ value, priority }: CMSImageProps) => {
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
      return data;
    }
    return undefined;
  }, [value]);

  if (!imageData) {
    return null;
  }

  return <Image {...imageData} priority={priority} />;
};

export default CMSImage;
