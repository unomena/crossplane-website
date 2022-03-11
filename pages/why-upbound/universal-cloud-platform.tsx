import React from 'react';

import { styled } from '@mui/system';
import { COLORS } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';
import { CallToActionCarousel } from 'src/components/WhyUpbound/CallToActionCarousel';
import { CheckList } from 'src/components/WhyUpbound/CheckList';
import { RelatedResource } from 'src/components/WhyUpbound/RelatedResource';

import { Anchor } from 'src/elements/Anchor';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';

import * as routes from 'src/routes';

import ovalLeftBackground from 'public/oval-left.svg';
import ovalRightBackground from 'public/oval-right.svg';
import quoteLeft from 'public/quote-left.svg';
import bassam1xImage from 'public/why-upbound/bassam.png';
import bassam2xImage from 'public/why-upbound/bassam@2x.png';
import bassam3xImage from 'public/why-upbound/bassam@3x.png';
import bassamAvatar1xImage from 'public/why-upbound/bassam-avatar.png';
import bassamAvatar2xImage from 'public/why-upbound/bassam-avatar@2x.png';
import bassamAvatar3xImage from 'public/why-upbound/bassam-avatar@3x.png';
import iconBackpack from 'public/why-upbound/icon-backpack.svg';
import iconDesign from 'public/why-upbound/icon-design.svg';
import iconMulticloud from 'public/why-upbound/icon-multicloud.svg';
import iconReconcile from 'public/why-upbound/icon-reconcile.svg';
import iconRocket from 'public/why-upbound/icon-rocket.svg';

const AspirationTile = styled(Box)`
  border-radius: 16px;
  padding: 50px 30px;
  background-color: ${COLORS.white};
  border: solid 1px ${COLORS.veryLightBlue};
  border-radius: 16px;
  box-shadow: 0 50px 50px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  max-width: 350px;
  margin-left: auto;
  margin-bottom: 20px;
`;

const displayTitle = 'A Universal Cloud Platform';
const metaDescription =
  "Upbound's Universal Cloud Platform standardizes infrastructure and application management using the same " +
  'API-centric, declarative configuration and automation approach pioneered by Kubernetes.';

