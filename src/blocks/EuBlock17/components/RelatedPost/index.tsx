import { FC, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRelatedPostStyles } from "./styles";
import { RelatedPostThumbnailProps, ThumbnailProps } from "./types";
import { BlockStoreType, CustomThemeProps } from "types";
import { useMediaQuery, useTheme } from "@mui/material";
import { SwipeAble, SwipeAbleRef, Button } from "../.././../../components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import clx from "classnames";
import { BlockProvider } from "../../../../BlockProvider";
import { useBlockSelector } from "../../../../helpers";

export const RelatedPostThumbnail: FC<RelatedPostThumbnailProps> = ({ header, content, layout, buttonConfiguration, ...props }) => {
  const configuration = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);
  const classes = useRelatedPostStyles(configuration);
  const swipeAbleRef = useRef<SwipeAbleRef>(null);
  const theme = useTheme();
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [hasReachedStart, setHasReachedStart] = useState(true);
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

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
      <a href={item?.slug} key={index}>
        <div className={clx(classes.cardContent, layout)}>
          <div style={{ backgroundImage: `url('${item?.featured_image}')` }} className={clx(classes.backgroundImage, layout)} />
          <div className={classes.categoryContainer}>
            <h5 className={classes.category}>{item.category}</h5>
            <span className={classes.dash}></span>
            <span className={classes.readTime}>{item.readTime}</span>
          </div>
          <div className={classes.title}>{item?.title}</div>
          {layout === "layout-3" && (
            <BlockProvider {...buttonConfiguration}>
              <Button size="small" variant="outlined">
                Read article
              </Button>
            </BlockProvider>
          )}
          {layout === "layout-3" && (
            <>
              <div className={classes.separator}></div>
              <p className={classes.datePosted}>Posted 2 days ago</p>
            </>
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
