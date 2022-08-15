import { css } from '@emotion/react';
import { createTheme, SxProps } from '@mui/material/styles';
import isPropValid from '@emotion/is-prop-valid';

export const COLORS = {
  aPurple: '#5a53c0',
  aquaGreen: '#2fd3bc',
  aquaGreenDark: '#43c5ae',
  aquaMarine: '#3de2cb',
  aquarius: '#37ccb7',
  bMedPurple: '#4845a0',
  blue4970D7: '#4970d7',
  blueberry: '#5445a0',
  bluePurp638Eff: '#637cff',
  blueGrey: '#929394',
  blueyGrey: '#939eab',
  brightCyan: '#46d4ff',
  cLightPurple: '#7667f9',
  cloudyBlue: '#c3c4c6',
  coralFf6C70: '#ff6c70',
  cottonflower: '#7667f9',
  darkBlue152245: '#151945',
  darkBlue1A3245: '#1A3245',
  darkBlueGrey: '#828282',
  darkBlueGreyTwo: '#0d2436',
  darkFog: '#e3e8ee',
  darkGreyBlue: '#333f5b',
  darkIris: '#7667f9',
  darkMint: '#3dc47e',
  darkNavy: '#111a3d',
  darkSlateBlue: '#1d2f5e',
  darkTurquoise: '#11999e',
  darkerNavy: '#1d285e',
  darkestBlue: '#111a3d',
  disabledBlackOutlineButton: '#959ead',
  dodgerBlue: '#4592ff',
  electricBlue: '#3cc5f7',
  fadedIris: '#bdb5e4',
  fillActionDanger: '#e95432',
  fillActionInfo: '#00b8d9',
  fillActionPrimary: '#1565d8',
  fillActionSecondary: '#3f598a',
  fillActionSuccess: '#36b37e',
  fillActionWarning: '#faad13',
  fillBlackBlack: '#183b56',
  fillBlackGray: '#5a7184',
  fillBlackGrayLight: '#b3bac5',
  fillLightActionDanger: 'rgba(233, 84, 50, 0.1)',
  fillLightActionPrimary: 'rgba(21, 101, 216, 0.1)',
  fillLightActionSuccess: 'rgba(54, 179, 126, 0.1)',
  fillLightActionWarning: 'rgba(250, 173, 19, 0.1)',
  fillLightBlackGray: 'rgba(90, 113, 132, 0.1)',
  fillLightBlackGrayLight: 'rgba(179, 186, 197, 0.1)',
  fillLightWhiteWhite: 'rgba(255, 255, 255, 0.1)',
  fog: '#d2dcea',
  fogTwo: '#e2e8ef',
  green: '#3dc47e',
  greenPrimary: '#3dc47e',
  greenyBlue: '#3bbdc4',
  grey: '#8d98a7',
  iris: '#5b53cc',
  lightBlueGrey: '#c8cad1',
  lightBluePurp81A4Ff: '#818eff',
  lightCoral: '#ff828a',
  lightGreen: '#00B67A',
  lightGrey: '#f8fafc',
  lightGreyBlue: '#a8adb9',
  lightGreyE7F0Fc: '#e7f0fc',
  lightOrange: '#ffa34d',
  lightPeriwinkle: '#dcdcde',
  lightRed: '#ff4f52',
  lightRose: '#ffc7d0',
  lightstGrey: '#f4f8ff',
  linkGreen: '#43c5ae',
  mediumGrey: '#d2dcea',
  multicloudBlack: '#252c30',
  mutedNavy3F5797: '#3f4e97',
  navyBlue1D2F5E: '#1d285e',
  neonBlue: '#88f7ee',
  neonGreen: '#88f7b7',
  neonYellowGreen: '#e6ff81',
  neutralDark5: '#dcdcde',
  neutralDark6: '#f4f5f7',
  orange: '#f87c44',
  orangePrimary: '#ffa34d',
  paleBlue: '#dce0e6',
  paleGrey: '#f8fbff',
  paleIris: '#637cff',
  palePeach: '#feedb3',
  paleSkyBlue: '#c5e4fc',
  pureYellow: '#fff43c',
  redPrimary: '#ff4f52',
  robinSEgg: '#63ffe9',
  sketchMeaXureProperty: '#f5a623',
  sketchMeaXureSpacing: '#50e3c2',
  slate: '#505a72',
  softBlue: '#5999e3',
  softGreen: '#00333E',
  teal25Dcc3: '#2fd3bc',
  tealPrimary: '#3bbdc4',
  testYellowOrange: '#ffce3c',
  veryLightBlue: '#e5eaf4',
  veryLightGreen: '#ccffbf',
  veryLightPink: '#d8d8d8',
  violetPrimary: '#6553c0',
  white: '#fff',
  whiteBlue: '#f6faff',
  whiteTwo: '#f8f8f8',

  linkWater: '#D3E7F7',
  firefly: '#0B1C28',
  elephant: '#0D2436',
  cornflower: '#6D64F5',
  bigStone: '#1B3549',
  turquoise: '#3DE2CB',
  shakespeare: '#4AC0D6',
  sun: '#FAAD13',
} as const;