const UniversalCloudPlatform: React.FC = () => {
  return (
    <PageProvider displayTitle={displayTitle} metaDescription={metaDescription}>
      <Box pt={{ _: '62px', md: '50px' }} bgcolor={COLORS.cornflower} textAlign="center">
        <Box maxWidth="930px" mx="auto" px="30px">
          <Header
            pill="Why Upbound?"
            variant="h1"
            bold={true}
            color="white"
            sx={{ mt: '25px', mb: '20px' }}
          >
            The Universal Cloud Platform
          </Header>
          <Header variant="h6" color="white" sx={{ mb: '40px', opacity: '0.8' }}>
            The Universal Cloud Platform standardizes infrastructure and application management
            using the same API-centric, declarative configuration and automation approach pioneered
            by Kubernetes
          </Header>
          <CallToActionCarousel currentPage="universal" />
        </Box>
        <Wave type="white" />
      </Box>
      <Box maxWidth="900px" mx="auto" textAlign="center" px="30px">
        <Header variant="h3" bold={true} color="fillBlackBlack">
          Rise Above the Clouds With a Universal Cloud Platform
        </Header>
        <Paragraph color="fillBlackGray" sx={{ mt: '30px' }}>
          Organizations are looking to standardize how to consume infrastructure and run
          applications as multi-cloud becomes a pervasive strategy
        </Paragraph>
      </Box>
      <Box textAlign="center" mt="70px" mb="100px" px="30px">
        <Box display="flex" maxWidth="900px" mx="auto" flexDirection={{ _: 'column', lg: 'row' }}>
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            flexDirection="column"
            mr={{ _: '0', lg: '100px' }}
            mb="70px"
          >
            <Img src={iconBackpack} alt="Portability" width={64} sx={{ mb: '30px' }} />
            <Header variant="h5" bold={true} color="fillBlackBlack">
              Multicloud Workload Portability is Hard
            </Header>
            <Paragraph color="slate" sx={{ mt: '15px' }}>
              Among enterprises that use cloud, 84% have a multi-cloud strategy for their mission
              critical applications. However, each cloud provider including AWS, Azure, GCP,
              AliCloud have their own proprietary control planes, APIs, controllers, tools, and UI.
              This results in enterprises being unable to achieve workload portability across cloud
              providers. <Anchor href={routes.crossplaneUrl}>Open Source Crossplane</Anchor>{' '}
              addresses all of this complexity
            </Paragraph>
          </Box>
          <Box flex="1" display="flex" alignItems="center" flexDirection="column">
            <Img src={iconRocket} alt="Consumption" width={64} sx={{ mb: '30px' }} />
            <Header variant="h5" bold={true} color="fillBlackBlack">
              Crossplane Makes Consumption Easy
            </Header>
            <Paragraph color="slate" sx={{ mt: '15px' }}>
              We created <Anchor href={routes.crossplaneUrl}>Open Source Crossplane</Anchor> to
              standardize infrastructure and application management using the same API-centric,
              declarative configuration and automation approach pioneered by Kubernetes. Crossplane
              allows Platform teams to utilize multiple vendors and expose self-service APIs for
              easy consumption without having to write any code.
            </Paragraph>
          </Box>
        </Box>
      </Box>
      <Box position="relative" px={{ _: 0, md: '30px' }} overflow="hidden">
        <Box
          sx={{
            backgroundColor: COLORS.darkSlateBlue,
            backgroundImage: {
              _: 'none',
              md: `url(${ovalLeftBackground.src}), url(${ovalRightBackground.src})`,
            },
            backgroundRepeat: 'no-repeat',
            backgroundPosition:
              'calc(50% - 800px) calc(50% - 400px), calc(50% + 650px) calc(50% + 400px)',
            pt: { _: '80px', md: '150px' },
            borderRadius: { _: '0', md: '16px' },
            maxWidth: '1140px',
            mx: 'auto',
            pl: { _: '30px', md: '130px' },
            pr: { _: '30px', md: '130px', lg: 0 },
            textAlign: { _: 'center', md: 'left' },
            display: { _: 'flex', md: 'block' },
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Img src={quoteLeft} alt="left quote" width={40} />
          <Box display="flex" flexDirection={{ _: 'column', lg: 'row' }}>
            <Box maxWidth={{ _: 'none', lg: '530px' }} mt="40px" mb={{ _: '0', md: '100px' }}>
              <Header variant="h4" color="white" sx={{ fontSize: '30px', lineHeight: '48px' }}>
                We started Crossplane because we understood the power of the Kubernetes operating
                model and wanted to extend it beyond container orchestration. We believe this model
                is applicable to all applications and infrastructure that organizations are
                managing.
              </Header>
              <Hidden mdUp>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection={{ _: 'column', md: 'row' }}
                  textAlign="center"
                  mt="50px"
                >
                  <Box mr={{ _: '0', md: '20px' }}>
                    <img
                      src={bassamAvatar1xImage.src}
                      srcSet={`
                      ${bassamAvatar1xImage.src} 1x, ${bassamAvatar2xImage.src} 2x, ${bassamAvatar3xImage.src} 3x
                      `}
                      alt="Jan Willies Picture"
                    />
                  </Box>
                  <Box textAlign={{ _: 'center', md: 'left' }} mb={{ _: '80px', md: '100px' }}>
                    <Header variant="h6" color="white">
                      Bassam Tabbara
                    </Header>
                    <Header variant="h6" color="white" sx={{ opacity: '0.5' }}>
                      CEO of Upbound
                    </Header>
                  </Box>
                </Box>
              </Hidden>
              <Hidden xlDown>
                <Header variant="h6" color="white" sx={{ opacity: '0.5', mt: '30px' }}>
                  Bassam Tabbara is the CEO of Upbound
                </Header>
              </Hidden>
            </Box>
            <Hidden xlDown>
              <Box flex="1">
                <img
                  src={bassam1xImage.src}
                  srcSet={`${bassam1xImage.src} 1x, ${bassam2xImage.src} 2x, ${bassam3xImage.src} 3x`}
                  alt="Bassam Tabbara"
                  style={{ marginRight: '-80px' }}
                />
              </Box>
            </Hidden>
          </Box>
        </Box>
        <Box
          height="360px"
          bgcolor={COLORS.cornflower}
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          zIndex={-1}
        />
      </Box>
      <Box bgcolor={COLORS.cornflower} textAlign="center">
        <Box px="15px">
          <Box mb="60px" px="15px">
            <Header
              variant="h3"
              bold={true}
              color="white"
              sx={{ pt: '120px', maxWidth: '1000px', mx: 'auto' }}
            >
              Multicloud Aspirations Become Reality With Universal Cloud Platforms
            </Header>
            <Header
              variant="h6"
              color="white"
              sx={{ opacity: '0.8', mt: '30px', maxWidth: '1150px', mx: 'auto' }}
            >
              As multi-cloud becomes a pervasive strategy for organizations, the way teams are
              organized and the tools they require must evolve with the help of technologies like
              Crossplane.
            </Header>
          </Box>
          <Box
            display="flex"
            maxWidth="1180px"
            mx="auto"
            mb={{ _: '0', md: '100px' }}
            flexDirection={{ _: 'column', lg: 'row' }}
          >
            <AspirationTile mr={{ _: 'auto', lg: '60px' }}>
              <Img src={iconMulticloud} alt="Multicloud icon" width={64} />
              <Header
                variant="h5"
                bold={true}
                color="fillBlackBlack"
                sx={{ mt: '15px', mb: '10px' }}
              >
                Multicloud Management
              </Header>
              <Paragraph color="fillBlackGray">
                Crossplane extends Kubernetes adding APIs and controllers that enable it to manage
                resources and services from multiple cloud and infrastructure vendors.
              </Paragraph>
            </AspirationTile>
            <AspirationTile mr={{ _: 'auto', lg: '60px' }}>
              <Img src={iconDesign} alt="Multicloud icon" width={64} />
              <Header
                variant="h5"
                bold={true}
                color="fillBlackBlack"
                sx={{ mt: '15px', mb: '10px' }}
              >
                Extended Control
              </Header>
              <Paragraph color="fillBlackGray">
                Platform and application teams can now author configurations for databases, caches,
                networking, and other services living outside of their Kubernetes clusters.
              </Paragraph>
            </AspirationTile>
            <AspirationTile mr="auto">
              <Img src={iconReconcile} alt="Multicloud icon" width={64} />
              <Header
                variant="h5"
                bold={true}
                color="fillBlackBlack"
                sx={{ mt: '15px', mb: '10px' }}
              >
                Continuous Reconciliation
              </Header>
              <Paragraph color="fillBlackGray">
                Configuration is continuously reconciled by Crossplane and Day 1 and Day 2
                automation is handled out of the box making infrastructure easier to manage
              </Paragraph>
            </AspirationTile>
          </Box>
        </Box>
        <Wave type="white" />
      </Box>
      <Box pt="60px">
        <Box px="30px">
          <Box
            display="flex"
            maxWidth="1100px"
            mx="auto"
            alignItems="center"
            mb={{ _: '50px', lg: '60px' }}
            flexDirection={{ _: 'column', lg: 'row' }}
          >
            <Box
              flex="1"
              mr={{ _: '0', lg: '70px' }}
              textAlign={{ _: 'center', lg: 'left' }}
              mb="50px"
            >
              <Header variant="h3" bold={true} color="fillBlackBlack">
                Meet the Challenges of Cloud Native Head On with Crossplane
              </Header>
              <Header variant="h6" color="fillBlackGray" sx={{ mt: '20px' }}>
                Multi-cloud is becoming a pervasive strategy for organizations and the way teams are
                organized and the tools they require must evolve. Organizations are modernizing
                their engineering culture and optimize operations to meet the challenges of the
                cloud native era with the help of{' '}
                <Anchor href={routes.crossplaneUrl}>Crossplane</Anchor>.
              </Header>
            </Box>
            <Box flex="1">
              <Box
                pl={{ _: '30px', lg: '60px' }}
                pr={{ _: '30px', lg: '0' }}
                pb={{ _: '0', lg: '30px' }}
                pt={{ _: '50px', lg: '30px' }}
                borderLeft={{ _: 'none', lg: `solid 1px ${COLORS.veryLightBlue}` }}
                borderTop={{ _: `solid 1px ${COLORS.veryLightBlue}`, lg: 'none' }}
              >
                <CheckList>
                  <li>Provide Self Service Infrastructure Provisioning</li>
                  <li>Organize Infrastructure Around Platform Teams</li>
                  <li>Leverage Proven Kubernetes Technology</li>
                  <li>Adopt a Universal Cloud API</li>
                </CheckList>
              </Box>
            </Box>
          </Box>
        </Box>
        <Wave type="light" />
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
        textAlign="center"
        pt={{ _: '20px', lg: '0' }}
      >
        <Box px="15px">
          <Box px="15px">
            <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
              Related Resources
            </Header>
            <Header variant="h6" color="fillBlackGray" sx={{ mb: '50px' }}>
              Still need more information? We’ve curated some related resources that may help you
              learn more on the topic.
            </Header>
          </Box>
          <Box mb={{ _: '15px', md: '145px' }}>
            <Box textAlign="left" maxWidth="960px" mx="auto">
              <RelatedResource
                type="video"
                href="https://www.youtube.com/watch?v=Uuc5BNaUOiw&t=251s"
              >
                TBS Presents: Welcome to Crossplane
              </RelatedResource>
              <RelatedResource
                type="video"
                href="https://www.youtube.com/watch?v=S-Pvhcz4KKI&t=33s"
              >
                The Importance of Crossplane in the Cloud Native Ecosystem
              </RelatedResource>
              <RelatedResource
                type="document"
                href="https://thenewstack.io/how-kubernetes-is-becoming-the-universal-control-plane-for-distributed-applications"
              >
                How Kuberentes is Becoming the Universal Control Plane for Distributed Applications
              </RelatedResource>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default UniversalCloudPlatform;
