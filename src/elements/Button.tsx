/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/react';
import { styled, SxProps } from '@mui/system';

import NextLink from 'next/link';

import { COLORS, fontAvenirBold, fontAvenirRoman, MQ, shouldForwardProp } from 'src/theme';
import { AnchorProps } from './Anchor';

export type BtnTypes =
  | 'aquaGreenFill'
  | 'aquaMarineFill'
  | 'cornflowerFill'
  | 'blackOutline'
  | 'whiteOutline';

interface ButtonProps {
  btnType?: BtnTypes;
  color?: keyof typeof COLORS;
  full?: boolean;
  size?: 'small' | 'medium' | 'large';
  hasShadow?: boolean;
  mobile?: boolean;
  bold?: boolean;
  sx?: SxProps;
}

const StyledButton = styled('button', { shouldForwardProp })<{ otherStyles?: any }>(
  ({ otherStyles }) => ({
    boxSizing: 'border-box',
    border: 'solid 2px transparent',
    borderRadius: '40px',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    '&:disabled': {
      cursor: 'not-allowed',
    },
    ...otherStyles,
  })
);

const StyledAnchor = styled('a', { shouldForwardProp })<{ otherStyles?: any }>(
  ({ otherStyles }) => ({
    boxSizing: 'border-box',
    border: 'solid 2px transparent',
    borderRadius: '40px',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    '&:disabled': {
      cursor: 'not-allowed',
    },
    ...otherStyles,
  })
);

// const baseStyle = css`
//   box-sizing: border-box;
//   border: solid 2px transparent;
//   border-radius: 40px;
//   font-size: 14px;
//   line-height: 20px;
//   text-align: center;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;

//   &:disabled {
//     cursor: not-allowed;
//   }
// `;

const aquaGreenFill = {
  backgroundColor: COLORS.aquaGreen,
  borderColor: COLORS.aquaGreen,
  color: COLORS.white,
  fill: COLORS.white,

  '&:hover:not(:disabled)': {
    backgroundColor: COLORS.aquaGreenDark,
    borderColor: COLORS.aquaGreenDark,
  },
};

const aquaMarineFill = {
  borderColor: 'transparent',
  backgroundColor: COLORS.aquaMarine,
  color: COLORS.white,
  fill: COLORS.white,

  '&:hover:not(:disabled)': {
    borderColor: 'transparent',
    backgroundColor: COLORS.aquarius,
    color: COLORS.white,
    fill: COLORS.white,
  },
};

const cornflowerFill = {
  backgroundColor: COLORS.cornflower,
  borderColor: COLORS.cornflower,
  color: COLORS.white,
  fill: COLORS.white,

  '&:hover:not(:disabled)': {
    backgroundColor: COLORS.bMedPurple,
    borderColor: COLORS.bMedPurple,
    color: COLORS.white,
    fill: COLORS.white,
  },
};

const blackOutline = {
  backgroundColor: 'transparent',
  borderColor: COLORS.fillBlackBlack,
  color: COLORS.fillBlackBlack,
  fill: COLORS.fillBlackBlack,

  '&:hover:not(:disabled)': {
    borderColor: COLORS.fillBlackBlack,
    backgroundColor: COLORS.fillBlackBlack,
    color: COLORS.white,
    fill: COLORS.white,
  },

  '&:disabled': {
    borderColor: COLORS.disabledBlackOutlineButton,
    color: COLORS.disabledBlackOutlineButton,
    fill: COLORS.disabledBlackOutlineButton,
  },
};

const whiteOutline = {
  backgroundColor: 'transparent',
  borderColor: COLORS.white,
  color: COLORS.white,
  fill: COLORS.white,

  '&:hover:not(:disabled)': {
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    color: COLORS.fillBlackBlack,
    fill: COLORS.fillBlackBlack,
  },
};

const btnTypes = {
  aquaGreenFill,
  aquaMarineFill,
  whiteOutline,
  cornflowerFill,
  blackOutline,
};

const sizes = {
  small: { padding: '8px 20px' },
  medium: { padding: '8px 20px' },
  large: { padding: '8px 45px' },
};

