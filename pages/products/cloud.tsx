import React, { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { styled } from '@mui/system';
import { COLORS, MQ, shouldForwardProp } from 'src/theme';
import { Box, Hidden } from '@mui/material';

// import { navigate } from 'gatsby-link';
import { debounce } from 'lodash';

import VideoModal from 'src/elements/VideoModal';

import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';

import { Anchor, Link } from 'src/elements/Anchor';
import { AnchorButton, Button } from 'src/elements/Button';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import * as routes from 'src/routes';

import backgroundRing from 'public/background-ring.svg';
import feature1Image from 'public/cloud/feature1.svg';
import feature1MobileImage from 'public/cloud/feature1-mobile.svg';
import feature2Image from 'public/cloud/feature2.svg';
import feature2MobileImage from 'public/cloud/feature2-mobile.svg';
import feature3Image from 'public/cloud/feature3.svg';
import feature3MobileImage from 'public/cloud/feature3-mobile.svg';
import greenCheck from 'public/cloud/green-check.svg';
// import hero1xImage from 'public/cloud/hero.png';
// import hero2xImage from 'public/cloud/hero@2x.png';
import hero3xImage from 'public/cloud/hero@3x.png';
// import heroMobile1xImage from 'public/cloud/hero-mobile.png';
// import heroMobile2xImage from 'public/cloud/hero-mobile@2x.png';
import heroMobile3xImage from 'public/cloud/hero-mobile@3x.png';
import iconCrossplaneHosted from 'public/cloud/icon-crossplane-hosted.svg';
import iconCrossplaneSelf from 'public/cloud/icon-crossplane-self.svg';
import iconDebug from 'public/cloud/icon-debug.svg';
import iconManagement from 'public/cloud/icon-management.svg';
import iconScalability from 'public/cloud/icon-scalability.svg';
import iconTracking from 'public/cloud/icon-tracking.svg';
import janWillies1x from 'public/cloud/jan-willies.png';
import janWillies2x from 'public/cloud/jan-willies@2x.png';
import janWillies3x from 'public/cloud/jan-willies@3x.png';
import quoteOvalLeft from 'public/cloud/quote-oval-left.svg';
import quoteOvalRight from 'public/cloud/quote-oval-right.svg';
import filledOval from 'public/filled-oval.svg';
import heroOval from 'public/hero-oval.svg';
import quoteLeft from 'public/quote-left.svg';
import PlayCircle from 'src/svg/PlayCircle';

const useViewportPosition = (ref: React.RefObject<HTMLDivElement | undefined>) => {
  const [position, setPosition] = useState(0);

  const handleScroll = debounce(() => {
    const top = ref.current?.getBoundingClientRect().top ?? 0;
    setPosition(top / window.innerHeight);
  });

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [ref.current]);
  return position;
};

const Hero = styled(Box)`
  background-color: ${COLORS.cornflower};

  ${MQ.lg} {
    background-image: url(${heroOval.src});
    background-repeat: no-repeat;
    background-position: top 55px right;
  }
`;

const QuoteBlock = styled(Box)`
  background-color: ${COLORS.darkSlateBlue};
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding: 1px 30px;
  overflow: hidden;
  border-radius: 0;
  & > h4 {
    line-height: 48px;
  }

  ${MQ.md} {
    padding: 1px 100px;
    border-radius: 16px;
  }
`;

const QuoteOval = styled('img', { shouldForwardProp })<{ rb?: boolean }>`
  position: absolute;
  ${({ rb }) => (rb ? 'right: 0; bottom: 0;' : 'left: 0;')}
  display: none;

  ${MQ.lg} {
    display: inline;
  }
`;

