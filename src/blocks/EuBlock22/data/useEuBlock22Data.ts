import { BlockConfigType } from "../../../types";
import theme from "../../../theme";

export const useEuBlock22Data = () => {
  const configuration: BlockConfigType = {
    content: {},
    configuration: {
      colors: {
        main: {
          100: "neutral.black",
        },
      },
      fonts: {
        heading: theme.euDesign.font.poppins,
        body: theme.euDesign.font.poppins,
      },
    },

    layouts: [],
  };
  return {
    configuration,
  };
};
