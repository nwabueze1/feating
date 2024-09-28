import { useSelectedLayout } from "../../hooks";
import { BlockConfigType } from "types";
import { useEuBlock4Styles } from "./styles.ts";
import clx from "classnames";
import { List } from "../../components/List";
import { Block4Layouts } from "./data/useBlock4Layout";
import { FC } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { ListPropsType } from "components/List/types";
import { useEuBlock4ListStyles } from "./blockListStyles";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration, createImageSrcset, imageSizes, createResponsiveImage } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { decodeText } from "../../helpers/decodeText";

export const EuBlock4: FC<BlockConfigType> = ({ content, configuration, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockStyleConfig = getConfiguration(configuration, "main", getMappedColor);
  const classes = useEuBlock4Styles(blockStyleConfig);
  const listClasses = useEuBlock4ListStyles({ ...blockStyleConfig });
  const layout = useSelectedLayout(props.layouts);
  const isLayout5 = layout === Block4Layouts.layout5;
  const isLayout4 = layout === Block4Layouts.layout4;
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const key = "blocks." + String(index);

  const renderListContent = () =>
    content?.list?.map((c: Omit<ListPropsType, "reverse">, index: number) => (
      <List screenSize={props?.screenSize} heading={c?.heading} image={c?.image} body={c?.body} key={index} reverseItems={isLayout4} />
    ));

  return (
    <BlockProvider colors={blockStyleConfig.colors} fonts={blockStyleConfig.fonts}>
      <section
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block4ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={clx(classes.redBackground, layout)}></div>
        <div className={clx(classes.goldBackground, layout)}></div>
        <div className={classes.container}>
          {(isLayout5 && md) || !isLayout5 ? (
            <>
              <article className={clx(classes.sectionHead, layout)}>
                <div className={clx(classes.sectionContent, layout)}>
                  <p className={clx(classes.blockOverline, layout)}>{decodeText(content?.text?.overline)}</p>
                  <h4 className={clx(classes.blockHeading, layout)}>{decodeText(content?.text?.title)}</h4>
                  <p className={clx(classes.blockCaption, layout)}>{decodeText(content?.text?.subtitle)}</p>
                </div>
                <div className={clx(classes.sectionContent, layout)}>
                  <div className={clx(classes.backgroundContainer, layout)}>
                    <img src={content?.backgroundImage?.src} className={classes.backgroundImage} />
                    <img src={content?.backgroundImage?.src} className={clx(classes.backgroundImage, classes.backgroundImageLeft)} />
                  </div>
                </div>
              </article>
              <article className={clx(classes.block, layout)}>
                <div className={classes.blockContent}>
                  <div className={listClasses.blockList}>{renderListContent()}</div>
                </div>
                <div className={clx(classes.blockContent, "img")}>
                  {createResponsiveImage(content?.image, {
                    className: clx(listClasses.blockImage, layout),
                    screenSize: props?.screenSize,
                    styles: {
                      picture: {
                        height: "100%",
                        width: "100%",
                      },
                    },
                  })}
                  <div className={clx(listClasses.imageOverlay, layout)}></div>
                </div>
              </article>
            </>
          ) : (
            <div className={clx(listClasses.layout5Container, layout)}>
              <div className={clx(classes.blockContent, "img")}>
                <img srcSet={createImageSrcset(content?.image)} src={content?.image?.src} sizes={imageSizes} alt={content?.image?.alternative_text} className={clx(listClasses.blockImage, layout)} />
                <div className={clx(listClasses.imageOverlay, layout)}></div>
              </div>
              <div className={listClasses.layout5Content}>
                <p className={clx(classes.blockOverline, layout)}>{decodeText(content?.text?.overline)}</p>
                <h4 className={clx(classes.blockHeading, layout)}>{decodeText(content?.text?.title)}</h4>
                <p className={clx(classes.blockCaption, layout)}>{decodeText(content?.text?.subtitle)}</p>
                <div className={listClasses.blockList}>{renderListContent()}</div>
              </div>
            </div>
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
