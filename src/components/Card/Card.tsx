import { FC } from "react";
import { CardPropsType } from "./type";
import { useCardStyles } from "./styles";
import { BsChevronRight } from "react-icons/bs";
import clx from "classnames";
import { BlockStoreType } from "../../types";
import { getCurrency, useRecordLinkClick, useBlockSelector, createResponsiveImage } from "../../helpers";

export const Card: FC<CardPropsType> = ({ mode = "view", hasShadow = false, colors, image, currency, subtitle, title, action, price, imageHeight, showShadow, numberOfLines, screenSize }) => {
  const config = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const classes = useCardStyles({ hasShadow, colors });

  const recordLinkClick = useRecordLinkClick();

  const handleClick = () => {
    mode === "view" && recordLinkClick(action?.title ?? "", action?.href ?? "", config.block_uuid);
    mode === "view" && action?.onClick?.();
  };

  return (
    <article className={clx(classes.card, showShadow ? "shadow" : "")}>
      <div className={classes.card_image_container} style={{ maxHeight: imageHeight }}>
        {image &&
          createResponsiveImage(image, {
            screenSize,
            className: classes.card_image,
            styles: {
              img: {
                height: imageHeight,
              },
              picture: {
                height: "100%",
                width: "100%",
              },
            },
          })}
        <div className={classes.overlay}></div>
      </div>
      <div>
        <h4 className={classes.card_title}>{title}</h4>
        <p
          className={classes.card_subtitle}
          style={{
            WebkitLineClamp: numberOfLines,
          }}
        >
          {subtitle}
        </p>
        <div className={classes.cardPriceAndButton}>
          {action && (
            <>
              {action?.title &&
                (action.href && action.href.length > 0 ? (
                  <a className={classes.card_button} onClick={handleClick} href={mode === "view" ? action.href : undefined}>
                    {action.title}
                    <span className={classes.card_button_icon}>
                      <BsChevronRight />
                    </span>
                  </a>
                ) : (
                  <button className={classes.card_button} onClick={action.onClick}>
                    {action.title}
                    <span className={classes.card_button_icon}>
                      <BsChevronRight />
                    </span>
                  </button>
                ))}
            </>
          )}
          {price && (
            <h6 className={classes.price}>
              <span className={classes.currency}>{getCurrency(currency ?? "")}</span>
              {price}
            </h6>
          )}
        </div>
      </div>
    </article>
  );
};
