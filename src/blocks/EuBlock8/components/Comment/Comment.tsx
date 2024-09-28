import { FC } from "react";
import { useSelector } from "react-redux";
import { BlockConfigType } from "types";
import { CommentPropsType, useCommentStyles } from "./";
import clx from "classnames";
import { createImageSrcset, imageSizes } from "../../../../helpers";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";

export const Comment: FC<CommentPropsType> = ({ isLayout4or5, layout, ...comment }) => {
  const store = useSelector<BlockConfigType, BlockConfigType>((state) => state);
  const classes = useCommentStyles(store as any);

  return (
    <div className={isLayout4or5 ? clx(classes.testament, layout, "item") : `${classes.testamentItem} item`}>
      <header className={clx(classes.testimonyHeader, layout)}>
        <div className={classes.titleContainer}>
          <div className={classes.avatarContainer}>
            <img className={classes.avatar} srcSet={createImageSrcset(comment?.user?.image)} src={comment?.user?.image?.src} sizes={imageSizes} alt={comment?.user?.image?.alternative_text} />
          </div>
          <div className={clx(classes.titleHeading, layout)}>
            <div>
              <h6 className={classes.testimonyTitle}>{decodeText(comment?.user?.name)} </h6>
              <p className={classes.testimonySub}>{decodeText(comment?.user?.tag)}</p>
            </div>
          </div>
        </div>
      </header>
      <p className={classes.testimony}>{comment.comment}</p>
    </div>
  );
};
