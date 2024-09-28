import { FC } from "react";
import { BlockConfigType } from "types";

export type EuTemplateBlockType = {
  name: string;
  component: FC<BlockConfigType>;
  props: BlockConfigType;
};
