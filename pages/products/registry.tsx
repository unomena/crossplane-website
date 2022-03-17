import React from 'react';

import { styled } from '@mui/system';
import { COLORS, MQ } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import { JoinUs } from 'src/components/JoinUs';
import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';

import { Anchor, Link } from 'src/elements/Anchor';
import { AnchorButton } from 'src/elements/Button';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import * as routes from 'src/routes';

import filledOval from 'public/filled-oval.svg';
import heroOval from 'public/hero-oval.svg';
import feature1Image from 'public/registry/feature1.svg';
import feature1MobileImage from 'public/registry/feature1-mobile.svg';
import feature2Image from 'public/registry/feature2.svg';
import feature2MobileImage from 'public/registry/feature2-mobile.svg';
import feature3Image from 'public/registry/feature3.svg';
import feature3MobileImage from 'public/registry/feature3-mobile.svg';
// import hero1xImage from 'public/registry/hero.png';
// import hero2xImage from 'public/registry/hero@2x.png';
import hero3xImage from 'public/registry/hero@3x.png';
// import heroMobile1xImage from 'public/registry/hero-mobile.png';
// import heroMobile2xImage from 'public/registry/hero-mobile@2x.png';
import heroMobile3xImage from 'public/registry/hero-mobile@3x.png';
import iconConfigs from 'public/registry/icon-configs.svg';
import iconProviders from 'public/registry/icon-providers.svg';
import ArrowRight from 'src/svg/ArrowRight';

const BackgroundOval = styled('img')<{ left?: string; right?: string }>`
  position: absolute;
  top: 0;
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  z-index: -1;
`;

const Hero = styled(Box)`
  background-color: ${COLORS.cornflower};

  ${MQ.lg} {
    background-image: url(${heroOval.src});
    background-repeat: no-repeat;
    background-position: top 55px right;
  }
`;

const displayTitle = 'Upbound Registry';
const metaDescription =
  'The Upbound Registry is a community collection of Crossplane Providers and Configurations. Easily discover or ' +
  'share your Crossplane work with the community or privately with your infrastructure and development teams.';

