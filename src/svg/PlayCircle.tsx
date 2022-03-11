/* eslint-disable max-len */
import React, { SVGAttributes } from 'react';

const PlayCircle = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M9 16.75A7.749 7.749 0 0 0 16.75 9 7.749 7.749 0 0 0 9 1.25 7.749 7.749 0 0 0 1.25 9 7.749 7.749 0 0 0 9 16.75ZM6 12.25V5.75A.752.752 0 0 1 7.116 5.094L12.616 8.438A.752.752 0 0 1 12.616 9.75L7.116 12.906A.751.751 0 0 1 6 12.25Z"
      />
    </svg>
  );
};

export default PlayCircle;
