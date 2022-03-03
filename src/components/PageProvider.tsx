/** @jsxRuntime classic /
/* @jsx jsx */

import React, { useEffect, useState } from 'react';

import { jsx } from '@emotion/react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// import { PageFooter } from './PageFooter';
import PageHeader from './PageHeader';
// import { PageHelmet } from './PageHelmet';

const PageContainer = styled(Box)`
  position: relative;
  width: 100%;
  min-height: 100%;
`;

const defaultTitle = 'Upbound - The Universal Cloud Platform';
const defaultDescription =
  'The Upbound universal cloud platform empowers you to manage infrastructure, eliminate configuration drift, and ' +
  'empower developers with self-service infrastructure.';

const PageProvider: React.FC<{
  isHeaderVisible?: boolean;
  isFooterVisible?: boolean;
  isOverflowVisible?: boolean;
  displayTitle?: string;
  metaTitle?: string;
  metaDescription?: string;
}> = ({
  children,
  isHeaderVisible = true,
  isFooterVisible = true,
  isOverflowVisible: isOverflowVisibleProp = true,
  displayTitle = defaultTitle,
  metaTitle = displayTitle,
  metaDescription = defaultDescription,
}) => {
  const [isOverflowVisible, setOverflowVisible] = useState(isOverflowVisibleProp);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle(
      'overflow-hidden',
      isOverflowVisible === false || isOverflowVisibleProp === false
    );
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOverflowVisible, isOverflowVisibleProp]);

  return (
    <PageContainer id="page-container">
      {/* <PageHelmet
        displayTitle={displayTitle}
        metaTitle={metaTitle}
        metaDescription={metaDescription}
      /> */}
      <PageHeader isHeaderVisible={isHeaderVisible} setOverflowVisible={setOverflowVisible} />
      {children}
      {/* <PageFooter isFooterVisible={isFooterVisible} /> */}
    </PageContainer>
  );
};

export default PageProvider;
