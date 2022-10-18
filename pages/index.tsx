import React, { useEffect, useRef, useState } from 'react';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import handleGetStaticProps from 'src/utils/handleGetStaticProps';
import useOnScreen from 'src/utils/useOnScreen';

import PageProvider from 'src/components/PageProvider';
import Section from 'src/components/Section';
import CrossplaneLogosSection from 'src/components/CrossplaneLogosSection';
import Button from 'src/elements/Button';
import Link from 'src/elements/Link';
import CMSImage from 'src/elements/CMSImage';

import placeholder from 'public/placeholder.png';

const headerSection: SxProps = {
  pt: { _: 13, md: 24 },
  pb: 4,
  textAlign: 'center',
  color: COLORS.linkWater,
};

const headerButtons: SxProps = {
  mt: 6,
  mb: { _: 6, sm: 10 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: { _: 'column', sm: 'row' },

  '& > button, a': {
    mx: { _: 0, sm: '10px' },

    ':not(:last-of-type)': {
      mb: { _: '20px', sm: 0 },
    },
  },
};

const subText: SxProps = {
  ...fontAvenirBold,
  color: COLORS.nileBlue,
  fontSize: '18px',
  textTransform: 'uppercase',
  letterSpacing: '3.2px',
  mb: 5,
};

// const cpLeftColumns: SxProps = {
//   display: 'flex',
//   position: 'relative',

//   '& > div': {
//     mr: '10px',
//     ':first-of-type': {
//       mr: 0,
//     },
//     ':last-of-type': {
//       mr: 0,
//     },
//   },
// };

// const cpRightColumns: SxProps = {
//   display: 'flex',
//   position: 'relative',

//   '& > div': {
//     ml: '10px',
//     ':first-of-type': {
//       ml: 0,
//     },
//     ':last-of-type': {
//       ml: 0,
//     },
//   },
// };

// const cpLogoBoxColumn: SxProps = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   transition: 'opacity 2s ease',

//   '& > div': {
//     ':not(:first-of-type)': {
//       mt: 0.5,
//     },
//     ':not(:last-of-type)': {
//       mb: 0.5,
//     },
//   },
// };

// const cpColumnShadow: SxProps = {
//   backgroundImage:
//     // eslint-disable-next-line max-len
//     'linear-gradient(270deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.85) 17%, #FFF 51%, rgba(255,255,255,0.85) 82%, rgba(255,255,255,0.20) 100%)',
//   width: 284,
//   height: '100%',
//   position: 'absolute',
//   top: 0,
//   zIndex: 100,
// };

// const cpCenterBox: SxProps = {
//   backgroundImage:
//     // eslint-disable-next-line max-len
//     'linear-gradient(270deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.85) 17%, #FFF 51%, rgba(255,255,255,0.85) 82%, rgba(255,255,255,0.20) 100%)',
//   width: 474,
//   height: 418,
//   position: 'absolute',
//   top: 0,
//   bottom: 0,
//   left: 0,
//   right: 0,
//   m: 'auto',
//   zIndex: 101,
//   textAlign: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   transition: 'opacity 3s ease',
// };

// const cpCenterBoxTitleNum: SxProps = {
//   ...fontAvenirBold,
//   color: COLORS.froly,
//   fontSize: '50px',
//   lineHeight: '50px',

//   [MQ.lg]: {
//     fontSize: '74px',
//     lineHeight: '36px',
//     mb: 2,
//   },
// };

// const cpCenterBoxTitleText: SxProps = {
//   ...fontAvenirBold,
//   color: COLORS.nileBlue,
//   fontSize: '22px',
//   lineHeight: '26px',

//   [MQ.lg]: {
//     fontSize: '26px',
//     lineHeight: '38px',
//   },
// };

// const cpLogoBox: SxProps = {
//   bgcolor: COLORS.bigStone,
//   borderRadius: '10px',
//   p: 2,
// };

// const cpLogoBoxImageContainer: SxProps = {
//   position: 'relative',
//   width: '100%',
//   height: '100%',
//   '& > span': {
//     transition: 'all 1.5s ease-in-out',
//   },
// };

// const cpLogoBoxBigger: SxProps = {
//   width: 108,
//   height: 78,
// };

// const cpLogoBoxBig: SxProps = {
//   width: 98,
//   height: 72,
// };

// const cpLogoBoxSmall: SxProps = {
//   width: 93,
//   height: 66,
// };

// const cpLogoBoxSmaller: SxProps = {
//   width: 83,
//   height: 59,
// };

// const cpLogoBoxMobile: SxProps = {
//   width: 83,
//   height: 59,
//   m: 0.5,
// };

// const pulsate = keyframes`
//   from { opacity: 1; }
//   50% { opacity: 0.5; }
//   to { opacity: 1; }
// `;

const gridLayout: SxProps = {
  display: 'grid',
  gap: 4,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

const cardStyles: SxProps = {
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
  p: 4,

  flex: '1 0 0%',
  display: 'flex',

  '& > a': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 0%',
  },
};

const providerIcon: SxProps = {
  position: 'relative',
  width: '90px',
  height: '90px',
  mb: 3,
  '& > span': {
    borderRadius: '20px',
  },
};

const HeaderSection = (props: HomePageHeader) => {
  return (
    <>
      <Typography variant="h1" color={COLORS.linkWater} sx={{ mb: 5 }}>
        {props.title}
      </Typography>
      <Typography variant="body_normal" color={COLORS.linkWater} sx={{ maxWidth: 950, mx: 'auto' }}>
        {props.subtitle}
      </Typography>
      <Box sx={headerButtons}>
        {props.buttons.map(({ id, value }) => (
          <Button key={id} sizeType="normal" cmsValue={value}>
            {value.text}
          </Button>
        ))}
      </Box>
    </>
  );
};

// const getRandomItem = (availableItems: any[]) => {
//   return availableItems[getRandomInt(0, availableItems.length - 1)];
// };

// type CPLogoBoxProps = {
//   index: number;
//   sizeStyles: SxProps;
//   shouldUpdate?: Boolean;
//   availableLogos: any[];
//   updateLogos: (newLogo: any, index: number) => void;
// };

// const CPLogoBox = memo(
//   ({ index, sizeStyles, shouldUpdate, availableLogos, updateLogos }: CPLogoBoxProps) => {
//     const [show, setShow] = useState(false);
//     const [showStyles, setShowStyles] = useState(false);
//     const [shouldPulse, setShouldPulse] = useState(false);
//     const [logoOne, setLogoOne] = useState(null);
//     const [logoTwo, setLogoTwo] = useState(null);

//     useEffect(() => {
//       if (shouldUpdate) {
//         setShow((v) => !v);
//       } else {
//         setShouldPulse(false);
//       }
//     }, [shouldUpdate]);

//     useEffect(() => {
//       let t: NodeJS.Timeout;
//       if (logoOne) {
//         const newLogo = getRandomItem(availableLogos);
//         updateLogos(newLogo, index);
//         if (show) {
//           setLogoTwo(newLogo);
//         } else {
//           setLogoOne(newLogo);
//         }

//         t = setTimeout(() => {
//           setShowStyles((v) => !v);
//           setShouldPulse(true);
//         }, 3000);
//       } else {
//         const newLogo = availableLogos[index];
//         setLogoOne(newLogo);
//         updateLogos(newLogo, index);
//       }
//       return () => {
//         clearTimeout(t);
//       };
//     }, [show]);

//     return (
//       <Box
//         sx={{
//           ...cpLogoBox,
//           ...sizeStyles,
//           // bgcolor: shouldPulse ? 'red' : COLORS.bigStone,
//           animation: shouldPulse ? `${pulsate} 2s ease-in-out` : null,
//         }}
//       >
//         <Box
//           sx={{
//             ...cpLogoBoxImageContainer,
//             '& > span:first-of-type': {
//               opacity: showStyles ? '0 !important' : '1 !important',
//               transitionDelay: showStyles ? '0s' : '1s',
//             },
//             '& > span:last-of-type': {
//               opacity: showStyles ? '1 !important' : '0 !important',
//               transitionDelay: showStyles ? '1s' : '0s',
//             },
//           }}
//         >
//           {logoOne ? (
//             <Image src={logoOne} alt="company logo" layout="fill" objectFit="contain" />
//           ) : (
//             <span></span>
//           )}
//           {logoTwo ? (
//             <Image src={logoTwo} alt="company logo" layout="fill" objectFit="contain" />
//           ) : (
//             <span></span>
//           )}
//         </Box>
//       </Box>
//     );
//   }
// );
// CPLogoBox.displayName = 'CPLogoBox';

// const cpColumnsLeftList = [
//   {
//     sizeStyles: cpLogoBoxBigger,
//     logos: [...Array(6)],
//   },
//   {
//     sizeStyles: cpLogoBoxBig,
//     logos: [...Array(6)],
//   },
//   {
//     sizeStyles: cpLogoBoxSmall,
//     logos: [...Array(6)],
//   },
//   {
//     sizeStyles: cpLogoBoxSmaller,
//     logos: [...Array(6)],
//   },
// ];

// const cpColumnsRightList = [
//   {
//     sizeStyles: cpLogoBoxSmaller,
//     logos: [...Array(6)],
//   },
//   {
//     sizeStyles: cpLogoBoxSmall,
//     logos: [...Array(6)],
//   },
//   {
//     sizeStyles: cpLogoBoxBig,

//     logos: [...Array(6)],
//   },
//   {
//     sizeStyles: cpLogoBoxBigger,

//     logos: [...Array(6)],
//   },
// ];

// const cpLogosListTopMobile = [...Array(12)];

// const cpLogosListBottomMobile = [...Array(12)];

// const getInitAvailableRowsLeft = (matchesLG: boolean) => {
//   return [...Array(matchesLG ? 24 : 12).keys()];
// };

// const getInitAvailableRowsRight = (matchesLG: boolean) => {
//   return [...Array(matchesLG ? 24 : 12).keys()].map((v) => (matchesLG ? v + 24 : v + 12));
// };

// const CrossplaneLogosSection = (props: HomePage) => {
//   const cpSectionRef = useRef(undefined);
//   const isVisible = useOnScreen(cpSectionRef);

//   const matchesLG = useMediaQuery(MQ.lg);

//   const availableRowsLeftRef = useRef(getInitAvailableRowsLeft(matchesLG));
//   const setAvailableRowsLeft = (val: any) => {
//     availableRowsLeftRef.current = val;
//   };

//   useEffect(() => {
//     setAvailableRowsLeft(getInitAvailableRowsLeft(matchesLG));
//   }, [matchesLG]);

//   const updateRowsLeft = useCallback(
//     (newRow: any) => {
//       let newAvailableRowsLeft = availableRowsLeftRef.current.filter((v: any) => v !== newRow);
//       if (newAvailableRowsLeft.length === 0) {
//         newAvailableRowsLeft = getInitAvailableRowsLeft(matchesLG);
//       }
//       setAvailableRowsLeft(newAvailableRowsLeft);
//     },
//     [availableRowsLeftRef.current]
//   );

//   const [logoToUpdateLeft, _setLogoToUpdateLeft] = useState<number | null>(null);
//   const logoToUpdateRefLeft = useRef(logoToUpdateLeft);
//   const setLogoToUpdateLeft = (val: number | null) => {
//     logoToUpdateRefLeft.current = val;
//     _setLogoToUpdateLeft(val);
//   };

//   useEffect(() => {
//     let t: NodeJS.Timeout;
//     if (isVisible) {
//       t = setTimeout(() => {
//         const row = getRandomItem(availableRowsLeftRef.current);
//         setLogoToUpdateLeft(row);
//         updateRowsLeft(row);
//       }, getRandomInt(12, 22) * 100);
//     }
//     return () => {
//       clearTimeout(t);
//     };
//   }, [logoToUpdateLeft, isVisible]);

//   const availableRowsRightRef = useRef(getInitAvailableRowsRight(matchesLG));
//   const setAvailableRowsRight = (val: any) => {
//     availableRowsRightRef.current = val;
//   };

//   useEffect(() => {
//     setAvailableRowsRight(getInitAvailableRowsRight(matchesLG));
//   }, [matchesLG]);

//   const updateRowsRight = useCallback(
//     (newRow: any) => {
//       let newAvailableRowsRight = availableRowsRightRef.current.filter((v: any) => v !== newRow);
//       if (newAvailableRowsRight.length === 0) {
//         newAvailableRowsRight = getInitAvailableRowsRight(matchesLG);
//       }
//       setAvailableRowsRight(newAvailableRowsRight);
//     },
//     [availableRowsRightRef.current]
//   );

//   const [logoToUpdateRight, _setLogoToUpdateRight] = useState<number | null>(null);
//   const logoToUpdateRefRight = useRef(logoToUpdateRight);
//   const setLogoToUpdateRight = (val: number | null) => {
//     logoToUpdateRefRight.current = val;
//     _setLogoToUpdateRight(val);
//   };

//   useEffect(() => {
//     let t: NodeJS.Timeout;
//     if (isVisible) {
//       t = setTimeout(() => {
//         const row = getRandomItem(availableRowsRightRef.current);
//         setLogoToUpdateRight(row);
//         updateRowsRight(row);
//       }, getRandomInt(12, 22) * 100);
//     }
//     return () => {
//       clearTimeout(t);
//     };
//   }, [logoToUpdateRight, isVisible]);

//   const hiddenBarRef = useRef(undefined);
//   const hiddenBarIsVisible = useOnScreen(hiddenBarRef);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     if (hiddenBarIsVisible) {
//       setShow(true);
//     }
//   }, [hiddenBarIsVisible]);

//   const delayMulti = 0.25;

//   const availableLogosRef = useRef(crossplaneLogos);
//   const setAvailableLogos = (val: any) => {
//     availableLogosRef.current = val;
//   };

//   const activeLogosRef = useRef<any[]>([]);
//   const setActiveLogos = (val: any) => {
//     activeLogosRef.current = val;
//   };

//   const updateLogos = useCallback(
//     (newLogo: any, index: number) => {
//       const newActiveLogos = [...activeLogosRef.current];
//       newActiveLogos[index] = newLogo;
//       setActiveLogos(newActiveLogos);

//       let newAvailableLogos = availableLogosRef.current.filter((v: any) => v.src !== newLogo.src);
//       if (newAvailableLogos.length === 0) {
//         newAvailableLogos = crossplaneLogos.filter(
//           (cpLogo) => !newActiveLogos.some((v) => v.src === cpLogo.src)
//         );
//       }
//       setAvailableLogos(newAvailableLogos);
//     },
//     [availableLogosRef.current, activeLogosRef.current]
//   );

//   // useEffect(() => {
//   //   const logos = activeLogosRef.current.map((v: any) => v.src);
//   //   const set = new Set(logos);

//   //   const duplicates = logos.filter((item: any) => {
//   //     if (set.has(item)) {
//   //       set.delete(item);
//   //     } else {
//   //       return item;
//   //     }
//   //   });

//   //   console.log(duplicates);
//   // }, [activeLogosRef.current]);

//   return (
//     <Box
//       ref={cpSectionRef}
//       sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}
//     >
//       <Hidden lgDown>
//         <Box sx={cpLeftColumns}>
//           <Box sx={{ ...cpColumnShadow, left: -176 }} />
//           {cpColumnsLeftList.map((c, columnIndex) => (
//             <Box
//               key={columnIndex}
//               sx={{
//                 ...cpLogoBoxColumn,
//                 opacity: show ? 1 : 0,
//                 transitionDelay: `${(columnIndex - 3) * -delayMulti}s`,
//               }}
//             >
//               {c.logos.map((v, logoIndex) => {
//                 const columnStartIndex = (columnIndex + 1) * 6 - 6;
//                 const realIndex = logoIndex + columnStartIndex;
//                 return (
//                   <CPLogoBox
//                     key={logoIndex}
//                     index={realIndex}
//                     sizeStyles={c.sizeStyles}
//                     shouldUpdate={logoToUpdateLeft === realIndex}
//                     availableLogos={availableLogosRef.current}
//                     updateLogos={updateLogos}
//                   />
//                 );
//               })}
//             </Box>
//           ))}
//         </Box>
//         <Box sx={{ ...cpCenterBox, opacity: show ? 1 : 0 }}>
//           <Box
//             sx={{
//               backgroundColor: '#fff',
//               borderRadius: '20px',
//               boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
//               mb: 3,
//             }}
//           >
//             <Box sx={{ p: '62px 40px 32px 40px' }}>
//               <Typography sx={cpCenterBoxTitleNum}>{props.section_1_center_title_count}</Typography>
//               <Typography sx={cpCenterBoxTitleText}>{props.section_1_center_title}</Typography>
//             </Box>
//           </Box>
//           <Typography variant="body_small" sx={{ maxWidth: 320 }}>
//             {props.section_1_center_text}
//           </Typography>
//           {props.section_1_button[0] && (
//             <Button sx={{ mt: 3.5 }} cmsValue={props.section_1_button[0].value}>
//               {props.section_1_button[0].value.text}
//             </Button>
//           )}
//         </Box>
//         <Box sx={cpRightColumns}>
//           {cpColumnsRightList.map((c, columnIndex) => (
//             <Box
//               key={columnIndex}
//               sx={{
//                 ...cpLogoBoxColumn,
//                 opacity: show ? 1 : 0,
//                 transitionDelay: `${columnIndex * delayMulti}s`,
//               }}
//             >
//               {c.logos.map((v, logoIndex) => {
//                 const columnStartIndex = (columnIndex + 1) * 6 - 6;
//                 const realIndex = logoIndex + columnStartIndex + 24;
//                 return (
//                   <CPLogoBox
//                     key={logoIndex}
//                     index={realIndex}
//                     sizeStyles={c.sizeStyles}
//                     shouldUpdate={logoToUpdateRight === realIndex}
//                     availableLogos={availableLogosRef.current}
//                     updateLogos={updateLogos}
//                   />
//                 );
//               })}
//             </Box>
//           ))}
//           <Box sx={{ ...cpColumnShadow, right: -176 }} />
//         </Box>
//       </Hidden>
//       <Hidden lgUp>
//         <Box sx={{ maxWidth: 400, mx: 'auto' }}>
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//             {cpLogosListTopMobile.map((logo, index) => (
//               <CPLogoBox
//                 key={index}
//                 index={index}
//                 sizeStyles={cpLogoBoxMobile}
//                 shouldUpdate={logoToUpdateLeft === index}
//                 availableLogos={availableLogosRef.current}
//                 updateLogos={updateLogos}
//               />
//             ))}
//           </Box>
//           <Box sx={{ my: 3 }}>
//             <Box
//               sx={{
//                 backgroundColor: '#fff',
//                 borderRadius: '20px',
//                 boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
//                 mb: 3,
//               }}
//             >
//               <Box sx={{ p: '40px' }}>
//                 <Typography sx={cpCenterBoxTitleNum}>
//                   {props.section_1_center_title_count}
//                 </Typography>
//                 <Typography sx={cpCenterBoxTitleText}>{props.section_1_center_title}</Typography>
//               </Box>
//             </Box>
//             <Typography variant="body_small">{props.section_1_center_text}</Typography>
//             {props.section_1_button[0] && (
//               <Button sx={{ mt: 3.5 }} cmsValue={props.section_1_button[0].value}>
//                 {props.section_1_button[0].value.text}
//               </Button>
//             )}
//           </Box>
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//             {cpLogosListBottomMobile.map((logo, index) => (
//               <CPLogoBox
//                 key={index}
//                 index={index + 12}
//                 sizeStyles={cpLogoBoxMobile}
//                 shouldUpdate={logoToUpdateRight === index + 12}
//                 availableLogos={availableLogosRef.current}
//                 updateLogos={updateLogos}
//               />
//             ))}
//           </Box>
//         </Box>
//       </Hidden>
//       <Box
//         ref={hiddenBarRef}
//         sx={{ width: '100%', height: '1px', position: 'absolute', bottom: -40 }}
//       />
//     </Box>
//   );
// };

const FeatureBlock = ({ feature, index }: { feature: HomePageFeature; index: number }) => {
  const reversed = index % 2 !== 0;
  const colorOptions = [COLORS.froly, COLORS.brightSun, COLORS.turquoise];

  const {
    // header_svg,
    // header_text,
    title,
    text,
    link_text,
    link,
    side_svg_big,
    // side_svg_small,
    // side_svg_small_top_offset,
    // side_svg_small_right_offset,
    // side_svg_big_mobile,
    // side_svg_small_mobile,
    // side_svg_small_top_offset_mobile,
    // side_svg_small_right_offset_mobile,
  } = feature;

  const hiddenBarRef = useRef(undefined);
  const isVisible = useOnScreen(hiddenBarRef);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);

  console.log(side_svg_big);

  return (
    <Box
      sx={{
        display: 'flex',
        color: COLORS.linkWater,
        position: 'relative',
        flexDirection: 'column',
        [MQ.lg]: {
          alignItems: 'center',
          flexDirection: reversed ? 'row-reverse' : 'row',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          [MQ.lg]: {
            flex: 1,
            width: '50%',
            minWidth: '50%',
            maxWidth: '50%',
            pr: reversed ? '0px' : '28px',
            pl: reversed ? '28px' : '0px',
          },
        }}
      >
        <Typography variant="h2" sx={{ maxWidth: 450, mb: 2.5 }}>
          {title}
        </Typography>
        <Typography variant="body_normal" sx={{ maxWidth: 496 }}>
          {text}
        </Typography>
        <Link
          href={link[0].value}
          muiProps={{
            target: link[0].type === 'external_url' ? '_blank' : undefined,
            color: colorOptions[index % 3],
            sx: { mt: 5 },
          }}
          hasArrow
        >
          {link_text}
        </Link>
        <Box
          ref={hiddenBarRef}
          sx={{ width: '100%', height: '1px', position: 'absolute', bottom: 0 }}
        />
      </Box>
      <Box
        sx={{
          mt: '40px',
          [MQ.lg]: {
            flex: 1,
            mt: 0,
            width: '50%',
            minWidth: '50%',
            maxWidth: '50%',
            pr: reversed ? '28px' : '0px',
            pl: reversed ? '0px' : '28px',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { _: 'fit-content', lg: 'unset' },
            ml: 0,
            // ml: { _: '-14px', lg: 0 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              transition: 'transform 1.5s',
              transform: show ? '' : `translate(100vw)`,

              [MQ.lg]: {
                transform: show ? '' : `translate(${reversed ? '-50vw' : '50vw'})`,
                ml: 0,
                // ml: reversed ? '-68px' : 0,
              },
            }}
          >
            {side_svg_big && <CMSImage value={{ svg_image: side_svg_big }} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const FeaturesSection = (props: HomePage) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > div:not(:last-of-type)': { mb: { _: 10, lg: 23.5 } },
      }}
    >
      {props.features_sections.map(({ id, value }, index) => (
        <FeatureBlock key={id} feature={value} index={index} />
      ))}
    </Box>
  );
};

const upboundItems = [
  {
    img: placeholder,
    title: 'provider-aws',
    text: "Upbound's official Crossplane provider to manage Amazon Web Services (AWS) resources in Kubernetes.",
    linkText: 'upbound/provider.aws',
    link: '',
  },
  {
    img: placeholder,
    title: 'provider-gcp',
    text: "Upbound's official Crossplane provider to manage Google Cloud Platform (GCP) services in Kubernetes.",
    linkText: 'upbound/provider.gcp',
    link: '',
  },
  {
    img: placeholder,
    title: 'provider-azure',
    text: "Upbound's official Crossplane provider to manage Microsoft Azure services in Kubernetes.",
    linkText: 'upbound/provider.azure',
    link: '',
  },
];

// NOTE: <IMAGE> USED FOR CMS PURPOSES
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type UpboundItemProps = {
  upboundItem: {
    img: string | StaticImport;
    title: string;
    text: string;
    linkText: string;
    link: string;
  };
};

const UpboundItem = ({ upboundItem }: UpboundItemProps) => {
  const { img, title, text, linkText, link } = upboundItem;

  return (
    <Box sx={cardStyles}>
      <Link href={link} muiProps={{ target: '_blank' }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={providerIcon}>
            <Image src={img} alt="provider icon" layout="fill" objectFit="cover" />
          </Box>
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            variant="body_normal"
            sx={{
              mb: 2,
              ...fontAvenirBold,
            }}
          >
            {title}
          </Typography>
          <Typography variant="body_small" sx={{ mb: 2 }}>
            {text}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body_small" sx={{ color: COLORS.blueBayoux }}>
            {linkText}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

type Props = {
  isPreview?: boolean;
} & HomePage;

const Home = (props: Props) => {
  return (
    <PageProvider cms_head_props={props.cms_head_props} isPreview={props.isPreview}>
      <Section sx={headerSection}>
        <HeaderSection {...props.header[0].value} />
      </Section>

      <Section
        angleTop="topRight"
        sx={{
          pt: { _: 16, md: 23.5 },
          pb: { _: 16, md: 23.5 },
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ maxWidth: 950, mx: 'auto' }}>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            {props.section_1_title}
          </Typography>
          <Typography variant="body_normal">{props.section_1_sub_title}</Typography>
          {props.section_1_button[0] && (
            <Button sx={{ mt: 3.5, mb: 8 }} cmsValue={props.section_1_button[0].value}>
              {props.section_1_button[0].value.text}
            </Button>
          )}
        </Box>
        <Typography sx={subText}>
          Started by Upbound and adopted by the cloud native community
        </Typography>
        <CrossplaneLogosSection {...props} />
      </Section>

      <Section
        sx={{
          pb: { _: 16, md: 23.5 },
          position: 'relative',
          backgroundColor: '#fff',
        }}
      >
        <FeaturesSection {...props} />
      </Section>

      <Section sx={{ pb: { _: 16, md: 23.5 }, backgroundColor: '#fff' }}>
        <Box sx={{ maxWidth: 950, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            Section on Upbound Marketplace
          </Typography>
          <Typography variant="body_normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales erat id mollis
            auctor. Curabitur at neque vitae ipsum sagittis rhoncus. Sed id leo nisi. Praesent
            luctus suscipit auctor.
          </Typography>
        </Box>
        <Box>
          <Box sx={{ mt: 5, ...gridLayout }}>
            {upboundItems.map((upboundItem) => (
              <UpboundItem key={upboundItem.title} upboundItem={upboundItem} />
            ))}
          </Box>
          <Box textAlign="center">
            {props.section_1_button[0] && (
              <Button sx={{ mt: 6 }} cmsValue={props.section_1_button[0].value}>
                Learn More About Official Providers
                {/* {props.section_1_button[0].value.text} */}
              </Button>
            )}
          </Box>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Home;

const tempData = {
  id: 3,
  meta: {
    type: 'app.HomePage',
    detail_url: 'http://localhost:8000/api/v2/pages/3/',
    html_url: null,
    slug: 'home-page',
    show_in_menus: false,
    seo_title: 'Crossplane - The cloud-native control plane framework',
    search_description: '',
    first_published_at: '2022-07-18T12:31:02.044354Z',
    alias_of: null,
    parent: null,
  },
  title: 'Home Page',
  seo_keywords: '',
  og_twitter_title: '',
  og_twitter_url: 'https://www.crossplane.io/',
  relative_url: '/',
  og_twitter_description: '',
  og_twitter_image: null,
  twitter_card: 'summary',
  twitter_site: '@crossplane_io',
  twitter_creator: '',
  auto_manage_canonical: false,
  site_page_canonical_url: {
    id: 3,
    meta: {
      type: 'app.HomePage',
      detail_url: 'http://localhost:8000/api/v2/pages/3/',
    },
    title: 'Home Page',
  },
  canonical_url: '',
  header: [
    {
      type: 'header',
      value: {
        title: 'The cloud native control plane framework',
        subtitle:
          'Build control planes without needing to write code. Crossplane has a highly extensible backend that enables you to orchestrate applications and infrastructure no matter where they run, and a highly configurable frontend that lets you define the declarative API it offers.',
        buttons: [
          {
            type: 'button',
            value: {
              text: 'Get Started on GitHub',
              style_type: 'gradientContained',
              link: [
                {
                  type: 'relative_url',
                  value: '/products/universal-crossplane',
                  id: 'd1458e24-28dc-4879-991c-c58f5d8e2e0d',
                },
              ],
              icon: {
                title: 'rocketship-icon.svg',
                url: '/icons/github.svg',
                view_box: '0 0 25 26',
              },
              has_arrow: false,
            },
            id: '3e92ed7d-7d0d-4e6c-ad65-508b3656ba6c',
          },
          {
            type: 'button',
            value: {
              text: 'Learn More',
              style_type: 'whiteOutlined',
              link: [
                {
                  type: 'relative_url',
                  value: '/contact',
                  id: '872722a1-1033-4b47-9a16-f06d93a7aa7e',
                },
              ],
              icon: {
                title: null,
                url: null,
                view_box: null,
              },
              has_arrow: false,
            },
            id: '9b73059d-71ae-47b7-8ed9-48017f8e6cbb',
          },
        ],
      },
      id: 'ac642308-e7ce-4fba-81c8-c532689511cc',
    },
  ],
  section_1_title: 'Created to power open platforms',
  section_1_sub_title:
    'We built Crossplane to help organizations build their platforms like the cloud vendors build theirs—with control planes. Crossplane is an open source, CNCF project built on the foundation of Kubernetes to orchestrate anything. Encapsulate policies, permissions, and other guardrails behind a custom API line to enable your customers to self-service without needing to become an infrastructure expert.',
  section_1_center_title_count: '5K+',
  section_1_center_title: 'Slack Members',
  section_1_center_text: 'Adopted by hundreds of amazing companies',
  section_1_button: [
    {
      type: 'button',
      value: {
        text: 'Join the Community',
        style_type: 'turquoiseContained',
        link: [
          {
            type: 'external_url',
            value: 'https://crossplane.io/',
            id: '83e1ee1c-178d-4abc-b70f-68b870c08ff1',
          },
        ],
        icon: {
          title: null,
          url: null,
          view_box: null,
        },
        has_arrow: false,
      },
      id: '8b6d1cdd-8336-45be-a004-d5e316a975ff',
    },
  ],
  features_sections: [
    {
      type: 'section',
      value: {
        header_svg: {
          svg_image: {
            title: 'EnterpriseReadyIcon.svg',
            url: 'http://localhost:8000/media/documents/EnterpriseReadyIcon.svg',
            view_box: '0 0 34 35',
          },
          width: null,
          height: null,
        },
        // header_text: 'Enterprise ready',
        title: 'Extensible by Design',
        text: 'Crossplane is designed from the ground up with extension in mind. From Providers that extend Crossplane to orchestrate new kinds of applications and infrastructure, to Configurations that extend Crossplane to expose new APIs, our community will help you find what you need to build your ideal control plane. Interested in building your own extensions?',
        link_text: 'Join the Crossplane Slack Channel',
        link: [
          {
            type: 'external_url',
            value: 'https://slack.crossplane.io/',
            id: '66fbd429-f48f-4aa0-88ed-c91f4b708ae4',
          },
        ],
        side_svg_big: {
          title: 'home-Page-Image-1-main.svg',
          url: '/placeholder.png',
          view_box: '0 0 640 427',
        },
        side_svg_big_mobile: {
          title: 'home-Page-Image-1-mobile-main.svg',
          url: '/placeholder.png',
          view_box: '0 0 640 427',
        },
      },
      id: '1c6b3c17-2427-4e66-bd4d-eb150a64607a',
    },
    {
      type: 'section',
      value: {
        header_svg: {
          svg_image: {
            title: 'DeployWithConfidenceIcon.svg',
            url: 'http://localhost:8000/media/documents/DeployWithConfidenceIcon.svg',
            view_box: '0 0 34 35',
          },
          width: null,
          height: null,
        },
        // header_text: 'Deploy with confidence',
        title: 'Putting you in control',
        text: 'Most platforms require that you buy into their opinionated API concepts. With Crossplane you can build a platform around your own opinions. We know the best control planes are tailored to the task at hand so we designed Crossplane as a framework that puts you in control. Use Crossplane to design a control plane that exposes declarative APIs tailored to your unique orchestration needs.',
        link_text: 'Learn More',
        link: [
          {
            type: 'relative_url',
            value: '/why-control-planes',
            id: 'aa82837e-1291-4769-9bb9-38111010967e',
          },
        ],
        side_svg_big: {
          title: 'DeployWithConfidenceBig.svg',
          url: '/placeholder.png',
          view_box: '0 0 640 427',
        },
        // side_svg_small: {
        //   title: 'DeployWithConfidenceSmall.svg',
        //   url: 'http://localhost:8000/media/documents/DeployWithConfidenceSmall.svg',
        //   view_box: '0 0 261 324',
        // },
        // side_svg_small_top_offset: 67,
        // side_svg_small_right_offset: 0,
        side_svg_big_mobile: {
          title: 'DeployWithConfidenceBigMobile.svg',
          url: '/placeholder.png',
          view_box: '0 0 640 427',
        },
        // side_svg_small_mobile: {
        //   title: 'DeployWithConfidenceSmallMobile.svg',
        //   url: 'http://localhost:8000/media/documents/DeployWithConfidenceSmallMobile.svg',
        //   view_box: '0 0 136 169',
        // },
        // side_svg_small_top_offset_mobile: 34,
        // side_svg_small_right_offset_mobile: -32,
      },
      id: '97d82dcc-6e64-4a6b-a22e-e2b5258d226b',
    },
    {
      type: 'section',
      value: {
        header_svg: {
          svg_image: {
            title: 'EfficiencyEaseIcon.svg',
            url: 'http://localhost:8000/media/documents/EfficiencyEaseIcon.svg',
            view_box: '0 0 36 36',
          },
          width: null,
          height: null,
        },
        // header_text: 'Efficiency + ease',
        title: 'Built on a Solid Foundation',
        text: 'Crossplane builds on the class leading Kubernetes control plane, extending its battle hardened reliability and security features like Role Based Access Control (RBAC) to orchestrate everything - not just containers. Because Crossplane shares a foundation with Kubernetes it integrates smoothly with most popular cloud native tools.',
        link_text: 'Learn More',
        link: [
          {
            type: 'external_url',
            value: 'https://crossplane.io/docs/v1.9.html',
            id: 'a2a536c9-ab7e-45b8-9c67-c40a0027f9b4',
          },
        ],
        side_svg_big: {
          title: 'home-Page-Image-2-main.svg',
          url: '/placeholder.png',
          view_box: '0 0 640 427',
        },
        // side_svg_small: {
        //   title: 'home-Page-Image-2-additional.svg',
        //   url: 'http://localhost:8000/media/documents/home-Page-Image-2-additional.svg',
        //   view_box: '0 0 74 71',
        // },
        // side_svg_small_top_offset: -9,
        // side_svg_small_right_offset: 0,
        side_svg_big_mobile: {
          title: 'home-Page-Image-2-mobile-main.svg',
          url: '/placeholder.png',
          view_box: '0 0 640 427',
        },
        // side_svg_small_mobile: {
        //   title: 'home-Page-Image-2-mobile-additional.svg',
        //   url: 'http://localhost:8000/media/documents/home-Page-Image-2-mobile-additional.svg',
        //   view_box: '0 0 53 51',
        // },
        // side_svg_small_top_offset_mobile: -3,
        // side_svg_small_right_offset_mobile: 8,
      },
      id: 'e679a85f-831a-4bc3-93b0-2a6637f3f972',
    },
  ],
};

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(context, '/', tempData);
  // const returnValue = await handleGetStaticProps(context, '/', true);

  if (returnValue) {
    return {
      props: returnValue,
    };
  } else {
    return {
      notFound: true,
    };
  }
};
