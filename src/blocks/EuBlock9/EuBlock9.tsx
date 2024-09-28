import { useMediaQuery, useTheme } from "@mui/material";
import clx from "classnames";
import { FC } from "react";
import { BlockConfigType } from "types";
import { BlockProvider } from "../../BlockProvider";
import { Card } from "../../components/Card";
import { BlockLayouts, useGetConfiguration } from "../../helpers";
import { useSelectedLayout } from "../../hooks";
import { useGetColor } from "../../hooks/useGetColor";
import block9 from "../../mappings/block9";
import { CoreMenuItemFields } from "../../models";
import { useEuBlock9Styles } from "./styles";
import { decodeText } from "../../helpers/decodeText";
const { uuid: BLOCK_UUID } = block9;

export const EuBlock9: FC<BlockConfigType> = ({ configuration, mode = "view", index, activeElement, handleSelect, content, ...props }) => {
  const { getMappedColor } = useGetColor();
  const menuItems = content?.menu_items;
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(configuration, "main", getMappedColor);
  const buttonConfig = getConfiguration(configuration, "button", getMappedColor);
  const classes = useEuBlock9Styles(blockConfig);
  const layout = useSelectedLayout(props.layouts);
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const key = "blocks." + String(index);

  const renderProducts = () => {
    return menuItems.map((item: CoreMenuItemFields, index: number) =>
      xl && index > 5 ? null : (
        <div className={classes.cardContent} key={index}>
          <Card
            mode={mode}
            numberOfLines={1}
            showShadow={layout === BlockLayouts.LAYOUT_2}
            imageHeight={235}
            title={item?.name}
            image={item?.image}
            key={index}
            price={item?.price}
            currency={item?.menu?.restaurant?.bank_info?.currency ?? ""}
            colors={{ currency: blockConfig?.colors?.[200], action: { color: buttonConfig?.colors?.[100], background: buttonConfig?.colors?.[300] } }}
            subtitle={item?.description}
            action={{
              title: "View",
              href: item?.slug ?? "",
            }}
          />
        </div>
      )
    );
  };

  return (
    <BlockProvider fonts={buttonConfig.fonts} colors={buttonConfig.colors} block_uuid={BLOCK_UUID}>
      <section
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block9ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={classes.blockContainer}>
          <header className={clx(classes.blockHeader, layout)}>
            <p className={classes.blockOverline}>{decodeText(content?.text?.overline)}</p>
            <h4 className={classes.blockHeading}>{decodeText(content?.text?.title)}</h4>
            <p className={classes.blockCaption}>{decodeText(content?.text?.subtitle)}</p>
          </header>
          <div className={clx(classes.productBlock, "card-container", "auto")}>{renderProducts()}</div>
        </div>
      </section>
    </BlockProvider>
  );
};
