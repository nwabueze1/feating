import { createContext } from "react";
import { createSelectorHook } from "react-redux";
import { createStore } from "redux";

export enum BlockActionTypes {
  GET_CONFIGURATIONS = "GET CONFIGURATIONS",
}

type EuAction = {
  type: BlockActionTypes;
  payload: string[] | any;
};

export const blockReducer = (state: any, action: EuAction) => {
  switch (action.type) {
    case BlockActionTypes.GET_CONFIGURATIONS:
      return {
        ...state,
        configurations: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const createBlockStore = (colors: Record<string, string>, fonts: Record<string, string>, block_uuid?: string) =>
  createStore(blockReducer as any, {
    colors,
    fonts,
    block_uuid,
  });

export const blockContext = createContext({});

export const useBlockSelector = createSelectorHook(blockContext as any);
