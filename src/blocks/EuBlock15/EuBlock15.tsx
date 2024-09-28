import { BlockConfigType } from "../../types";
import { FC, useRef, useState } from "react";
import { useEuBlock18Styles, Card, CardPropsType } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { SwipeAble, SwipeAbleRef } from "../../components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useMediaQuery, useTheme } from "@mui/material";
import { decodeText } from "../../helpers/decodeText";

export const EuBlock15: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const layout = useSelectedLayout(props.layouts);
  const { getMappedColor } = useGetColor();
  const isLayout2or3 = ["layout-2", "layout-3"].includes(layout as string);
  const getConfiguration = useGetConfiguration();

  const blockConfiguration = getConfiguration(props.configuration, "main", getMappedColor);
  const classes = useEuBlock18Styles(blockConfiguration);
  const swipeAbleRef = useRef<SwipeAbleRef>(null);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [hasReachedStart, setHasReachedStart] = useState(true);
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const key = "blocks." + String(index);

  const handleNextClick = () => {
    swipeAbleRef.current?.setSmooth(true);
    setHasReachedStart(false);
    if (swipeAbleRef.current?.isEndReached) return setHasReachedEnd(true);
    swipeAbleRef.current?.handleScroll(1);
  };
  const handlePreviousClick = () => {
    swipeAbleRef.current?.setSmooth(true);
    setHasReachedEnd(false);
    if (swipeAbleRef.current?.isStartReached) return setHasReachedStart(true);
    swipeAbleRef.current?.handleScroll(-1);
  };

  const renderBlogPosts = () =>
    content?.posts?.map((cardContent: CardPropsType, index: number) => (
      <div className={clx(classes.cardContainer, layout)} key={index}>
        <Card {...cardContent} layout={layout ?? "default"} slug={cardContent?.slug} mode={mode} />
      </div>
    ));

  return (
    <BlockProvider {...blockConfiguration}>
      <section
        className={clx(layout, mode === "edit" && key === activeElement && classes.block15ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={classes.container}>
          <h4 className={clx(classes.blockHeader, layout)}>{decodeText(content?.text)}</h4>
          {!isLayout2or3 ? (
            <SwipeAble gap={lg ? "20px" : sm ? "10px" : "30px"} ref={swipeAbleRef} styles={{ scrollBehavior: "smooth" }}>
              {renderBlogPosts()}
            </SwipeAble>
          ) : (
            <div className={classes.block}>{renderBlogPosts()}</div>
          )}
          {!isLayout2or3 && (
            <>
              <button onClick={handlePreviousClick} className={clx(classes.scrollButton, "left")} disabled={hasReachedStart}>
                <BsChevronLeft />
              </button>
              <button onClick={handleNextClick} className={classes.scrollButton} disabled={hasReachedEnd}>
                <BsChevronRight />
              </button>
            </>
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
