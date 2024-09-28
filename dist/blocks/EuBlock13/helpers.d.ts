import { CoreMenuFields_menuCategories } from "./../../models/__generated__/CoreMenuFields";
import { ClientMenuFields } from ".";
export declare const mapMenuCategory: (menu: ClientMenuFields) => {
    image: any;
    menuItems?: import("./initialMenuState").ClientMenuItems[];
    __typename?: string;
    uuid: string;
    title: string;
    description?: string;
}[];
export interface CardMenuProps extends CoreMenuFields_menuCategories {
    image?: any;
    ctas?: {
        text: string;
        url: string;
    }[];
}
