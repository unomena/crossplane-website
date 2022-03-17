/** @jsxRuntime classic /
/* @jsx jsx */

import React, { useState } from 'react';

import { css, jsx } from '@emotion/react';
import { Box, Hidden } from '@mui/material';
import { styled } from '@mui/system';
import { COLORS, fontAvenirBold, fontAvenirRoman, MQ } from 'src/theme';

import * as routes from '../routes';

import { Anchor, Link } from 'src/elements/Anchor';
import { Button } from 'src/elements/Button';
import { If } from 'src/elements/If';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';
import { Wave } from 'src/components/Wave';

import cncfIcon from 'public/cncf-icon.png';
import githubLogo from 'public/github.svg';
import linkedinLogo from 'public/linkedin.svg';
import logo from 'public/logo-white.svg';
import twitterLogo from 'public/twitter.svg';
import youtubeLogo from 'public/youtube.svg';

const Column = styled(Box)`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

const FooterMarginContainer = styled(Box)`
  position: relative;
  margin-top: 25px;

  ${MQ.md} {
    margin-top: 100px;
  }
`;

const FooterBackgroundContainer = styled(Box)`
  background-color: ${COLORS.darkBlueGreyTwo};
`;

const FooterCareersPill = styled(Box)`
  ${fontAvenirBold}
  display: flex;
  border-radius: 40px;
  background-color: ${COLORS.softGreen};
  color: ${COLORS.lightGreen};
  min-width: 86px;
  padding: 4px 10px;
  font-size: 12px;
  line-height: 20px;
  margin-left: 4px;
`;

const LargeFooterWidthContainer = styled(Column)`
  padding: 50px 140px 78px 140px;
  margin: 0 auto;
  max-width: 1440px;
`;

const LargeFooterSalesContainer = styled(Box)`
  display: flex;
`;

const LargeFooterSalesSpan = styled(Span)`
  ${fontAvenirBold}
  color: ${COLORS.white};
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.2px;
  width: 100%;
  margin-right: auto;
  flex-grow: 0;
  min-width: 364px;
  max-width: 490px;
`;

const LargeFooterSalesEmailWidthContainer = styled(Box)`
  width: 100%;
  height: 100%;
`;

const LargeFooterSalesEmailMarginContainer = styled(LargeFooterSalesEmailWidthContainer)`
  margin-left: 100px;
  margin-top: 39px;

  ${MQ.lg} {
    min-height: 129px;
  }
`;

const LargeFooterSalesEmailForm = styled('form')`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 0;
  height: 100%;
  margin-bottom: 25px;
`;

const LargeFooterSalesEmailInput = styled('input')`
  ${fontAvenirRoman}
  padding: 14px 20px 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  color: ${COLORS.fillBlackGray};
  border: 0;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  display: block;
  box-sizing: border-box;
`;

const LargeFooterSalesEmailButton = styled(Button)`
  box-sizing: border-box;
  font-size: 16px;
  height: 100%;
  padding: 12px 20px;
  margin-left: 21px;
  width: 149px;
  flex-shrink: 0;
`;

const LargeFooterSalesEmailSpan = styled(Span)`
  color: ${COLORS.fillBlackGray};
  line-height: 28px;
  font-size: 16px;
  width: 100%;
`;

const LargeFooterLinkColumnsContainer = styled(Box)`
  display: flex;
  border-top: 1px solid ${COLORS.darkBlue1A3245};
  margin-top: 100px;
  margin-bottom: 70px;
  padding-top: 90px;
  width: 100%;
`;

const LargeFooterLogoAndSocialsContainer = styled(Column)`
  width: 240px;
  margin-right: 52px;
`;

const LargeFooterLinkColumnContainer = styled(Column)`
  margin-right: 30px;
  color: ${COLORS.blueyGrey};
  width: 165px;

  &:last-of-type {
    margin-right: 0;
  }

  & > a:last-of-type {
    margin-bottom: 0;
  }
`;

const LargeFooterLinksTitle = styled(Span)`
  ${fontAvenirBold}
  font-size: 18px;
  color: ${COLORS.fillBlackGray};
  margin-bottom: 28px;
`;

const largeFooterLinkStyle = css`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  margin-bottom: 25px;

  &:hover {
    color: ${COLORS.white};
  }
