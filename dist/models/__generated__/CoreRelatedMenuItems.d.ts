import { MediaValue } from "../../helpers";
export interface CoreRelatedMenuItemFields {
    image: MediaValue;
    slug?: string;
    price: number;
    description: string;
    name: string;
    options: string[];
    uuid: string;
}
