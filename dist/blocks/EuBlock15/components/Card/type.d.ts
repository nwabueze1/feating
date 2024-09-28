import { ReactNode } from "react";
export type CardPropsType = {
    overline: string;
    title: string;
    excerpt: string;
    layout: string;
    featured_image: string;
    published_at: Date | string;
    cta?: JSX.Element | ReactNode;
    mode: "view" | "edit";
    slug: string;
};
