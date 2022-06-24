import React, { memo, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import {
  Box,
  Button as MuiButton,
  Hidden,
  SxProps,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  COLORS,
  fontAvenirBold,
  fontAvenirRoman,
  fontAvenirRomanItalic,
  gradient_1,
  gradient_2,
  MQ,
} from 'src/theme';
import { keyframes } from '@emotion/react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import validator from 'validator';

import * as routes from 'src/routes';

import getRandomInt from 'src-new/utils/getRandomInt';
import useOnScreen from 'src-new/utils/useOnScreen';

import crossplaneLogos from 'src-new/constants/crossplaneLogos';
import quotes from 'src-new/constants/quotes';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';
import MediaCard from 'src-new/elements/MediaCard';
import CornerCard from 'src-new/elements/CornerCard';

import RocketShipIcon from 'src-new/svg/RocketShipIcon';
import ArrowRight from 'src-new/svg/ArrowRight';
import FullArrowRight from 'src-new/svg/FullArrowRight';
import ArrowRightRounded from 'src-new/svg/ArrowRightRounded';
import mbpcLogo from 'public/new-images/trusted-logos/millennium-bpc.svg';
import dfdsLogo from 'public/new-images/trusted-logos/dfds.svg';
import grupoLogo from 'public/new-images/trusted-logos/grupo.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import headerBg from 'public/new-images/home-page/header-bg.jpg';
import headerDiagram from 'public/new-images/home-page/header-diagram.svg';
import headerDiagramMobile from 'public/new-images/home-page/header-diagram-mobile.svg';
import EnterpriseReadyIcon from 'public/new-images/home-page/features/EnterpriseReadyIcon.svg';
import EnterpriseReadyBig from 'public/new-images/home-page/features/EnterpriseReadyBig.svg';
import EnterpriseReadyBigMobile from 'public/new-images/home-page/features/EnterpriseReadyBigMobile.svg';
import EnterpriseReadySmall from 'public/new-images/home-page/features/EnterpriseReadySmall.svg';
import EnterpriseReadySmallMobile from 'public/new-images/home-page/features/EnterpriseReadySmallMobile.svg';
import DeployWithConfidenceIcon from 'public/new-images/home-page/features/DeployWithConfidenceIcon.svg';
import DeployWithConfidenceBig from 'public/new-images/home-page/features/DeployWithConfidenceBig.svg';
import DeployWithConfidenceBigMobile from 'public/new-images/home-page/features/DeployWithConfidenceBigMobile.svg';
import DeployWithConfidenceSmall from 'public/new-images/home-page/features/DeployWithConfidenceSmall.svg';
import DeployWithConfidenceSmallMobile from 'public/new-images/home-page/features/DeployWithConfidenceSmallMobile.svg';
import EfficiencyEaseIcon from 'public/new-images/home-page/features/EfficiencyEaseIcon.svg';
import EfficiencyEaseBig from 'public/new-images/home-page/features/EfficiencyEaseBig.svg';
import EfficiencyEaseBigMobile from 'public/new-images/home-page/features/EfficiencyEaseBigMobile.svg';
import EfficiencyEaseSmall from 'public/new-images/home-page/features/EfficiencyEaseSmall.svg';
import EfficiencyEaseSmallMobile from 'public/new-images/home-page/features/EfficiencyEaseSmallMobile.svg';
import bigQuotes from 'public/new-images/home-page/quotes/big-quotes.svg';
import mainArticleImg from 'public/new-images/media-cards/main-article-img.png';
// import laptopArticleImg from 'public/new-images/media-cards/laptop-article-img.png';
import grantGuminaProfile from 'public/new-images/media-cards/grant-gumina-profile.jpeg';
import matthiasArticleImg from 'public/new-images/media-cards/matthias-article-img.png';
import arrowCircle from 'public/new-images/icons/arrow-circle.svg';

const headerSection: SxProps = {
  pt: { _: 13, md: 24 },
  pb: 4,
  textAlign: 'center',
  color: COLORS.linkWater,
  backgroundImage: `url(${headerBg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',

  '@media screen and (min-width: 1980px)': {
    backgroundSize: 'contain',
  },
};

const discoverSection: SxProps = {
  pt: { _: 10, md: 15 },
  pb: 32,
  backgroundImage: `url(${headerBg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundSize: 'cover',
};

const h1: SxProps = {
  ...fontAvenirBold,
  fontSize: '46px',
  lineHeight: '54px',
  letterSpacing: '-1.59px',
  mb: 3.5,
  ...gradient_1,

  [MQ.md]: {
    ...fontAvenirBold,
    fontSize: '95px',
    lineHeight: '104px',
    letterSpacing: '-3.28px',
  },
};

const headerButtons: SxProps = {
  mt: { _: 5, sm: 7.5 },
  mb: { _: 6, sm: 10 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: { _: 'column', sm: 'row' },
};

const poweringTitle: SxProps = {
  ...fontAvenirRoman,
  fontSize: '14px',
  lineHeight: '23px',
  letterSpacing: '1.75px;',
  mb: 3,

  [MQ.md]: {
    fontSize: '16px',
    lineHeight: '40px',
    letterSpacing: '2px',
  },
};

const logosContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: 9,
};

const logoSVG: SxProps = {
  position: 'relative',
  mx: '25px',
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
  transition: 'opacity 2s ease',

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
  transition: 'opacity 3s ease',
};

const cpCenterBoxTitleNum: SxProps = {
  ...fontAvenirRoman,
  color: '#fff',
  fontSize: '50px',
  lineHeight: '50px',

  [MQ.lg]: {
    fontSize: '74px',
    lineHeight: '36px',
    mb: 1.5,
  },
};

const cpCenterBoxTitleText: SxProps = {
  ...fontAvenirBold,
  color: '#fff',
  fontSize: '20px',
  lineHeight: '24px',
  mb: 1.5,

  [MQ.lg]: {
    fontSize: '24px',
    lineHeight: '36px',
    mb: 3,
  },
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

const cpLogoBoxMobile: SxProps = {
  width: 83,
  height: 59,
  m: 0.5,
};

const pulsate = keyframes`
  from { opacity: 1; }
  50% { opacity: 0.5; }
  to { opacity: 1; }
`;

const smallTitleStyle: SxProps = {
  ...fontAvenirRoman,
  ml: 1.5,
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: '-0.13px',

  [MQ.md]: {
    fontSize: '20px',
    lineHeight: '56px',
    letterSpacing: '-0.2px',
  },
};

const quoteSectionLeftContainer: SxProps = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '40%',
};

const quoteSectionLeftInner: SxProps = {
  width: '100%',
  height: '100%',
  clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)',
  backgroundImage: `linear-gradient(-62deg, #3DE2CB 0%, #6D64F5 100%)`,
  backgroundPosition: 'center',
};

const quoteSectionContainerMobile: SxProps = {
  width: '100%',
  height: 460,
  backgroundImage: `linear-gradient(-62deg, #3DE2CB 0%, #6D64F5 100%)`,
  backgroundPosition: 'center',
};

const quoteSectionLeftBg: SxProps = {
  backgroundPosition: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  transition: 'opacity 0.5s',
};

const quoteSectionBgMobile: SxProps = {
  backgroundPosition: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  transition: 'opacity 0.5s',
};

const quoteSectionLeftLogo: SxProps = {
  position: 'absolute',
  top: '58%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  transition: 'opacity 0.5s',
};

const quoteSectionLogoMobile: SxProps = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  transition: 'opacity 0.5s',
};

const quoteSectionRightContainer: SxProps = {
  width: '100%',
  maxWidth: 660,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
};

const quoteSectionQuoteLogos: SxProps = {
  display: 'flex',
  alignItems: 'center',
  '& > div:not(:last-of-type)': {
    mr: 1.5,
  },
};

const quoteSectionQuoteLogoBox: SxProps = {
  bgcolor: COLORS.bigStone,
  px: '18px',
  py: '34px',
  width: 116,
  height: 108,
  border: `2px solid ${COLORS.bigStone}`,
  borderRadius: '10px',
  boxShadow: '0 15px 35px 0 rgba(0,0,0,0.05)',
  transition: 'all 0.5s',

  '&:hover': {
    backgroundColor: '#23435C',
    transform: `scale(1.05)`,
    cursor: 'pointer',
  },
};

const quoteSectionQuoteLogoBoxActive: SxProps = {
  bgcolor: '#23435C',
  position: 'relative',
  border: `2px solid transparent`,
  backgroundClip: 'padding-box',
  transition: 'none',

  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    margin: '-2px',
    borderRadius: 'inherit',
    background: 'linear-gradient(-45deg, #6D64F5 0, #C9C3FF 100%)',
  },

  '&:hover': {},
};

