type CMSHeadProps = {
  title: string;
  seo_title: string;
  search_description: string;
  seo_keywords: string;
  og_twitter_title: string;
  og_twitter_url: string;
  og_twitter_description: string;
  og_twitter_image: { meta: { download_url: string } };
  twitter_card: string;
  twitter_site: string;
  twitter_creator: string;
  slug: string;
};

type ImageContent = {
  title: string;
  url: string;
};

type SVGImageContent = {
  title: string;
  url: string;
  view_box: string;
};

type ImageValue = {
  image?: ImageContent;
  svg_image?: SVGImageContent;
  width?: number;
  height?: number;
};

type ImageType = {
  type: string;
  value: ImageValue;
  id: string;
};

type Link = [
  {
    id: string;
    type: string;
    value: string;
  }
];

type ButtonStyleType =
  | 'whiteContained'
  | 'whiteOutlined'
  | 'turquoiseContained'
  | 'gradientContained'
  | 'linkWaterContained';

type ButtonValue = {
  text: string;
  style_type: ButtonStyleType;
  icon?: ImageContent;
  has_arrow?: boolean;
  link?: Link;
};

type Button = {
  id: string;
  value: ButtonValue;
};

type NewsBanner = {
  banner_id: string;
  text: string;
  // link_text: string;
  // link: Link;
  button: Button[];
};

type HomePageHeader = {
  title: string;
  subtitle: string;
  buttons: Button[];
};

type HomePageFeature = {
  // header_image: ImageType;
  title: string;
  text: string;
  link_text: string;
  link: Link;
};

type UpboundItem = {
  id: number;
  image: ImageType[];
  title: string;
  text: string;
  footer_text: string;
};

type UpboundItems = UpboundItem[];

type HomePage = {
  cms_head_props: CMSHeadProps;

  header: { value: HomePageHeader }[];

  section_1_title: string;
  section_1_sub_title: string;
  section_1_button: Button[];

  section_1_slack_title_count: string;
  section_1_slack_title: string;
  section_1_slack_text: string;
  section_1_slack_button: Button[];

  features_sections: {
    id: string;
    value: HomePageFeature;
  }[];

  section_3_title: string;
  section_3_text: string;
  section_3_card_items: UpboundItem[];
  section_3_button: Button[];

  cta_section_title: string;
  cta_section_text: string;
  cta_section_buttons: Button[];
};
