import React from 'react';

import { styled } from '@mui/system';
import { COLORS, fontAvenirBold, fontAvenirRoman } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import PageProvider from 'src-new/components/PageProvider';
import QuestionAndAnswerRow from 'src/components/QuestionAndAnswerRow';
import { Wave } from 'src/components/Wave';

import { Anchor } from 'src/elements/Anchor';
import { AnchorButton } from 'src/elements/Button';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';

import * as routes from 'src/routes';

import { useCarousel } from 'src/utils/hooks';

import arrowRightBigStone from 'public/pricing/arrow-right-bigstone.svg';
import arrowRightWhite from 'public/pricing/arrow-right-white.svg';
import greenCheck from 'public/pricing/green-check.svg';
import greenListStyle from 'public/pricing/green-list-style.svg';
import leftDisabled from 'public/pricing/left-disabled.svg';
import rightEnabled from 'public/pricing/right-enabled.svg';

const AnswerParagraph = styled(Paragraph)`
  color: ${COLORS.white};
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const questions = [
  {
    question: 'How do I pay for the Enterprise plan?',
    answer: (
      <AnswerParagraph>
        You can pay with a credit card or via net banking (if you’re in United States). We will
        renew your subscription automatically at the end of every billing cycle.
      </AnswerParagraph>
    ),
  },
  {
    question: 'What are the limitations of Upbound Free Plan?',
    answer: (
      <AnswerParagraph>
        Upbound's Free plan is designed for individuals and community members building control
        planes. Users can connect a single self-hosted control plane (typically a local UXP
        deployment) to the management console, or create a time limited hosted control plane (a UXP
        instance hosted by Upbound) to get started.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Can I extend my time limited control plane in my Free account?',
    answer: (
      <AnswerParagraph>
        If you or your team need additional time to use one of Upbound's hosted control planes,
        please <Anchor href={routes.contactSalesUrl}>contact us</Anchor> and one of our team members
        will help you.
      </AnswerParagraph>
    ),
  },
  {
    question:
      'Can I start with a free trial and easily upgrade at a later point? How do I upgrade?',
    answer: (
      <AnswerParagraph>
        Upbound's free tier is designed for individuals and community members to get started
        building and debugging control planes. Start your free 14 day trial of our Enterprise tier
        simply by creating an Organization during sign up or via the Upbound console.
      </AnswerParagraph>
    ),
  },

  {
    question: 'What is the difference between Upbound Cloud and Upbound Enterprise?',
    answer: (
      <AnswerParagraph>
        Upbound is available as both a SaaS (Upbound Cloud) and single tenant (Upbound Enterprise)
        offering. Features and functionality between the two deployment options are identical today.
      </AnswerParagraph>
    ),
  },

  {
    question: 'Can I evaluate the Enterprise plan for free?',
    answer: (
      <AnswerParagraph>
        Yes. Our goal is to make our customers successful, and would love to work with you and your
        team to evaluate Upbound for a period of time free of charge.{' '}
        <Anchor href={routes.contactSalesUrl}>
          Please reach out and tell us a little more about your use case.
        </Anchor>
      </AnswerParagraph>
    ),
  },

  {
    question: 'Where can I report a bug?',
    answer: (
      <AnswerParagraph>
        Please join the #upbound channel on{' '}
        <Anchor href={routes.crossplaneSlackUpboundChannelUrl}>Crossplane Slack</Anchor> to alert
        our team of any issue you experience while using Upbound. If you're an Upbound customer,
        please submit a ticket via your ZenDesk (
        <Anchor href={routes.upboundZendeskUrl}>https://upbound.zendesk.com/</Anchor>).
      </AnswerParagraph>
    ),
  },
];

const plans = ['Free Plan', 'Business Critical Plan', 'Enterprise Plan', 'Community Crossplane'];

const features: Array<{
  header: string;
  data: [
    string | boolean,
    string | boolean,
    string | boolean,
    string | boolean,
    string | boolean
  ][];
}> = [
  {
    header: 'Deployment Option',
    data: [
      ['Cloud (SaaS)', false, true, true, true],
      ['Self-Hosted (On-Prem)', false, false, true, true],
    ],
  },
  {
    header: 'Upbound Marketplace',
    data: [
      ['Public Listings', true, true, true, true],
      ['Private Listings', false, '1', 'Unlimited', 'Unlimited'],
      ['Official Providers', false, false, true, true],
    ],
  },
  // {
  //   header: 'Hosting',
  //   data: [
  //     ['SaaS', false, false, true, false],
  //     ['Single-Tenant Self-Hosted Upbound Cloud and Upbound Registry', false, false, false, true],
  //   ],
  // },
  {
    header: 'Control Planes',
    data: [
      ['Control Planes', false, 'Time limited', 'Unlimited', 'Unlimited'],
      // ['Self-hosted Control Planes', false, '1', 'Unlimited', 'Unlimited'],
    ],
  },
  {
    header: 'Collaboration & Productivity',
    data: [
      ['Universal Console (self-service)', false, true, true, true],
      ['Real-time Platform Dashboard', false, true, true, true],
    ],
  },
  {
    header: 'Organization & Team Management',
    data: [
      ['Administrators', false, '1', 'Unlimited', 'Unlimited'],
      ['Organizations', false, false, 'Unlimited', 'Unlimited'],
      ['Teams', false, false, 'Unlimited', 'Unlimited'],
      ['Team Members', false, false, 'Unlimited', 'Unlimited'],
      ['Robot Accounts', false, false, 'Unlimited', 'Unlimited'],
      ['Role Based Access Control', false, false, 'Unlimited', 'Unlimited'],
    ],
  },
  {
    header: 'Observability',
    data: [
      ['Event Viewer', false, true, true, true],
      ['Cost Reporting & Controls', false, false, true, true],
      ['Resource Usage Metrics', false, false, true, true],
    ],
  },
  {
    header: 'Enterprise Support',
    data: [
      ['24x7 Follow the Sun Service Levels', false, false, false, true],
      ['Support by email, phone', false, false, true, true],
      ['Support ticket ZenDesk System', false, false, true, true],
      ['Unlimited support incidents', false, false, true, true],
      ['Unlimited team members submitting support incidents', false, false, true, true],
      ['Prioritized bug fixes', false, false, true, true],
      ['Upgrades, updates, proactive maintenance', false, false, true, true],
      ['Prioritized Feature Request', false, false, true, true],
      [
        'Guaranteed response times for P1, P2, P3 and P4 support tickets submitted',
        false,
        false,
        true,
        true,
      ],
    ],
  },
  {
    header: 'Services',
    data: [
      ['Implementation Services', 'N/A', 'N/A', 'N/A', 'Available'],
      ['Onboarding & Training', 'N/A', 'N/A', 'N/A', 'Available'],
    ],
  },
];

const PlanTile = styled(Box)`
  border-radius: 0 0 8px 8px;
  box-shadow: 0 10px 35px 0 rgba(0, 0, 0, 0.03);
  border: solid 1px ${COLORS.bigStone};
  background-color: ${COLORS.bigStone};
  overflow: hidden;
  height: 100%;
  margin-bottom: 30px;
