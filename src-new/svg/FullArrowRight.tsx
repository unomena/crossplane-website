/* eslint-disable max-len */
import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const FullArrowRight = ({ width = 32, height = 32 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m17.612281 31.48338 13.884183-14.24497c.671381-.68153.671381-1.79529 0-2.48412L17.612281.51662c-.664198-.68883-1.749804-.68883-2.421115 0l-1.585551 1.62676c-.685609.69613-.671381 1.83192.028597 2.51338l8.606176 8.41217H1.714093C.764214 13.06893 0 13.853 0 14.82757v2.34486c0 .97457.764214 1.75864 1.714093 1.75864h20.526295l-8.606176 8.41217c-.692794.68146-.707092 1.81725-.028597 2.51338l1.585551 1.62676c.664197.68883 1.749803.68883 2.421115 0Z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default FullArrowRight;