const registerFormContainer: SxProps = {
  backgroundImage: 'linear-gradient(-57deg, #FAAD13 0%, #6D64F5 100%)',
  borderRadius: '10px',
  height: { xl: 280 },
  px: '22px',
  py: '24px',
  mb: { xl: 2.5 },
  display: 'flex',
  flexDirection: 'column',
};

const registerFormTitle: SxProps = {
  ...fontAvenirBold,
  color: '#fff',
  mb: 2.5,
  fontSize: '22px',
  lineHeight: '27px',

  [MQ.md]: {
    fontSize: '30px',
    lineHeight: '36px',
  },
};

const registerFormField: SxProps = {
  mb: 2.5,
  '& > .MuiOutlinedInput-root': {
    bgcolor: '#fff',
    borderRadius: '8px',

    '& > input': {
      p: '12.5px 14px',
    },

    '&.Mui-focused': {
      '& > .MuiOutlinedInput-notchedOutline': {
        borderColor: COLORS.cornflower,
        borderWidth: '1px',
      },
    },

    '& > .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
  },
};

const registerFormSubmit: SxProps = {
  ...fontAvenirBold,
  fontSize: '16px',
  lineHeight: '25px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
};

const visitCard: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: 2.5,
  py: 2.5,

  [MQ.sm]: {
    minHeight: 100,
  },

  [MQ.xl]: {
    pl: 2.5,
    pr: 0,
    maxWidth: 150,
    minHeight: 'unset',
  },
};

