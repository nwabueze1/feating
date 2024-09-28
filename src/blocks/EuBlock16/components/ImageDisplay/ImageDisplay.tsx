import { ImageDisplayPropsType, useImageDisplayStyles } from "./";
import { FC } from "react";
import clx from "classnames";
import { useMediaQuery, useTheme } from "@mui/material";

export const ImageDisplay: FC<ImageDisplayPropsType> = ({ image, layout }) => {
  const classes = useImageDisplayStyles({ image, layout });
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const showOuterImageForLayout4 = layout === "layout-4" && lg;
  const defaultLayout = !["layout-3", "layout-4", "layout-5"].includes(layout as string);

  if (!image) return null;

  if (defaultLayout)
    return (
      <div className={classes.root}>
        <div className={classes.background1}></div>
        <div className={clx(classes.background1, "image-2")}></div>
      </div>
    );

  return layout === "layout-5" ? (
    <div className={classes.background3}></div>
  ) : (
    <div className={classes.background2}>
      <div className={clx(classes.item, layout)}></div>
      <div
        className={clx(classes.item, layout, "innerImage")}
        style={{
          background: showOuterImageForLayout4 ? `url('${image?.src}')` : "",
        }}
      >
        {showOuterImageForLayout4 ? null : (
          <div
            className={clx(classes.innerImage, layout)}
            style={{
              background: `url('${image?.src}')`,
            }}
          ></div>
        )}
      </div>
      <div className={clx(classes.item, layout)} style={{ background: `url('${image?.src}')` }}></div>
    </div>
  );
};
