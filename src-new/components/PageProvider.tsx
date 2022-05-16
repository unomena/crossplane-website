/** @jsxRuntime classic /
/* @jsx jsx */

import React, { useEffect, useState } from 'react';

import { jsx } from '@emotion/react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { COLORS } from 'src/theme';

import PageHeader from 'src-new/components/PageHeader';
import PageFooter from 'src-new/components/PageFooter';
import PageHead from 'src/components/PageHead';

const PageContainer = styled(Box)`
  position: relative;
  width: 100%;
  min-height: 100%;
`;

const defaultTitle = 'Upbound - The Universal Cloud Platform';
const defaultDescription =
  'The Upbound universal cloud platform empowers you to manage infrastructure, eliminate configuration drift, and ' +
  'empower developers with self-service infrastructure.';

type Props = {
  children: React.ReactNode;
  isHeaderVisible?: boolean;
  isFooterVisible?: boolean;
  isOverflowVisible?: boolean;
  displayTitle?: string;
  metaTitle?: string;
  metaDescription?: string;
  isDark?: boolean;
  hideTryForFreeCard?: boolean;
  removeFooterPadding?: boolean;
};

const PageProvider = ({
  children,
  isHeaderVisible = true,
  isFooterVisible = true,
  isOverflowVisible: isOverflowVisibleProp = true,
  displayTitle = defaultTitle,
  metaTitle = displayTitle,
  metaDescription = defaultDescription,
  isDark,
  hideTryForFreeCard,
  removeFooterPadding,
}: Props) => {
  const [isOverflowVisible, setOverflowVisible] = useState(isOverflowVisibleProp);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.scrollTo(0, 0);
  //   }
  // }, []);

  useEffect(() => {
    document.body.classList.toggle(
      'overflow-hidden',
      isOverflowVisible === false || isOverflowVisibleProp === false
    );
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOverflowVisible, isOverflowVisibleProp]);

  return (
    <PageContainer id="page-container">
      <PageHead
        displayTitle={displayTitle}
        metaTitle={metaTitle}
        metaDescription={metaDescription}
      />
      <PageHeader isDark={isDark} />
      <Box sx={{ bgcolor: isDark ? COLORS.firefly : '#fff' }}>
        {children}
        <PageFooter
          isFooterVisible={isFooterVisible}
          hideTryForFreeCard={hideTryForFreeCard}
          removeFooterPadding={removeFooterPadding}
        />
      </Box>
    </PageContainer>
  );
};

export default PageProvider;
