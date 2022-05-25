import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { styled } from '@mui/system';
import { COLORS } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import { JoinUs } from 'src/components/JoinUs';
import PageProvider from 'src-new/components/PageProvider';
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
import actAsAnOwner from 'public/about/values/act-as-an-owner.svg';
import beAccountable from 'public/about/values/be-accountable.svg';
import careForOurCommunities from 'public/about/values/care-for-our-communities.svg';
import championTheCustomer from 'public/about/values/champion-the-customer.svg';
import collaborateDecisively from 'public/about/values/collaborate-decisively.svg';
import demonstrateCraftsmanship from 'public/about/values/demonstrate-craftsmanship.svg';
import engageVulnerability from 'public/about/values/engage-vulnerability.svg';
import companyOnSites from 'public/about/team-features/company-On-sites.png';
import diverseAndInclusive from 'public/about/team-features/diverse-and-inclusive.png';
import quarterlyGetTogethers from 'public/about/team-features/quarterly-get-togethers.png';
import upboundersIn10Countries from 'public/about/team-features/upbounders-in-10-countries.png';
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

const teamFeatures = [
  {
    img: companyOnSites,
    title: 'Company "On"sites',
    body: `Everyone comes together for our annual company “on”site  where we celebrate our wins and have some fun!`,
  },
  {
    img: quarterlyGetTogethers,
    title: 'Quarterly Get Togethers',
    body: `Teams come together in person to plan, exchange ideas and strengthen relationships with each other.`,
  },
  {
    img: upboundersIn10Countries,
    title: 'Upbounders in 10 Countries',
    body: `A global footprint gives us the ability to bring in the
    best talent from across the globe and work with the best and brightest.`,
  },
  {
    img: diverseAndInclusive,
    title: 'Diverse and inclusive',
    body: `We are stronger because we are all unique and bring different
    perspectives and ideas. Be your authentic self at Upbound.`,
  },
];

const values = [
  {
    icon: beAccountable,
    title: 'Be Accountable',
    body: `We expect everyone at Upbound to hold themselves and each other accountable
    to focusing and driving results that tie directly back into company goals.`,
  },
  {
    icon: collaborateDecisively,
    title: 'Collaborate Decisively',
    body: `Your goal with every interaction is to add clarity, alignment, and context to
    every decision and objective. You habitually dismantle ambiguity and rebuild it with intent and clarity.`,
  },
  {
    icon: demonstrateCraftsmanship,
    title: 'Demonstrate Craftsmanship',
    body: `A true craftsperson is a lifelong learner who strives to deliver the best possible result.
    They are constantly iterating on their solutions to improve results and delight their customers.`,
  },
  {
    icon: careForOurCommunities,
    title: 'Care For Our Communities',
    body: `We care deeply about our customers, our open source ecosystem, and our fellow Upbounders.
    We have an unwavering determination to make them thrive.`,
  },
  {
    icon: championTheCustomer,
    title: 'Champion The Customer',
    body: `Have a deep empathy for the customer and keep their business objectives and challenges
    top of mind as we navigate through solutions to problems.`,
  },
  {
    icon: actAsAnOwner,
    title: 'Act as an owner',
    body: `As an owner, our employees care deeply about the success of Upbound and champion the people and culture.`,
  },
  {
    icon: engageVulnerability,
    title: 'Engage Vulnerability',
    body: `Upbounders work to make themselves and everyone around them better by creating a safe
    environment where everyone can contribute, fail forward, and learn from each other.`,
  },
];

const caringFeatures = [
  {
    title: 'Ownership',
    body: `Upbounders are giving meaningful equity.
    Everyone here is an owner and benefits from the success of the company.`,
  },
  {
    title: 'Health Care Benefits',
    body: `We cover 100% of the medical and dental premiums
    and 99% vision for Upbounders. We believe you do your best
    when you’re not worried about your health.`,
  },
  {
    title: 'Flexible Hours',
    body: `Mid day workout? No problem. Take the kids to the park,
    absolutely! Work hours that make sense for you.`,
  },
  {
    title: 'Work From Anywhere',
    body: `Upbound is a remote first company. Work where you want,
    how you want.  You have flexibility to work anywhere.`,
  },
  {
    title: 'Flexible PTO',
    body: `We care too deeply about you to let you burn out.
    Take the time off that you need to recharge or disconnect.`,
  },
  {
    title: 'Home Office Stipend',
    body: `Comfortable desk, chair, and fast internet. Upgrade your workstation.`,
  },
];

