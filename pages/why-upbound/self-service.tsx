import React, { useState } from 'react';

import { styled } from '@mui/system';
import { COLORS, MQ } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import VideoModal from 'src/elements/VideoModal';

import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';
import { CallToActionCarousel } from 'src/components/WhyUpbound/CallToActionCarousel';
import { CheckList } from 'src/components/WhyUpbound/CheckList';
import { RelatedResource } from 'src/components/WhyUpbound/RelatedResource';

import { AnchorButton } from 'src/elements/Button';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import * as routes from 'src/routes';

import ovalLeftBackground from 'public/oval-left.svg';
import quoteLeft from 'public/quote-left.svg';
import greenCheckImage from 'public/why-upbound/green-check.svg';
import kelseyHightower1xImage from 'public/why-upbound/kelsey-hightower.png';
import kelseyHightower2xImage from 'public/why-upbound/kelsey-hightower@2x.png';
import kelseyHightower3xImage from 'public/why-upbound/kelsey-hightower@3x.png';
import kelseyHightowerAvatar1xImage from 'public/why-upbound/kelsey-hightower-avatar.png';
import kelseyHightowerAvatar2xImage from 'public/why-upbound/kelsey-hightower-avatar@2x.png';
import kelseyHightowerAvatar3xImage from 'public/why-upbound/kelsey-hightower-avatar@3x.png';
import redXImage from 'public/why-upbound/red-x.svg';
import PlayCircle from 'src/svg/PlayCircle';

const Tile = styled(Box)`
  border: solid 1px ${COLORS.veryLightBlue};
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);

  ${MQ.md} {
    padding: 40px;
  }
`;

const displayTitle = 'Self Service Infrastructure';
const metaDescription =
  'Eliminate TicketOps and empower your teams to safely get the tools they need in half of the time. Control planes ' +
  'are the next evolution in empowering teams with self service infrastructure.';

