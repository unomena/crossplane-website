import React, { useState } from 'react';

import { styled } from '@mui/system';
import { COLORS } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import { DivIcon as LeafletDivIcon, Icon as LeafletIcon } from 'leaflet';
import {
  MapContainer as LeafletMap,
  Marker as LeafletMarker,
  TileLayer as LeafletTileLayer,
} from 'react-leaflet';
import LeafletMarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import { JoinUs } from 'src/components/JoinUs';
import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';
import { AnchorButton, Button } from 'src/elements/Button';
import { COL3, COL4, COL6, COL12, Column } from 'src/elements/Div';
import Header from 'src/elements/Header';
import { If } from 'src/elements/If';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import * as routes from 'src/routes';

import advisors1x from 'public/about/advisors.png';
import advisors2x from 'public/about/advisors@2x.png';
import advisors3x from 'public/about/advisors@3x.png';
import advisorsMobile1x from 'public/about/advisors-mobile.png';
import advisorsMobile2x from 'public/about/advisors-mobile@2x.png';
import advisorsMobile3x from 'public/about/advisors-mobile@3x.png';
import iconInnovation from 'public/about/icon-innovation.svg';
import iconNucleus from 'public/about/icon-nucleus.svg';
import iconTalent from 'public/about/icon-talent.svg';
import bassamProfilePic1x from 'public/about/people/founders/bassam.png';
import bassamProfilePic2x from 'public/about/people/founders/bassam@2x.png';
import bassamProfilePic3x from 'public/about/people/founders/bassam@3x.png';
import grantProfilePic1x from 'public/about/people/founders/grant.png';
import grantProfilePic2x from 'public/about/people/founders/grant@2x.png';
import grantProfilePic3x from 'public/about/people/founders/grant@3x.png';
import jaredProfilePic1x from 'public/about/people/founders/jared.png';
import jaredProfilePic2x from 'public/about/people/founders/jared@2x.png';
import jaredProfilePic3x from 'public/about/people/founders/jared@3x.png';
import kelseyProfilePic1x from 'public/about/people/founders/kelsey.png';
import kelseyProfilePic2x from 'public/about/people/founders/kelsey@2x.png';
import kelseyProfilePic3x from 'public/about/people/founders/kelsey@3x.png';
import lemProfilePic1x from 'public/about/people/founders/lem.png';
import lemProfilePic2x from 'public/about/people/founders/lem@2x.png';
import lemProfilePic3x from 'public/about/people/founders/lem@3x.png';
import mattProfilePic1x from 'public/about/people/founders/matt.png';
import mattProfilePic2x from 'public/about/people/founders/matt@2x.png';
import mattProfilePic3x from 'public/about/people/founders/matt@3x.png';
import michaelProfilePic1x from 'public/about/people/founders/michael.png';
import michaelProfilePic2x from 'public/about/people/founders/michael@2x.png';
import michaelProfilePic3x from 'public/about/people/founders/michael@3x.png';
import nicProfilePic1x from 'public/about/people/founders/nic.png';
import nicProfilePic2x from 'public/about/people/founders/nic@2x.png';
import nicProfilePic3x from 'public/about/people/founders/nic@3x.png';
import robProfilePic1x from 'public/about/people/founders/rob.png';
import robProfilePic2x from 'public/about/people/founders/rob@2x.png';
import robProfilePic3x from 'public/about/people/founders/rob@3x.png';
import scottProfilePic1x from 'public/about/people/founders/scott.png';
import scottProfilePic2x from 'public/about/people/founders/scott@2x.png';
import scottProfilePic3x from 'public/about/people/founders/scott@3x.png';
import sumbryProfilePic1x from 'public/about/people/founders/sumbry.png';
import sumbryProfilePic2x from 'public/about/people/founders/sumbry@2x.png';
import sumbryProfilePic3x from 'public/about/people/founders/sumbry@3x.png';
import mapIconAaronEaton from 'public/about/people/members/Aaron Eaton.jpg';
import mapIconAlperUlucinar from 'public/about/people/members/Alper Ulucinar.jpg';
import mapIconBassamTabbara from 'public/about/people/members/Bassam Tabbara.jpg';
import mapIconBradleyAndersen from 'public/about/people/members/Bradley Andersen.jpg';
import mapIconChanceGraff from 'public/about/people/members/Chance Graff.jpg';
import mapIconDanielMangum from 'public/about/people/members/Daniel Mangum.jpg';
import mapIconDarenIott from 'public/about/people/members/Daren Iott.jpg';
import mapIconEzgiDemirel from 'public/about/people/members/Ezgi Demirel.jpg';
import mapIconGrantGumina from 'public/about/people/members/Grant Gumina.jpg';
import mapIconHassanTurken from 'public/about/people/members/Hassan Turken.jpg';
import mapIconJaredWatts from 'public/about/people/members/Jared Watts.jpg';
import mapIconKelseyHavens from 'public/about/people/members/Kelsey Havens.jpg';
import mapIconLemDiaz from 'public/about/people/members/Lem Diaz.jpg';
import mapIconMattHeilman from 'public/about/people/members/Matt Heilman.jpg';
import mapIconMatthiasLuebken from 'public/about/people/members/Matthias Luebken.jpg';
import mapIconMichaelGoff from 'public/about/people/members/Michael Goff.jpg';
import mapIconMuvaffakOnus from 'public/about/people/members/Muvaffak Onus.jpg';
import mapIconNateReid from 'public/about/people/members/Nate Reid.jpg';
import mapIconNicCope from 'public/about/people/members/Nic Cope.jpg';
import mapIconRobertClark from 'public/about/people/members/Robert Clark.jpg';
import mapIconScottFranklin from 'public/about/people/members/Scott Franklin.jpg';
import mapIconSergenYalcin from 'public/about/people/members/Sergen Yalcin.jpg';
import mapIconStevenBorrelli from 'public/about/people/members/Steven Borrelli.jpg';
import mapIconSumbry from 'public/about/people/members/Sumbry.jpg';
import mapIconTaylorThornton from 'public/about/people/members/Taylor Thornton.jpg';
import mapIconViktorFarcic from 'public/about/people/members/Viktor Farcic.jpg';
import purpleOval from 'public/about/purple-oval.svg';
import minus from 'public/minus.svg';