const capabilities: { icon: StaticImageData; title: string; body: React.ReactNode }[] = [
  {
    icon: iconDebug,
    title: 'Debug Configurations',
    body: (
      <span>
        Provide your team with real-time visibility into all the resources managed by your
        Crossplanes, as well as a unified audit log showing who in your organization is using
        different resources across environments.
      </span>
    ),
  },
  {
    icon: iconManagement,
    title: 'Centralized Management',
    body: (
      <span>
        View the status of your organizations environments in one place. Upbound provides a single
        pane of glass into all the infrastructure your Crossplane clusters manage, across all
        environments.
      </span>
    ),
  },
  {
    icon: iconScalability,
    title: 'Simple Scalability',
    body: (
      <span>
        Upbound was built with hybrid and multi-cloud use cases in mind to empower you to scale
        across multiple clouds and datacenters. Run Crossplane in the location of your choice.
      </span>
    ),
  },
  {
    icon: iconTracking,
    title: 'Robust Cloud Tracking',
    body: (
      <span>
        Upbounds cost controls are created and enforced at a team level which makes tracking easier.
        No matter what resources developers use, their applications never cause accidental cost
        overruns.
      </span>
    ),
  },
  {
    icon: iconCrossplaneSelf,
    title: 'Bring Your Own Crossplane',
    body: (
      <span>
        Teams with strict security requirements can upgrade their existing open source Crossplane
        clusters to the Upbound Distribution for Crossplane and connect them to the Upbound
        Management UI.
      </span>
    ),
  },
  {
    icon: iconCrossplaneHosted,
    title: 'Hosted Crossplane',
    body: (
      <span>
        Let your team choose the best way for their organization to deploy Crossplane to production.
        Enterprises can use Upbound as a managed service for Crossplane where DR, HA, and scaling is
        automated.
      </span>
    ),
  },
];

const BackgroundOval = styled('img')<{ left?: string }>`
  position: absolute;
  top: 0;
  ${({ left }) => left && `left: ${left};`}
  z-index: -1;
`;

const TeamQualityTile = styled(Box)<{ active?: boolean }>`
  padding: 15px 20px;
  border-radius: 0 8px 8px 0;
  border-left: 2px solid transparent;

  ${({ active }) =>
    active &&
    `
    border-left-color: ${COLORS.fillActionSuccess};
    background-color: rgba(38, 59, 103, 0.05);
  `}
`;

const title = 'Universal Cloud';
const metaDescription =
  'Leverage the power of the Upbound Universal Cloud Platform to deliver self-service infrastructure and ' +
  'applications in dynamic, cloud native environments using the Kubernetes API.';

