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

type Testimonial = {
  id: number;
  bg_image: ImageContent[];
  logo: SVGImageContent[];
  title: string;
  text: string;
  full_text: string;
  author: string;
  author_job_title: string;
  can_display: boolean;
};

type HomePageHeader = {
  title: string;
  subtitle: string;
  buttons: Button[];
  partner_images_header: string;
  partner_images: ImageType[];
};

type HomePageFeature = {
  header_svg: ImageValue;
  header_text: string;
  title: string;
  text: string;
  link_text: string;
  link: Link;
  side_svg_big: SVGImageContent;
  side_svg_small: SVGImageContent;
  side_svg_small_top_offset: number;
  side_svg_small_right_offset: number;
  side_svg_big_mobile: SVGImageContent;
  side_svg_small_mobile: SVGImageContent;
  side_svg_small_top_offset_mobile: number;
  side_svg_small_right_offset_mobile: number;
};

type HomePage = {
  cms_head_props: CMSHeadProps;

  header: { value: HomePageHeader }[];

  section_1_title: string;
  section_1_sub_title: string;
  section_1_center_title_count: string;
  section_1_center_title: string;
  section_1_center_text: string;
  section_1_button: Button[];

  features_sections: {
    id: string;
    value: HomePageFeature;
  }[];

  testimonials: Testimonial[];
  quoteless_testimonials: Testimonial[];

  learn_more_section_title: string;

  learn_more_tile_1_header_image: ImageType[];
  learn_more_tile_1_link: Link;
  learn_more_tile_1_header_author_image: ImageType[];
  learn_more_tile_1_author_name: string;
  learn_more_tile_1_resource_type: string;
  learn_more_tile_1_video_id: string;
  learn_more_tile_1_pill_text: string;
  learn_more_tile_1_resource_title: string;
  learn_more_tile_1_resource_snippet: string;
  learn_more_tile_1_resource_date: string;

  learn_more_tile_2_header_image: ImageType[];
  learn_more_tile_2_link: Link;
  learn_more_tile_2_author_name: string;
  learn_more_tile_2_resource_type: string;
  learn_more_tile_2_video_id: string;
  learn_more_tile_2_pill_text: string;
  learn_more_tile_2_resource_title: string;
  learn_more_tile_2_resource_snippet: string;
  learn_more_tile_2_resource_date: string;

  learn_more_tile_3_header_image: ImageType[];
  learn_more_tile_3_link: Link;
  learn_more_tile_3_header_author_image: ImageType[];
  learn_more_tile_3_author_name: string;
  learn_more_tile_3_resource_type: string;
  learn_more_tile_3_video_id: string;
  learn_more_tile_3_pill_text: string;
  learn_more_tile_3_resource_title: string;
  learn_more_tile_3_resource_snippet: string;
  learn_more_tile_3_resource_date: string;

  learn_more_tile_4_title: string;

  learn_more_tile_5_title: string;
  learn_more_tile_5_link: Link;
};

type Section3Card = {
  title: string;
  text: string;
  icon: ImageType;
};
