import React, { useEffect, useRef, useState } from 'react';

import { GetStaticProps } from 'next';
import Image from 'next/future/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import * as routes from 'src/routes';

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
  flexDirection: 'column',

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
  borderRadius: '20px',
  overflow: 'hidden',
  mb: 3,
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

const FeatureBlock = ({ feature, index }: { feature: HomePageFeature; index: number }) => {
  const reversed = index % 2 !== 0;
  const colorOptions = [COLORS.froly, COLORS.brightSun, COLORS.turquoise];

  const { title, text, link_text, link, side_svg_big } = feature;

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
    // link: '',
  },
  {
    img: placeholder,
    title: 'provider-gcp',
    text: "Upbound's official Crossplane provider to manage Google Cloud Platform (GCP) services in Kubernetes.",
    linkText: 'upbound/provider.gcp',
    // link: '',
  },
  {
    img: placeholder,
    title: 'provider-azure',
    text: "Upbound's official Crossplane provider to manage Microsoft Azure services in Kubernetes.",
    linkText: 'upbound/provider.azure',
    // link: '',
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
    // link: string;
  };
};

const UpboundItem = ({ upboundItem }: UpboundItemProps) => {
  const { img, title, text, linkText } = upboundItem;
  // const { img, title, text, linkText, link } = upboundItem;

  return (
    <Box sx={cardStyles}>
      {/* <Link href={link} muiProps={{ target: '_blank' }}> */}
      <Box sx={{ display: 'flex' }}>
        <Box sx={providerIcon}>
          <Image src={img} alt="provider icon" sizes="100vw" fill style={{ objectFit: 'cover' }} />
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
      {/* </Link> */}
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
          <Button styleType="turquoiseContained" sx={{ mt: 3.5, mb: 8 }} href={routes.upboundUrl}>
            Learn More About Upbound
          </Button>
          {/* {props.section_1_button[0] && (
              <Button sx={{ mt: 3.5, mb: 8 }} cmsValue={props.section_1_button[0].value}>
                {props.section_1_button[0].value.text}
              </Button>
            )} */}
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
            <Button styleType="turquoiseContained" sx={{ mt: 6 }} href={routes.upboundUrl}>
              Learn More About Official Providers
            </Button>
            {/* {props.section_1_button[0] && (
              <Button sx={{ mt: 6 }} cmsValue={props.section_1_button[0].value}>
                {props.section_1_button[0].value.text}
              </Button>
            )} */}
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
