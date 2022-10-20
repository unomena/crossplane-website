import React from 'react';

import Image from 'next/future/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import * as routes from 'src/routes';

import PageProvider from 'src/components/PageProvider';
import Section from 'src/components/Section';
import Button from 'src/elements/Button';

import placeholder from 'public/placeholder.png';

const headerSection: SxProps = {
  pt: { _: 13, md: 24 },
  pb: { _: 13, md: 16 },
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 6,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gap: 9,
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
};

const gridItem: SxProps = {
  borderBottom: `1px solid ${COLORS.blueBayoux}`,
  pb: 5,

  '&:nth-last-child(1)': {
    borderBottom: `none`,
    pb: 0,
  },

  [MQ.md]: {
    pb: 8,
    '&:nth-last-child(2)': {
      borderBottom: 'none',
      pb: 0,
    },
  },
};

const iconStyles: SxProps = {
  position: 'relative',
  width: '50px',
  height: '50px',
  borderRadius: '50px',
  overflow: 'hidden',
  mb: 2,
};

const HeaderSection = () => {
  return (
    <Box
      sx={{
        [MQ.md]: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        },
      }}
    >
      <Box
        sx={{
          pr: { _: 0, md: 5 },
          width: { _: '100%', md: '50%' },
        }}
      >
        <Typography variant="h2" color={COLORS.linkWater} sx={{ mb: 5 }}>
          Control planes - the future of cloud
        </Typography>
        <Typography variant="body_normal" color={COLORS.linkWater}>
          The cloud vendors have been building with control planes for years. Now Crossplane helps
          you do the same. Control planes are self-healing—they automatically correct drift.
          Consumers can self-service fast because control planes offer a single point of control for
          policy and permissions and control planes integrate easily with other systems because they
          expose an API, not just a command-line.
        </Typography>
        <Button
          styleType="gradientContained"
          sx={{ mt: 5, mb: { _: 6, md: 0 } }}
          href={routes.upboundUrl}
        >
          Learn More
        </Button>
      </Box>
      <Box
        sx={{
          pl: { _: 0, md: 5 },
          width: { _: '100%', md: '50%' },
        }}
      >
        <Image
          src={placeholder}
          alt="placeholder"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
};

const whyItems = [
  {
    icon: placeholder,
    title: 'Declarative configuration',
    // eslint-disable-next-line max-len
    text: 'Crossplane lets you build a control plane with Kubernetes-style declarative and API-driven configuration and management for anything. Through this approach, applications and infrastructure managed through your control plane are self-healing right out of the box.',
  },
  {
    icon: placeholder,
    title: 'Unify application and infrastructure configuration and deployment',
    // eslint-disable-next-line max-len
    text: 'Crossplane enables application and infrastructure configuration to co-exist in the same control plane, reducing the complexity of your toolchains and deployment pipelines.',
  },
  {
    icon: placeholder,
    title: 'One source of truth for infrastructure configuration and setup',
    // eslint-disable-next-line max-len
    text: 'Control planes built with Crossplane integrate with CI/CD pipelines, so teams can create, track, and approve changes using GitOps best practices.',
  },
  {
    icon: placeholder,
    title: 'Automate operational tasks with reconciling controllers',
    // eslint-disable-next-line max-len
    text: 'Your control planes are made up of several controllers, which are responsible for the entire lifecycle of a resource. Each resource is responsible for provisioning, health, scaling, failover, and actively responding to external changes that deviate from the desired configuration.',
  },
  {
    icon: placeholder,
    title: 'Built with high levels of extensibility',
    // eslint-disable-next-line max-len
    text: 'Control planes built with Crossplane leverage broadly accepted Kubernetes patterns, making it easily extensible by adding your own APIs and controllers. Increase flexibility and security by baking policies, quotas, and permissions into a custom definition.',
  },
  {
    icon: placeholder,
    title: 'A strong separation of concerns.',
    // eslint-disable-next-line max-len
    text: "Crossplane lets you bake in organisational concepts and policy at the API level, allowing your customers the freedom to self-service within the bounds of the control plane APIs you've defined.",
  },
];

// NOTE: <IMAGE> USED FOR CMS PURPOSES
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type WhyItemProps = {
  whyItem: {
    icon: string | StaticImport;
    title: string;
    text: string;
  };
};

const WhyItemSection = ({ whyItem }: WhyItemProps) => {
  const { icon, title, text } = whyItem;

  return (
    <Box sx={gridItem}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={iconStyles}>
          <Image src={icon} alt="provider icon" sizes="100vw" fill style={{ objectFit: 'cover' }} />
        </Box>
      </Box>
      <Box>
        <Typography
          variant="body_normal"
          sx={{
            mb: 2,
            ...fontAvenirBold,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body_small">{text}</Typography>
      </Box>
    </Box>
  );
};

type Props = {};

const Why = ({}: Props) => {
  return (
    <PageProvider>
      <Section sx={headerSection}>
        <HeaderSection />
      </Section>

      <Section
        angleTop="topRight"
        sx={{
          pt: { _: 16, md: 23.5 },
          pb: { _: 16, md: 23.5 },
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2">Why use Crossplane to build control planes?</Typography>
        </Box>
        {/* <Box sx={{ mt: 10, ...gridLayout }}> */}
        <Box sx={{ mt: { _: 5, md: 10 }, ...gridLayout }}>
          {whyItems.map((whyItem) => (
            <WhyItemSection key={whyItem.title} whyItem={whyItem} />
          ))}
        </Box>
        <Box sx={{ maxWidth: 950, textAlign: 'center', mx: 'auto', pt: { _: 16, md: 23.5 } }}>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            Section linking back to Upbound
          </Typography>
          <Typography variant="body_normal">
            Would love to include maybe a write up about Upbound using crossplane/control planes?
            Anything that would serve as a nice callout back to Upbound to increase referral traffic
          </Typography>
          <Button styleType="turquoiseContained" sx={{ mt: 6 }} href={routes.upboundUrl}>
            Learn More About Upbound
          </Button>
        </Box>
      </Section>
      {/* <Section sx={{ pb: { _: 16, md: 23.5 }, backgroundColor: '#fff' }}>
        <Box sx={{ maxWidth: 950, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            Section linking back to Upbound
          </Typography>
          <Typography variant="body_normal">
            Would love to include maybe a write up about Upbound using crossplane/control planes?
            Anything that would serve as a nice callout back to Upbound to increase referral traffic
          </Typography>
          <Button styleType="turquoiseContained" sx={{ mt: 6 }} href={routes.upboundUrl}>
            Learn More About Upbound
          </Button>
        </Box>
      </Section> */}
    </PageProvider>
  );
};

export default Why;