`;

const PlanTileList = styled('ul')`
  padding-left: 0;

  & > li {
    list-style: none;
    background: url(${greenListStyle.src}) no-repeat left center;
    padding-left: 35px;
    ${fontAvenirRoman}
    color: ${COLORS.white};
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

const PlanTileButton = styled(AnchorButton)<{ dark?: boolean }>`
  background: url(${arrowRightWhite.src}) no-repeat right 18px center;
  text-align: left;
  color: ${COLORS.white};
  border-color: ${COLORS.white};
  ${fontAvenirBold}
  font-size: 16px;
  padding: 13px 24px;
  height: auto;
  border-radius: 2000px;
  margin-top: 10px;

  &:visited {
    color: ${COLORS.white};
  }

  // &:active,
  // &:hover,
  // &:focus {
  //   background-color: ${COLORS.white};
  //   color: ${COLORS.white};
  //   background-image: url(${arrowRightWhite.src});
  // }

  ${({ dark }) =>
    dark
      ? `
        color: ${COLORS.white};
        background-image: url(${arrowRightBigStone.src});
        background-color: ${COLORS.white};

        &:visited {
          color: ${COLORS.bigStone};
        }

        // &:active,
        // &:hover,
        // &:focus {
        //   background-color: ${COLORS.iris};
        //   border-color: ${COLORS.iris};
        // }
  `
      : ''}
`;

const Plan: React.FC<{
  color: keyof typeof COLORS;
  title: string;
  subTitle: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  darken?: boolean;
  children: React.ReactNode;
}> = ({
  color,
  title,
  subTitle,
  description,
  buttonText = 'Get Started',
  buttonHref = routes.cloudRegisterUrl,
  children,
  darken,
}) => {
  return (
    <Box flex={1} mx="15px" position="relative" zIndex={20}>
      <Box bgcolor={COLORS[color]} height="9px" borderRadius="8px 8px 0 0" />
      <PlanTile>
        <Box display="flex" pt="40px" pb="50px" px="36px" flexDirection="column" height="100%">
          <Box flex={1}>
            <Header variant="h3" color={color} sx={{ mb: '15px', minHeight: 100 }}>
              {title}
            </Header>
            <Header variant="h5" bold={true} color="white" sx={{ mb: '15px' }}>
              {subTitle}
            </Header>
            <Paragraph color="white">{description}</Paragraph>
            <Box borderTop={`solid 1px ${COLORS.white}`} height="1px" mt="25px" mb="30px" />
            <PlanTileList>{children}</PlanTileList>
          </Box>
          <PlanTileButton href={buttonHref} dark={darken}>
            {buttonText}
          </PlanTileButton>
        </Box>
      </PlanTile>
    </Box>
  );
};

const FeatureRow = styled(Box)`
  display: flex;
  border-bottom: solid 1px ${COLORS.white};
  text-align: center;
  padding: 20px 40px;
  ${fontAvenirRoman}
  font-size: 16px;
  line-height: 33px;
  color: ${COLORS.white};
  background-color: ${COLORS.bigStone};
  align-items: center;
  justify-content: center;

  &:last-of-type {
    border-bottom: none;
  }

  & > div:first-of-type {
    text-align: left;
    padding-left: 15px;
    padding-right: 5px;
    flex: 7 1 310px;
  }

  & > div:nth-of-type(2) {
    flex: 3 0 130px;
  }

  & > div {
    flex: 1 0 130px;
    padding-left: 2px;
    padding-right: 2px;
  }
`;

const FeatureHeader = styled(FeatureRow)`
  margin-top: 50px;
  margin-bottom: 25px;
  box-shadow: 0 10px 20px 0 rgba(51, 49, 49, 0.02);
  border-radius: 8px;
  color: '${COLORS.white}';
  position: sticky;
  top: 0;
  z-index: 1;

  &,
  &:first-of-type {
    border: solid 1px ${COLORS.white};
  }

  & > div:first-of-type {
    color: ${COLORS.white};
    ${fontAvenirBold}
    font-size: 20px;
    padding-left: 0;
  }
`;

const FeatureOutput: React.FC<{ value: string | boolean }> = ({ value }) => {
  if (value === true) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Img src={greenCheck} alt="check" width={14} />
      </Box>
    );
  }

  return <Box>{value}</Box>;
};

