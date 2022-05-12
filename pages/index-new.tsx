import React, { memo, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, gradient_1, gradient_2 } from 'src/theme';
import { keyframes } from '@emotion/react';

import getRandomInt from 'src-new/utils/getRandomInt';
import useOnScreen from 'src-new/utils/useOnScreen';

import crossplaneLogos from 'src-new/constants/crossplaneLogos';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';

import RocketShipIcon from 'src-new/svg/RocketShipIcon';
import ArrowRight from 'src-new/svg/ArrowRight';
import CircleTriangleIcon from 'src-new/svg/CircleTriangleIcon';
import dfdsLogo from 'public/new-images/trusted-logos/dfds.svg';
import grupoLogo from 'public/new-images/trusted-logos/grupo.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import headerBg from 'public/new-images/home-page/header-bg.jpg';
import headerDiagram from 'public/new-images/home-page/header-diagram.svg';
import EnterpriseReadyBig from 'public/new-images/home-page/key-points/EnterpriseReadyBig.svg';
import EnterpriseReadySmall from 'public/new-images/home-page/key-points/EnterpriseReadySmall.svg';
import DeployWithConfidenceBig from 'public/new-images/home-page/key-points/DeployWithConfidenceBig.svg';
import DeployWithConfidenceSmall from 'public/new-images/home-page/key-points/DeployWithConfidenceSmall.svg';
import EfficiencyEaseBig from 'public/new-images/home-page/key-points/EfficiencyEaseBig.svg';
import EfficiencyEaseSmall from 'public/new-images/home-page/key-points/EfficiencyEaseSmall.svg';

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

const getRandomLogo = () => crossplaneLogos[getRandomInt(0, crossplaneLogos.length - 1)];

type CPLogoBoxProps = {
  sizeStyles: SxProps;
  shouldUpdate?: Boolean;
};

const CPLogoBox = memo(({ sizeStyles, shouldUpdate }: CPLogoBoxProps) => {
  const [show, setShow] = useState(false);
  const [imageOne, setImageOne] = useState(getRandomLogo());
  const [imageTwo, setImageTwo] = useState(getRandomLogo());

  useEffect(() => {
    if (shouldUpdate) {
      setShow(!show);
    }
  }, [shouldUpdate]);

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (show) {
      t = setTimeout(() => {
        let newImage = null;
        do {
          newImage = getRandomLogo();
        } while (newImage.src === imageOne.src || newImage.src === imageTwo.src);
        setImageOne(newImage);
      }, 4000);
    } else {
      t = setTimeout(() => {
        let newImage = null;
        do {
          newImage = getRandomLogo();
        } while (newImage.src === imageTwo.src || newImage.src === imageOne.src);
        setImageTwo(newImage);
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
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
    ],
  },
  {
    sizeStyles: cpLogoBoxBig,
    logos: [
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
    ],
  },
  {
    sizeStyles: cpLogoBoxSmall,
    logos: [
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
    ],
  },
  {
    sizeStyles: cpLogoBoxSmaller,
    logos: [
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
    ],
  },
];

const cpColumnsRightList = [
  {
    sizeStyles: cpLogoBoxSmaller,
    logos: [
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
    ],
  },
  {
    sizeStyles: cpLogoBoxSmall,
    logos: [
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
    ],
  },
  {
    sizeStyles: cpLogoBoxBig,

    logos: [
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
    ],
  },
  {
    sizeStyles: cpLogoBoxBigger,

    logos: [
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
      getRandomLogo(),
    ],
  },
];

const CrossplaneLogosSection = () => {
  const cpSectionRef = useRef(undefined);
  const isVisible = useOnScreen(cpSectionRef);

  const [logoToUpdateLeft, _setLogoToUpdateLeft] = useState<number | null>(null);
  const logoToUpdateRefLeft = useRef(logoToUpdateLeft);
  const setLogoToUpdateLeft = (val: number | null) => {
    logoToUpdateRefLeft.current = val;
    _setLogoToUpdateLeft(val);
  };

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (isVisible) {
      t = setTimeout(() => {
        let row = null;
        do {
          row = getRandomInt(0, 23);
        } while (row === logoToUpdateRefLeft.current);
        setLogoToUpdateLeft(row);
      }, getRandomInt(22, 32) * 100);
    }
    return () => {
      clearTimeout(t);
    };
  }, [logoToUpdateLeft, isVisible]);

  const [logoToUpdateRight, _setLogoToUpdateRight] = useState<number | null>(null);
  const logoToUpdateRefRight = useRef(logoToUpdateRight);
  const setLogoToUpdateRight = (val: number | null) => {
    logoToUpdateRefRight.current = val;
    _setLogoToUpdateRight(val);
  };

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (isVisible) {
      t = setTimeout(() => {
        let row = null;
        do {
          row = getRandomInt(24, 47);
        } while (row === logoToUpdateRefRight.current);
        setLogoToUpdateRight(row);
      }, getRandomInt(22, 32) * 100);
    }
    return () => {
      clearTimeout(t);
    };
  }, [logoToUpdateRight, isVisible]);

  return (
    <Box
      ref={cpSectionRef}
      sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}
    >
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

