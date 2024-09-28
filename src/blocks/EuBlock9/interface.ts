import { CoreMenuFields_menuCategories } from "../../models";

export interface MenuCategoryProps extends CoreMenuFields_menuCategories {
  image: any;
  ctas?: { text: string; url: string }[];
}
