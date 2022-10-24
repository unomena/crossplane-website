import React from 'react';

import { Box, Typography } from '@mui/material';
// import { Box, Typography, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

import * as routes from 'src/routes';

import Section from 'src/components/Section';
import Button from 'src/elements/Button';

// const btnContainer: SxProps = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: { _: 'center', md: 'left' },
//   flexDirection: { _: 'column', sm: 'row' },

//   '& > button, a': {
//     mx: { _: 0, sm: '10px' },

//     ':not(:last-of-type)': {
//       mb: { _: '20px', sm: 0 },
//     },
//   },
// };

const defaultTitle = 'Crossplane is open source \n and community driven';
const defaultParagraph =
  // eslint-disable-next-line max-len
  "Crossplane is an open source control plane framework supported by the cloud-native community. Crossplane has been endorsed by some of the world's best companies and is released under the Apache 2.0 license. We remain committed to our community and will always be vendor neutral.";
const defaultBtnText = 'Get Started With Crossplane';
const defaultBtnLink = routes.githubUrl;
const defaultBtnStyleType = 'gradientContained';

type Props = {
  title?: string;
  paragraph?: string;
  btnText?: string;
  btnLink?: string;
  btnStyleType?: ButtonStyleType;
  // btnTarget?: ButtonStyleType;
  // btnTwo?: boolean;
  // btnTwoText?: string;
  // btnTwoLink?: string;
  // customSx?: SxProps;
};

const CTACard = ({
  title = defaultTitle,
  paragraph = defaultParagraph,
  btnText = defaultBtnText,
  btnLink = defaultBtnLink,
  btnStyleType = defaultBtnStyleType,
}: // btnTwo = false,
// btnTwoText = defaultBtnText,
// btnTwoLink = defaultBtnLink,
// customSx,
Props) => {
  return (
    <Section
      angleBottom="btmRight"
      sx={{
        backgroundColor: COLORS.bayOfMany,
        pt: 16,
        pb: { _: 16, md: 22 },
        // ...customSx,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          color="#fff"
          sx={{ maxWidth: { md: 950 }, mx: 'auto', mb: 2.5, whiteSpace: { _: '', md: 'pre-wrap' } }}
        >
          {title}
        </Typography>
        <Typography
          variant="body_normal"
          color="#fff"
          sx={{
            maxWidth: { md: 950 },
            mx: 'auto',
            mb: 5,
            whiteSpace: { _: '', md: 'pre-wrap' },
          }}
        >
          {paragraph}
        </Typography>
        <Button styleType={btnStyleType} href={btnLink} target="_blank">
          {btnText}
        </Button>

        {/* {!btnTwo ? (
          <Button styleType="gradientContained" href={btnLink} target="_blank">
            {btnText}
          </Button>
        ) : (
          <Box sx={btnContainer}>
            <Button styleType="gradientContained" href={btnLink}>
              {btnText}
            </Button>
            <Button styleType="whiteOutlined" href={btnTwoLink}>
              {btnTwoText}
            </Button>
          </Box>
        )} */}
      </Box>
    </Section>
  );
};

export default CTACard;
