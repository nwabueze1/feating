import { FC } from "react";
import { useListStyle } from "./styles";
import clx from "classnames";
import { ListPropsType } from "./types";
import { BlockStoreType } from "../../types";
import { useBlockSelector, createResponsiveImage } from "../../helpers";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";

export const List: FC<ListPropsType> = ({ ...props }) => {
  const store = useBlockSelector<BlockStoreType, BlockStoreType>((store) => store);

  const classes = useListStyle(store);
  return (
    <div className={clx(classes.list, props.reverseItems && classes.reverseItems)}>
      {createResponsiveImage(props?.image, {
        className: classes.listImage,
      })}
      <div className={classes.listContent}>
        <h4 className={classes.listHeading}>{decodeText(props.heading)}</h4>
        <p className={classes.listBody}>{decodeText(props.body)}</p>
      </div>
    </div>
  );
};
