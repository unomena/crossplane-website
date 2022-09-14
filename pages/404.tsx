/** @jsxRuntime classic /
/* @jsx jsx */

import React from 'react';

import { css, jsx } from '@emotion/react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { COLORS, fontAvenirRoman, MQ } from 'src/theme';

import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import PageProvider from 'src-new/components/PageProvider';
import { Wave } from 'src/components/Wave';

import { Anchor, Link } from 'src/elements/Anchor';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';

import * as routes from 'src/routes';

import chevronRight from 'public/chevron-right.svg';

const RelatedResourceContainer = styled(Box)`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  background-color: ${COLORS.white};
  border: solid 1px ${COLORS.veryLightBlue};
  border-bottom: 1px solid ${COLORS.fogTwo};
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  margin: 0px auto 16px;
  max-width: 960px;
  margin-left: 14px;
  margin-right: 14px;
  width: 100%;
  padding: 20px 15px;

  ${MQ.lg} {
    padding: 32px;
  }
`;

const relatedResourceStyle = css`
  ${fontAvenirRoman};
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.fillBlackBlack};
`;

const RelatedResourceLink = styled(Link)`
  ${relatedResourceStyle}
`;

const RelatedResourceAnchor = styled(Anchor)`
  ${relatedResourceStyle}
`;

const LargeHeader = styled(Header)`
  &&&& {
    font-size: 50px;

    ${MQ.lg} {
      font-size: 90px;
    }
  }
`;

const FourOhFour: React.FC = () => {
  return (
    <PageProvider displayTitle="Upbound - Page Not Found">
      <Box textAlign="center" mx="auto" px="30px" pt="180px" maxWidth="900px">
        <LargeHeader variant="h1" bold={true} color="white" sx={{ mb: '30px' }}>
          404
        </LargeHeader>
        <Header variant="h1" bold={true} color="white" sx={{ mb: '30px' }}>
          Sorry, we can’t find the page you’re looking for…
        </Header>
        <Header variant="h6" color="white" sx={{ mb: '25px' }}>
          Feel free to go <Link href="/">back to the homepage</Link> or check out these helpful
          links.
        </Header>
      </Box>
      <Box px="30px" pt="100px" textAlign="center" position="relative" zIndex={20}>
        <ContactTileRowContainer>
          <ContactTile type="email">
            Contact one of our team specialists and they can point you in the right direction.
          </ContactTile>
          <ContactTile type="slack">
            Contact us with any questions you have on the Crossplane Slack channel.
          </ContactTile>
        </ContactTileRowContainer>
      </Box>
      <Box mt="-190px">
        <Wave type="elephant" />
      </Box>
      <Box
        bgcolor={COLORS.elephant}
        sx={{
          pb: { _: 10, lg: 32 },
        }}
      >
        <Box textAlign="center" mx="auto" px="30px" pt="50px" mb="100px" maxWidth="900px">
          <Header variant="h6" color="white">
            You can also visit the Upbound{' '}
            <Link href={routes.faqRoute}>Frequently Asked Questions</Link> page for answers to some
            of the most common questions our team is asked.
          </Header>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px="30px"
        >
          <Header variant="h4" bold={true} color="white" sx={{ mb: '14px' }}>
            Related Resources
          </Header>
          <Header variant="h6" color="white" sx={{ mb: '50px' }}>
            Still need more information? We’ve curated some related resources that may help you
            learn more.
          </Header>
          <RelatedResourceContainer>
            <RelatedResourceLink href={routes.faqRoute}>
              <Header variant="h5" color="fillBlackBlack" sx={{ mr: '25px' }}>
                Frequently Asked Questions
              </Header>
              <Img src={chevronRight} alt="right arrow" width={7} sx={{ ml: 'auto' }} />
            </RelatedResourceLink>
          </RelatedResourceContainer>
          <RelatedResourceContainer>
            <RelatedResourceAnchor href={routes.upboundGreenhouseUrl}>
              <Header variant="h5" color="fillBlackBlack" sx={{ mr: '25px' }}>
                Open Positions at Upbound
              </Header>
              <Img src={chevronRight} alt="right arrow" width={7} sx={{ ml: 'auto' }} />
            </RelatedResourceAnchor>
          </RelatedResourceContainer>
          <RelatedResourceContainer>
            <RelatedResourceLink href={routes.partnersRoute}>
              <Header variant="h5" color="fillBlackBlack" sx={{ mr: '25px' }}>
                Explore Partner Programs
              </Header>
              <Img src={chevronRight} alt="right arrow" width={7} sx={{ ml: 'auto' }} />
            </RelatedResourceLink>
          </RelatedResourceContainer>
          <RelatedResourceContainer>
            <RelatedResourceAnchor href={routes.upboundDocsUrl}>
              <Header variant="h5" color="fillBlackBlack" sx={{ mr: '25px' }}>
                Documentation
              </Header>
              <Img src={chevronRight} alt="right arrow" width={7} sx={{ ml: 'auto' }} />
            </RelatedResourceAnchor>
          </RelatedResourceContainer>
          <RelatedResourceContainer>
            <RelatedResourceAnchor href={routes.cloudRegistryUrl}>
              <Header variant="h5" color="fillBlackBlack" sx={{ mr: '25px' }}>
                Browse Upbound Registry
              </Header>
              <Img src={chevronRight} alt="right arrow" width={7} sx={{ ml: 'auto' }} />
            </RelatedResourceAnchor>
          </RelatedResourceContainer>
          <RelatedResourceContainer>
            <RelatedResourceAnchor href={routes.accountsRegisterUrl}>
              <Header variant="h5" color="fillBlackBlack" sx={{ mr: '25px' }}>
                Try Upbound for Free
              </Header>
              <Img src={chevronRight} alt="right arrow" width={7} sx={{ ml: 'auto' }} />
            </RelatedResourceAnchor>
          </RelatedResourceContainer>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default FourOhFour;
