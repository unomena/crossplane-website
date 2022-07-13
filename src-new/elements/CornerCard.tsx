import React from 'react';

import Image from 'next/image';

import { Box, SxProps } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import Link from 'src-new/elements/Link';

const defaultStyles: SxProps = {
  display: 'flex',
  fontFamily: 'Avenir',
  textTransform: 'none',
  zIndex: '0',
  position: 'relative',
  borderRadius: 1.25,
  color: '#fff',
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
  width: '100%',
  height: '100%',
  m: '0 auto',
};

const cornerSM: SxProps = {
  backgroundImage: `linear-gradient(-45deg, transparent 24px, ${COLORS.bigStone} 0 100%)`,

  '&:hover': {
    backgroundImage: `linear-gradient(-45deg, transparent 21px, #6D64F5 0, #C9C3FF 100%)`,
    transition: 'background-image 3s ease-in-out',
  },

  '&:before': {
    zIndex: '-1',
    content: '""',
    position: 'absolute',
    left: '3px',
    right: '3px',
    top: '3px',
    bottom: '3px',
    borderRadius: 1.25,
    background: `linear-gradient(-45deg, transparent 20px, ${COLORS.bigStone} 0)`,
  },

  [MQ.sm]: {
    backgroundImage: `linear-gradient(-45deg, transparent 42px, ${COLORS.bigStone} 0 100%)`,

    '&:hover': {
      backgroundImage: `linear-gradient(-45deg, transparent 39px, #6D64F5 0, #C9C3FF 100%)`,
      transition: 'background-image 3s ease-in-out',
    },

    '&:before': {
      zIndex: '-1',
      content: '""',
      position: 'absolute',
      left: '3px',
      right: '3px',
      top: '3px',
      bottom: '3px',
      borderRadius: 1.25,
      background: `linear-gradient(-45deg, transparent 38px, ${COLORS.bigStone} 0)`,
    },
  },
};

const cornerLG: SxProps = {
  backgroundImage: `linear-gradient(-45deg, transparent 38px, ${COLORS.bigStone} 0 100%)`,

  '&:hover': {
    backgroundImage: `linear-gradient(-45deg, transparent 36px, ${COLORS.bigStone} 0 100%)`,
  },

  '&:before': {
    zIndex: '-1',
    content: '""',
    position: 'absolute',
    left: '3px',
    right: '3px',
    top: '3px',
    bottom: '3px',
    borderRadius: 1.25,
    background: `linear-gradient(-45deg, transparent 34px, ${COLORS.bigStone} 0)`,
  },

  [MQ.sm]: {
    backgroundImage: `linear-gradient(-45deg, transparent 78px, ${COLORS.bigStone} 0 100%)`,

    '&:hover': {
      backgroundImage: `linear-gradient(-45deg, transparent 76px, ${COLORS.bigStone} 0 100%)`,
    },

    '&:before': {
      zIndex: '-1',
      content: '""',
      position: 'absolute',
      left: '3px',
      right: '3px',
      top: '3px',
      bottom: '3px',
      borderRadius: 1.25,
      background: `linear-gradient(-45deg, transparent 74px, ${COLORS.bigStone} 0)`,
    },
  },
};

const iconBtmRight: SxProps = {
  position: 'absolute',
  content: '""',
  bottom: '0',
  right: '0',
  zIndex: '-2',
};

const small: SxProps = {
  width: '28px',
  height: '28px',

  [MQ.sm]: {
    width: '48px',
    height: '48px',
  },
};

const normal: SxProps = {
  width: '44px',
  height: '44px',

  [MQ.sm]: {
    width: '84px',
    height: '84px',
  },
};

const iconSizeTypes = {
  small,
  normal,
};

const cornerSizes = {
  cornerSM,
  cornerLG,
};

type Props = {
  children: React.ReactNode;
  styleType?: 'logoContained';
  cornerSize?: 'cornerSM' | 'cornerLG';
  icon?: string | StaticImport;
  iconSize?: 'small' | 'normal';
  withPadding?: Boolean;
  href?: string;
};

const CornerCard = ({
  children,
  icon,
  iconSize,
  cornerSize = 'cornerSM',
  withPadding = true,
  href,
  ...props
}: Props) => {
  const RenderCard = () => (
    <Box
      {...props}
      sx={{
        ...defaultStyles,
        ...cornerSizes[cornerSize],
        p: withPadding ? 3.75 : 0,
      }}
    >
      {children}
      {icon && iconSize && (
        <Box sx={{ ...iconBtmRight, ...iconSizeTypes[iconSize] }}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={icon} alt="arrow icon" layout="fill" objectFit="contain" />
          </Box>
        </Box>
      )}
    </Box>
  );

  if (href) {
    return (
      <Link href={href}>
        <RenderCard />
      </Link>
    );
  }

  return <RenderCard />;
};

export default CornerCard;
