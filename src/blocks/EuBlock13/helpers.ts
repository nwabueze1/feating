import { CoreMenuFields_menuCategories } from "./../../models/__generated__/CoreMenuFields";
import { ClientMenuFields } from ".";

export const mapMenuCategory = (menu: ClientMenuFields) => [
  ...menu.menuCategories.map((category) => ({
    ...category,
    image: category.menuItems?.[0]?.image,
  })),
];

export interface CardMenuProps extends CoreMenuFields_menuCategories {
  image?: any;
  ctas?: { text: string; url: string }[];
}
