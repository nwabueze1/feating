import { FC, useEffect, useMemo, useState } from "react";
import { useEuBlock1Styles } from "./styles";
import clx from "classnames";
import { BlockConfigType, ButtonType } from "../../types";
import { euBlock1Layouts } from "./data/euBlock1Layout";
import { Button } from "../../components/Button";
import { useSelectedLayout } from "../../hooks/useSelectedLayout";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration, createResponsiveImage } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { decodeText } from "../../helpers/decodeText";

export const EuBlock1: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, configuration, screenSize, ...props }) => {
  const activeLayout = useSelectedLayout(props.layouts) as string;
  const variationClassName = getVariationClassName(activeLayout);
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const buttonConfig = getConfiguration(configuration, "button", getMappedColor);
  const classes = useEuBlock1Styles(getConfiguration(configuration, "main", getMappedColor));
  const isLayout4 = activeLayout === euBlock1Layouts.layout4;
  const isLayout5 = activeLayout === euBlock1Layouts.layout5;
  const key = "blocks." + String(index);
  const animatedTexts: string[] = useMemo(() => {
    return (content?.text?.animated ?? "").split(",") ?? [];
  }, [content?.text?.animated]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const lastIndex = animatedTexts.length - 1;

  const renderButtons = () => (
    <div className={clx(classes.buttonContainer, variationClassName)}>
      {content?.buttons?.map((button: ButtonType, index: number) => (
        <Button size="large" key={index} variant={button?.variant === "primary" ? "contained" : "outlined"} mode={mode}>
          {button?.text}
        </Button>
      ))}
    </div>
  );

  useEffect(() => {
    if (!content?.text?.animated || content?.text?.animated?.length === 0) return setActiveIndex(0);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (activeIndex === lastIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, content?.text?.animated]);

  return (
    <BlockProvider colors={buttonConfig.colors} fonts={buttonConfig.fonts}>
      <section
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block1ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={classes.container}>
          <div className={clx(classes.items_container, variationClassName)}>
            <article className={clx(classes.blockSection, variationClassName)}>
              {!isLayout5 && (
                <div className={clx(classes.overlineContainer, variationClassName)}>
                  <p className={classes.overline}>{content?.text?.overline}</p>
                </div>
              )}
              <h1 className={clx(classes.title, variationClassName)}>
                {decodeText(content?.text?.main)} {content?.text?.animated && <span className={classes.animatedTitle}>{animatedTexts[activeIndex]}</span>}
              </h1>
              {!isLayout4 && <p className={classes.subTitle}>{decodeText(content?.text?.sub)}</p>}
              {!isLayout4 && renderButtons()}
            </article>
            <article className={clx(classes.blockSection, "image-container", variationClassName)}>
              {createResponsiveImage(content?.image, {
                className: clx(classes.image, variationClassName),
                screenSize,
                styles: {
                  picture: { width: "100%", height: "100%" },
                },
              })}

              {isLayout4 && <p className={clx(classes.subTitle, variationClassName)}>{decodeText(content?.text?.sub)}</p>}
              {isLayout4 && renderButtons()}
              {isLayout5 && (
                <div className={clx(classes.overlineContainer, "overline-5", variationClassName)}>
                  <p className={classes.overline}>{content?.text?.overline}</p>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};

const getVariationClassName = (queryParam: string) =>
  queryParam === euBlock1Layouts.layout2
    ? "variation-b"
    : queryParam === euBlock1Layouts.layout3
    ? "variation-c"
    : queryParam === euBlock1Layouts.layout4
    ? "variation-d"
    : queryParam === euBlock1Layouts.layout5
    ? "variation-e"
    : "";
