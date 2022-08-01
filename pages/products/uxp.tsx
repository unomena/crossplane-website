import React, { useState } from 'react';

import { styled } from '@mui/system';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import VideoModal from 'src/elements/VideoModal';

import PageProvider from 'src/components/PageProvider';
import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import { Wave } from 'src/components/Wave';

import { Anchor, Link } from 'src/elements/Anchor';
import { AnchorButton } from 'src/elements/Button';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import * as routes from 'src/routes';

import ArrowRight from 'src/svg/ArrowRight';
import PlayCircle from 'src/svg/PlayCircle';
import backgroundRing from 'public/background-ring.svg';
import filledOval from 'public/filled-oval.svg';
import heroOval from 'public/hero-oval.svg';
import connectUXPImage from 'public/uxp/connect-uxp.svg';
import connectUXPMobileImage from 'public/uxp/connect-uxp-mobile.svg';
import dottedLineLeftImage from 'public/uxp/dotted-line-left.svg';
import dottedLineRightImage from 'public/uxp/dotted-line-right.svg';
import dottedLineVerticalImage from 'public/uxp/dotted-line-vertical.svg';
// import hero1xImage from 'public/uxp/hero.png';
// import hero2xImage from 'public/uxp/hero@2x.png';
import hero3xImage from 'public/uxp/hero@3x.png';
// import heroMobile1xImage from 'public/uxp/hero-mobile.png';
// import heroMobile2xImage from 'public/uxp/hero-mobile@2x.png';
import heroMobile3xImage from 'public/uxp/hero-mobile@3x.png';
import iconBugImage from 'public/uxp/icon-bug.svg';
import iconForksImage from 'public/uxp/icon-forks.svg';
import iconProductivityImage from 'public/uxp/icon-productivity.svg';
import iconSupportImage from 'public/uxp/icon-support.svg';
import iconTestedImage from 'public/uxp/icon-tested.svg';
import installCLIImage from 'public/uxp/install-cli.svg';
import installCLIMobileImage from 'public/uxp/install-cli-mobile.svg';
import installUXPImage from 'public/uxp/install-uxp.svg';
import installUXPMobileImage from 'public/uxp/install-uxp-mobile.svg';
import manageImage from 'public/uxp/manage.svg';
import manageMobileImage from 'public/uxp/manage-mobile.svg';

type FeatureData = {
  icon: StaticImageData;
  title: string;
  body: React.ReactNode;
};

const features: FeatureData[] = [
  {
    icon: iconForksImage,
    title: 'No Longterm Forks',
    body: (
      <span>
        We are still a good open source citizens despite inventing Crossplane. UXP is a downstream
        distribution we can support, releasing patches and fixes to you without waiting on a
        community-driven release process. All bug fixes get merged upstream over time.
      </span>
    ),
  },
  {
    icon: iconTestedImage,
    title: 'Tested By Upbound',
    body: (
      <span>
        Universal Crossplane releases follow Open Source Crossplane releases by one to two weeks
        which allows the Upbound team to observe, test, and address any issues experienced by
        upstream Crossplane users.
      </span>
    ),
  },
  {
    icon: iconBugImage,
    title: 'Priority Bug Fixes',
    body: (
      <span>
        Universal Crossplane allows you to get patches fast without waiting on open source
        Crossplane release cycles. UXP is maintained entirely by our team at Upbound. When bugs are
        reported, we prioritize and address them ASAP.
      </span>
    ),
  },
  {
    icon: iconProductivityImage,
    title: 'Enhanced Productivity',
    body: (
      <span>
        Developing Providers and Configurations for the first time can be tricky, but UXP makes it
        easier by integrating with the Upbound CLI.
      </span>
    ),
  },
  {
    icon: iconSupportImage,
    title: '24/7 Customer Support',
    body: (
      <span>
        Universal Crossplane customers enjoy the peace of mind that they will receive 24/7 support
        for all of their deployments.
      </span>
    ),
  },
];

const BackgroundOval = styled('img')<{ left?: string; right?: string }>`
  position: absolute;
  top: 0;
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  z-index: -1;
`;

const DottedLineMobile = styled('img')`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const DottedLine = styled('img')`
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const Hero = styled(Box)`
  background-color: ${COLORS.cornflower};

  ${MQ.lg} {
    background-image: url(${heroOval.src});
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
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MQ.md} {
    align-items: flex-start;
  }
`;

