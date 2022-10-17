import { css } from '@emotion/react';
import { createTheme, SxProps } from '@mui/material/styles';
import isPropValid from '@emotion/is-prop-valid';

export const COLORS = {
  aquaMarine: '#3de2cb',
  aquarius: '#37ccb7',
  fillBlackBlack: '#183b56',
  fillBlackGray: '#5a7184',
  redPrimary: '#ff4f52',
  slate: '#505a72',
  softGreen: '#00333E',
  white: '#fff',

  linkWater: '#D3E7F7',
  firefly: '#0B1C28',
  elephant: '#0D2436',
  cornflower: '#6D64F5',
  bigStone: '#1B3549',
  sun: '#FAAD13',

  nileBlue: '#183d54',
  bayOfMany: '#215373',
  turquoise: '#35d0ba',
  brightSun: '#ffcd3c',
  froly: '#f3807b',

  blueBayoux: '#5A7184',
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
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    h6: React.CSSProperties;
    body_big: React.CSSProperties;
    body_normal: React.CSSProperties;
    body_small: React.CSSProperties;
    body_xs: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    h3?: React.CSSProperties;
    h4?: React.CSSProperties;
    h5?: React.CSSProperties;
    h6?: React.CSSProperties;
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
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
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
      main: COLORS.linkWater,
    },
  },
  typography: {
    fontFamily: `'Avenir-Roman', 'Arial', sans-serif`,

    // H1 95 (104) -3.2 | 46 (50) -1.6
    // H2 54 (62) -0.55 | 27 (32) -0.25
    // H3 40 (48) -0.4 | 24 (28) -0.25
    // H4 30 (36) 0 | 22 (30) 0
    // H5 22 (30) 0 | 18 (24) 0
    h1: {
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
    h2: {
      ...fontAvenirBold,
      color: COLORS.nileBlue,
      fontSize: '27px',
      lineHeight: '32px',
      letterSpacing: '-0.25px',

      [MQ.md]: {
        fontSize: '54px',
        lineHeight: '62px',
        letterSpacing: '-0.55px',
      },
    },
    h3: {
      ...fontAvenirBold,
      color: COLORS.nileBlue,
      fontSize: '24px',
      lineHeight: '28px',
      letterSpacing: '-0.25px',

      [MQ.md]: {
        fontSize: '40px',
        lineHeight: '48px',
        letterSpacing: '-0.4px',
      },
    },
    h4: {
      ...fontAvenirBold,
      color: COLORS.nileBlue,
      fontSize: '22px',
      lineHeight: '30px',

      [MQ.md]: {
        fontSize: '30px',
        lineHeight: '36px',
      },
    },
    h5: {
      ...fontAvenirBold,
      color: COLORS.nileBlue,
      fontSize: '18px',
      lineHeight: '24px',

      [MQ.md]: {
        fontSize: '22px',
        lineHeight: '30px',
      },
    },
    h6: {
      ...fontAvenirBold,
      fontSize: '18px',
      lineHeight: '20px',
      color: COLORS.nileBlue,
    },
    body_big: {
      ...fontAvenirRoman,
      color: COLORS.nileBlue,
      fontSize: '18px',
      lineHeight: '28px',

      [MQ.md]: {
        fontSize: '24px',
        lineHeight: '40px',
      },
    },
    body_normal: {
      ...fontAvenirRoman,
      color: COLORS.nileBlue,
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
      color: COLORS.nileBlue,
    },
    body_xs: {
      ...fontAvenirRoman,
      fontSize: '14px',
      lineHeight: '20px',
      color: COLORS.nileBlue,
    },
  },
  breakpoints: {
    values: customBreakpoints,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
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

  html > body > div#hs-eu-cookie-confirmation.hs-cookie-notification-position-bottom {
    box-shadow: none;
    border-top-width: 0;
    z-index: 2147483647 !important;

    &,
    & > div#hs-eu-cookie-confirmation-inner {
      background-color: ${COLORS.slate};

      @media screen and (max-width: 480px) {
        padding: 15px 0 !important;
      }
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

  @media screen and (max-width: 768px) {
    div#hs-eu-cookie-confirmation
      div#hs-eu-cookie-confirmation-inner
      div#hs-en-cookie-confirmation-buttons-area {
      margin-right: 0 !important;
    }
    div#hs-eu-cookie-confirmation div#hs-eu-cookie-confirmation-inner p {
      margin: 0 24px 12px !important;
    }
  }

  .grecaptcha-badge {
    visibility: hidden;
  }
`;

export default theme;
