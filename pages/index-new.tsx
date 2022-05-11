import React, { memo, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, gradient_1 } from 'src/theme';
import { keyframes } from '@emotion/react';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';

import RocketShipIcon from 'src-new/svg/RocketShipIcon';
import ArrowRight from 'src-new/svg/ArrowRight';
import dfdsLogo from 'public/new-images/trusted-logos/dfds.svg';
import grupoLogo from 'public/new-images/trusted-logos/grupo.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import headerBg from 'public/new-images/home-page/header-bg.jpg';
import headerDiagram from 'public/new-images/home-page/header-diagram.svg';

import crossplaneLogos from 'src-new/constants/crossplaneLogos';

const headerSection: SxProps = {
  pt: 24,
  pb: 30,
  textAlign: 'center',
  color: COLORS.linkWater,
  backgroundImage: `url(${headerBg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',

  '@media screen and (min-width: 1980px)': {
    backgroundSize: 'contain',
  },
};

const h1: SxProps = {
  fontFamily: 'Avenir-Black',
  fontSize: '95px',
  lineHeight: '104px',
  letterSpacing: '-3.28px',
  mb: 3.5,
  ...gradient_1,
};

const headerButtons: SxProps = {
  mt: 7.5,
  mb: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const poweringTitle: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: '16px',
  lineHeight: '40px',
  letterSpacing: '2px',
  mb: 3,
};

const logosContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: 18,
};

const logoSVG: SxProps = {
  position: 'relative',
  mx: 5,
};

const cpLeftColumns: SxProps = {
  display: 'flex',
  position: 'relative',

  '& > div': {
    mr: '10px',
    ':first-of-type': {
      mr: 0,
    },
    ':last-of-type': {
      mr: 0,
    },
  },
};

const cpRightColumns: SxProps = {
  display: 'flex',
  position: 'relative',

  '& > div': {
    ml: '10px',
    ':first-of-type': {
      ml: 0,
    },
    ':last-of-type': {
      ml: 0,
    },
  },
};

const cpLogoBoxColumn: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& > div': {
    ':not(:first-of-type)': {
      mt: 0.5,
    },
    ':not(:last-of-type)': {
      mb: 0.5,
    },
  },
};

const cpColumnShadow: SxProps = {
  backgroundImage:
    // eslint-disable-next-line max-len
    'linear-gradient(270deg, rgba(13,36,54,0.20) 0%, rgba(13,36,54,0.85) 17%, #0D2436 51%, rgba(13,36,54,0.85) 82%, rgba(13,36,54,0.20) 100%)',
  width: 284,
  height: '100%',
  position: 'absolute',
  top: 0,
  zIndex: 100,
};

const cpCenterBox: SxProps = {
  backgroundImage:
    // eslint-disable-next-line max-len
    'linear-gradient(270deg, rgba(13,36,54,0.20) 0%, rgba(13,36,54,0.85) 17%, #0D2436 51%, rgba(13,36,54,0.85) 82%, rgba(13,36,54,0.20) 100%)',
  width: 474,
  height: 418,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  m: 'auto',
  zIndex: 101,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const cpCenterBoxTitleNum: SxProps = {
  fontFamily: 'Avenir-Book',
  fontSize: '74px',
  lineHeight: '36px',
  color: '#fff',
  mb: 1.5,
};

const cpCenterBoxTitleText: SxProps = {
  fontFamily: 'Avenir-Black',
  fontSize: '24px',
  lineHeight: '36px',
  color: '#fff',
  mb: 3,
};

const cpLogoBox: SxProps = {
  bgcolor: COLORS.bigStone,
  borderRadius: '10px',
  p: 2,
};

const cpLogoBoxImageContainer: SxProps = {
  position: 'relative',
  width: '100%',
  height: '100%',
  '& > span': {
    transition: 'all 1.5s ease-in-out',
  },
};

const cpLogoBoxBigger: SxProps = {
  width: 108,
  height: 78,
};

const cpLogoBoxBig: SxProps = {
  width: 98,
  height: 72,
};

const cpLogoBoxSmall: SxProps = {
  width: 93,
  height: 66,
};

const cpLogoBoxSmaller: SxProps = {
  width: 83,
  height: 59,
};

const pulsate = keyframes`
  from { opacity: 1; }
  50% { opacity: 0.5; }
  to { opacity: 1; }
`;

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

type CPLogoBoxProps = {
  sizeStyles: SxProps;
  shouldUpdate?: Boolean;
};

const CPLogoBox = memo(({ sizeStyles, shouldUpdate }: CPLogoBoxProps) => {
  const [show, setShow] = useState(false);
  const [imageOne, setImageOne] = useState(
    crossplaneLogos[getRandomInt(0, crossplaneLogos.length - 1)]
  );
  const [imageTwo, setImageTwo] = useState(
    crossplaneLogos[getRandomInt(0, crossplaneLogos.length - 1)]
  );

  useEffect(() => {
    if (shouldUpdate) {
      setShow(!show);
    }
  }, [shouldUpdate]);

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (show) {
      t = setTimeout(() => {
        setImageOne(crossplaneLogos[getRandomInt(0, crossplaneLogos.length - 1)]);
      }, 4000);
    } else {
      t = setTimeout(() => {
        setImageTwo(crossplaneLogos[getRandomInt(0, crossplaneLogos.length - 1)]);
      }, 4000);
    }
    return () => {
      clearTimeout(t);
    };
  }, [show]);

  return (
    <Box
      sx={{
        ...cpLogoBox,
        ...sizeStyles,
        // bgcolor: shouldUpdate ? 'red' : COLORS.bigStone,
        animation: shouldUpdate ? `${pulsate} 2s ease-in-out` : null,
      }}
    >
      <Box
        sx={{
          ...cpLogoBoxImageContainer,
          '& > span:first-of-type': {
            opacity: show ? '0 !important' : '1 !important',
            transitionDelay: show ? '0s' : '1s',
          },
          '& > span:last-of-type': {
            opacity: show ? '1 !important' : '0 !important',
            transitionDelay: show ? '1s' : '0s',
          },
        }}
      >
        <Image src={imageOne} alt="company logo" layout="fill" objectFit="contain" />
        <Image src={imageTwo} alt="company logo" layout="fill" objectFit="contain" />
      </Box>
    </Box>
  );
});

CPLogoBox.displayName = 'CPLogoBox';

const cpColumnsLeftList = [
  {
    sizeStyles: cpLogoBoxBigger,
    logos: [
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
    ],
  },
  {
    sizeStyles: cpLogoBoxBig,
    logos: [
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
    ],
  },
  {
    sizeStyles: cpLogoBoxSmall,
    logos: [
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
    ],
  },
  {
    sizeStyles: cpLogoBoxSmaller,
    logos: [
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
    ],
  },
];

const cpColumnsRightList = [
  {
    sizeStyles: cpLogoBoxSmaller,
    logos: [
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
    ],
  },
  {
    sizeStyles: cpLogoBoxSmall,
    logos: [
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
    ],
  },
  {
    sizeStyles: cpLogoBoxBig,

    logos: [
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
    ],
  },
  {
    sizeStyles: cpLogoBoxBigger,

    logos: [
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
      crossplaneLogos[getRandomInt(0, 48)],
    ],
  },
];

const CrossplaneLogosSection = () => {
  const [logoToUpdateLeft, _setLogoToUpdateLeft] = useState<number | null>(null);
  const logoToUpdateRefLeft = useRef(logoToUpdateLeft);
  const setLogoToUpdateLeft = (val: number | null) => {
    logoToUpdateRefLeft.current = val;
    _setLogoToUpdateLeft(val);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      let row = null;
      do {
        row = getRandomInt(0, 23);
      } while (row === logoToUpdateRefLeft.current);
      setLogoToUpdateLeft(row);
    }, getRandomInt(22, 32) * 100);
    return () => {
      clearTimeout(t);
    };
  }, [logoToUpdateLeft]);

  const [logoToUpdateRight, _setLogoToUpdateRight] = useState<number | null>(null);
  const logoToUpdateRefRight = useRef(logoToUpdateRight);
  const setLogoToUpdateRight = (val: number | null) => {
    logoToUpdateRefRight.current = val;
    _setLogoToUpdateRight(val);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      let row = null;
      do {
        row = getRandomInt(24, 47);
      } while (row === logoToUpdateRefRight.current);
      setLogoToUpdateRight(row);
    }, getRandomInt(22, 32) * 100);
    return () => {
      clearTimeout(t);
    };
  }, [logoToUpdateRight]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
      <Box sx={cpLeftColumns}>
        <Box sx={{ ...cpColumnShadow, left: -176 }} />
        {cpColumnsLeftList.map((c, columnIndex) => (
          <Box key={columnIndex} sx={cpLogoBoxColumn}>
            {c.logos.map((v, logoIndex) => {
              const columnStartIndex = (columnIndex + 1) * 6 - 6;
              const realIndex = logoIndex + columnStartIndex;
              return (
                <CPLogoBox
                  key={logoIndex}
                  sizeStyles={c.sizeStyles}
                  shouldUpdate={logoToUpdateLeft === realIndex}
                />
              );
            })}
          </Box>
        ))}
      </Box>
      <Box sx={cpCenterBox}>
        <Typography sx={cpCenterBoxTitleNum}>XX</Typography>
        <Typography sx={cpCenterBoxTitleText}>Slack Members</Typography>
        <Typography variant="body_normal">
          Adopted by hundreds of amazing
          <br />
          companies
        </Typography>
        <Button styleType="cornflowerContained" sx={{ mt: 3.5 }}>
          Learn about Crossplane
        </Button>
      </Box>
      <Box sx={cpRightColumns}>
        {cpColumnsRightList.map((c, columnIndex) => (
          <Box key={columnIndex} sx={cpLogoBoxColumn}>
            {c.logos.map((v, logoIndex) => {
              const columnStartIndex = (columnIndex + 1) * 6 - 6;
              const realIndex = logoIndex + columnStartIndex + 24;
              return (
                <CPLogoBox
                  key={logoIndex}
                  sizeStyles={c.sizeStyles}
                  shouldUpdate={logoToUpdateRight === realIndex}
                />
              );
            })}
          </Box>
        ))}
        <Box sx={{ ...cpColumnShadow, right: -176 }} />
      </Box>
    </Box>
  );
};

type Props = {};

const Home = ({}: Props) => {
  return (
    <PageProvider>
      <Section bgcolor="firefly" sx={headerSection}>
        <Typography variant="h1_new" sx={h1}>
          The cloud on your terms
        </Typography>
        <Typography variant="body_big">
          Upbound is the easiest way to build your internal cloud platform
        </Typography>
        <Box sx={headerButtons}>
          <Button
            styleType="gradientContained"
            sizeType="large"
            sx={{ width: 208, mr: '10px', '& > .MuiButton-iconSizeMedium': { mr: '10px' } }}
            startIcon={<RocketShipIcon />}
          >
            Get Started
          </Button>
          <Button
            styleType="whiteOutlined"
            sizeType="large"
            sx={{ width: 208, ml: '10px', '& > .MuiButton-iconSizeMedium': { ml: '16px' } }}
            endIcon={<ArrowRight />}
          >
            Contact Us
          </Button>
        </Box>
        <Typography sx={poweringTitle}>POWERING INTERNAL CLOUD PLATFORMS AT</Typography>
        <Box sx={logosContainer}>
          <Box sx={{ ...logoSVG, width: 80, height: 28 }}>
            <Image src={dfdsLogo} alt="DFDS" layout="fill" objectFit="contain" />
          </Box>
          <Box sx={{ ...logoSVG, width: 80, height: 26 }}>
            <Image src={grupoLogo} alt="Grupo Boticario" layout="fill" objectFit="contain" />
          </Box>
          <Box sx={{ ...logoSVG, width: 47, height: 34 }}>
            <Image src={dbLogo} alt="DB" layout="fill" objectFit="contain" />
          </Box>
          <Box sx={{ ...logoSVG, width: 80, height: 26 }}>
            <Image src={plotlyLogo} alt="plotly" layout="fill" objectFit="contain" />
          </Box>
        </Box>
        <Box sx={{ textAlign: 'left', position: 'relative' }}>
          <Typography variant="h3_new" sx={{ lineHeight: '56px', mb: 0.5 }}>
            Single point of control. Endless possibility.
          </Typography>
          <Typography variant="body_small" sx={{ maxWidth: 600 }}>
            Upbound offers a control-plane driven approach for customers to build internal cloud
            platforms on top of the services and infrastructure they already have.
          </Typography>
          <Box sx={{ mt: '-106px' }}>
            <Image src={headerDiagram} alt="headerDiagram" />
          </Box>
        </Box>
      </Section>
      <Section bgcolor="elephant" sx={{ pt: 10, pb: 20, textAlign: 'center' }}>
        <Typography variant="h2_new" sx={{ mb: 2.5 }}>
          Committed to open source.
          <br />
          Powered by Crossplane.
        </Typography>
        <Typography variant="body_normal" sx={{ mb: 8 }}>
          Invented by Upbound, Crossplane is a framework for building cloud native control planes.
        </Typography>
        <CrossplaneLogosSection />
      </Section>
      <Box sx={{ height: 1000 }} bgcolor={COLORS.firefly} />
    </PageProvider>
  );
};

export default Home;
