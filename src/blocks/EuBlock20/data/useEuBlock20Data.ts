import { BlockConfigType } from "../../../types";
import theme from "../../../theme";
import { BlockLayouts } from "../../../helpers";

export const useEuBlock20Data = () => {
  const configuration: BlockConfigType = {
    content: {
      text: {
        overline: "All Articles",
        main: "Curated just for you",
        subtext: "",
        postTitle: "The Articles that you can never resist",
      },
      post_uuid: null,
    },
    configuration: {
      colors: {
        main: {
          100: "primary.main",
          200: "neutral.black",
          300: "neutral.black",
          400: "neutral.100",
          500: "secondary.300",
          600: "neutral.100",
          700: "secondary.100",
        },
        menu: {
          100: "neutral.300",
          200: "secondary.400",
          300: "neutral.100",
          400: "primary.100",
          500: "primary.main",
          600: "neutral.200",
          700: "neutral.black",
        },
        button: {
          "100": "primary.main",
          "300": "neutral.100",
        },
      },
      fonts: {
        heading: theme.euDesign.font.poppins,
        body: theme.euDesign.font.poppins,
      },
    },
    ssr_network_operation: "GET_POST",
    ssr_content_fields: ["post"],
    layouts: [
      {
        name: BlockLayouts.LAYOUT_1,
        isSelected: true,
      },
      {
        name: BlockLayouts.LAYOUT_2,
        isSelected: false,
      },
      {
        name: BlockLayouts.LAYOUT_3,
        isSelected: false,
      },
      {
        name: BlockLayouts.LAYOUT_4,
        isSelected: false,
      },
      {
        name: BlockLayouts.LAYOUT_5,
        isSelected: false,
      },
    ],
  };
  return {
    configuration,
  };
};
