import { FC, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useEuBlock10Styles } from ".";
import { BiMenu, BiShoppingBag } from "react-icons/bi";
import clx from "classnames";
import { BlockConfigType } from "../../types";
import { useSelectedLayout } from "../../hooks";
import { Drawer, NavLogo, SearchBar, NavListItem, NavButtonContainer } from "./components";
import { useNavActionStyles } from "./iconStyles";
import { EuState, useGetConfiguration } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { useGetColor } from "../../hooks";
import { useMediaQuery, useTheme } from "@mui/material";
import block10 from "../../mappings/block10";

const { uuid: BLOCK_UUID } = block10;

export const EuBlock10: FC<BlockConfigType> = ({ content, mode = "view", index, handleSelect, activeElement, configuration, screenSize, ...props }) => {
  const { restaurant } = useSelector<EuState, EuState>((store) => store);
  const layout = useSelectedLayout(props.layouts);
  const [openDrawer, setOpenDrawer] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(configuration, "main", getMappedColor);
  const actionClass = useNavActionStyles(blockConfig);
  const classes = useEuBlock10Styles(blockConfig);
  const key = "blocks." + String(index);
  const cartItemCount = restaurant?.cart ? (restaurant?.cart?.cartItems?.length as number) : restaurant?.cartItemCount !== undefined ? restaurant?.cartItemCount : 0;
  const theme = useTheme();
  const isLayout1Or3 = ["layout-1", "layout-3"].includes(layout as string);
  const [openSearch, setOpenSearch] = useState(isLayout1Or3);
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const toggleSearch = () => {
    if (mode === "edit" || !searchRef?.current?.value) return;

    window.location.href = `/search?query=${searchRef.current.value}`;
  };

  const toggleSearchDisplay = () => {
    if (isLayout1Or3) return;

    setOpenSearch(!openSearch);
  };

  const toggleScroll = () => {
    if (!window) return;
    document.body.style.overflow = openDrawer ? "auto" : "hidden";
  };

  const toggleDrawer = () => {
    toggleScroll();
    setOpenDrawer(!openDrawer);
  };

  const handleClose = () => {
    toggleScroll();
    setOpenDrawer(false);
  };

  const renderNavLinks = () =>
    content?.links?.map((link: { text: string; url: string }, index: number) => (
      <NavListItem key={index} href={link?.url} mode={mode}>
        {link?.text}
      </NavListItem>
    ));

  if (typeof window !== undefined) {
    if (openDrawer && lg) {
      document.body.style.overflow = "auto";
      setOpenDrawer(false);
    }
  }

  return (
    <BlockProvider colors={blockConfig.colors} fonts={blockConfig.fonts} block_uuid={BLOCK_UUID}>
      <div
        className={clx(mode === "edit" && activeElement === key && classes.block10ActiveElement, classes.base)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={clx(classes.block)}>
          <div className={classes.root}>
            <div className={classes.container}>
              <nav className={clx(classes.navBar, layout)}>
                <NavLogo layout={layout as string} screenSize={screenSize} image={content?.image} text={content?.text?.main} url={mode === "view" ? "/" : undefined} />
                <ul className={clx(classes.navList, layout)}>{renderNavLinks()}</ul>
                <button className={clx(actionClass.toggleButton, layout)} onClick={toggleDrawer}>
                  <BiMenu className={actionClass.toggleIcon} />
                </button>
                <SearchBar ref={searchRef} layout={layout as string} openSearch={openSearch} toggleSearch={toggleSearch} toggleSearchDisplay={toggleSearchDisplay} />
                <NavButtonContainer layout={layout as string}>
                  <a href={mode === "view" ? "/cart" : undefined} className={clx(actionClass.cartButton, layout)}>
                    <span className={actionClass.cartIconContainer}>
                      <BiShoppingBag className={actionClass.cartIcon} />
                      <span className={actionClass.badge}>{cartItemCount}</span>
                    </span>
                    <span>Cart</span>
                  </a>
                </NavButtonContainer>
              </nav>
            </div>
          </div>
          <div className={clx(actionClass.overlay, openDrawer && "active")} onClick={handleClose}></div>
        </div>
        <Drawer open={openDrawer} links={content?.links as any[]} onClose={handleClose} layout={layout} numberOfItemsInCart={content?.cart?.numberOfItems} mode={mode} />
      </div>
    </BlockProvider>
  );
};
