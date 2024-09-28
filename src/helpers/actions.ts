import { Blocks } from "./../enumerations/blockNames";

export const getColorConfig = (
  payload: { [key: string]: string } | undefined = {
    "100": "#35ACE1",
    "200": "#51C9FF",
    "300": "#FFFFFF",
    "400": "#FAFAFA",
  }
) => ({
  type: "GET_COLOR_CONFIG",
  payload,
});

export const getBlockConfiguration = (payload: {
  name: string;
  configuration: {
    fonts: {
      [key: string]: string;
    };
    colors: {
      [key: string]: Record<string, string>;
    };
  };
}) => ({
  type: "GET_BLOCK_CONFIGURATION",
  payload: {
    [payload.name]: payload.configuration,
  },
});
export const storeConfiguration = (payload: {
  name: Blocks;
  configurations: {
    fonts: {
      [key: string]: string;
    };
    colors: {
      [key: string]: {
        [key: string]: any;
      };
    };
  };
}) => ({
  type: "STORE_CONFIGURATION",
  payload: {
    [payload.name]: payload.configurations,
  },
});

export const getButtonConfiguration = (
  payload: Record<string, string> = {
    "100": "#35ACE1",
    "200": "#51C9FF",
    "300": "#FFFFFF",
    "400": "#FAFAFA",
  }
) => ({
  type: "GET_BUTTON_CONFIGURATION",
  payload,
});
