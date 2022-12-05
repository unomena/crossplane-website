import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { Box, Hidden, SxProps, Typography, useMediaQuery } from '@mui/material';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';
import { keyframes } from '@emotion/react';

import getRandomInt from 'src/utils/getRandomInt';
import useOnScreen from 'src/utils/useOnScreen';

import Button from 'src/elements/Button';

import crossplaneLogos from 'src/constants/crossplaneLogos';

const cpLeftColumns: SxProps = {
  display: 'flex',
  position: 'relative',

  '& > div': {
    mr: '10px',
    ':first-of-type': {
      mr: 0,
    },
    ':last-of-type': {
      mr: 0,
    },
  },
};

const cpRightColumns: SxProps = {
  display: 'flex',
  position: 'relative',

  '& > div': {
    ml: '10px',
    ':first-of-type': {
      ml: 0,
    },
    ':last-of-type': {
      ml: 0,
    },
  },
};

const cpLogoBoxColumn: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 2s ease',

  '& > div': {
    ':not(:first-of-type)': {
      mt: 0.5,
    },
    ':not(:last-of-type)': {
      mb: 0.5,
    },
  },
};

const cpColumnShadow: SxProps = {
  backgroundImage:
    // eslint-disable-next-line max-len
    'linear-gradient(270deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.85) 17%, #FFF 51%, rgba(255,255,255,0.85) 82%, rgba(255,255,255,0.20) 100%)',
  width: 284,
  height: '100%',
  position: 'absolute',
  top: 0,
  zIndex: 100,
};

const cpCenterBox: SxProps = {
  backgroundImage:
    // eslint-disable-next-line max-len
    'linear-gradient(270deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.85) 17%, #FFF 51%, rgba(255,255,255,0.85) 82%, rgba(255,255,255,0.20) 100%)',
  width: 474,
  height: 418,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  m: 'auto',
  zIndex: 101,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 3s ease',
};

const cpCenterBoxTitleNum: SxProps = {
  ...fontAvenirBold,
  color: COLORS.froly,
  fontSize: '50px',
  lineHeight: '50px',

  [MQ.lg]: {
    fontSize: '74px',
    lineHeight: '36px',
    mb: 2,
  },
};

const cpCenterBoxTitleText: SxProps = {
  ...fontAvenirBold,
  color: COLORS.nileBlue,
  fontSize: '22px',
  lineHeight: '26px',

  [MQ.lg]: {
    fontSize: '26px',
    lineHeight: '38px',
  },
};

const cpLogoBox: SxProps = {
  bgcolor: '#fff',
  boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
  borderRadius: '10px',
  p: 2,
};

const cpLogoBoxImageContainer: SxProps = {
  position: 'relative',
  width: '100%',
  height: '100%',
  '& > span': {
    transition: 'all 1.5s ease-in-out',
  },
};

const cpLogoBoxBigger: SxProps = {
  width: 108,
  height: 78,
};

const cpLogoBoxBig: SxProps = {
  width: 98,
  height: 72,
};

const cpLogoBoxSmall: SxProps = {
  width: 93,
  height: 66,
};

const cpLogoBoxSmaller: SxProps = {
  width: 83,
  height: 59,
};

const cpLogoBoxMobile: SxProps = {
  width: 83,
  height: 59,
  m: 0.5,
};

const pulsate = keyframes`
  from { opacity: 1; }
  50% { opacity: 0.5; }
  to { opacity: 1; }
`;

const getRandomItem = (availableItems: any[]) => {
  return availableItems[getRandomInt(0, availableItems.length - 1)];
};

type CPLogoBoxProps = {
  index: number;
  sizeStyles: SxProps;
  shouldUpdate?: Boolean;
  availableLogos: any[];
  updateLogos: (newLogo: any, index: number) => void;
};