const Feature = ({ feature: { icon, title, body } }: { feature: FeatureData }) => (
  <FeatureTile my="30px">
    <Img src={icon} alt="Fork" width={64} />
    <Header variant="h5" bold={true} color="fillBlackBlack" sx={{ my: '20px' }}>
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
            mr={{ _: '0', lg: '110px' }}
            mt={{ _: '20px', lg: '100px' }}
            textAlign={{ _: 'center', lg: 'left' }}
            display={{ _: 'flex', lg: 'block' }}
            flexDirection="column"
            alignItems="center"
          >
            <Header variant="h2" bold={true} color="white" sx={{ mt: '25px' }}>
              The Easiest Way for Anyone to Run Crossplane in Production
            </Header>
            <Header variant="h6" color="white" sx={{ mt: '20px', mb: '40px' }}>
              Upbound Universal Crossplane is an open source downstream distribution of Crossplane
              built with developer productivity and enterprise readiness in mind.
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
              <Anchor href={routes.cloudUxpDocsUrl} sx={{ fontSize: '14px' }}>
                <Span bold={true} sx={{ mr: '5px' }}>
                  Read UXP Documentation
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
            mb={{ _: '-125px', lg: '0' }}
            width="100%"
            position="relative"
            zIndex={20}
          >
            <Hidden lgUp>
              <Img
                src={heroMobile3xImage}
                priority
                // srcSet={`${heroMobile1xImage} 1x, ${heroMobile2xImage} 2x, ${heroMobile3xImage} 3x`}
                alt="console screenshot"
                width="100%"
              />
            </Hidden>
            <Hidden lgDown>
              <Img
                src={hero3xImage}
                priority
                // srcSet={`${hero1xImage} 1x, ${hero2xImage} 2x, ${hero3xImage} 3x`}
                alt="console screenshot"
                width="100%"
              />
            </Hidden>
          </Box>
        </Box>
        <Wave type="white" />
      </Hero>
      <Box px="30px">
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          flexDirection={{ _: 'column-reverse', md: 'row' }}
          mt={{ _: '0', md: '125px' }}
        >
          <Box flex="1" mr={{ _: '0', md: '100px' }} width="100%" mt="25px" position="relative">
            <Hidden mdUp>
              <Img src={installCLIMobileImage} alt="Install The Upbound CLI" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                left="-60px"
                width="444px"
                sx={{ mt: '-150px' }}
              />
              <Img src={installCLIImage} alt="Install The Upbound CLI" width="100%" />
            </Hidden>
          </Box>
          <Box flex="1" textAlign={{ _: 'center', md: 'left' }}>
            <OrangeBadge mb="15px">Step 1</OrangeBadge>
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Install The Upbound CLI
            </Header>
            <Paragraph color="slate" sx={{ mt: '20px' }}>
              Installing the Upbound CLI requires a single line of code to get started. The Upbound
              CLI can be installed from many different package managers.{' '}
              <Anchor href={routes.cloudCliDocsUrl}>Learn More</Anchor>
            </Paragraph>
          </Box>
        </Box>
        <Hidden mdUp>
          <DottedLineMobile src={dottedLineVerticalImage.src} alt="Dotted line" />
        </Hidden>
        <Hidden mdDown>
          <DottedLine src={dottedLineLeftImage.src} alt="Dotted line" />
        </Hidden>
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <Box flex="1" mr={{ _: '0', md: '100px' }} textAlign={{ _: 'center', md: 'left' }}>
            <OrangeBadge mb="15px">Step 2</OrangeBadge>
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Install UXP to Your Kubernetes Cluster
            </Header>
            <Paragraph color="slate" sx={{ mt: '20px' }}>
              UXP requires you to have{' '}
              <Anchor href="https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/">
                Kubeconfig
              </Anchor>{' '}
              configured with your cluster information before installation. You can run the install
              command to then install UXP on your cluster.
            </Paragraph>
          </Box>
          <Box flex="1" width="100%" mt="25px" position="relative">
            <Hidden mdUp>
              <Img src={installUXPMobileImage} alt="Install The Upbound CLI" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                width="506px"
                sx={{ mt: '-150px', ml: '50px' }}
              />
              <Img src={installUXPImage} alt="Install The Upbound CLI" width="100%" />
            </Hidden>
          </Box>
        </Box>
        <Hidden mdUp>
          <DottedLineMobile src={dottedLineVerticalImage.src} alt="Dotted line" />
        </Hidden>
        <Hidden mdDown>
          <DottedLine src={dottedLineRightImage.src} alt="Dotted line" />
        </Hidden>
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          flexDirection={{ _: 'column-reverse', md: 'row' }}
        >
          <Box flex="1" mr={{ _: '0', md: '100px' }} width="100%" mt="25px" position="relative">
            <Hidden mdUp>
              <Img src={connectUXPMobileImage} alt="Install The Upbound CLI" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                left="-60px"
                width="444px"
                sx={{ mt: '-110px' }}
              />
              <Img src={connectUXPImage} alt="Install The Upbound CLI" width="100%" />
            </Hidden>
          </Box>
          <Box flex="1" textAlign={{ _: 'center', md: 'left' }}>
            <OrangeBadge mb="15px">Step 3</OrangeBadge>
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Connect UXP to Upbound Cloud
            </Header>
            <Paragraph color="slate" sx={{ mt: '20px' }}>
              Before you can connect UXP to{' '}
              <Link href={routes.productsUbcRoute}>Upbound Cloud</Link>, you will need to create a
              free Upbound account. Along with your free account you will get your real-time
              dashboard for UXP.{' '}
              <Anchor href={routes.cloudRegisterUrl}>Create Your Free Account</Anchor>
            </Paragraph>
          </Box>
        </Box>
        <Hidden mdUp>
          <DottedLineMobile src={dottedLineVerticalImage.src} alt="Dotted line" />
        </Hidden>
        <Hidden mdDown>
          <DottedLine src={dottedLineLeftImage.src} alt="Dotted line" />
        </Hidden>
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <Box flex="1" mr={{ _: '0', md: '100px' }} textAlign={{ _: 'center', md: 'left' }}>
            <OrangeBadge mb="15px">Step 4</OrangeBadge>
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Manage Your UXP Instance On Upbound
            </Header>
            <Paragraph color="slate" sx={{ mt: '20px' }}>
              You can now log in to your free Upbound account and see your newly connected UXP
              cluster in your list of control planes.{' '}
              <Anchor href={routes.cloudLoginUrl}>Log In to Your Account</Anchor>
            </Paragraph>
          </Box>
          <Box flex="1" width="100%" mt="20px" position="relative">
            <Hidden mdUp>
              <Img src={manageMobileImage} alt="Manage Your UXP Instance On Upbound" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <BackgroundOval
                src={filledOval.src}
                alt="background oval"
                width="444px"
                sx={{ mt: '-30px', right: '-30px' }}
              />
              <Img src={manageImage} alt="Manage Your UXP Instance On Upbound" width="100%" />
            </Hidden>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={{ _: '75px', md: '85px' }}
          mb={{ _: '20px', md: '45px' }}
          flexDirection={{ _: 'column', md: 'row' }}
          alignItems="flex-start"
        >
          <AnchorButton
            btnType="blackOutline"
            href={routes.cloudUxpDocsUrl}
            mobile={true}
            sx={{
              mb: '20px',
              mr: { _: '0', md: '10px' },
            }}
          >
            View UXP Documentation
          </AnchorButton>
          <AnchorButton
            btnType="blackOutline"
            onClick={() => setVideoVisible(true)}
            mobile={true}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: { _: 'center', md: 'flex-start' },
            }}
          >
            <Span bold={true} sx={{ mr: '4px' }}>
              Watch Quick UXP Demo
            </Span>
            <PlayCircle />
          </AnchorButton>
        </Box>
      </Box>
      <Wave type="light" />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
          pt: { _: '10px', md: '0' },
        }}
      >
        <Box maxWidth="1100px" mx="auto" px="30px" textAlign="center">
          <Header variant="h2" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
            What Makes UXP Different From Open Source Crossplane?
          </Header>
          <Header variant="h6" color="fillBlackGray">
            Enterprise UXP provides you with a single pane of glass and real-time dashboards for all
            UXP instances along with unlimited private listings in the Registry. It also includes
            24/7 support and optional professional services delivered by the world’s foremost
            Crossplane experts.
          </Header>
        </Box>
        <Box
          maxWidth="1100px"
          mx="auto"
          px="30px"
          mt="80px"
          mb="100px"
          textAlign={{ _: 'center', md: 'left' }}
        >
          <Box
            display="flex"
            m="-30px -50px"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
          >
            {features.map((feature, i) => (
              <Feature key={i} feature={feature} />
            ))}
            <FeatureTile />
            <FeatureTile />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" px="30px">
          <Box
            flex="1"
            maxWidth="1140px"
            height="1px"
            borderTop={`1px solid ${COLORS.veryLightBlue}`}
          ></Box>
        </Box>
        <Box
          sx={{
            backgroundImage: { _: 'none', md: `url(${backgroundRing.src})` },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            mt: '50px',
          }}
        >
          <Box textAlign="center" maxWidth="750px" mx="auto" px="30px">
            <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mt: '65px', pt: '50px' }}>
              Ready to Supercharge Your Open Source Crossplane?
            </Header>
            <Header variant="h6" color="fillBlackGray" sx={{ mt: '25px' }}>
              If you have more questions about Universal Crossplane and want to schedule a demo with
              one of our team experts, you can always contact us. We will answer to you shortly!
            </Header>
          </Box>
          <ContactTileRowContainer pt="50px" pb="60px" px="15px">
            <ContactTile type="demo">
              Have one of our team specialists show what UXP can do for you.
            </ContactTile>
            <ContactTile type="slack">
              Contact us with any questions you have on the Crossplane Slack channel.
            </ContactTile>
          </ContactTileRowContainer>
          <Box textAlign="center" mb={{ _: '0', md: '100px' }} mx="30px">
            <AnchorButton
              btnType="blackOutline"
              href={routes.contactRoute}
              mobile={true}
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
      </Box>
      <VideoModal open={isVideoVisible} setOpen={setVideoVisible} videoId="EDsHFpMRKjE" />
    </PageProvider>
  );
};

export default UXP;