// const StyledButton = styled('button', { shouldForwardProp })<{ otherStyles: string }>`
//   ${baseStyle}
//   ${(props) => `${props.otherStyles}`}
//   ${baseStyledSystem}
// `;

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  btnType,
  full,
  size,
  hasShadow,
  mobile,
  bold = true,
  ...props
}) => {
  const btnStyle = btnType ? btnTypes[btnType] : '';
  const fontStyle = bold ? fontAvenirBold : fontAvenirRoman;
  const sizeStyle = size ? sizes[size] : sizes.medium;
  const fullStyle = full ? { width: '100%' } : '';
  const boxShadow = hasShadow ? { boxShadow: '0 0 17px 0 rgba(17, 29, 61, 0.15)' } : '';
  const stretchStyle = mobile
    ? {
        width: '100%',

        [MQ.md]: {
          width: 'auto',
        },
      }
    : '';

  const otherStyles = {
    ...btnStyle,
    ...fontStyle,
    ...sizeStyle,
    ...fullStyle,
    ...boxShadow,
    ...stretchStyle,
  };

  return (
    <StyledButton otherStyles={otherStyles} {...props}>
      {children}
    </StyledButton>
  );
};

// const StyledAnchor = styled('a', { shouldForwardProp })<{ otherStyles: string }>`
//   ${baseStyle}
//   ${({ otherStyles }) => otherStyles}
//   ${baseStyledSystem}
// `;

export const AnchorButton: React.FC<
  ButtonProps &
    AnchorProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, btnType, full, size, hasShadow, bold = true, ...props }) => {
  const btnStyle = btnType ? btnTypes[btnType] : '';
  const fontStyle = bold ? fontAvenirBold : fontAvenirRoman;
  const sizeStyle = size ? sizes[size] : sizes.medium;
  const fullStyle = full ? { width: '100%' } : '';
  const boxShadow = hasShadow ? { boxShadow: '0 0 17px 0 rgba(17, 29, 61, 0.15)' } : '';

  const otherStyles = {
    ...btnStyle,
    ...fontStyle,
    ...sizeStyle,
    ...fullStyle,
    ...boxShadow,
    ...{ display: 'inline-block', textDecoration: 'none' },
  };

  return (
    <StyledAnchor hover="none" otherStyles={otherStyles} {...props}>
      {children}
    </StyledAnchor>
  );
};

export const LinkButton: React.FC<
  ButtonProps &
    AnchorProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, href, btnType, full, size, hasShadow, bold = true, ...props }) => {
  const btnStyle = btnType ? btnTypes[btnType] : '';
  const fontStyle = bold ? fontAvenirBold : fontAvenirRoman;
  const sizeStyle = size ? sizes[size] : sizes.medium;
  const fullStyle = full ? { width: '100%' } : '';
  const boxShadow = hasShadow ? { boxShadow: '0 0 17px 0 rgba(17, 29, 61, 0.15)' } : '';

  const otherStyles = {
    ...btnStyle,
    ...fontStyle,
    ...sizeStyle,
    ...fullStyle,
    ...boxShadow,
    ...{ display: 'inline-block', textDecoration: 'none' },
  };

  return (
    <NextLink href={href || ''} passHref>
      <StyledAnchor hover="none" otherStyles={otherStyles} {...props}>
        {children}
      </StyledAnchor>
    </NextLink>
  );
};

// const StyledLink = styled('a', { shouldForwardProp })<{ otherStyles: string }>`
//   ${baseStyle}
//   ${({ otherStyles }) => otherStyles}
//   ${baseStyledSystem}
// `;

// export const LinkButton: React.FC<
//   ButtonProps &
//     GatsbyLinkProps<unknown> &
//     AnchorProps &
//     React.ButtonHTMLAttributes<HTMLButtonElement> &
//     React.AnchorHTMLAttributes<HTMLAnchorElement>
// > = ({ btnType, children, full, size, hasShadow, bold = true, ...props }) => {
//   const btnStyle = btnType ? btnTypes[btnType] : '';
//   const fontStyle = bold ? fontAvenirBold : fontAvenirRoman;
//   const sizeStyle = size ? sizes[size] : sizes.medium;
//   const fullStyle = full ? css({ width: '100%' }) : '';
//   const boxShadow = hasShadow ? css({ boxShadow: '0 0 17px 0 rgba(17, 29, 61, 0.15)' }) : '';

//   const otherStyles = [
//     btnStyle,
//     fontStyle,
//     sizeStyle,
//     fullStyle,
//     boxShadow,
//     css({ display: 'inline-block', textDecoration: 'none' }),
//   ];

//   return (
//     <ClassNames>
//       {({ css: classNamesCss }) => (
//         <StyledLink hover="none" otherStyles={classNamesCss(otherStyles)} {...props}>
//           {children}
//         </StyledLink>
//       )}
//     </ClassNames>
//   );
// };
