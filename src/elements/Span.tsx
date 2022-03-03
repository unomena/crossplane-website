import { css } from '@emotion/react';
import { styled } from '@mui/system';

import { COLORS, fontAvenirBold, fontAvenirRoman, shouldForwardProp } from '../theme';

const baseStyle = css`
  ${fontAvenirRoman};
`;

interface SpanProps {
  color?: keyof typeof COLORS;
  bold?: boolean;
}

export const Span = styled('span', { shouldForwardProp })<SpanProps>`
  ${baseStyle}
  ${({ bold }) => (bold ? fontAvenirBold : fontAvenirRoman)}
`;
