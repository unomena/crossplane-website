import React from 'react';

import Image from 'next/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS } from 'src/theme';

const rootBase: SxProps = {
  position: 'relative',
  bgcolor: COLORS.bigStone,
  borderRadius: '10px',
  width: '100%',
  height: '100%',
  display: 'flex',
  overflow: 'hidden',
};

const rootVertical: SxProps = {
  ...rootBase,
  flexDirection: 'column',
};
const rootHorizontal: SxProps = {
  ...rootBase,
  flexDirection: 'row',
};

const root = {
  vertical: rootVertical,
  horizontal: rootHorizontal,
};

const pillStyle: SxProps = {
  position: 'absolute',
  top: 12,
  right: 12,
  zIndex: 100,
  height: 28,
  px: 2.5,
  borderRadius: 100,
  bgcolor: COLORS.cornflower,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Avenir-Heavy',
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: '0',
  color: '#fff',
};

const profilePicBase: SxProps = {
  position: 'absolute',
  right: 20,
  border: '1px solid #fff',
  borderRadius: 100,
};

const profilePicSmall: SxProps = {
  ...profilePicBase,
  top: -36,
  width: 58,
  height: 58,
  p: '3px',
};

const profilePicBig: SxProps = {
  ...profilePicBase,
  top: -80,
  width: 105,
  height: 105,
  p: '6px',
};

const profilePic = {
  small: profilePicSmall,
  big: profilePicBig,
};

const smallTitleText: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: '13px',
  lineHeight: '24px',
  color: COLORS.linkWater,
  opacity: 0.41,
};

const typeText: SxProps = {
  ...smallTitleText,
  textTransform: 'capitalize',
};

const divider: SxProps = {
  ...smallTitleText,
  mx: 1,
};

const dateText: SxProps = {
  ...smallTitleText,
  fontFamily: 'Avenir-Oblique',
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type Props = {
  layout?: 'vertical' | 'horizontal';
  img?: string | StaticImport;
  imgHeight?: number;
  imgWidth?: number;
  profileImg?: string | StaticImport;
  profileImgSize?: 'small' | 'big';
  person?: string;
  type?: string;
  title?: string;
  titleVariant?: 'h4_new' | 'h5_new';
  body?: string;
  date?: string;
  pillText?: string;
};

const MediaCard = ({
  layout = 'vertical',
  img,
  imgHeight,
  imgWidth,
  profileImg,
  profileImgSize = 'small',
  person,
  type,
  title,
  titleVariant = 'h5_new',
  body,
  date,
  pillText,
}: Props) => {
  return (
    <Box sx={root[layout]}>
      {pillText && (
        <Box sx={pillStyle}>
          <Typography variant="inherit">{pillText}</Typography>
        </Box>
      )}
      {img && (
        <Box sx={{ position: 'relative', width: imgWidth || '100%', height: imgHeight || '100%' }}>
          <Image src={img} alt="card-img" layout="fill" objectFit="cover" objectPosition="center" />
        </Box>
      )}
      <Box sx={{ position: 'relative', pt: 2, px: '22px' }}>
        {profileImg && (
          <Box sx={profilePic[profileImgSize]}>
            <Image src={profileImg} alt="profile-img" />
          </Box>
        )}
        {(person || type) && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: '2px' }}>
            {person && <Typography sx={smallTitleText}>{person}</Typography>}
            {type && (
              <>
                <Typography sx={divider}>|</Typography>
                <Typography sx={typeText}>{type}</Typography>
              </>
            )}
          </Box>
        )}
        {title && (
          <Typography variant={titleVariant} sx={{ mb: 1.5 }}>
            {title}
          </Typography>
        )}
        {body && <Typography variant="body_small">{body}</Typography>}
        {date && <Typography sx={dateText}>{date}</Typography>}
      </Box>
    </Box>
  );
};

export default MediaCard;