`;

const LargeFooterLink = styled(Link)(largeFooterLinkStyle);

const LargeFooterAnchor = styled(Anchor)(largeFooterLinkStyle);

const LargeFooterSocialAnchor = styled(Anchor)`
  ${largeFooterLinkStyle}
  margin-bottom: 0;

  &:hover {
    opacity: 0.7;
  }
`;

const LargeFooterLogoLink = styled(Link)`
  display: flex;
  margin-bottom: 23px;
`;

const LargeFooterCopyrightParagraph = styled(Paragraph)`
  color: ${COLORS.fillBlackGray};
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const LargeFooterSocialsMarginContainer = styled(Box)`
  display: flex;
`;

const LargeFooterSocialsContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const LargeFooterCNCFContainer = styled(Column)`
  align-items: center;
`;

const LargeFooterCNCFSpan = styled(Span)`
  color: ${COLORS.fillBlackGray};
  font-size: 16px;
  text-align: center;
`;

const MobileFooterWidthContainer = styled(Column)`
  padding: 0 24px 60px 24px;
  margin: 0 auto;

  ${MQ.lg} {
    padding: 50px 140px 78px 140px;
    margin: 0 auto;
    max-width: 1440px;
  }
`;

const MobileFooterSalesContainer = styled(Column)`
  margin-bottom: 25px;

  ${MQ.lg} {
    flex-direction: row;
  }
`;

const MobileFooterSalesSpan = styled(Span)`
  ${fontAvenirBold}
  color: ${COLORS.white};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  flex-grow: 0;
  width: 100%;
  margin: 0 auto 40px auto;
  max-width: 490px;

  ${MQ.sm} {
    font-size: 36px;
    line-height: 48px;
    min-width: 364px;
  }

  ${MQ.lg} {
    margin: 0 auto 0 0;
  }
`;

const MobileFooterSalesFormContainer = styled(Box)`
  width: 100%;
  height: 100%;
  max-width: 490px;
  margin: 0 auto 0 auto;
  min-height: 193px;

  ${MQ.lg} {
    max-width: unset;
    margin: 39px 0 0 100px;
  }
`;

const MobileFooterSalesEmailForm = styled('form')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  height: 100%;
`;

const MobileFooterSalesEmailInput = styled('input')`
  ${fontAvenirRoman}
  padding: 14px 20px 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  color: ${COLORS.fillBlackGray};
  border: 0;
  flex-grow: 1;
  width: auto;
  height: 100%;
  display: block;
  box-sizing: border-box;
  margin-bottom: 12px;

  ${MQ.sm} {
    margin-bottom: 21px;
  }
`;

const MobileFooterSalesEmailButton = styled(Button)`
  box-sizing: border-box;
  font-size: 16px;
  height: 100%;
  padding: 12px 20px;
  width: 100%;
  margin-bottom: 20px;
`;

const MobileFooterSalesEmailSpan = styled(Span)`
  color: ${COLORS.fillBlackGray};
  width: 100%;
  font-size: 14px;
  line-height: 25px;

  ${MQ.sm} {
    font-size: 16px;
    line-height: 28px;
  }
`;

const MobileFooterLinkColumnsContainer = styled(Box)`
  display: flex;
  border-top: 1px solid ${COLORS.darkBlue1A3245};
  width: 100%;
  flex-wrap: wrap;
  margin-top: 60px;
  padding: 30px 20px 0 20px;

  ${MQ.lg} {
    margin-top: 100px;
    padding: 90px 0 0 0;
  }
`;

const MobileFooterLogoAndSocialsContainer = styled(Column)`
  width: 100%;
  max-width: 490px;
  margin: 60px auto 0 auto;

  ${MQ.md} {
    max-width: unset;
  }
`;

const MobileFooterLinkColumnsWidthContainer = styled(Column)`
  width: 100%;
  max-width: 490px;
  margin: 0 auto;

  ${MQ.md} {
    flex-direction: row;
    max-width: unset;
    margin: unset;
  }
`;

const MobileFooterLinkColumnContainer = styled(Column)`
  color: ${COLORS.blueyGrey};
  width: 100%;
  margin: 0 0 40px 0;

  & > a:last-of-type {
    margin-bottom: 0;
  }

  ${MQ.md} {
    margin: 0 30px 0 0;
  }

  &:last-of-type {
    margin: 0;
  }
