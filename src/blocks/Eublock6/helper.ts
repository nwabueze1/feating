import { CoreMenuFields, CoreMenuFields_menuCategories, CoreMenuFields_menuItems } from "../../models/__generated__/CoreMenuFields";
import { ClientMenuFields } from "./../EuBlock13/initialMenuState";

export interface CardMenuProps extends CoreMenuFields_menuCategories {
  image: any;
  ctas?: { text: string; url: string }[];
}

export const transformMenu = (menu: ClientMenuFields | CoreMenuFields) => {
  return {
    ...menu,
    menuCategories: menu?.menuCategories?.map((category: CoreMenuFields_menuCategories) => ({
      ...category,
      image: category?.menuItems?.[0]?.image,
      menuItems: category?.menuItems?.map((menuItem: CoreMenuFields_menuItems) => ({
        ...menuItem,
        url: `/products?product_uuid=${menuItem?.uuid}`,
      })),
    })),
  };
};

export const mapMenuCategory = (menu: ClientMenuFields) => [
  ...menu.menuCategories.map((category: CoreMenuFields_menuCategories) => ({
    ...category,
    image: category.menuItems?.[0]?.image,
  })),
];

export function getItemToDisplay<T>(items: T[], show3rows: boolean): T[] {
  const content = [];

  const getNumberOfItems = show3rows ? 6 : 8;
  for (let i = 0; i < getNumberOfItems; i++) {
    if (!items[i]) return content;
    content.push(items[i]);
  }

  return content;
}
