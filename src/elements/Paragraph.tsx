import { css } from '@emotion/react';
import { styled } from '@mui/system';

import { COLORS, fontAvenirBold, fontAvenirRoman, shouldForwardProp } from 'src/theme';

const baseStyle = (isBold: boolean) => css`
  ${isBold ? fontAvenirBold : fontAvenirRoman};
  font-size: 16px;
  line-height: 28px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

// TODO: Remove the style sizes when no longer used
const smallStyle = css`
  font-size: 12px;
  line-height: 20px;
`;

const largeStyle = css`
  font-size: 16px;
  line-height: 30px;
`;

const extraLargeStyle = css`
  font-size: 18px;
  line-height: 40px;
`;

const styleMap = {
  small: smallStyle,
  large: largeStyle,
  extraLarge: extraLargeStyle,
};

interface ParagraphProps {
  color?: keyof typeof COLORS;
  size?: keyof typeof styleMap;
  bold?: boolean;
}

// const baseStyledSystem = styledSystem.compose(
//   styledSystem.color,
//   styledSystem.layout,
//   styledSystem.space,
//   styledSystem.typography
// );

export const Paragraph = styled('p', { shouldForwardProp })<ParagraphProps>`
  ${(props) => baseStyle(props.bold || false)}
  ${(props) => (props.size ? styleMap[props.size] : null)}
  ${(props) => (props.color ? `color: ${COLORS[props.color]};` : null)}
`;
