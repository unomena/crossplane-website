import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import VideoModal from 'react-modal-video';

import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import backgroundRing from '../../assets/background-ring.svg';
import filledOval from '../../assets/filled-oval.svg';
import heroOval from '../../assets/hero-oval.svg';
import { ReactComponent as PlayCircle } from '../../assets/play-circle.svg';
import connectUXPImage from '../../assets/uxp/connect-uxp.svg';
import connectUXPMobileImage from '../../assets/uxp/connect-uxp-mobile.svg';
import dottedLineLeftImage from '../../assets/uxp/dotted-line-left.svg';
import dottedLineRightImage from '../../assets/uxp/dotted-line-right.svg';
import dottedLineVerticalImage from '../../assets/uxp/dotted-line-vertical.svg';
import hero1xImage from '../../assets/uxp/hero.png';
import hero2xImage from '../../assets/uxp/hero@2x.png';
import hero3xImage from '../../assets/uxp/hero@3x.png';
import heroMobile1xImage from '../../assets/uxp/hero-mobile.png';
import heroMobile2xImage from '../../assets/uxp/hero-mobile@2x.png';
import heroMobile3xImage from '../../assets/uxp/hero-mobile@3x.png';
import iconBugImage from '../../assets/uxp/icon-bug.svg';
import iconForksImage from '../../assets/uxp/icon-forks.svg';
import iconProductivityImage from '../../assets/uxp/icon-productivity.svg';
import iconSupportImage from '../../assets/uxp/icon-support.svg';
import iconTestedImage from '../../assets/uxp/icon-tested.svg';
import installCLIImage from '../../assets/uxp/install-cli.svg';
import installCLIMobileImage from '../../assets/uxp/install-cli-mobile.svg';
import installUXPImage from '../../assets/uxp/install-uxp.svg';
import installUXPMobileImage from '../../assets/uxp/install-uxp-mobile.svg';
import manageImage from '../../assets/uxp/manage.svg';
import manageMobileImage from '../../assets/uxp/manage-mobile.svg';
import { ContactTile, ContactTileRowContainer } from '../../components/ContactTile';
import { PageProvider } from '../../components/PageProvider';
import { Wave } from '../../components/Wave';
import { Media, MQ } from '../../constants/styledTheme';
import { COLORS, fontAvenirBold } from '../../constants/styles';
import { Anchor, Link } from '../../elements/Anchor';
import { AnchorButton } from '../../elements/Button';
import { Box, Flex } from '../../elements/Div';
import { Header } from '../../elements/Header';
import { Img } from '../../elements/Img';
import { Paragraph } from '../../elements/Paragraph';
import { Span } from '../../elements/Span';
import * as routes from '../../routes';

type FeatureData = {
  icon: string;
  title: string;
  body: React.ReactNode;
};

const features: FeatureData[] = [
  {
    icon: iconForksImage,
    title: 'No Longterm Forks',
    body: (
      <span>
        We are still a good open source citizens despite inventing Crossplane. UXP is a downstream distribution we can
        support, releasing patches and fixes to you without waiting on a community-driven release process. All bug fixes
        get merged upstream over time.
      </span>
    ),
  },
  {
    icon: iconTestedImage,
    title: 'Tested By Upbound',
    body: (
      <span>
        Universal Crossplane releases follow Open Source Crossplane releases by one to two weeks which allows the
        Upbound team to observe, test, and address any issues experienced by upstream Crossplane users.
      </span>
    ),
  },
  {
    icon: iconBugImage,
    title: 'Priority Bug Fixes',
    body: (
      <span>
        Universal Crossplane allows you to get patches fast without waiting on open source Crossplane release cycles.
        UXP is maintained entirely by our team at Upbound. When bugs are reported, we prioritize and address them ASAP.
      </span>
    ),
  },
  {
    icon: iconProductivityImage,
    title: 'Enhanced Productivity',
    body: (
      <span>
        Developing Providers and Configurations for the first time can be tricky, but UXP makes it easier by integrating
        with the Upbound CLI.
      </span>
    ),
  },
  {
    icon: iconSupportImage,
    title: '24/7 Customer Support',
    body: (
      <span>
        Universal Crossplane customers enjoy the peace of mind that they will receive 24/7 support for all of their
        deployments.
      </span>
    ),
  },
];

const BackgroundOval = styled(Img)<{ left?: string; right?: string }>`
  position: absolute;
  top: 0;
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  z-index: -1;
`;

const Hero = styled(Box)`
  background-color: ${COLORS.cornflower};

  ${MQ.l} {
    background-image: url(${heroOval});
    background-repeat: no-repeat;
    background-position: top 55px right;
  }
`;

