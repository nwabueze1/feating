import { useSelector } from "react-redux";
import { BlockConfigType } from "../types";
import { EuState } from "./store";

export const useGetConfiguration = () => {
  const getFonts = useGetFonts();

  return (config: BlockConfigType["configuration"], paletteSelector: string, getMapped: (colors: Record<string, string>) => Record<string, string>) => ({
    fonts: getFonts(config),
    colors: getMapped(config?.colors?.[paletteSelector]),
  });
};

export const useGetFonts = () => {
  const { fonts } = useSelector<EuState, EuState>((store) => store);

  return (configuration: BlockConfigType["configuration"]) => {
    if (!fonts || !configuration?.fonts) return {};

    const parsedFonts: { [key: string]: string } = {};

    Object.entries(configuration?.fonts).map(([key, value]) => {
      let font: string;

      if (!value.includes("font")) font = value;
      else {
        const [, fontKey] = value.split(".");
        font = fonts[fontKey];
      }

      parsedFonts[key] = font;
    });

    return parsedFonts;
  };
};

export enum BlockLayouts {
  LAYOUT_1 = "layout-1",
  LAYOUT_2 = "layout-2",
  LAYOUT_3 = "layout-3",
  LAYOUT_4 = "layout-4",
  LAYOUT_5 = "layout-5",
}

export const transformMenu = (menu: Record<string, any>) => ({
  ...menu,
  activeMenuCategories: menu?.activeMenuCategories?.map((item: any) => ({
    ...item,
    image: item.menuItems[0]?.image,
    menuItems: item.menuItems.map((content: any) => ({ ...content, url: `/products?product_uuid=${content?.uuid}` })),
  })),
});

export const defaultButtonColor = {
  "100": "primary.main",
  "200": "primary.400",
  "300": "neutral.100",
  "400": "neutral.200",
};

export const getDateDuration = (dateStr: string): string => {
  const currentDate = new Date();
  const date = new Date(dateStr);
  const timestamp = date.getTime() + (new Date().getTimezoneOffset() ?? 0) * -1 * 60 * 1000;
  const givenDate = new Date(timestamp);

  const timeDiffMs = currentDate.getTime() - givenDate.getTime();
  const timeDiffSeconds = Math.floor(timeDiffMs / 1000);
  const timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
  const timeDiffHours = Math.floor(timeDiffMinutes / 60);
  const timeDiffDays = Math.floor(timeDiffHours / 24);
  const timeDiffWeeks = Math.floor(timeDiffDays / 7);
  const timeDiffMonths = Math.floor(timeDiffDays / 30);
  const timeDiffYears = Math.floor(timeDiffDays / 365);

  if (timeDiffYears > 0) {
    return `${timeDiffYears} year${timeDiffYears === 1 ? "" : "s"} ago`;
  } else if (timeDiffMonths > 0) {
    return `${timeDiffMonths} month${timeDiffMonths === 1 ? "" : "s"} ago`;
  } else if (timeDiffWeeks > 0) {
    return `${timeDiffWeeks} week${timeDiffWeeks === 1 ? "" : "s"} ago`;
  } else if (timeDiffDays > 0) {
    return `${timeDiffDays} day${timeDiffDays === 1 ? "" : "s"} ago`;
  } else if (timeDiffHours > 0) {
    return `${timeDiffHours} hour${timeDiffHours === 1 ? "" : "s"} ago`;
  } else if (timeDiffMinutes > 0) {
    return `${timeDiffMinutes} minute${timeDiffMinutes === 1 ? "" : "s"} ago`;
  } else {
    return `${timeDiffSeconds} second${timeDiffSeconds === 1 ? "" : "s"} ago`;
  }
};
