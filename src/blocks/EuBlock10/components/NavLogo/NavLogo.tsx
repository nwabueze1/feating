import { FC } from "react";
import { NavLogoPropsType, useNavLogoStyles } from "./";
import clx from "classnames";
import { BlockStoreType } from "../../../../types";
import { useBlockSelector, createResponsiveImage } from "../../../../helpers";

export const NavLogo: FC<NavLogoPropsType> = ({ layout, image, text, url, screenSize }) => {
  const blockConfig = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);
  const classes = useNavLogoStyles(blockConfig);
  return (
    <a href={url} className={clx(classes.navLogo, layout)}>
      {createResponsiveImage(image, {
        className: clx(classes.navLogoImage, layout),
        screenSize,
        styles: {
          picture: {
            display: "inline-flex",
          },
        },
      })}
      <span className={classes.navLogoText}>{text}</span>
    </a>
  );
};
