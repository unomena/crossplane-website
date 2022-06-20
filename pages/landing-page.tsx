import React, { useEffect, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';

import { COLORS, gradient_1, MQ } from 'src/theme';
import { Box, SxProps, Typography, List, ListItem, TextField, MenuItem } from '@mui/material';

import * as routes from 'src/routes';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';

import ArrowRight from 'src-new/svg/ArrowRight';
import placeHolder from 'public/new-images/place-holder-img.png';
import DeployWithConfidenceIcon from 'public/new-images/home-page/features/DeployWithConfidenceIcon.svg';

const formStyles: SxProps = {
  margin: 0,
  padding: 2,
  backgroundColor: '#fff',
};

const listStyles: SxProps = {
  pl: '16px',
  listStyle: 'disc',

  '& li': {
    display: 'list-item',
    pl: '8px',
    '&::marker': {
      color: COLORS.sun,
    },
  },
};

const iconListStyles: SxProps = {
  pl: '16px',

  '& li': {
    pl: '0',
    '& img': {
      pr: '16px',
    },
  },
};

type InitType = {
  [key: string]: any;
};

type FormProps = {
  title?: string;
};

type FormValidationItemType = {
  regex: RegExp;
  errorMsg: string;
};

type FormValidationType = {
  [key: string]: {
    value: string;
    label: string;
    required?: boolean;
    valid: boolean;
    validation: Array<FormValidationItemType>;
    select?: Array<string>;
  };
};

const NO_ERROR = ' '; // empty char in order to display helper text field permanently
const FIELD_REQUIRED = { regex: /\S/g, errorMsg: 'Mandatory Field' };
const TITLE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
const ALERT = 'Your input Data:\n\n';

const initValue: FormValidationType = {
  title: {
    value: '',
    label: 'Title',
    valid: true,
    required: false,
    validation: [],
    select: ['Ms.', 'Mrs.', 'Mr.'],
  },
  firstName: {
    value: '',
    label: 'First Name',
    valid: true,
    required: true,
    validation: [{ regex: /[0-9a-zA-Z]{3,}/g, errorMsg: 'Less than 3 or invalid characters.' }],
  },
  lastName: {
    value: '',
    label: 'Last Name',
    valid: true,
    required: false,
    validation: [{ regex: /[0-9a-zA-Z]{3,}/g, errorMsg: 'Less than 3 or invalid characters.' }],
  },
  age: {
    value: '',
    label: 'Your age',
    valid: true,
    required: true,
    validation: [{ regex: /^[0-9]{1,3}$/g, errorMsg: 'You need to input a valid number.' }],
  },
  email: {
    value: '',
    label: 'Email',
    valid: true,
    required: false,
    validation: [{ regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/g, errorMsg: 'Invalid email address.' }],
  },
};

const useFormValidation = (props: FormValidationType) => {
  const { initValue, initValid, initHelperText } = getInitValues();
  const [value, setValue] = React.useState(initValue);
  const [isValid, setIsValid] = React.useState(initValid);
  const [helperText, setHelperText] = React.useState(initHelperText);

  function getInitValues() {
    let initValue: InitType = {};
    let initValid: InitType = {};
    let initHelperText: InitType = {};
    for (const [key, value] of Object.entries(props)) {
      initValue[key] = value.value;
      initValid[key] = value.valid;
      initHelperText[key] = NO_ERROR;
    }
    return { initValue, initValid, initHelperText };
  }

  let obj: InitType = {};

  for (const [key, val] of Object.entries(props)) {
    obj[key] = {
      value: value[key],
      isValid: isValid[key],
      required: val.required,
      bind: {
        value: value![key],
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          setValue((prev) => {
            return { ...prev, [key]: event.target.value };
          });
          const required = event.target.required;
          let validationArr = required ? [FIELD_REQUIRED] : [];
          validationArr = validationArr.concat(val.validation);
          let errArr = validationArr.map((v) => {
            return event.target.value.search(v.regex);
          });
          let validationState = errArr.filter((i) => i < 0).length === 0 ? true : false;
          let index = errArr.findIndex((e) => e === -1);
          let errorMsg = validationState ? NO_ERROR : validationArr[index].errorMsg;
          setHelperText((prev) => {
            return { ...prev, [key]: errorMsg };
          });
          setIsValid((prev) => {
            return { ...prev, [key]: validationState };
          });
        },
        helperText: isValid[key] ? NO_ERROR : helperText![key],
        error: !isValid[key],
      },
    };
  }
  obj.resetValue = () => {
    const { initValue, initValid, initHelperText } = getInitValues();
    setValue(initValue);
    setIsValid(initValid);
    setHelperText(initHelperText);
  };
  return obj;
};

