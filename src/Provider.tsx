import { FC } from "react";
import { ReactReduxContext, Provider as ReduxProvider } from "react-redux";
import { ProviderPropsType } from "./types";
import { store } from "./helpers";

export const Provider: FC<ProviderPropsType> = ({ children }) => {
  return <ReduxProvider store={store()} context={ReactReduxContext}>{children}</ReduxProvider>;
};
