import { FC } from "react";
import { BlockConfigType, ButtonType } from "../../types";
import { useBlog2BlockStyles } from "./styles";
import { Button } from "../../components/Button";
import { useSelectedLayout, useResponsive } from "../../hooks";
import clx from "classnames";
import { EuBlock2Layout } from "./data/useEuBlock2Layout";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration, createResponsiveImage } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import block2 from "../../mappings/block2";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";

const { uuid: BLOCK_UUID } = block2;

export const EuBlock2: FC<BlockConfigType> = ({ content, configuration, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { md, sm } = useResponsive();
  const layout = useSelectedLayout(props.layouts) as string;
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(configuration, "main", getMappedColor);
  const buttonConfig = getConfiguration(configuration, "button", getMappedColor);
  const classes = useBlog2BlockStyles(blockConfig);
  const isLayout5 = layout === EuBlock2Layout.layout5;
  const key = "blocks." + index;

  const renderButtons = () => {
    return (
      <>
        {content?.buttons?.map((button: ButtonType, index: number) => (
          <Button
            mode={mode}
            size="large"
            key={index}
            variant={button.variant === "primary" ? "contained" : "outlined"}
            href={mode === "view" ? (index === content?.buttons?.length - 1 ? button?.url : content?.post?.slug) : undefined}
          >
            {button?.text}
          </Button>
        ))}
      </>
    );
  };
  const GetTextAndActions = () => (
    <div>
      <div className={classes.blogBody} dangerouslySetInnerHTML={{ __html: content?.post?.excerpt }} />
      <div className={classes.buttonContainer}>{renderButtons()}</div>
    </div>
  );
  return (
    <BlockProvider colors={buttonConfig.colors} fonts={blockConfig.fonts} block_uuid={BLOCK_UUID}>
      <section
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block2ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={classes.container}>
          {layout === "layout-5" && (
            <header className={clx(classes.layout5Text, layout)}>
              <p className={classes.blogOverline}>{decodeText(content?.text?.overline)}</p>
              <h4 className={clx(classes.blogTitle, layout)}>{decodeText(content?.post?.title)}</h4>
            </header>
          )}
          <article className={clx(classes.blogContainer, layout)}>
            <div className={classes.blockContent}>
              {!isLayout5 && (
                <>
                  <p className={clx(classes.blogOverline, layout)}>{decodeText(content?.text?.overline)}</p>
                  <h4 className={classes.blogTitle}>{decodeText(content?.post?.title)}</h4>
                </>
              )}
              {!md && !sm && <GetTextAndActions />}
            </div>
            <div className={classes.blockContent}>
              <div className={clx(classes.blogImageContainer, layout)}>
                {createResponsiveImage(content?.post?.featured_image, {
                  className: clx(classes.blogImage, layout),
                  screenSize: props?.screenSize,
                  styles: {
                    picture: {
                      height: "100%",
                      width: "100%",
                    },
                  },
                })}
              </div>
              {(md || sm) && <GetTextAndActions />}
            </div>
          </article>
        </div>
      </section>
    </BlockProvider>
  );
};
