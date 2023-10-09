import React from 'react';

import Image from 'next/future/image';
import { GetStaticProps } from 'next';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import getNewsBannerData from 'src/utils/getNewsBannerData';

import * as routes from 'src/routes';

import PageProvider from 'src/components/PageProvider';
import Section from 'src/components/Section';
import Button from 'src/elements/Button';

import createdBy from 'public/created-by-upbound.svg';
import headerImage from 'public/static-media/why-header-img.png';
import icon_1 from 'public/static-media/icons/declarative.svg';
import icon_2 from 'public/static-media/icons/unify.svg';
import icon_3 from 'public/static-media/icons/infrastructure.svg';
import icon_4 from 'public/static-media/icons/automate.svg';
import icon_5 from 'public/static-media/icons/built.svg';
import icon_6 from 'public/static-media/icons/separation.svg';

const headerSection: SxProps = {
  pt: { _: 13, md: 23.5 },
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
  mb: 3,
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
        <Typography variant="h2" color="#fff" sx={{ mb: 5 }}>
          Control planes — the future of cloud
        </Typography>
        <Typography variant="body_normal" color="#fff">
          The cloud vendors have been building with control planes for years. Now Crossplane helps
          you do the same. Control planes are self-healing—they automatically correct drift.
          Consumers can self-service fast because control planes offer a single point of control for
          policy and permissions and control planes integrate easily with other systems because they
          expose an API, not just a command-line.
        </Typography>
        <Button
          styleType="turquoiseContained"
          sx={{ mt: 5, mb: { _: 6, md: 0 } }}
          href={routes.upboundMarketUrl}
          target="_blank"
        >
          Join the marketplace
        </Button>
      </Box>
      <Box
        sx={{
          pl: { _: 0, md: 5 },
          width: { _: '100%', md: '50%' },
        }}
      >
        <Image
          src={headerImage}
          alt="header image"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
};

const whyItems = [
  {
    icon: icon_1,
    title: 'Declarative configuration',
    // eslint-disable-next-line max-len
    text: 'Crossplane lets you build a control plane with Kubernetes-style declarative and API-driven configuration and management for anything. Through this approach, applications and infrastructure managed through your control plane are self-healing right out of the box.',
  },
  {
    icon: icon_2,
    title: 'Unify application and infrastructure configuration and deployment',
    // eslint-disable-next-line max-len
    text: 'Crossplane enables application and infrastructure configuration to co-exist in the same control plane, reducing the complexity of your toolchains and deployment pipelines.',
  },
  {
    icon: icon_3,
    title: 'One source of truth for infrastructure configuration and setup',
    // eslint-disable-next-line max-len
    text: 'Control planes built with Crossplane integrate with CI/CD pipelines, so teams can create, track, and approve changes using GitOps best practices.',
  },
  {
    icon: icon_4,
    title: 'Automate operational tasks with reconciling controllers',
    // eslint-disable-next-line max-len
    text: 'Your control planes are made up of several controllers, which are responsible for the entire lifecycle of a resource. Each resource is responsible for provisioning, health, scaling, failover, and actively responding to external changes that deviate from the desired configuration.',
  },
  {
    icon: icon_5,
    title: 'Built with high levels of extensibility',
    // eslint-disable-next-line max-len
    text: 'Control planes built with Crossplane leverage broadly accepted Kubernetes patterns, making it easily extensible by adding your own APIs and controllers. Increase flexibility and security by baking policies, quotas, and permissions into a custom definition.',
  },
  {
    icon: icon_6,
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
    <PageProvider ctaBtnTarget="_blank">
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
        <Box sx={{ mt: { _: 5, md: 10 }, ...gridLayout }}>
          {whyItems.map((whyItem) => (
            <WhyItemSection key={whyItem.title} whyItem={whyItem} />
          ))}
        </Box>
        <Box sx={{ maxWidth: 950, textAlign: 'center', mx: 'auto', pt: { _: 16, md: 23.5 } }}>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Where open-source meets enterprise
          </Typography>
          <Typography variant="body_normal" sx={{ mb: 4 }}>
            Upbound helps you build, deploy, and manage your internal cloud platforms using control
            planes, powered by Crossplane and optimized by Upbound.
          </Typography>
          <Box sx={{ maxWidth: 269, mx: 'auto' }}>
            <Image
              src={createdBy}
              alt="createdBy"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Button
            styleType="turquoiseContained"
            sx={{ mt: 4 }}
            href={routes.upboundUrl}
            target="_blank"
          >
            Learn More About Upbound
          </Button>
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Why;

export const getStaticProps: GetStaticProps = async () => {
  const newsBannerData = await getNewsBannerData();

  return {
    props: {
      newsBannerData,
    },
  };
};