const headerLogos = [
  {
    id: 1,
    src: mbpcLogo,
    width: 90,
    height: 21,
  },
  {
    id: 2,
    src: dfdsLogo,
    width: 80,
    height: 28,
  },
  {
    id: 3,
    src: grupoLogo,
    width: 80,
    height: 26,
  },
  {
    id: 4,
    src: dbLogo,
    width: 47,
    height: 34,
  },
  {
    id: 5,
    src: plotlyLogo,
    width: 80,
    height: 26,
  },
];

const HeaderSection = () => {
  const logosSectionRef = useRef(undefined);
  const isVisible = useOnScreen(logosSectionRef);

  return (
    <>
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
          sx={{
            width: { _: 225, sm: 208 },
            mr: { _: 0, sm: '10px' },
            mb: { _: '20px', sm: 0 },
            '& > .MuiButton-iconSizeMedium': {
              mr: '10px',
              '& > svg': {
                height: { _: 20, md: 25 },
                width: { _: 20, md: 25 },
              },
            },
          }}
          startIcon={<RocketShipIcon />}
          href={routes.cloudRegisterUrl}
        >
          Get Started
        </Button>
        <Button
          styleType="whiteOutlined"
          sizeType="large"
          sx={{
            width: { _: 225, sm: 208 },
            ml: { _: 0, sm: '10px' },
            '& > .MuiButton-iconSizeMedium': {
              ml: '16px',
              '& > svg': {
                height: { _: 12, md: 13 },
                width: { _: 7, md: 8 },
              },
            },
          }}
          endIcon={<ArrowRight />}
          href={routes.contactSalesUrl}
        >
          Contact Us
        </Button>
      </Box>
      <Box ref={logosSectionRef}>
        <Typography sx={poweringTitle}>POWERING INTERNAL CLOUD PLATFORMS AT</Typography>
        <Hidden smDown>
          <Box sx={logosContainer}>
            {headerLogos.map((logo) => (
              <Box key={logo.id} sx={{ ...logoSVG, width: logo.width, height: logo.height }}>
                <Image src={logo.src} alt="DFDS" layout="fill" objectFit="contain" />
              </Box>
            ))}
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box
            sx={{
              maxWidth: 400,
              mx: 'auto',
              '.slide > div': {
                opacity: '.3',
                minHeight: 80,
                transition: 'all 0.5s',
              },

              '.selected > div': {
                opacity: '1',
                transform: 'scale(1.5)',
              },
            }}
          >
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              autoPlay={isVisible}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={50}
              stopOnHover={false}
              showThumbs={false}
              swipeable={false}
            >
              {headerLogos.map((logo) => (
                <Box
                  key={logo.id}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Box sx={{ position: 'relative', width: logo.width, height: logo.height }}>
                    <Image src={logo.src} alt="DFDS" layout="fill" objectFit="contain" />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Hidden>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Hidden smDown>
          <Image src={headerDiagram} alt="headerDiagram" />
        </Hidden>
        <Hidden smUp>
          <Image src={headerDiagramMobile} alt="headerDiagramMobile" layout="responsive" />
        </Hidden>
      </Box>
    </>
  );
};

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
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxBig,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxSmall,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxSmaller,
    logos: [...Array(6)],
  },
];

const cpColumnsRightList = [
  {
    sizeStyles: cpLogoBoxSmaller,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxSmall,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxBig,

    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxBigger,

    logos: [...Array(6)],
  },
];

const cpLogosListTopMobile = [...Array(12)];

const cpLogosListBottomMobile = [...Array(12)];

const CrossplaneLogosSection = () => {
  const cpSectionRef = useRef(undefined);
  const isVisible = useOnScreen(cpSectionRef);

  const matchesLG = useMediaQuery(MQ.lg);

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
          if (matchesLG) {
            row = getRandomInt(0, 23);
          } else {
            row = getRandomInt(0, 11);
          }
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
          if (matchesLG) {
            row = getRandomInt(24, 47);
          } else {
            row = getRandomInt(12, 23);
          }
        } while (row === logoToUpdateRefRight.current);
        setLogoToUpdateRight(row);
      }, getRandomInt(22, 32) * 100);
    }
    return () => {
      clearTimeout(t);
    };
  }, [logoToUpdateRight, isVisible]);

  const hiddenBarRef = useRef(undefined);
  const hiddenBarIsVisible = useOnScreen(hiddenBarRef);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (hiddenBarIsVisible) {
      setShow(true);
    }
  }, [hiddenBarIsVisible]);

  const delayMulti = 0.25;

  return (
    <Box
      ref={cpSectionRef}
      sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}
    >
      <Hidden lgDown>
        <Box sx={cpLeftColumns}>
          <Box sx={{ ...cpColumnShadow, left: -176 }} />
          {cpColumnsLeftList.map((c, columnIndex) => (
            <Box
              key={columnIndex}
              sx={{
                ...cpLogoBoxColumn,
                opacity: show ? 1 : 0,
                transitionDelay: `${(columnIndex - 3) * -delayMulti}s`,
              }}
            >
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
        <Box sx={{ ...cpCenterBox, opacity: show ? 1 : 0 }}>
          <Typography sx={cpCenterBoxTitleNum}>5K+</Typography>
          <Typography sx={cpCenterBoxTitleText}>Slack Members</Typography>
          <Typography variant="body_normal">
            Adopted by hundreds of amazing
            <br />
            companies
          </Typography>
          <Button styleType="cornflowerContained" sx={{ mt: 3.5 }} href={routes.crossplaneUrl}>
            Learn more about Crossplane
          </Button>
        </Box>
        <Box sx={cpRightColumns}>
          {cpColumnsRightList.map((c, columnIndex) => (
            <Box
              key={columnIndex}
              sx={{
                ...cpLogoBoxColumn,
                opacity: show ? 1 : 0,
                transitionDelay: `${columnIndex * delayMulti}s`,
              }}
            >
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
      </Hidden>
      <Hidden lgUp>
        <Box sx={{ maxWidth: 400, mx: 'auto' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cpLogosListTopMobile.map((logo, index) => (
              <CPLogoBox
                key={index}
                sizeStyles={cpLogoBoxMobile}
                shouldUpdate={logoToUpdateLeft === index}
              />
            ))}
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography sx={cpCenterBoxTitleNum}>5K+</Typography>
            <Typography sx={cpCenterBoxTitleText}>Slack Members</Typography>
            <Typography variant="body_normal">Adopted by hundreds of amazing companies</Typography>
            <Button styleType="cornflowerContained" sx={{ mt: 2 }} href={routes.crossplaneUrl}>
              Learn more about Crossplane
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cpLogosListBottomMobile.map((logo, index) => (
              <CPLogoBox
                key={index}
                sizeStyles={cpLogoBoxMobile}
                shouldUpdate={logoToUpdateRight === index + 12}
              />
            ))}
          </Box>
        </Box>
      </Hidden>
      <Box
        ref={hiddenBarRef}
        sx={{ width: '100%', height: '1px', position: 'absolute', bottom: -40 }}
      />
    </Box>
  );
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type FeatureBlockProps = {
  feature: {
    smallTitle: string;
    bigTitle: string;
    body: string;
    href: string;
    icon: string | StaticImport;
    imgBig: string | StaticImport;
    imgBigMobile: string | StaticImport;
    imgSmall: string | StaticImport;
    imgSmallMobile: string | StaticImport;
    imgSmallOffset: { top: number; right: number };
    imgSmallOffsetMobile: { top: number; right: number };
    reversed?: Boolean;
  };
};

const FeatureBlock = ({ feature }: FeatureBlockProps) => {
  const {
    smallTitle,
    bigTitle,
    body,
    href,
    icon,
    imgBig,
    imgBigMobile,
    imgSmall,
    imgSmallMobile,
    imgSmallOffset,
    imgSmallOffsetMobile,
    reversed,
  } = feature;

  let smallTitleGradient = gradient_1;
  if (reversed) {
    smallTitleGradient = gradient_2;
  }

  const hiddenBarRef = useRef(undefined);
  const isVisible = useOnScreen(hiddenBarRef);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);

  return (
    <Box
      sx={{
        display: 'flex',
        color: COLORS.linkWater,
        position: 'relative',
        flexDirection: 'column',
        [MQ.lg]: {
          alignItems: 'center',
          flexDirection: reversed ? 'row-reverse' : 'row',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          [MQ.lg]: {
            flex: 1,
            width: '50%',
            minWidth: '50%',
            maxWidth: '50%',
            pr: reversed ? '0px' : '28px',
            pl: reversed ? '28px' : '0px',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              maxHeight: 16,
              maxWidth: 16,
              [MQ.md]: {
                maxHeight: 'unset',
                maxWidth: 'unset',
              },
            }}
          >
            <Image src={icon} alt="icon" />
          </Box>
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
        <Box
          ref={hiddenBarRef}
          sx={{ width: '100%', height: '1px', position: 'absolute', bottom: 0 }}
        />
      </Box>
      <Box
        sx={{
          mt: '40px',
          [MQ.lg]: {
            flex: 1,
            mt: 0,
            width: '50%',
            minWidth: '50%',
            maxWidth: '50%',
            pr: reversed ? '28px' : '0px',
            pl: reversed ? '0px' : '28px',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { _: 'fit-content', lg: 'unset' },
            ml: { _: '-14px', lg: 0 },
          }}
        >
          <Box
            sx={{
              transition: 'transform 1.5s',
              transform: show ? '' : `translate(100vw)`,

              [MQ.lg]: {
                transform: show ? '' : `translate(${reversed ? '-50vw' : '50vw'})`,
                ml: reversed ? '-68px' : 0,
              },
            }}
          >
            <Hidden lgDown>
              <Image src={imgBig} alt="feature-img-big" />
            </Hidden>
            <Hidden lgUp>
              <Image src={imgBigMobile} alt="feature-img-big-mobile" />
            </Hidden>
          </Box>
          <Hidden lgDown>
            <Box
              sx={{
                position: 'absolute',
                top: imgSmallOffset.top,
                right: imgSmallOffset.right,
                transform: show ? '' : `translate(${reversed ? '-100vw' : '100vw'})`,
                transition: 'transform 2s',
              }}
            >
              <Image src={imgSmall} alt="feature-img-small" />
            </Box>
          </Hidden>
          <Hidden lgUp>
            <Box
              sx={{
                position: 'absolute',
                top: imgSmallOffsetMobile.top,
                right: imgSmallOffsetMobile.right,
                transition: 'transform 2s',
                transform: show ? '' : `translate(-100vw)`,

                [MQ.lg]: {
                  transform: show ? '' : `translate(${reversed ? '-100vw' : '100vw'})`,
                },
              }}
            >
              <Image src={imgSmallMobile} alt="feature-img-small-mobile" />
            </Box>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

const features = [
  {
    smallTitle: 'Enterprise ready',
    bigTitle: 'Fully-managed control planes',
    body: `Control planes running in Upbound
    are designed to be high performance, scalable, multitenant,
    and secure for the most demanding platforms.`,
    href: routes.productsUCPRoute,
    icon: EnterpriseReadyIcon,
    imgBig: EnterpriseReadyBig,
    imgBigMobile: EnterpriseReadyBigMobile,
    imgSmall: EnterpriseReadySmall,
    imgSmallMobile: EnterpriseReadySmallMobile,
    imgSmallOffset: { top: 103, right: -68 },
    imgSmallOffsetMobile: { top: 53, right: -32 },
    reversed: false,
  },
  {
    smallTitle: 'Deploy with confidence',
    bigTitle: 'Best-in-class platform building blocks',
    body: `Upbound Marketplace is a one-stop-shop
    for all the components you need in your platform,
    powered by an Upbound control plane. Supported and
    Certified listings are available so you can run your
    platform in production with confidence.`,
    href: routes.productsUCPRoute,
    icon: DeployWithConfidenceIcon,
    imgBig: DeployWithConfidenceBig,
    imgBigMobile: DeployWithConfidenceBigMobile,
    imgSmall: DeployWithConfidenceSmall,
    imgSmallMobile: DeployWithConfidenceSmallMobile,
    imgSmallOffset: { top: 67, right: 0 },
    imgSmallOffsetMobile: { top: 34, right: -32 },
    reversed: true,
  },
  {
    smallTitle: 'Efficiency + ease',
    bigTitle: 'Self-Service Console',
    body: `The Upbound Console is dynamically rendered
    from your Upbound control plane and the Crossplane
    packages installed in it. Centralize control and empower
    your team to deploy without red tape.`,
    href: routes.productsUCPRoute,
    icon: EfficiencyEaseIcon,
    imgBig: EfficiencyEaseBig,
    imgBigMobile: EfficiencyEaseBigMobile,
    imgSmall: EfficiencyEaseSmall,
    imgSmallMobile: EfficiencyEaseSmallMobile,
    imgSmallOffset: { top: 54, right: -17 },
    imgSmallOffsetMobile: { top: 34, right: -32 },
    reversed: false,
  },
];

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > div': { pb: { _: 10, lg: 25 } },
      }}
    >
      {features.map((feature) => (
        <FeatureBlock key={feature.smallTitle} feature={feature} />
      ))}
    </Box>
  );
};

const quoteLessIcons = [
  {
    id: 1,
    logo: dfdsLogo,
  },
  {
    id: 2,
    logo: grupoLogo,
  },
];

const QuoteSection = () => {
  const quoteSectionRef = useRef(undefined);
  const isVisible = useOnScreen(quoteSectionRef);
  const [activeQuote, _setActiveQuote] = useState(0);

  const activeQuoteRef = useRef(activeQuote);
  const setActiveQuote = (val: number) => {
    activeQuoteRef.current = val;
    _setActiveQuote(val);
  };

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (isVisible) {
      t = setInterval(() => {
        if (activeQuoteRef.current === quotes.length - 1) {
          setActiveQuote(0);
        } else {
          setActiveQuote(activeQuoteRef.current + 1);
        }
      }, 4000);
    }
    return () => {
      clearInterval(t);
    };
  }, [isVisible]);

  return (
    <Box ref={quoteSectionRef} sx={{ display: 'flex', color: COLORS.linkWater }}>
      <Hidden xlDown>
        <Box sx={{ flex: 1 }}>
          <Box sx={quoteSectionLeftContainer}>
            <Box sx={quoteSectionLeftInner}>
              {quotes.map((quote, index) => (
                <Box
                  key={quote.title}
                  sx={{
                    ...quoteSectionLeftBg,
                    backgroundImage: `url("${quote.bgImage}")`,
                    opacity: activeQuote === index ? 1 : 0,
                  }}
                />
              ))}
              {quotes.map((quote, index) => (
                <Box
                  key={quote.title}
                  sx={{
                    ...quoteSectionLeftLogo,
                    opacity: activeQuote === index ? 1 : 0,
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', height: 75 }}>
                    <Image src={quote.logo} alt="quote-logo" layout="fill" objectFit="contain" />
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ position: 'absolute', top: 64, right: 46 }}>
              <Box sx={{ position: 'relative' }}>
                <Image src={bigQuotes} alt="big-quotes" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={quoteSectionRightContainer}>
          {quotes.map((quote, index) => (
            <Box
              key={quote.title}
              sx={{
                mb: activeQuote === index ? 7 : 0,
                opacity: activeQuote === index ? 1 : 0,
                transition: 'opacity 0.5s',
                position: activeQuote === index ? 'relative' : 'absolute',
                top: 0,
              }}
            >
              <Box sx={{ minHeight: 275, mb: 4.5 }}>
                <Typography variant="h2_new" sx={{ mb: 3 }}>
                  {quote.title}
                </Typography>
                <Typography variant="body_normal">{quote.body}</Typography>
              </Box>
              <Typography variant="h6_new" sx={{ mb: '2px' }}>
                {quote.person}
              </Typography>
              <Typography variant="body_xs" sx={{ ...fontAvenirRomanItalic }}>
                {quote.role}
              </Typography>
            </Box>
          ))}
          <Box sx={quoteSectionQuoteLogos}>
            {quotes.map((quote, index) => {
              let styles = quoteSectionQuoteLogoBox;
              if (index === activeQuote) {
                styles = { ...styles, ...quoteSectionQuoteLogoBoxActive };
              }
              return (
                <Box key={quote.title} sx={styles} onClick={() => setActiveQuote(index)}>
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image src={quote.logo} alt="quote-logo" layout="fill" objectFit="contain" />
                  </Box>
                </Box>
              );
            })}
            {quoteLessIcons.map((quote) => {
              return (
                <Box key={quote.id} sx={{ ...quoteSectionQuoteLogoBox, '&:hover': {} }}>
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image src={quote.logo} alt="quote-logo" layout="fill" objectFit="contain" />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Hidden>
      <Hidden xlUp>
        <Box sx={quoteSectionContainerMobile}>
          {quotes.map((quote, index) => (
            <Box
              key={quote.title}
              sx={{
                height: '100%',
                pt: 7,
                pb: 4,
                px: 2,
                zIndex: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: activeQuote === index ? 'relative' : 'absolute',
                opacity: activeQuote === index ? 1 : 0,
              }}
            >
              <Box
                sx={{
                  ...quoteSectionBgMobile,
                  backgroundImage: `url("${quote.bgImage}")`,
                  zIndex: -1,
                }}
              />
              <Box sx={{ position: 'relative', height: 25, mb: 4 }}>
                <Box
                  sx={{
                    ...quoteSectionLogoMobile,
                    opacity: activeQuote === index ? 1 : 0,
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: quote.logoSize.width,
                      height: quote.logoSize.height,
                    }}
                  >
                    <Image src={quote.logo} alt="quote-logo" layout="fill" objectFit="contain" />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  // minHeight: 275,
                  mb: 2.5,
                }}
              >
                <Typography variant="h2_new" sx={{ mb: 1.5 }}>
                  {quote.title}
                </Typography>
                <Typography variant="body_normal">{quote.body}</Typography>
              </Box>
              <Typography variant="h6_new" sx={{ mb: '2px' }}>
                {quote.person}
              </Typography>
              <Typography variant="body_xs" sx={{ ...fontAvenirRomanItalic }}>
                {quote.role}
              </Typography>
            </Box>
          ))}
          <Box sx={{ position: 'absolute', bottom: -24, right: 16 }}>
            <Box sx={{ position: 'relative' }}>
              <Image src={bigQuotes} alt="big-quotes" width={72} height={57} />
            </Box>
          </Box>
        </Box>
      </Hidden>
    </Box>
  );
};

const MediaCard_1 = () => {
  const matchesXL = useMediaQuery(MQ.xl);

  return (
    <MediaCard
      img={mainArticleImg}
      imgHeight={matchesXL ? 260 : 180}
      profileImg={grantGuminaProfile}
      profileImgSize="big"
      person="Grant Gumina"
      type="webinar"
      title="Control Planes: The Missing Ingredient for Cloud Native Developer Platforms"
      titleVariant="h4_new"
      body={
        matchesXL
          ? `Who you get infrastructure from and how you build applications for it has changed.
          Now more than ever, customers are utilizing best-in-class infrastructure from the vendors
          of their choice. However, this presents challenges...`
          : ''
      }
      href="https://upbound-5557732.hs-sites.com/control-planes-missing-ingredient-webinar"
    />
  );
};

const MediaCard_2 = () => {
  const matchesXL = useMediaQuery(MQ.xl);

  return (
    <MediaCard
      layout={matchesXL ? 'horizontal' : 'vertical'}
      img={matchesXL ? matthiasArticleImg : null}
      imgHeight={130}
      imgWidth={130}
      person="Matthias Luebken"
      type="Blog"
      title="Announcing 100% Cloud Service Coverage for Crossplane"
      pillText="Must read!"
      href={`${routes.upboundBlogUrl}cloud-service-coverage/`}
    />
  );
};

const MediaCard_3 = () => {
  return (
    <MediaCard
      type="video"
      person="Viktor Farcic"
      title="VIDEO: How to Manage Multi-Cloud Resources"
      date="25 May, 2022"
      pillText="New!"
      videoId="VTTwzVSwWVo"
    />
  );
};

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (email) {
      if (validator.isEmail(email)) {
        setEmailError('');
      } else {
        setEmailError('Please enter a valid email');
      }
    } else {
      setEmailError('');
    }
  }, [email]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const submitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validator.isEmail(email)) {
      setEmailSubmitted(true);
    } else {
      setEmailError('Please enter a valid email');
    }
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/5557732/4d8994c1-6bcd-4fad-8e77-55e3453b3f33',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            submittedAt: new Date().toISOString(),
            fields: [
              {
                objectTypeId: '0-1',
                name: 'email',
                value: email,
              },
              {
                objectTypeId: '0-1',
                name: 'newsletter_subscriber',
                value: email,
              },
            ],
            legalConsentOptions: {
              consent: {
                // Include this object when GDPR options are enabled
                consentToProcess: true,
                text: `Yes, I wish to subscribe to stay in the know about exciting product
                announcements and educational material. You can always unsubscribe in the
                email footer. Read our Privacy Policy to learn more.`,
                communications: [
                  {
                    value: true,
                    subscriptionTypeId: 999,
                    text: `Yes, I wish to subscribe to stay in the know about exciting product
                    announcements and educational material. You can always unsubscribe in the
                    email footer. Read our Privacy Policy to learn more.`,
                  },
                ],
              },
            },
          }),
        }
      );

      const json = await response.json();

      setLoading(false);

      if ('inlineMessage' in json) {
        setFormSubmitted(true);
        return;
      }

      setSubmitError(true);
    } catch (error) {
      console.log('newsletter form error', error);
      setSubmitError(true);
    }
  };

  return (
    <Box sx={registerFormContainer}>
      {formSubmitted ? (
        <Typography sx={{ color: '#fff', fontSize: 20, ...fontAvenirBold }}>
          Thank you for your interest! We hope you enjoy our monlty newsletter.
        </Typography>
      ) : submitError ? (
        <Typography sx={{ color: '#fff', fontSize: 20, ...fontAvenirBold }}>
          Something went wrong, please try again later.
        </Typography>
      ) : emailSubmitted ? (
        <>
          <Typography sx={{ color: '#fff' }}>
            <Typography variant="inherit" sx={{ ...fontAvenirBold }}>
              Yes, I wish to subscribe to stay in the know about exciting product announcements and
              educational material.
            </Typography>
            You can always unsubscribe in the email footer. Read our Privacy Policy to learn more.
          </Typography>
          <Box sx={{ mt: 'auto', color: '#fff' }}>
            <form onSubmit={submitForm}>
              <MuiButton
                sx={{ textTransform: 'none', mt: '-6px', ml: '-8px' }}
                disableRipple
                type="submit"
                disabled={loading}
              >
                <Typography
                  component="span"
                  sx={{ ...registerFormSubmit, opacity: loading ? 0.6 : 1 }}
                >
                  Submit
                  <Box component="span" sx={{ display: 'flex', ml: 1.5 }}>
                    <ArrowRightRounded height={11} color="currentColor" />
                  </Box>
                </Typography>
              </MuiButton>
            </form>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={registerFormTitle}>Register for our montly newsletter</Typography>
          <form onSubmit={submitEmail}>
            <Tooltip
              onClose={() => setEmailError('')}
              open={!!emailError}
              title={emailError}
              arrow
              placement="top"
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Your Email"
                size="small"
                name="email"
                sx={registerFormField}
                value={email}
                onChange={handleChange}
                error={!!emailError}
              />
            </Tooltip>
            <MuiButton
              sx={{ textTransform: 'none', color: '#fff', mt: '-6px', ml: '-8px' }}
              disableRipple
              type="submit"
              disabled={!!emailError}
            >
              <Typography
                component="span"
                sx={{ ...registerFormSubmit, opacity: !!emailError ? 0.6 : 1 }}
              >
                Continue
                <Box component="span" sx={{ display: 'flex', ml: 1.5 }}>
                  <ArrowRightRounded height={11} color="currentColor" />
                </Box>
              </Typography>
            </MuiButton>
          </form>
        </>
      )}
    </Box>
  );
};

