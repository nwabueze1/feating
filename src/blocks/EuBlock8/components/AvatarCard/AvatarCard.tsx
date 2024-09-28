import { FC } from "react";
import { useAvatarCardStyles } from "./styles";
import clx from "classnames";
import { AvatarCardPropsType } from "./types";
import { BlockProviderType } from "../../../../types";
import { createImageSrcset, imageSizes, useBlockSelector } from "../../../../helpers";

export const AvatarCard: FC<AvatarCardPropsType> = ({ images, layout, secondaryText, title }) => {
  const config = useBlockSelector<BlockProviderType, BlockProviderType>((state) => state);
  const classes = useAvatarCardStyles(config);

  const renderImages = () =>
    images.map((image, index) => (
      <div className={clx(classes.avatar, layout)} key={index} style={{ left: `-${8 * index + 1}%` }}>
        <img srcSet={createImageSrcset(image)} src={image?.src} sizes={imageSizes} alt={image?.alternative_text} className={classes.avatarImage} />
      </div>
    ));

  return (
    <article className={clx(classes.container, layout)}>
      <h6 className={classes.avatarTitle}>{title}</h6>
      <div className={classes.avatarContainer}>
        {renderImages()}
        {secondaryText && (
          <div className={clx(classes.avatar, "background", layout)} style={{ left: `-${8 * 3}%` }}>
            <h6 className={classes.secondaryText}>{secondaryText}</h6>
          </div>
        )}
      </div>
    </article>
  );
};