const MobileCarouselHeader = styled(Box)`
  margin-top: 50px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border: solid 1px ${COLORS.white};
  background-color: ${COLORS.bigStone};
  margin-bottom: 25px;
  position: sticky;
  top: 64px;
  z-index: 1200;

  & > div > p {
    flex: 1;
  }
`;

const MobileSectionHeader = styled(Header)`
  font-size: 20px;
  line-height: 32px;
  padding: 25px 51px 25px 25px;
  margin: 50px 30px 25px 30px;
  border-radius: 8px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border: solid 1px ${COLORS.white};
  background-color: ${COLORS.bigStone};
`;

const MobileFeatureRow = styled(Box)`
  display: flex;
  border-bottom: solid 1px ${COLORS.white};
  padding: 20px 30px;
  align-items: center;

  &:last-of-type {
    border-bottom: none;
  }
`;

const MobileFeatureColumn = styled(Box)`
  ${fontAvenirRoman}
  font-size: 16px;
  line-height: 33px;
  color: ${COLORS.white};
`;

const MobileFeatureArrowImage = styled(Img)<{ transform: string; cursor: string }>`
  cursor: ${({ cursor }) => cursor};
  transform: ${({ transform }) => transform};
`;

const MobileFeatureArrow = ({
  left,
  enabled,
  onClick,
}: {
  left: boolean;
  enabled: boolean;
  onClick: () => void;
}) => {
  const image = enabled ? rightEnabled : leftDisabled;
  const transform = left === enabled ? 'rotate(180deg)' : 'none';
  return (
    <MobileFeatureArrowImage
      src={image}
      transform={transform}
      onClick={onClick}
      cursor={enabled ? 'pointer' : 'not-allowed'}
    />
  );
};

