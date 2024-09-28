import { FC, useRef, useState } from "react";
import { useRelatedPostStyles } from "./styles";
import { RelatedPostThumbnailProps, ThumbnailProps } from "./types";
import { CustomThemeProps } from "../../../../types";
import { useMediaQuery, useTheme } from "@mui/material";
import { SwipeAble, SwipeAbleRef, Button } from "../../../../components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import clx from "classnames";
import { BlockProvider } from "../../../../BlockProvider";
import { useBlockSelector, useRecordLinkClick } from "../../../../helpers";

export const RelatedPostThumbnail: FC<RelatedPostThumbnailProps> = ({ header, content, layout, mode, buttonConfiguration }) => {
  const configuration = useBlockSelector<CustomThemeProps, CustomThemeProps>((store) => store);
  const classes = useRelatedPostStyles(configuration);
  const swipeAbleRef = useRef<SwipeAbleRef>(null);
  const theme = useTheme();
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [hasReachedStart, setHasReachedStart] = useState(true);
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const recordLinkClick = useRecordLinkClick();

  const handleClick = (title: string, href: string) => {
    mode === "view" && recordLinkClick(title, href, configuration.block_uuid);
  };

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

  function getRelatedPostsThumbnail(content: ThumbnailProps[]) {
    return content?.map((item: ThumbnailProps, index: number) => (
      <a href={item?.slug} key={index} onClick={() => handleClick(item?.title, item?.slug)}>
        <div className={clx(classes.cardContent, layout)}>
          <div style={{ backgroundImage: `url('${item?.featured_image?.src}')` }} className={clx(classes.backgroundImage, layout)} />
          <div className={classes.categoryContainer}>
            <h5 className={classes.category}>{item?.category_name}</h5>
          </div>
          <div className={classes.title}>{item?.title}</div>
          {layout === "layout-3" && (
            <BlockProvider {...buttonConfiguration}>
              <Button size="small" variant="outlined" className={classes.button}>
                Read article
              </Button>
            </BlockProvider>
          )}
        </div>
      </a>
    ));
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.latestArticleHeading}>{header}</div>
        <div className={classes.thumbnailContainer}>
          {content?.length > 0 ? (
            <SwipeAble ref={swipeAbleRef} styles={{ scrollBehavior: "smooth", display: lg ? "flex" : "unset" }}>
              {getRelatedPostsThumbnail(content)}
            </SwipeAble>
          ) : (
            <div className={classes.noPost}>No Related Post</div>
          )}
          {lg && layout !== "layout-3" && (
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
      </div>
    </div>
  );
};