const Form = (props: FormProps) => {
  const { title } = props;
  const obj = useFormValidation(initValue);
  let valid =
    Object.keys(initValue)
      .map((item) => {
        let isValid = obj[item].isValid;
        let isNotRequired = obj[item].required ? false : true;
        let isRequiredAndNotEmpty = isNotRequired ? true : obj[item].value.length > 0;
        return isValid && isRequiredAndNotEmpty;
      })
      .filter((x) => x).length === Object.keys(initValue).length;

  function sumbmit() {
    let str = ALERT;
    str += Object.keys(obj)
      .map((item) => obj[item].value)
      .join('\n');
    alert(str);
  }
  // function reset() {
  //   obj.resetValue();
  // }

  return (
    <Box sx={formStyles}>
      {title && (
        <Box>
          <Typography variant="body_normal" sx={{ color: COLORS.firefly, mb: 3 }}>
            {title}
          </Typography>
        </Box>
      )}
      <Box>
        {Object.keys(initValue).map((item, index) => {
          const itemObj = initValue[item];
          return (
            <TextField
              variant="standard"
              size="medium"
              key={index}
              fullWidth
              id={item}
              {...obj[item]?.bind}
              label={itemObj.label}
              autoComplete="off"
              select={itemObj.select && itemObj.select.length > 0}
            >
              {itemObj.select &&
                itemObj.select.map((sel, selIndex) => {
                  return (
                    <MenuItem key={selIndex} value={sel}>
                      {sel}
                    </MenuItem>
                  );
                })}
            </TextField>
          );
        })}
      </Box>
      <Box display="flex" justifyContent="space-around" sx={{ my: 2 }}>
        <Button
          styleType={valid ? 'gradientContained' : 'disabled'}
          disabled={!valid}
          onClick={sumbmit}
        >
          Download Whitepaper
        </Button>
      </Box>
    </Box>
  );
};

const list = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit.',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do.',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod.',
  },
];

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

const iconListContent = [
  {
    icon: DeployWithConfidenceIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero nunc, egestas a congue eget.',
  },
  {
    icon: DeployWithConfidenceIcon,
    text: 'Phasellus libero nunc, egestas a congue eget.',
  },
  {
    icon: DeployWithConfidenceIcon,
    text: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod.',
  },
];

type IconListProps = {
  iconListItem: {
    text: string;
    icon: string | StaticImport;
  };
};

const IconList = ({ iconListItem }: IconListProps) => {
  const { text, icon } = iconListItem;

  return (
    <ListItem>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box sx={{ mr: 2 }}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              width: 24,
              [MQ.md]: {
                width: 30,
              },
            }}
          >
            <Image src={icon} alt="icon" />
          </Box>
        </Box>

        <Typography variant="body_small">{text}</Typography>
      </Box>
    </ListItem>
  );
};

// const displayTitle = 'Products - The Universal Cloud Platform';
// const metaImg = OGImgProducts.src;

type Props = {};

const LandingPage = ({}: Props) => {
  return (
    <PageProvider hideTryForFreeCard removeFooterPadding>
      <Section sx={{ pt: 20, pb: 10 }}>
        <Box
          sx={{
            [MQ.lg]: {
              display: 'flex',
              flexDirection: 'row',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              width: '100%',
              [MQ.lg]: {
                flex: 1,
                width: '50%',
              },
            }}
          >
            <Typography variant="h1_new" sx={{ mb: 3 }}>
              Header lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body_big" sx={{ mb: 5 }}>
              Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </Typography>
            <Box sx={{ position: 'relative', width: '100%', height: '374px' }}>
              <Image src={placeHolder} alt="placeholder" layout="fill" objectFit="contain" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              [MQ.lg]: {
                flex: 1,
                width: '50%',
              },
            }}
          >
            <Box sx={{ pl: { _: 0, lg: '100px' } }}>
              <Form title={TITLE} />
            </Box>
          </Box>
        </Box>
      </Section>
      <Box>
        <Section bgcolor angleTopBottom="topBtmRight" sx={{ py: 20 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              [MQ.lg]: {
                flex: 1,
                width: '50%',
              },
            }}
          >
            <Typography variant="h2_new" sx={{ mb: 3 }}>
              Header 2 lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body_normal" sx={{ mb: 3 }}>
              Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </Typography>
            <List sx={listStyles}>
              {list.map((listItem) => (
                <ListItem key={listItem.id}>
                  <Typography variant="body_small">{listItem.text}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Section>
      </Box>
      <Box>
        <Section angleTop="topRight" sx={{ py: 20 }}>
          <Box
            sx={{
              [MQ.lg]: {
                display: 'flex',
                flexDirection: 'row',
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
                },
              }}
            >
              <Typography variant="h2_new" sx={{ mb: 3 }}>
                Header 2 lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body_normal" sx={{ mb: 5 }}>
                Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do eiusmod tempor
                incididunt.
              </Typography>
              <Button
                styleType="cornflowerContained"
                sx={{
                  width: { _: 225, sm: 208 },
                  '& > .MuiButton-iconSizeMedium': {
                    ml: '16px',
                    '& > svg': {
                      height: { _: 12, md: 13 },
                      width: { _: 7, md: 8 },
                    },
                  },
                }}
                endIcon={<ArrowRight />}
                href=""
              >
                CTA
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                [MQ.lg]: {
                  flex: 1,
                  width: '50%',
                },
              }}
            >
              <Box sx={{ pl: { _: 0, lg: '100px' } }}>
                <List sx={iconListStyles}>
                  {iconListContent.map((iconListItem) => (
                    <IconList key={iconListItem.text} iconListItem={iconListItem} />
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Section>
      </Box>
    </PageProvider>
  );
};

export default LandingPage;
