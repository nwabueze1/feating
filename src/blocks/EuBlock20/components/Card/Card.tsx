import { CardPropsType, useCardStyles } from ".";
import { FC } from "react";
import clx from "classnames";
import { BlockStoreType } from "../../../../types";
import { useBlockSelector, createResponsiveImage } from "../../../../helpers";
import { getDateDuration } from "../../../../helpers/util";
import { Button } from "../../../../components";

export const Card: FC<CardPropsType> = ({ excerpt, featured_image, category_name, screenSize, action, layout, title, published_at, slug, mode }) => {
  const configuration = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);
  const classes = useCardStyles(configuration);
  const variant = !layout || layout == "layout-1" || layout === "layout-2" ? "default" : "contained";

  return (
    <article className={clx(classes.root, variant)}>
      <div className={classes.imageContainer}>
        {createResponsiveImage(featured_image, {
          className: classes.image,
          screenSize,
          classNames: {
            picture: classes.imageContainer,
          },
        })}
        <div className={classes.overlay}></div>
      </div>
      <header className={classes.header}>
        <p className={classes.overline}>{category_name}</p>
        <div className={classes.lineSeparator}></div>
        <p className={classes.timer}>5 mins read</p>
      </header>
      <div className={classes.topic}>{title}</div>
      <div className={clx(classes.title, variant)} dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Button mode={mode} variant="outlined" size="medium" href={`${slug}`}>
        {action.title}
      </Button>
      <div className={classes.separator}></div>
      <p className={classes.datePosted}>Posted {getDateDuration(published_at as string)}</p>
    </article>
  );
};
