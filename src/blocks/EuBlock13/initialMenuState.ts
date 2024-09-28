import { CoreMenuFields_menuItems } from "./../../models/__generated__/CoreMenuFields";
import { CoreMenuFields, CoreMenuFields_menuCategories } from "../../models";

export interface ClientMenuItems extends CoreMenuFields_menuItems {
  image: any;
  __typename?: string;
}
export interface ClientMenuCategory extends CoreMenuFields_menuCategories {
  menuItems?: ClientMenuItems[];
  __typename?: string;
}
export interface ClientMenuFields extends CoreMenuFields {
  menuCategories: ClientMenuCategory[];
  __typename?: string;
}

