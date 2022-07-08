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

type Testimonials = {
  title: string;
  body: string;
  full: string;
  author_name: string;
  author_job_title: string;
  logo: Image;
  logoSize: { width: number; height: number };
  bgImage: Image;
}[];

type NewsTile = {
  header_image: Image;
  author_image?: Image;
  author_name: string;
  resource_type: string;
  title: string;
  snippet: string;
  date: string;
  pill_text: string;
  link: Link;
  youtube_video_id: string;
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
  reversed: boolean;
  side_svg_big: Image;
  side_svg_big_mobile: Image;
  side_svg_small: Image;
  side_svg_small_mobile: Image;
  side_svg_small_offset: { top: number; right: number };
  side_svg_small_offset_mobile: { top: number; right: number };
};

type HomePage = {
  header: { value: HomePageHeader }[];

  section_1_title: string;
  section_1_sub_title: string;
  section_1_center_title_count: string;
  section_1_center_title: string;
  section_1_center_text: string;
  section_1_button: Button[];

  roll_in_sections: {
    id: string;
    value: HomePageFeature;
  }[];

  testimonials_section: Testimonials;
  tiles_section: {
    tile_1: NewsTile;
    tile_2: NewsTile;
    tile_3: NewsTile;
    tile_4: {
      title: string;
    };
    tile_5: {
      title: string;
      link: Link;
    };
  };
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
    testimonials: Testimonials;
  };
};
