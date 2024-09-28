import { useCallback, useRef, useState } from "react";
import { useEuBlock9Styles } from "./styles";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import clx from "classnames";
import { BlockConfigType } from "../../types";
import { AvatarCard } from "./components/AvatarCard/AvatarCard";
import { useMediaQuery, useTheme } from "@mui/material";
import { getScrollAmount } from "./index";
import { useSelectedLayout, useGetColor } from "../../hooks";
import { useGetConfiguration, createResponsiveImage } from "../../helpers";
import { CommentType } from "./type";
import { useTestimonyStyles } from "./testimonyStyles";
import { useBlockStyles } from "./blockStyles";
import { Comment } from "./components";
import { BlockProvider } from "../../BlockProvider";
import { decodeText } from "../../helpers/decodeText";

export const EuBlock8 = ({ layouts, content, mode = "view", index, screenSize, activeElement, handleSelect, configuration }: BlockConfigType) => {
  const horizontalViewRef = useRef<HTMLDivElement>(null);
  const layout = useSelectedLayout(layouts) as string;
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const customConfig = getConfiguration(configuration, "main", getMappedColor);
  const classes = useEuBlock9Styles(customConfig);
  const testimonyClass = useTestimonyStyles();
  const blockClass = useBlockStyles();
  const isLayout1or2 = layout === "layout-1" || layout === "layout-2";
  const theme = useTheme();
  const onlyLg = useMediaQuery(theme.breakpoints.only("lg"));
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  const isLayout4or5 = layout === "layout-4" || layout === "layout-5";
  const isLayout5 = layout === "layout-5";
  const [isDragging, setIsDragging] = useState(false);
  const [lastDivInScrollView, setLastDivInScrollView] = useState(0);
  const key = "blocks." + String(index);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsDragging(true);
    setLastDivInScrollView(e.clientX);
    e.currentTarget.style.cursor = "grabbing";
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      if (isDragging && horizontalViewRef.current) {
        const delta = e.clientX - lastDivInScrollView;
        horizontalViewRef.current.scrollLeft -= delta;
        setLastDivInScrollView(e.clientX);
      }
    },
    [isDragging, lastDivInScrollView]
  );

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsDragging(false);

    e.currentTarget.style.removeProperty("cursor");
  }, []);

  const handleScroll = (delta: number) => {
    const container = horizontalViewRef.current;
    if (!container) return;
    const scrollAmount = getScrollAmount(container, layout, md, sm, onlyLg);
    container.scrollLeft += delta * scrollAmount;
  };

  const getAvatarImage = () => {
    const images = content?.comments?.map((comment: CommentType) => comment?.image);
    if (images.length === 0) return [];
    return images;
  };

  const Heading = () => (
    <>
      <p className={clx(classes.blockOverline, layout)}>{decodeText(content?.text?.overline)}</p>
      <h4 className={clx(classes.blockHeading, layout)}>{decodeText(content?.text?.title)}</h4>
    </>
  );

  const renderComments = () =>
    content?.comments?.map((comment: CommentType, index: number) => (
      <Comment key={index} comment={comment?.comment} user={{ name: comment?.name, tag: comment?.tag, image: comment?.image }} isLayout4or5={isLayout4or5} layout={layout} />
    ));

  const ScrollButton = () => (
    <div className={clx(testimonyClass.buttonContainer)}>
      <button title="prev-button" onClick={() => handleScroll(-1)} className={clx(classes.scrollButton, "outlined", "left", layout)}>
        <BsChevronLeft />
      </button>
      <button title="next-button" onClick={() => handleScroll(1)} className={clx(classes.scrollButton, layout)}>
        <BsChevronRight />
      </button>
    </div>
  );

  if (isLayout4or5)
    return (
      <BlockProvider fonts={customConfig.fonts} colors={customConfig.colors}>
        <section
          className={clx(classes.root, mode === "edit" && key === activeElement && classes.block8ActiveElement)}
          onClick={(e) => {
            e.stopPropagation();
            mode === "edit" && handleSelect?.(key);
          }}
        >
          {isLayout5 && !downXl && <ScrollButton />}
          <div className={blockClass.container}>
            <Heading />
            <article className={clx(blockClass.block, layout)}>
              <div className={clx(classes.blockContent, layout)}>
                <article className={clx(blockClass.testimonyContainer, layout)}>
                  <div className={testimonyClass.menuContent}>
                    <div
                      className={clx(testimonyClass.testimonyContent, layout)}
                      ref={horizontalViewRef}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      {renderComments()}
                    </div>
                  </div>
                  {(isLayout5 && downXl) || isLayout4or5 ? isLayout5 && !downXl ? null : <ScrollButton /> : null}
                </article>
              </div>
            </article>
          </div>
        </section>
      </BlockProvider>
    );

  return (
    <BlockProvider fonts={customConfig.fonts} colors={customConfig.colors}>
      <section
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block8ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={blockClass.container}>
          {layout && !isLayout1or2 && <Heading />}
          <article className={clx(blockClass.block, layout)}>
            <div className={clx(classes.blockContent, layout, "image-container")}>
              {createResponsiveImage(content?.image, {
                className: clx(blockClass.blockImage, layout),
                screenSize,
              })}

              <div className={clx(testimonyClass.avatarCardContainer, layout)}>
                <AvatarCard title={content?.text?.avatarTitle} secondaryText={content?.text?.secondaryText} layout={layout} images={getAvatarImage()} />
              </div>
            </div>
            <div className={clx(classes.blockContent, layout)}>
              {(isLayout1or2 || !layout) && <Heading />}
              <article className={blockClass.testimonyContainer}>
                <div className={testimonyClass.menuContent}>
                  <div
                    className={testimonyClass.testimonyContent}
                    ref={horizontalViewRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    {renderComments()}
                  </div>
                </div>
                <ScrollButton />
              </article>
            </div>
          </article>
        </div>
      </section>
    </BlockProvider>
  );
};
