import React from 'react';

import { Box, Modal, SxProps } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

// styles
const outerWrapper: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
  width: '50%',
  bgcolor: 'rgba(0, 0, 0, 0.5)',
};

const innerWrapper: SxProps = {
  float: 'none',
  clear: 'both',
  width: '100%',
  height: '0',
  position: 'relative',
  paddingBottom: '56.25%',
};

const closeButton: SxProps = {
  position: 'absolute',
  top: -35,
  right: -35,
  color: '#fff',
  cursor: 'pointer',
};

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoId: string;
};

const VideoModal = ({ open, setOpen, videoId }: ModalProps) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={outerWrapper}>
        <Box sx={innerWrapper}>
          <Box sx={closeButton} onClick={handleClose}>
            <CloseIcon color="inherit" fontSize="large" />
          </Box>
          <iframe
            width="460"
            height="230"
            src={`https://www.youtube.com/embed/${videoId}`}
            style={{
              border: 'none',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </Box>
      </Box>
    </Modal>
  );
};

export default VideoModal;
