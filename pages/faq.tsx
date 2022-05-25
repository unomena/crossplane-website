import React from 'react';

import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { COLORS, fontAvenirRoman } from 'src/theme';

import { ContactTile, ContactTileRowContainer } from 'src/components/ContactTile';
import PageProvider from 'src-new/components/PageProvider';
import QuestionAndAnswerRow from 'src/components/QuestionAndAnswerRow';
import { Wave } from 'src/components/Wave';

import { Anchor, Link } from 'src/elements/Anchor';
import { Header } from 'src/elements/Header';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import * as routes from 'src/routes';

const AnswerParagraph = styled(Paragraph)`
  color: ${COLORS.white};
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const AnswerList = styled('ul')`
  color: ${COLORS.white};
  margin-top: 0;

  & > li {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const generalFaqs = [
  {
    question: 'What is Upbound Cloud?',
    answer: (
      <Box>
        <AnswerParagraph>
          Upbound Cloud, built on open source{' '}
          <Anchor href={routes.crossplaneUrl}>Crossplane</Anchor>, transforms how operations teams
          and developers self-service infrastructure and applications in dynamic, cloud native
          environments using the Kubernetes API.
        </AnswerParagraph>
        <AnswerParagraph>
          Upbound Cloud brings the power of Crossplane to the enterprise. It provides the operations
          and governance capabilities that enterprises need as their Crossplane environment grows.
          Upbound Cloud is the best way to run Crossplane in production at scale by providing a
          finely-tuned package of advanced software, support and services. Crossplane delivers a
          powerful open source control plane to enterprise platforms, enabling companies to
          standardize on application and infrastructure management, effectively implement their
          security and governance policies and publish an internal API that integrates with their
          development workflows and tools.
        </AnswerParagraph>
        <AnswerParagraph>
          Crossplane Community Edition, based on the open source project, is always free and comes
          with community forum support. For those looking for more, Upbound Cloud offers Enterprise
          Edition subscriptions, which include both software and SLA-based technical support.
        </AnswerParagraph>
      </Box>
    ),
  },
  {
    question: 'What is a Universal Control Plane?',
    answer: (
      <Box>
        <AnswerParagraph>
          Control planes are the next evolution in infrastructure management and developer
          productivity. With a Universal Control Plane, operators can standardize infrastructure
          management and provisioning across all their environments and vendors.
        </AnswerParagraph>
        <AnswerParagraph>
          Kubernetes pioneered the management of infrastructure and services with an API driven
          approach, which is the basis of the control plane. Kubernetes' true 'superpower' is that
          it can become the control plane for any resource, not just the containers. The next
          logical application of these ideas is to use Kubernetes as a universal control plane which
          manages containers, VMs, serverless, and all of the infrastructure they connect to.
        </AnswerParagraph>
        <AnswerParagraph>
          The Kubernetes Control Plane can serve as a foundation to enable a Universal Control
          Plane, which is what the open source{' '}
          <Anchor href={routes.crossplaneUrl}>Crossplane</Anchor> project is all about. Crossplane
          standardizes infrastructure and application management using the same API-centric,
          declarative configuration and automation approach pioneered by Kubernetes. It provides a
          consistent API across a diverse set of vendors resulting in a uniform experience for
          managing resources - and provides a really clear contract between what the platform teams
          offer and what the dev teams want to consume.
        </AnswerParagraph>
        <AnswerParagraph>
          Crossplane is an open source, vendor-neutral control plane that integrates seamlessly with
          existing tools and systems, and makes it easy to set policies, quotas and track reports.
          It supports any infrastructure or service regardless of where it’s running or who built
          it. To learn about Upbound’s visions for control planes read -{' '}
          <Anchor href="https://containerjournal.com/kubeconcnc/kubernetes-true-superpower-is-its-control-plane/">
            Kubernetes True Super Power is its Control Plane
          </Anchor>{' '}
          by Founder and CEO, Bassam Tabbara.
        </AnswerParagraph>
      </Box>
    ),
  },
  {
    question: 'Why should I use Upbound Cloud and who is it for?',
    answer: (
      <Box>
        <AnswerParagraph>
          Today, every enterprise needs to become more agile and deliver software faster.
          Fundamental to this is the ability to rapidly provision infrastructure so developers can
          work more efficiently. Both platform teams and developers are frustrated by how many
          tickets, meetings and approval are required to deploy and scale infrastructure in today’s
          multi-cloud world. Upbound reduces the amount of friction, time and cost associated with
          this process by delivering a unified, self-service approach to provisioning cloud services
          and infrastructure using the same API-centric, declarative configuration and automation
          pioneered by Kubernetes
        </AnswerParagraph>
        <AnswerParagraph>
          Across industries, organizations are building their own cloud platform consisting of a
          combination of on-premises infrastructure and cloud vendors. Currently, Kubernetes is
          being used as the foundation for many cloud native platforms. Although Kubernetes does not
          provide a full PaaS-like experience out of the box, the combination of a well-defined API,
          clear abstractions and comprehensive extension points make this a perfect foundational
          component on which to build.
        </AnswerParagraph>
        <AnswerParagraph>
          Upbound provides a consistent API across a diverse set of vendors resulting in a uniform
          experience for managing resources and provides a really clear contract between what the
          platform teams offer and what the dev teams want to consume. Benefits from our approach
          include:
        </AnswerParagraph>
        <AnswerList>
          <li>
            <Span sx={{ fontFamily: 'Avenir' }}>Platform teams </Span>
            <Span sx={{ ...fontAvenirRoman }}>
              can assemble infrastructure from multiple vendors and expose higher level self-service
              APIs for application teams to consume without having to write any code.
            </Span>
          </li>
          <li>
            <Span sx={{ fontFamily: 'Avenir' }}>Developers </Span>
            <Span sx={{ ...fontAvenirRoman }}>
              can self-service what they need and it automatically adheres to their organization's
              policies, permissions and quotas.
            </Span>
          </li>
          <li>
            <Span sx={{ fontFamily: 'Avenir' }}>Enterprises </Span>
            <Span sx={{ ...fontAvenirRoman }}>
              can innovate faster with a modern and automated, self-service operations strategy.
            </Span>
          </li>
        </AnswerList>
        <AnswerParagraph>
          Upbound Cloud, built on open source Crossplane, is the easiest and safest way to
          self-service and manage any infrastructure an application team needs. Any organization
          looking to simplify and accelerate cloud native operations and empower their developers,
          should try Upbound.
        </AnswerParagraph>
      </Box>
    ),
  },
  {
    question: 'Is Upbound Cloud deployed on prem or SaaS?',
    answer: (
      <AnswerParagraph>
        Upbound Cloud is a SaaS product whose Crossplane management console interface runs in North
        American data centers. Customers are able to connect their own Crossplane clusters running
        in their environments to Upbound Cloud, keeping any sensitive information in your
        environment.
      </AnswerParagraph>
    ),
  },
  {
    question: 'How do I or my team get started?',
    answer: (
      <AnswerParagraph>
        Start a free 14 day trial today by signing up directly from{' '}
        <Anchor href={routes.cloudRegisterUrl}>Upbound.io</Anchor>, or contact us for a longer
        evaluation.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Do you have a freemium option or free tier?',
    answer: (
      <AnswerParagraph>
        Not today, but our enterprise Crossplane distribution is free to use by itself. You can get
        it <Anchor href={routes.cloudRegisterUrl}>here</Anchor>.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Does Upbound provide professional services and support?',
    answer: (
      <AnswerParagraph>
        Yes, we offer implementation services and long term support to all of our Upbound Cloud
        customers.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Can I use CI/CD with Upbound Cloud?',
    answer: (
      <AnswerParagraph>
        Yes. Upbound Cloud integrates seamlessly with pipelines and automation tools. Operators can
        use the Upbound Cloud API or connect to the Crossplane instances directly and use kubectl to
        manage their cloud infrastructure.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Pricing and Availability',
    answer: (
      <AnswerParagraph>
        You can start a trial of Upbound Cloud by creating an account{' '}
        <Anchor href={routes.cloudRegisterUrl}>here</Anchor>, or you can{' '}
        <Anchor href={routes.contactSalesUrl}>reach out to our team</Anchor> to get a demo and
        discuss pricing.
      </AnswerParagraph>
    ),
  },
];

const crossplaneFaqs = [
  {
    question: 'What is Crossplane?',
    answer: (
      <AnswerParagraph>
        Crossplane is an open source cloud native control plane that delivers a universal API for
        cloud computing. It installs into any Kubernetes cluster and extends the Kubernetes API with
        definitions for infrastructure and services which live outside of the cluster. Crossplane
        exposes workload and resource abstractions on top of Kubernetes and existing cloud-based
        managed services with the goal of enabling a high degree of workload portability across
        cloud providers.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Who owns Crossplane and how is it licensed?',
    answer: (
      <AnswerParagraph>
        Crossplane was created by Upbound, but has been donated to the CNCF and is now maintained by
        the cloud native community.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Who is Crossplane for?',
    answer: (
      <AnswerParagraph>
        Crossplane, is an open source project that enables engineers to manage any infrastructure or
        cloud services directly from Kubernetes. It is built by a community of SREs and DevOps
        engineers for platform teams who want to standardize how they provision and manage
        infrastructure using the same API-centric approach pioneered by Kubernetes.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Does Crossplane work with my existing Kubernetes applications and tools?',
    answer: (
      <Box>
        <AnswerParagraph>
          Crossplane is based on the declarative management engine of Kubernetes, and borrows
          heavily from it. Crossplane uses the Kubernetes API server (kube-apiserver), etcd, and a
          few of the Kubernetes controllers. Crossplane can run on-top of an existing Kubernetes
          cluster without changes.
        </AnswerParagraph>
        <AnswerParagraph>
          Despite the similarities, Crossplane should not be confused with Kubernetes. The two
          operate at different levels and solve different problems. Kubernetes is a container
          orchestrator and is responsible for managing containers, pods, nodes, and storage volumes.
          Crossplane is a cross-cloud orchestrator and manages databases, message queues, buckets,
          data pipelines, etc. directly on-top of cloud providers.
        </AnswerParagraph>
        <AnswerParagraph>
          Crossplane does not require that applications deploy or use containers at all. You can use
          Crossplane without doing anything with containers. However, because most cloud providers
          offer managed Kubernetes services, Crossplane can provision and manage full Kubernetes
          clusters as well.
        </AnswerParagraph>
        <AnswerParagraph>
          By adopting the Kubernetes architecture and many of its concepts and principles, we hope
          that Crossplane will be instantly familiar to the cloud native community.
        </AnswerParagraph>
      </Box>
    ),
  },
  {
    question: 'What cloud platforms does Crossplane work with?',
    answer: (
      <AnswerParagraph>
        You can run Crossplane anywhere. Crossplane is a community driven, vendor neutral project
        which lets Kubernetes clusters talk to any infrastructure or service, regardless of which
        vendor built it. Whether you’re using a single Kubernetes cluster in EKS, AKS, GKE, ACK, PKS
        or a multi-cluster manager like Rancher or Anthos, Crossplane integrates with all of them.
        Crossplane installs into any existing cluster exposing CRDs and a standard API across
        infrastructure and service providers making provisioning and management fast and simple.
      </AnswerParagraph>
    ),
  },
  {
    question: 'Can I get commercial support?',
    answer: (
      <AnswerParagraph>
        Our community is welcoming and friendly to both beginners and advanced Kubernetes experts.
        However, all of our support is done as best effort attempts. You can learn more about
        enterprise solutions, including commercial support, on the Crossplane community vendors page
        or at <Link href={routes.productsUbcRoute}>Upbound.io</Link>.
      </AnswerParagraph>
    ),
  },
  {
    question: 'What is on the Crossplane roadmap?',
    answer: (
      <AnswerParagraph>
        You can view the Crossplane roadmap on{' '}
        <Anchor href={routes.crossplaneRoadmapUrl}>GitHub</Anchor>. If you don’t see what you’re
        looking for, please submit an issue and let the community know!
      </AnswerParagraph>
    ),
  },
  {
    question: 'Can I present Crossplane to my Meetup group?',
    answer: (
      <AnswerParagraph>
        Of course! We would love to support you with information, content or swag. Please reach out
        on <Anchor href={routes.crossplaneSlackUrl}>Slack</Anchor> and let the community know your
        interest.
      </AnswerParagraph>
    ),
  },
  {
    question: 'How can I get involved in the project?',
    answer: (
      <AnswerParagraph>
        You can visit the <Anchor href={routes.crossplaneUrl}>Crossplane website</Anchor> to get
        started with the project and feedback can be shared via the{' '}
        <Anchor href={routes.crossplaneContributingUrl}>project GitHub repository</Anchor> or in the
        Crossplane <Anchor href={routes.crossplaneSlackUrl}>Slack channel</Anchor>.
      </AnswerParagraph>
    ),
  },
];

const SectionHeader = styled(Box)`
  text-align: center;
  margin-top: 80px;
  padding: 0 30px 52px;

  &:first-of-type {
    margin-top: 35px;
  }
`;

const displayTitle = 'Frequently Asked Questions';
const metaDescription =
  'Find answers to some of the most common questions that the Upbound team answers.';

const Faq: React.FC = () => {
  return (
    <PageProvider displayTitle={displayTitle} metaDescription={metaDescription}>
      <Box bgcolor={COLORS.elephant}>
        <Box bgcolor={COLORS.firefly} textAlign="center">
          <Box mx="30px">
            <Header variant="h1" bold={true} color="white" sx={{ pt: '145px', mb: '22px' }}>
              Frequently Asked Questions
            </Header>
            <Header variant="h6" color="white">
              Find answers to some of the most common questions we answer
            </Header>
          </Box>
          <Wave type="elephant" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="2px"
          px="30px"
          bgcolor={COLORS.elephant}
        >
          <SectionHeader>
            <Header variant="h4" bold={true} color="white" sx={{ mb: '14px' }}>
              General FAQ’s
            </Header>
            <Header variant="h6" color="white">
              General questions about Upbound products and services.
            </Header>
          </SectionHeader>
          {generalFaqs.map((q, i) => (
            <QuestionAndAnswerRow
              answer={q.answer}
              index={i}
              question={q.question}
              key={`question${i}`}
            />
          ))}
          <SectionHeader>
            <Header variant="h4" bold={true} color="white" sx={{ mb: '14px' }}>
              Crossplane FAQ’s
            </Header>
            <Header variant="h6" color="white">
              Questions about Open Source Crossplane and the community.
            </Header>
          </SectionHeader>
          {crossplaneFaqs.map((q, i) => (
            <QuestionAndAnswerRow
              answer={q.answer}
              index={i}
              question={q.question}
              key={`question${i}`}
            />
          ))}
        </Box>
        <Wave type="firefly" />
        <Box
          bgcolor={COLORS.firefly}
          textAlign="center"
          sx={{
            mb: 40,
          }}
        >
          <Box px="30px" textAlign="center">
            <Header variant="h3" bold={true} color="white" sx={{ mb: '15px' }}>
              Still Have Questions?
            </Header>
            <Header variant="h6" color="white" sx={{ maxWidth: '670px', mx: 'auto', mb: 3 }}>
              If you cannot find the answer to your question in our FAQ, you can always contact us
              directly. We will answer to you shortly!
            </Header>
            <ContactTileRowContainer>
              <ContactTile type="slack">Join us on Slack to get answers faster.</ContactTile>
              <ContactTile type="email">Contact our support team directly.</ContactTile>
            </ContactTileRowContainer>
          </Box>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default Faq;
