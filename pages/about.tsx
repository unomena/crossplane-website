import React, { useState } from 'react';

import dynamic from 'next/dynamic';

import { styled } from '@mui/system';
import { COLORS } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import { JoinUs } from 'src/components/JoinUs';
import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';

const EmployeeMap = dynamic(() => import('src/components/EmployeeMap'), { ssr: false });

import { AnchorButton, Button } from 'src/elements/Button';
import { COL3, COL4, COL6, COL12, Column } from 'src/elements/Div';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import * as routes from 'src/routes';

// import advisors1x from 'public/about/advisors.png';
// import advisors2x from 'public/about/advisors@2x.png';
import advisors3x from 'public/about/advisors@3x.png';
// import advisorsMobile1x from 'public/about/advisors-mobile.png';
// import advisorsMobile2x from 'public/about/advisors-mobile@2x.png';
import advisorsMobile3x from 'public/about/advisors-mobile@3x.png';
import iconInnovation from 'public/about/icon-innovation.svg';
import iconNucleus from 'public/about/icon-nucleus.svg';
import iconTalent from 'public/about/icon-talent.svg';
// import bassamProfilePic1x from 'public/about/people/founders/bassam.png';
// import bassamProfilePic2x from 'public/about/people/founders/bassam@2x.png';
import bassamProfilePic3x from 'public/about/people/founders/bassam@3x.png';
// import grantProfilePic1x from 'public/about/people/founders/grant.png';
// import grantProfilePic2x from 'public/about/people/founders/grant@2x.png';
import grantProfilePic3x from 'public/about/people/founders/grant@3x.png';
// import jaredProfilePic1x from 'public/about/people/founders/jared.png';
// import jaredProfilePic2x from 'public/about/people/founders/jared@2x.png';
import jaredProfilePic3x from 'public/about/people/founders/jared@3x.png';
// import kelseyProfilePic1x from 'public/about/people/founders/kelsey.png';
// import kelseyProfilePic2x from 'public/about/people/founders/kelsey@2x.png';
import kelseyProfilePic3x from 'public/about/people/founders/kelsey@3x.png';
// import lemProfilePic1x from 'public/about/people/founders/lem.png';
// import lemProfilePic2x from 'public/about/people/founders/lem@2x.png';
import lemProfilePic3x from 'public/about/people/founders/lem@3x.png';
// import mattProfilePic1x from 'public/about/people/founders/matt.png';
// import mattProfilePic2x from 'public/about/people/founders/matt@2x.png';
import mattProfilePic3x from 'public/about/people/founders/matt@3x.png';
// import michaelProfilePic1x from 'public/about/people/founders/michael.png';
// import michaelProfilePic2x from 'public/about/people/founders/michael@2x.png';
import michaelProfilePic3x from 'public/about/people/founders/michael@3x.png';
// import nicProfilePic1x from 'public/about/people/founders/nic.png';
// import nicProfilePic2x from 'public/about/people/founders/nic@2x.png';
import nicProfilePic3x from 'public/about/people/founders/nic@3x.png';
// import robProfilePic1x from 'public/about/people/founders/rob.png';
// import robProfilePic2x from 'public/about/people/founders/rob@2x.png';
import robProfilePic3x from 'public/about/people/founders/rob@3x.png';
// import scottProfilePic1x from 'public/about/people/founders/scott.png';
// import scottProfilePic2x from 'public/about/people/founders/scott@2x.png';
import scottProfilePic3x from 'public/about/people/founders/scott@3x.png';
// import sumbryProfilePic1x from 'public/about/people/founders/sumbry.png';
// import sumbryProfilePic2x from 'public/about/people/founders/sumbry@2x.png';
import sumbryProfilePic3x from 'public/about/people/founders/sumbry@3x.png';
import purpleOval from 'public/about/purple-oval.svg';

