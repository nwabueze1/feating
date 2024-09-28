import { CardPropsType, useCardStyles } from ".";
import { FC } from "react";
import clx from "classnames";
import { BlockStoreType } from "../../../../types";
import { useBlockSelector } from "../../../../helpers";
import { getDateDuration } from "../../../../helpers/util";

export const Card: FC<CardPropsType> = ({ excerpt, featured_image, title, cta, layout, published_at, mode, slug }) => {
  const configuration = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);
  const classes = useCardStyles(configuration);
  const variant = !layout || layout == "layout-1" || layout === "layout-2" ? "default" : "contained";

  return (
    <a href={mode === "view" ? slug : undefined} className={classes.anchorTag} style={{ textDecoration: "none" }}>
      <article className={clx(classes.root, variant)}>
        <div className={classes.imageContainer}>
          <img src={featured_image} alt="Feature Image" className={classes.image} />
          {variant === "contained" && <div className={classes.overlay}></div>}
        </div>
        <header className={classes.header}>
          <p className={classes.overline}>{title}</p>
        </header>
        <div className={clx(classes.title, variant)} dangerouslySetInnerHTML={{ __html: excerpt }} />
        {variant === "contained" && (
          <>
            {cta && cta}
            <div className={classes.separator}></div>
            <p className={classes.datePosted}>{getDateDuration(published_at as string)}</p>
          </>
        )}
      </article>
    </a>
  );
};
