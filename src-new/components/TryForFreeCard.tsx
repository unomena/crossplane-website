import React from 'react';

import { Box, Typography, SxProps } from '@mui/material';
import { Button } from 'src-new/elements/Button';

const wrapper: SxProps = {
  width: '100%',
  maxWidth: '1160px',
  position: 'absolute',
  top: 0,
  transform: 'translateY(-50%)',
  clipPath: 'url(#myClip)',
};

const root: SxProps = {
  width: '100%',
  minHeight: 384,
  py: 8,
  backgroundImage: 'linear-gradient(286deg, #3DE2CB 0%, #6D64F5 47%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  // clipPath: 'polygon(0 0, 100% 0, 95% 85%, 5% 100%)',
};

type Props = {};

const TryForFreeCard = ({}: Props) => {
  return (
    <Box sx={wrapper}>
      <Box sx={root}>
        <Typography variant="h2_new" color="#fff" sx={{ mb: 2.5 }}>
          Try Upbound for free
        </Typography>
        <Typography variant="body_normal" color="#fff" sx={{ maxWidth: 640, mb: 5 }}>
          Start your control-plane transformation for free by creating a free Upbound account.
        </Typography>
        <Button styleType="purpleContained">Get started now</Button>
      </Box>

      {/* <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <circle cx="100" cy="100" r="40" />
            <circle cx="60" cy="60" r="40" />
          </clipPath>
        </defs>
      </svg> */}
    </Box>
  );
};

export default TryForFreeCard;
