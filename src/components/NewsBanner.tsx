import React, { useEffect } from 'react';

import Image from 'next/future/image';

import { Box, Typography, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

import useNewsBanner from 'src/context/newsBannerContext';

// import Link from 'src/elements/Link';
import Button from 'src/elements/Button';

import closeIcon from 'public/icons/close-icon.svg';

const root: SxProps = {
  position: 'fixed',
  width: '100%',
  bottom: { _: '0', md: 'unset' },
  zIndex: 2,
  py: 2,
  pr: { _: '40px', md: '100px' },
  pl: { _: '40px', md: '50px' },
  bgcolor: COLORS.turquoise,
  color: COLORS.white,
  minHeight: '74px',
  display: { _: null, md: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
};

type NewsBannerProps = {
  newsBannerClosed?: boolean;
  setNewsBannerClosed: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewsBanner = ({ newsBannerClosed, setNewsBannerClosed }: NewsBannerProps) => {
  const { newsBannerData } = useNewsBanner();
  const { text, button } = newsBannerData;

  const handleClick = () => {
    setNewsBannerClosed(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setNewsBannerClosed(false);
    }, 350);
  }, []);

  return (
    <Box
      sx={{
        transform: !newsBannerClosed ? 'transform: translateY(0)' : 'translateY(-100%)',
        transitionDuration: '1s',
        ...root,
      }}
    >
      <Box sx={{ textAlign: { _: 'center', md: 'left' } }}>
        <Typography variant="body2" sx={{ fontSize: '18px', lineHeight: '26px' }}>
          {text}
        </Typography>
      </Box>
      <Box
        sx={{
          minWidth: 175,
          textAlign: { _: 'center', md: 'left' },
          ml: { _: 0, md: 3 },
          mt: { _: 3, md: 0 },
        }}
      >
        {button &&
          button.map(({ id, value }) => (
            <Button key={id} sizeType="normal" cmsValue={value}>
              {value.text}
            </Button>
          ))}
      </Box>
      <Box
        onClick={handleClick}
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: { _: '40px', md: '74px' },
          height: { _: '50px', md: '100%' },
          right: 0,
          top: 0,
          borderLeft: { md: '2px solid rgba(225, 225, 225, 0.6)' },
          color: COLORS.white,
          cursor: 'pointer',
        }}
      >
        <Image src={closeIcon} alt="menu icon" style={{ width: 24, height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default NewsBanner;