const displayTitle = 'Plans and Pricing';
const metaDescription =
  'All types and sizes of teams need access to development resources, so we give you the option to decide how much ' +
  'you need to use.';

const Pricing: React.FC = () => {
  const { column, buttons, currentHeading } = useCarousel(plans, features);

  return (
    <PageProvider displayTitle={displayTitle} metaDescription={metaDescription}>
      <Box bgcolor={COLORS.elephant}>
        <Box pt={{ _: '126px', md: '130px' }} bgcolor={COLORS.firefly} textAlign="center">
          <Box px="30px" maxWidth="1100px" mx="auto">
            <Header
              pill="Plans & Pricing"
              variant="h1"
              bold={true}
              color="white"
              sx={{
                mt: '25px',
                mb: { _: '20px', md: '24px' },
              }}
            >
              Choose a Plan That’s Right For You
            </Header>
            <Header
              variant="h6"
              color="white"
              sx={{
                mb: { _: '180px', md: '200px' },
                maxWidth: '890px',
                mx: 'auto',
              }}
            >
              All types of businesses need access to development resources, so we give you the
              option to decide how much you need to use.
            </Header>
          </Box>
          <Wave type="elephant" />
        </Box>
        <Box mt="-280px">
          <Box
            display="flex"
            maxWidth="1200px"
            mx="auto"
            px="15px"
            flexDirection={{ _: 'column', lg: 'row' }}
          >
            <Plan
              color="white"
              title="Free"
              subTitle="Free Forever"
              description="Great for individuals and the open source Crossplane community"
            >
              <li>Personal Account</li>
              <li>Public Registry Listings</li>
              <li>1 Private Registry Listing</li>
              <li>1 Control Plane</li>
              <li>Upbound CLI Access</li>
            </Plan>
            <Plan
              color="aquaMarine"
              title="Enterprise"
              subTitle="14 Day Free Trial"
              description="Unlimited functionality for teams who need enterprise grade features"
            >
              <li>All Free Tier Features…</li>
              <li>Organizations</li>
              <li>Teams and Users</li>
              <li>Robot Accounts for CI/CD</li>
              <li>Unlimited Private Registry Listings</li>
              <li>Unlimited Control Planes</li>
              <li>12/5 Customer Support</li>
              {/* <li>Implementation Services</li> */}
            </Plan>
            <Plan
              color="brightCyan"
              title="Business Critical"
              subTitle="Contact Us"
              description="Our trusted plan used by some of the world's biggest organizations"
              buttonText="Contact Sales"
              buttonHref={routes.contactSalesUrl}
              darken={true}
            >
              <li>All Enterprise Tier Features…</li>
              {/* <li>Fully Self Hosted Deployment</li>
            <li>Private Self Hosted Registry</li> */}
              <li>Trainings, onboardings, and workshops</li>
              <li>Private Slack channel</li>
              <li>24/7 Customer Support</li>
            </Plan>
          </Box>
        </Box>
        <Box>
          <Box px="30px" textAlign="center">
            <Header
              variant="h3"
              bold={true}
              color="white"
              sx={{
                mt: { _: '60px', md: '145px' },
                mb: '15px',
              }}
            >
              Compare Features
            </Header>
            <Header variant="h6" color="white" sx={{ maxWidth: '670px', mx: 'auto', mb: '25px' }}>
              Get the full breakdown of the features that each one of our plans offers.
            </Header>
          </Box>
          <Hidden lgUp>
            <Box>
              <MobileCarouselHeader p="25px 40px">
                <Header variant="h5" bold={true} color="white" sx={{ textAlign: 'center' }}>
                  {features[currentHeading].header}
                </Header>
                <Box display="flex">
                  <MobileFeatureArrow
                    left={true}
                    enabled={buttons.leftEnabled}
                    onClick={buttons.onLeft}
                  />
                  <Paragraph sx={{ textAlign: 'center' }} color="white">
                    {plans[column]}
                  </Paragraph>
                  <MobileFeatureArrow
                    left={false}
                    enabled={buttons.rightEnabled}
                    onClick={buttons.onRight}
                  />
                </Box>
              </MobileCarouselHeader>
              {features.map((section, index) => (
                <Box key={index}>
                  {index !== 0 && (
                    <MobileSectionHeader
                      variant="h5"
                      bold={true}
                      color="white"
                      ref={buttons.refs[index - 1]}
                    >
                      {section.header}
                    </MobileSectionHeader>
                  )}
                  {section.data.map((r, i) => (
                    <MobileFeatureRow key={i}>
                      <MobileFeatureColumn flex="1">{r[0]}</MobileFeatureColumn>
                      <MobileFeatureColumn flex="0 0 120px" textAlign="center">
                        <FeatureOutput value={r[((column + 1) % 4) + 1]} />
                      </MobileFeatureColumn>
                    </MobileFeatureRow>
                  ))}
                </Box>
              ))}
            </Box>
          </Hidden>
          <Hidden lgDown>
            <Box maxWidth="1200px" mx="auto" width="100%">
              {features.map((section, index) => (
                <Box key={index} position="relative">
                  <FeatureHeader>
                    <Box>{section.header}</Box>
                    <Box>Crossplane</Box>
                    <Box>Free</Box>
                    <Box>Enterprise</Box>
                    <Box>Business Critical</Box>
                  </FeatureHeader>
                  {section.data.map((r, i) => (
                    <FeatureRow key={i}>
                      <FeatureOutput value={r[0]} />
                      <FeatureOutput value={r[1]} />
                      <FeatureOutput value={r[2]} />
                      <FeatureOutput value={r[3]} />
                      <FeatureOutput value={r[4]} />
                    </FeatureRow>
                  ))}
                </Box>
              ))}
            </Box>
          </Hidden>
        </Box>
        <Box mx="30px">
          <Box
            maxWidth="1000px"
            mx="auto"
            textAlign="center"
            mt="50px"
            mb={{ _: '15px', lg: '90px' }}
          >
            <Header variant="h6" color="white" sx={{ mb: '30px' }}>
              Request a demo and our customer success team would be happy to show a preview of any
              one of our available plans.
            </Header>
            <AnchorButton btnType="whiteOutline" href={routes.contactSalesUrl}>
              Contact Us & Request a Demo
            </AnchorButton>
          </Box>
        </Box>
        {/* <Wave type="elephant" /> */}
        <Box bgcolor={COLORS.elephant}>
          <Box display="flex" flexDirection="column" alignItems="center" px="30px">
            <Box textAlign="center">
              <Header variant="h3" bold={true} color="white" sx={{ mb: '25px' }}>
                Frequently Asked Questions
              </Header>
              <Header variant="h6" color="white" sx={{ mb: '50px' }}>
                Frequently asked questions about about our pricing plans.
              </Header>
            </Box>
            {questions.map(({ question, answer }, i) => (
              <QuestionAndAnswerRow key={i} index={i} question={question} answer={answer} />
            ))}
          </Box>
        </Box>
        <Wave type="firefly" />
        <Box
          bgcolor={COLORS.firefly}
          sx={{
            mb: 40,
          }}
        >
          <Box px="30px" textAlign="center">
            <Header variant="h3" bold={true} color="white" sx={{ mb: '15px' }}>
              We Would Love To Hear From You
            </Header>
            <Header variant="h6" color="white" sx={{ maxWidth: '670px', mx: 'auto', mb: '64px' }}>
              If you cannot find an answer to your question in our FAQ, you can always contact us.
              We will answer to you shortly!
            </Header>
            <ContactTileRowContainer>
              <ContactTile type="slack">Contact the Upbound team on Slack.</ContactTile>
              <ContactTile type="email">Get in touch with a sales representative.</ContactTile>
            </ContactTileRowContainer>
          </Box>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default Pricing;
