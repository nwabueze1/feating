import { BlockConfigType } from "../../types";
import { FC } from "react";
import { useEuBlock14Styles } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { BlockLayouts, useGetConfiguration } from "../../helpers";
import { decodeText } from "../../helpers/decodeText";

export const EuBlock14: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(props.configuration, "main", getMappedColor);
  const classes = useEuBlock14Styles(blockConfig);
  const layout = useSelectedLayout(props.layouts);
  const isLayout5 = layout === BlockLayouts.LAYOUT_5;
  const key = "blocks." + String(index);

  const renderHeading = () => (
    <>
      <p className={clx(classes.blockOverline, layout)}>{decodeText(content?.text?.overline)}</p>
      <h4 className={clx(classes.blockTitle, layout)}>{decodeText(content?.text?.main)}</h4>
    </>
  );

  return (
    <section
      className={clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block14ActiveElement)}
      onClick={() => {
        mode === "edit" && handleSelect?.(key);
      }}
    >
      <div className={classes.container}>
        {isLayout5 && renderHeading()}
        <div className={clx(classes.block, layout)}>
          <aside
            className={clx(classes.blockContent, "image", layout, classes.blockImage)}
            style={{
              background: `url('${content?.image?.src}')`,
            }}
          ></aside>
          <article className={clx(classes.blockContent, "text", layout)}>
            {!isLayout5 && renderHeading()}
            <p className={clx(classes.blockBody, layout)}>{decodeText(content?.text?.body)}</p>
          </article>
        </div>
      </div>
    </section>
  );
};
