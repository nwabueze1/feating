import { TEuState } from "../types";
import { useSelector } from "react-redux";

export const useGetColor = () => {
  const { colors } = useSelector<TEuState, TEuState>((store) => store);

  const getGlobalColor = (color: string) => {
    if (color.startsWith("#")) return color;

    const splitted = color.split(".");
    return colors?.[splitted[0]]?.[splitted[1]] ?? "";
  };

  const getMappedColor = (colors: Record<string, string>): Record<string, string> => {
    const hexColors: Record<string, string> = {};
    for (const [key, value] of Object.entries(colors)) {
      hexColors[key] = getGlobalColor(value);
    }

    return hexColors;
  };

  return {
    getMappedColor,
  };
};
