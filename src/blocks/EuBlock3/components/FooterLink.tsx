import { FC } from "react";
import clx from "classnames";
import { useBlock3ComponentStyes, FooterLinkPropsType } from "./";
import { BlockStoreType } from "../../../types";
import { useBlockSelector, useRecordLinkClick } from "../../../helpers";

export const FooterLink: FC<FooterLinkPropsType> = ({ children, layout, href = "", mode }) => {
  const classes = useBlock3ComponentStyes();
  const config = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = () => {
    mode === "view" && recordLinkClick(String(children), href ?? "", config.block_uuid);
  };

  return (
    <a href={mode === "view" ? href : undefined} className={clx(classes.footerListItemLink, layout)} onClick={handleClick}>
      {children}
    </a>
  );
};