const SelfService: React.FC = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  return (
    <PageProvider
      displayTitle={displayTitle}
      metaDescription={metaDescription}
      isOverflowVisible={isVideoVisible === false}
    >
      <Box pt={{ _: '62px', md: '50px' }} bgcolor={COLORS.cornflower} textAlign="center">
        <Box maxWidth="930px" mx="auto" px="30px">
          <Header
            pill="Why Upbound?"
            variant="h1"
            bold={true}
            color="white"
            sx={{ mt: '25px', mb: '20px' }}
          >
            Provide Self Service Infrastructure
          </Header>
          <Header variant="h6" color="white" sx={{ mb: '40px', opacity: '0.8' }}>
            Scripting was the way operations teams worked 20 plus years ago and then Infrastructure
            as Code (IaC) took over. Control planes as the next evolution in empowering teams with
            self service infrastructure.
          </Header>
          <CallToActionCarousel currentPage="self-service" />
        </Box>
        <Wave type="light" />
      </Box>
      <Box
        px="15px"
        mb="100px"
        sx={{ backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})` }}
      >
        <Box
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          alignItems="center"
          maxWidth="1100px"
          mx="auto"
        >
          <Box
            flex="4"
            px="15px"
            mr={{ _: '0', lg: '50px' }}
            textAlign={{ _: 'center', lg: 'left' }}
            mb={{ _: '50px', lg: '0' }}
          >
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Eliminate TicketOps and Empower Your Teams to Safely Get the Tools They Need in Half
              the Time
            </Header>
          </Box>
          <Box flex="5">
            <Tile mb="20px">
              <Header
                variant="h5"
                bold={true}
                color="fillBlackBlack"
                sx={{
                  display: { _: 'block', md: 'flex' },
                  alignItems: 'center',
                  pb: { md: '10px' },
                }}
              >
                <Box position="relative" mb={{ _: '10px', md: '0px' }} mr="20px">
                  <Img src={redXImage} alt="red x" width={20} />
                </Box>
                Ticket Based Systems Are Costly
              </Header>
              <Paragraph color="slate" sx={{ mt: '15px' }}>
                Companies need to optimize for speed in a world of ever increasing customer demands
                for value . Unfortunately, most organizations rely on the same ticket and email
                driven processes for infrastructure provisioning today as they had 20 years ago. The
                backends may have evolved from bash to HCL, but the underlying pain has remained
                consistent.
              </Paragraph>
            </Tile>
            <Tile mb="20px">
              <Header
                variant="h5"
                bold={true}
                color="fillBlackBlack"
                sx={{
                  display: { _: 'block', md: 'flex' },
                  alignItems: 'center',
                  pb: { md: '10px' },
                }}
              >
                <Box position="relative" mb={{ _: '10px', md: '0px' }} mr="20px">
                  <Img src={greenCheckImage} alt="green check" width={20} />
                </Box>
                Self Service Streamlines DevOps Workflows
              </Header>
              <Paragraph color="slate" sx={{ mt: '15px' }}>
                Modern, cloud native organizations are evolving from centralized management of
                infrastructure to a self-service model in which an operations team (often called a
                platform team) defines infrastructure abstractions that development teams can
                consume on demand.
              </Paragraph>
            </Tile>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.darkSlateBlue,
          backgroundImage: `url(${ovalLeftBackground.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'calc(50% - 750px) -60%',
        }}
      >
        <Box px="30px" pt="100px">
          <Box
            display="flex"
            flexDirection={{ _: 'column', lg: 'row' }}
            maxWidth="1100px"
            mx="auto"
            alignItems="center"
          >
            <Box
              display={{ _: 'flex', lg: 'block' }}
              flexDirection="column"
              alignItems="center"
              maxWidth={{ _: 'none', lg: '530px' }}
              mt="40px"
              mb={{ _: '0', md: '100px' }}
              textAlign={{ _: 'center', lg: 'left' }}
              flex="1"
            >
              <Img src={quoteLeft} alt="left quote" width={40} sx={{ mb: '40px' }} />
              <Header variant="h4" color="white" sx={{ fontSize: '30px', lineHeight: '48px' }}>
                As more cloud providers support Kubernetes style APIs for managing resources, the
                vision behind Crossplane moves closer to reality.
              </Header>
              <AnchorButton
                btnType="whiteOutline"
                onClick={() => setVideoVisible(true)}
                mobile={true}
                sx={{
                  mt: '30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: { _: 'center', md: 'flex-start' },
                }}
              >
                <Span bold={true} sx={{ mr: '4px' }}>
                  <Hidden mdUp>Watch Kelsey’s Demo</Hidden>
                  <Hidden mdDown>Watch Kelsey Hightower’s Crossplane Demo</Hidden>
                </Span>
                <PlayCircle />
              </AnchorButton>
              <Hidden lgUp>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection={{ _: 'column', md: 'row' }}
                  textAlign="center"
                  mt="50px"
                >
                  <Box mr={{ _: '0', md: '20px' }}>
                    <img
                      src={kelseyHightowerAvatar1xImage.src}
                      srcSet={`${kelseyHightowerAvatar1xImage.src} 1x, ${kelseyHightowerAvatar2xImage.src} 2x,
                    ${kelseyHightowerAvatar3xImage.src} 3x`}
                      alt="Jan Willies Picture"
                    />
                  </Box>
                  <Box textAlign={{ _: 'center', md: 'left' }} mb={{ _: '0px', md: '100px' }}>
                    <Header variant="h6" color="white">
                      Kelsey Hightower
                    </Header>
                    <Header variant="h6" color="white" sx={{ opacity: '0.5' }}>
                      Developer Adovate at the Google Cloud Platform
                    </Header>
                  </Box>
                </Box>
              </Hidden>
              <Hidden lgDown>
                <Header
                  variant="h6"
                  color="white"
                  sx={{ opacity: '0.5', mt: '30px', maxWidth: '450px' }}
                >
                  Kelsey Hightower is the Developer Adovate at the Google Cloud Platform
                </Header>
              </Hidden>
            </Box>
            <Box flex="1" display={{ _: 'none', lg: 'block' }}>
              <img
                src={kelseyHightower1xImage.src}
                srcSet={`
                ${kelseyHightower1xImage.src} 1x, ${kelseyHightower2xImage.src} 2x, ${kelseyHightower3xImage.src} 3x
                `}
                alt="Brian Grant Photo"
                width="100%"
              />
            </Box>
          </Box>
        </Box>
        <Wave type="white" />
      </Box>
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
              Self Service Infrastructure Becomes Reality With a Control Plane
            </Header>
            <Header variant="h6" color="fillBlackGray" sx={{ mt: '20px' }}>
              Crossplanes control plane technology gives infrastructure and application teams
              additional layers of interoperability and self-service like never seen before.
            </Header>
          </Box>
          <Box flex="1">
            <Box
              pl={{ _: '0', lg: '60px' }}
              pb={{ _: '0', lg: '10px' }}
              pt={{ _: '50px', lg: '10px' }}
              borderLeft={{ _: 'none', lg: `solid 1px ${COLORS.veryLightBlue}` }}
              borderTop={{ _: `solid 1px ${COLORS.veryLightBlue}`, lg: 'none' }}
            >
              <CheckList>
                <li>API Driven</li>
                <li>Automation through Reconciliation</li>
                <li>Reduced Engineering Effort</li>
                <li>Resource Granularity for Permissions and Policies</li>
                <li>Full Lifecycle of Provisioning Beyond Day 1 Activities</li>
                <li>Day 2 Activities Including Patching, Upgrades & Scaling</li>
              </CheckList>
            </Box>
          </Box>
        </Box>
      </Box>
      <Wave type="cornflower" />
      <Box bgcolor={COLORS.cornflower} textAlign="center">
        <Box px="30px" mb="55px">
          <Box maxWidth="1100px" mx="auto">
            <Header variant="h3" bold={true} color="white" sx={{ mb: '25px' }}>
              Upbound was built to reduce the friction, time and costs around provisioning
              infrastructure
            </Header>
            <Header variant="h6" color="white" sx={{ opacity: '0.8', mb: '30px' }}>
              We do this by providing tools that help any organization transition from manual
              scripting processes and Infrastructure as Code (IaC) to modern, self-service and
              GitOps practices. By automating tasks, both Dev and Ops teams can use their time more
              efficiently, to focus on what really matters - serving a company’s customer base in
              the best possible way.
            </Header>
            <AnchorButton
              btnType="aquaMarineFill"
              href={routes.contactSalesUrl}
              sx={{
                fontSize: { _: '14px', lg: '20px' },
                lineHeight: { _: '16px', lg: '25px' },
                width: { _: '100%', md: 'auto' },
                p: { _: '12px 18px', lg: '15px 40px' },
              }}
            >
              Contact Us & Get Started
            </AnchorButton>
          </Box>
        </Box>
        <Wave type="light" />
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
        pt="80px"
      >
        <Box px="15px" textAlign="center">
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
              <RelatedResource type="video" href="https://www.youtube.com/watch?v=AeERUZsDpeY">
                Crossplane Self-Service at Scale
              </RelatedResource>
              <RelatedResource
                type="document"
                href="https://blog.crossplane.io/crossplane-vs-terraform/"
              >
                Crossplane Versus Terraform
              </RelatedResource>
            </Box>
          </Box>
        </Box>
      </Box>
      <VideoModal open={isVideoVisible} setOpen={setVideoVisible} videoId="UffM5Gr1m-0" />
    </PageProvider>
  );
};

export default SelfService;
