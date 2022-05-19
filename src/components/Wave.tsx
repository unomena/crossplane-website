import { Box } from '@mui/material';
import { styled } from '@mui/system';

type WaveColor = 'white' | 'light' | 'dark' | 'cornflower' | 'elephant' | 'firefly';

const getImage = (color: WaveColor) => {
  switch (color) {
    case 'white':
      return '/wave-white.svg';
    case 'dark':
      return '/wave-dark.svg';
    case 'cornflower':
      return '/wave-cornflower.svg';
    case 'elephant':
      return '/wave-elephant.svg';
    case 'firefly':
      return '/wave-firefly.svg';
    default:
      return '/wave-light.svg';
  }
};

const Wave = styled(Box)<{ type: WaveColor }>`
  // position: relative;
  height: 175px;
  z-index: 10;

  background-image: url(${({ type }) => getImage(type)});
  background-position: center bottom;
  background-repeat: no-repeat;

  @media (min-width: 1439px) {
    background-size: 100% 175px;
  }
`;

export { Wave };
