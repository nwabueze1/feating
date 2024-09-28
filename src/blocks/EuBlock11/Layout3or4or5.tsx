import { BlockConfigType } from "../../types";
import { FC } from "react";
import { useEuBlock11Styles, useLayoutStyles } from ".";
import { Button } from "../../components";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { BlockLayouts, useGetConfiguration, createImageSrcset, imageSizes, getCurrency } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { useMediaQuery, useTheme } from "@mui/material";
import block11 from "../../mappings/block11";

const { uuid: BLOCK_UUID } = block11;

export const EuBlock11Layout3or4or5: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const buttonConfig = getConfiguration(props.configuration, "button", getMappedColor);
  const config = getConfiguration(props.configuration, "main", getMappedColor);
  const classes = useEuBlock11Styles(config);
  const layoutClass = useLayoutStyles(config);
  const layout = useSelectedLayout(props.layouts);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const menuItem = content?.menu_item;
  const key = "blocks." + String(index);

  const isLayout3or4 = layout === BlockLayouts.LAYOUT_3 || layout === BlockLayouts.LAYOUT_4;

  const renderButton = () => (
    <BlockProvider colors={buttonConfig.colors} fonts={buttonConfig.fonts} block_uuid={BLOCK_UUID}>
      <Button mode={mode} href={`${content?.url}/menu/menu-items?uuid=`} variant="contained" size="medium" style={{ marginRight: 0, whiteSpace: "nowrap" }}>
        Order now
      </Button>
    </BlockProvider>
  );

  return (
    <section
      className={clx(classes.root, mode === "edit" && key === activeElement && classes.block11ActiveElement)}
      onClick={() => {
        mode === "edit" && handleSelect?.(key);
      }}
    >
      <div className={classes.container}>
        <article className={clx(classes.block, layoutClass.block, layout)}>
          <div className={clx(layoutClass.textContainer, layout, "block-content")}>
            <header className={clx(layoutClass.header, layout)}>
              <div className={layoutClass.blockHeading}>
                <p className={clx(classes.blockOverline, layoutClass.blockOverline, layout)}>{content?.text?.overline}</p>
                <h4 className={clx(classes.blockHeading, layoutClass.heading, layout)}>{menuItem?.name}</h4>
                <p className={clx(classes.blockSubtitle, layoutClass.blockSub, layout)}>{menuItem?.description}</p>
              </div>
            </header>
            <div className={clx(layoutClass.blockAction, layout)}>
              <h6 className={clx(classes.price, layoutClass.price)}>
                <span className={classes.currency}>{getCurrency(menuItem?.menu?.restaurant?.bank_info?.currency)}</span> {menuItem?.price}
              </h6>
              <div className={clx(classes.buttonContainer, layout)}>{renderButton()}</div>
            </div>
          </div>
          {isLayout3or4 && sm ? null : (
            <img srcSet={createImageSrcset(menuItem?.image)} src={menuItem?.image?.src} sizes={imageSizes} alt={menuItem?.alternative_text} className={clx(layoutClass.image, layout)} />
          )}
        </article>
      </div>
      {isLayout3or4 && sm && <div style={{ backgroundImage: `url("${menuItem?.image?.src}")` }} className={clx(classes.imageBackground, layout)}></div>}
    </section>
  );
};