const CloudProduct = () => {
  const router = useRouter();

  const [isVideoVisible, setVideoVisible] = useState(false);
  const middleTeamQualityRef = useRef<HTMLDivElement>(null);
  const middleTeamQualityPosition = useViewportPosition(middleTeamQualityRef);

  return (
    <PageProvider
      displayTitle={title}
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
            mr={{ _: '0', lg: '30px' }}
            mt={{ _: '20px', lg: '100px' }}
            textAlign={{ _: 'center', lg: 'left' }}
            display={{ _: 'flex', lg: 'block' }}
            flexDirection="column"
            alignItems="center"
          >
            <Header variant="h2" bold={true} color="white" sx={{ mt: '25px' }}>
              Transform How Platform Teams Deliver Self Service Infrastructure & Applications
            </Header>
            <Header variant="h6" color="white" sx={{ mt: '20px', mb: '40px' }}>
              Leverage the power of our Universal Cloud Platform to deliver self-service
              infrastructure and applications in dynamic, cloud native environments using the
              Kubernetes API.
            </Header>
            <Box
              display="flex"
              flexDirection={{ _: 'column', md: 'row' }}
              alignItems="center"
              mb="40px"
              color="white"
            >
              <AnchorButton
                href={routes.accountsRegisterUrl}
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
              <Anchor onClick={() => setVideoVisible(true)} sx={{ fontSize: '14px' }}>
                <Span bold={true} sx={{ mr: '5px' }}>
                  Watch the Overview
                </Span>
                <Span sx={{ position: 'relative', top: '4px' }}>
                  <PlayCircle fill={COLORS.white} />
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
      <Box
        maxWidth="1180px"
        mx="auto"
        px="30px"
        pt="150px"
        mt="-100px"
        mb={{ _: '0', md: '80px' }}
        position="relative"
        zIndex={0}
        textAlign={{ _: 'center', md: 'left' }}
      >
        <Hidden mdDown>
          <BackgroundOval src={filledOval.src} alt="background oval" left="-300px" width="640px" />
        </Hidden>
        <Box
          display="flex"
          mb={{ _: '160px', md: '80px' }}
          alignItems="center"
          flexDirection={{ _: 'column-reverse', md: 'row' }}
        >
          <Box flex="5" width="100%">
            <Hidden mdUp>
              <Img src={feature1MobileImage} alt="Feature 1" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <Img src={feature1Image} alt="Feature 1" width="100%" />
            </Hidden>
          </Box>
          <Box ml={{ _: '0px', md: '50px', lg: '150px' }} flex="4" mb={{ _: '60px', md: '0' }}>
            <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
              Production Ready Crossplane for Use at Scale
            </Header>
            <Paragraph color="slate">
              Upbound Universal Crossplane is a production-ready, vendor-supported distribution of{' '}
              <Anchor href={routes.crossplaneUrl}>Open Source Crossplane</Anchor>, optimized for
              enterprise use. UXP runs anywhere and connects to the Upbound Cloud management console
              for real-time visibility and management at scale.
            </Paragraph>
          </Box>
        </Box>
        <Box
          display="flex"
          mb={{ _: '160px', md: '80px' }}
          alignItems="center"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <Box mr={{ _: '0px', md: '50px', lg: '150px' }} flex="4" mb={{ _: '60px', md: '0' }}>
            <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
              Easily Manage Multiple Crossplane Clusters in One Console
            </Header>
            <Paragraph color="slate">
              Operate all your Crossplane clusters from a single console. Bring global visibility,
              consistent policy management and scalable operations to your Crossplane footprint.
            </Paragraph>
          </Box>
          <Box flex="5" position="relative" width="100%">
            <BackgroundOval
              src={filledOval.src}
              alt="background oval"
              sx={{
                left: '150px',
                width: { _: '365px', md: '920px' },
                mt: '-200px',
              }}
            />
            <Hidden mdUp>
              <Img src={feature2MobileImage} alt="Feature 1" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <Img src={feature2Image} alt="Feature 1" width="100%" />
            </Hidden>
          </Box>
        </Box>
        <Box
          display="flex"
          mb="190px"
          alignItems="center"
          flexDirection={{ _: 'column-reverse', md: 'row' }}
        >
          <Box flex="5" position="relative" width="100%">
            <BackgroundOval
              src={filledOval.src}
              alt="background oval"
              sx={{
                left: '-300px',
                width: { _: '365px', md: '640px' },
                mt: '-50px',
              }}
            />
            <Hidden mdUp>
              <Img src={feature3MobileImage} alt="Feature 1" width="100%" />
            </Hidden>
            <Hidden mdDown>
              <Img src={feature3Image} alt="Feature 1" width="100%" />
            </Hidden>
          </Box>
          <Box ml={{ _: '0px', md: '50px', lg: '150px' }} flex="4" mb={{ _: '60px', md: '0' }}>
            <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
              Discover tools built by the Community for Your Next Crossplane Project
            </Header>
            <Paragraph color="slate">
              The <Anchor href={routes.cloudRegistryUrl}>Upbound Registry</Anchor> is a free
              community library for all: ; things Crossplane. Discover Providers and Configurations
              needed for your Next Crossplane Project.
            </Paragraph>
            <Hidden mdDown>
              <Button
                btnType="blackOutline"
                onClick={() => router.push(routes.productsRegistryRoute)}
                sx={{ mt: '30px' }}
              >
                Learn More
              </Button>
            </Hidden>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" flexDirection={{ _: 'column', md: 'row' }}>
          <Box mr={{ _: '0px', md: '50px', lg: '150px' }} flex="5">
            <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
              Flexible Hosting Options for the Way Your Organization Operates
            </Header>
            <Paragraph color="slate">
              We offer multiple ways to host Upbound which makes the most sense for however you
              operate your business. We’re always happy to discuss your specific needs and demo our
              different hosting options.
            </Paragraph>
            <AnchorButton
              btnType="blackOutline"
              href={routes.contactRoute}
              mobile={true}
              sx={{
                mt: '30px',
                mb: { _: '50px', md: '0' },
              }}
            >
              Contact An Upbound Specialist
            </AnchorButton>
          </Box>
          <Box flex="4" textAlign="left">
            <Box display="flex" flexDirection={{ _: 'column', md: 'row' }}>
              <Box flex="1" px={{ _: '30px', md: '0' }}>
                <Img src={greenCheck} alt="green check" width={24} />
                <Header
                  variant="h5"
                  bold={true}
                  color="fillBlackBlack"
                  sx={{ mt: '10px', mb: '5px' }}
                >
                  Upbound Cloud
                </Header>
                <Paragraph color="fillBlackGray">
                  Our multi-tenant offering for individuals, teams, and companies who can use SaaS
                  to simplify management.
                </Paragraph>
              </Box>
              <Box
                flex="0 0 0px"
                borderRight={{ _: 'none', md: `solid 1px ${COLORS.veryLightBlue}` }}
                borderTop={{ _: `solid 1px ${COLORS.veryLightBlue}`, md: 'none' }}
                width={{ _: '100%', md: '1px' }}
                mx={{ _: '0', md: '20px' }}
                my={{ _: '30px', md: '0' }}
              />
              <Box flex="1" px={{ _: '30px', md: '0' }}>
                <Img src={greenCheck} alt="green check" width={24} />
                <Header
                  variant="h5"
                  bold={true}
                  color="fillBlackBlack"
                  sx={{ mt: '10px', mb: '5px' }}
                >
                  Upbound Enterprise
                </Header>
                <Paragraph color="fillBlackGray">
                  Our self-hosted, self-managed version of Upbound for customers who subscribe to
                  our Enterprise plan.
                </Paragraph>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Wave type="light" />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
      >
        <Box textAlign="center" mx="30px">
          <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
            Capabilities That Scale With Your Business Needs
          </Header>
          <Header variant="h6" color="fillBlackGray">
            Upbounds Universal Cloud Platform scales with your infrastructure whether on premise or
            hosted in the cloud.
          </Header>
        </Box>
        <Box maxWidth="1160px" mx="auto" mt="60px" mb="180px" px="30px">
          <Box display="flex" m="-50px -65px" flexWrap="wrap" justifyContent="center">
            {capabilities.map((capability, i) => (
              <Box
                key={i}
                m={{ _: '25px 0px', md: '50px 65px' }}
                flex="0 1 280px"
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Img src={capability.icon} alt={capability.title} width={64} />
                <Header
                  variant="h5"
                  bold={true}
                  color="fillBlackBlack"
                  sx={{ mt: '40px', mb: '25px' }}
                >
                  {capability.title}
                </Header>
                <Paragraph color="fillBlackGray">{capability.body}</Paragraph>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box bgcolor={{ _: COLORS.darkSlateBlue, md: 'transparent' }}>
        <Box px={{ _: '0', md: '30px' }}>
          <QuoteBlock mb={{ _: '0', md: '115px' }}>
            <QuoteOval src={quoteOvalLeft.src} alt="oval" />
            <QuoteOval src={quoteOvalRight.src} alt="oval" rb={true} />
            <Img src={quoteLeft} alt="quote symbol" width={40} sx={{ mt: '95px', mb: '35px' }} />
            <Header
              variant="h4"
              color="white"
              sx={{
                mb: '36px',
                fontSize: '30px',
                lineHeight: '46px',
                maxWidth: '650px',
                mx: 'auto',
              }}
            >
              Upbound automates and simplifies how software developers manage the lifecycle of their
              applications, allowing them to innovate more quickly.
            </Header>
            <Box display="flex" justifyContent="center" flexDirection={{ _: 'column', md: 'row' }}>
              <Box mr={{ _: '0', md: '20px' }}>
                <img
                  src={janWillies1x.src}
                  srcSet={`${janWillies1x.src} 1x, ${janWillies2x.src} 2x, ${janWillies3x.src} 3x`}
                  alt="Jan Willies Picture"
                />
              </Box>
              <Box textAlign={{ _: 'center', md: 'left' }} mb={{ _: '70px', md: '100px' }}>
                <Header variant="h6" color="white">
                  Jan Willies
                </Header>
                <Header variant="h6" color="white" sx={{ opacity: '0.5' }}>
                  Platform Architect at Accenture
                </Header>
              </Box>
            </Box>
          </QuoteBlock>
        </Box>
        <Wave type="light" />
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
        mb="100px"
        px="30px"
      >
        <Box
          display="flex"
          maxWidth="1120px"
          alignItems="center"
          mx="auto"
          flexDirection={{ _: 'column', lg: 'row' }}
        >
          <Box mr={{ _: '0', md: '50px' }} textAlign={{ _: 'center', md: 'left' }} mb="60px">
            <Header variant="h3" bold={true} color="navyBlue1D2F5E">
              Upbound Enables Teams to Work Faster and More Efficiently
            </Header>
            <Header variant="h6" color="fillBlackGray" sx={{ mt: '30px' }}>
              The separation of concerns is at the core of Crossplane’s approach to infrastructure
              and application management. This empowers team members to deliver value by focusing on
              what they know best.
            </Header>
          </Box>
          <Box>
            <TeamQualityTile mb="15px" active={middleTeamQualityPosition > 0.5}>
              <Header variant="h6" bold={true} color="fillBlackBlack">
                Reduced Complexity
              </Header>
              <Paragraph color="fillBlackGray">
                A unified & self-service approach to provisioning cloud native infrastructure and
                applications. Empower platform teams with a universal control plane and organize
                around APIs.
              </Paragraph>
            </TeamQualityTile>
            <TeamQualityTile
              mb="15px"
              active={middleTeamQualityPosition >= 0.3 && middleTeamQualityPosition <= 0.5}
            >
              <Header variant="h6" bold={true} color="fillBlackBlack">
                Improved Developer Productivity
              </Header>
              <div ref={middleTeamQualityRef} />
              <Paragraph color="fillBlackGray">
                Speed up development cycles by allowing developers to deploy applications in a more
                automated and streamlined way. Free up their time to focus on building great apps.
              </Paragraph>
            </TeamQualityTile>
            <TeamQualityTile mb="15px" active={middleTeamQualityPosition < 0.3}>
              <Header variant="h6" bold={true} color="fillBlackBlack">
                Accelerated Business Velocity
              </Header>
              <Paragraph color="fillBlackGray">
                Employ a modern self-service operations strategy that injects speed and efficiency
                into the way you provision infrastructure. Increase mean time to release software
                and innovate faster.
              </Paragraph>
            </TeamQualityTile>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" px="30px">
        <Box
          flex="1"
          maxWidth="1140px"
          height="1px"
          borderTop={`1px solid ${COLORS.veryLightBlue}`}
        />
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
            Trying to Modernize with Legacy Infrastructure as Code Tools?
          </Header>
          <Header variant="h6" color="fillBlackGray" sx={{ mt: '25px' }}>
            If you have more questions about Upbound and want to schedule a demo with one of our
            team experts, you can always contact us. We will answer to you shortly!
          </Header>
        </Box>
        <ContactTileRowContainer pt="50px" pb="60px" px="15px">
          <ContactTile type="demo">
            Have one of our team specialists show what Upbound can do for you.
          </ContactTile>
          <ContactTile type="slack">
            Contact us with any questions you have on the Crossplane Slack channel.
          </ContactTile>
        </ContactTileRowContainer>
        <Box textAlign="center" mb={{ _: '0', md: '100px' }} mx="30px">
          <AnchorButton
            mobile={true}
            btnType="blackOutline"
            href={routes.contactRoute}
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
      <VideoModal open={isVideoVisible} setOpen={setVideoVisible} videoId="jyv0SBXoVXA" />
    </PageProvider>
  );
};

export default CloudProduct;
