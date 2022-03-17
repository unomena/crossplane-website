import React from 'react';

import { styled, SxProps } from '@mui/system';
import { COLORS, fontAvenirRoman } from 'src/theme';
import { Box } from '@mui/material';

import PageProvider from 'src/components/PageProvider';

import { Header } from 'src/elements/Header';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import * as routes from 'src/routes';

const OrderedList = styled('ol')`
  margin-bottom: 30px;
  line-height: 25px;

  &,
  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  & ol {
    margin-left: 30px;
  }

  li {
    ${fontAvenirRoman};
    font-size: 14px;
  }
`;

const ListTitle = styled(Span)`
  font-weight: bold;
`;

const paragraphSpacingLg: SxProps = {
  mb: '30px',
  lineHeight: '25px',
};

const TermsOfUse = () => {
  return (
    <PageProvider displayTitle="Upbound - Terms of Service">
      <Box
        mt="50px"
        mb="50px"
        ml={['50px', '50px', '50px', '145px']}
        mr={['50px', '50px', '50px', '145px']}
        color={COLORS.slate}
      >
        <Header variant="h3" bold={true} sx={{ mb: '50px' }}>
          Legal Terms of Service
        </Header>
        <Header variant="h4" bold={true} sx={{ mb: '30px' }}>
          Site Content
        </Header>
        <Paragraph sx={paragraphSpacingLg}>Last updated September 13th 2019</Paragraph>
        <Paragraph sx={paragraphSpacingLg}>
          Upbound, Inc., including subsidiaries, affiliates, divisions, contractors and all data
          sources and suppliers, (collectively "Upbound", "we", "us" or "our") welcomes you to
          www.upbound.io (the "Website"). These terms and conditions of service (collectively, with
          Upbound's Privacy Policy govern your use of the Website and the services, features,
          content or applications operated by Upbound (together with the Website, the "Services"),
          and provided to the Subscriber (the "Subscriber", "user", "sub-user", "you" or "your").
          Our Data processing Agreement under under the European General Data Protection Regulation
          (GDPR) forms part of these Terms of Service.
        </Paragraph>
        <Paragraph sx={paragraphSpacingLg}>
          Please read these Terms of Service carefully before using the Services. These Terms of
          Service apply to all users of the Services. If you are using the Services on behalf of an
          entity, organization, or company, you represent and warrant that you have the authority to
          bind such organization to these Terms of Service and you agree to be bound by these Terms
          of Service on behalf of such organization. Agreeing to use the Services by clicking "Sign
          up" constitutes your acceptance and agreement to be bound by these Terms of Service, and
          all other operating rules, policies and procedures that may be published from time to time
          on the Website by us, each of which is incorporated by reference and each of which may be
          modified from time to time without notice to you. You acknowledge receipt of our Privacy
          Policy. If you ordered the Services on the Website, use the Website, or otherwise engage
          in any electronic transaction with respect to the Services, then you agree to receive any
          updates to our Privacy Policy by accessing the Website. By using our Website or purchasing
          our products or services, you agree that we may use and share your personal information in
          accordance with the terms of our Privacy Policy.
        </Paragraph>
        <Paragraph sx={paragraphSpacingLg}>
          These Terms of Service provide that all disputes between you and Upbound will be resolved
          by BINDING ARBITRATION. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT TO ASSERT OR DEFEND
          YOUR RIGHTS UNDER THIS CONTRACT (except for matters that may be taken to small claims
          court). Your rights will be determined by a NEUTRAL ARBITRATOR and NOT A JUDGE OR JURY and
          your claims cannot be brought as a class action. Please review Section 15 below for the
          details regarding your agreement to arbitrate any disputes with Upbound. NOTHING IN THESE
          TERMS OF USE SHALL AFFECT ANY NON-WAIVABLE STATUTORY RIGHTS THAT APPLY TO YOU. If any
          provision or provisions of these Terms of Use shall be held to be invalid, illegal, or
          unenforceable, the validity, legality and enforceability of the remaining provisions shall
          remain in full force and effect.
        </Paragraph>
        <Paragraph sx={paragraphSpacingLg}>
          Upbound reserves the right, at any time and from time to time, to amend or modify these
          Terms of Service without prior notice to you, provided that if any such alterations
          constitute a material change to these Terms of Service, Upbound will notify you by posting
          an announcement on the Website. Amendments and modifications shall take effect immediately
          when posted on the Website. By continuing to access or use the Services after any such
          amendments or modifications, you agree to be bound by such amended or modified Terms of
          Service. For this reason, we encourage you to review the Terms of Service whenever you use
          the Services. If you do not agree to any change to these Terms of Services, then you must
          immediately stop using the Services.
        </Paragraph>
        <Paragraph sx={paragraphSpacingLg}>
          SOME JURISDICTIONS HAVE CONSUMER PROTECTION AND OTHER LEGISLATION WHICH MAY APPLY TO THE
          SERVICES AND WHICH DO NOT ALLOW CERTAIN PROVISIONS SUCH AS LIMITATIONS OF LIABILITY AND
          EXCLUSION OF CERTAIN WARRANTIES, AMONG OTHERS. TO THE EXTENT THAT A LIMITATION, EXCLUSION,
          RESTRICTION OR OTHER PROVISION SET OUT BELOW IS SPECIFICALLY PROHIBITED BY APPLICABLE LAW,
          SUCH LIMITATION, EXCLUSION, RESTRICTION OR PROVISION MAY NOT APPLY TO YOU.
        </Paragraph>
        <Paragraph sx={paragraphSpacingLg}>
          This document exists to protect both you and us. By using our services, you agree to our
          Terms of Service agreement.
        </Paragraph>
        <OrderedList>
          <li>
            <ListTitle>Eligibility &amp; Registration</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              1.1 The Services are not targeted towards, nor intended for use by, anyone under the
              age of 13. By using the Services, you represent and warrant that you are 13 years of
              age or older. If you are under the age of 13, you may not, under any circumstances or
              for any reason, use the Services. We may, in our sole discretion, refuse to offer the
              Services to any person or entity and change its eligibility criteria at any time. You
              are solely responsible for ensuring that these Terms of Service are in compliance with
              all laws, rules and regulations applicable to you and the right to access the Services
              is revoked where these Terms of Service or use of the Services is prohibited or to the
              extent offering, sale or provision of the Services conflicts with any applicable law,
              rule or regulation. Further, the Services are offered only for your use, and not for
              the use or benefit of any third party.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              1.2 To sign up for the Services, you must register for an account on the Services (an
              "Account"). You must provide accurate and complete information and keep your Account
              information updated. You shall not: (i) select or use as a username a name of another
              person with the intent to impersonate that person; (ii) use as a username a name
              subject to any rights of a person other than you without appropriate authorization; or
              (iii) use, as a username, a name that is otherwise offensive, vulgar or obscene. You
              are solely responsible for the activity that occurs on your Account, regardless of
              whether the activities are undertaken by you, your employees or a third party
              (including your contractors or agents), and for keeping your Account password secure.
              You may never use another person's user account or registration information for the
              Services without permission. You must notify us immediately of any change in your
              eligibility to use the Services (including any changes to or revocation of any
              licenses from state, provincial, territorial or other authorities), breach of security
              or unauthorized use of your Account. You should never publish, distribute or post
              login information for your Account. You shall have the ability to delete your Account,
              either directly or through a request made to one of our employees or affiliates. You
              agree to provide accurate information in your registration and not to share your
              password with third parties. You agree not to impersonate another person or to select
              or use a user name or password of another person. You agree to notify Upbound promptly
              of any unauthorized use of your account and of any loss, theft or disclosure of your
              password. Failure to comply with these requirements shall constitute a breach of these
              Terms of Service and shall constitute grounds for immediate termination of your
              account and your right to use the Website. UPBOUND WILL NOT BE LIABLE FOR ANY LOSS OR
              DAMAGE AS A RESULT OF YOUR FAILURE TO PROVIDE US WITH ACCURATE INFORMATION OR TO KEEP
              YOUR ACCOUNT SECURE.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Content</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              2.1 For purposes of these Terms of Service, the term "Content" includes, without
              limitation, information, data, text, written posts, reviews, and comments, software,
              scripts, graphics, and interactive features generated, provided, or otherwise made
              accessible on or through the Services. For the purposes of this Agreement, "Content"
              also includes all User Content (as defined below) and Listing Information and Vendor
              Offerings.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              2.2 All Content added, created, uploaded, submitted, distributed, or posted to the
              Services by users (collectively "User Content"), whether publicly posted or privately
              transmitted, is the sole responsibility of the person who originated such User
              Content. You represent that all User Content provided by you is accurate, complete,
              up-to-date, and in compliance with all applicable laws, rules and regulations. You
              acknowledge that all Content, including User Content, accessed by you using the
              Services is at your own risk and you will be solely responsible for any damage or loss
              to you or any other party resulting therefrom. We do not guarantee that any Content
              you access on or through the Services is or will continue to be accurate.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              2.3 The Services may contain Content specifically provided by us, our partners or our
              users and such Content is protected by copyrights, trademarks, service marks, patents,
              trade secrets or other proprietary rights and laws. You shall abide by and maintain
              all copyright notices, information, and restrictions contained in any Content accessed
              through the Services.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              2.4 Subject to these Terms of Service, we grant each user of the Services a worldwide,
              non-exclusive, revocable, non-sublicensable and non-transferable license to use (i.e.,
              to download and display locally) Content solely for purposes of using the Services.
              Use, reproduction, modification, distribution or storage of any Content for other than
              purposes of using the Services is expressly prohibited without prior written
              permission from us. You shall not sell, license, rent, or otherwise use or exploit any
              Content for commercial use or in any way that violates any third party right.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              2.5 By submitting any User Content to the Website, excluding privately transmitted
              User Content, you hereby do and shall grant us a worldwide, non-exclusive, perpetual,
              irrevocable, royalty-free, fully paid, sublicensable and transferable license to use,
              aggregate, reproduce, distribute, prepare derivative works of, display, perform, and
              otherwise fully exploit such User Content in connection with the Website, the Services
              and our (and our successors' and assigns') businesses, including without limitation
              for promoting and redistributing part or all of the Website or the Services (and
              derivative works thereof) in any media formats and through any media channels
              (including, without limitation, third party websites and feeds), and including after
              your termination of your Account or the Services. You also hereby do and shall grant
              each user of the Website and/or the Services a non-exclusive, perpetual license to
              access any of your User Content that is available to such user on the Website, and to
              use, reproduce, distribute, prepare derivative works of, display and perform such User
              Content, including after your termination of your Account or the Services. By
              submitting any User Content to the Services other than on the Website, you hereby do
              and shall grant us a worldwide, non-exclusive, perpetual, irrevocable, royalty-free,
              fully paid, sublicensable and transferable license to use, aggregate, reproduce,
              distribute, prepare derivative works of, display, and perform such User Content solely
              for the purpose of providing the Services. For clarity, the foregoing licenses granted
              to us and our users does not affect your other ownership or license rights in your
              User Content, including the right to grant additional licenses to your User Content,
              unless otherwise agreed in writing. You represent and warrant that you have all rights
              to grant such licenses to us without infringement or violation of any third party
              rights, including without limitation, any privacy rights, publicity rights,
              copyrights, trademarks, contract rights, or any other intellectual property or
              proprietary rights.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Rules of Conduct</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              3.1 As a condition of use, you promise not to use the Services for any purpose that is
              prohibited by these Terms of Service. You are responsible for all of your activity in
              connection with the Services and the activity of any sub-user that uses your access
              code or Account.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.2 You agree that you will not transmit, distribute, post, store, link, or otherwise
              traffic in Content, information, software, or materials on or through the Service that
              (i) is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive,
              fraudulent, invasive of another's privacy, tortious, offensive, profane, contains or
              depicts pornography that is unlawful, or is otherwise inappropriate as determined by
              us in our sole discretion, (ii) you know is false, misleading, untruthful or
              inaccurate, (iii) constitutes unauthorized or unsolicited advertising, (iv)
              impersonates any person or entity, including any of our employees or representatives,
              or (v) includes anyone's identification documents or sensitive financial information.
              Upbound may permit, in its sole discretion, adult websites that abide by state and
              federal law and regulation.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.3 You shall not: (i) take any action that imposes or may impose (as determined by us
              in our sole discretion) an unreasonable or disproportionately large load on our (or
              our third party providers') infrastructure; (ii) interfere or attempt to interfere
              with the proper working of the Services or any activities conducted on the Services;
              (iii) bypass, circumvent or attempt to bypass or circumvent any measures we may use to
              prevent or restrict access to the Services (or other accounts, computer systems or
              networks connected to the Services); (iv) run any form of auto-responder or "spam" on
              the Services; (v) use manual or automated software, devices, or other processes to
              "crawl" or "spider" any page of the Website; (vi) harvest or scrape any Content from
              the Services; (vii) use the Services for high risk activities including but not
              limited to the operation of nuclear facilities, air traffic control, life support
              systems, or any other use where the failure of service could lead to death, personal
              injury, or environmental damage; or (viii) otherwise take any action in violation of
              our guidelines and policies.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.4 You shall not (directly or indirectly): (i) decipher, decompile, disassemble,
              reverse engineer or otherwise attempt to derive any source code or underlying ideas or
              algorithms of any part of the Services (including without limitation any application),
              except to the limited extent applicable laws specifically prohibit such restriction,
              (ii) modify, translate, or otherwise create derivative works of any part of the
              Services, or (iii) copy, rent, lease, distribute, or otherwise transfer any of the
              rights that you receive hereunder. You shall abide by all applicable local, state,
              national and international laws and regulations.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.5 We also reserve the right to access, read, preserve, and disclose any information
              as we reasonably believe is necessary to (i) satisfy any applicable law, regulation,
              legal process or governmental request, (ii) enforce these Terms of Service, including
              investigation of potential violations hereof, (iii) detect, prevent, or otherwise
              address fraud, security or technical issues, (iv) respond to user support requests, or
              (v) protect the rights, property or safety of us, our users and the public.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.6 Subscribers are restricted from registering multiple Accounts with the same
              billing details without first notifying Upbound of that intent. Otherwise, Upbound
              shall have the right to automatically flag such Accounts as fraudulent or abusive, and
              Upbound may, without notification to the Subscriber of such Account, suspend the
              service of such Account or any other Account used by such Subscriber. The use of
              referral codes by multiple Accounts having the same billing profile is not allowed.
              Upbound also reserves the right to terminate a Subscriber's Account if it is targeted
              by malicious activity from other parties.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.8 You may not use the Services to obtain information about or make decisions about
              anyone but yourself. You are solely responsible for any reliance by you on the
              Services or other use you make of the Services. Comments, suggestions or materials
              sent or transmitted to Upbound (collectively "Feedback"), shall be deemed to be
              non-confidential. Subject to the conditions described in Upbound’s Privacy Policy,
              Upbound shall have no obligation of any kind with respect to such Feedback and shall
              be free to use and distribute the Feedback to others without limitation, including,
              but not limited to developing and marketing products incorporating such Feedback.
              Upbound reserves the right to publish or use any responses, questions or comments
              emailed to Upbound for promotional or other purposes without any further permission,
              notice or payment of any kind to the sender. All such submissions will be the property
              of Upbound.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.9 The enumeration of violations in this Section 3 of these Terms of Service is not
              meant to be exclusive, and Upbound provides notice hereby that it has and will
              exercise its authority to take whatever action is necessary to protect the Services,
              Subscribers, and third parties from acts that would be inimical to the purposes of
              this Section 3 of these Terms of Service.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              Lawful Use of the Network
              <br />
              3.10 In using the Services, Subscribers must comply with, and refrain from violations
              of, any right of any other person, entity, law, or contractual duty, including without
              limitation the laws of the United States and the laws of Delaware, and including
              without limitation those laws forbidding: (a) distribution of child pornography, (b)
              forgery, identity theft, misdirection or interference with electronic communications,
              (c) invasion of privacy, (d) unlawful sending of commercial electronic messages or
              other marketing or electronic communications, (e) collection of excessive user data
              from children, or other improper data collection activities, (f) securities
              violations, wire fraud, money laundering, or terrorist activities, or (f) false
              advertising, propagating or profiting from frauds and unfair schemes. Subscribers will
              also comply with the affirmative requirements of law governing use of the Services,
              including but not limited to: (i) disclosure requirements, including those regarding
              notification of security breaches, (ii) records maintenance for regulated industries,
              and (iii) financial institution safeguards.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              The Services are subject to the trade and economic sanctions maintained by the Office
              of Foreign Assets Control (“OFAC”). By accessing the Services, you agree to comply
              with these laws and regulations. Specifically, you represent and warrant that you are
              not (a) located in any country that is subject to OFAC’s trade and economic sanctions,
              currently Cuba, Iran, North Korea, Syria, and the Crimea region of the Ukraine, or (b)
              an individual or entity included on any U.S. lists of prohibited parties including:
              the Treasury Department’s List of Specially Designated Nationals List (“SDN List”) and
              Sectoral Sanctions List (“SSI List”). Additionally, you agree not to – directly or
              indirectly – sell, export, reexport, transfer, divert, or otherwise dispose of any
              service received from Upbound in contradiction with these laws and regulations.
              Failure to comply with these laws and regulations may result in the suspension or
              termination of your Account. Agreed Use of Allotted Network Resources
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.11 Subscribers shall not use any method to circumvent the provisions of these Terms
              of Service, or to obtain Services in excess of those for which they contract with
              Upbound. Subscribers shall use only those IP addresses that are assigned to them by
              Upbound, and shall not use any IP addresses outside of their assigned range.
              Subscribers shall not use any mechanism to exceed the amount of resources assigned to
              them through the Services, or to conceal such activities. Injurious Code
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.12 Subscribers may not use the Services to distribute, receive communications or
              data gleaned from, or execute any action directed by any type of injurious code,
              including but not limited to: (i) trojans, (ii) key loggers, (iii) viruses, (iv)
              malware, (v) botnets, (vi) denial of service attacks, (vii) flood or mail bombs,
              (viii) logic bombs, or (ix) other actions which Upbound reserves the sole right to
              determine to be malicious in intent. Email Violations
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.13 Subscribers shall not send bulk email utilizing their resources on the Services
              unless they maintain a double-authorized list of subscribed members including IP
              addresses and relevant contact information, along with following guidelines for
              including removal links with all sent emails according to the such legislation.
              Subscribers shall comply with all laws regarding the sending of commercial electronic
              messages or other marketing or electronic communications. Subscribers are forbidden
              from taking any action that would result in their IP addresses, or any IP address
              associated with Upbound or other Subscribers, being placed on the Spamhaus.org
              blacklist. Upbound reserves the sole and absolute right to determine whether an email
              violation has occurred. Invasion of Privacy, Defamation, or Harassment
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.14 Subscribers may not use the Services in a manner that would violate the lawful
              privacy rights of any person, or to publish or republish defamatory or libelous
              statements, or to harass or embarrass, which shall be determined in Upbound’s sole and
              absolute discretion. Violation of Copyright, Trademark, Patent or Trade Secret
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              3.15 Subscribers may not use the Services in violation of the copyrights, trademarks,
              patents or trade secrets of third parties, nor shall they utilize the Services to
              publish such materials in a manner that would expose them to public view in violation
              of the law. The provisions of the Digital Millennium Copyright Act of 1998 ("DMCA")
              (as required under 17 U.S.C. §512) and all other applicable international trademark,
              copyright, patent or other intellectual property laws will apply to issues presented
              by allegations of copyright violations by third parties. Upbound will, in appropriate
              circumstances, terminate the accounts of repeat violators. If a third party believes
              that a Subscriber of Upbound is violating its intellectual property rights, it should
              notify us by email at {routes.infoEmail}. A notification should include information
              reasonably sufficient to permit Upbound to locate the allegedly infringing material,
              such as the IP address or URL of the specific online location where the alleged
              infringement is occurring.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              Export
              <br />
              3.16 Subscriber shall comply with all applicable export and import control laws and
              regulations in its use of the Services, and, in particular, Subscriber shall not
              utilize the Services to export or re-export data or software without all required
              United States and foreign government licenses. Subscriber assumes full legal
              responsibility for any access and use of the Services from outside the United States,
              with full understanding that the same may constitute export of technology and
              technical data that may implicate export regulations and/or require export license.
              Should such a license be required, it shall be Subscriber's responsibility to obtain
              the same, at Subscriber's sole cost and expense, and in the event of any breach of
              this duty resulting in legal claims against Upbound, Subscriber shall defend,
              indemnify and hold Upbound harmless from all claims and damages arising therefrom.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              Acts of Sub-Users
              <br />
              3.17 Subscribers are responsible for the acts of others utilizing their access to the
              Services, and will be held responsible for violations of the Services by their
              sub-users or persons who gain access to the Services using the Subscriber's access
              codes. Any activity that a Subscriber is prohibited from performing by these Terms of
              Services is equally prohibited to anyone using the access to the Services of the
              Subscriber.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              Access Code Protection
              <br />
              3.18 Subscribers shall utilize proper security protocols, such as setting strong
              passwords and access control mechanisms, safeguarding access to all logins and
              passwords, and verifying the trustworthiness of persons who are entrusted with account
              access information.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              Notification Regarding these Terms of Service
              <br />
              3.19 Subscribers shall notify all persons who receive access to the Services of the
              provisions of these Terms of Service, and shall inform them that the terms of these
              Terms of Service are binding upon them.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              Remedial Action
              <br />
              3.20 Subscribers shall notify Upbound if and when they learn of any security breaches
              regarding the Services, and shall aid in any investigation or legal action that is
              taken by authorities and/or Upbound to cure the security breach.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Third Party Services</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              4.1 The Services may permit you to link to other websites, services or resources on
              the Internet, and other websites, services or resources may contain links to the
              Services. When you access third party resources on the Internet, you do so at your own
              risk. These other resources are not under our control, and you acknowledge that we are
              not responsible or liable for the content, functions, accuracy, legality,
              appropriateness or any other aspect of such websites or resources. The inclusion of
              any such link does not imply our endorsement or any association between us and their
              operators. You further acknowledge and agree that we shall not be responsible or
              liable, directly or indirectly, for any damage or loss caused or alleged to be caused
              by or in connection with the use of or reliance on any such content, goods or services
              available on or through any such website or resource. We also permit certain Vendors
              to make available certain applications on the Upbound.io. It is your responsibility to
              protect your system from such items as viruses, worms, Trojan horses and other items
              of a destructive nature.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Warranty Disclaimer and Beta Services</ListTitle>
            <Paragraph sx={{ lineHeight: '25px' }}>
              5.1 We have no special relationship with or fiduciary duty to you. You acknowledge
              that we have no duty to take any action regarding:
            </Paragraph>
            <OrderedList>
              <li>which Subscribers gain access to the Services;</li>
              <li>what Content you access via the Services;</li>
              <li>or how you may interpret or use the Content.</li>
            </OrderedList>
            <Paragraph sx={paragraphSpacingLg}>
              5.2 TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU RELEASE US FROM ALL LIABILITY FOR
              YOU HAVING ACQUIRED OR NOT ACQUIRED CONTENT THROUGH THE SERVICES. WE MAKE NO
              REPRESENTATIONS CONCERNING ANY CONTENT CONTAINED IN OR ACCESSED THROUGH THE SERVICES,
              AND WE WILL NOT BE RESPONSIBLE OR LIABLE FOR THE ACCURACY, COPYRIGHT COMPLIANCE, OR
              LEGALITY OF MATERIAL OR CONTENT CONTAINED IN OR ACCESSED THROUGH THE SERVICES.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              5.3 THE SERVICES, INCLUDING WITHOUT LIMITATION ANY INFORMATION DELIVERED AS PART OF
              THE SERVICES, AND CONTENT ARE PROVIDED "AS IS", "AS AVAILABLE" AND WITHOUT WARRANTY OF
              ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
              TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE,
              NONINTERFERENCE WITH DATA, AVAILABILITY, ACCURACY, THAT YOU WILL HAVE CONTINUOUS,
              UNINTERRUPTED OR SECURE ACCESS TO OUR WEBSITE OR THAT THE SERVICES ARE ERROR FREE AND
              ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH
              ARE EXPRESSLY DISCLAIMED. WE, AND OUR DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS,
              PARTNERS AND CONTENT PROVIDERS DO NOT WARRANT THAT: (I) THE SERVICES WILL BE SECURE OR
              AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (II) ANY DEFECTS OR ERRORS WILL BE
              CORRECTED; (III) ANY CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE SERVICES IS FREE
              OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (IV) THE RESULTS OF USING THE SERVICES WILL
              MEET YOUR REQUIREMENTS. YOUR USE OF THE SERVICES IS SOLELY AT YOUR OWN RISK. THE
              SERVICES CONTAIN INFORMATION PROVIDED BY ONE OR MORE THIRD PARTY DATA PROVIDERS.
              UPBOUND DOES NOT CONTROL AND IS NOT RESPONSIBLE FOR THE INFORMATION PROVIDED BY ANY
              SUCH THIRD PARTY PROVIDER. YOU ACKNOWLEDGE AND AGREE THAT NEITHER UPBOUND NOR ANY SUCH
              THIRD PARTY PROVIDER HAS ANY OBLIGATION TO CORRECT INFORMATION ABOUT YOU EXCEPT AS
              REQUIRED BY APPLICABLE LAW. INFORMATION YOU REQUEST MAY NOT BE AVAILABLE OR MAY NOT BE
              PROVIDED, AND UPBOUND HAS NO LIABILITY FOR SUCH FAILURE. IN NO EVENT WILL UPBOUND
              WARRANT OR GUARANTEE THE CORRECTNESS, COMPREHENSIVENESS, COMPLETENESS, ACCURACY,
              TIMELINESS OF ANY INFORMATION, PRODUCTS, OR SERVICES ON THIS WEBSITE. THE INFORMATION,
              PRODUCTS, AND SERVICES AVAILABLE ON THE WEBSITE MAY INCLUDE TECHNICAL INACCURACIES OR
              TYPOGRAPHICAL ERRORS. THEREFORE, YOU AGREE THAT YOUR ACCESS TO AND USE OF OUR WEBSITE,
              PRODUCTS, SERVICES AND CONTENT ARE AT YOUR OWN RISK. THE ABOVE REFERENCED LANGUAGE
              DOES NOT APPLY TO VENDOR OFFERINGS.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              Beta Services
              <br />
              5.4. Upbound may offer "beta" versions or features of the Services (each, a "Beta
              Service"). Upbound will determine, at its sole discretion, the availability, duration
              (the "Trial Period"), features, and components of each Beta Service. For avoidance of
              doubt, any Beta Service is a form of the Services and the provision and use of any
              Beta Service is subject to the entirety of this Agreement, unless otherwise provided
              for in this Section 5.4.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              ANY BETA SERVICE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER
              EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. UPBOUND SPECIFICALLY DISCLAIMS ALL IMPLIED
              WARRANTIES OF MERCHANTABILITY, NONINFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE
              WITH REGARD TO ANY BETA SERVICE.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              Notwithstanding anything to the contrary in this Agreement, in no event will Upbound
              be liable to you or any third party for any damages or liability related to, arising
              out of, or caused by any Beta Service and/or any modification, suspension, or
              termination thereof. If Upbound permits you to use a Beta Service, you agree to
              provide Upbound Feedback and respond to Upbound’s questions or other inquiries
              regarding your use of the Beta Service, if requested and as applicable. If Upbound
              permits you to use a Beta Service, you specifically agree, in addition to the
              requirements set forth in Section 3 of this Agreement, to not: (i) use the Beta
              Service for benchmarking or performance testing or publicly disseminate performance
              information or analysis from any source relating to the Service; (ii) modify or create
              derivative works of the Beta Service or remove any product identification,
              proprietary, copyright or other notices contained in the Beta Service; or (iii) allow
              any other individual to access or use the Beta Service. Upbound at its sole discretion
              shall determine whether or not to continue to offer any Beta Service, and may cease
              offering any Beta Service at any time. Upon completion of a Trial Period, you may lose
              access to the applicable Beta Service, unless or until the features of the Beta
              Service are incorporated into the Services, and you agree to return or destroy all
              copies of documentation and confidential information related to the Beta Service. Any
              production candidate or non-production version of the Services will be considered a
              Beta Service. Subscriber grants to Upbound a limited license to use, reproduce,
              distribute, and display any data provided to Upbound by Subscriber and/or any user of
              a Beta Service solely for facilitating the purposes of this Agreement (such data
              collectively, "Beta Data") (i) as required to provide the Beta Service; and (ii) in
              de-identified form, to tune, enhance and improve the Service and other Upbound
              products and services. Subscriber represents and warrants that it has all necessary
              rights to grant Upbound the rights set forth in this Section, and that it will comply
              with all applicable laws, regulations, and other obligations regarding the collection,
              use and disclosure of Beta Data. Upbound may use de-identified or aggregated Beta Data
              collected through a Beta Service for any purpose, including, without limitation, to
              enhance and improve the Services.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Limitation of Liability</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              6.1 IN NO EVENT SHALL WE, NOR OUR DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS OR
              CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE OR ANY
              OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO THE SERVICES (I) FOR ANY LOST PROFITS,
              DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL, INDIRECT,
              INCIDENTAL, PUNITIVE, COMPENSATORY OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER,
              SUBSTITUTE GOODS OR SERVICES (HOWEVER ARISING), (II) FOR ANY BUGS, VIRUSES, TROJAN
              HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGINATION), OR (III) FOR ANY DIRECT
              DAMAGES IN EXCESS OF (IN THE AGGREGATE) OF FEES PAID TO US FOR THE PARTICULAR SERVICES
              DURING THE IMMEDIATELY PREVIOUS ONE MONTH PERIOD, EVEN IF UPBOUND HAD BEEN ADVISED OF,
              KNEW, OR SHOULD HAVE KNOWN, OF THE POSSIBILITY THEREOF. SUBSCRIBER ACKNOWLEDGES THAT
              THE FEES PAID BY HIM OR HER REFLECT THE ALLOCATION OF RISK SET FORTH IN THIS AGREEMENT
              AND THAT UPBOUND WOULD NOT ENTER INTO THIS AGREEMENT WITHOUT THESE LIMITATIONS.
              SUBSCRIBER HEREBY WAIVES ANY AND ALL CLAIMS AGAINST UPBOUND ARISING OUT OF
              SUBSCRIBER'S PURCHASE OR USE OF THE SERVICES, OR ANY CONDUCT OF UPBOUND’S DIRECTORS,
              OFFICERS, EMPLOYEES, AGENTS OR REPRESENTATIVES. YOUR SOLE AND EXCLUSIVE RIGHT AND
              REMEDY IN CASE OF DISSATISFACTION WITH THE SERVICES OR ANY OTHER GRIEVANCE SHALL BE
              YOUR TERMINATION AND DISCONTINUATION OF ACCESS TO OR USE OF THE SERVICES. IN ADDITION,
              YOU AGREE THAT UPBOUND IS NOT RESPONSIBLE FOR ANY DATA COMPILED BY OUR SERVICES AND
              THAT UPBOUND WILL NOT BE LIABLE, IN ANY MANNER, AS A RESULT OF YOUR EXPOSURE TO ANY
              DEFAMATORY, LIBELOUS, THREATENING, UNLAWFULLY HARASSING, OBSCENE OR OTHERWISE UNLAWFUL
              CONTENT OR DATA. IN NO EVENT SHALL UPBOUND, OR ANY THIRD PARTY PROVIDER OF ANY
              COMPONENT OF THE SERVICES OR OF ANY INFORMATION DELIVERED AS PART OF THE SERVICES, BE
              LIABLE TO YOU AND/OR ANY PARTY FOR ANY DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED
              TO DIRECT, INDIRECT, SPECIAL, EXEMPLARY, PUNITIVE, CONSEQUENTIAL OR SIMILAR DAMAGES
              ARISING OUT OF OR RELATED TO THE SERVICES, CONTENT, PRODUCTS, THE USE OR INABILITY TO
              USE THIS WEBSITE, OR ANY LINKED WEBSITE, INCLUDING WITHOUT LIMITATION, LOST PROFITS,
              LOSS OF USE, BUSINESS INTERRUPTION, OR OTHER ECONOMIC LOSSES, LOSS OF PROGRAMS OR
              OTHER DATA, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
              EVEN IF UPBOUND IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, INCLUDING LIABILITY
              ASSOCIATED WITH ANY VIRUSES WHICH MAY INFECT YOUR COMPUTER EQUIPMENT. SOME
              JURISDICTIONS LIMIT OR PROHIBIT THE FOREGOING LIMITATIONS, AND IN SUCH JURISDICTIONS
              THE FOREGOING LIMITATIONS SHALL BE APPLIED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              materials.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Confidentiality</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              7.1 Subscriber shall keep confidential any confidential information to which it is
              given access, and shall cooperate with Upbound’s efforts to maintain the
              confidentiality thereof. Subscriber shall not publish to third parties or distribute
              information or documentation that Upbound provides for purposes of operating and
              maintaining its systems, including material contained in estimates, invoices, work
              orders, or other such materials.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Backup</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              8.1 Subscriber is solely responsible for the preservation of Subscriber's data which
              Subscriber saves onto its virtual server (the "Data"). EVEN WITH RESPECT TO DATA AS TO
              WHICH SUBSCRIBER CONTRACTS FOR BACKUP SERVICES PROVIDED BY UPBOUND, TO THE EXTENT
              PERMITTED BY APPLICABLE LAW, UPBOUND SHALL HAVE NO RESPONSIBILITY TO PRESERVE DATA.
              UPBOUND SHALL HAVE NO LIABILITY FOR ANY DATA THAT MAY BE LOST, OR UNRECOVERABLE, BY
              REASON OF SUBSCRIBER'S FAILURE TO BACKUP ITS DATA OR FOR ANY OTHER REASON.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Publicity</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              9.1 Each Subscriber is permitted to state publicly that such Subscriber is a
              Subscriber of the Services. Subject to Upbound’s Privacy Policy, each Subscriber
              agrees that Upbound may include such Subscriber's name and trademarks in a list of
              Upbound Subscriber, online or in promotional materials. Each Subscriber also agrees
              that Upbound may verbally reference such Subscriber as a Subscriber of the Services.
              Subscriber may opt out of the provisions in this Section 9.1 by e-mailing a request to{' '}
              {routes.infoEmail}
            </Paragraph>
          </li>
          <li>
            <ListTitle>Indemnification</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              10.1 YOU SHALL DEFEND, INDEMNIFY, AND HOLD HARMLESS US, OUR AFFILIATES, PARENTS,
              SUBSIDIARIES, ANY RELATED COMPANIES, LICENSORS AND PARTNERS, AND EACH OF OUR AND THEIR
              RESPECTIVE EMPLOYEES, OFFICERS, DIRECTORS, AGENTS, CONTRACTORS, DIRECTORS, SUPPLIERS
              AND REPRESENTATIVES FROM ALL LIABILITIES, CLAIMS, AND EXPENSES, INCLUDING REASONABLE
              ATTORNEYS' FEES, THAT ARISE FROM OR RELATE TO YOUR (OR ANY THIRD PARTY USING YOUR
              ACCOUNT OR IDENTITY IN THE SERVICES) USE OR MISUSE OF, OR ACCESS TO, THE SERVICES,
              CONTENT, OR OTHERWISE FROM YOUR USER CONTENT, VIOLATION OF THESE TERMS OF SERVICE OR
              OF ANY LAW, OR INFRINGEMENT OF ANY INTELLECTUAL PROPERTY OR OTHER RIGHT OF ANY PERSON
              OR ENTITY. WE RESERVE THE RIGHT TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF ANY
              MATTER OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU, IN WHICH EVENT YOU WILL ASSIST AND
              COOPERATE WITH US IN ASSERTING ANY AVAILABLE DEFENSES.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Termination and Access</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              11.1 Upbound reserves the right, in our sole discretion, to terminate your access to
              all or any part of the Services at any time, with or without notice, effective
              immediately, including but not limited to as a result of your violation of any of
              these Terms of Service or any law, or if you misuse system resources, such as, by
              employing programs that consume excessive network capacity, CPU cycles, or disk IO.
              Any such termination may result in the forfeiture and destruction of information
              associated with your Account. Upbound may provide prior notice of the intent to
              terminate Services to you if such notice will not, in Upbound’s discretion, run
              counter to the intents and purposes of these Terms of Service. Except as otherwise set
              forth hereunder, any and all fees paid hereunder are non-refundable and any and all
              fees owed to Upbound before such termination shall be immediately due and payable,
              including any liabilities that may have been incurred prior to termination such as
              Upbound’s costs for collection (including attorneys' fees) of any such charges or
              other liabilities. Upon termination, any and all rights granted to Subscriber by this
              Agreement will immediately be terminated, and Subscriber shall promptly discontinue
              all use of the Services. If you wish to terminate your Account, you may do so by
              following the instructions on the Website or through the Services. All provisions of
              these Terms of Service which by their nature should survive termination shall survive
              termination, including, without limitation, licenses of User Content, ownership
              provisions, warranty disclaimers, indemnity and limitations of liability.
            </Paragraph>
          </li>
          <li>
            <ListTitle>
              Choice of Law, Venue, Consent to Email Service and Waiver of Hague Convention Service
              Formalities
            </ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              12.1 Any claim arising hereunder shall be construed in accordance with the substantive
              and procedural laws of the State of Delaware, without regard to principles of conflict
              of laws. Subject to Section 14 below, you agree that any dispute arising from or
              relating to the subject matter of these Terms of Service shall be governed by the
              exclusive jurisdiction and venue of the state and Federal courts of Delaware.
              Subscriber consents to service of process via email at the email address(es) provided
              by Subscriber, and waives any requirement under the Hague Convention or other judicial
              treaty requiring that legal process be translated into any language other than
              English.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Dispute Resolution</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              13.1 Mindful of the high cost of litigation, you and Upbound agree to the following
              dispute resolution procedure: in the event of any controversy, claim, action or
              dispute arising out of or related to: (i) the Website; (ii) this Agreement; (iii) the
              Services; (iv) the breach, enforcement, interpretation, or validity of this Agreement;
              or (v) any other dispute between you and Upbound ("Dispute"), the party asserting the
              Dispute shall first try in good faith to settle such Dispute by providing written
              notice to the other party (by first class or registered mail) describing the facts and
              circumstances (including any relevant documentation) of the Dispute and allowing the
              receiving party 30 days in which to respond to or settle the Dispute. Notice shall be
              sent (1) if to Upbound at: 316 Second Ave S Seattle WA 98104 or (2) if to you at: your
              last-used billing address or the billing and/or shipping address in your Account
              information. Both you and Upbound agree that this dispute resolution procedure is a
              condition precedent that must be satisfied prior to initiating any arbitration or
              filing any claim against the other party.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Mandatory Arbitration Agreement and Class Action Waiver</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              14.1 In the interest of resolving disputes between you and Upbound in the most
              expedient and cost effective manner, you and Upbound agree that every dispute arising
              in connection with these Terms will be resolved by binding arbitration. Arbitration is
              less formal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of
              a judge or jury, may allow for more limited discovery than in court, and can be
              subject to very limited review by courts. Arbitrators can award the same damages and
              relief that a court can award. This agreement to arbitrate disputes includes all
              claims arising out of or relating to any aspect of these Terms, whether based in
              contract, tort, statute, fraud, misrepresentation, or any other legal theory, and
              regardless of whether a claim arises during or after the termination of these Terms.
              YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND UPBOUND ARE EACH
              WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              14.2 Despite the provisions of Section 14.1, nothing in these Terms will be deemed to
              waive, preclude, or otherwise limit the right of either party to: (i) bring an
              individual action in small claims court; (ii) pursue an enforcement action through the
              applicable federal, state, or local agency if that action is available; (iii) seek
              injunctive relief in a court of law; or (iv) to file suit in a court of law to address
              an intellectual property infringement claim.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              14.3 Any arbitration between you and Upbound will be settled under the Federal
              Arbitration Act, and governed by the Commercial Dispute Resolution Procedures and the
              Supplementary Procedures for Consumer Related Disputes (collectively, "AAA Rules") of
              the American Arbitration Association ("AAA"), as modified by these Terms, and will be
              administered by the AAA. The AAA Rules and filing forms are available online at
              www.adr.org, by calling the AAA at 1-800-778-7879, or by contacting Upbound.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              14.4 A party who intends to seek arbitration must first send a written notice of the
              dispute to the other party by certified U.S. Mail or by Federal Express (signature
              required) or, only if such other party has not provided a current physical address,
              then by electronic mail ("Notice"). Upbound's address for Notice is: Upbound, 316
              Second Ave S Seattle WA 98104. The Notice must: (a) describe the nature and basis of
              the claim or dispute; and (b) set forth the specific relief sought ("Demand"). The
              parties will make good faith efforts to resolve the claim directly, but if the parties
              do not reach an agreement to do so within 30 days after the Notice is received, you or
              Upbound may commence an arbitration proceeding. During the arbitration, the amount of
              any settlement offer made by you or Upbound must not be disclosed to the arbitrator
              until after the arbitrator makes a final decision and award, if any. If the dispute is
              finally resolved through arbitration in your favor, Upbound will pay you the highest
              of the following: (i) the amount awarded by the arbitrator, if any; (ii) the last
              written settlement amount offered by Upbound in settlement of the dispute prior to the
              arbitrator's award; or (iii) $1,000.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              14.5 If you commence arbitration in accordance with these Terms, Upbound will
              reimburse you for your payment of the filing fee, unless your claim is for more than
              $10,000, in which case the payment of any fees will be decided by the AAA Rules. Any
              arbitration hearing will take place at a location to be agreed upon. If the claim is
              for $10,000 or less, you may choose whether the arbitration will be conducted: (i)
              solely on the basis of documents submitted to the arbitrator; (ii) through a
              non-appearance based telephone hearing; or (iii) by an in-person hearing as
              established by the AAA Rules in the county (or parish) of your billing address. If the
              arbitrator finds that either the substance of your claim or the relief sought in the
              Demand is frivolous or brought for an improper purpose (as measured by the standards
              set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will
              be governed by the AAA Rules. In that case, you agree to reimburse Upbound for all
              monies previously disbursed by it that are otherwise your obligation to pay under the
              AAA Rules. Regardless of the manner in which the arbitration is conducted, the
              arbitrator must issue a reasoned written decision sufficient to explain the essential
              findings and conclusions on which the decision and award, if any, are based. The
              arbitrator may make rulings and resolve disputes as to the payment and reimbursement
              of fees or expenses at any time during the proceeding and upon request from either
              party made within 14 days of the arbitrator's ruling on the merits.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              14.6 YOU AND UPBOUND AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR
              OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED
              CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and Upbound agree
              otherwise, the arbitrator may not consolidate more than one person's claims, and may
              not otherwise preside over any form of a representative or class proceeding.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              14.7 If Upbound makes any future change to this arbitration provision, other than a
              change to Upbound's address for Notice, you may reject the change by sending us
              written notice within 30 days of the change to Upbound's address for Notice, in which
              case your account with Upbound will be immediately terminated and this arbitration
              provision, as in effect immediately prior to the changes you rejected will survive.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              14.8 If Section 14.6 is found to be unenforceable or if the entirety of this Section
              14 is found to be unenforceable, then the entirety of this Section 14 will be null and
              void and, in that case, the parties agree that the exclusive jurisdiction and venue
              will govern any action arising out of or related to these Terms. The arbitrator has
              exclusive authority to resolve any dispute relating to the interpretation,
              applicability, or enforceability of this binding arbitration agreement.
            </Paragraph>
          </li>
          <li>
            <ListTitle>Miscellaneous Provisions</ListTitle>
            <Paragraph sx={paragraphSpacingLg}>
              15.1 Neither you nor Upbound shall be liable for nonperformance of the terms herein to
              the extent that either you or Upbound are prevented from performing as a result of any
              act or event which occurs and is beyond your or Upbound's reasonable control,
              including, without limitation, acts of God, war, unrest or riot, strikes, any action
              of a governmental entity, weather, quarantine, fire, flood, earthquake, explosion,
              utility or telecommunications outages, Internet disturbance, or any unforeseen change
              in circumstances, or any other causes beyond either party's reasonable control. The
              party experiencing the force majeure shall provide the other party with prompt written
              notice thereof and shall use reasonable efforts to remedy effects of such force
              majeure.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              15.2 You are granted a limited, non-exclusive right to create a hypertext link to the
              Website found at https://www.upbound.io/; provided such link does not portray Upbound
              and/or its affiliates or any of their respective products and services in a false,
              misleading, derogatory or otherwise defamatory manner. This limited right may be
              revoked at any time. You may not use, frame or utilize framing techniques to enclose
              any Upbound trademark, logo or other proprietary information, including the images
              found at the Website, the content of any text or the layout/design of any page or form
              contained on a page without Upbound’s express written consent. Except as noted above,
              you are not conveyed any right or license by implication, estoppel, or otherwise in or
              under any patent, trademark, copyright, or proprietary right of Upbound or any third
              party.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              15.3 The Website contains many of the valuable trademarks, service marks, names,
              titles, logos, images, designs, copyrights and other proprietary materials owned,
              registered and used by Upbound, but not limited to, the mark " Upbound". Upbound and
              the Upbound product names referenced in the Website are either trademarks, service
              marks or registered trademarks of Upbound. Any unauthorized use of same is strictly
              prohibited and all rights in same are reserved by Upbound. No use of any Upbound
              trademark may be made by any third party without express written consent of Upbound.
              Other products and company names mentioned in the Website may be the trademarks of
              their respective owners.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              15.4 Elements of Upbound’s Website are protected by trade dress, trademark, unfair
              competition, and other laws and may not, unless otherwise permitted hereunder, be
              copied in whole or in part. No logo, graphic, or image from the Website may be copied
              or retransmitted without Upbound’s express written permission. The images, text,
              screens, web pages, materials, data, Content and other information used and displayed
              on the Website are the property of Upbound or its licensors and are protected by
              copyright, trademark and other laws. In addition to our rights in individual elements
              of the Website, Upbound owns copyright or patent rights in the selection,
              coordination, arrangement and enhancement of any images, text, screens, web pages,
              materials, data, Content and other information used and displayed on the Website. You
              may copy such images, text, screens, web pages, materials, data, Content and other
              information used and displayed on the Website for your personal or educational use
              only, provided that each copy includes any copyright, trademark or service mark notice
              or attribution as they appear on the pages copied. Except as provided in the preceding
              sentence, none of such images, text, screens, web pages, materials, data, Content and
              other information used and displayed on the Website may be copied, displayed,
              distributed, downloaded, licensed, modified, published, reposted, reproduced, reused,
              sold, transmitted, used to create a derivative work or otherwise used for public or
              commercial purposes without the express written permission of Upbound.
            </Paragraph>
            <Paragraph sx={paragraphSpacingLg}>
              15.5 This Agreement, including all related agreements and policies incorporated by
              reference herein, constitutes the entire agreement between the parties related to the
              subject matter hereof and supersedes any prior or contemporaneous agreement between
              the parties relating to the Services. A valid waiver hereunder shall not be
              interpreted to be a waiver of that obligation in the future or any other obligation
              under this Agreement. The failure of either party to exercise in any respect any right
              provided for herein shall not be deemed a waiver of any further rights hereunder. In
              order for any waiver of compliance with these Terms of Service to be binding, we must
              provide you with written notice of such waiver through one of our authorized
              representatives. If any provision of this Agreement is prohibited by law or held to be
              unenforceable, that provision will be severed and the remaining provisions hereof
              shall not be affected such that this Agreement shall continue in full force and effect
              as if such unenforceable provision had never constituted a part hereof. This Agreement
              may be executed in counterparts, each of which shall be deemed an original, but all of
              which together shall constitute the same instrument. This Agreement may be signed
              electronically or, as set out above, your access and use of the Services will manifest
              your consent to this Agreement. These Terms of Service are personal to you, and are
              not assignable, transferable or sublicensable by you except with our prior written
              consent. We may assign, transfer or delegate any of our rights and obligations
              hereunder without consent. No agency, partnership, joint venture, or employment
              relationship is created as a result of these Terms of Service and neither party has
              any authority of any kind to bind the other in any respect. The section and paragraph
              headings in these Terms of Service are for convenience only and shall not affect their
              interpretation. All references to "laws," "rules," or "regulations" references any and
              all applicable laws, rules and regulations, whether domestic or foreign. Unless
              otherwise specified in these Terms of Service, all notices under these Terms of
              Service will be in writing and will be deemed to have been duly given when received,
              if personally delivered or sent by certified or registered mail, return receipt
              requested; when receipt is electronically confirmed, if transmitted by facsimile or
              e-mail; or the day after it is sent, if sent for next day delivery by recognized
              overnight delivery service. Electronic notices should be sent to {routes.infoEmail}
            </Paragraph>
          </li>
        </OrderedList>
        <Header variant="h4" bold={true} sx={{ mb: '30px' }}>
          Contact Us
        </Header>
        <Paragraph sx={{ lineHeight: '25px' }}>
          You may contact us at the following address:
          <br />
          Upbound
          <br />
          113 Cherry St
          <br />
          Suite 67825
          <br />
          Seattle, Washington 98104-2205 US
        </Paragraph>
      </Box>
    </PageProvider>
  );
};

export default TermsOfUse;
