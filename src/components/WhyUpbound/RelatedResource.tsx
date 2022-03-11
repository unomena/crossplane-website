import React from 'react';

import { styled } from '@mui/system';
import { COLORS, MQ } from 'src/theme';
import { Box } from '@mui/material';

import { Anchor } from 'src/elements/Anchor';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';

import playIcon from 'public/play-circle-dark.svg';
import iconResource from 'public/why-upbound/icon-resource.svg';

const RelatedResourceTile = styled(Anchor)`
  display: flex;
  border-radius: 8px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border: solid 1px ${COLORS.veryLightBlue};
  background-color: ${COLORS.white};
  align-items: center;
  padding: 30px 15px;
  margin-bottom: 15px;
  flex-direction: column-reverse;
  text-align: center;
  text-decoration: none;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${MQ.md} {
    flex-direction: row;
    padding: 35px 30px;
    text-align: left;

    & > div:first-of-type {
      overflow: hidden;
      margin-right: 10px;

      & > * {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`;

const RelatedResourceIcon: React.FC<{ type: 'video' | 'document' }> = ({ type }) => {
  switch (type) {
    case 'video': {
      return <Img src={playIcon} alt="video icon" width={16} />;
    }
    case 'document': {
      return <Img src={iconResource} alt="document icon" width={15} />;
    }
    default:
      return null;
  }
};

const RelatedResource: React.FC<{ type: 'video' | 'document'; href: string }> = ({
  type,
  children,
  href,
}) => {
  return (
    <RelatedResourceTile href={href} target="_blank" rel="noopener noreferrer">
      <Box flex="1">
        <Header variant="h6" color="fillBlackBlack" sx={{ mt: { _: '10px', md: '0' } }}>
          {children}
        </Header>
      </Box>
      <Box flex="0 0 15px">
        <RelatedResourceIcon type={type} />
      </Box>
    </RelatedResourceTile>
  );
};

export { RelatedResource };
