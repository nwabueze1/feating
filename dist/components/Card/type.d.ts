import { MediaValue } from "../../helpers";
export type CardPropsType = {
    image?: MediaValue;
    title: string;
    subtitle?: string;
    rating?: 1 | 2 | 3 | 4 | 5;
    price?: number;
    currency?: string;
    action?: {
        title?: string;
        onClick?: () => void;
        href?: string;
    };
    hasShadow?: boolean;
    colors?: {
        currency?: string;
        action?: {
            background: string;
            color: string;
        };
    };
    imageHeight?: number;
    showShadow?: boolean;
    numberOfLines?: number;
    mode?: "view" | "edit";
    screenSize?: number;
};
