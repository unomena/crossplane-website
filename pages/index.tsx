import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { GetStaticProps } from 'next';
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

import handleGetStaticProps from 'src-new/utils/handleGetStaticProps';
import getRandomInt from 'src-new/utils/getRandomInt';
import useOnScreen from 'src-new/utils/useOnScreen';
import getImageUrl from 'src-new/utils/getImageUrl';

import crossplaneLogos from 'src-new/constants/crossplaneLogos';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';
import MediaCard from 'src-new/elements/MediaCard';
import CornerCard from 'src-new/elements/CornerCard';
import CMSImage from 'src-new/elements/CMSImage';
import { Img } from 'src/elements/Img';

import FullArrowRight from 'src-new/svg/FullArrowRight';
import ArrowRightRounded from 'src-new/svg/ArrowRightRounded';
import headerBg from 'public/new-images/home-page/header-bg.jpg';
import headerDiagram from 'public/new-images/home-page/header-diagram.svg';
import headerDiagramMobile from 'public/new-images/home-page/header-diagram-mobile.svg';
import bigQuotes from 'public/new-images/home-page/quotes/big-quotes.svg';
import arrowCircle from 'public/new-images/icons/arrow-circle.svg';
import gartnerLogo from 'public/new-images/media-cards/gartner_cool_vendor_2022.png';

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

  '& > button, a': {
    width: { _: 225, sm: 208 },
    mx: { _: 0, sm: '10px' },

    ':not(:last-of-type)': {
      mb: { _: '20px', sm: 0 },
    },
  },
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
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
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

