import { FC } from "react";
import { MenuListType } from "../type";
export declare const MenuListItem: FC<Omit<MenuListType, "link"> & {
    showMobile?: boolean;
}>;
