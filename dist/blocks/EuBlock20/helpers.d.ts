import { CoreCategoriesFields } from "models";
import { CoreMenuFields_menuCategories } from "../../models/__generated__/CoreMenuFields";
export declare const mapPostCategory: (categories: CoreCategoriesFields[]) => {
    title: string;
    image: {
        src: string;
    };
    uuid: string;
    name: string;
}[];
export interface CardMenuProps extends CoreMenuFields_menuCategories {
    image: any;
    ctas?: {
        text: string;
        url: string;
    }[];
}
