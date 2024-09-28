import { CoreCategoriesFields } from "models";
import { CoreMenuFields_menuCategories } from "../../models/__generated__/CoreMenuFields";

export const mapPostCategory = (categories: CoreCategoriesFields[]) => [
  ...categories.map((category) => ({
    ...category,
    title: category.name,
    image: { src: "" },
  })),
];

export interface CardMenuProps extends CoreMenuFields_menuCategories {
  image: any;
  ctas?: { text: string; url: string }[];
}