`;

const MobileFooterColumnSpan = styled(Span)`
  ${fontAvenirBold}
  font-size: 16px;
  color: ${COLORS.fillBlackGray};
  margin-bottom: 18px;

  ${MQ.sm} {
    font-size: 18px;
    margin-bottom: 28px;
  }
`;

const mobileFooterLinkStyle = css`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 15px;

  &:hover {
    color: ${COLORS.white};
  }

  ${MQ.sm} {
    font-size: 16px;
  }
`;

const MobileFooterColumnLink = styled(Link)`
  ${mobileFooterLinkStyle}

  ${MQ.sm} {
    margin-bottom: 25px;
  }
`;

const MobileFooterColumnAnchor = styled(Anchor)`
  ${mobileFooterLinkStyle}

  ${MQ.sm} {
    margin-bottom: 25px;
  }
`;

const MobileFooterSocialAnchor = styled(Anchor)`
  ${mobileFooterLinkStyle}
  margin-bottom: 0;

  &:hover {
    opacity: 0.7;
  }
`;

const MobileFooterLogoLink = styled(Link)`
  display: flex;
  margin-bottom: 21px;

  ${MQ.md} {
    margin-bottom: 23px;
  }
`;

// const MobileFooterLogoImage = styled(Img)`
//   width: 120px;
// `;

const MobileFooterCopyrightParagraph = styled(Paragraph)`
  color: ${COLORS.fillBlackGray};
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 20px;

  ${MQ.sm} {
    font-size: 16px;
    line-height: 28px;
    font-weight: 600;
  }
`;

const MobileFooterSocialsContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const MobileFooterCNCFBorderContainer = styled(Box)`
  margin-top: 50px;
  border-top: 1px solid ${COLORS.darkBlue1A3245};
  padding: 50px 20px 0 20px;

  ${MQ.lg} {
    padding: 50px 0 0 0;
  }
`;

const MobileFooterCNCFColumn = styled(Column)`
  margin: 0 auto;
  max-width: 490px;

  ${MQ.md} {
    max-width: unset;
  }
`;

// const MobileFooterCNCFImage = styled(Img)`
//   width: 233px;
//   height: 37px;
//   margin-bottom: 26px;
// `;

const MobileFooterCNCFSpan = styled(Span)`
  color: ${COLORS.fillBlackGray};
  font-size: 14px;
  line-height: 28px;

  ${MQ.sm} {
    font-size: 16px;
    line-height: 30px;
  }
`;

