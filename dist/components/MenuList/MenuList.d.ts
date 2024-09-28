import { FC } from "react";
import { MenuListType } from "./type";
export declare const MenuList: FC<MenuListType & {
    showMobile?: boolean;
    data: MenuListType[];
    onSelectMenu: (menu: any) => void;
}>;
