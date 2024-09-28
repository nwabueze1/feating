import { BlockProviderType } from "types";
import { Provider } from "react-redux";
import { FC } from "react";
import { blockContext, createBlockStore } from "./helpers/blockStore";

export const BlockProvider: FC<BlockProviderType> = ({ colors, children, fonts, block_uuid }) => {
  const store = createBlockStore(colors, fonts, block_uuid);
  return (
    <Provider store={store} context={blockContext as any}>
      {children}
    </Provider>
  );
};
