import React from 'react';

import { styled } from '@mui/system';
import { MQ } from 'src/theme';
import { Box } from '@mui/material';

import iconDemo from 'public/icon-demo.svg';
import iconEmail from 'public/icon-email.svg';
import iconSlack from 'public/icon-slack.svg';
import { Anchor } from 'src/elements/Anchor';
import { Card } from 'src/elements/Div';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import * as routes from 'src/routes';

const ContactTileContainer = styled(Anchor)`
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
  max-width: 466px;
  text-decoration: none;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${MQ.lg} {
    margin-bottom: 0;
    margin-right: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const ContactTileCard = styled(Card)`
  width: 100%;
  height: 100%;
  padding: 45px 50px;
  max-width: 466px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: #1b3549;
  background-color: #1b3549;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${MQ.md} {
    padding: 30px 50px;
  }
`;

const ContactTileRowContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${MQ.lg} {
    flex-direction: row;
  }
`;

type TileType = 'slack' | 'email' | 'demo';

const ContactTileImg: React.FC<{ type: TileType }> = ({ type }) => {
  switch (type) {
    case 'slack': {
      return <Img src={iconSlack} alt="slack" width={64} />;
    }
    case 'email': {
      return <Img src={iconEmail} alt="email" width={64} />;
    }
    case 'demo': {
      return <Img src={iconDemo} alt="email" width={64} />;
    }
    default:
      return null;
  }
};

const ContactTileTitle: React.FC<{ type: TileType }> = ({ type }) => {
  switch (type) {
    case 'slack': {
      return (
        <Header variant="h5" bold={true} color="white" sx={{ mt: '11px' }}>
          slack.crossplane.io
        </Header>
      );
    }
    case 'email': {
      return (
        <Header variant="h5" bold={true} color="white" sx={{ mt: '11px' }}>
          {routes.infoEmail}
        </Header>
      );
    }
    case 'demo': {
      return (
        <Header variant="h5" bold={true} color="white" sx={{ mt: '11px' }}>
          Schedule a Demo
        </Header>
      );
    }
    default:
      return null;
  }
};

const contactLocation = (type: TileType) => {
  switch (type) {
    case 'slack': {
      return routes.crossplaneSlackUrl;
    }
    case 'email': {
      return routes.infoEmailUrl;
    }
    case 'demo': {
      return routes.contactRoute;
    }
    default:
      return '';
  }
};

const ContactTile: React.FC<{
  className?: string;
  type: TileType;
}> = ({ children, className, type }) => {
  return (
    <ContactTileContainer
      href={contactLocation(type)}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block' }}
      className={className}
    >
      <ContactTileCard>
        <ContactTileImg type={type} />
        <ContactTileTitle type={type} />
        <Paragraph color="white" sx={{ mt: '7px' }}>
          {children}
        </Paragraph>
      </ContactTileCard>
    </ContactTileContainer>
  );
};

export { ContactTile, ContactTileRowContainer };
