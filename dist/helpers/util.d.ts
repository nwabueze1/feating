import { BlockConfigType } from "../types";
export declare const useGetConfiguration: () => (config: BlockConfigType["configuration"], paletteSelector: string, getMapped: (colors: Record<string, string>) => Record<string, string>) => {
    fonts: {
        [key: string]: string;
    };
    colors: Record<string, string>;
};
export declare const useGetFonts: () => (configuration: BlockConfigType["configuration"]) => {
    [key: string]: string;
};
export declare enum BlockLayouts {
    LAYOUT_1 = "layout-1",
    LAYOUT_2 = "layout-2",
    LAYOUT_3 = "layout-3",
    LAYOUT_4 = "layout-4",
    LAYOUT_5 = "layout-5"
}
export declare const transformMenu: (menu: Record<string, any>) => {
    activeMenuCategories: any;
};
export declare const defaultButtonColor: {
    "100": string;
    "200": string;
    "300": string;
    "400": string;
};
export declare const getDateDuration: (dateStr: string) => string;
