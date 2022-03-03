/** @jsxRuntime classic /
/* @jsx jsx */

import React, { useState } from 'react';

import Image from 'next/image';

import { css, jsx } from '@emotion/react';
import { Box, Hidden } from '@mui/material';
import { styled } from '@mui/system';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import * as routes from 'src/routes';
import { isAuthenticated } from 'src/utils/auth';

import { Anchor, Link } from 'src/elements/Anchor';
import { AnchorButton, Button } from 'src/elements/Button';
import { Flex } from 'src/elements/Div';
import { Dropdown } from 'src/elements/Dropdown';
import { If } from 'src/elements/If';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import { Popover } from 'src/elements/Popover';
import { Span } from 'src/elements/Span';
import VideoModal from 'src/elements/VideoModal';

import chevronRight from 'public/chevron-right.svg';
import closeIcon from 'public/close-icon.svg';
import cloudPlatformIcon from 'public/cloud-platform-icon.svg';
import hamburgerIcon from 'public/hamburger-white.svg';
import logo from 'public/logo-white.svg';
import registryIcon from 'public/registry-icon.svg';
import uxpIcon from 'public/uxp-icon.svg';
import PlayCircle from 'src/svg/PlayCircle';

const Column = styled(Flex)`
  box-sizing: border-box;
  flex-direction: column;
`;

const BannerContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  background-color: #263b67;
  text-align: center;
  padding: 23px 0;
  width: 100%;
`;

const BannerAnchor = styled(Anchor)(({}) => ({
  ...fontAvenirBold,
  display: 'block',
  color: COLORS.white,
  fontSize: '14px',
  textDecoration: 'underline',

  [MQ.md]: {
    display: 'inline',
  },
}));

// const BannerAnchor = styled(Anchor)`
//   ${fontAvenirBold};
//   display: block;
//   color: ${COLORS.white};
//   font-size: 14px;
//   text-decoration: underline;

//   ${MQ.m} {
//     display: inline;
//   }
// `;

// const BannerSpan = styled(Span)(({ theme }) => ({
//   ...fontAvenirBold,
//   fontSize: '14px',
//   color: COLORS.white,
//   maxWidth: '280px',
//   margin: '0 auto',
//   padding: '0 30px',

//   [MQ.sm]: {
//     maxWidth: 'unset',
//   },
// }));

const BannerSpan = styled(Span)`
  ${fontAvenirBold};
  font-size: 14px;
  color: ${COLORS.white};
  max-width: 280px;
  margin: 0 auto;
  padding: 0 30px;

  ${MQ.sm} {
    max-width: unset;
  }
`;

const HeaderLogoLink = styled(Link)`
  display: flex;
  margin-right: auto;
`;

const LargeHeaderContainer = styled(Column)`
  background-color: ${COLORS.cornflower};
  color: ${COLORS.white};
  width: 100%;
`;

const LargeHeaderBackgroundContainer = styled(Flex)`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 50px;
  align-items: center;
  justify-content: center;
`;

// const LargeHeaderLink = styled(Link)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   marginRight: '15px',
//   fontSize: '16px',

//   '&, &:visited': {
//     color: COLORS.white,
//   },

//   [MQ.sm]: {
//     marginRight: '45px',
//   },

//   '&:hover': {
//     opacity: 0.7,
//   },
// }));

// const LargeHeaderPopover = styled(Link)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   marginRight: '15px',
//   fontSize: '16px',

//   '&, &:visited': {
//     color: COLORS.white,
//   },

//   [MQ.sm]: {
//     marginRight: '45px',
//   },

//   '&:hover': {
//     opacity: 0.7,
//   },
// }));

