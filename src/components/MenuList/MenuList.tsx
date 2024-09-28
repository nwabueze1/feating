import { FC, useState } from "react";
import { MenuListType } from "./type";
import { useMenuListStyles } from "./styles";
import { MenuListItem } from "./MenuListItem/MenuListItem";
import clx from "classnames";
import { SwipeAble } from "../";
import { useMediaQuery, useTheme } from "@mui/material";
import { BlockStoreType } from "../../types";
import { useBlockSelector } from "../../helpers";

export const MenuList: FC<MenuListType & { showMobile?: boolean; data: MenuListType[]; onSelectMenu: (menu: any) => void }> = ({ ...props }) => {
  const config = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);

  const classes = useMenuListStyles(config);
  const [current, setCurrent] = useState(0);
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderMenu = () => props?.data?.map((item, i) => <MenuListItem {...props} title={item.title} image={item.image} key={i} onClick={() => handleMenuClick(item, i)} active={i === current} />);
  const handleMenuClick = (item: any, index: number) => {
    setCurrent(index);
    props.onSelectMenu(item);
  };

  const renderWebMenu = () => (
    <div className={clx(classes.root, props.showMobile && "mobile")}>
      {props?.data?.map((item, i) => {
        return <MenuListItem {...props} title={item?.title} image={item?.image} key={i} onClick={() => handleMenuClick(item, i)} active={i === current} />;
      })}
    </div>
  );
  if (props.showMobile || isMobile)
    return (
      <div className={classes.mobileContainer} style={{ borderRadius: props.noLeftBorderRadius ? "36px 0px 0px 36px" : "36px" }}>
        {lg ? (
          <SwipeAble styles={{ justifyContent: lg ? "center" : undefined }} gap={props?.gap}>
            {renderMenu()}
          </SwipeAble>
        ) : (
          <SwipeAble gap={props.gap}>{renderMenu()}</SwipeAble>
        )}
      </div>
    );

  return <div className={clx(classes.container, props.showMobile && "mobile")}>{props.noScroll ? <div>{renderWebMenu()}</div> : <SwipeAble gap={props.gap}>{renderWebMenu()}</SwipeAble>}</div>;
};
