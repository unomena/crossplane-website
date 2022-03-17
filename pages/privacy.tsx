import React from 'react';

import { styled, SxProps } from '@mui/system';
import { COLORS, fontAvenirRoman } from 'src/theme';
import { Box } from '@mui/material';

import PageProvider from 'src/components/PageProvider';

import { Anchor } from 'src/elements/Anchor';
import { Header } from 'src/elements/Header';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import * as routes from 'src/routes';

const OrderedList = styled('ol')`
  margin-bottom: 30px;
  line-height: 25px;
  padding-left: 0;

  &,
  ol {
    list-style-type: decimal;
    list-style-position: inside;
    padding-left: 0;
  }

  & ol {
    margin-left: 30px;
  }

  li {
    ${fontAvenirRoman};
    font-size: 14px;
  }
`;

const OrderedListLI = styled('li')`
  margin-top: 30px;

  + li {
    margin-top: 30px;
  }

  ol,
  ul {
    li + li {
      margin-top: 5px;
    }
  }
`;

const UnorderedList = styled('ul')`
  list-style-type: disc;
  list-style-position: inside;

  li {
    ${fontAvenirRoman};
    font-size: 14px;
  }
`;

const ListTitle = styled(Span)`
  font-weight: bold;
`;

const paragraphSpacingSm: SxProps = {
  mb: '10px',
  lineHeight: '25px',
};

const paragraphSpacingMd: SxProps = {
  mb: '15px',
  lineHeight: '25px',
};

const paragraphSpacingLg: SxProps = {
  mb: '30px',
  lineHeight: '25px',
};

