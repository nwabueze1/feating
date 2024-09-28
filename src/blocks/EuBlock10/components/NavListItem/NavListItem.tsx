import { useEffect, useState } from "react";
import { BlockStoreType } from "../../../../types";
import { useNavListItemStyles } from "./";
import clx from "classnames";
import { useBlockSelector, useRecordLinkClick } from "../../../../helpers";

export const NavListItem = (props: { children?: any; href?: string; mode?: "view" | "edit" }) => {
  const blockConfig = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const classes = useNavListItemStyles(blockConfig);
  const [active, setActive] = useState(false);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = () => {
    props.mode === "view" && recordLinkClick(String(props.children), props.href ?? "", blockConfig.block_uuid);
  };

  useEffect(() => {
    const active = window.location.pathname.includes(props.href as string);
    setActive(active);
  }, []);

  return (
    <li className={classes.navListItem}>
      <a href={props?.mode === "view" ? props.href : undefined} className={clx(classes.navLink, active && "active")} onClick={handleClick}>
        {props.children}
      </a>
    </li>
  );
};