const HeaderSection = (props: HomePageHeader) => {
  const logosSectionRef = useRef(undefined);
  const isVisible = useOnScreen(logosSectionRef);

  return (
    <>
      <Typography variant="h1_new" sx={h1}>
        {props.title}
      </Typography>
      <Typography variant="body_big">{props.subtitle}</Typography>
      <Box sx={headerButtons}>
        {props.buttons.map(({ id, value }) => (
          <Button key={id} sizeType="large" cmsValue={value}>
            {value.text}
          </Button>
        ))}
      </Box>
      <Box ref={logosSectionRef}>
        <Typography sx={poweringTitle}>{props.partner_images_header}</Typography>
        <Hidden smDown>
          <Box sx={logosContainer}>
            {props.partner_images.map(({ id, value }) => (
              <Box key={id} sx={{ ...logoSVG, width: value.width, height: value.height }}>
                <CMSImage value={value} />
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
              {props.partner_images.map(({ id, value }) => (
                <Box
                  key={id}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Box sx={{ position: 'relative', width: value.width, height: value.height }}>
                    <CMSImage value={value} />
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

const getRandomItem = (availableItems: any[]) => {
  return availableItems[getRandomInt(0, availableItems.length - 1)];
};

type CPLogoBoxProps = {
  index: number;
  sizeStyles: SxProps;
  shouldUpdate?: Boolean;
  availableLogos: any[];
  updateLogos: (newLogo: any, index: number) => void;
};

const CPLogoBox = memo(
  ({ index, sizeStyles, shouldUpdate, availableLogos, updateLogos }: CPLogoBoxProps) => {
    const [show, setShow] = useState(false);
    const [showStyles, setShowStyles] = useState(false);
    const [shouldPulse, setShouldPulse] = useState(false);
    const [logoOne, setLogoOne] = useState(null);
    const [logoTwo, setLogoTwo] = useState(null);

    useEffect(() => {
      if (shouldUpdate) {
        setShow((v) => !v);
      } else {
        setShouldPulse(false);
      }
    }, [shouldUpdate]);

    useEffect(() => {
      let t: NodeJS.Timeout;
      if (logoOne) {
        const newLogo = getRandomItem(availableLogos);
        updateLogos(newLogo, index);
        if (show) {
          setLogoTwo(newLogo);
        } else {
          setLogoOne(newLogo);
        }

        t = setTimeout(() => {
          setShowStyles((v) => !v);
          setShouldPulse(true);
        }, 3000);
      } else {
        const newLogo = availableLogos[index];
        setLogoOne(newLogo);
        updateLogos(newLogo, index);
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
          // bgcolor: shouldPulse ? 'red' : COLORS.bigStone,
          animation: shouldPulse ? `${pulsate} 2s ease-in-out` : null,
        }}
      >
        <Box
          sx={{
            ...cpLogoBoxImageContainer,
            '& > span:first-of-type': {
              opacity: showStyles ? '0 !important' : '1 !important',
              transitionDelay: showStyles ? '0s' : '1s',
            },
            '& > span:last-of-type': {
              opacity: showStyles ? '1 !important' : '0 !important',
              transitionDelay: showStyles ? '1s' : '0s',
            },
          }}
        >
          {logoOne ? (
            <Image src={logoOne} alt="company logo" layout="fill" objectFit="contain" />
          ) : (
            <span></span>
          )}
          {logoTwo ? (
            <Image src={logoTwo} alt="company logo" layout="fill" objectFit="contain" />
          ) : (
            <span></span>
          )}
        </Box>
      </Box>
    );
  }
);
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

const getInitAvailableRowsLeft = (matchesLG: boolean) => {
  return [...Array(matchesLG ? 24 : 12).keys()];
};

const getInitAvailableRowsRight = (matchesLG: boolean) => {
  return [...Array(matchesLG ? 24 : 12).keys()].map((v) => (matchesLG ? v + 24 : v + 12));
};

const CrossplaneLogosSection = (props: HomePage) => {
  const cpSectionRef = useRef(undefined);
  const isVisible = useOnScreen(cpSectionRef);

  const matchesLG = useMediaQuery(MQ.lg);

  const availableRowsLeftRef = useRef(getInitAvailableRowsLeft(matchesLG));
  const setAvailableRowsLeft = (val: any) => {
    availableRowsLeftRef.current = val;
  };

  useEffect(() => {
    setAvailableRowsLeft(getInitAvailableRowsLeft(matchesLG));
  }, [matchesLG]);

  const updateRowsLeft = useCallback(
    (newRow: any) => {
      let newAvailableRowsLeft = availableRowsLeftRef.current.filter((v: any) => v !== newRow);
      if (newAvailableRowsLeft.length === 0) {
        newAvailableRowsLeft = getInitAvailableRowsLeft(matchesLG);
      }
      setAvailableRowsLeft(newAvailableRowsLeft);
    },
    [availableRowsLeftRef.current]
  );

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
        const row = getRandomItem(availableRowsLeftRef.current);
        setLogoToUpdateLeft(row);
        updateRowsLeft(row);
      }, getRandomInt(12, 22) * 100);
    }
    return () => {
      clearTimeout(t);
    };
  }, [logoToUpdateLeft, isVisible]);

  const availableRowsRightRef = useRef(getInitAvailableRowsRight(matchesLG));
  const setAvailableRowsRight = (val: any) => {
    availableRowsRightRef.current = val;
  };

  useEffect(() => {
    setAvailableRowsRight(getInitAvailableRowsRight(matchesLG));
  }, [matchesLG]);

  const updateRowsRight = useCallback(
    (newRow: any) => {
      let newAvailableRowsRight = availableRowsRightRef.current.filter((v: any) => v !== newRow);
      if (newAvailableRowsRight.length === 0) {
        newAvailableRowsRight = getInitAvailableRowsRight(matchesLG);
      }
      setAvailableRowsRight(newAvailableRowsRight);
    },
    [availableRowsRightRef.current]
  );

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
        const row = getRandomItem(availableRowsRightRef.current);
        setLogoToUpdateRight(row);
        updateRowsRight(row);
      }, getRandomInt(12, 22) * 100);
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

  const availableLogosRef = useRef(crossplaneLogos);
  const setAvailableLogos = (val: any) => {
    availableLogosRef.current = val;
  };

  const activeLogosRef = useRef<any[]>([]);
  const setActiveLogos = (val: any) => {
    activeLogosRef.current = val;
  };

  const updateLogos = useCallback(
    (newLogo: any, index: number) => {
      const newActiveLogos = [...activeLogosRef.current];
      newActiveLogos[index] = newLogo;
      setActiveLogos(newActiveLogos);

      let newAvailableLogos = availableLogosRef.current.filter((v: any) => v.src !== newLogo.src);
      if (newAvailableLogos.length === 0) {
        newAvailableLogos = crossplaneLogos.filter(
          (cpLogo) => !newActiveLogos.some((v) => v.src === cpLogo.src)
        );
      }
      setAvailableLogos(newAvailableLogos);
    },
    [availableLogosRef.current, activeLogosRef.current]
  );

  // useEffect(() => {
  //   const logos = activeLogosRef.current.map((v: any) => v.src);
  //   const set = new Set(logos);

  //   const duplicates = logos.filter((item: any) => {
  //     if (set.has(item)) {
  //       set.delete(item);
  //     } else {
  //       return item;
  //     }
  //   });

  //   console.log(duplicates);
  // }, [activeLogosRef.current]);

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
                    index={realIndex}
                    sizeStyles={c.sizeStyles}
                    shouldUpdate={logoToUpdateLeft === realIndex}
                    availableLogos={availableLogosRef.current}
                    updateLogos={updateLogos}
                  />
                );
              })}
            </Box>
          ))}
        </Box>
        <Box sx={{ ...cpCenterBox, opacity: show ? 1 : 0 }}>
          <Typography sx={cpCenterBoxTitleNum}>{props.section_1_center_title_count}</Typography>
          <Typography sx={cpCenterBoxTitleText}>{props.section_1_center_title}</Typography>
          <Typography variant="body_normal" sx={{ maxWidth: 320 }}>
            {props.section_1_center_text}
          </Typography>
          {props.section_1_button[0] && (
            <Button sx={{ mt: 3.5 }} cmsValue={props.section_1_button[0].value}>
              {props.section_1_button[0].value.text}
            </Button>
          )}
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
                    index={realIndex}
                    sizeStyles={c.sizeStyles}
                    shouldUpdate={logoToUpdateRight === realIndex}
                    availableLogos={availableLogosRef.current}
                    updateLogos={updateLogos}
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
                index={index}
                sizeStyles={cpLogoBoxMobile}
                shouldUpdate={logoToUpdateLeft === index}
                availableLogos={availableLogosRef.current}
                updateLogos={updateLogos}
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
                index={index + 12}
                sizeStyles={cpLogoBoxMobile}
                shouldUpdate={logoToUpdateRight === index + 12}
                availableLogos={availableLogosRef.current}
                updateLogos={updateLogos}
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

