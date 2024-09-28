import clx from "classnames";
import { FC } from "react";
import { EuBlock11Layout3or4or5, useEuBlock11Styles } from ".";
import { BlockProvider } from "../../BlockProvider";
import { Button } from "../../components";
import { BlockLayouts, getCurrency, useGetConfiguration } from "../../helpers";
import { useGetColor, useSelectedLayout } from "../../hooks";
import block11 from "../../mappings/block11";
import { BlockConfigType } from "../../types";
import { decodeText } from "../../helpers/decodeText";

const { uuid: BLOCK_UUID } = block11;

export const EuBlock11: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const buttonConfig = getConfiguration(props.configuration, "button", getMappedColor);
  const config = getConfiguration(props.configuration, "main", getMappedColor);
  const classes = useEuBlock11Styles(config);
  const layout = useSelectedLayout(props.layouts);
  const blockProps = { content, mode, index, activeElement, handleSelect, ...props };
  const key = "blocks." + String(index);

  const isLayout3or4or5 = [BlockLayouts.LAYOUT_3, BlockLayouts.LAYOUT_4, BlockLayouts.LAYOUT_5].includes(layout as BlockLayouts);

  const renderButton = () => (
    <BlockProvider colors={buttonConfig.colors} fonts={buttonConfig.fonts} block_uuid={BLOCK_UUID}>
      <Button href={mode === "view" ? content?.menu_item?.slug : undefined} variant="contained" size="medium" style={{ margin: 0, whiteSpace: "nowrap" }}>
        Order now
      </Button>
    </BlockProvider>
  );

  if (isLayout3or4or5) return <EuBlock11Layout3or4or5 {...blockProps} />;

  return (
    <section
      className={clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block11ActiveElement)}
      onClick={() => {
        mode === "edit" && handleSelect?.(key);
      }}
      style={{ backgroundImage: `url("${content?.menu_item?.image?.src}")` }}
    >
      <div className={clx(classes.container, layout)}>
        <article className={clx(classes.block, layout, "block-content")}>
          <p className={classes.blockOverline}>{decodeText(content?.text?.overline)}</p>
          <h4 className={classes.blockHeading}>{decodeText(content?.menu_item?.name)}</h4>
          <p className={classes.blockSubtitle}>{decodeText(content?.menu_item?.description)}</p>
          <h6 className={classes.price}>
            <span className={classes.currency}>{getCurrency(content?.menu_item?.menu?.restaurant?.bank_info?.currency)}</span> {content?.menu_item?.price}
          </h6>
          <div className={clx(classes.buttonContainer, layout)}>{renderButton()}</div>
        </article>
      </div>
      <div className={clx(classes.overlay, layout)}></div>
    </section>
  );
};
