import { FC } from "react";
import { BlockConfigType } from "types";
import { useEuBlock7Styles } from "./styles";
import { useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { Card } from "../../components/Card";
import { useMediaQuery, useTheme } from "@mui/material";
import { BlockProvider } from "../../BlockProvider";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration } from "../../helpers";
import { Button } from "../../components";
import block7 from "../../mappings/block7";
import { decodeText } from "../../helpers/decodeText";

const { uuid: BLOCK_UUID } = block7;

export const EuBlock7: FC<BlockConfigType> = ({ configuration, mode = "view", index, screenSize, activeElement, handleSelect, content, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(configuration, "main", getMappedColor);
  const buttonConfig = getConfiguration(configuration, "button", getMappedColor);
  const classes = useEuBlock7Styles(blockConfig);
  const layout = useSelectedLayout(props.layouts);
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const key = "blocks." + String(index);

  const renderButton = () => {
    return content?.buttons?.map((button: { text: string; url: string }, index: number) => (
      <Button mode={mode} variant="contained" size="large" key={index} className={classes.listButtonContainer} href={mode === "view" ? button?.url : undefined}>
        {button?.text}
      </Button>
    ));
  };

  const renderProducts = () =>
    content?.menu_items?.map((product: any, index: number) =>
      xl && index > 5 ? null : (
        <div className={classes.cardContent} key={index}>
          <Card
            screenSize={screenSize}
            title={product?.name}
            image={product?.image}
            rating={4}
            key={index}
            subtitle={product?.description}
            price={product?.price}
            mode={mode}
            currency={product?.menu?.restaurant?.bank_info?.currency ?? ""}
            colors={{ currency: blockConfig?.colors?.[200], action: { color: buttonConfig?.colors?.[100], background: buttonConfig?.colors?.[300] } }}
            action={{
              title: "View",
              href: product?.slug,
            }}
          />
        </div>
      )
    );

  return (
    <BlockProvider fonts={buttonConfig.fonts} colors={buttonConfig.colors} block_uuid={BLOCK_UUID}>
      <section
        className={clx(classes.rootParent, mode === "edit" && key === activeElement && classes.block7ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={clx(classes.root)}>
          <div className={classes.blockContainer}>
            <header className={clx(classes.blockHeader, layout)}>
              <p className={classes.blockOverline}>{decodeText(content?.text?.overline)}</p>
              <h4 className={classes.blockHeading}>{decodeText(content?.text?.title)}</h4>
              <p className={classes.blockCaption}>{decodeText(content?.text?.subtitle)}</p>
            </header>
            <div className={classes.productBlock}>{renderProducts()}</div>
            <div className={classes.buttonContainer}>{renderButton()}</div>
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
