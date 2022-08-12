/** @jsxRuntime classic /
/* @jsx jsx */

import React, { useEffect, useState } from 'react';

import { jsx } from '@emotion/react';
import { Box } from '@mui/material';
import { COLORS } from 'src/theme';

import PageHeader from 'src-new/components/PageHeader';
import PageFooter from 'src-new/components/PageFooter';
import PageHead from 'src/components/PageHead';
import PreviewIndicator from 'src-new/components/PreviewIndicator';

import OGImgHome from 'public/og-images/home-page-og.jpg';

const defaultTitle = 'Upbound - The Universal Cloud Platform';
const defaultDescription =
  'The Upbound universal cloud platform empowers you to manage infrastructure, eliminate configuration drift, and ' +
  'empower developers with self-service infrastructure.';
const defaultImg = OGImgHome.src;

type Props = {
  children: React.ReactNode;
  isFooterVisible?: boolean;
  isOverflowVisible?: boolean;
  displayTitle?: string;
  metaDescription?: string;
  metaImg?: string;
  hideCTACard?: boolean;
  removeFooterPadding?: boolean;
  ctaTitle?: string;
  ctaParagraph?: string;
  ctaBtnText?: string;
  ctaBtnLink?: string;
  cms_head_props?: CMSHeadProps;
  isPreview?: boolean;
};

const PageProvider = ({
  children,
  isFooterVisible = true,
  isOverflowVisible: isOverflowVisibleProp = true,
  displayTitle = defaultTitle,
  metaDescription = defaultDescription,
  metaImg = defaultImg,
  hideCTACard,
  removeFooterPadding,
  ctaTitle,
  ctaParagraph,
  ctaBtnText,
  ctaBtnLink,
  cms_head_props,
  isPreview,
}: Props) => {
  const [isOverflowVisible, setOverflowVisible] = useState(isOverflowVisibleProp);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.scrollTo(0, 0);
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
    <Box
      id="page-container"
      sx={{
        position: isOverflowVisible ? 'relative' : 'unset',
        width: '100%',
        minHeight: '100%',
      }}
    >
      <PageHead
        displayTitle={displayTitle}
        metaDescription={metaDescription}
        metaImg={metaImg}
        cms_head_props={cms_head_props}
      />
      <PageHeader setOverflowVisible={setOverflowVisible} />
      <Box sx={{ bgcolor: COLORS.firefly }}>
        {children}
        <PageFooter
          isFooterVisible={isFooterVisible}
          hideCTACard={hideCTACard}
          removeFooterPadding={removeFooterPadding}
          ctaTitle={ctaTitle}
          ctaParagraph={ctaParagraph}
          ctaBtnText={ctaBtnText}
          ctaBtnLink={ctaBtnLink}
        />
      </Box>
      {isPreview && <PreviewIndicator />}
    </Box>
  );
};

export default PageProvider;
