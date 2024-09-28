import { ReactNode } from "react";
export type SwipeAblePropsType = {
  children: ReactNode | JSX.Element;
  numberOfItems: number;
  style: React.CSSProperties;
  padding: number;
};