const largeHeaderLinkStyle = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 15px;
  font-size: 16px;

  &,
  &:visited {
    color: ${COLORS.white};
  }

  ${MQ.xl} {
    margin-right: 45px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const LargeHeaderLink = styled(Link)(largeHeaderLinkStyle);

const LargeHeaderPopover = styled(Popover)(largeHeaderLinkStyle);

const LargeHeaderPopoverContainer = styled(Flex)`
  border-radius: 10px;
  background-color: ${COLORS.white};
  box-shadow: 0 16px 48px 0 rgba(0, 0, 0, 0.16);
  margin-top: 10px;
`;

const LargeHeaderPopoverSectionContainer = styled(Column)``;

const LargeHeaderPopoverSectionTitle = styled(Span)`
  ${fontAvenirBold}
  font-size: 16px;
  line-height: 22px;
  color: ${COLORS.cornflower};
`;

const LargeHeaderPopoverSectionSubtitle = styled(Span)`
  ${fontAvenirBold}
  font-size: 16px;
  color: ${COLORS.fillBlackBlack};
`;

const LargeHeaderPopoverSectionDescription = styled(Paragraph)`
  font-size: 14px;
  line-height: 23px;
  color: ${COLORS.fillBlackGray};
`;

const LargeHeaderPopoverSectionButton = styled(AnchorButton)`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;

  &:hover > span {
    color: ${COLORS.white};
  }
`;

const largeHeaderPopoverSectionRowStyle = css`
  border-radius: 10px;

  &:hover {
    background-color: ${COLORS.whiteBlue};
  }
`;

const LargeHeaderPopoverSectionRowContainer = styled(Flex)`
  ${largeHeaderPopoverSectionRowStyle}
  padding: 15px 18px;
`;

const LargeHeaderPopoverSectionLinkRowContainer = styled(Link)`
  ${largeHeaderPopoverSectionRowStyle}
  text-decoration: none;
  padding: 15px 20px;
  margin-bottom: 5px;
`;

const LargeHeaderPopoverSectionRowImageContainer = styled(Flex)`
  margin-right: 9px;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

const LargeHeaderPopoverSectionRowTitle = styled(Span)`
  ${fontAvenirBold}
  display: block;
  color: ${COLORS.fillBlackBlack};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 5px;
`;

const LargeHeaderPopoverSectionRowDescription = styled(Paragraph)`
  color: ${COLORS.fillBlackGray};
  font-size: 14px;
  line-height: 20px;
`;

const largeHeaderPopoverSectionRowLinkStyle = css`
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;
  margin-right: 25px;

  &,
  &:visited {
    color: ${COLORS.fillBlackGray};
  }

  &:hover {
    text-decoration: none;
  }
`;

const LargeHeaderPopoverSectionRowLink = styled(Link)(largeHeaderPopoverSectionRowLinkStyle);

const LargeHeaderPopoverSectionRowAnchor = styled(Anchor)(largeHeaderPopoverSectionRowLinkStyle);

const MobileHeaderStickyContainer = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const MobileHeaderBackgroundContainer = styled(Flex)<{ isMobileHeaderOpen: boolean }>`
  position: relative;
  z-index: 200;
  background-color: ${COLORS.cornflower};
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 18px 20px;
  ${({ isMobileHeaderOpen }) =>
    isMobileHeaderOpen && `box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.13);`}
`;

const MobileHeaderMenuContainer = styled(Column)<{ isMobileHeaderOpen: boolean }>`
  box-sizing: border-box;
  background-color: ${COLORS.white};
  position: fixed;
  top: 64px;
  width: 100%;
  transition: height 0s linear 0.2s, opacity 0.2s ease-in-out;
  overflow: hidden;
  opacity: 0;
  height: 0;

  ${({ isMobileHeaderOpen }) =>
    isMobileHeaderOpen &&
    css`
      transition: height 0s, opacity 0.2s ease-in-out;
      overflow: scroll;
      opacity: 1;
      height: calc(100% - 64px);
    `}
`;

const MobileHeaderMenuPaddingContainer = styled(Column)`
  width: 100%;
  flex-grow: 1;
  background-color: ${COLORS.white};
  color: ${COLORS.fillBlackBlack};
  padding: 35px 30px 35px 30px;

  & > a,
  & > div {
    margin-top: 35px;
  }

  & > div:first-of-type {
    margin-top: 0;
  }

  & > div:last-of-type {
    margin-top: auto;
  }
`;

const MobileHeaderMenuButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  border: 0;
`;

const MobileHeaderMenuImage = styled(Img)`
  height: 24px;
  width: 24px;
`;

const mobileHeaderLinkStyle = css`
  display: flex;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const MobileHeaderDropdown = styled(Dropdown)`
  ${mobileHeaderLinkStyle}
  color: ${COLORS.fillBlackBlack};
`;

const MobileHeaderLink = styled(Link)`
  ${mobileHeaderLinkStyle}
  color: ${COLORS.fillBlackBlack};
`;

const MobileHeaderDropdownLink = styled(Link)`
  ${mobileHeaderLinkStyle}
  font-size: 14px;
  line-height: 20px;
  margin-top: 21px;
  color: ${COLORS.fillBlackGray};
`;

const MobileHeaderDropdownContainer = styled(Column)`
  padding-top: 6px;
  padding-left: 10px;
  width: 100%;
`;

const MobileHeaderMenuAnchorButton = styled(AnchorButton)`
  line-height: 20px;
  font-size: 14px;
  padding: 8px 36px 7px;
  width: 100%;
`;

const MobileHeaderMenuSalesAnchor = styled(Anchor)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid ${COLORS.veryLightBlue};
  background-color: ${COLORS.paleGrey};
  color: ${COLORS.fillBlackGray};
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  padding: 24.5px 0;
`;

const PageHeader: React.FC<{
  isHeaderVisible?: boolean;
  setOverflowVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isHeaderVisible = true, setOverflowVisible }) => {
  const [isMobileHeaderOpen, setMobileHeaderOpen] = useState(false);
  const [isVideoVisible, setVideoVisible] = useState(false);

  if (isHeaderVisible === false) {
    return null;
  }

  return (
    <>
      <Hidden lgUp>
        <MobileHeaderStickyContainer>
          <MobileHeaderBackgroundContainer isMobileHeaderOpen={isMobileHeaderOpen}>
            <HeaderLogoLink href={routes.homeRoute}>
              <Img src={logo} />
            </HeaderLogoLink>
            <If is={isMobileHeaderOpen}>
              <MobileHeaderMenuButton
                onClick={() => {
                  setMobileHeaderOpen(false);
                  setOverflowVisible(true);
                }}
              >
                <MobileHeaderMenuImage src={closeIcon} />
              </MobileHeaderMenuButton>
            </If>
            <If is={!isMobileHeaderOpen}>
              <MobileHeaderMenuButton
                onClick={() => {
                  setMobileHeaderOpen(true);
                  setOverflowVisible(false);
                }}
              >
                <MobileHeaderMenuImage src={hamburgerIcon} />
              </MobileHeaderMenuButton>
            </If>
          </MobileHeaderBackgroundContainer>
          <MobileHeaderMenuContainer isMobileHeaderOpen={isMobileHeaderOpen}>
            <MobileHeaderMenuPaddingContainer>
              <MobileHeaderDropdown>
                Why Upbound
                <MobileHeaderDropdownContainer>
                  <MobileHeaderDropdownLink
                    sx={{ mt: 0 }}
                    href={routes.whyUpboundUniversalCloudPlatformRoute}
                  >
                    The Universal Cloud Platform
                  </MobileHeaderDropdownLink>
                  <MobileHeaderDropdownLink href={routes.whyUpboundBeyondIacRoute}>
                    Beyond IaC with a Control Plane
                  </MobileHeaderDropdownLink>
                  <MobileHeaderDropdownLink href={routes.whyUpboundEmpowerRoute}>
                    Empower Platform Teams
                  </MobileHeaderDropdownLink>
                  <MobileHeaderDropdownLink href={routes.whyUpboundSelfServiceRoute}>
                    Provide Self Service Infrastructure
                  </MobileHeaderDropdownLink>
                </MobileHeaderDropdownContainer>
              </MobileHeaderDropdown>
              <MobileHeaderDropdown>
                Products
                <MobileHeaderDropdownContainer>
                  <MobileHeaderDropdownLink sx={{ mt: 0 }} href={routes.productsUbcRoute}>
                    Universal Cloud Platform
                  </MobileHeaderDropdownLink>
                  <MobileHeaderDropdownLink href={routes.productsUxpRoute}>
                    Universal Crossplane
                  </MobileHeaderDropdownLink>
                  <MobileHeaderDropdownLink href={routes.productsRegistryRoute}>
                    Upbound Registry
                  </MobileHeaderDropdownLink>
                </MobileHeaderDropdownContainer>
              </MobileHeaderDropdown>
              <MobileHeaderLink bold={true} href={routes.pricingRoute}>
                Plans & Pricing
              </MobileHeaderLink>
              <MobileHeaderLink bold={true} href={routes.partnersRoute}>
                Partners
              </MobileHeaderLink>
              <MobileHeaderLink bold={true} sx={{ mb: '100px' }} href={routes.aboutRoute}>
                About Us
              </MobileHeaderLink>
              <Column>
                <If is={isAuthenticated()}>
                  <MobileHeaderMenuAnchorButton
                    sx={{ mt: '10px' }}
                    href={routes.cloudLoginUrl}
                    btnType="blackOutline"
                  >
                    Console
                  </MobileHeaderMenuAnchorButton>
                </If>
                <If is={!isAuthenticated()}>
                  <MobileHeaderMenuAnchorButton
                    href={routes.cloudRegisterUrl}
                    btnType="cornflowerFill"
                  >
                    Try for Free
                  </MobileHeaderMenuAnchorButton>
                  <MobileHeaderMenuAnchorButton
                    sx={{ mt: '10px' }}
                    href={routes.cloudLoginUrl}
                    btnType="blackOutline"
                  >
                    Sign In
                  </MobileHeaderMenuAnchorButton>
                </If>
              </Column>
            </MobileHeaderMenuPaddingContainer>
            <MobileHeaderMenuSalesAnchor href={routes.contactSalesUrl}>
              Contact Sales for a Free Demo
            </MobileHeaderMenuSalesAnchor>
          </MobileHeaderMenuContainer>
        </MobileHeaderStickyContainer>
      </Hidden>
      <Hidden mdDown>
        <LargeHeaderContainer>
          <BannerContainer>
            <BannerSpan>
              🎉&nbsp;&nbsp;Announcing 100% cloud provider coverage!{' '}
              <BannerAnchor href="https://blog.upbound.io/cloud-service-coverage/">
                Read all about it
              </BannerAnchor>
            </BannerSpan>
          </BannerContainer>
          <LargeHeaderBackgroundContainer>
            <HeaderLogoLink href={routes.homeRoute}>
              <Box width={117}>
                <Image src={logo} alt="logo" layout="responsive" />
              </Box>
            </HeaderLogoLink>
            <LargeHeaderPopover positions={['bottom']} align="center">
              Why Upbound
              <LargeHeaderPopoverContainer sx={{ width: '870px' }}>
                <LargeHeaderPopoverSectionContainer
                  sx={{ width: '520px', p: '37px 24px 35px 40px' }}
                >
                  <LargeHeaderPopoverSectionTitle sx={{ mb: '9px', ml: '14px' }}>
                    Why Upbound
                  </LargeHeaderPopoverSectionTitle>
                  <LargeHeaderPopoverSectionLinkRowContainer
                    href={routes.whyUpboundUniversalCloudPlatformRoute}
                  >
                    <Flex sx={{ mb: '2px' }}>
                      <LargeHeaderPopoverSectionRowTitle>
                        The Univeral Cloud Platform
                      </LargeHeaderPopoverSectionRowTitle>
                      <Img src={chevronRight} height={12} sx={{ ml: 'auto' }} alt="right chevron" />
                    </Flex>
                    <LargeHeaderPopoverSectionRowDescription sx={{ maxWidth: '392px' }}>
                      Teams and tools must evolve as multi-cloud strategies become pervasive.
                    </LargeHeaderPopoverSectionRowDescription>
                  </LargeHeaderPopoverSectionLinkRowContainer>
                  <LargeHeaderPopoverSectionLinkRowContainer href={routes.whyUpboundBeyondIacRoute}>
                    <Flex sx={{ mb: '2px' }}>
                      <LargeHeaderPopoverSectionRowTitle>
                        Go Beyond IaC with Control Planes
                      </LargeHeaderPopoverSectionRowTitle>
                      <Img src={chevronRight} height={12} sx={{ ml: 'auto' }} alt="right chevron" />
                    </Flex>
                    <LargeHeaderPopoverSectionRowDescription sx={{ maxWidth: '392px' }}>
                      Modern infrastructure and applications requires modern tooling designed for
                      cloud native organizations.
                    </LargeHeaderPopoverSectionRowDescription>
                  </LargeHeaderPopoverSectionLinkRowContainer>
                  <LargeHeaderPopoverSectionLinkRowContainer href={routes.whyUpboundEmpowerRoute}>
                    <Flex sx={{ mb: '2px' }}>
                      <LargeHeaderPopoverSectionRowTitle>
                        Empower Platform Teams
                      </LargeHeaderPopoverSectionRowTitle>
                      <Img src={chevronRight} height={12} sx={{ ml: 'auto' }} alt="right chevron" />
                    </Flex>
                    <LargeHeaderPopoverSectionRowDescription sx={{ maxWidth: '392px' }}>
                      Standardize all of your workflows around the Kubernetes API
                    </LargeHeaderPopoverSectionRowDescription>
                  </LargeHeaderPopoverSectionLinkRowContainer>
                  <LargeHeaderPopoverSectionLinkRowContainer
                    href={routes.whyUpboundSelfServiceRoute}
                  >
                    <Flex sx={{ mb: '2px' }}>
                      <LargeHeaderPopoverSectionRowTitle>
                        Provide Self Service Infrastructure
                      </LargeHeaderPopoverSectionRowTitle>
                      <Img src={chevronRight} height={12} sx={{ ml: 'auto' }} alt="right chevron" />
                    </Flex>
                    <LargeHeaderPopoverSectionRowDescription sx={{ maxWidth: '392px' }}>
                      Transform how operators and developers collaborate with strong separation of
                      concerns and self service.
                    </LargeHeaderPopoverSectionRowDescription>
                  </LargeHeaderPopoverSectionLinkRowContainer>
                </LargeHeaderPopoverSectionContainer>
                <LargeHeaderPopoverSectionContainer
                  sx={{
                    width: '350px',
                    p: '36px 30px 50px 30px',
                    borderLeft: `1px solid ${COLORS.veryLightBlue}`,
                  }}
                >
                  <LargeHeaderPopoverSectionTitle sx={{ mb: '21px' }}>
                    Why Crossplane
                  </LargeHeaderPopoverSectionTitle>
                  <LargeHeaderPopoverSectionSubtitle sx={{ mb: '11px' }}>
                    Modern Control Management at Scale with Crossplane
                  </LargeHeaderPopoverSectionSubtitle>
                  <LargeHeaderPopoverSectionDescription sx={{ mb: '20px', width: '288px' }}>
                    Crossplanes control plane technology allows you to run your platform as
                    efficiently as the hyperscale cloud providers with the benefits of crossplane
                    managed control planes at scale.
                  </LargeHeaderPopoverSectionDescription>
                  <Box>
                    <LargeHeaderPopoverSectionButton
                      btnType="blackOutline"
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        setVideoVisible(true);
                        setOverflowVisible(false);
                      }}
                    >
                      <Span bold={true} sx={{ mr: '4px' }}>
                        Crossplane at the Crossroads
                      </Span>
                      <PlayCircle />
                    </LargeHeaderPopoverSectionButton>
                  </Box>
                </LargeHeaderPopoverSectionContainer>
              </LargeHeaderPopoverContainer>
            </LargeHeaderPopover>
            <LargeHeaderPopover positions={['bottom']} align="center">
              Products
              <LargeHeaderPopoverContainer>
                <LargeHeaderPopoverSectionContainer
                  sx={{ width: '560px', p: '40px 50px 50px 40px' }}
                >
                  <LargeHeaderPopoverSectionTitle sx={{ mb: '17px', ml: '10px' }}>
                    Products
                  </LargeHeaderPopoverSectionTitle>
                  <LargeHeaderPopoverSectionDescription sx={{ ml: '10px', mb: '12px' }}>
                    Everything you need to take full advantage of Kubernetes and adopt a control
                    plane centric approach to infrastructure management.
                  </LargeHeaderPopoverSectionDescription>
                  <LargeHeaderPopoverSectionRowContainer>
                    <LargeHeaderPopoverSectionRowImageContainer>
                      <Img
                        src={cloudPlatformIcon}
                        width={19}
                        height={20}
                        alt="Universal Cloud Platform Icon"
                      />
                    </LargeHeaderPopoverSectionRowImageContainer>
                    <Box>
                      <LargeHeaderPopoverSectionRowTitle>
                        Universal Cloud Platform
                      </LargeHeaderPopoverSectionRowTitle>
                      <LargeHeaderPopoverSectionRowDescription sx={{ mb: '15px' }}>
                        Build, run and manage a universal cloud platform using Crossplane.
                      </LargeHeaderPopoverSectionRowDescription>
                      <LargeHeaderPopoverSectionRowLink href={routes.productsUbcRoute}>
                        Learn More
                      </LargeHeaderPopoverSectionRowLink>
                    </Box>
                  </LargeHeaderPopoverSectionRowContainer>
                  <LargeHeaderPopoverSectionRowContainer>
                    <LargeHeaderPopoverSectionRowImageContainer>
                      <Img src={uxpIcon} width={25} height={25} alt="Universal Crossplane Icon" />
                    </LargeHeaderPopoverSectionRowImageContainer>
                    <Box>
                      <LargeHeaderPopoverSectionRowTitle>
                        Universal Crossplane
                      </LargeHeaderPopoverSectionRowTitle>
                      <LargeHeaderPopoverSectionRowDescription sx={{ mb: '15px' }}>
                        Upbounds official distribution of Open Source Crossplane.
                      </LargeHeaderPopoverSectionRowDescription>
                      <LargeHeaderPopoverSectionRowLink href={routes.productsUxpRoute}>
                        Learn More
                      </LargeHeaderPopoverSectionRowLink>
                      <LargeHeaderPopoverSectionRowAnchor href={routes.cloudUxpDocsUrl}>
                        UXP Documentation
                      </LargeHeaderPopoverSectionRowAnchor>
                    </Box>
                  </LargeHeaderPopoverSectionRowContainer>
                  <LargeHeaderPopoverSectionRowContainer>
                    <LargeHeaderPopoverSectionRowImageContainer>
                      <Img src={registryIcon} width={22} height={22} alt="Registry Icon" />
                    </LargeHeaderPopoverSectionRowImageContainer>
                    <Box>
                      <LargeHeaderPopoverSectionRowTitle>
                        Upbound Registry
                      </LargeHeaderPopoverSectionRowTitle>
                      <LargeHeaderPopoverSectionRowDescription sx={{ mb: '15px' }}>
                        Discover and share Crossplane providers and configurations.
                      </LargeHeaderPopoverSectionRowDescription>
                      <LargeHeaderPopoverSectionRowLink href={routes.productsRegistryRoute}>
                        Learn More
                      </LargeHeaderPopoverSectionRowLink>
                      <LargeHeaderPopoverSectionRowAnchor href={routes.cloudRegistryUrl}>
                        Browse Upbound Registry
                      </LargeHeaderPopoverSectionRowAnchor>
                    </Box>
                  </LargeHeaderPopoverSectionRowContainer>
                </LargeHeaderPopoverSectionContainer>
                <LargeHeaderPopoverSectionContainer
                  sx={{
                    width: '350px',
                    p: '40px 30px 50px 30px',
                    borderLeft: `1px solid ${COLORS.veryLightBlue}`,
                  }}
                >
                  <LargeHeaderPopoverSectionTitle sx={{ mb: '17px' }}>
                    Schedule a Free Demo
                  </LargeHeaderPopoverSectionTitle>
                  <LargeHeaderPopoverSectionDescription sx={{ mb: '20px' }}>
                    Have one of our Upbound specialists show you the power of the Universal Cloud
                    Platform and how it can be used to transform how you manage infrastructure.
                  </LargeHeaderPopoverSectionDescription>
                  <Box>
                    <LargeHeaderPopoverSectionButton
                      href={routes.contactSalesUrl}
                      btnType="blackOutline"
                    >
                      Schedule Demo
                    </LargeHeaderPopoverSectionButton>
                  </Box>
                </LargeHeaderPopoverSectionContainer>
              </LargeHeaderPopoverContainer>
            </LargeHeaderPopover>
            <LargeHeaderLink bold={true} href={routes.pricingRoute}>
              Plans & Pricing
            </LargeHeaderLink>
            <LargeHeaderLink bold={true} href={routes.partnersRoute}>
              Partners
            </LargeHeaderLink>
            <LargeHeaderLink bold={true} href={routes.aboutRoute}>
              About Us
            </LargeHeaderLink>
            <If is={isAuthenticated()}>
              <AnchorButton
                href={routes.cloudLoginUrl}
                btnType="whiteOutline"
                sx={{
                  p: '10px 18px',
                  lineHeight: '16px',
                  '&:hover': {
                    color: COLORS.cornflower,
                  },
                }}
              >
                Console
              </AnchorButton>
            </If>
            <If is={!isAuthenticated()}>
              <AnchorButton
                href={routes.cloudLoginUrl}
                btnType="whiteOutline"
                sx={{
                  p: '10px 18px',
                  lineHeight: '16px',
                  '&:hover': {
                    color: COLORS.cornflower,
                  },
                }}
              >
                Sign In
              </AnchorButton>
              <AnchorButton
                href={routes.cloudRegisterUrl}
                btnType="aquaMarineFill"
                hasShadow={true}
                sx={{
                  ml: { lg: '6px', xl: '15px' },
                  p: '10px 18px',
                  lineHeight: '16px',
                }}
              >
                Try for Free
              </AnchorButton>
            </If>
          </LargeHeaderBackgroundContainer>
        </LargeHeaderContainer>
      </Hidden>
      <VideoModal open={isVideoVisible} setOpen={setVideoVisible} videoId="S-Pvhcz4KKI" />
    </>
  );
};

export default PageHeader;
