/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/react';
import { Typography } from '@mui/material';
import { styled, SxProps } from '@mui/system';

import { COLORS } from '../theme';

type HeaderTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: HeaderTypes;
  color?: keyof typeof COLORS;
  bold?: boolean;
  pill?: string;
  sx?: SxProps;
}

// const baseStyledSystem = styledSystem.compose(
//   styledSystem.color,
//   styledSystem.layout,
//   styledSystem.space,
//   styledSystem.typography
// );

// const StyledH1 = styled('h1', { shouldForwardProp })`
//   ${(props) => (props.bold ? fontAvenirBold : fontAvenirRoman)}
//   margin-block-start: 0;
//   margin-block-end: 0;

//   ${baseStyledSystem}
// `;

const fontSizes = {
  h1: ['32px', '32px', '60px', '60px', null],
  h2: ['32px', '32px', '50px', '50px', null],
  h3: ['32px', '32px', '40px', '40px', null],
  h4: '36px',
  h5: '20px',
  h6: '18px',
};

const lineHeights = {
  h1: ['37px', '37px', '64px', '64px', null],
  h2: ['40px', '40px', '50px', '50px', null],
  h3: ['37px', '37px', '50px', '50px', null],
  h4: '48px',
  h5: '24px',
  h6: '32px',
};

// const Pill = styled.div`
//   ${fontAvenirBold}
//   background-color: ${COLORS.softBlue};
//   color: ${COLORS.robinSEgg};
//   border-radius: 2000px;
//   padding: 7px 19px 5px;
//   font-size: 14px;
//   line-height: 20px;
//   display: inline-block;
// `;

const Header = React.forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ variant, pill, bold = true, children, ...props }, ref) => {
    return (
      <Typography
        variant={variant}
        fontSize={fontSizes[variant]}
        lineHeight={lineHeights[variant]}
        fontFamily={
          bold ? `'Avenir', 'Arial Black', sans-serif` : `'Avenir-Roman', 'Arial', sans-serif`
        }
        fontWeight={bold ? '900' : 'normal'}
        {...props}
        ref={ref}
      >
        {children}
      </Typography>
    );
  }
);

export default Header;

// export const Header = <HeaderProps>(({ type, pill, children, ...props }) => {

//   return (
//     <Typography></Typography>
//   )
//   // const HeaderType = headers[type];
//   // if (!pill) {
//   //   return (
//   //     <HeaderType
//   //       css={css({ fontSize: fontSizes[type], lineHeight: lineHeights[type] })}
//   //       {...props}
//   //       ref={ref}
//   //     >
//   //       {children}
//   //     </HeaderType>
//   //   );
//   // }
//   // return (
//   //   <React.Fragment>
//   //     <Pill>{pill}</Pill>
//   //     <HeaderType
//   //       css={css({ fontSize: fontSizes[type], lineHeight: lineHeights[type] })}
//   //       {...props}
//   //       ref={ref}
//   //     >
//   //       {children}
//   //     </HeaderType>
//   //   </React.Fragment>
//   // );
// });
