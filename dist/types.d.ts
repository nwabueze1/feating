import { CoreCartFields, CoreCategoriesFields, CorePostFields } from "models";
import { CoreMenuFields } from "./models/__generated__/CoreMenuFields";
import { ReactNode } from "react";
import { CorePaginatorInfoProps } from "helpers";
export type BlockConfigType = {
    index?: number;
    mode?: "view" | "edit";
    activeElement?: string;
    handleSelect?: (key: string) => void;
    content: {
        [key: string]: any;
    };
    ssr_network_operation?: string;
    ssr_content_fields?: string[];
    layouts: {
        name: string;
        isSelected: boolean;
    }[];
    animations?: {
        name: string;
        isSelected: boolean;
    }[];
    configuration: {
        colors: {
            [key: string]: any;
        };
        fonts?: {
            [key: string]: string;
        };
    };
    screenSize?: number;
};
export type ButtonType = {
    text?: string;
    url?: string;
    variant?: "primary" | "secondary";
};
export type ProviderPropsType = {
    children: ReactNode | JSX.Element;
};
export type RestaurantState = {
    menu?: CoreMenuFields;
    cart?: CoreCartFields;
    cartItemCount?: number;
};
export type BlogState = {
    posts?: CorePostFields[];
    paginatorInfo?: CorePaginatorInfoProps;
    categories?: CoreCategoriesFields[];
};
export type TEuState = {
    gatewayUrl: string;
    block_uuid?: string;
    colors: {
        [key: string]: {
            [key: string]: string;
        };
    };
    fonts: {
        [key: string]: any;
    };
    colorType: Record<string, any>;
    blockConfiguration: Record<string, CustomThemeProps>;
    button: Record<string, string>;
    configurations: Record<string, Record<string, Record<string, string>>>;
    menu: Record<string, any>;
    restaurant?: RestaurantState;
    blog?: BlogState;
    loading?: boolean;
};
export type CustomThemeProps = {
    colors: {
        [key: string]: string;
    };
    fonts: {
        [key: string]: string;
    };
    block_uuid?: string;
};
export type BlockProviderType = {
    colors: Record<string, string>;
    fonts: Record<string, string>;
    children: ReactNode;
    block_uuid?: string;
};
export type BlockStoreType = {
    fonts: Record<string, any>;
    colors: Record<string, any>;
    block_uuid?: string;
};
export type EuPageProps = {
    name: string;
    pages: string[];
};
