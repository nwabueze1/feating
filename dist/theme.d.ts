import { Breakpoint, Breakpoints, Theme as MuiTheme } from "@mui/material/styles";
type ExtendedBreakPoints = Breakpoints & {
    up: (key: Breakpoint | "xxl" | "xxxl") => string;
};
type ExtendedThemeOptions = {
    include: {
        [key: string]: any;
    };
    euDesign: {
        font: {
            [key: string]: any;
        };
        colors: {
            [key: string]: string;
        };
        background: {
            [key: string]: string;
        };
        border: {
            [key: string]: string;
        };
        typography: {
            [key in "h1" | "h2" | "h3" | "h4" | "h5" | "bodyLg" | "bodySm" | "bodyMin" | "caption" | "buttonLg" | "overlineSmall" | "headerLink" | "overline" | "price" | "cardHeading" | "fontSize" | "fontWeightBold" | "fontWeightRegular" | "fontWeightSemiBold" | "fontWeightRegularExtra"]: number | any;
        } & {
            fontWeight: {
                [key in "regular" | "medium" | "semiBold" | "bold"]: number;
            };
        };
        shadows: Record<any, any>;
        getShadow: (opacity: number) => string;
    };
    euStyles: {
        [key: string]: any;
    };
    custom: ExtendedBreakPoints;
};
declare module "@mui/material/styles" {
    interface Theme extends ExtendedThemeOptions {
    }
    interface ThemeOptions extends ExtendedThemeOptions {
    }
}
export type BaseTheme = MuiTheme & ExtendedThemeOptions;
export declare const theme: any;
declare const _default: MuiTheme;
export default _default;
