/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import Image from 'next/image';

import { jsx } from '@emotion/react';
import { Box, Hidden, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import * as routes from 'src/routes';

import { Anchor, Link } from 'src/elements/Anchor';
import { Img } from 'src/elements/Img';
import CTACard from 'src-new/components/CTACard';

import cncfIcon from 'public/cncf-icon.png';
import githubLogo from 'public/github.svg';
import linkedinLogo from 'public/linkedin.svg';
import logo from 'public/logo-white.svg';
import twitterLogo from 'public/twitter.svg';
import youtubeLogo from 'public/youtube.svg';
import unomenaLogo from 'public/unomena-logo.svg';

const footerMarginContainer: SxProps = {
  position: 'relative',
  // marginTop: '25px',

  // [MQ.md]: {
  //   marginTop: '100px',
  // },
};

const footerBackgroundContainer: SxProps = {
  backgroundColor: COLORS.firefly,
};

const footerCareersPill: SxProps = {
  ...fontAvenirBold,
  display: 'flex',
  borderRadius: '40px',
  backgroundColor: COLORS.softGreen,
  color: COLORS.lightGreen,
  minWidth: '86px',
  padding: '4px 10px',
  fontSize: '12px',
  lineHeight: '20px',
  marginLeft: '4px',
};

const largeFooterWidthContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: '268px 140px 78px 140px',
  margin: '0 auto',
  maxWidth: '1440px',
};

const largeFooterLinkColumnsContainer: SxProps = {
  display: 'flex',
  // borderTop: `1px solid ${COLORS.darkBlue1A3245}`,
  // marginTop: '100px',
  marginBottom: '70px',
  // paddingTop: '90px',
  width: '100%',
};

const largeFooterLogoAndSocialsContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '240px',
  marginRight: '52px',
};

const largeFooterLinkColumnContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '30px',
  color: COLORS.blueyGrey,
  width: '165px',

  '&:last-of-type': {
    marginRight: 0,
  },

  '& > a:last-of-type': {
    marginBottom: 0,
  },
};

const largeFooterLinksTitle: SxProps = {
  ...fontAvenirBold,
  fontSize: '18px',
  color: COLORS.fillBlackGray,
  marginBottom: '28px',
};

const largeFooterLinkStyle: SxProps = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  textDecoration: 'none',
  marginBottom: '25px',

  '&:hover': {
    color: COLORS.white,
  },
};

const largeFooterSocialAnchor: SxProps = {
  ...largeFooterLinkStyle,
  marginBottom: 0,

  '&:hover': {
    opacity: 0.7,
  },
};

const largeFooterLogoLink: SxProps = {
  display: 'flex',
  marginBottom: '23px',
};

const largeFooterCopyrightParagraph: SxProps = {
  color: COLORS.fillBlackGray,
  fontSize: '16px',
  lineHeight: '28px',
  fontWeight: '600',
  marginBottom: '20px',
};

const largeFooterSocialsContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',

  '& > a': {
    marginRight: '20px',
    '&:last-of-type': {
      marginRight: 0,
    },
  },
};

const unomenaLink: SxProps = {
  color: COLORS.fillBlackGray,
  fontSize: '13px',
  lineHeight: '28px',
  fontWeight: '600',
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
};

const largeFooterCNCFContainer: SxProps = {
  display: 'flex',
  // flexDirection: 'column',
  alignItems: 'center',
};

const largeFooterCNCFSpan: SxProps = {
  color: COLORS.fillBlackGray,
  fontSize: '16px',
  textAlign: 'center',
};

const mobileFooterWidthContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  padding: '60px 24px 60px 24px',
  margin: '0 auto',

  [MQ.lg]: {
    padding: '50px 140px 78px 140px',
    margin: '0 auto',
    maxWidth: '1440px',
  },
};

const mobileFooterLinkColumnsContainer: SxProps = {
  display: 'flex',
  // borderTop: `1px solid ${COLORS.darkBlue1A3245}`,
  width: '100%',
  flexWrap: 'wrap',
  // marginTop: '60px',
  padding: '30px 20px 0 20px',

  [MQ.lg]: {
    marginTop: '100px',
    padding: '90px 0 0 0',
  },
};

const mobileFooterLogoAndSocialsContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '490px',
  margin: '60px auto 0 auto',

  [MQ.md]: {
    margin: '60px 0 0 0',
    maxwidth: 'unset',
  },
};

const mobileFooterLinkColumnsWidthContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '490px',
  margin: '0 auto',

  [MQ.md]: {
    flexDirection: 'row',
    maxWidth: 'unset',
    margin: 'unset',
  },
};

const mobileFooterLinkColumnContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  color: COLORS.blueyGrey,
  width: '100%',
  margin: '0 0 40px 0',

  '& > a:last-of-type': {
    marginBottom: 0,
  },

  [MQ.md]: {
    margin: '0 30px 0 0',
  },

  '&:last-of-type': {
    margin: 0,
  },
};

const mobileFooterColumnSpan: SxProps = {
  ...fontAvenirBold,
  fontSize: '16px',
  color: COLORS.fillBlackGray,
  marginBottom: '18px',

  [MQ.sm]: {
    fontSize: '18px',
    marginBottom: '28px',
  },
};

const mobileFooterLinkStyle: SxProps = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  textDecoration: 'none',
  marginBottom: '15px',

  '&:hover': {
    color: COLORS.white,
  },

  [MQ.sm]: {
    fontSize: '16px',
  },
};

const mobileFooterColumnLink: SxProps = {
  ...mobileFooterLinkStyle,

  [MQ.sm]: {
    marginBottom: '25px',
  },
};

const mobileFooterColumnAnchor: SxProps = {
  ...mobileFooterLinkStyle,

  [MQ.sm]: {
    marginBottom: '25px',
  },
};

const mobileFooterSocialAnchor: SxProps = {
  ...mobileFooterLinkStyle,
  marginBottom: 0,

  '&:hover': {
    opacity: 0.7,
  },
};

const mobileFooterLogoLink: SxProps = {
  display: 'flex',
  marginBottom: '21px',

  [MQ.md]: {
    marginBottom: '23px',
  },
};

const mobileFooterCopyrightParagraph: SxProps = {
  color: COLORS.fillBlackGray,
  fontSize: '14px',
  lineHeight: '25px',
  marginBottom: '20px',

  [MQ.sm]: {
    fontSize: '16px',
    lineHeight: '28px',
    fontWeight: '600',
  },
};

const mobileFooterSocialsContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',

  '& > a': {
    marginRight: '20px',
    '&:last-of-type': {
      marginRight: 0,
    },
  },
};

const mobileFooterCNCFBorderContainer: SxProps = {
  marginTop: '50px',
  borderTop: `1px solid ${COLORS.darkBlue1A3245}`,
  padding: '50px 20px 0 20px',

  [MQ.lg]: {
    padding: '50px 0 0 0',
  },
};

const mobileFooterCNCFColumn: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '490px',

  [MQ.md]: {
    maxWidth: 'unset',
  },
};

const mobileFooterCNCFSpan: SxProps = {
  color: COLORS.fillBlackGray,
  fontSize: '15px',
  lineHeight: '28px',
  fontWeight: '600',

  // [MQ.sm]: {
  //   fontSize: '16px',
  //   lineHeight: '30px',
  // },
};

type Props = {
  isFooterVisible?: boolean;
  hideCTACard?: boolean;
  removeFooterPadding?: boolean;
  ctaTitle?: string;
  ctaParagraph?: string;
  ctaBtnText?: string;
  ctaBtnLink?: string;
};

