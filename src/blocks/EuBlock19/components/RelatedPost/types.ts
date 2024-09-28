import { MediaValue } from "../../../../helpers";

export type RelatedPostThumbnailProps = {
  header: string;
  content: ThumbnailProps[];
  layout?: string;
  mode?: "view" | "edit";
  buttonConfiguration: {
    fonts: any;
    colors: Record<string, string>;
  };
};

export type ThumbnailProps = {
  __typename: string;
  title: string;
  uuid: string;
  featured_image: MediaValue;
  content: string;
  slug: string;
  category_name: string;
  readTime: string;
};
