import React from 'react';

import { COLORS } from 'src/theme';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const ArrowRightRounded = ({ color = COLORS.cornflower, width = 8, height = 16 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m1 1 6 6.6-6 6.6"
        stroke={color}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightRounded;