const OrangeBadge = styled(Box)`
  display: inline-block;
  background-color: ${COLORS.fillActionWarning};
  ${fontAvenirBold}
  font-size: 12px;
  color: ${COLORS.white};
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  padding: 6px 11px;
  border-radius: 8px;
  text-transform: uppercase;
`;

const FeatureTile = styled(Box)`
  margin-left: 50px;
  margin-right: 50px;
  flex: 0 1 280px;
`;

const Feature = ({ feature: { icon, title, body } }: { feature: FeatureData }) => (
  <FeatureTile my="30px">
    <Img src={icon} alt="Fork" />
    <Header type="h5" bold={true} color="fillBlackBlack" my="20px">
      {title}
    </Header>
    <Paragraph color="fillBlackGray">{body}</Paragraph>
  </FeatureTile>
);

const displayTitle = 'Universal Crossplane';
const metaDescription =
  'Upbound Universal Crossplane is an open source downstream distribution of Crossplane built with developer ' +
  "productivity and enterprise readiness in mind. Universal Crossplane is delivered by the world's foremost " +
  'Crossplane experts with 24/7 support.';

const UXP = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  return (
    <PageProvider
      displayTitle={displayTitle}
      metaDescription={metaDescription}
      isOverflowVisible={isVideoVisible === false}
    >
      <Hero>
        <Flex maxWidth="1100px" mx="auto" px="30px" alignItems="center" flexDirection={{ _: 'column', l: 'row' }}>
          <Box
            flex={6}
            mr={{ _: '0', l: '110px' }}
            mt={{ _: '20px', l: '100px' }}
            textAlign={{ _: 'center', l: 'left' }}
          >
            <Header type="h2" bold={true} color="white" mt="25px">
              The Easiest Way for Anyone to Run Crossplane in Production
            </Header>
            <Header type="h6" color="white" mt="20px" mb="40px">
              Upbound Universal Crossplane is an open source downstream distribution of Crossplane built with developer
              productivity and enterprise readiness in mind.
            </Header>
            <Flex alignItems="center" mb="40px" color="white">
              <AnchorButton
                href={routes.cloudRegisterUrl}
                btnType="aquaMarineFill"
                bold={true}
                hasShadow={true}
                mr={{ _: '0', m: '15px' }}
                mb={{ _: '10px', m: '0' }}
              >
                Try Upbound for Free
              </AnchorButton>
              <Anchor href={routes.cloudUxpDocsUrl} fontSize="14px">
                <Span bold={true} mr="5px">
                  Read UXP Documentation
                </Span>
                <Span position="relative" top="2px">
                  <ArrowRight
                    css={css`
                      color: ${COLORS.white};
                      width: 13px;
                      height: 12px;
                    `}
                  />
                </Span>
              </Anchor>
            </Flex>
          </Box>
          <Box
            flex={7}
            mt={{ _: '0', l: '65px' }}
            mb={{ _: '-125px', l: '0' }}
            width="100%"
            position="relative"
            zIndex={20}
          >
            <Media lessThan="l">
              <Img
                src={heroMobile1xImage}
                srcSet={`${heroMobile1xImage} 1x, ${heroMobile2xImage} 2x, ${heroMobile3xImage} 3x`}
                alt="console screenshot"
                width="100%"
              />
            </Media>
            <Media greaterThan="m">
              <Img
                src={hero1xImage}
                srcSet={`${hero1xImage} 1x, ${hero2xImage} 2x, ${hero3xImage} 3x`}
                alt="console screenshot"
                width="100%"
              />
            </Media>
          </Box>
        </Flex>
        <Wave type="white" />
      </Hero>
      <Box px="30px">
        <Flex
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          flexDirection={{ _: 'column-reverse', m: 'row' }}
          mt={{ _: '0', m: '125px' }}
        >
          <Box flex="1" mr={{ _: '0', m: '100px' }} width="100%" mt="25px" position="relative">
            <Media lessThan="m">
              <Img src={installCLIMobileImage} alt="Install The Upbound CLI" width="100%" />
            </Media>
            <Media greaterThan="s">
              <BackgroundOval src={filledOval} alt="background oval" left="-60px" width="444px" mt="-150px" />
              <Img src={installCLIImage} alt="Install The Upbound CLI" width="100%" />
            </Media>
          </Box>
          <Box flex="1" textAlign={{ _: 'center', m: 'left' }}>
            <OrangeBadge mb="15px">Step 1</OrangeBadge>
            <Header type="h3" bold={true} color="fillBlackBlack">
              Install The Upbound CLI
            </Header>
            <Paragraph color="slate" mt="20px">
              Installing the Upbound CLI requires a single line of code to get started. The Upbound CLI can be installed
              from many different package managers. <Anchor href={routes.cloudCliDocsUrl}>Learn More</Anchor>
            </Paragraph>
          </Box>
        </Flex>
        <Media lessThan="m">
          <Img src={dottedLineVerticalImage} alt="Dotted line" mx="auto" display="block" mt="20px" mb="30px" />
        </Media>
        <Media greaterThanOrEqual="s">
          <Img src={dottedLineLeftImage} alt="Dotted line" mx="auto" display="block" mt="40px" mb="50px" />
        </Media>
        <Flex maxWidth="1100px" mx="auto" alignItems="center" flexDirection={{ _: 'column', m: 'row' }}>
          <Box flex="1" mr={{ _: '0', m: '100px' }} textAlign={{ _: 'center', m: 'left' }}>
            <OrangeBadge mb="15px">Step 2</OrangeBadge>
            <Header type="h3" bold={true} color="fillBlackBlack">
              Install UXP to Your Kubernetes Cluster
            </Header>
            <Paragraph color="slate" mt="20px">
              UXP requires you to have{' '}
              <Anchor href="https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/">
                Kubeconfig
              </Anchor>{' '}
              configured with your cluster information before installation. You can run the install command to then
              install UXP on your cluster.
            </Paragraph>
          </Box>
          <Box flex="1" width="100%" mt="25px" position="relative">
            <Media lessThan="m">
              <Img src={installUXPMobileImage} alt="Install The Upbound CLI" width="100%" />
            </Media>
            <Media greaterThan="s">
              <BackgroundOval src={filledOval} alt="background oval" width="506px" mt="-150px" ml="50px" />
              <Img src={installUXPImage} alt="Install The Upbound CLI" width="100%" />
            </Media>
          </Box>
        </Flex>
        <Media lessThan="m">
          <Img src={dottedLineVerticalImage} alt="Dotted line" mx="auto" display="block" mt="20px" mb="30px" />
        </Media>
        <Media greaterThan="s">
          <Img src={dottedLineRightImage} alt="Dotted line" mx="auto" display="block" mt="40px" mb="50px" />
        </Media>
        <Flex maxWidth="1100px" mx="auto" alignItems="center" flexDirection={{ _: 'column-reverse', m: 'row' }}>
          <Box flex="1" mr={{ _: '0', m: '100px' }} width="100%" mt="25px" position="relative">
            <Media lessThan="m">
              <Img src={connectUXPMobileImage} alt="Install The Upbound CLI" width="100%" />
            </Media>
            <Media greaterThan="s">
              <BackgroundOval src={filledOval} alt="background oval" left="-60px" width="444px" mt="-110px" />
              <Img src={connectUXPImage} alt="Install The Upbound CLI" width="100%" />
            </Media>
          </Box>
          <Box flex="1" textAlign={{ _: 'center', m: 'left' }}>
            <OrangeBadge mb="15px">Step 3</OrangeBadge>
            <Header type="h3" bold={true} color="fillBlackBlack">
              Connect UXP to Upbound Cloud
            </Header>
            <Paragraph color="slate" mt="20px">
              Before you can connect UXP to <Link to={routes.productsUbcRoute}>Upbound Cloud</Link>, you will need to
              create a free Upbound account. Along with your free account you will get your real-time dashboard for UXP.{' '}
              <Anchor href={routes.cloudRegisterUrl}>Create Your Free Account</Anchor>
            </Paragraph>
          </Box>
        </Flex>
        <Media lessThan="m">
          <Img src={dottedLineVerticalImage} alt="Dotted line" mx="auto" display="block" mt="20px" mb="30px" />
        </Media>
        <Media greaterThan="s">
          <Img src={dottedLineLeftImage} alt="Dotted line" mx="auto" display="block" mt="40px" mb="50px" />
        </Media>
        <Flex maxWidth="1100px" mx="auto" alignItems="center" flexDirection={{ _: 'column', m: 'row' }}>
          <Box flex="1" mr={{ _: '0', m: '100px' }} textAlign={{ _: 'center', m: 'left' }}>
            <OrangeBadge mb="15px">Step 4</OrangeBadge>
            <Header type="h3" bold={true} color="fillBlackBlack">
              Manage Your UXP Instance On Upbound
            </Header>
            <Paragraph color="slate" mt="20px">
              You can now log in to your free Upbound account and see your newly connected UXP cluster in your list of
              control planes. <Anchor href={routes.cloudLoginUrl}>Log In to Your Account</Anchor>
            </Paragraph>
          </Box>
          <Box flex="1" width="100%" mt="20px" position="relative">
            <Media lessThan="m">
              <Img src={manageMobileImage} alt="Manage Your UXP Instance On Upbound" width="100%" />
            </Media>
            <Media greaterThan="s">
              <BackgroundOval src={filledOval} alt="background oval" width="444px" mt="-30px" right="-30px" />
              <Img src={manageImage} alt="Manage Your UXP Instance On Upbound" width="100%" />
            </Media>
          </Box>
        </Flex>
        <Flex
          justifyContent="center"
          mt={{ _: '75px', m: '85px' }}
          mb={{ _: '20px', m: '45px' }}
          flexDirection={{ _: 'column', m: 'row' }}
          alignItems="flex-start"
        >
          <AnchorButton
            btnType="blackOutline"
            mr={{ _: '0', m: '10px' }}
            mb="20px"
            href={routes.cloudUxpDocsUrl}
            mobile={true}
          >
            View UXP Documentation
          </AnchorButton>
          <AnchorButton
            btnType="blackOutline"
            onClick={() => setVideoVisible(true)}
            mobile={true}
            display="inline-flex"
            alignItems="center"
            justifyContent={{ _: 'center', m: 'flex-start' }}
          >
            <Span bold={true} mr="4px">
              Watch Quick UXP Demo
            </Span>
            <PlayCircle />
          </AnchorButton>
        </Flex>
      </Box>
      <Wave type="light" />
      <Box
        backgroundImage={`linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`}
        pt={{ _: '10px', m: '0' }}
      >
        <Box maxWidth="1100px" mx="auto" px="30px" textAlign="center">
          <Header type="h2" bold={true} color="fillBlackBlack" mb="20px">
            What Makes UXP Different From Open Source Crossplane?
          </Header>
          <Header type="h6" color="fillBlackGray">
            Enterprise UXP provides you with a single pane of glass and real-time dashboards for all UXP instances along
            with unlimited private listings in the Registry. It also includes 24/7 support and optional professional
            services delivered by the world’s foremost Crossplane experts.
          </Header>
        </Box>
        <Box maxWidth="1100px" mx="auto" px="30px" mt="80px" mb="100px" textAlign={{ _: 'center', m: 'left' }}>
          <Flex m="-30px -50px" flexDirection="row" flexWrap="wrap" justifyContent="center">
            {features.map((feature, i) => (
              <Feature key={i} feature={feature} />
            ))}
            <FeatureTile />
            <FeatureTile />
          </Flex>
        </Box>
        <Flex justifyContent="center" px="30px">
          <Box flex="1" maxWidth="1140px" height="1px" borderTop={`1px solid ${COLORS.veryLightBlue}`}></Box>
        </Flex>
        <Box
          backgroundImage={{ _: 'none', m: `url(${backgroundRing})` }}
          backgroundRepeat="no-repeat"
          backgroundPosition="top center"
          mt="50px"
        >
          <Box textAlign="center" maxWidth="750px" mx="auto" px="30px">
            <Header type="h3" bold={true} color="fillBlackBlack" mt="65px" pt="50px">
              Ready to Supercharge Your Open Source Crossplane?
            </Header>
            <Header type="h6" color="fillBlackGray" mt="25px">
              If you have more questions about Universal Crossplane and want to schedule a demo with one of our team
              experts, you can always contact us. We will answer to you shortly!
            </Header>
          </Box>
          <ContactTileRowContainer pt="50px" pb="60px" px="15px">
            <ContactTile type="demo">Have one of our team specialists show what UXP can do for you.</ContactTile>
            <ContactTile type="slack">
              Contact us with any questions you have on the Crossplane Slack channel.
            </ContactTile>
          </ContactTileRowContainer>
          <Box textAlign="center" mb={{ _: '0', m: '100px' }} mx="30px">
            <AnchorButton btnType="blackOutline" href={routes.contactSalesUrl} mb="60px" mobile={true}>
              <Media lessThan="m">Contact Team Specialist</Media>
              <Media greaterThan="s">Contact An Upbound Team Specialist</Media>
            </AnchorButton>
            <Paragraph color="fillBlackGray" maxWidth="800px" mx="auto" opacity={0.8}>
              You can also visit the Upbound <Link to={routes.faqRoute}>Frequently Asked Questions</Link> for answers to
              some of the most common questions our team answers.
            </Paragraph>
          </Box>
        </Box>
      </Box>
      <VideoModal
        channel="youtube"
        autoplay
        isOpen={isVideoVisible}
        videoId="EDsHFpMRKjE"
        onClose={() => setVideoVisible(false)}
      />
    </PageProvider>
  );
};

export default UXP;
