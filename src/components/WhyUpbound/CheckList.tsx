import { styled } from '@mui/system';

import { COLORS, fontAvenirRoman } from 'src/theme';

import greenListStyle from 'public/why-upbound/green-list-style.svg';

const CheckList = styled('ul')`
  margin: 0;
  padding: 0;

  & > li {
    list-style: none;
    background: url(${greenListStyle.src}) no-repeat left center;
    padding-left: 35px;
    margin-bottom: 25px;
    ${fontAvenirRoman}
    font-size: 16px;
    color: ${COLORS.fillBlackBlack};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export { CheckList };