const founders = [
  {
    pictureUrl: bassamProfilePic3x,
    name: 'Bassam Tabbara',
    title: 'Founder & CEO',
  },
  {
    pictureUrl: michaelProfilePic3x,
    name: 'Michael Goff',
    title: 'Founding Engineer',
  },
  {
    pictureUrl: jaredProfilePic3x,
    name: 'Jared Watts',
    title: 'Founding Engineer',
  },
  {
    pictureUrl: mattProfilePic3x,
    name: 'Matt Heilman',
    title: 'Founding Designer',
  },
  {
    pictureUrl: sumbryProfilePic3x,
    name: 'Sumbry',
    title: 'Engineering',
  },
  {
    pictureUrl: robProfilePic3x,
    name: 'Rob Clark',
    title: 'Alliances',
  },
  {
    pictureUrl: nicProfilePic3x,
    name: 'Nic Cope',
    title: 'Software',
  },
  {
    pictureUrl: kelseyProfilePic3x,
    name: 'Kelsey Havens',
    title: 'Marketing',
  },
  {
    pictureUrl: scottProfilePic3x,
    name: 'Scott Franklin',
    title: 'Sales',
  },
  {
    pictureUrl: grantProfilePic3x,
    name: 'Grant Gumina',
    title: 'Product',
  },
  {
    pictureUrl: lemProfilePic3x,
    name: 'Lem Diaz',
    title: 'People Ops',
  },
];

const advisors = [
  [
    { name: 'Chris Aniszcyk', title: 'CTO at Cloud Native Computing Foundation' },
    { name: 'Brandon Philips', title: 'Former Co-Founder & CTO at CoreOS' },
  ],
  [
    { name: 'Kelsey Hightower', title: 'Pricipal Engineer at Google Cloud' },
    { name: 'Eric Berg', title: 'CEO at Fauna Inc' },
  ],
  [
    { name: 'Spencer Kimball', title: 'CEO at Cockroach Labs Inc' },
    { name: 'Alex Polvi', title: 'CEO at CoreOS' },
  ],
  [
    { name: 'Google Ventures', title: 'gv.com' },
    { name: 'Telstra Ventures', title: 'telstraventures.com' },
  ],
  [{ name: 'Intel Capital', title: 'intelcapital.com' }],
];

const FounderCardContainer = styled(Box)`
  display: flex;
  aspect-ratio: 0.74285;
`;

const FounderCardImg = styled(Img)`
  aspect-ratio: 0.74285;
  width: 100%;
`;

const displayTitle = 'About Us';
const metaDescription =
  'We’re fundamentally changing how the world manages infrastructure by enabling a new era of infrastructure ' +
  'management that is automated, reliable, efficient and empowers application teams to accelerate innovation by ' +
  'delivering software faster.';