const VisitBlogCard = () => {
  return (
    <CornerCard
      icon={arrowCircle}
      iconSize="small"
      withPadding={false}
      href={routes.upboundBlogUrl}
    >
      <Box sx={visitCard}>
        <Typography variant="h6_new">Visit the Upbound Blog</Typography>
      </Box>
    </CornerCard>
  );
};

type Props = {};

const Home = ({}: Props) => {
  const matchesXL = useMediaQuery(MQ.xl);

  return (
    <PageProvider>
      <Section sx={headerSection}>
        <HeaderSection />
      </Section>
      <Section
        bgcolor
        angleTopBottom="topBtmRight"
        sx={{ pt: { _: 16, md: 23.5 }, pb: { _: 16, md: 23.5 }, textAlign: 'center' }}
      >
        <Typography variant="h2_new" sx={{ mb: 2.5 }}>
          Committed to open source.
          <Hidden smDown>
            <br />
          </Hidden>
          <Hidden smUp> </Hidden>
          Powered by Crossplane.
        </Typography>
        <Hidden smDown>
          <Typography variant="body_normal" sx={{ mb: 8, mx: 'auto' }}>
            Created by Upbound, Crossplane is a framework for building cloud native control planes.
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="body_big" sx={{ mb: 8, mx: 'auto', maxWidth: 480 }}>
            Created by Upbound, Crossplane is a framework for building cloud native control planes.
          </Typography>
        </Hidden>

        <CrossplaneLogosSection />
      </Section>
      <Section sx={{ pt: { _: 12, md: 20 }, position: 'relative' }}>
        <FeaturesSection />
      </Section>
      <Section
        bgcolor
        angleTop="topRight"
        hasContainer={matchesXL}
        sx={{
          position: 'relative',
          pt: { xl: 18 },
          pb: { xl: 7.5 },
        }}
      >
        <QuoteSection />
      </Section>
      <Section sx={discoverSection}>
        <Hidden xlDown>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, color: COLORS.linkWater }}>
            <Typography variant="h2_new">Learn more about Upbound</Typography>
            <Box sx={{ display: 'flex', ml: 3.5 }}>
              <FullArrowRight width={32} height={32} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', height: 550 }}>
            <Box sx={{ height: '100%', width: 540 }}>
              <MediaCard_1 />
            </Box>
            <Box sx={{ flex: 1, ml: 2.5 }}>
              <Box sx={{ height: 130, width: '100%', mb: 2.5 }}>
                <MediaCard_2 />
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, width: '50%', height: 400, mr: '10px' }}>
                  <MediaCard_3 />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    width: '50%',
                    ml: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <RegisterForm />
                  <Box sx={{ flex: 1 }}>
                    <VisitBlogCard />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Hidden>
        <Hidden xlUp>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 5,
                  color: COLORS.linkWater,
                }}
              >
                <Typography variant="h2_new">Learn more</Typography>
                <Hidden mdDown>
                  <Box sx={{ display: 'flex', ml: 3.5 }}>
                    <FullArrowRight width={32} height={32} />
                  </Box>
                </Hidden>
                <Hidden mdUp>
                  <Box sx={{ display: 'flex', ml: 1.5 }}>
                    <FullArrowRight width={18} height={18} />
                  </Box>
                </Hidden>
              </Box>
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400, mb: 1.5 }}>
              <MediaCard_1 />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400, mb: 1.5 }}>
              <MediaCard_2 />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400, mb: 1.5 }}>
              <MediaCard_3 />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400, mb: 1.5 }}>
              <RegisterForm />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <VisitBlogCard />
            </Box>
          </Box>
        </Hidden>
      </Section>
    </PageProvider>
  );
};

export default Home;