const CPLogoBox = memo(
  ({ index, sizeStyles, shouldUpdate, availableLogos, updateLogos }: CPLogoBoxProps) => {
    const [show, setShow] = useState(false);
    const [showStyles, setShowStyles] = useState(false);
    const [shouldPulse, setShouldPulse] = useState(false);
    const [logoOne, setLogoOne] = useState(null);
    const [logoTwo, setLogoTwo] = useState(null);

    useEffect(() => {
      if (shouldUpdate) {
        setShow((v) => !v);
      } else {
        setShouldPulse(false);
      }
    }, [shouldUpdate]);

    useEffect(() => {
      let t: NodeJS.Timeout;
      if (logoOne) {
        const newLogo = getRandomItem(availableLogos);
        updateLogos(newLogo, index);
        if (show) {
          setLogoTwo(newLogo);
        } else {
          setLogoOne(newLogo);
        }

        t = setTimeout(() => {
          setShowStyles((v) => !v);
          setShouldPulse(true);
        }, 3000);
      } else {
        const newLogo = availableLogos[index];
        setLogoOne(newLogo);
        updateLogos(newLogo, index);
      }
      return () => {
        clearTimeout(t);
      };
    }, [show]);

    return (
      <Box
        sx={{
          ...cpLogoBox,
          ...sizeStyles,
          animation: shouldPulse ? `${pulsate} 2s ease-in-out` : null,
        }}
      >
        <Box
          sx={{
            ...cpLogoBoxImageContainer,
            '& > span:first-of-type': {
              opacity: showStyles ? '0 !important' : '1 !important',
              transitionDelay: showStyles ? '0s' : '1s',
            },
            '& > span:last-of-type': {
              opacity: showStyles ? '1 !important' : '0 !important',
              transitionDelay: showStyles ? '1s' : '0s',
            },
          }}
        >
          {logoOne ? (
            <Image src={logoOne} alt="company logo" layout="fill" objectFit="contain" />
          ) : (
            <span></span>
          )}
          {logoTwo ? (
            <Image src={logoTwo} alt="company logo" layout="fill" objectFit="contain" />
          ) : (
            <span></span>
          )}
        </Box>
      </Box>
    );
  }
);
CPLogoBox.displayName = 'CPLogoBox';

const cpColumnsLeftList = [
  {
    sizeStyles: cpLogoBoxBigger,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxBig,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxSmall,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxSmaller,
    logos: [...Array(6)],
  },
];

const cpColumnsRightList = [
  {
    sizeStyles: cpLogoBoxSmaller,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxSmall,
    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxBig,

    logos: [...Array(6)],
  },
  {
    sizeStyles: cpLogoBoxBigger,

    logos: [...Array(6)],
  },
];

const cpLogosListTopMobile = [...Array(12)];

const cpLogosListBottomMobile = [...Array(12)];

const getInitAvailableRowsLeft = (matchesLG: boolean) => {
  return [...Array(matchesLG ? 24 : 12).keys()];
};

const getInitAvailableRowsRight = (matchesLG: boolean) => {
  return [...Array(matchesLG ? 24 : 12).keys()].map((v) => (matchesLG ? v + 24 : v + 12));
};

