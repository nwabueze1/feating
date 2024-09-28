import { MediaValue } from "../../helpers";

export type MenuListType = {
  title?: string;
  link?: string;
  active?: boolean;
  onClick?: () => void;
  image?: MediaValue;
  gap?: string;
  noScroll?: boolean;
  noLeftBorderRadius?: boolean;
};