const team = [
  {
    name: 'Chance Graff',
    iconUrl: mapIconChanceGraff,
    position: {
      lat: 38.6530169,
      lng: -90.3835458,
    },
  },
  {
    name: 'Bassam Tabbara',
    iconUrl: mapIconBassamTabbara,
    position: {
      lat: 47.60503164456878,
      lng: -122.3284653908152,
    },
  },
  {
    name: 'Nic Cope',
    iconUrl: mapIconNicCope,
    position: {
      lat: 47.60503164456878,
      lng: -122.3284653908152,
    },
  },
  {
    name: 'Daniel Mangum',
    iconUrl: mapIconDanielMangum,
    position: {
      lat: 36.00514297225279,
      lng: -78.89505986504231,
    },
  },
  {
    name: 'Grant Gumina',
    iconUrl: mapIconGrantGumina,
    position: {
      lat: 47.60503164456878,
      lng: -122.3284653908152,
    },
  },
  {
    name: 'Jared Watts',
    iconUrl: mapIconJaredWatts,
    position: {
      lat: 32.7112586274536,
      lng: -117.15399042301745,
    },
  },
  {
    name: 'Matt Heilman',
    iconUrl: mapIconMattHeilman,
    position: {
      lat: 47.60503164456878,
      lng: -122.3284653908152,
    },
  },
  {
    name: 'Lem Diaz',
    iconUrl: mapIconLemDiaz,
    position: {
      lat: 37.321020822664416,
      lng: -121.93240575631363,
    },
  },
  {
    name: 'Muvaffak Onus',
    iconUrl: mapIconMuvaffakOnus,
    position: {
      lat: 41.0072502170002,
      lng: 28.9795623890507,
    },
  },
  {
    name: 'Hassan Turken',
    iconUrl: mapIconHassanTurken,
    position: {
      lat: 41.0072502170002,
      lng: 28.9795623890507,
    },
  },
  {
    name: 'Alper Ulucinar',
    iconUrl: mapIconAlperUlucinar,
    position: {
      lat: 41.0072502170002,
      lng: 28.9795623890507,
    },
  },
  {
    name: 'Daren Iott',
    iconUrl: mapIconDarenIott,
    position: {
      lat: 41.916430974891576,
      lng: -83.39794479979716,
    },
  },
  {
    name: 'Steven Borrelli',
    iconUrl: mapIconStevenBorrelli,
    position: {
      lat: 38.6530169,
      lng: -90.3835458,
    },
  },
  {
    name: 'Aaron Eaton',
    iconUrl: mapIconAaronEaton,
    position: {
      lat: 45.628010857207066,
      lng: -122.67387117322153,
    },
  },
  {
    name: 'Michael Goff',
    iconUrl: mapIconMichaelGoff,
    position: {
      lat: 46.06754196230517,
      lng: -118.33883013590257,
    },
  },
  {
    name: 'Robert Clark',
    iconUrl: mapIconRobertClark,
    position: {
      lat: 47.60503164456878,
      lng: -122.3284653908152,
    },
  },
  {
    name: 'Scott Franklin',
    iconUrl: mapIconScottFranklin,
    position: {
      lat: 47.60503164456878,
      lng: -122.3284653908152,
    },
  },
  {
    name: 'Viktor Farcic',
    iconUrl: mapIconViktorFarcic,
    position: {
      lat: 41.38719746017426,
      lng: 2.1809987462037586,
    },
  },
  {
    name: 'Matthias Luebken',
    iconUrl: mapIconMatthiasLuebken,
    position: {
      lat: 50.738445657750546,
      lng: 7.098614798978095,
    },
  },
  {
    name: 'Taylor Thornton',
    iconUrl: mapIconTaylorThornton,
    position: {
      lat: 45.508875033675274,
      lng: -122.66616223035564,
    },
  },
  {
    name: 'Sergen Yalcin',
    iconUrl: mapIconSergenYalcin,
    position: {
      lat: 41.0072502170002,
      lng: 28.9795623890507,
    },
  },
  {
    name: 'Sumbry',
    iconUrl: mapIconSumbry,
    position: {
      lat: 33.65949834238767,
      lng: -117.99880872825551,
    },
  },
  {
    name: 'Nate Reid',
    iconUrl: mapIconNateReid,
    position: {
      lat: 42.65828013354397,
      lng: -83.15192827166449,
    },
  },
  {
    name: 'Kelsey Havens',
    iconUrl: mapIconKelseyHavens,
    position: {
      lat: 36.974096961968435,
      lng: -122.03075464772448,
    },
  },
  {
    name: 'Ezgi Demirel',
    iconUrl: mapIconEzgiDemirel,
    position: {
      lat: 41.0072502170002,
      lng: 28.9795623890507,
    },
  },
  {
    name: 'Bradley Andersen',
    iconUrl: mapIconBradleyAndersen,
    position: {
      lat: 47.559118044014596,
      lng: 7.588845164957099,
    },
  },
  // TODO: Not started at Upbound yet
  // {
  //   name: 'Webster Mudge',
  //   iconUrl: '', // TODO: need icon
  //   position: {
  //     lat: ?,
  //     lng: ?,
  //   },
  // },
  // {
  //   name: 'Andrew St. Germain',
  //   iconUrl: '', // TODO: need icon
  //   position: {
  //     lat: ?,
  //     lng: ?,
  //   },
  // },
  // {
  //   name: 'Yury Tsarev',
  //   iconUrl: '', // TODO: need icon
  //   position: {
  //     lat: ?,
  //     lng: ?,
  //   },
  // },
  // {
  //   name: 'Katie Weaver',
  //   iconUrl: '', // TODO: need icon
  //   position: {
  //     lat: ?,
  //     lng: ?,
  //   },
  // },
];