const PrivacyPolicy: React.FC = () => {
  return (
    <PageProvider displayTitle="Upbound - Privacy Policy">
      <Box
        mt="50px"
        mb="50px"
        ml={['50px', '50px', '50px', '145px']}
        mr={['50px', '50px', '50px', '145px']}
        color={COLORS.slate}
      >
        <Header variant="h3" bold={true} sx={{ mb: '50px' }}>
          Privacy Policy
        </Header>
        <Header variant="h4" bold={true} sx={{ mb: '30px' }}>
          Site Content
        </Header>
        <Paragraph sx={paragraphSpacingLg}>
          This Privacy Policy describes how Upbound,Inc and its affiliates ("Upbound," "we," "our"
          or "us") collect, use, and share information in connection with your use of our websites
          (including www.upbound.io), services, and applications (collectively, the "Services").
          This Privacy Policy (the "Privacy Policy") does not apply to information our customers may
          process when using our Services.
        </Paragraph>

        <Paragraph sx={paragraphSpacingLg}>
          We may collect and receive information about users of our Services ("users," "you," or
          "your") from various sources, including: (i) information you provide through your user
          account on the Services (your "Account") if you register for the Services; (ii) your use
          of the Services; and (iii) from third-party websites, services, and partners.
        </Paragraph>

        <Paragraph sx={paragraphSpacingLg}>
          We recommend that you read this Privacy Policy in full to ensure you are fully informed.
          If you have any questions about this Privacy Policy or Upbound's data collection, use, and
          disclosure practices, please contact us at {routes.infoEmail}
        </Paragraph>
        <OrderedList>
          <OrderedListLI>
            <ListTitle>Information We Collect</ListTitle>
            <ol>
              <li>
                Information You Provide
                <ol>
                  <li>
                    Account Registration. When you register for an Account, we may ask for your
                    contact information, including items such as name, company name, address, email
                    address, and telephone number. If you choose to refer a friend to our Services,
                    we may also collect your friend’s email address so that we may send them a
                    referral or promotional code to sign up for our Services.
                  </li>
                  <li>
                    User Content. You agree that your profile information and the content you post
                    may be viewed and used by other users and third parties we do not control.
                  </li>
                  <li>
                    Communications. If you contact us directly, we may receive additional
                    information about you such as your name, email address, phone number, the
                    contents of the message and/or attachments you may send us, and any other
                    information you may choose to provide. We may also receive a confirmation when
                    you open an email from us.
                  </li>
                </ol>
              </li>
              <li>
                The personal information that you are asked to provide, and the reasons why you are
                asked to provide it, will be made clear to you at the point we ask you to provide
                your personal information.
              </li>
              <li>
                Information We Collect When You Use Our Services.
                <ol>
                  <li>
                    Cookies and Other Tracking Technologies. As is true of most websites, we gather
                    certain information automatically and store it in log files. In addition, when
                    you use our Services, we may collect certain information automatically from your
                    device. This information may include internet protocol (IP) addresses, browser
                    type, internet service provider (ISP), referring/exit pages, operating system,
                    date/time stamp, clickstream data, landing page, and referring URL. To collect
                    this information, a cookie may be set on your computer or device when you visit
                    our Services. Cookies contain a small amount of information that allows our web
                    servers to recognize you. We store information that we collect through cookies,
                    log files, and/or clear gifs to record your preferences. We may also
                    automatically collect information about your use of features of our Services,
                    about the functionality of our Services, frequency of visits, and other
                    information related to your interactions with the Services. We may track your
                    use across different websites and services. In some countries, including
                    countries in the European Economic Area ("EEA"), the information referenced
                    above in this paragraph may be considered personal information under applicable
                    data protection laws.
                  </li>
                  <li>
                    Usage of our Services. When you use our Services, we may collect information
                    about your engagement with and utilization of our Services, such as processor
                    and memory usage, storage capacity, navigation of our Services, and system-level
                    metrics. We use this data to operate the Services, maintain and improve the
                    performance and utilization of the Services, develop new features, protect the
                    security and safety of our Services and our customers, and provide customer
                    support. We also use this data to develop aggregate analysis and business
                    intelligence that enable us to operate, protect, make informed decisions, and
                    report on the performance of our business.
                  </li>
                </ol>
              </li>
              <li>
                Information We Receive from Third Parties.
                <ol>
                  <li>
                    Third-Party Accounts. If you choose to link our Services to a third-party
                    account, we will receive information about that account, such as your
                    authentication token from the third-party account, to authorize linking. If you
                    wish to limit the information available to us, you should visit the privacy
                    settings of your third-party accounts to learn about your options.
                  </li>
                  <li>
                    Third-Party Partners. We may also receive publicly available information about
                    you from our third-party partners and combine it with data that we have about
                    you.
                  </li>
                </ol>
              </li>
            </ol>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>How We Use Information</ListTitle>
            <Paragraph sx={paragraphSpacingSm}>
              We use the information we collect in various ways, including to:
            </Paragraph>
            <UnorderedList>
              <li>Provide, operate, and maintain our Services;</li>
              <li>Improve, personalize, and expand our Services;</li>
              <li>Understand and analyze how you use our Services;</li>
              <li>Develop new products, services, features, and functionality;</li>
              <li>
                Communicate with you, to provide you with updates and other information relating to
                the Service, and for marketing and promotional purposes;
              </li>
              <li>Find and prevent fraud; and</li>
              <li>
                For compliance purposes, including enforcing our Terms of Service, or other legal
                rights, or as may be required by applicable laws and regulations or requested by any
                judicial process or governmental agency.
              </li>
            </UnorderedList>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>How We Share Information</ListTitle>
            <Paragraph sx={paragraphSpacingSm}>
              We may share the information we collect in various ways, including the following:
            </Paragraph>
            <OrderedList>
              <li>
                Vendors and Service Providers. We may share information with third-party vendors and
                service providers that provide services on our behalf, such as helping to provide
                our Services, for promotional and/or marketing purposes, and to provide you with
                information relevant to you such as product announcements, software updates, special
                offers, or other information.
              </li>
              <li>
                Aggregate Information. Where legally permissible, we may use and share information
                about users with our partners in aggregated or de-identified form that can’t
                reasonably be used to identify you.
              </li>
              <li>
                Third-Party Partners. We also share information about users with third-party
                partners in order to receive additional publicly available information about you.
              </li>
              <li>
                Information We Share When You Sign Up Through a Referral. If you sign up for our
                Services through a referral from a friend, we may share information with your
                referrer to let them know that you used their referral to sign up for our Services.
              </li>
              <li>
                Analytics. We use analytics providers such as Google Analytics. Google Analytics
                uses cookies to collect non-identifying information. Google provides some additional
                privacy options regarding its Analytics cookies at{' '}
                <Anchor href="http://www.google.com/policies/privacy/partners/">
                  http://www.google.com/policies/privacy/partners/
                </Anchor>
                .
              </li>
              <li>
                Business Transfers. Information may be disclosed and otherwise transferred to any
                potential acquirer, successor, or assignee as part of any proposed merger,
                acquisition, debt financing, sale of assets, or similar transaction, or in the event
                of insolvency, bankruptcy, or receivership in which information is transferred to
                one or more third parties as one of our business assets.
              </li>
              <li>
                As Required By Law and Similar Disclosures. We may also share information to (i)
                satisfy any applicable law, regulation, legal process, or governmental request; (ii)
                enforce this Privacy Policy and our Terms of Service, including investigation of
                potential violations hereof; (iii) detect, prevent, or otherwise address fraud,
                security, or technical issues; (iv) respond to your requests; or (v) protect our
                rights, property or safety, our users and the public. This includes exchanging
                information with other companies and organizations for fraud protection and
                spam/malware prevention.
              </li>
              <li>With Your Consent. We may share information with your consent.</li>
            </OrderedList>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>Legal Basis for Processing Personal Information</ListTitle>
            <Paragraph sx={paragraphSpacingMd}>
              Our legal basis for collecting and using the personal information described above will
              depend on the personal information concerned and the specific context in which we
              collect it. However, we will normally collect personal information from you only (i)
              where we need the personal information to perform a contract with you; (ii) where the
              processing is in our legitimate interests and not overridden by your rights; or (iii)
              where we have your consent to do so. We have a legitimate interest in operating our
              Services and communicating with you as necessary to provide these Services, for
              example when responding to your queries, improving our platform, undertaking
              marketing, or for the purposes of detecting or preventing illegal activities.
            </Paragraph>
            <Paragraph sx={paragraphSpacingMd}>
              In some cases, we may also have a legal obligation to collect personal information
              from you or may otherwise need the personal information to protect your vital
              interests or those of another person.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              If we ask you to provide personal information to comply with a legal requirement or to
              perform a contract with you, we will make this clear at the relevant time and advise
              you whether the provision of your personal information is mandatory or not (as well as
              of the possible consequences if you do not provide your personal information).
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>Third-party Services</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              You may access other third-party services through the Services, for example by
              clicking on links to those third-party services from within the Services. We are not
              responsible for the privacy policies and/or practices of these third-party services,
              and we encourage you to carefully review their privacy policies.
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>Security</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              Upbound is committed to protecting your information. To do so, we employ a variety of
              security technologies and measures designed to protect information from unauthorized
              access, use, or disclosure. The measures we use are designed to provide a level of
              security appropriate to the risk of processing your personal information.
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>Data Retention</ListTitle>
            <Paragraph sx={paragraphSpacingMd}>
              We retain personal information we collect from you where we have an ongoing legitimate
              business need to do so (for example, to provide you with a service you have requested
              or to comply with applicable legal, tax, or accounting requirements).
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              When we have no ongoing legitimate business need to process your personal information,
              we will either delete or anonymize it or, if this is not possible (for example,
              because your personal information has been stored in backup archives), then we will
              securely store your personal information and isolate it from any further processing
              until deletion is possible.
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>Access</ListTitle>
            <Paragraph sx={paragraphSpacingMd}>
              If you are a registered user, you may access certain information {routes.infoEmail}.
              If you terminate your Account, any public activity on your Account prior to deletion
              may remain stored on our servers and may remain accessible to the public.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              To protect your privacy and security, we may also take reasonable steps to verify your
              identity before updating or removing your information. The information you provide us
              may be archived or stored periodically by us according to backup processes conducted
              in the ordinary course of business for disaster recovery purposes. Your ability to
              access and correct your information may be temporarily limited where access and
              correction could: inhibit Upbound’s ability to comply with a legal obligation; inhibit
              Upbound’s ability to investigate, make or defend legal claims; result in disclosure of
              personal information about a third party; or result in breach of a contract or
              disclosure of trade secrets or other proprietary business information belonging to
              Upbound or a third party.
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>
              Your Data Protection Rights Under the General Data Protection Regulation (GDPR)
            </ListTitle>
            <Paragraph sx={paragraphSpacingSm}>
              If you are a resident of the EEA, you have the following data protection rights:
            </Paragraph>
            <UnorderedList>
              <li>
                If you wish to access, correct, update, or request deletion of your personal
                information, you can do so at any time by emailing {routes.infoEmail}
              </li>
              <li>
                In addition, you can object to the processing of your personal information, ask us
                to restrict the processing of your personal information, or request portability of
                your personal information.
              </li>
              <li>
                You have the right to opt-out of marketing communications we send you at any time.
                You can exercise this right by clicking on the "unsubscribe" or "opt-out" link in
                the marketing emails we send you.
              </li>
              <li>
                Similarly, if we have collected and process your personal information with your
                consent, then you can withdraw your consent at any time. Withdrawing your consent
                will not affect the lawfulness of any processing we conducted prior to your
                withdrawal, nor will it affect the processing of your personal information conducted
                in reliance on lawful processing grounds other than consent.
              </li>
              <li>
                You have the right to complain to a data protection authority about our collection
                and use of your personal information. For more information, please contact your
                local data protection authority.
              </li>
            </UnorderedList>
            <Paragraph sx={paragraphSpacingLg}>
              We respond to all requests we receive from individuals wishing to exercise their data
              protection rights in accordance with applicable data protection laws.
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>Your Choices</ListTitle>
            <Paragraph sx={paragraphSpacingMd}>
              You can use some of the features of the Services without registering, thereby limiting
              the type of information that we collect.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              You may unsubscribe from receiving certain promotional emails from us. If you wish to
              do so, simply follow the instructions found at the end of the email. Even if you
              unsubscribe, we may still contact you for informational, transactional,
              account-related, or similar purposes. Many browsers have an option for disabling
              cookies, which may prevent your browser from accepting new cookies or enable selective
              use of cookies. Please note that, if you choose not to accept cookies, some features
              and the personalization of our Services may no longer work for you. You will continue
              to receive advertising material but it will not be tailored to your interests.
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>Children's Privacy</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              Upbound does not knowingly collect information from children under the age of 13, and
              children under 13 are prohibited from using our Services. If you learn that a child
              has provided us with personal information in violation of this Privacy Policy, you can
              alert us at {routes.infoEmail}
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>Changes to this Privacy Policy</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              This Privacy Policy may be modified from time to time, so please review it frequently.
              Changes to this Privacy Policy will be posted on our websites. If we materially change
              the ways in which we use or share personal information previously collected from you
              through our Services, we will notify you through our Services, by email, or other
              communication.
            </Paragraph>
          </OrderedListLI>
          <OrderedListLI>
            <ListTitle>International Data Transfers</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              Upbound is a global business. We may transfer personal information to countries other
              than the country in which the data was originally collected. These countries may not
              have the same data protection laws as the country in which you initially provided the
              information. When we transfer your personal information to other countries, we will
              protect that information as described in this Privacy Policy.
            </Paragraph>
          </OrderedListLI>
        </OrderedList>
        <Header variant="h4" bold={true} sx={{ mb: '30px' }}>
          Contact Us
        </Header>
        <Paragraph sx={paragraphSpacingLg}>
          If you have any questions or concerns about this Privacy Policy, please feel free to email
          us at <Anchor href={routes.infoEmailUrl}>{routes.infoEmail}</Anchor>
        </Paragraph>
      </Box>
    </PageProvider>
  );
};

export default PrivacyPolicy;
