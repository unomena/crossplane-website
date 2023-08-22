import React, { useEffect, useState } from 'react';

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
  zIndex: 2,
  // px: { _: '19px', desktop: 1 },
  py: '11px',
  pr: '100px',
  pl: '50px',
  bgcolor: COLORS.turquoise,
  color: COLORS.white,
  minHeight: '50px',
  display: { _: null, md: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
};

const NewsBanner = () => {
  const { newsBannerData } = useNewsBanner();
  const { text, button } = newsBannerData;
  const [newsBannerClosed, setNewsBannerClosed] = useState(true);

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
        sx={{ textAlign: { _: 'center', md: 'left' }, ml: { _: 0, md: 3 }, mt: { _: 3, md: 0 } }}
      >
        {/* {link && link[0] && link[0].value && (
          <Link
            href={link[0].value}
            muiProps={{
              target: link[0].type === 'external_url' ? '_blank' : '_self',
              fontSize: '14px',
              lineHeight: '24px',
            }}
            hasArrow
          >
            {link_text}
          </Link>
        )} */}
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
          width: '70px',
          height: '70px',
          right: 0,
          borderLeft: '2px solid rgba(225, 225, 225, 0.6)',
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
