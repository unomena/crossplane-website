import React, { memo, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { Box, SxProps, TextField, Typography } from '@mui/material';
import { COLORS, gradient_1, gradient_2 } from 'src/theme';
import { keyframes } from '@emotion/react';

import getRandomInt from 'src-new/utils/getRandomInt';
import useOnScreen from 'src-new/utils/useOnScreen';

import crossplaneLogos from 'src-new/constants/crossplaneLogos';

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
import CircleTriangleIcon from 'src-new/svg/CircleTriangleIcon';
import dfdsLogo from 'public/new-images/trusted-logos/dfds.svg';
import grupoLogo from 'public/new-images/trusted-logos/grupo.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import headerBg from 'public/new-images/home-page/header-bg.jpg';
import headerDiagram from 'public/new-images/home-page/header-diagram.svg';
import EnterpriseReadyBig from 'public/new-images/home-page/features/EnterpriseReadyBig.svg';
import EnterpriseReadySmall from 'public/new-images/home-page/features/EnterpriseReadySmall.svg';
import DeployWithConfidenceBig from 'public/new-images/home-page/features/DeployWithConfidenceBig.svg';
import DeployWithConfidenceSmall from 'public/new-images/home-page/features/DeployWithConfidenceSmall.svg';
import EfficiencyEaseBig from 'public/new-images/home-page/features/EfficiencyEaseBig.svg';
import EfficiencyEaseSmall from 'public/new-images/home-page/features/EfficiencyEaseSmall.svg';
import bigQuotes from 'public/new-images/home-page/quotes/big-quotes.svg';
import plotlyQuoteBg from 'public/new-images/home-page/quotes/plotly-quote-bg.png';
import mainArticleImg from 'public/new-images/media-cards/main-article-img.png';
import bassamTabbaraProfile from 'public/new-images/media-cards/bassam-tabbara-profile.png';
import laptopArticleImg from 'public/new-images/media-cards/laptop-article-img.png';
import taylorThorntonProfile from 'public/new-images/media-cards/taylor-thornton-profile.png';
import matthiasArticleImg from 'public/new-images/media-cards/matthias-article-img.png';
import arrowCircle from 'public/new-images/icons/arrow-circle.svg';

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

const discoverSection: SxProps = {
  pt: 15,
  pb: 32,
  backgroundImage: `url(${headerBg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundSize: 'cover',
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

const smallTitleStyle: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: '20px',
  lineHeight: '56px',
  letterSpacing: '-0.2px',
  ml: 1.5,
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
  backgroundPosition: 'center',
};

const quoteSectionLeftLogo: SxProps = {
  position: 'absolute',
  top: '58%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
};

const quoteSectionRightContainer: SxProps = {
  width: '100%',
  maxWidth: 660,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',

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
  height: 280,
  px: '22px',
  py: '24px',
  mb: 2.5,
};

const registerFormTitle: SxProps = {
  fontFamily: 'Avenir-Heavy',
  fontSize: '30px',
  lineHeight: '36px',
  color: '#fff',
  mb: 2.5,
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
  fontFamily: 'Avenir-Black',
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
  pl: 2.5,
  maxWidth: 150,
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
        <Typography sx={cpCenterBoxTitleNum}>5K+</Typography>
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

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type FeatureBlockProps = {
  smallTitle: string;
  bigTitle: string;
  body: string;
  href: string;
  imgBig: string | StaticImport;
  imgSmall: string | StaticImport;
  imgSmallOffset: { top: number; right: number };
  reversed?: Boolean;
};

const FeatureBlock = ({
  smallTitle,
  bigTitle,
  body,
  href,
  imgBig,
  imgSmall,
  imgSmallOffset,
  reversed,
}: FeatureBlockProps) => {
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
        alignItems: 'center',
        color: COLORS.linkWater,
        flexDirection: reversed ? 'row-reverse' : 'row',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: '50%',
          minWidth: '50%',
          maxWidth: '50%',
          pr: reversed ? '0px' : '28px',
          pl: reversed ? '28px' : '0px',
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
      <Box
        sx={{
          flex: 1,
          width: '50%',
          minWidth: '50%',
          maxWidth: '50%',
          pr: reversed ? '28px' : '0px',
          pl: reversed ? '0px' : '28px',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              ml: reversed ? '-68px' : 0,
              transform: show ? '' : `translate(${reversed ? '-50vw' : '50vw'})`,
              transition: 'transform 1.5s',
            }}
          >
            <Image src={imgBig} alt="feature-img-big" />
          </Box>
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
        </Box>
      </Box>
      <Box
        ref={hiddenBarRef}
        sx={{ width: '100%', height: '1px', position: 'absolute', bottom: 0 }}
      />
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
    href: '/',
    imgBig: EnterpriseReadyBig,
    imgSmall: EnterpriseReadySmall,
    imgSmallOffset: { top: 103, right: -68 },
    reversed: false,
  },
  {
    smallTitle: 'Deploy with confidence',
    bigTitle: 'Best-in-class platform building blocks',
    body: `Upbound Marketplace is a one-stop-shop
    for all the components you need in your platform
    powered by an Upbound control plane. Supported and
    Certified listings are available so you can run your
    platform in production with confidence.`,
    href: '/',
    imgBig: DeployWithConfidenceBig,
    imgSmall: DeployWithConfidenceSmall,
    imgSmallOffset: { top: 67, right: 0 },
    reversed: true,
  },
  {
    smallTitle: 'Efficiency + ease',
    bigTitle: 'Self-Service Console',
    body: `The Upbound Console is dynamically rendered
    from your Upbound control plane and the Crossplane
    packages installed in it. Centralize control and empower
    your team to deploy without red tape.`,
    href: '/',
    imgBig: EfficiencyEaseBig,
    imgSmall: EfficiencyEaseSmall,
    imgSmallOffset: { top: 54, right: -17 },
    reversed: false,
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ '& > div': { pb: 25 } }}>
      {features.map((feature) => (
        <FeatureBlock
          key={feature.smallTitle}
          smallTitle={feature.smallTitle}
          bigTitle={feature.bigTitle}
          body={feature.body}
          href={feature.href}
          imgBig={feature.imgBig}
          imgSmall={feature.imgSmall}
          imgSmallOffset={feature.imgSmallOffset}
          reversed={feature.reversed}
        />
      ))}
    </Box>
  );
};

const quotes = [
  {
    title: 'We chose Upbound as our partner in this important transformation…',
    body: `…because they created Crossplane and offer 
    enterprise-grade products and services that will 
    help us accelerate time to market."`,
    person: 'Jack Parmer',
    role: 'CEO and co-founder Plotly',
    logo: plotlyLogo,
    bgImage: plotlyQuoteBg.src,
  },
  {
    title: 'Upbound Cloud automates and simplifies…',
    body: `…how software developers manage the lifecycle 
    of our application portfolios, allowing us to innovate more quickly."`,
    person: 'Jan Willies',
    role: 'Platform Architect at Accenture referring to Deutsche Bahn',
    logo: dbLogo,
    bgImage: plotlyQuoteBg.src,
  },
];