const PageFooter: React.FC<{
  isFooterVisible?: boolean;
}> = ({ isFooterVisible = true }) => {
  const [isFormDisabled, setFormDisabled] = useState(false);
  const [isFormErrored, setFormErrored] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormDisabled(true);

    const target = event.target as HTMLFormElement & { email: { value: string } };

    const response = await fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/5557732/79bed6c5-631a-4dcb-a9bf-4209479b20c8',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          fields: [
            {
              name: 'email',
              value: target.email.value,
            },
          ],
        }),
      }
    );

    const json = await response.json();

    if ('inlineMessage' in json) {
      setFormSubmitted(true);
      return;
    }

    setFormErrored(true);
  };

  if (isFooterVisible === false) {
    return null;
  }

  return (
    <FooterMarginContainer>
      <Wave type="dark" />
      <FooterBackgroundContainer>
        <Hidden lgUp>
          <MobileFooterWidthContainer>
            <MobileFooterSalesContainer>
              <MobileFooterSalesSpan>
                Want to get started?
                <br />
                Contact us directly and we’ll help you on your way.
              </MobileFooterSalesSpan>
              <MobileFooterSalesFormContainer>
                <If is={!isFormSubmitted && !isFormErrored}>
                  <MobileFooterSalesEmailForm onSubmit={handleSubmitEmail}>
                    <MobileFooterSalesEmailInput
                      placeholder="Your Email"
                      name="email"
                      type="email"
                    />
                    <MobileFooterSalesEmailButton
                      btnType="cornflowerFill"
                      bold={true}
                      disabled={isFormDisabled}
                    >
                      Contact Sales
                    </MobileFooterSalesEmailButton>
                    <MobileFooterSalesEmailSpan>
                      Get a response tomorrow if you submit by 9pm today. If received after 9pm, you
                      will get a response the following day.
                    </MobileFooterSalesEmailSpan>
                  </MobileFooterSalesEmailForm>
                </If>
                <If is={isFormSubmitted && !isFormErrored}>
                  <MobileFooterSalesEmailSpan>
                    Thanks for reaching out to the Upbound sales team, we appreciate your interest.
                    We will respond to you shortly.
                  </MobileFooterSalesEmailSpan>
                </If>
                <If is={!isFormSubmitted && isFormErrored}>
                  <MobileFooterSalesEmailSpan>
                    There was a problem submitting your email address. Please try again.
                  </MobileFooterSalesEmailSpan>
                </If>
              </MobileFooterSalesFormContainer>
            </MobileFooterSalesContainer>
            <MobileFooterLinkColumnsContainer>
              <MobileFooterLinkColumnsWidthContainer>
                <MobileFooterLinkColumnContainer>
                  <MobileFooterColumnSpan>Product</MobileFooterColumnSpan>
                  <MobileFooterColumnLink href={routes.whyUpboundUniversalCloudPlatformRoute}>
                    Why Upbound
                  </MobileFooterColumnLink>
                  <MobileFooterColumnLink href={routes.productsUbcRoute}>
                    Upbound Cloud
                  </MobileFooterColumnLink>
                  <MobileFooterColumnLink href={routes.productsUxpRoute}>
                    Universal Crossplane
                  </MobileFooterColumnLink>
                  <MobileFooterColumnLink href={routes.productsRegistryRoute}>
                    Upbound Registry
                  </MobileFooterColumnLink>
                  <MobileFooterColumnAnchor href={routes.contactSalesUrl}>
                    Request Demo
                  </MobileFooterColumnAnchor>
                  <MobileFooterColumnLink href={routes.pricingRoute}>
                    Plans & Pricing
                  </MobileFooterColumnLink>
                  <MobileFooterColumnLink href={routes.partnersRoute}>
                    Partner Program
                  </MobileFooterColumnLink>
                </MobileFooterLinkColumnContainer>
                <MobileFooterLinkColumnContainer>
                  <MobileFooterColumnSpan>Learn</MobileFooterColumnSpan>
                  <MobileFooterColumnAnchor href={routes.cloudDocsUrl}>
                    Documentation
                  </MobileFooterColumnAnchor>
                  <MobileFooterColumnLink href={routes.faqRoute}>FAQ's</MobileFooterColumnLink>
                  <MobileFooterColumnAnchor href={routes.upboundStatusUrl}>
                    System Status
                  </MobileFooterColumnAnchor>
                </MobileFooterLinkColumnContainer>
                <MobileFooterLinkColumnContainer>
                  <MobileFooterColumnSpan>Company</MobileFooterColumnSpan>
                  <MobileFooterColumnLink href={routes.aboutRoute}>About Us</MobileFooterColumnLink>
                  <MobileFooterColumnAnchor href={routes.upboundGreenhouseUrl}>
                    Careers
                    <FooterCareersPill>Now Hiring</FooterCareersPill>
                  </MobileFooterColumnAnchor>
                  <MobileFooterColumnAnchor href={routes.upboundBlogUrl}>
                    Blog
                  </MobileFooterColumnAnchor>
                  <MobileFooterColumnAnchor href={routes.contactSalesUrl}>
                    Contact Us
                  </MobileFooterColumnAnchor>
                </MobileFooterLinkColumnContainer>
                <MobileFooterLinkColumnContainer>
                  <MobileFooterColumnSpan>More</MobileFooterColumnSpan>
                  <MobileFooterColumnLink href={routes.tncRoute}>
                    Terms & Conditions
                  </MobileFooterColumnLink>
                  <MobileFooterColumnLink href={routes.privacyRoute}>
                    Privacy Policy
                  </MobileFooterColumnLink>
                  <MobileFooterColumnAnchor href={routes.sitemapRoute}>
                    Sitemap
                  </MobileFooterColumnAnchor>
                </MobileFooterLinkColumnContainer>
              </MobileFooterLinkColumnsWidthContainer>
              <MobileFooterLogoAndSocialsContainer>
                <MobileFooterLogoLink href={routes.homeRoute}>
                  <Img src={logo} alt="logo" width={120} />
                </MobileFooterLogoLink>
                <MobileFooterCopyrightParagraph>
                  Copyright © 2022.
                  <br />
                  Crafted with love from our globally distributed team.
                </MobileFooterCopyrightParagraph>
                <MobileFooterSocialsContainer>
                  <MobileFooterSocialAnchor href={routes.twitterUrl} sx={{ mr: '20px' }}>
                    <Img src={twitterLogo} alt="Twitter" height="15px" width="18px" />
                  </MobileFooterSocialAnchor>
                  <MobileFooterSocialAnchor href={routes.githubUrl} sx={{ mr: '20px' }}>
                    <Img src={githubLogo} alt="GitHub" height="18px" width="18px" />
                  </MobileFooterSocialAnchor>
                  <MobileFooterSocialAnchor href={routes.linkedinUrl} sx={{ mr: '20px' }}>
                    <Img src={linkedinLogo} alt="LinkedIn" height="16px" width="16px" />
                  </MobileFooterSocialAnchor>
                  <MobileFooterSocialAnchor href={routes.youtubeUrl}>
                    <Img src={youtubeLogo} alt="YouTube" height="13px" width="19px" />
                  </MobileFooterSocialAnchor>
                </MobileFooterSocialsContainer>
              </MobileFooterLogoAndSocialsContainer>
            </MobileFooterLinkColumnsContainer>
            <MobileFooterCNCFBorderContainer>
              <MobileFooterCNCFColumn>
                <Anchor href={routes.cncfUrl}>
                  <Img
                    src={cncfIcon}
                    alt="cncfIcon"
                    sx={{ width: '233px', height: '37px', marginBottom: '32px' }}
                  />
                </Anchor>
                <MobileFooterCNCFSpan>
                  Upbound is an active contributor to Crossplane and the Cloud Native Computing
                  Foundation
                </MobileFooterCNCFSpan>
              </MobileFooterCNCFColumn>
            </MobileFooterCNCFBorderContainer>
          </MobileFooterWidthContainer>
        </Hidden>
        <Hidden lgDown>
          <LargeFooterWidthContainer>
            <LargeFooterSalesContainer>
              <LargeFooterSalesSpan>
                Want to get started?
                <br />
                Contact us directly and we’ll help you on your way.
              </LargeFooterSalesSpan>
              <LargeFooterSalesEmailMarginContainer>
                <If is={!isFormSubmitted && !isFormErrored}>
                  <LargeFooterSalesEmailWidthContainer>
                    <LargeFooterSalesEmailForm onSubmit={handleSubmitEmail}>
                      <LargeFooterSalesEmailInput
                        placeholder="Your Email"
                        name="email"
                        type="email"
                      />
                      <LargeFooterSalesEmailButton
                        btnType="cornflowerFill"
                        bold={true}
                        disabled={isFormDisabled}
                      >
                        Contact Sales
                      </LargeFooterSalesEmailButton>
                    </LargeFooterSalesEmailForm>
                    <LargeFooterSalesEmailSpan>
                      Get a response tomorrow if you submit by 9pm today. If received after 9pm, you
                      will get a response the following day.
                    </LargeFooterSalesEmailSpan>
                  </LargeFooterSalesEmailWidthContainer>
                </If>
                <If is={isFormSubmitted && !isFormErrored}>
                  <LargeFooterSalesEmailSpan>
                    Thanks for reaching out to the Upbound sales team, we appreciate your interest.
                    We will respond to you shortly.
                  </LargeFooterSalesEmailSpan>
                </If>
                <If is={!isFormSubmitted && isFormErrored}>
                  <LargeFooterSalesEmailSpan>
                    There was a problem submitting your email address. Please try again.
                  </LargeFooterSalesEmailSpan>
                </If>
              </LargeFooterSalesEmailMarginContainer>
            </LargeFooterSalesContainer>
            <LargeFooterLinkColumnsContainer>
              <LargeFooterLogoAndSocialsContainer>
                <LargeFooterLogoLink href={routes.homeRoute}>
                  <Img src={logo} alt="logo" width={120} />
                </LargeFooterLogoLink>
                <LargeFooterCopyrightParagraph>
                  Copyright © 2022.
                  <br />
                  Crafted with love from our globally distributed team.
                </LargeFooterCopyrightParagraph>
                <LargeFooterSocialsMarginContainer>
                  <Box>
                    <LargeFooterSocialsContainer>
                      <LargeFooterSocialAnchor href={routes.twitterUrl} sx={{ mr: '20px' }}>
                        <Img src={twitterLogo} alt="Twitter" width={18} />
                      </LargeFooterSocialAnchor>
                      <LargeFooterSocialAnchor href={routes.githubUrl} sx={{ mr: '20px' }}>
                        <Img src={githubLogo} alt="GitHub" width={18} />
                      </LargeFooterSocialAnchor>
                      <LargeFooterSocialAnchor href={routes.linkedinUrl} sx={{ mr: '20px' }}>
                        <Img src={linkedinLogo} alt="LinkedIn" width={16} />
                      </LargeFooterSocialAnchor>
                      <LargeFooterSocialAnchor href={routes.youtubeUrl}>
                        <Img src={youtubeLogo} alt="YouTube" width={19} />
                      </LargeFooterSocialAnchor>
                    </LargeFooterSocialsContainer>
                  </Box>
                </LargeFooterSocialsMarginContainer>
              </LargeFooterLogoAndSocialsContainer>
              <LargeFooterLinkColumnContainer>
                <LargeFooterLinksTitle>Product</LargeFooterLinksTitle>
                <LargeFooterLink href={routes.productsUbcRoute}>Upbound Cloud</LargeFooterLink>
                <LargeFooterLink href={routes.productsUxpRoute}>
                  Universal Crossplane
                </LargeFooterLink>
                <LargeFooterLink href={routes.productsRegistryRoute}>
                  Upbound Registry
                </LargeFooterLink>
                <LargeFooterAnchor href={routes.contactSalesUrl}>Request Demo</LargeFooterAnchor>
                <LargeFooterLink href={routes.pricingRoute}>Plans & Pricing</LargeFooterLink>
                <LargeFooterLink href={routes.partnersRoute}>Partner Program</LargeFooterLink>
              </LargeFooterLinkColumnContainer>
              <LargeFooterLinkColumnContainer>
                <LargeFooterLinksTitle>Learn</LargeFooterLinksTitle>
                <LargeFooterAnchor href={routes.cloudDocsUrl}>Documentation</LargeFooterAnchor>
                <LargeFooterLink href={routes.faqRoute}>FAQ's</LargeFooterLink>
                <LargeFooterAnchor href={routes.upboundStatusUrl}>System Status</LargeFooterAnchor>
              </LargeFooterLinkColumnContainer>
              <LargeFooterLinkColumnContainer>
                <LargeFooterLinksTitle>Company</LargeFooterLinksTitle>
                <LargeFooterLink href={routes.aboutRoute}>About Us</LargeFooterLink>
                <LargeFooterAnchor href={routes.upboundGreenhouseUrl}>
                  Careers
                  <FooterCareersPill>Now Hiring</FooterCareersPill>
                </LargeFooterAnchor>
                <LargeFooterAnchor href={routes.upboundBlogUrl}>Blog</LargeFooterAnchor>
                <LargeFooterAnchor href={routes.contactSalesUrl}>Contact Us</LargeFooterAnchor>
              </LargeFooterLinkColumnContainer>
              <LargeFooterLinkColumnContainer>
                <LargeFooterLinksTitle>More</LargeFooterLinksTitle>
                <LargeFooterLink href={routes.tncRoute}>Terms & Conditions</LargeFooterLink>
                <LargeFooterLink href={routes.privacyRoute}>Privacy Policy</LargeFooterLink>
                <LargeFooterAnchor href={routes.sitemapRoute}>Sitemap</LargeFooterAnchor>
              </LargeFooterLinkColumnContainer>
            </LargeFooterLinkColumnsContainer>
            <LargeFooterCNCFContainer>
              <Anchor href={routes.cncfUrl}>
                <Img
                  src={cncfIcon}
                  alt="cncfIcon"
                  sx={{ width: '233px', height: '37px', marginBottom: '32px' }}
                />
              </Anchor>
              <LargeFooterCNCFSpan>
                Upbound is an active contributor to Crossplane and the Cloud Native Computing
                Foundation
              </LargeFooterCNCFSpan>
            </LargeFooterCNCFContainer>
          </LargeFooterWidthContainer>
        </Hidden>
      </FooterBackgroundContainer>
    </FooterMarginContainer>
  );
};

export default PageFooter;