const About: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <PageProvider
      displayTitle={displayTitle}
      metaDescription={metaDescription}
      isOverflowVisible={!showMap}
    >
      <Box pt={{ _: '62px', md: '50px' }} bgcolor={COLORS.cornflower} textAlign="center">
        <Box maxWidth="930px" mx="auto" px="30px">
          <Header
            pill="About Us"
            variant="h1"
            bold={true}
            color="white"
            sx={{
              mt: '25px',
              mb: { _: '20px', md: '24px' },
            }}
          >
            We’re Fundamentally Changing How The World Manages Infrastructure
          </Header>
          <Header variant="h6" color="white" sx={{ mb: { _: '0', md: '80px' } }}>
            Our mission at Upbound is to enable a new era of infrastructure management that is
            automated, reliable, efficient and empowers application teams to accelerate innovation
            by delivering software faster.
          </Header>
        </Box>
        <Wave type="white" />
      </Box>
      <Box>
        <Box textAlign="center" px="30px">
          <Box>
            <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
              What Makes Upbounders Thrive
            </Header>
            <Header variant="h6" color="fillBlackGray" sx={{ maxWidth: '993px', mx: 'auto' }}>
              Our story at Upbound is your story. You're motivated by mission and purpose and you
              want your work to make a difference. We want the same thing.
            </Header>
          </Box>
          <Box
            display="flex"
            maxWidth="1100px"
            mx="auto"
            flexDirection={{ _: 'column', lg: 'row' }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mx="auto"
              mt="40px"
              maxWidth="300px"
            >
              <Img src={iconInnovation} alt="Innovation" width={64} />
              <Header
                variant="h5"
                bold={true}
                color="fillBlackBlack"
                sx={{ mt: '35px', mb: '11px' }}
              >
                We Enable Innovation
              </Header>
              <Paragraph color="fillBlackGray">
                We are the intersection between dev tools and cloud ops which enables those teams to
                work better. Founded in 2017 by the creators of Crossplane, we simplify how
                infrastructure and services are provisioned with a user friendly, control plane
                approach.
              </Paragraph>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mx="auto"
              mt="40px"
              maxWidth="300px"
            >
              <Img src={iconNucleus} alt="Innovation" width={64} />
              <Header
                variant="h5"
                bold={true}
                color="fillBlackBlack"
                sx={{ mt: '35px', mb: '11px' }}
              >
                Our Open Source Nucleus
              </Header>
              <Paragraph color="fillBlackGray">
                Open source has been at the core of our product and culture since day one. We value
                the open source community, innovation, and commitment to delivering quality results
                that run in production and we value those qualities across our team.
              </Paragraph>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mx="auto"
              mt="40px"
              maxWidth="300px"
            >
              <Img src={iconTalent} alt="Innovation" width={64} />
              <Header
                variant="h5"
                bold={true}
                color="fillBlackBlack"
                sx={{ mt: '35px', mb: '11px' }}
              >
                Talent Without Borders
              </Header>
              <Paragraph color="fillBlackGray">
                We are a remote only team which understands that great code and amazing ideas can
                come from anywhere around the globe. We welcome amazing talent to help us solve
                tough problems, no matter where you call home.
              </Paragraph>
            </Box>
          </Box>
          <AnchorButton
            btnType="blackOutline"
            href={routes.upboundGreenhouseUrl}
            tabIndex={0}
            sx={{
              mt: '50px',
              mb: '20px',
            }}
          >
            <Hidden lgUp>View Our Open Positions & Help Us Accelerate</Hidden>
            <Hidden lgDown>View Our Open Positions</Hidden>
          </AnchorButton>
        </Box>
        <Wave type="light" />
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
          textAlign: 'center',
        }}
      >
        <Box mx="30px">
          <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
            Our Leadership & Founding Team
          </Header>
          <Header variant="h6" color="fillBlackGray" sx={{ mb: '80px' }}>
            Meet the Upbound leadership team and founding members.
          </Header>
        </Box>
        <Box
          display="flex"
          maxWidth="1400px"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="left"
          width="100%"
          mx="auto"
          px="30px"
        >
          {founders.map((person) => (
            <Column
              key={person.name}
              colSize={{ _: COL12, md: COL6, lg: COL4, xl: COL3 }}
              sx={{ py: '12.5px' }}
            >
              <Box display="flex" flexDirection="column">
                <FounderCardImg
                  src={person.pictureUrl}
                  // srcSet={`${person.pictureUrls[0]} 1x, ${person.pictureUrls[1]} 2x, ${person.pictureUrls[2]} 3x`}
                  alt={person.name}
                />
                <Box textAlign="left" pt="22px" pl="10px">
                  <Header
                    variant="h5"
                    bold={true}
                    color="fillBlackBlack"
                    sx={{
                      lineHeight: '32px',
                      mb: '1px',
                    }}
                  >
                    {person.name}
                  </Header>
                  <Header
                    variant="h5"
                    color="fillBlackGray"
                    sx={{
                      lineHeight: '36px',
                      pb: '22.5px',
                    }}
                  >
                    {person.title}
                  </Header>
                </Box>
              </Box>
            </Column>
          ))}
          <Column colSize={{ _: COL12, md: COL6, lg: COL4, xl: COL3 }} sx={{ py: '12.5px' }}>
            <FounderCardContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              border="solid 1px rgba(90, 113, 132, 0.5);" // TODO: Unnamed color
              borderRadius="8px"
              padding="35px"
            >
              <Header variant="h6" color="fillBlackGray" sx={{ mb: '20px' }}>
                We’re a growing distributed team of digital vagabonds from all walks of life.
              </Header>
              {/* TODO: bring up map */}
              <Button btnType="blackOutline" onClick={() => setShowMap(true)}>
                Meet All Upbounders
              </Button>
            </FounderCardContainer>
          </Column>
        </Box>
        <EmployeeMap showMap={showMap} setShowMap={setShowMap} />
      </Box>
      <Box mt={{ xs: '113px', sm: '80px' }} px={{ md: '0', lg: '30px', xl: '0' }}>
        <JoinUs
          type="dark"
          title="Join Our Fast Growing Team"
          subtitle={`We’re looking for ambitious individuals who strive in chaotic unstructured environments,
          and love open source, culture, pushing technological boundaries, and proactively solving problems!`}
          href={routes.upboundGreenhouseUrl}
          button="View All Open Positions"
        />
        <Box bgcolor={COLORS.cornflower} height="75px" mt="-75px" position="relative" zIndex={-1} />
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.cornflower,
          backgroundImage: `url(${purpleOval.src})`,
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
          pt: { _: '100px', md: '180px' },
        }}
      >
        <Box
          display="flex"
          mx="auto"
          maxWidth="1300px"
          flexDirection={{ _: 'column-reverse', xl: 'row' }}
          overflow="hidden"
        >
          <Box
            mx={{ _: '30px', md: '50px' }}
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems={{ _: 'center', lg: 'flex-start' }}
          >
            <Header
              variant="h3"
              bold={true}
              color="white"
              sx={{
                mb: '25px',
                textAlign: { _: 'center', lg: 'left' },
              }}
            >
              Meet Our Team
              <br />
              of Advisors & Investors
            </Header>
            <Header
              variant="h6"
              color="white"
              sx={{ opacity: '0.8', textAlign: { _: 'center', lg: 'left' } }}
            >
              We are happy to be trusted by some of the best in the cloud native technology
              industry. Their support enables us to provide you with the best in class solutions for
              your teams.
            </Header>
            <Box mt="70px">
              {advisors.map(([advisor1, advisor2], i) => (
                <Box display="flex" key={i} flexDirection={{ _: 'column', md: 'row' }}>
                  <Box
                    width={{ _: 'auto', md: '256px' }}
                    mb="25px"
                    mr={{ _: 0, lg: '40px' }}
                    textAlign={{ _: 'center', lg: 'left' }}
                  >
                    <Header variant="h5" bold={true} color="white" sx={{ mb: '10px' }}>
                      {advisor1.name}
                    </Header>
                    <Paragraph color="white" sx={{ opacity: '0.8', lineHeight: '20px' }}>
                      {advisor1.title}
                    </Paragraph>
                  </Box>
                  {advisor2 && (
                    <Box
                      width={{ _: 'auto', md: '256px' }}
                      mb="25px"
                      mr={0}
                      textAlign={{ _: 'center', lg: 'left' }}
                    >
                      <Header variant="h5" bold={true} color="white" sx={{ mb: '10px' }}>
                        {advisor2.name}
                      </Header>
                      <Paragraph color="white" sx={{ opacity: '0.8', lineHeight: '20px' }}>
                        {advisor2.title}
                      </Paragraph>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Box ml={{ _: '-21vw', lg: '50px' }} mr={{ _: '-28vw', lg: '50px' }} flex={1}>
            <Hidden lgUp>
              <Img
                src={advisorsMobile3x}
                // srcSet={`${advisorsMobile1x} 1x, ${advisorsMobile2x} 2x, ${advisorsMobile3x} 3x`}
                alt="advisors"
                width="100%"
              />
            </Hidden>
            <Hidden lgDown>
              <Img
                src={advisors3x}
                // srcSet={`${advisors1x} 1x, ${advisors2x} 2x, ${advisors3x} 3x`}
                alt="advisors"
                width="100%"
              />
            </Hidden>
          </Box>
        </Box>
        <Wave type="light" />
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
      >
        <Box px="30px" textAlign="center">
          <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '15px' }}>
            We Would Love To Hear From You
          </Header>
          <Header
            variant="h6"
            color="fillBlackGray"
            sx={{ maxWidth: '670px', mx: 'auto', mb: '64px' }}
          >
            If you cannot find an answer to your question in our FAQ, you can always contact us. We
            will answer to you shortly!
          </Header>
          <ContactTileRowContainer>
            <ContactTile type="slack">Contact the Upbound team on Slack.</ContactTile>
            <ContactTile type="email">Get in touch with a sales representative.</ContactTile>
          </ContactTileRowContainer>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default About;