const PageFooter = ({
  isFooterVisible = true,
  hideCTACard,
  removeFooterPadding,
  ctaTitle,
  ctaParagraph,
  ctaBtnText,
  ctaBtnLink,
}: Props) => {
  if (isFooterVisible === false) {
    return null;
  }

  return (
    <Box sx={footerMarginContainer}>
      <Box sx={footerBackgroundContainer}>
        <Hidden lgUp>
          <Box sx={{ ...mobileFooterWidthContainer, pt: removeFooterPadding ? '20px' : '200px' }}>
            {!hideCTACard && (
              <CTACard
                title={ctaTitle}
                paragraph={ctaParagraph}
                btnText={ctaBtnText}
                btnLink={ctaBtnLink}
              />
            )}
            <Box sx={mobileFooterLinkColumnsContainer}>
              <Box sx={mobileFooterLinkColumnsWidthContainer}>
                <Box sx={mobileFooterLinkColumnContainer}>
                  <Typography sx={mobileFooterColumnSpan}>Product</Typography>
                  <Link sx={mobileFooterColumnLink} href={routes.productsUbcRoute}>
                    Upbound Cloud
                  </Link>
                  <Link sx={mobileFooterColumnLink} href={routes.productsUxpRoute}>
                    Universal Crossplane
                  </Link>
                  <Link sx={mobileFooterColumnLink} href={routes.productsRegistryRoute}>
                    Marketplace
                  </Link>
                  <Anchor sx={mobileFooterColumnAnchor} href={routes.contactRoute}>
                    Request Demo
                  </Anchor>
                  {/* <Link sx={mobileFooterColumnLink} href={routes.pricingRoute}>
                    Plans & Pricing
                  </Link> */}
                  <Link sx={mobileFooterColumnLink} href={routes.partnersRoute}>
                    Partner Program
                  </Link>
                </Box>
                <Box sx={mobileFooterLinkColumnContainer}>
                  <Typography sx={mobileFooterColumnSpan}>Learn</Typography>
                  <Anchor sx={mobileFooterColumnAnchor} href={routes.cloudDocsUrl}>
                    Documentation
                  </Anchor>
                  <Link sx={mobileFooterColumnLink} href={routes.faqRoute}>
                    FAQs
                  </Link>
                  <Anchor sx={mobileFooterColumnAnchor} href={routes.upboundStatusUrl}>
                    System Status
                  </Anchor>
                </Box>
                <Box sx={mobileFooterLinkColumnContainer}>
                  <Typography sx={mobileFooterColumnSpan}>Company</Typography>
                  <Link sx={mobileFooterColumnLink} href={routes.aboutRoute}>
                    About Us
                  </Link>
                  <Anchor sx={mobileFooterColumnAnchor} href={routes.upboundGreenhouseUrl}>
                    Careers
                    <Box sx={footerCareersPill}>Now Hiring</Box>
                  </Anchor>
                  <Anchor sx={mobileFooterColumnAnchor} href={routes.upboundBlogUrl}>
                    Blog
                  </Anchor>
                  <Anchor sx={mobileFooterColumnAnchor} href={routes.contactRoute}>
                    Contact Us
                  </Anchor>
                </Box>
                <Box sx={mobileFooterLinkColumnContainer}>
                  <Typography sx={mobileFooterColumnSpan}>More</Typography>
                  <Link sx={mobileFooterColumnLink} href={routes.tncRoute}>
                    Terms & Conditions
                  </Link>
                  <Link sx={mobileFooterColumnLink} href={routes.privacyRoute}>
                    Privacy Policy
                  </Link>
                  <Anchor sx={mobileFooterColumnAnchor} href={routes.sitemapRoute}>
                    Sitemap
                  </Anchor>
                </Box>
              </Box>
              <Box sx={mobileFooterLogoAndSocialsContainer}>
                <Link sx={mobileFooterLogoLink} href={routes.homeRoute}>
                  <Img src={logo} alt="logo" width={190} />
                </Link>
                <Typography sx={mobileFooterCopyrightParagraph}>
                  Copyright © 2022.
                  <br />
                  Crafted with love from our globally distributed team.
                </Typography>
                <Box sx={mobileFooterSocialsContainer}>
                  <Anchor sx={mobileFooterSocialAnchor} href={routes.twitterUrl}>
                    <Img src={twitterLogo} alt="Twitter" height="15px" width="18px" />
                  </Anchor>
                  <Anchor sx={mobileFooterSocialAnchor} href={routes.githubUrl}>
                    <Img src={githubLogo} alt="GitHub" height="18px" width="18px" />
                  </Anchor>
                  <Anchor sx={mobileFooterSocialAnchor} href={routes.linkedinUrl}>
                    <Img src={linkedinLogo} alt="LinkedIn" height="16px" width="16px" />
                  </Anchor>
                  <Anchor sx={mobileFooterSocialAnchor} href={routes.youtubeUrl}>
                    <Img src={youtubeLogo} alt="YouTube" height="13px" width="19px" />
                  </Anchor>
                </Box>
                <Box sx={unomenaLink}>
                  Site by{' '}
                  <a
                    href="http://www.unomena.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'flex', marginLeft: '4px' }}
                  >
                    <Image src={unomenaLogo} alt="unomena" height={32} width={80} />
                  </a>
                </Box>
              </Box>
            </Box>
            <Box sx={mobileFooterCNCFBorderContainer}>
              <Box sx={mobileFooterCNCFColumn}>
                <Anchor href={routes.cncfUrl}>
                  <Img
                    src={cncfIcon}
                    alt="cncfIcon"
                    sx={{ maxWidth: '233px', marginBottom: '32px' }}
                  />
                </Anchor>
                <Typography sx={mobileFooterCNCFSpan}>
                  Upbound is an active contributor to Crossplane and the Cloud Native Computing
                  Foundation
                </Typography>
              </Box>
            </Box>
            <Box sx={mobileFooterCNCFBorderContainer}>
              <Typography
                sx={{ fontSize: '13px', lineHeight: '21px', color: COLORS.fillBlackGray }}
              >
                *Gartner, “Cool Vendors in Cloud Computing”, Sid Nag, Arun Chandrasekaran, Andrew
                Lerner, Manjunath Bhat, 26 April 2022. The GARTNER COOL VENDOR badge is a trademark
                and service mark of Gartner, Inc., and/or its affiliates, and is used herein with
                permission. All rights reserved. Gartner does not endorse any vendor, product or
                service depicted in its research publications, and does not advise technology users
                to select only those vendors with the highest ratings or other designation. Gartner
                research publications consist of the opinions of Gartner’s Research & Advisory
                organization and should not be construed as statements of fact. Gartner disclaims
                all warranties, expressed or implied, with respect to this research, including any
                warranties of merchantability or fitness for a particular purpose.
              </Typography>
            </Box>
          </Box>
        </Hidden>
        <Hidden lgDown>
          <Box sx={{ ...largeFooterWidthContainer, pt: removeFooterPadding ? '78px' : '268px' }}>
            {!hideCTACard && (
              <CTACard
                title={ctaTitle}
                paragraph={ctaParagraph}
                btnText={ctaBtnText}
                btnLink={ctaBtnLink}
              />
            )}
            <Box sx={largeFooterLinkColumnsContainer}>
              <Box sx={largeFooterLogoAndSocialsContainer}>
                <Link sx={largeFooterLogoLink} href={routes.homeRoute}>
                  <Img src={logo} alt="logo" width={190} />
                </Link>
                <Typography sx={largeFooterCopyrightParagraph}>
                  Copyright © 2022.
                  <br />
                  Crafted with love from our globally distributed team.
                </Typography>
                <Box sx={largeFooterSocialsContainer}>
                  <Anchor sx={largeFooterSocialAnchor} href={routes.twitterUrl}>
                    <Img src={twitterLogo} alt="Twitter" width={18} />
                  </Anchor>
                  <Anchor sx={largeFooterSocialAnchor} href={routes.githubUrl}>
                    <Img src={githubLogo} alt="GitHub" width={18} />
                  </Anchor>
                  <Anchor sx={largeFooterSocialAnchor} href={routes.linkedinUrl}>
                    <Img src={linkedinLogo} alt="LinkedIn" width={16} />
                  </Anchor>
                  <Anchor sx={largeFooterSocialAnchor} href={routes.youtubeUrl}>
                    <Img src={youtubeLogo} alt="YouTube" width={19} />
                  </Anchor>
                </Box>
                <Box sx={unomenaLink}>
                  Site by{' '}
                  <a
                    href="http://www.unomena.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'flex', marginLeft: '4px' }}
                  >
                    <Image src={unomenaLogo} alt="unomena" height={32} width={80} />
                  </a>
                </Box>
              </Box>
              <Box sx={largeFooterLinkColumnContainer}>
                <Typography sx={largeFooterLinksTitle}>Product</Typography>
                <Link sx={largeFooterLinkStyle} href={routes.productsUbcRoute}>
                  Upbound Cloud
                </Link>
                <Link sx={largeFooterLinkStyle} href={routes.productsUxpRoute}>
                  Universal Crossplane
                </Link>
                <Link sx={largeFooterLinkStyle} href={routes.productsRegistryRoute}>
                  Marketplace
                </Link>
                <Anchor sx={largeFooterLinkStyle} href={routes.contactRoute}>
                  Request Demo
                </Anchor>
                {/* <Link sx={largeFooterLinkStyle} href={routes.pricingRoute}>
                  Plans & Pricing
                </Link> */}
                <Link sx={largeFooterLinkStyle} href={routes.partnersRoute}>
                  Partner Program
                </Link>
              </Box>
              <Box sx={largeFooterLinkColumnContainer}>
                <Typography sx={largeFooterLinksTitle}>Learn</Typography>
                <Anchor sx={largeFooterLinkStyle} href={routes.cloudDocsUrl}>
                  Documentation
                </Anchor>
                <Link sx={largeFooterLinkStyle} href={routes.faqRoute}>
                  FAQs
                </Link>
                <Anchor sx={largeFooterLinkStyle} href={routes.upboundStatusUrl}>
                  System Status
                </Anchor>
              </Box>
              <Box sx={largeFooterLinkColumnContainer}>
                <Typography sx={largeFooterLinksTitle}>Company</Typography>
                <Link sx={largeFooterLinkStyle} href={routes.aboutRoute}>
                  About Us
                </Link>
                <Anchor sx={largeFooterLinkStyle} href={routes.upboundGreenhouseUrl}>
                  Careers
                  <Box sx={footerCareersPill}>Now Hiring</Box>
                </Anchor>
                <Anchor sx={largeFooterLinkStyle} href={routes.upboundBlogUrl}>
                  Blog
                </Anchor>
                <Anchor sx={largeFooterLinkStyle} href={routes.contactRoute}>
                  Contact Us
                </Anchor>
              </Box>
              <Box sx={largeFooterLinkColumnContainer}>
                <Typography sx={largeFooterLinksTitle}>More</Typography>
                <Link sx={largeFooterLinkStyle} href={routes.tncRoute}>
                  Terms & Conditions
                </Link>
                <Link sx={largeFooterLinkStyle} href={routes.privacyRoute}>
                  Privacy Policy
                </Link>
                <Anchor sx={largeFooterLinkStyle} href={routes.sitemapRoute}>
                  Sitemap
                </Anchor>
              </Box>
            </Box>
            <Box sx={largeFooterCNCFContainer}>
              <Box mr={5}>
                <Anchor href={routes.cncfUrl}>
                  <Img
                    src={cncfIcon}
                    alt="cncfIcon"
                    sx={{ width: '233px', height: '37px', marginBottom: '24px' }}
                  />
                </Anchor>
                <Typography sx={mobileFooterCNCFSpan}>
                  Upbound is an active contributor to Crossplane and the Cloud Native Computing
                  Foundation
                </Typography>
              </Box>
              <Box sx={{ pl: 5, borderLeft: `2px solid ${COLORS.fillBlackGray}` }}>
                <Typography
                  sx={{ fontSize: '13px', lineHeight: '21px', color: COLORS.fillBlackGray }}
                >
                  *Gartner, “Cool Vendors in Cloud Computing”, Sid Nag, Arun Chandrasekaran, Andrew
                  Lerner, Manjunath Bhat, 26 April 2022. The GARTNER COOL VENDOR badge is a
                  trademark and service mark of Gartner, Inc., and/or its affiliates, and is used
                  herein with permission. All rights reserved. Gartner does not endorse any vendor,
                  product or service depicted in its research publications, and does not advise
                  technology users to select only those vendors with the highest ratings or other
                  designation. Gartner research publications consist of the opinions of Gartner’s
                  Research & Advisory organization and should not be construed as statements of
                  fact. Gartner disclaims all warranties, expressed or implied, with respect to this
                  research, including any warranties of merchantability or fitness for a particular
                  purpose.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default PageFooter;
