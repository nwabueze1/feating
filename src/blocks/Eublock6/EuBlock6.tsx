import { BlockConfigType } from "../../types";
import { BlockLayouts, useGetConfiguration } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { useEuBlock6Styles, useItemStyles, useMenuStyles, transformMenu } from "./";
import { CoreMenuFields, CoreMenuFields_menuCategories, CoreMenuItemFields } from "../../models";
import { FC, useState, useEffect } from "react";
import { Card, MenuList } from "../../components";
import { useGetColor } from "../../hooks/useGetColor";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { MenuListType } from "../../components/MenuList/type";
import block6 from "../../mappings/block6";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";

const { uuid: BLOCK_UUID } = block6;

export const EuBlock6: FC<BlockConfigType> = ({ content, layouts, mode = "view", index, activeElement, handleSelect, configuration, screenSize }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(configuration, "main", getMappedColor);
  const menuConfig = getConfiguration(configuration, "menu", getMappedColor);
  const classes = useEuBlock6Styles(blockConfig);
  const menuClass = useMenuStyles(menuConfig);
  const itemClasses = useItemStyles();
  const layout = useSelectedLayout(layouts);
  const theme = useTheme();
  const show3rows = useMediaQuery(theme.breakpoints.down(1440));
  const menu = content?.menu as CoreMenuFields;
  const menuCategories = menu?.menuCategories;
  const [activeCategoryUuid, setActiveCategoryUuid] = useState(menuCategories?.length > 0 ? menuCategories[0]?.uuid : "");
  const key = "blocks." + String(index);

  useEffect(() => {
    setActiveCategoryUuid(menuCategories?.length > 0 ? menuCategories[0]?.uuid : "");
  }, [menuCategories]);

  const getHeading = () => (
    <>
      <p className={clx(classes.headerOverline, layout)}>{decodeText(content?.text?.overline)}</p>
      <h4 className={clx(classes.headerTitle, layout)}>{decodeText(content?.text?.heading)}</h4>
      <p className={clx(classes.caption, layout)}>{decodeText(content?.text?.caption)}</p>
    </>
  );

  function getItemToDisplay(menuItems: CoreMenuItemFields[]): CoreMenuItemFields[] {
    const content: CoreMenuItemFields[] = [];
    const getNumberOfItems = show3rows ? 6 : 8;
    for (let i = 0; i < getNumberOfItems; i++) {
      if (!menuItems[i]) return content;
      content.push(menuItems[i]);
    }
    return content;
  }

  const handleFindActiveMenuCategoryIndex = (menuCategory: CoreMenuFields_menuCategories) => {
    setActiveCategoryUuid(menuCategory?.uuid);
  };

  const activeMenuItems = transformMenu(menu)?.menuItems?.filter((item) => item?.menuCategory?.uuid === activeCategoryUuid);
  const renderProducts = () =>
    getItemToDisplay(activeMenuItems ?? [])?.map((menuItem, index) => (
      <div className={clx(itemClasses.cardContent, layout)} key={index}>
        <Card
          action={{
            href: menuItem?.slug ?? "",
            title: "View",
          }}
          screenSize={screenSize}
          rating={5}
          title={menuItem.name}
          subtitle={menuItem.description}
          price={menuItem.price}
          image={menuItem?.image}
          key={index}
          mode={mode}
          currency={menu?.restaurant?.bank_info?.currency ?? ""}
          colors={{ action: { color: menuConfig?.colors?.[500], background: menuConfig?.colors?.[300] } }}
        />
      </div>
    ));

  const renderMenuList = (showMobile = false) => (
    <BlockProvider fonts={menuConfig.fonts} colors={menuConfig.colors} block_uuid={BLOCK_UUID}>
      <MenuList showMobile={showMobile} data={transformMenu(menu).menuCategories as any as MenuListType[]} onSelectMenu={handleFindActiveMenuCategoryIndex} />
    </BlockProvider>
  );

  return (
    <BlockProvider colors={blockConfig.colors} fonts={blockConfig.fonts} block_uuid={BLOCK_UUID}>
      <section
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block6ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <article className={classes.container}>
          <div className={classes.block}>
            {layout === BlockLayouts.LAYOUT_3 && <div>{getHeading()}</div>}
            <div className={clx(classes.header, layout)}>
              <div className={(classes.heading, layout)}>{layout !== BlockLayouts.LAYOUT_3 && getHeading()}</div>
            </div>
          </div>
          {layout === BlockLayouts.LAYOUT_3 && <div className={clx(menuClass.menuContent, layout)}>{renderMenuList(true)}</div>}
          <div className={clx(itemClasses.menuBlock, layout)}>
            <div className={menuClass.menuContent}>{layout !== BlockLayouts.LAYOUT_3 && renderMenuList()}</div>
            <div className={clx(itemClasses.menuContent, layout)}>
              <div className={clx(itemClasses.cardContainer, layout)}>{renderProducts()}</div>
            </div>
          </div>
        </article>
      </section>
    </BlockProvider>
  );
};