const founders = [
  {
    pictureUrls: [bassamProfilePic1x, bassamProfilePic2x, bassamProfilePic3x],
    name: 'Bassam Tabbara',
    title: 'Founder & CEO',
  },
  {
    pictureUrls: [michaelProfilePic1x, michaelProfilePic2x, michaelProfilePic3x],
    name: 'Michael Goff',
    title: 'Founding Engineer',
  },
  {
    pictureUrls: [jaredProfilePic1x, jaredProfilePic2x, jaredProfilePic3x],
    name: 'Jared Watts',
    title: 'Founding Engineer',
  },
  {
    pictureUrls: [mattProfilePic1x, mattProfilePic2x, mattProfilePic3x],
    name: 'Matt Heilman',
    title: 'Founding Designer',
  },
  {
    pictureUrls: [sumbryProfilePic1x, sumbryProfilePic2x, sumbryProfilePic3x],
    name: 'Sumbry',
    title: 'Engineering',
  },
  {
    pictureUrls: [robProfilePic1x, robProfilePic2x, robProfilePic3x],
    name: 'Rob Clark',
    title: 'Alliances',
  },
  {
    pictureUrls: [nicProfilePic1x, nicProfilePic2x, nicProfilePic3x],
    name: 'Nic Cope',
    title: 'Software',
  },
  {
    pictureUrls: [kelseyProfilePic1x, kelseyProfilePic2x, kelseyProfilePic3x],
    name: 'Kelsey Havens',
    title: 'Marketing',
  },
  {
    pictureUrls: [scottProfilePic1x, scottProfilePic2x, scottProfilePic3x],
    name: 'Scott Franklin',
    title: 'Sales',
  },
  {
    pictureUrls: [grantProfilePic1x, grantProfilePic2x, grantProfilePic3x],
    name: 'Grant Gumina',
    title: 'Product',
  },
  {
    pictureUrls: [lemProfilePic1x, lemProfilePic2x, lemProfilePic3x],
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
];

const FounderCardContainer = styled(Box)`
  display: flex;
  aspect-ratio: 0.74285;
`;

const FounderCardImg = styled(Img)`
  aspect-ratio: 0.74285;
  width: 100%;
`;

const EmployeeMapOverlayContainer = styled(Box)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: grey;
  z-index: 1000;
  opacity: 0.8;
  cursor: pointer;
`;

const EmployeeMapContainer = styled(Box)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 20px;
  box-sizing: border-box;
  z-index: 1001;

  & > div:last-of-type {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;

const MapMarker: React.FC<{
  className?: string;
  name: string;
  position: { lat: number; lng: number };
  iconUrl: string;
}> = ({ className, name, position, iconUrl }) => {
  return (
    <LeafletMarker
      position={position}
      alt={name}
      title={name}
      icon={new LeafletIcon({ iconSize: [35, 35], iconUrl, className })}
    />
  );
};

const EmployeeMapMarker = styled(MapMarker)`
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const MapMarkerCluster: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <LeafletMarkerClusterGroup
      iconCreateFunction={(cluster) => {
        return new LeafletDivIcon({
          html: `${cluster.getChildCount()}`,
          iconSize: [35, 35],
          className,
          ...cluster,
        }) as any; /** CG 10/21/2021 Cheap workaround b/c I can't figure out the dependency typings */
      }}
      maxClusterRadius={(zoom: number) => 200 / zoom}
      showCoverageOnHover={false}
      spiderfyDistanceMultiplier={0.25}
    >
      {children}
    </LeafletMarkerClusterGroup>
  );
};

