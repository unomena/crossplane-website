import React from 'react';

import { styled } from '@mui/system';
import { COLORS } from 'src/theme';
import { Box } from '@mui/material';

import { DivIcon as LeafletDivIcon, Icon as LeafletIcon } from 'leaflet';
import {
  MapContainer as LeafletMap,
  Marker as LeafletMarker,
  TileLayer as LeafletTileLayer,
} from 'react-leaflet';
import LeafletMarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

import { If } from 'src/elements/If';
import { Img } from 'src/elements/Img';

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
  display: flex !important;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  showMap: boolean;
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
};

const EmployeeMap = ({ showMap, setShowMap }: Props) => {
  return (
    <If is={showMap}>
      <EmployeeMapContainer>
        <EmployeeMapCloseContainer onClick={() => setShowMap(false)}>
          <Img src={minus} alt="close" width={13} />
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
              return <EmployeeMapMarker key={index} {...props} iconUrl={props.iconUrl.src} />;
            })}
          </EmployeeMapMarkerCluster>
        </LeafletMap>
      </EmployeeMapContainer>
      <EmployeeMapOverlayContainer onClick={() => setShowMap(false)} />
    </If>
  );
};

export default EmployeeMap;
