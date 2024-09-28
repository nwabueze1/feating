import { MediaValue } from "../../../../helpers";

export type CommentPropsType = {
  user: {
    name: string;
    tag: string;
    image: MediaValue;
  };
    comment: string;
    layout: string;
    isLayout4or5:boolean
};