export const fontAvenirRoman = {
  fontFamily: `'Avenir-Roman', 'Arial', sans-serif`,
  fontWeight: 'normal',
};

export const fontAvenirRomanItalic = {
  fontFamily: `'Avenir-Roman', 'Arial', sans-serif`,
  fontWeight: '300',
  fontStyle: 'italic',
};

export const fontAvenirBold = {
  fontFamily: `'Avenir-Black', 'Arial', sans-serif`,
  fontWeight: '700',
};

const blacklistProps = ['color', 'display', 'height', 'size', 'width'];

export const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && !blacklistProps.includes(prop);

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1_new: React.CSSProperties;
    h2_new: React.CSSProperties;
    h3_new: React.CSSProperties;
    h4_new: React.CSSProperties;
    h5_new: React.CSSProperties;
    h6_new: React.CSSProperties;
    body_big: React.CSSProperties;
    body_normal: React.CSSProperties;
    body_small: React.CSSProperties;
    body_xs: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1_new?: React.CSSProperties;
    h2_new?: React.CSSProperties;
    h3_new?: React.CSSProperties;
    h4_new?: React.CSSProperties;
    h5_new?: React.CSSProperties;
    h6_new?: React.CSSProperties;
    body_big?: React.CSSProperties;
    body_normal?: React.CSSProperties;
    body_small?: React.CSSProperties;
    body_xs?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    _: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1_new: true;
    h2_new: true;
    h3_new: true;
    h4_new: true;
    h5_new: true;
    h6_new: true;
    body_big: true;
    body_normal: true;
    body_small: true;
    body_xs: true;
  }
}

const customBreakpoints = {
  _: 0,
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1170,
};

export const MQ = {
  xs: `@media screen and (min-width: ${customBreakpoints.xs}px)`,
  sm: `@media screen and (min-width: ${customBreakpoints.sm}px)`,
  md: `@media screen and (min-width: ${customBreakpoints.md}px)`,
  lg: `@media screen and (min-width: ${customBreakpoints.lg}px)`,
  xl: `@media screen and (min-width: ${customBreakpoints.xl}px)`,
};
// TO DO CHANGE FONTS
const theme = createTheme({
  palette: {
    // background: {
    //   default: COLORS.firefly,
    // },
    primary: {
      main: COLORS.cornflower,
    },
    secondary: {
      main: '#19857b',
    },
  },
  typography: {
    fontFamily: `'Avenir-Roman', 'Arial', sans-serif`,
    h1: {
      fontFamily: `'Avenir', 'Arial Black', sans-serif`,
      fontSize: '32px',
      lineHeight: '37px',
      color: COLORS.darkNavy,
    },
    h2: {
      fontFamily: `'Avenir', 'Arial Black', sans-serif`,
      fontSize: '32px',

      lineHeight: '40px',
      color: COLORS.darkNavy,
    },
    h3: {
      fontFamily: `'Avenir-Roman', 'Arial', sans-serif`,
      fontSize: '32px',
      lineHeight: '37px',
      color: COLORS.darkNavy,
    },
    body1: {
      lineHeight: 'normal',
    },
    // H1 95 (104) -3.2 | 46 (50) -1.6
    // H2 54 (62) -0.55 | 27 (32) -0.25
    // H3 40 (48) -0.4 | 24 (28) -0.25
    // H4 30 (36) 0 | 22 (30) 0
    // H5 22 (30) 0 | 18 (24) 0
    h1_new: {
      ...fontAvenirBold,
      color: COLORS.linkWater,
      fontSize: '46px',
      lineHeight: '50px',
      letterSpacing: '-1.6px',

      [MQ.md]: {
        fontSize: '95px',
        lineHeight: '104px',
        letterSpacing: '-3.2px',
      },
    },
    h2_new: {
      ...fontAvenirBold,
      color: COLORS.linkWater,
      fontSize: '27px',
      lineHeight: '32px',
      letterSpacing: '-0.25px',

      [MQ.md]: {
        fontSize: '54px',
        lineHeight: '62px',
        letterSpacing: '-0.55px',
      },
    },
    h3_new: {
      ...fontAvenirBold,
      color: COLORS.linkWater,
      fontSize: '24px',
      lineHeight: '28px',
      letterSpacing: '-0.25px',

      [MQ.md]: {
        fontSize: '40px',
        lineHeight: '48px',
        letterSpacing: '-0.4px',
      },
    },
    h4_new: {
      ...fontAvenirBold,
      color: COLORS.linkWater,
      fontSize: '22px',
      lineHeight: '30px',

      [MQ.md]: {
        fontSize: '30px',
        lineHeight: '36px',
      },
    },
    h5_new: {
      ...fontAvenirBold,
      color: COLORS.linkWater,
      fontSize: '18px',
      lineHeight: '24px',

      [MQ.md]: {
        fontSize: '22px',
        lineHeight: '30px',
      },
    },
    h6_new: {
      ...fontAvenirBold,
      fontSize: '18px',
      lineHeight: '20px',
      color: COLORS.linkWater,
    },
    body_big: {
      ...fontAvenirRoman,
      color: COLORS.linkWater,
      fontSize: '18px',
      lineHeight: '28px',

      [MQ.md]: {
        fontSize: '24px',
        lineHeight: '40px',
      },
    },
    body_normal: {
      ...fontAvenirRoman,
      color: COLORS.linkWater,
      fontSize: '16px',
      lineHeight: '28px',

      [MQ.md]: {
        fontSize: '20px',
        lineHeight: '32px',
      },
    },
    body_small: {
      ...fontAvenirRoman,
      fontSize: '16px',
      lineHeight: '28px',
      letterSpacing: '0px',
      color: COLORS.linkWater,
    },
    body_xs: {
      ...fontAvenirRoman,
      fontSize: '14px',
      lineHeight: '20px',
      color: COLORS.linkWater,
    },
  },
  breakpoints: {
    values: customBreakpoints,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1_new: 'h1',
          h2_new: 'h2',
          h3_new: 'h3',
          h4_new: 'h4',
          h5_new: 'h5',
          h6_new: 'h6',
          body_big: 'p',
          body_normal: 'p',
          body_small: 'p',
          body_xs: 'p',
        },
      },
    },
  },
});