const QuoteSection = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  return (
    <Box sx={{ display: 'flex', color: COLORS.linkWater }}>
      <Box sx={{ flex: 1 }}>
        <Box sx={quoteSectionLeftContainer}>
          <Box
            sx={{
              ...quoteSectionLeftInner,
              backgroundImage: `url("${quotes[activeQuote].bgImage}"),
              linear-gradient(-62deg, #3DE2CB 0%, #6D64F5 100%)`,
            }}
          >
            <Box sx={quoteSectionLeftLogo}>
              <Box sx={{ position: 'relative', width: '100%', height: 75 }}>
                <Image
                  src={quotes[activeQuote].logo}
                  alt="quote-logo"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ position: 'absolute', top: 64, right: 46 }}>
            <Box sx={{ position: 'relative' }}>
              <Image src={bigQuotes} alt="big-quotes" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={quoteSectionRightContainer}>
        <Typography variant="h2_new" sx={{ mb: 3 }}>
          {quotes[activeQuote].title}
        </Typography>
        <Typography variant="body_normal" sx={{ mb: 4.5 }}>
          {quotes[activeQuote].body}
        </Typography>
        <Typography variant="h6_new" sx={{ mb: '2px' }}>
          {quotes[activeQuote].person}
        </Typography>
        <Typography variant="body_xs" sx={{ fontFamily: 'Avenir-Oblique', mb: 7 }}>
          {quotes[activeQuote].role}
        </Typography>
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
        </Box>
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
      <Section
        bgcolor
        angleTopBottom="topBtmRight"
        sx={{ pt: 23.5, pb: 23.5, textAlign: 'center' }}
      >
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
      <Section sx={{ pt: 20, position: 'relative' }}>
        <FeaturesSection />
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 18, pb: 7.5, position: 'relative' }}>
        <QuoteSection />
      </Section>
      <Section sx={discoverSection}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, color: COLORS.linkWater }}>
          <Typography variant="h2_new">Discover Upbound</Typography>
          <Box sx={{ display: 'flex', ml: 3.5 }}>
            <FullArrowRight />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', height: 550 }}>
          <Box sx={{ height: '100%', width: 540 }}>
            <MediaCard
              img={mainArticleImg}
              imgHeight={350}
              profileImg={bassamTabbaraProfile}
              profileImgSize="big"
              person="Bassam Tabbara"
              type="video"
              title="Lorem ipsum dolor sit amet"
              titleVariant="h4_new"
              body="Lorem ipsum dolor sit amet, consectetuer 
              adipiscing elit. Aenean commodo ligula eget dolor. 
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
            />
          </Box>
          <Box sx={{ flex: 1, ml: 2.5 }}>
            <Box sx={{ height: 130, width: '100%', mb: 2.5 }}>
              <MediaCard
                layout="horizontal"
                img={matthiasArticleImg}
                imgHeight={130}
                imgWidth={130}
                person="Matthias Luebken"
                type="Blog"
                title="Announcing 100% Cloud Service Coverage for Crossplane"
                pillText="Must read!"
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ flex: 1, width: '50%', height: 400, mr: '10px' }}>
                <MediaCard
                  img={laptopArticleImg}
                  imgHeight={200}
                  profileImg={taylorThorntonProfile}
                  person="Taylor Thornton"
                  type="Blog"
                  title="Moving Crossplane package authoring from plain YAML to IDE aided development"
                  date="May 22, 2022"
                  pillText="New!"
                />
              </Box>
              <Box
                sx={{ flex: 1, width: '50%', ml: '10px', display: 'flex', flexDirection: 'column' }}
              >
                <Box sx={registerFormContainer}>
                  <Typography sx={registerFormTitle}>Register for our montly newsletter</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Your Email"
                    size="small"
                    sx={registerFormField}
                  />
                  <Box sx={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => {}}>
                    <Typography component="span" sx={registerFormSubmit}>
                      Submit email
                      <Box component="span" sx={{ display: 'flex', ml: 1.5 }}>
                        <ArrowRightRounded height={11} color="currentColor" />
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <CornerCard icon={arrowCircle} iconSize="small" withPadding={false} href="/">
                    <Box sx={visitCard}>
                      <Typography variant="h5_new">Visit the Upbound Blog</Typography>
                    </Box>
                  </CornerCard>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Home;