const CrossplaneLogosSection = (props: HomePage) => {
  const cpSectionRef = useRef(undefined);
  const isVisible = useOnScreen(cpSectionRef);

  const matchesLG = useMediaQuery(MQ.lg);

  const availableRowsLeftRef = useRef(getInitAvailableRowsLeft(matchesLG));
  const setAvailableRowsLeft = (val: any) => {
    availableRowsLeftRef.current = val;
  };

  useEffect(() => {
    setAvailableRowsLeft(getInitAvailableRowsLeft(matchesLG));
  }, [matchesLG]);

  const updateRowsLeft = useCallback(
    (newRow: any) => {
      let newAvailableRowsLeft = availableRowsLeftRef.current.filter((v: any) => v !== newRow);
      if (newAvailableRowsLeft.length === 0) {
        newAvailableRowsLeft = getInitAvailableRowsLeft(matchesLG);
      }
      setAvailableRowsLeft(newAvailableRowsLeft);
    },
    [availableRowsLeftRef.current]
  );

  const [logoToUpdateLeft, _setLogoToUpdateLeft] = useState<number | null>(null);
  const logoToUpdateRefLeft = useRef(logoToUpdateLeft);
  const setLogoToUpdateLeft = (val: number | null) => {
    logoToUpdateRefLeft.current = val;
    _setLogoToUpdateLeft(val);
  };

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (isVisible) {
      t = setTimeout(() => {
        const row = getRandomItem(availableRowsLeftRef.current);
        setLogoToUpdateLeft(row);
        updateRowsLeft(row);
      }, getRandomInt(12, 22) * 100);
    }
    return () => {
      clearTimeout(t);
    };
  }, [logoToUpdateLeft, isVisible]);

  const availableRowsRightRef = useRef(getInitAvailableRowsRight(matchesLG));
  const setAvailableRowsRight = (val: any) => {
    availableRowsRightRef.current = val;
  };

  useEffect(() => {
    setAvailableRowsRight(getInitAvailableRowsRight(matchesLG));
  }, [matchesLG]);

  const updateRowsRight = useCallback(
    (newRow: any) => {
      let newAvailableRowsRight = availableRowsRightRef.current.filter((v: any) => v !== newRow);
      if (newAvailableRowsRight.length === 0) {
        newAvailableRowsRight = getInitAvailableRowsRight(matchesLG);
      }
      setAvailableRowsRight(newAvailableRowsRight);
    },
    [availableRowsRightRef.current]
  );

  const [logoToUpdateRight, _setLogoToUpdateRight] = useState<number | null>(null);
  const logoToUpdateRefRight = useRef(logoToUpdateRight);
  const setLogoToUpdateRight = (val: number | null) => {
    logoToUpdateRefRight.current = val;
    _setLogoToUpdateRight(val);
  };

  useEffect(() => {
    let t: NodeJS.Timeout;
    if (isVisible) {
      t = setTimeout(() => {
        const row = getRandomItem(availableRowsRightRef.current);
        setLogoToUpdateRight(row);
        updateRowsRight(row);
      }, getRandomInt(12, 22) * 100);
    }
    return () => {
      clearTimeout(t);
    };
  }, [logoToUpdateRight, isVisible]);

  const hiddenBarRef = useRef(undefined);
  const hiddenBarIsVisible = useOnScreen(hiddenBarRef);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (hiddenBarIsVisible) {
      setShow(true);
    }
  }, [hiddenBarIsVisible]);

  const delayMulti = 0.25;

  const availableLogosRef = useRef(crossplaneLogos);
  const setAvailableLogos = (val: any) => {
    availableLogosRef.current = val;
  };

  const activeLogosRef = useRef<any[]>([]);
  const setActiveLogos = (val: any) => {
    activeLogosRef.current = val;
  };

  const updateLogos = useCallback(
    (newLogo: any, index: number) => {
      const newActiveLogos = [...activeLogosRef.current];
      newActiveLogos[index] = newLogo;
      setActiveLogos(newActiveLogos);

      let newAvailableLogos = availableLogosRef.current.filter((v: any) => v.src !== newLogo?.src);
      if (newAvailableLogos.length === 0) {
        newAvailableLogos = crossplaneLogos.filter(
          (cpLogo) => !newActiveLogos.some((v) => v?.src === cpLogo?.src)
        );
      }
      setAvailableLogos(newAvailableLogos);
    },
    [availableLogosRef.current, activeLogosRef.current]
  );

  // useEffect(() => {
  //   const logos = activeLogosRef.current.map((v: any) => v.src);
  //   const set = new Set(logos);

  //   const duplicates = logos.filter((item: any) => {
  //     if (set.has(item)) {
  //       set.delete(item);
  //     } else {
  //       return item;
  //     }
  //   });

  //   console.log(duplicates);
  // }, [activeLogosRef.current]);

  return (
    <Box
      ref={cpSectionRef}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <Hidden lgDown>
        <Box sx={cpLeftColumns}>
          <Box sx={{ ...cpColumnShadow, left: -176 }} />
          {cpColumnsLeftList.map((c, columnIndex) => (
            <Box
              key={columnIndex}
              sx={{
                ...cpLogoBoxColumn,
                opacity: show ? 1 : 0,
                transitionDelay: `${(columnIndex - 3) * -delayMulti}s`,
              }}
            >
              {c.logos.map((v, logoIndex) => {
                const columnStartIndex = (columnIndex + 1) * 6 - 6;
                const realIndex = logoIndex + columnStartIndex;
                return (
                  <CPLogoBox
                    key={logoIndex}
                    index={realIndex}
                    sizeStyles={c.sizeStyles}
                    shouldUpdate={logoToUpdateLeft === realIndex}
                    availableLogos={availableLogosRef.current}
                    updateLogos={updateLogos}
                  />
                );
              })}
            </Box>
          ))}
        </Box>
        <Box sx={{ ...cpCenterBox, opacity: show ? 1 : 0 }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
              mb: 3,
            }}
          >
            <Box sx={{ p: '62px 40px 32px 40px' }}>
              <Typography sx={cpCenterBoxTitleNum}>{props.section_1_slack_title_count}</Typography>
              <Typography sx={cpCenterBoxTitleText}>{props.section_1_slack_title}</Typography>
            </Box>
          </Box>
          <Typography variant="body_small" sx={{ maxWidth: 320 }}>
            {props.section_1_slack_text}
          </Typography>
          {props.section_1_slack_button[0] && (
            <Button sx={{ mt: 3.5 }} cmsValue={props.section_1_slack_button[0].value}>
              {props.section_1_slack_button[0].value.text}
            </Button>
          )}
        </Box>
        <Box sx={cpRightColumns}>
          {cpColumnsRightList.map((c, columnIndex) => (
            <Box
              key={columnIndex}
              sx={{
                ...cpLogoBoxColumn,
                opacity: show ? 1 : 0,
                transitionDelay: `${columnIndex * delayMulti}s`,
              }}
            >
              {c.logos.map((v, logoIndex) => {
                const columnStartIndex = (columnIndex + 1) * 6 - 6;
                const realIndex = logoIndex + columnStartIndex + 24;
                return (
                  <CPLogoBox
                    key={logoIndex}
                    index={realIndex}
                    sizeStyles={c.sizeStyles}
                    shouldUpdate={logoToUpdateRight === realIndex}
                    availableLogos={availableLogosRef.current}
                    updateLogos={updateLogos}
                  />
                );
              })}
            </Box>
          ))}
          <Box sx={{ ...cpColumnShadow, right: -176 }} />
        </Box>
      </Hidden>
      <Hidden lgUp>
        <Box sx={{ maxWidth: 400, mx: 'auto' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cpLogosListTopMobile.map((logo, index) => (
              <CPLogoBox
                key={index}
                index={index}
                sizeStyles={cpLogoBoxMobile}
                shouldUpdate={logoToUpdateLeft === index}
                availableLogos={availableLogosRef.current}
                updateLogos={updateLogos}
              />
            ))}
          </Box>
          <Box sx={{ my: 3 }}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
                mb: 3,
              }}
            >
              <Box sx={{ p: '40px' }}>
                <Typography sx={cpCenterBoxTitleNum}>
                  {props.section_1_slack_title_count}
                </Typography>
                <Typography sx={cpCenterBoxTitleText}>{props.section_1_slack_title}</Typography>
              </Box>
            </Box>
            <Typography variant="body_small">{props.section_1_slack_text}</Typography>
            {props.section_1_slack_button[0] && (
              <Button sx={{ mt: 3.5 }} cmsValue={props.section_1_slack_button[0].value}>
                {props.section_1_slack_button[0].value.text}
              </Button>
            )}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cpLogosListBottomMobile.map((logo, index) => (
              <CPLogoBox
                key={index}
                index={index + 12}
                sizeStyles={cpLogoBoxMobile}
                shouldUpdate={logoToUpdateRight === index + 12}
                availableLogos={availableLogosRef.current}
                updateLogos={updateLogos}
              />
            ))}
          </Box>
        </Box>
      </Hidden>
      <Box
        ref={hiddenBarRef}
        sx={{ width: '100%', height: '1px', position: 'absolute', bottom: -40 }}
      />
    </Box>
  );
};

export default CrossplaneLogosSection;
