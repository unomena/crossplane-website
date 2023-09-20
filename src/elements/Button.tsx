import React, { useMemo } from 'react';

import Image from 'next/future/image';

import { Box, Button as MuiButton, ButtonProps, CircularProgress, SxProps } from '@mui/material';
import { COLORS, fontAvenirBold, fontAvenirRoman, MQ } from 'src/theme';

import ArrowRight from 'src/svg/ArrowRight';

const scale = 1.05;

const hoverScale: SxProps = {
  transform: { md: `scale(${scale})` },
};

const defaultStyles: SxProps = {
  textTransform: 'none',
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
  textAlign: 'center',
};

const whiteContained: SxProps = {
  backgroundColor: '#fff',
  color: COLORS.nileBlue,

  '&:hover': {
    backgroundColor: '#fff',
    ...hoverScale,
  },
};

const whiteOutlined: SxProps = {
  backgroundColor: 'unset',
  color: '#fff',
  border: '2px solid #fff',

  '&:hover': {
    backgroundColor: 'unset',
    ...hoverScale,
  },
};

const darkOutlined: SxProps = {
  backgroundColor: 'unset',
  color: COLORS.nileBlue,
  border: `2px solid ${COLORS.nileBlue}`,

  '&:hover': {
    backgroundColor: 'unset',
    ...hoverScale,
  },
};

const whiteText: SxProps = {
  backgroundColor: 'unset',
  color: '#fff',
  border: 'none',
  px: '16px !important',
  py: 0,
  height: 'auto',

  '&:hover': {
    backgroundColor: 'unset',
  },
};

const turquoiseContained: SxProps = {
  backgroundColor: COLORS.turquoise,
  color: '#fff',

  '&:hover': {
    backgroundColor: COLORS.turquoise,
    ...hoverScale,
  },
};

const gradientContained: SxProps = {
  // eslint-disable-next-line max-len
  backgroundImage: `linear-gradient(to right, #f3807b, #fd8a6f, #ff9662, #ffa556, #ffb54a, #efc145, #dccc47, #c7d650, #9fd96a, #78d887, #53d5a2, #35d0ba)`,
  color: '#fff',

  '&:hover': {
    ...hoverScale,
  },
};

const linkWaterContained: SxProps = {
  backgroundColor: COLORS.linkWater,
  color: COLORS.nileBlue,

  '&:hover': {
    backgroundColor: COLORS.linkWater,
    ...hoverScale,
  },
};

const disabled: SxProps = {
  backgroundColor: '#cccccc',
  color: 'rgba(0, 0, 0, 0.26)',

  '&:hover': {
    backgroundColor: '#cccccc',
  },
};

const typeStyles = {
  whiteContained,
  whiteOutlined,
  darkOutlined,
  whiteText,
  turquoiseContained,
  gradientContained,
  linkWaterContained,
  disabled,
};

const small: SxProps = {
  ...fontAvenirRoman,
  fontSize: '14px',
  lineHeight: '14px',
  borderRadius: '20px',
  px: '30px',
  height: '38px',
};

const normal: SxProps = {
  ...fontAvenirBold,
  fontSize: '16px',
  lineHeight: '16px',
  borderRadius: '24px',
  px: '30px',
  height: '48px',
};

const large: SxProps = {
  ...fontAvenirBold,
  borderRadius: '32px',
  fontSize: '14px',
  lineHeight: '18px',
  px: '14px',
  height: '52px',

  [MQ.md]: {
    fontSize: '18px',
    lineHeight: '18px',
    px: '36px',
    height: '64px',
  },
};

const sizeStyles = {
  small,
  normal,
  large,
};

const loadingContainer: SxProps = {
  position: 'absolute',
};

const iconLeftStyle: SxProps = {
  '& > .MuiButton-startIcon': {
    position: 'relative',
    width: 24,
    height: 24,
    mr: '10px',

    '& > svg': {
      height: { _: 20, md: 25 },
      width: { _: 20, md: 25 },
    },
  },
};

const arrowRightStyle: SxProps = {
  '& > .MuiButton-endIcon': {
    color: 'inherit',
    ml: '16px',
    '& > svg': {
      height: { _: 12, md: 13 },
      width: { _: 7, md: 8 },
    },
  },
};

type Props = {
  styleType?:
    | 'whiteContained'
    | 'whiteOutlined'
    | 'darkOutlined'
    | 'whiteText'
    | 'turquoiseContained'
    | 'gradientContained'
    | 'linkWaterContained'
    | 'disabled';
  sizeType?: 'small' | 'normal' | 'large';
  target?: string;
  loading?: boolean;
  hasRocketIcon?: boolean;
  hasArrowRight?: boolean;
  cmsValue?: ButtonValue;
} & ButtonProps;

const Button = ({
  children,
  styleType: _styleType = 'whiteContained',
  sizeType = 'normal',
  target,
  loading,
  hasArrowRight,
  cmsValue,
  ...props
}: Props) => {
  const extraProps = useMemo(() => {
    let obj = {};

    if (cmsValue) {
      if (cmsValue.link) {
        obj = {
          ...obj,
          href: cmsValue.link[0].value,
        };

        if (cmsValue.link[0].type === 'external_url') {
          obj = {
            ...obj,
            target: '_blank',
          };
        }
      }
      if (cmsValue.icon && cmsValue.icon.url) {
        obj = {
          ...obj,
          startIcon: (
            <Image
              src={cmsValue.icon.url}
              alt={cmsValue.icon.title}
              sizes="100vw"
              fill
              style={{ objectFit: 'contain' }}
            />
          ),
        };
      }
      if (cmsValue.has_arrow) {
        obj = {
          ...obj,
          endIcon: <ArrowRight />,
        };
      }
    }

    if (target) {
      obj = {
        ...obj,
        target,
      };
    }

    return obj;
  }, [cmsValue, target]);

  const styleType = useMemo(() => {
    let type = _styleType;
    if (cmsValue?.style_type) {
      type = cmsValue.style_type;
    }
    return type;
  }, [_styleType, cmsValue]);

  return (
    <MuiButton
      {...props}
      sx={{
        ...defaultStyles,
        ...sizeStyles[sizeType],
        ...typeStyles[styleType],
        ...iconLeftStyle,
        ...arrowRightStyle,
        ...props.sx,
      }}
      endIcon={hasArrowRight ? <ArrowRight color="inherit" /> : null}
      {...extraProps}
    >
      {children}
      {loading && (
        <Box sx={loadingContainer}>
          <CircularProgress size={24} />
        </Box>
      )}
    </MuiButton>
  );
};

export default Button;