const RegistryProduct = () => {
  return (
    <PageProvider displayTitle={displayTitle} metaDescription={metaDescription}>
      <Hero>
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          px="30px"
          alignItems="center"
          flexDirection={{ _: 'column', lg: 'row' }}
        >
          <Box
            flex={6}
            mr={{ _: '0', lg: '100px' }}
            mt={{ _: '20px', lg: '100px' }}
            textAlign={{ _: 'center', lg: 'left' }}
            display={{ _: 'flex', lg: 'block' }}
            flexDirection="column"
            alignItems="center"
          >
            <Header variant="h2" bold={true} color="white" sx={{ mt: '25px' }}>
              Everything Needed For Your Universal Cloud Platform
            </Header>
            <Header variant="h6" color="white" sx={{ mt: '20px', mb: '40px' }}>
              Discover and publish new Crossplane Providers and Configurations on Upbound Registry.
            </Header>
            <Box
              display="flex"
              flexDirection={{ _: 'column', md: 'row' }}
              alignItems="center"
              mb="40px"
              color="white"
            >
              <AnchorButton
                href={routes.cloudRegisterUrl}
                btnType="aquaMarineFill"
                bold={true}
                hasShadow={true}
                sx={{
                  mr: { _: '0', md: '15px' },
                  mb: { _: '16px', md: '0' },
                }}
              >
                Try Upbound for Free
              </AnchorButton>
              <Anchor href={routes.cloudRegistryUrl} sx={{ fontSize: '14px' }}>
                <Span bold={true} sx={{ mr: '5px' }}>
                  Browse the Upbound Registry
                </Span>
                <Span sx={{ position: 'relative', top: '2px' }}>
                  <ArrowRight fill={COLORS.white} width="13px" height="12px" />
                </Span>
              </Anchor>
            </Box>
          </Box>
          <Box
            flex={7}
            mt={{ _: '0', lg: '65px' }}
            mb={{ _: '-165px', lg: '0' }}
            width="100%"
            position="relative"
            zIndex={20}
          >
            <Hidden lgUp>
              <Img
                src={heroMobile3xImage}
                priority
                // srcSet={`${heroMobile1xImage} 1x, ${heroMobile2xImage} 2x, ${heroMobile3xImage} 3x`}
                alt="registry screenshot"
                width="100%"
              />
            </Hidden>
            <Hidden lgDown>
              <Img
                src={hero3xImage}
                priority
                // srcSet={`${hero1xImage} 1x, ${hero2xImage} 2x, ${hero3xImage} 3x`}
                alt="registry screenshot"
                width="100%"
              />
            </Hidden>
          </Box>
        </Box>
        <Wave type="white" />
      </Hero>
      <Box px="30px" textAlign={{ _: 'center', lg: 'left' }} overflow="hidden">
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          flexDirection={{ _: 'column', lg: 'row' }}
          mt="50px"
        >
          <Box flex="1" pt="20px" mb="50px">
            <Header
              variant="h3"
              bold={true}
              color="fillBlackBlack"
              sx={{ mr: { _: '0', md: '80px' } }}
            >
              Discover and Publish Community Resources for Crossplane
            </Header>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ _: 'center', lg: 'flex-start' }}
            flex="0 1 300px"
            mr={{ _: '0', md: '30px' }}
            mb="50px"
          >
            <Img src={iconConfigs} alt="Configurations" width={64} />
            <Header variant="h5" bold={true} color="fillBlackBlack" sx={{ my: '20px' }}>
              Configurations
            </Header>
            <Paragraph color="fillBlackGray">
              Create your own API blueprint with Crossplane Configurations and share them with the
              rest of the Crossplane community on the Upbound Registry.{' '}
              <Anchor href={routes.crossplaneDocsUrl}>Learn&nbsp;More</Anchor>
            </Paragraph>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ _: 'center', lg: 'flex-start' }}
            flex="0 1 300px"
          >
            <Img src={iconProviders} alt="Providers" width={64} />
            <Header variant="h5" bold={true} color="fillBlackBlack" sx={{ my: '20px' }}>
              Providers
            </Header>
            <Paragraph color="fillBlackGray">
              Providers enable you to connect managed resources with your Crossplane instances. Add
              connectivity to Crossplane or share your custom Providers.{' '}
              <Anchor href={routes.crossplaneDocsUrl}>Learn&nbsp;More</Anchor>
            </Paragraph>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt="40px" mb={{ _: '80px', md: '150px' }}>
          <Box
            flex="1"
            maxWidth="1140px"
            height="1px"
            borderTop={`1px solid ${COLORS.veryLightBlue}`}
          />
        </Box>
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          flexDirection={{ _: 'column-reverse', lg: 'row' }}
        >
          <Box flex="4" mr={{ _: '0', md: '100px' }} width="100%" position="relative">
            <Hidden mdUp>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                right="-220px"
                width="365px"
                sx={{ mt: '-5px' }}
              />
              <Img src={feature1MobileImage} alt="Share you work image" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                left="-340px"
                width="637px"
                sx={{ mt: '-100px' }}
              />
              <Img src={feature1Image} alt="Share you work image" width="100%" />
            </Hidden>
          </Box>
          <Box flex="5" mb="60px">
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Share Your Work With the Crossplane Community
            </Header>
            <Paragraph color="slate" sx={{ mt: '20px' }}>
              Individuals and organizations can publicly share providers and configurations with the
              whole Crossplane community by using the{' '}
              <Anchor href={routes.cloudRegistryUrl}>Upbound&nbsp;Registry</Anchor>.
            </Paragraph>
          </Box>
        </Box>
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          mt="150px"
          flexDirection={{ _: 'column', lg: 'row' }}
        >
          <Box flex="4" mr={{ _: '0', md: '120px' }} mb="60px">
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Create Private Listings for Only Visible to Your Teams
            </Header>
            <Paragraph color="slate" sx={{ mt: '20px' }}>
              Create private listings in the{' '}
              <Anchor href={routes.cloudRegistryUrl}>Upbound Registry</Anchor> to enable your teams
              to self service using infrastructure and configurations that have been vetted and
              approved by your organization. Give your teams permission to access your
              organization's private services in the registry.
            </Paragraph>
          </Box>
          <Box flex="5" width="100%" position="relative">
            <Hidden mdUp>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                left="-220px"
                width="365px"
                sx={{ mt: '-50px' }}
              />
              <Img src={feature2MobileImage} alt="Partner with Upbound image" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                right="-530px"
                width="917px"
                sx={{ mt: '-300px' }}
              />
              <Img src={feature2Image} alt="Partner with Upbound image" width="100%" />
            </Hidden>
          </Box>
        </Box>
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          mt={{ _: '160px', md: '210px' }}
          flexDirection={{ _: 'column-reverse', lg: 'row' }}
          mb={{ _: '130px', md: '185px' }}
        >
          <Box flex="4" mr={{ _: '0', md: '100px' }} width="100%" position="relative">
            <Hidden mdUp>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                left="100px"
                width="365px"
                sx={{ mt: '-50px' }}
              />
              <Img src={feature3MobileImage} alt="Partner with Upbound image" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                left="-340px"
                width="637px"
                sx={{ mt: '-100px' }}
              />
              <Img src={feature3Image} alt="Partner with Upbound image" width="100%" />
            </Hidden>
          </Box>
          <Box flex="5" mb="60px">
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Partner with Upbound to Get Your Listing Certified
            </Header>
            <Paragraph color="slate" sx={{ mt: '20px' }}>
              The <Anchor href={routes.cloudRegistryUrl}>Upbound Registry</Anchor> is a great
              channel for partners looking to help the Crossplane community adopt their services.
              Contact us to learn more about how we can help list and verify your service for the
              community.
            </Paragraph>
            <AnchorButton
              btnType="blackOutline"
              href={routes.partnerRegistrationUrl}
              sx={{ mt: '30px' }}
            >
              Contact Us & Get Listed
            </AnchorButton>
          </Box>
        </Box>
      </Box>
      <Box px={{ _: '0', lg: '30px' }}>
        <JoinUs
          type="light"
          title="Start Your Upbound Registry Journey"
          subtitle={`Start using the Upbound Registry today and get the tools your team needs to optimize your next
            Crossplane project.`}
          href={routes.cloudRegistryUrl}
          button="Browse the Registry"
        />
      </Box>
      <Wave type="light" mt="-200px" />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
      >
        <Box textAlign="center" px="30px" pt="90px">
          <Header
            variant="h3"
            bold={true}
            color="fillBlackBlack"
            sx={{
              pt: '50px',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Want to Learn More About the Power of the Upbound Registry?
          </Header>
          <Header
            variant="h6"
            color="fillBlackGray"
            sx={{ mt: '25px', maxWidth: '750px', mx: 'auto' }}
          >
            If you have more questions about the Upbound Registry and want to schedule a demo with
            one of our team experts, you can always contact us. We will answer to you shortly!
          </Header>
        </Box>
        <ContactTileRowContainer pt="50px" pb="60px" px="15px">
          <ContactTile type="demo">
            Have one of our team specialists show what the Upbound Registry can do for you.
          </ContactTile>
          <ContactTile type="slack">
            Contact us with any questions you have on the Crossplane Slack channel
          </ContactTile>
        </ContactTileRowContainer>
        <Box textAlign="center" mb={{ _: '0', md: '100px' }} mx="30px">
          <AnchorButton
            mobile={true}
            btnType="blackOutline"
            href={routes.contactSalesUrl}
            sx={{ mb: '60px' }}
          >
            <Hidden mdUp>Contact Team Specialist</Hidden>
            <Hidden mdDown>Contact An Upbound Team Specialist</Hidden>
          </AnchorButton>
          <Paragraph color="fillBlackGray" sx={{ maxWidth: '800px', mx: 'auto', opacity: 0.8 }}>
            You can also visit the Upbound{' '}
            <Link href={routes.faqRoute}>Frequently Asked Questions</Link> for answers to some of
            the most common questions our team answers.
          </Paragraph>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default RegistryProduct;
