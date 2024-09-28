import { BlockConfigType } from "../../types";
import { FC } from "react";
import { useEuBlock16AnimationStyles, useEuBlock16Styles, ImageDisplay } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration } from "../../helpers";
import { useMediaQuery, useTheme } from "@mui/material";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";

export const EuBlock16: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const configuration = getConfiguration(props.configuration, "main", getMappedColor);
  const classes = useEuBlock16Styles(configuration);
  const animationClass = useEuBlock16AnimationStyles();
  const layout = useSelectedLayout(props.layouts);
  const isLayout4or5 = layout === "layout-4" || layout === "layout-5";
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const key = "blocks." + String(index);

  const Heading = () => (
    <>
      <p className={classes.overline}>{decodeText(content?.text?.overline)}</p>
      <h2 className={clx(classes.heading, layout)}>{decodeText(content?.text?.main)}</h2>
    </>
  );

  return (
    <section
      className={clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block16ActiveElement)}
      onClick={() => {
        mode === "edit" && handleSelect?.(key);
      }}
    >
      <div className={classes.container}>
        {lg && isLayout4or5 && <Heading />}
        <div className={clx(classes.block, layout)}>
          <div className={clx(classes.blockContent, classes.blockImageContainer, layout, animationClass.base)}>
            <ImageDisplay image={content?.image} layout={layout} />
          </div>
          <div className={clx(classes.blockContent, layout, animationClass.base)} style={{ animationDuration: "2s" }}>
            {lg && isLayout4or5 ? null : <Heading />}
            <p className={classes.body}>{decodeText(content?.text?.body)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
