import { FC } from "react";
import clx from "classnames";
import { useBlock3ComponentStyes, FooterListItemPropsType } from "./";

export const FooterListItem: FC<FooterListItemPropsType> = ({ children, layout }) => {
  const classes = useBlock3ComponentStyes();

  return <li className={clx(classes.footerListItem, layout)}>{children}</li>;
};
