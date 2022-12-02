import React, { useEffect } from 'react';

import { Box } from '@mui/material';
// import { Box, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

import PageHeader from 'src/components/PageHeader';
import PageFooter from 'src/components/PageFooter';
import PageHead from 'src/components/PageHead';
import PreviewIndicator from 'src/components/PreviewIndicator';

import OGImgHome from 'public/og-images/crossplane-og.jpg';

const defaultTitle = 'Crossplane - The cloud-native control plane framework';
const defaultDescription =
  // eslint-disable-next-line max-len
  'Crossplane is a framework for building cloud native control planes without needing to write code. It has a highly extensible backend that enables you to build a control plane that can orchestrate applications and infrastructure no matter where they run, and a highly configurable frontend that puts you in control of the schema of the declarative API it offers.';
const defaultImg = OGImgHome.src;

type Props = {
  children: React.ReactNode;
  isFooterVisible?: boolean;
  displayTitle?: string;
  metaDescription?: string;
  metaImg?: string;
  hideCTACard?: boolean;
  ctaTitle?: string;
  ctaParagraph?: string;
  ctaBtnText?: string;
  ctaBtnLink?: string;
  ctaBtnStyleType?: ButtonStyleType;
  ctaBtnTarget?: string;
  // ctaBtnTwo?: boolean;
  // ctaBtnTwoText?: string;
  // ctaBtnTwoLink?: string;
  // ctaCustomSx?: SxProps;
  cms_head_props?: CMSHeadProps;
  isPreview?: boolean;
};

const PageProvider = ({
  children,
  isFooterVisible = true,
  displayTitle = defaultTitle,
  metaDescription = defaultDescription,
  metaImg = defaultImg,
  hideCTACard,
  ctaTitle,
  ctaParagraph,
  ctaBtnText,
  ctaBtnLink,
  ctaBtnStyleType,
  ctaBtnTarget,
  // ctaBtnTwo = false,
  // ctaBtnTwoText,
  // ctaBtnTwoLink,
  // ctaCustomSx,
  cms_head_props,
  isPreview,
}: Props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.scrollTo(0, 0);
    }
  }, []);

  return (
    <Box
      id="page-container"
      sx={{
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
      <PageHeader />
      <Box sx={{ bgcolor: COLORS.nileBlue }}>
        {children}
        <PageFooter
          isFooterVisible={isFooterVisible}
          hideCTACard={hideCTACard}
          ctaTitle={ctaTitle}
          ctaParagraph={ctaParagraph}
          ctaBtnText={ctaBtnText}
          ctaBtnLink={ctaBtnLink}
          ctaBtnStyleType={ctaBtnStyleType}
          ctaBtnTarget={ctaBtnTarget}
          // ctaBtnTwo={ctaBtnTwo}
          // ctaBtnTwoText={ctaBtnTwoText}
          // ctaBtnTwoLink={ctaBtnTwoLink}
          // ctaCustomSx={ctaCustomSx}
        />
      </Box>
      {isPreview && <PreviewIndicator />}
    </Box>
  );
};

export default PageProvider;
