import { MediaValue } from "../../helpers";
import { Blocks } from "./../../enumerations/blockNames";
import { ReactNode } from "react";

export type ListPropsType = {
  heading: string | ReactNode;
  image: MediaValue;
  body: string | ReactNode;
  reverseItems?: boolean;
  block?: Blocks;
  screenSize?: number;
};
