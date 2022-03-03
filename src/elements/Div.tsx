/** @jsxRuntime classic /
/* @jsx jsx */

import React, { HTMLAttributes, ReactNode } from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { COLORS, shouldForwardProp } from '../theme';

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof COLORS;
}

// interface GridProps extends BaseProps, styledSystem.GridProps {}

// const baseStyledSystem = styledSystem.compose(
//   styledSystem.background,
//   styledSystem.border,
//   styledSystem.color,
//   styledSystem.flexbox,
//   styledSystem.layout,
//   styledSystem.overflow,
//   styledSystem.position,
//   styledSystem.space,
//   styledSystem.typography
// );

// const Box = styled('div', { shouldForwardProp })<BaseProps>`
//   box-sizing: border-box;
//   ${baseStyledSystem};
// `;

// Box.displayName = 'Box';

const Card = styled('div', { shouldForwardProp })<BaseProps>(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.03)',
  border: `solid 1px ${COLORS.veryLightBlue}`,
  borderBottom: `1px solid ${COLORS.fogTwo}`,
  backgroundColor: COLORS.white,
  width: '100%',
}));

// const Card = styled('div', { shouldForwardProp })<BaseProps>`
//   box-sizing: border-box;
//   position: relative;
//   border-radius: 8px;
//   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
//   border: solid 1px COLORS.veryLightBlue;
//   border-bottom: 1px solid COLORS.fogTwo;
//   background-color: COLORS.white;
//   width: 100%;
// `;

const Flex = styled('div', { shouldForwardProp })<BaseProps>(({ theme }) => ({
  display: 'flex',
}));

// const Flex = styled('div', { shouldForwardProp })<BaseProps>`
//   box-sizing: border-box;
//   display: flex;
// `;

// const Grid = styled('div', { shouldForwardProp })<GridProps>`
//   box-sizing: border-box;
//   display: grid;
//   ${baseStyledSystem};
//   ${styledSystem.grid};
// `;

// Grid.displayName = 'Grid';

// const GridSystem = ({ children, ...props }: { children: ReactNode } & BaseProps) => (
//   <Flex flexWrap="wrap" {...props}>
//     {children}
//   </Flex>
// );

// GridSystem.displayName = 'GridSystem';

const Column = ({
  colSize,
  children,
  ...props
}: BaseProps & {
  children?: ReactNode;
  colSize: any;
  className?: string | undefined;
}) => (
  <Box flexBasis={colSize} maxWidth={colSize} pl={15} pr={15} pb={15} {...props}>
    {children}
  </Box>
);

export {
  Card,
  Column,
  // Grid,
  Flex,
  // Box,
  // GridSystem,
};

export const COL12 = (100 * 12) / 12 + '%';
export const COL11 = (100 * 11) / 12 + '%';
export const COL10 = (100 * 10) / 12 + '%';
export const COL9 = (100 * 9) / 12 + '%';
export const COL8 = (100 * 8) / 12 + '%';
export const COL7 = (100 * 7) / 12 + '%';
export const COL6 = (100 * 6) / 12 + '%';
export const COL5 = (100 * 5) / 12 + '%';
export const COL4 = (100 * 4) / 12 + '%';
export const COL3 = (100 * 3) / 12 + '%';
export const COL2 = (100 * 2) / 12 + '%';
export const COL1 = (100 * 1) / 12 + '%';