const EmployeeMapMarkerCluster = styled(MapMarkerCluster)`
  font-size: 18px;
  border-radius: 100%;
  border: 0px;
  background: ${COLORS.iris};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmployeeMapCloseContainer = styled(Box)`
  position: absolute;
  top: -15px;
  right: -15px;
  border: 2px solid ${COLORS.cornflower};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  background-color: white;
  z-index: 1001;
  cursor: pointer;

  img {
    position: relative;
    top: 2px;
  }
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
      <Box pt={{ _: '62px', m: '50px' }} bgcolor={COLORS.cornflower} textAlign="center">
        <Box maxWidth="930px" mx="auto" px="30px">
          <Header
            pill="About Us"
            variant="h1"
            bold={true}
            color="white"
            mt="25px"
            mb={{ _: '20px', m: '24px' }}
          >
            We’re Fundamentally Changing How The World Manages Infrastructure
          </Header>
          <Header variant="h6" color="white" mb={{ _: '0', m: '80px' }}>
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
          <Box display="flex" maxWidth="1100px" mx="auto" flexDirection={{ _: 'column', l: 'row' }}>
            <Box mx={{ _: 'auto', l: '50px' }} mt="40px" maxWidth="300px">
              <img src={iconInnovation} alt="Innovation" />
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
            <Box mx={{ _: 'auto', l: '50px' }} mt="40px" maxWidth="300px">
              <img src={iconNucleus} alt="Innovation" />
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
            <Box mx={{ _: 'auto', l: '50px' }} mt="40px" maxWidth="300px">
              <img src={iconTalent} alt="Innovation" />
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
              colSize={{ _: COL12, m: COL6, l: COL4, xl: COL3 }}
              sx={{ p: 12.5 }}
            >
              <Box display="flex" flexDirection="column">
                <FounderCardImg
                  src={person.pictureUrls[2]}
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
          <Column colSize={{ _: COL12, m: COL6, l: COL4, xl: COL3 }} sx={{ p: 12.5 }}>
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
        <If is={showMap}>
          <EmployeeMapContainer>
            <EmployeeMapCloseContainer onClick={() => setShowMap(false)}>
              <Img src={minus} alt="close" />
            </EmployeeMapCloseContainer>
            <LeafletMap
              center={[35.984307114756916, -33.69918189818304]}
              zoom={3}
              minZoom={3}
              maxZoom={5}
              scrollWheelZoom={false}
              touchZoom={false}
              inertia={true}
            >
              <LeafletTileLayer
                attribution='<a href="https://openstreetmap.org/">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <EmployeeMapMarkerCluster>
                {team.map((props, index) => {
                  return <EmployeeMapMarker key={index} {...props} />;
                })}
              </EmployeeMapMarkerCluster>
            </LeafletMap>
          </EmployeeMapContainer>
          <EmployeeMapOverlayContainer onClick={() => setShowMap(false)} />
        </If>
      </Box>
      <Box mt={{ xs: '113px', sm: '80px' }} px={{ m: '0', l: '30px', xl: '0' }}>
        <JoinUs
          type="dark"
          title="Join Our Fast Growing Team"
          subtitle={`We’re looking for ambitious individuals who strive in chaotic unstructured environments,
          and love open source, culture, pushing technological boundaries, and proactively solving problems!`}
          href={routes.upboundGreenhouseUrl}
          button="View All Open Positions"
        />
        <Box
          bgcolor={COLORS.cornflower}
          height="75px"
          mt="-75px"
          position="relative"
          zIndex={-1}
        ></Box>
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.cornflower,
          backgroundImage: `url(${purpleOval})`,
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
          <Box mx={{ _: '30px', m: '50px' }} flex={1}>
            <Header
              variant="h3"
              bold={true}
              color="white"
              sx={{
                mb: '25px',
              }}
              textAlign={{ _: 'center', m: 'left' }}
            >
              Meet Our Team
              <br />
              of Advisors & Investors
            </Header>
            <Header variant="h6" color="white" opacity="0.8" textAlign={{ _: 'center', m: 'left' }}>
              We are happy to be trusted by some of the best in the cloud native technology
              industry. Their support enables us to provide you with the best in class solutions for
              your teams.
            </Header>
            <Box mt="70px">
              {advisors.map(([advisor1, advisor2], i) => (
                <Box display="flex" key={i} flexDirection={{ _: 'column', m: 'row' }}>
                  <Box
                    width={{ _: 'auto', m: '256px' }}
                    mb="25px"
                    mr={{ _: 0, l: '40px' }}
                    textAlign={{ _: 'center', l: 'left' }}
                  >
                    <Header type="h5" bold={true} color="white" mb="10px">
                      {advisor1.name}
                    </Header>
                    <Paragraph color="white" opacity="0.8" lineHeight="20px">
                      {advisor1.title}
                    </Paragraph>
                  </Box>
                  <Box
                    width={{ _: 'auto', m: '256px' }}
                    mb="25px"
                    mr={0}
                    textAlign={{ _: 'center', l: 'left' }}
                  >
                    <Header type="h5" bold={true} color="white" mb="10px">
                      {advisor2.name}
                    </Header>
                    <Paragraph color="white" opacity="0.8" lineHeight="20px">
                      {advisor2.title}
                    </Paragraph>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box ml={{ _: '-21vw', l: '50px' }} mr={{ _: '-28vw', l: '50px' }} flex={1}>
            <Media lessThan="l">
              <Img
                src={advisorsMobile1x}
                srcSet={`${advisorsMobile1x} 1x, ${advisorsMobile2x} 2x, ${advisorsMobile3x} 3x`}
                alt="advisors"
                width="100%"
              />
            </Media>
            <Media greaterThan="m">
              <Img
                src={advisors1x}
                srcSet={`${advisors1x} 1x, ${advisors2x} 2x, ${advisors3x} 3x`}
                alt="advisors"
                width="100%"
              />
            </Media>
          </Box>
        </Box>
        <Wave type="light" />
      </Box>
      <Box backgroundImage={`linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`}>
        <Box px="30px" textAlign="center">
          <Header type="h3" bold={true} color="fillBlackBlack" mb="15px">
            We Would Love To Hear From You
          </Header>
          <Header type="h6" color="fillBlackGray" maxWidth="670px" mx="auto" mb="64px">
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