const FeatureBlock = ({ feature, index }: { feature: HomePageFeature; index: number }) => {
  const reversed = index % 2 !== 0;

  const {
    header_svg,
    header_text,
    title,
    text,
    link_text,
    link,
    side_svg_big,
    side_svg_small,
    side_svg_small_top_offset,
    side_svg_small_right_offset,
    side_svg_big_mobile,
    side_svg_small_mobile,
    side_svg_small_top_offset_mobile,
    side_svg_small_right_offset_mobile,
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
          {header_svg && (
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
              <CMSImage value={header_svg} />
            </Box>
          )}
          <Typography sx={{ ...smallTitleStyle, ...smallTitleGradient }}>{header_text}</Typography>
        </Box>
        <Typography variant="h2_new" sx={{ maxWidth: 450, mb: 2.5 }}>
          {title}
        </Typography>
        <Typography variant="body_normal" sx={{ maxWidth: 496 }}>
          {text}
        </Typography>
        <Link
          href={link[0].value}
          muiProps={{
            target: link[0].type === 'external_url' ? '_blank' : undefined,
            color: reversed ? COLORS.sun : COLORS.turquoise,
            sx: { mt: 5 },
          }}
          hasArrow
        >
          {link_text}
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
              position: 'relative',
              transition: 'transform 1.5s',
              transform: show ? '' : `translate(100vw)`,

              [MQ.lg]: {
                transform: show ? '' : `translate(${reversed ? '-50vw' : '50vw'})`,
                ml: reversed ? '-68px' : 0,
              },
            }}
          >
            {side_svg_big && (
              <Hidden lgDown>
                <CMSImage value={{ svg_image: side_svg_big }} />
              </Hidden>
            )}
            {side_svg_big_mobile && (
              <Hidden lgUp>
                <CMSImage value={{ svg_image: side_svg_big_mobile }} />
              </Hidden>
            )}
          </Box>
          {side_svg_small && (
            <Hidden lgDown>
              <Box
                sx={{
                  position: 'absolute',
                  top: side_svg_small_top_offset,
                  right: side_svg_small_right_offset,
                  transform: show ? '' : `translate(${reversed ? '-100vw' : '100vw'})`,
                  transition: 'transform 2s',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CMSImage value={{ svg_image: side_svg_small }} />
                </Box>
              </Box>
            </Hidden>
          )}
          {side_svg_small_mobile && (
            <Hidden lgUp>
              <Box
                sx={{
                  position: 'absolute',
                  top: side_svg_small_top_offset_mobile,
                  right: side_svg_small_right_offset_mobile,
                  transition: 'transform 2s',
                  transform: show ? '' : `translate(-100vw)`,

                  [MQ.lg]: {
                    transform: show ? '' : `translate(${reversed ? '-100vw' : '100vw'})`,
                  },
                }}
              >
                <CMSImage value={{ svg_image: side_svg_small_mobile }} />
              </Box>
            </Hidden>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const FeaturesSection = (props: HomePage) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > div': { mb: { _: 10, lg: 25 } },
      }}
    >
      {props.features_sections.map(({ id, value }, index) => (
        <FeatureBlock key={id} feature={value} index={index} />
      ))}
    </Box>
  );
};

