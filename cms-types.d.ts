type ImageContent = {
  title: string;
  url: string;
};

type ImageValue = {
  image: ImageContent;
  svg_image: ImageContent;
  width?: number;
  height?: number;
};

type Image = {
  type: string;
  value: ImageValue;
  id: string;
};

type Link = [
  {
    type: string;
    value: string;
  }
];

type ButtonValue = {
  text: string;
  style_type:
    | 'whiteContained'
    | 'whiteOutlined'
    | 'cornflowerContained'
    | 'gradientContained'
    | 'linkWaterContained';
  icon?: ImageContent;
  has_arrow?: boolean;
  link?: Link;
};

type Button = {
  id: string;
  value: ButtonValue;
};

type Testimonial = {
  bg_image: string;
  logo: string;
  // logoSize: { width: number; height: number };
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
  buttons: Button[]; // min 2
  partner_images_header: string;
  partner_images: Image[];
};

type HomePageFeature = {
  header_svg: ImageValue;
  header_text: string;
  title: string;
  text: string;
  link_text: string;
  link: Link;
  side_svg_big: ImageContent;
  side_svg_small: ImageContent;
  side_svg_small_top_offset: number;
  side_svg_small_right_offset: number;
  side_svg_big_mobile: ImageContent;
  side_svg_small_mobile: ImageContent;
  side_svg_small_top_offset_mobile: number;
  side_svg_small_right_offset_mobile: number;
};

type HomePage = {
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

  learn_more_section_title: string;
  learn_more_tile_1_header_image: Image;
  learn_more_tile_1_link: Link;
  learn_more_tile_1_header_author_image: Image;
  learn_more_tile_1_author_name: string;
  learn_more_tile_1_resource_type: string;
  learn_more_tile_1_video_id: string;
  learn_more_tile_1_pill_text: string;
  learn_more_tile_1_resource_title: string;
  learn_more_tile_1_resource_snippet: string;
  learn_more_tile_1_resource_date: string;
  learn_more_tile_2_header_image: Image;
  learn_more_tile_2_link: Link;
  learn_more_tile_2_author_name: string;
  learn_more_tile_2_resource_type: string;
  learn_more_tile_2_video_id: string;
  learn_more_tile_2_pill_text: string;
  learn_more_tile_2_resource_title: string;
  learn_more_tile_2_resource_snippet: string;
  learn_more_tile_2_resource_date: string;
  learn_more_tile_3_header_image: Image;
  learn_more_tile_3_link: Link;
  learn_more_tile_3_header_author_image: Image;
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
  icon: Image;
};

type ProductPage = {
  header: {
    title: string;
    subtitle: string;
    buttons: Button[]; // min 2
  };
  section_1: {
    title: string;
  };
  features_section: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      subtitle: string;
      big_image: Image;
      small_image: Image;
      small_image_offset: { top: number; right: number };
      mobile_image: Image;
    }[];
  };
  section_3: {
    title: string;
    subtitle: string;
    card_1: Section3Card;
    card_2: Section3Card;
    card_3: Section3Card;
  };
  testimonials_section: {
    title: string;
    testimonials: Testimonial[];
  };
};
