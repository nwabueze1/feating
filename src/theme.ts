import { Breakpoint, Breakpoints, createTheme, Theme as MuiTheme } from "@mui/material/styles";

type ExtendedBreakPoints = Breakpoints & {
  up: (key: Breakpoint | "xxl" | "xxxl") => string;
};

type ExtendedThemeOptions = {
  include: { [key: string]: any };
  euDesign: {
    font: { [key: string]: any };
    colors: { [key: string]: string };
    background: { [key: string]: string };
    border: { [key: string]: string };
    typography: {
      [key in
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "bodyLg"
        | "bodySm"
        | "bodyMin"
        | "caption"
        | "buttonLg"
        | "overlineSmall"
        | "headerLink"
        | "overline"
        | "price"
        | "cardHeading"
        | "fontSize"
        | "fontWeightBold"
        | "fontWeightRegular"
        | "fontWeightSemiBold"
        | "fontWeightRegularExtra"]: number | any;
    } & {
      fontWeight: { [key in "regular" | "medium" | "semiBold" | "bold"]: number };
    };
    shadows: Record<any, any>;
    getShadow: (opacity: number) => string;
  };
  euStyles: { [key: string]: any };
  custom: ExtendedBreakPoints;
};

declare module "@mui/material/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendedThemeOptions {}

  // allow configuration using `createMuiTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends ExtendedThemeOptions {}
}

export type BaseTheme = MuiTheme & ExtendedThemeOptions;

export const theme: any = {
  breakpoints: {
    values: {
      sm: 450,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1728,
      xxxl: 1920,
    },
  },
  euStyles: {
    maxWidth: 1720,
    tabMaxWidth: 700,
  },
  palette: {
    primary: {
      main: "#35ACE1",
    },
  },
  euDesign: {
    font: {
      montserrat: "Montserrat, sans-serif",
      lobster: "Lobster, cursive",
      poppins: "Poppins, sans-serif",
    },
    colors: {
      black: "#000000",
      black_neutral: "#0F111A",
      black_neutral_200: "#5C5D66",
      black_neutral_700: "#2B2C33",
      secondary_main: "#E32D4C",
      secondary_100: "#FFEAEE",
      secondary_400: "#FD6F87",
      grey_main: "#333333",
      gold: "#F2C94C",
      gold_100: "#EFA52E",
      white: "#ffffff",
      primary: "#35ACE1",
      primary_400: "#51C9FF",
      neutral_100: "#C4C0CC",
      neutral_200: "#FAFAFA",
      neutral_300: "#F2F2F2",
      neutral_400: "#C0C2CC",
      neutral_500: "#909199",
      neutral_600: "#5C5D66",
      neutral_black: "#272727",
      green_base: "#15AE5C",
      green_primary: "#0A7227",
      danger: "#EB0029",
      medium_white: "#f5f5f5",
      light_grey: "#E0E0E0",
      grey: "#939099",
    },
    typography: {
      h1: 56,
      h2: 48,
      h3: 36,
      h4: 32,
      h5: 24,
      bodyLg: 20,
      bodySm: 16,
      bodyMin: 14,
      caption: 12,
      buttonLg: 14,
      overlineSmall: 12,
      headerLink: 20,
      overline: 18,
      price: 28,
      cardHeading: 20,
      fontSize: 12,
      fontWeightBold: 700,
      fontWeightRegular: 400,
      fontWeightRegularExtra: 500,
      fontWeightSemiBold: 600,
      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
    },
    shadows: {
      100: "#0000001a",
      200: "#00000000",
      400: "rgba(0,0,0,0)",
      500: "rgba(0,0,0,.7)",
      600: "rgba(0, 0, 0 ,0.1)",
      rgba: {
        100: "rgba(0, 0, 0, 0.1)",
      },
      700: "rgba(0,0,0,0.35)",
    },
    background: {
      secondary_100: "#FD6F87",
    },
    getShadow: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
  },
};

export default createTheme(theme);
