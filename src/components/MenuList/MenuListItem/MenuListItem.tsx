import { FC } from "react";
import { MenuListType } from "../type";
import { useMenuListItem } from "./styles";
import clx from "classnames";
import { BlockStoreType } from "../../../types";
import { useBlockSelector, createImageSrcset, imageSizes } from "../../../helpers";

export const MenuListItem: FC<Omit<MenuListType, "link"> & { showMobile?: boolean }> = ({ active = false, title, onClick, showMobile, ...props }) => {
  const configuration = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);
  const classes = useMenuListItem(configuration);
  const activeClass = active ? "active" : "";
  return (
    <div className={clx(classes.container, active && activeClass, showMobile && "mobile")} onClick={onClick}>
      {<div className={clx(classes.image_container)}>{props.image && <img srcSet={createImageSrcset(props?.image)} src={props?.image?.src} sizes={imageSizes} className={classes.image} />}</div>}
      <p className={clx(classes.title, activeClass)}>{(title ?? "").charAt(0)?.toUpperCase() + (title ?? "")?.slice(1)?.toLowerCase()}</p>
    </div>
  );
};
