import { BlockConfigType } from "../../../types";

export const useEuBlock21Data = () => {
  const configuration: BlockConfigType = {
    configuration: {
      colors: {
        main: {
          100: "primary.main",
          300: "secondary.200",
          400: "neutral.600",
          500: "neutral.black",
          600: "secondary.300",
          700: "neutral.100",
          800: "secondary.200",
          900: "neutral.500",
          1000: "secondary.main",
        },
      },
      fonts: {
        heading: "Poppins",
        body: "Poppins",
      },
    },
    content: {},
    layouts: [
      {
        name: "layout-1",
        isSelected: true,
      },
    ],
  };

  return {
    configuration,
  };
};
