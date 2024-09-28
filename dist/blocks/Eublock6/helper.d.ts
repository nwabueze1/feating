import { CoreMenuFields, CoreMenuFields_menuCategories, CoreMenuFields_menuItems } from "../../models/__generated__/CoreMenuFields";
import { ClientMenuFields } from "./../EuBlock13/initialMenuState";
export interface CardMenuProps extends CoreMenuFields_menuCategories {
    image: any;
    ctas?: {
        text: string;
        url: string;
    }[];
}
export declare const transformMenu: (menu: ClientMenuFields | CoreMenuFields) => {
    menuCategories: {
        image: any;
        menuItems: {
            url: string;
            uuid: string;
            name: string;
            description: string;
            price: number;
            image: any | null;
            options: string[] | null;
            menuCategory: Pick<import("../../models/__generated__/CoreMenuFields").CoreMenuFields_menuItems_menuCategory, "uuid"> | null;
        }[] | undefined;
        uuid: string;
        title: string;
        description?: string;
    }[];
    uuid: string;
    name: string;
    options_config: (import("../../models/__generated__/CoreMenuFields").CoreMenuFields_options_config | null)[] | null;
    menuItems: import("../../models").CoreMenuItemFields[];
    restaurant: import("../../models").CoreRestaurantFields;
    paginatorInfo?: import("../../helpers").CorePaginatorInfoProps;
} | {
    menuCategories: {
        image: any;
        menuItems: {
            url: string;
            uuid: string;
            name: string;
            description: string;
            price: number;
            image: any | null;
            options: string[] | null;
            menuCategory: Pick<import("../../models/__generated__/CoreMenuFields").CoreMenuFields_menuItems_menuCategory, "uuid"> | null;
        }[] | undefined;
        uuid: string;
        title: string;
        description?: string;
    }[];
    __typename?: string;
    uuid: string;
    name: string;
    options_config: (import("../../models/__generated__/CoreMenuFields").CoreMenuFields_options_config | null)[] | null;
    menuItems: import("../../models").CoreMenuItemFields[];
    restaurant: import("../../models").CoreRestaurantFields;
    paginatorInfo?: import("../../helpers").CorePaginatorInfoProps;
};
export declare const mapMenuCategory: (menu: ClientMenuFields) => {
    image: any;
    uuid: string;
    title: string;
    description?: string;
    menuItems?: CoreMenuFields_menuItems[];
}[];
export declare function getItemToDisplay<T>(items: T[], show3rows: boolean): T[];
