export type RelatedPostThumbnailProps = {
  header: string;
  content: ThumbnailProps[];
  layout?: string;
  buttonConfiguration: {
    fonts: any;
    colors: Record<string, string>;
  };
};

export type ThumbnailProps = {
  __typename: string;
  title: string;
  uuid: string;
  featured_image: string;
  content: string;
  slug: string;
  category: string;
  readTime: string;
};
