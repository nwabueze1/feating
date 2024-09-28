import { ReactNode } from "react";
export type SocialMediaPropsType = {
    showHeader?: boolean;
    layout: string | any;
    social: Array<{
        type: "facebook" | "instagram" | "twitter";
        url: string;
    }>;
    mode?: "view" | "edit";
};
export type FooterListItemPropsType = {
    children?: ReactNode;
    layout?: string;
};
export type FooterLinkPropsType = {
    children?: any;
    href?: string;
    layout?: string;
    mode?: "view" | "edit";
};
export type SubscribeInputPropsType = {
    layout?: string;
    content?: Record<string, any>;
    mode?: "view" | "edit";
};
