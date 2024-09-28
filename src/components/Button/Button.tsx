import { FC } from "react";
import clx from "classnames";
import { useButtonStyles } from "./styles";
import { ButtonPropsType } from "./types";
import { BlockStoreType } from "../../types";
import { useBlockSelector, useRecordLinkClick } from "../../helpers";
import { CircularProgress } from "@mui/material";

export const Button: FC<ButtonPropsType> = ({ variant = "contained", children, size = "medium", startIcon, endIcon, fullWidth, mode, isLoading, ...props }) => {
  const config = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const classes = useButtonStyles(config);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = () => {
    mode === "view" && recordLinkClick(String(children), props.href ?? "", config.block_uuid);
  };

  return props.href ? (
    <a
      href={mode === "view" ? props.href : undefined}
      {...(props as any)}
      onClick={handleClick}
      className={clx(classes.button, variant, size, props?.className)}
      style={{ width: fullWidth ? "100%" : "", ...props.style }}
    >
      {startIcon} {children} {endIcon}
    </a>
  ) : (
    <button {...props} className={clx(classes.button, variant, size, props?.className)} style={{ width: fullWidth ? "100%" : "", ...props.style }}>
      {isLoading ? (
        <div style={{ color: "white" }}>
          <CircularProgress color={"inherit"} size={14} />
        </div>
      ) : (
        <>
          {" "}
          {startIcon} {children} {endIcon}{" "}
        </>
      )}
    </button>
  );
};