const smallTitleStyle: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: '20px',
  lineHeight: '56px',
  letterSpacing: '-0.2px',
  ml: 1.5,
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type KeyPointsBlockProps = {
  smallTitle: string;
  bigTitle: string;
  body: string;
  href: string;
  imgBig: string | StaticImport;
  reversed?: Boolean;
};

const KeyPointsBlock = ({
  smallTitle,
  bigTitle,
  body,
  href,
  imgBig,
  reversed,
}: KeyPointsBlockProps) => {
  let smallTitleGradient = gradient_1;
  if (reversed) {
    smallTitleGradient = gradient_2;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: COLORS.linkWater,
        flexDirection: reversed ? 'row-reverse' : 'row',
        mb: 25,
      }}
    >
      <Box
        sx={{
          flex: 1,
          pr: reversed ? 0 : 3.5,
          pl: reversed ? 3.5 : 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CircleTriangleIcon secondColor={reversed ? 'sun' : 'shakespeare'} />
          <Typography sx={{ ...smallTitleStyle, ...smallTitleGradient }}>{smallTitle}</Typography>
        </Box>
        <Typography variant="h2_new" sx={{ maxWidth: 450, mb: 2.5 }}>
          {bigTitle}
        </Typography>
        <Typography variant="body_normal" sx={{ maxWidth: 496 }}>
          {body}
        </Typography>
        <Link
          href={href}
          muiProps={{
            color: reversed ? COLORS.sun : COLORS.turquoise,
            sx: { mt: 5 },
          }}
          hasArrow
        >
          Learn More
        </Link>
      </Box>
      <Box sx={{ flex: 1, pr: reversed ? 3.5 : 0, pl: reversed ? 0 : 3.5 }}>
        <Image src={imgBig} alt="keyPointTempImg" />
      </Box>
    </Box>
  );
};

type Props = {};

const Home = ({}: Props) => {
  return (
    <PageProvider>
      <Section sx={headerSection}>
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
            The control center of your internal cloud platform
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
      <Section bgcolor sx={{ pt: 10, pb: 20, textAlign: 'center' }}>
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
      <Section sx={{ pt: 10, pb: 20 }}>
        <KeyPointsBlock
          smallTitle="Enterprise ready"
          bigTitle="Fully-managed control planes"
          body="Control planes running in Upbound
            are designed to be high performance, scalable, multitenant,
            and secure for the most demanding platforms."
          href="/"
          imgBig={EnterpriseReadyBig}
        />
        <KeyPointsBlock
          smallTitle="Deploy with confidence"
          bigTitle="Best-in-class platform building blocks"
          body="Upbound Marketplace is a one-stop-shop
            for all the components you need in your platform
            powered by an Upbound control plane. Supported and
            Certified listings are available so you can run your
            platform in production with confidence."
          href="/"
          imgBig={DeployWithConfidenceBig}
          reversed
        />
        <KeyPointsBlock
          smallTitle="Efficiency + ease"
          bigTitle="Self-Service Console"
          body="The Upbound Console is dynamically rendered
            from your Upbound control plane and the Crossplane
            packages installed in it. Centralize control and empower
            your team to deploy without red tape."
          imgBig={EfficiencyEaseBig}
          href="/"
        />
      </Section>
      <Box sx={{ height: 1000 }} bgcolor={COLORS.firefly} />
    </PageProvider>
  );
};

export default Home;