export const gradient_1: SxProps = {
  background: `linear-gradient(45deg, ${COLORS.cornflower}, ${COLORS.turquoise})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const gradient_2: SxProps = {
  background: `linear-gradient(145deg, ${COLORS.cornflower}, ${COLORS.sun})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const globalStyle = css`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    &.overflow-hidden {
      overflow: hidden;
    }
  }

  // h2 {
  //   font-family: 'Avenir-Black', 'Arial', sans-serif;
  //   color: #d3e7f7;
  //   font-size: 27px;
  //   line-height: 32px;
  //   letter-spacing: -0.25px;

  //   @media screen and (min-width: 768px) {
  //     font-size: 54px;
  //     line-height: 62px;
  //     letter-spacing: -0.55px;
  //   }
  // }
  // h3 {
  //   font-family: 'Avenir-Black', 'Arial', sans-serif;
  //   color: #d3e7f7;
  //   font-size: 24px;
  //   line-height: 28px;
  //   letter-spacing: -0.25px;

  //   @media screen and (min-width: 768px) {
  //     font-size: 40px;
  //     line-height: 48px;
  //     letter-spacing: -0.4px;
  //   }
  // }
  // p {
  //   font-size: 14px;
  //   line-height: 22px;
  //   @media screen and (min-width: 768px) {
  //     font-size: 20px;
  //     line-height: 32px;
  //   }
  // }

  html > body > div#hs-eu-cookie-confirmation.hs-cookie-notification-position-bottom {
    box-shadow: none;
    border-top-width: 0;
    z-index: 2147483647 !important;

    @media screen and (max-width: 768px) {
      &
        div#hs-eu-cookie-confirmation
        div#hs-eu-cookie-confirmation-inner
        div#hs-en-cookie-confirmation-buttons-area {
        margin-right: 0;
      }
      & div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner p {
        margin: 0 0 12px;
      }
    }

    @media screen and (max-width: 480px) {
      div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner {
        padding: 15px 20px !important;
      }
    }

    &,
    & > div#hs-eu-cookie-confirmation-inner {
      background-color: ${COLORS.slate};
    }

    & > div#hs-eu-cookie-confirmation-inner {
      padding: 30px 40px;

      & > p#hs-eu-cookie-disclaimer,
      & > div#hs-eu-policy-wording > p,
      & > div#hs-eu-policy-wording > p > span {
        ${fontAvenirRoman}
        color: ${COLORS.white};
        font-size: 14px !important;
        line-height: 24px !important;
      }

      &
        > div#hs-en-cookie-confirmation-buttons-area
        > div#hs-eu-cookie-confirmation-button-group
        > a {
        box-sizing: border-box !important;
        font-size: 14px !important;
        line-height: 34px !important;
        padding: 0 20px !important;
        border-color: transparent !important;
        border-style: solid !important;
        border-width: 1px !important;
        border-radius: 20px !important;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        transition: all 0.2s ease-in-out;
        transition: background-color 0.1 ease-out;
        white-space: nowrap;
        width: auto;

        &#hs-eu-confirmation-button {
          background-color: ${COLORS.aquaMarine} !important;
          color: ${COLORS.white} !important;
          fill: ${COLORS.white} !important;
          
          &:hover {
            border-color: transparent !important;
            background-color: ${COLORS.aquarius} !important;
            color: ${COLORS.white} !important;
            fill: ${COLORS.white} !important;
          }
        }

        &#hs-eu-decline-button {
          border-color: ${COLORS.white} !important;
          color: ${COLORS.white} !important;
          fill: ${COLORS.white} !important;

          &:hover {
            border-color: ${COLORS.white} !important;
            background-color: ${COLORS.white} !important;
            color: ${COLORS.fillBlackBlack} !important;
            fill: ${COLORS.fillBlackBlack} !important;
          }
        }
      }
    }
  }

  .grecaptcha-badge {
    visibility: hidden;
  }
`;

export default theme;
