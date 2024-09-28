import { BlockConfigType } from "../../types";
import { ChangeEvent, FC, useState, useEffect } from "react";
import { useEuBlock13Styles, SearchBar } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration } from "../../helpers";
import { Card, MenuList } from "../../components";
import { BlockProvider } from "../../BlockProvider";
import { mapMenuCategory } from ".";
import { useMediaQuery, useTheme } from "@mui/material";
import { ClientMenuFields } from "./initialMenuState";
import block13 from "../../mappings/block13";
import { decodeText } from "../../helpers/decodeText";
const { uuid: BLOCK_UUID } = block13;

export const EuBlock13: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(props.configuration, "main", getMappedColor);
  const menuConfig = getConfiguration(props.configuration, "menu", getMappedColor);
  const classes = useEuBlock13Styles(blockConfig);
  const layout = useSelectedLayout(props.layouts);
  const menu = content?.menu as ClientMenuFields;
  const menuCategories = menu?.menuCategories;
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories?.length > 0 ? menuCategories[0]?.uuid : "");
  const theme = useTheme();
  const lgScreens = useMediaQuery(theme.breakpoints.down("lg"));
  const layout2or3or4 = ["layout-2", "layout-3", "layout-4"];
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [initialSearchValue, setInitialSearchValue] = useState("");
  const [filteredDish, setFilteredDish] = useState<any[]>([]);
  const key = "blocks." + String(index);

  useEffect(() => {
    setActiveCategoryId(menuCategories?.length > 0 ? menuCategories[0]?.uuid : "");
  }, [menuCategories]);

  const renderMenuCategory = (showMobile?: boolean) => (
    <BlockProvider fonts={menuConfig.fonts} colors={menuConfig.colors} block_uuid={BLOCK_UUID}>
      <MenuList noScroll gap={sm ? "1px" : undefined} onSelectMenu={(item) => setActiveCategoryId(item.uuid)} data={mapMenuCategory(menu)} showMobile={showMobile} />
    </BlockProvider>
  );

  const getActiveMenuItems = (menu_category_uuid: string) => menu?.menuItems?.filter((item) => item?.menuCategory?.uuid === menu_category_uuid);

  const resetSearch = () => {
    setFilteredDish([]);
    setInitialSearchValue("");
  };

  const handleSearch = () => {
    if (initialSearchValue.length === 0) return;
    setFilteredDish(getActiveMenuItems(activeCategoryId)?.filter((item) => item.name.toLocaleLowerCase().includes(initialSearchValue.toLocaleLowerCase())) as any[]);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return resetSearch();
    const value = e.target.value.toLowerCase();
    setInitialSearchValue(value);
    setFilteredDish(getActiveMenuItems(activeCategoryId)?.filter((item) => item.name.toLocaleLowerCase().includes(value)) as any[]);
  };

  const renderProducts = () =>
    (filteredDish.length > 0 ? filteredDish : initialSearchValue ? [] : getActiveMenuItems(activeCategoryId))?.map((value: any, index: number) => (
      <Card
        key={index}
        title={value.name}
        price={value.price}
        rating={4}
        image={value?.image}
        subtitle={value.description}
        numberOfLines={2}
        mode={mode}
        currency={menu?.restaurant?.bank_info?.currency ?? ""}
        action={{
          title: "View",
          href: value?.slug,
        }}
        colors={{ currency: blockConfig?.colors?.[100], action: { color: menuConfig?.colors?.[500], background: menuConfig?.colors?.[300] } }}
      />
    ));

  return (
    <BlockProvider fonts={blockConfig.fonts} colors={blockConfig.colors} block_uuid={BLOCK_UUID}>
      <section
        className={clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block13ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={classes.container}>
          <header className={clx(classes.blockHeading, layout)}>
            <p className={classes.overline}>{decodeText(content?.text?.overline)}</p>
            <h4 className={classes.title}>{decodeText(content?.text?.main)}</h4>
            <p className={classes.caption}>{decodeText(content?.text?.subtext)}</p>
            {sm && !layout2or3or4.includes(layout ?? "") && <h6 className={classes.menuTitle}>{content?.text?.menuTitle}</h6>}
          </header>
          <div>
            <div className={classes.horizontalMenuContainer}>{(lgScreens || layout2or3or4.includes(layout as string)) && renderMenuCategory(true)}</div>
            <div className={classes.menuHeader}>
              <div className={clx(classes.menuHeading, layout)}>
                <h6 className={classes.menuTitle}>{decodeText(content?.text?.menuTitle)}</h6>
              </div>
              <div className={clx(classes.menuSearchBar, layout)}>
                <SearchBar value={initialSearchValue} onChange={handleSearchChange} onSubmit={handleSearch} />
              </div>
            </div>
            <article className={classes.block}>
              <div className={clx(classes.menuCategoryContainer, layout)}>{renderMenuCategory()}</div>
              <div className={clx(classes.menuItemsContainer, layout)}>{renderProducts()}</div>
            </article>
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