type QuoteSectionProps = {
  testimonials: Testimonial[];
  quoteless_testimonials: Testimonial[];
};

const QuoteSection = ({ testimonials, quoteless_testimonials }: QuoteSectionProps) => {
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
        if (activeQuoteRef.current === testimonials.length - 1) {
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
              {testimonials.map((quote, index) => (
                <Box
                  key={quote.id}
                  sx={{
                    ...quoteSectionLeftBg,
                    backgroundImage: `url("${quote.bg_image[0].url}")`,
                    opacity: activeQuote === index ? 1 : 0,
                  }}
                />
              ))}
              {testimonials.map((quote, index) => (
                <Box
                  key={quote.id}
                  sx={{
                    ...quoteSectionLeftLogo,
                    opacity: activeQuote === index ? 1 : 0,
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', height: 75 }}>
                    <Image
                      src={quote.logo[0].url}
                      alt="quote-logo"
                      layout="fill"
                      objectFit="contain"
                    />
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
          {testimonials.map((quote, index) => (
            <Box
              key={quote.id}
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
                <Typography variant="body_normal">{quote.text}</Typography>
              </Box>
              <Typography variant="h6_new" sx={{ mb: '2px' }}>
                {quote.author}
              </Typography>
              <Typography variant="body_xs" sx={{ ...fontAvenirRomanItalic }}>
                {quote.author_job_title}
              </Typography>
            </Box>
          ))}
          <Box sx={quoteSectionQuoteLogos}>
            {testimonials.map((quote, index) => {
              let styles = quoteSectionQuoteLogoBox;
              if (index === activeQuote) {
                styles = { ...styles, ...quoteSectionQuoteLogoBoxActive };
              }
              return (
                <Box key={quote.id} sx={styles} onClick={() => setActiveQuote(index)}>
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={quote.logo[0].url}
                      alt="quote-logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                </Box>
              );
            })}
            {quoteless_testimonials.map((quote) => {
              return (
                <Box key={quote.id} sx={{ ...quoteSectionQuoteLogoBox, '&:hover': {} }}>
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={quote.logo[0].url}
                      alt="quote-logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Hidden>
      <Hidden xlUp>
        <Box sx={quoteSectionContainerMobile}>
          {testimonials.map((quote, index) => {
            return (
              <Box
                key={quote.id}
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
                    backgroundImage: `url("${quote.bg_image[0].url}")`,
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
                    <Box sx={{ position: 'relative' }}>
                      <CMSImage value={{ svg_image: quote.logo[0] }} />
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
                  <Typography variant="body_normal">{quote.text}</Typography>
                </Box>
                <Typography variant="h6_new" sx={{ mb: '2px' }}>
                  {quote.author}
                </Typography>
                <Typography variant="body_xs" sx={{ ...fontAvenirRomanItalic }}>
                  {quote.author_job_title}
                </Typography>
              </Box>
            );
          })}
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

const MediaCard_1 = (props: HomePage) => {
  const matchesXL = useMediaQuery(MQ.xl);

  const data = useMemo(() => {
    return {
      img: getImageUrl(props.learn_more_tile_1_header_image[0]),
      authorImg: getImageUrl(props.learn_more_tile_1_header_author_image[0]),
      author: props.learn_more_tile_1_author_name,
      type: props.learn_more_tile_1_resource_type,
      title: props.learn_more_tile_1_resource_title,
      body: matchesXL ? props.learn_more_tile_1_resource_snippet : '',
      date: props.learn_more_tile_1_resource_date,
      pillText: props.learn_more_tile_1_pill_text,
      href:
        props.learn_more_tile_1_link &&
        props.learn_more_tile_1_link[0] &&
        props.learn_more_tile_1_link[0].value,
      videoId: props.learn_more_tile_1_video_id,
    };
  }, [props, matchesXL]);

  return (
    <MediaCard
      imgHeight={matchesXL ? 260 : 180}
      authorImgSize="big"
      titleVariant="h4_new"
      {...data}
    />
  );
};

const MediaCard_2 = (props: HomePage) => {
  const matchesXL = useMediaQuery(MQ.xl);

  const data = useMemo(() => {
    return {
      img: matchesXL ? getImageUrl(props.learn_more_tile_2_header_image[0]) : null,
      author: props.learn_more_tile_2_author_name,
      type: props.learn_more_tile_2_resource_type,
      title: props.learn_more_tile_2_resource_title,
      body: matchesXL ? props.learn_more_tile_2_resource_snippet : '',
      date: props.learn_more_tile_2_resource_date,
      pillText: props.learn_more_tile_2_pill_text,
      href:
        props.learn_more_tile_2_link &&
        props.learn_more_tile_2_link[0] &&
        props.learn_more_tile_2_link[0].value,
      videoId: props.learn_more_tile_2_video_id,
    };
  }, [props, matchesXL]);

  return (
    <MediaCard
      layout={matchesXL ? 'horizontal' : 'vertical'}
      imgHeight={130}
      imgWidth={130}
      {...data}
    />
  );
};

const MediaCard_3 = (props: HomePage) => {
  const data = useMemo(() => {
    return {
      img: getImageUrl(props.learn_more_tile_3_header_image[0]),
      authorImg: getImageUrl(props.learn_more_tile_3_header_author_image[0]),
      author: props.learn_more_tile_3_author_name,
      type: props.learn_more_tile_3_resource_type,
      title: props.learn_more_tile_3_resource_title,
      body: props.learn_more_tile_3_resource_snippet,
      date: props.learn_more_tile_3_resource_date,
      pillText: props.learn_more_tile_3_pill_text,
      href:
        props.learn_more_tile_3_link &&
        props.learn_more_tile_3_link[0] &&
        props.learn_more_tile_3_link[0].value,
      videoId: props.learn_more_tile_3_video_id,
    };
  }, [props]);

  return <MediaCard {...data} />;
};

const RegisterForm = (props: HomePage) => {
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
          <Typography sx={registerFormTitle}>{props.learn_more_tile_4_title}</Typography>
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

const VisitBlogCard = (props: HomePage) => {
  return (
    <CornerCard
      icon={arrowCircle}
      iconSize="small"
      withPadding={false}
      href={props.learn_more_tile_5_link[0].value}
    >
      <Box sx={visitCard}>
        <Typography variant="h6_new">{props.learn_more_tile_5_title}</Typography>
      </Box>
    </CornerCard>
  );
};

type Props = {
  isPreview?: boolean;
} & HomePage;

const Home = (props: Props) => {
  const matchesXL = useMediaQuery(MQ.xl);

  return (
    <PageProvider cms_head_props={props.cms_head_props} isPreview={props.isPreview}>
      <Section sx={headerSection}>
        <HeaderSection {...props.header[0].value} />
      </Section>

      <Section
        bgcolor
        angleTopBottom="topBtmRight"
        sx={{ pt: { _: 16, md: 23.5 }, pb: { _: 16, md: 23.5 }, textAlign: 'center' }}
      >
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h2_new" sx={{ mb: 2.5, maxWidth: { _: 400, md: 800 } }}>
            {props.section_1_title}
          </Typography>
        </Box>
        <Hidden smDown>
          <Typography variant="body_normal" sx={{ mb: 8, mx: 'auto' }}>
            {props.section_1_sub_title}
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="body_big" sx={{ mb: 8, mx: 'auto', maxWidth: 480 }}>
            {props.section_1_sub_title}
          </Typography>
        </Hidden>
        <CrossplaneLogosSection {...props} />
      </Section>

      <Section sx={{ pt: { _: 12, md: 20 }, position: 'relative' }}>
        <FeaturesSection {...props} />
      </Section>

      {props.testimonials && (
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
          <QuoteSection
            testimonials={props.testimonials}
            quoteless_testimonials={props.quoteless_testimonials}
          />
        </Section>
      )}

      <Section sx={discoverSection}>
        <Hidden xlDown>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, color: COLORS.linkWater }}>
            <Typography variant="h2_new">{props.learn_more_section_title}</Typography>
            <Box sx={{ display: 'flex', ml: 3.5 }}>
              <FullArrowRight width={32} height={32} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', height: 550 }}>
            <Box sx={{ height: '100%', width: 540 }}>
              <MediaCard_1 {...props} />
            </Box>
            <Box sx={{ flex: 1, ml: 2.5 }}>
              <Box sx={{ height: 130, width: '100%', mb: 2.5 }}>
                <MediaCard_2 {...props} />
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 1, width: '50%', height: 400, mr: '10px' }}>
                  <MediaCard_3 {...props} />
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
                  <RegisterForm {...props} />
                  <Box sx={{ flex: 1 }}>
                    <VisitBlogCard {...props} />
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
              <MediaCard_1 {...props} />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400, mb: 1.5 }}>
              <MediaCard_2 {...props} />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400, mb: 1.5 }}>
              <MediaCard_3 {...props} />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400, mb: 1.5 }}>
              <RegisterForm {...props} />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <VisitBlogCard {...props} />
            </Box>
          </Box>
        </Hidden>
        <Link href="https://www.gartner.com/en">
          <Box
            sx={{
              backgroundColor: COLORS.bigStone,
              borderRadius: '10px',
              width: '100%',
              maxWidth: 400,
              p: '30px',
              mt: 1.5,
              mx: 'auto',

              [MQ.xl]: {
                display: 'flex',
                alignItems: 'center',
                maxWidth: '100%',
                mt: '20px',
              },
            }}
          >
            <Box
              sx={{
                mb: '30px',
                [MQ.xl]: {
                  mr: '23px',
                  mb: '0',
                },
              }}
            >
              <Img src={gartnerLogo} alt="Gartner logo" width={140} />
            </Box>
            <Box>
              <Typography variant="h4_new" sx={{ mb: 2, fontSize: '28px !important' }}>
                Upbound named a Gartner "Cool Vendor™ in Cloud Computing"
              </Typography>
              <Typography variant="body_normal" sx={{ fontSize: '18px !important' }}>
                Exciting news... Upbound has just been named a "Cool Vendor" by Gartner*! What do we
                think it takes to be named a Gartner Cool Vendor? Innovation, Impact and Intrigue.
                Check out the full report.
              </Typography>
            </Box>
          </Box>
        </Link>
      </Section>
    </PageProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(context, '/', true);

  if (returnValue) {
    return {
      props: returnValue,
    };
  } else {
    return {
      notFound: true,
    };
  }
};
