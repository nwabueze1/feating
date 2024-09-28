import { ReactNode } from "react";
import { MediaValue } from "../../../../helpers";
export type CardPropsType = {
    overline?: string;
    category_name: string;
    title: string;
    excerpt: string;
    layout?: string;
    featured_image: MediaValue;
    published_at: Date | string;
    cta?: JSX.Element | ReactNode;
    mode: "view" | "edit";
    slug: string;
    action: {
        title: string;
    };
    variant: string;
    screenSize?: number;
};
