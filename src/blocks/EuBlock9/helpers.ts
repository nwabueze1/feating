import { CoreMenuFields, CoreMenuFields_menuCategories } from "./../../models/__generated__/CoreMenuFields";
import { TEuState } from "./../../types";
import { useSelector } from "react-redux";
import { MenuCategoryProps } from ".";

export const useGetMenuItems = () => {
  const store = useSelector<TEuState, TEuState>((store) => store);
  const menuCategories = store.menu?.activeMenuCategories;
  return menuCategories.map((category: CoreMenuFields_menuCategories[]) => ({ ...category, menuItems: [] }));
};

export const mapMenuCategory = (menu: CoreMenuFields, content: Record<string, any>): MenuCategoryProps[] => {
  return [
    ...menu.menuCategories.map((category) => ({
      ...category,
      image: category.menuItems?.[0]?.image,
      ctas: [
        {
          text: content?.button?.text,
          url: `${content?.button?.url}?category_uuid=${category.uuid}#menu`,
        },
      ],
    })),
  ];
};
