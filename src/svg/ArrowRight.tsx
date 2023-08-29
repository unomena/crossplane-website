import React from 'react';

import { COLORS } from 'src/theme';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const ArrowRight = ({ color = COLORS.white, width = 8, height = 13 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
      <path d="m1 1 5 5.5L1 12" stroke={color} strokeWidth="2" fill="none" fillRule="evenodd" />
    </svg>
  );
};

export default ArrowRight;
