/* eslint-disable max-len */
import React from 'react';

import { COLORS } from 'src/theme';

type Props = {
  secondColor?: 'shakespeare' | 'sun';
};

const CircleTriangleIcon = ({ secondColor = 'shakespeare' }: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="a" d="M0 0h17v23H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={COLORS.cornflower} opacity=".60214379" width="23" height="23" rx="11.5" />
        <g opacity=".60337612" transform="rotate(-90 18.5 11.5)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            d="M17 1.7942237v19.4116856c0 1.3323475-1.036902 2.1987467-1.9180053 1.6021427L.73170228 13.0886347c-.97618818-.6610833-.97543553-2.5459173.00125442-3.20530371L15.0835.19106281C15.9643524-.40384427 17 .46255491 17 1.7942237"
            fill={COLORS[secondColor]}
            mask="url(#b)"
          />
        </g>
      </g>
    </svg>
  );
};

export default CircleTriangleIcon;
