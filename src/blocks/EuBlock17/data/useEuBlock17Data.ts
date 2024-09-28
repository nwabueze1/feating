import { BlockConfigType } from "../../../types";
import { BlockLayouts as Layouts } from "../../../helpers";

export const useEuBlock17Data = () => {
  const configuration: BlockConfigType = {
    content: {
      text: {
        header: "Your Cart",
      },
      site_uuid: null,
    },
    configuration: {
      colors: {
        main: {
          100: "secondary.100",
          200: "neutral.black",
          300: "primary.main",
          400: "neutral.400",
          500: "neutral.100",
          600: "alert.error",
          700: "neutral.300",
          800: "neutral.200",
          900: "secondary.300",
          1000: "neutral.100",
          1100: "primary.300",
        },
        button: {
          "100": "primary.main",
          "200": "primary.400",
          "300": "neutral.100",
          "400": "neutral.200",
        },
      },
      fonts: {
        heading: "fonts.body",
        body: "fonts.body",
      },
    },
    layouts: [
      {
        name: Layouts.LAYOUT_1,
        isSelected: true,
      },
      {
        name: Layouts.LAYOUT_2,
        isSelected: false,
      },
      {
        name: Layouts.LAYOUT_3,
        isSelected: false,
      },
      {
        name: Layouts.LAYOUT_4,
        isSelected: false,
      },
      {
        name: Layouts.LAYOUT_5,
        isSelected: false,
      },
    ],
  };
  return {
    configuration,
  };
};