const founders = [
  {
    pictureUrl: bassamProfilePic3x,
    name: 'Bassam Tabbara',
    title: 'Founder & CEO',
  },
  {
    pictureUrl: sumbryProfilePic3x,
    name: 'Sumbry',
    title: 'Engineering',
  },
  {
    pictureUrl: kelseyProfilePic3x,
    name: 'Kelsey Havens',
    title: 'Marketing',
  },
  {
    pictureUrl: lemProfilePic3x,
    name: 'Lem Diaz',
    title: 'People Ops',
  },
  {
    pictureUrl: jaredProfilePic3x,
    name: 'Jared Watts',
    title: 'Founding Engineer',
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
    pictureUrl: michaelProfilePic3x,
    name: 'Michael Goff',
    title: 'Founding Engineer',
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
    pictureUrl: mattProfilePic3x,
    name: 'Matt Heilman',
    title: 'Founding Designer',
  },
];

const advisors = [
  [
    { name: 'Chris Aniszcyk', title: 'CTO at Cloud Native Computing Foundation' },
    { name: 'Brandon Philips', title: 'Former Co-Founder & CTO at CoreOS' },
  ],
  [
    { name: 'Kelsey Hightower', title: 'Principal Engineer at Google Cloud' },
    { name: 'Eric Berg', title: 'CEO at Fauna Inc' },
  ],
  [
    { name: 'Spencer Kimball', title: 'CEO at Cockroach Labs Inc' },
    { name: 'Alex Polvi', title: 'CEO at CoreOS' },
  ],
  [
    { name: 'GV', title: 'gv.com' },
    { name: 'Telstra Ventures', title: 'telstraventures.com' },
  ],
  [
    { name: 'Intel Capital', title: 'intelcapital.com' },
    { name: 'Altimeter Capital', title: 'altimeter.com' },
  ],
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
      <Box pt={{ _: '126px', md: '130px' }} bgcolor={COLORS.firefly} textAlign="center">
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
            Life at Upbound
          </Header>
          <Header variant="h6" color="white" sx={{ mb: { _: '0', md: '100px' } }}>
            Our mission at Upbound is to enable a new era of infrastructure management that is
            automated, reliable, efficient and empowers application teams to accelerate innovation
            by delivering software faster.
          </Header>
        </Box>
        <Wave type="dark" />
      </Box>
      <Box sx={{ bgcolor: COLORS.elephant }}>
        <Box textAlign="center" px="30px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            flexWrap={{ _: 'wrap', xl: 'nowrap' }}
            flexDirection={{ _: 'column', lg: 'row' }}
            mt={{ _: '-48px', xl: '0' }}
          >
            {teamFeatures.map((feature) => (
              <Box
                key={feature.title}
                display="flex"
                flexDirection="column"
                alignItems="center"
                mx={{ _: '0', lg: '20px' }}
                mt={{ _: '48px', xl: '0' }}
                maxWidth={{ _: '400px', xl: '260px' }}
                position="relative"
              >
                <Box position={{ _: 'relative', xl: 'absolute' }} top={{ _: '0', xl: '-180px' }}>
                  <Box sx={{ width: 260, height: 180, position: 'relative' }}>
                    <Image src={feature.img} alt="feature image" />
                  </Box>
                </Box>
                <Header
                  variant="h5"
                  bold={true}
                  color="white"
                  sx={{
                    mt: '35px',
                    mb: '11px',
                    width: '260px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {feature.title}
                </Header>
                <Paragraph color="white" sx={{ minHeight: 84, maxHeight: 112 }}>
                  {feature.body}
                </Paragraph>
              </Box>
            ))}
          </Box>
          <AnchorButton
            btnType="whiteOutline"
            href={routes.upboundGreenhouseUrl}
            tabIndex={0}
            sx={{
              mt: '50px',
              mb: '20px',
            }}
          >
            View All Open Positions
          </AnchorButton>
        </Box>
        <Wave type="firefly" />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Box mx="30px">
          <Header variant="h3" bold={true} color="white" sx={{ mb: '20px' }}>
            Upbound's Values
          </Header>
          <Header variant="h6" color="white" sx={{ mb: '16px', maxWidth: 800, mx: 'auto' }}>
            Upbound operates like a healthy open source project. As part of that cultural DNA we are
            continuously iterating, improving, and innovating collaboratively and with transparency.
          </Header>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxWidth="1360px"
          mx="auto"
          flexWrap="wrap"
          flexDirection={{ _: 'column', lg: 'row' }}
          pb="40px"
        >
          {values.map((value) => (
            <Box
              key={value.title}
              display="flex"
              flexDirection="column"
              alignItems="center"
              mx={{ _: '0', lg: '20px' }}
              mt="48px"
              maxWidth="300px"
              minHeight="274px"
            >
              <Img src={value.icon} alt="value icon" width={64} height={64} />
              <Header variant="h5" bold={true} color="white" sx={{ mt: '35px', mb: '11px' }}>
                {value.title}
              </Header>
              <Paragraph color="white">{value.body}</Paragraph>
            </Box>
          ))}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mx={{ _: '0', lg: '20px' }}
            mt="48px"
            maxWidth="300px"
            minHeight="274px"
            border="solid 1px white;" // TODO: Unnamed color
            borderRadius="8px"
            padding="35px"
          >
            <Header variant="h6" color="white" sx={{ mb: '20px' }}>
              At Upbound, our values are highly important to us
            </Header>
            <Button
              btnType="whiteOutline"
              onClick={() => {
                window.open(routes.upboundValuesDoc, '_blank');
              }}
            >
              Zoom in on Upbound’s Values
            </Button>
          </Box>
        </Box>
        <Wave type="elephant" />
      </Box>
      <Box sx={{ bgcolor: COLORS.elephant, textAlign: 'center' }}>
        <Box mx="30px">
          <Header variant="h3" bold={true} color="white" sx={{ mb: '20px' }}>
            Caring For Our Team
          </Header>
          <Header variant="h6" color="white" sx={{ mb: '40px', maxWidth: 800, mx: 'auto' }}>
            We want all of our Upbounders to thrive and we believe that you do your best when you
            feel your best. Here are a few benefits we provide for all Upbound employees.
          </Header>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxWidth="1180px"
          mx="auto"
          flexWrap="wrap"
          mb={{ _: '0', md: '100px' }}
          flexDirection={{ _: 'column', lg: 'row' }}
        >
          {caringFeatures.map((feature) => (
            <Box
              key={feature.title}
              sx={{
                borderRadius: '16px',
                padding: '40px 20px',
                bgcolor: COLORS.bigStone,
                border: `solid 1px ${COLORS.bigStone}`,
                boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                maxWidth: '350px',
                minHeight: '228px',
                mx: '20px',
                mb: '40px',
              }}
            >
              <Header variant="h5" bold={true} color="white" sx={{ mb: '10px' }}>
                {feature.title}
              </Header>
              <Paragraph color="white">{feature.body}</Paragraph>
            </Box>
          ))}
        </Box>
        <Wave type="firefly" />
      </Box>
      <Box
        sx={{
          bgcolor: COLORS.firefly,
          textAlign: 'center',
        }}
      >
        <Box mx="30px">
          <Header variant="h3" bold={true} color="white" sx={{ mb: '20px' }}>
            Our Leadership & Founding Team
          </Header>
          <Header variant="h6" color="white" sx={{ mb: '80px' }}>
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
                    color="white"
                    sx={{
                      lineHeight: '32px',
                      mb: '1px',
                    }}
                  >
                    {person.name}
                  </Header>
                  <Header
                    variant="h5"
                    color="white"
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
              border="solid 1px white;" // TODO: Unnamed color
              borderRadius="8px"
              padding="35px"
            >
              <Header variant="h6" color="white" sx={{ mb: '20px' }}>
                We’re a growing distributed team of digital vagabonds from all walks of life.
              </Header>
              {/* TODO: bring up map */}
              <Button btnType="whiteOutline" onClick={() => setShowMap(true)}>
                Meet All Upbounders
              </Button>
            </FounderCardContainer>
          </Column>
        </Box>
        <EmployeeMap showMap={showMap} setShowMap={setShowMap} />
      </Box>
      <Box mt={{ xs: '113px', sm: '80px' }} px={{ md: '0', lg: '30px', xl: '0' }}>
        <JoinUs
          type="bigstone"
          title="Join Our Fast Growing Team"
          subtitle={`Come build the next generation of the cloud with us.  We’re looking for problem solvers,
          builders, and innovators who love open source and pushing technological boundaries!`}
          href={routes.upboundGreenhouseUrl}
          button="View All Open Positions"
        />
        <Box bgcolor={COLORS.elephant} height="75px" mt="-75px" zIndex={-1} />
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.elephant,
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
        <Wave type="firefly" />
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.firefly,
          mb: 40,
        }}
      >
        <Box px="30px" textAlign="center">
          <Header variant="h3" bold={true} color="white" sx={{ mb: '15px' }}>
            We Would Love To Hear From You
          </Header>
          <Header variant="h6" color="white" sx={{ maxWidth: '670px', mx: 'auto', mb: '64px' }}>
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
