var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createContext } from "react";
import { createSelectorHook } from "react-redux";
import { createStore } from "redux";
export var BlockActionTypes;
(function (BlockActionTypes) {
    BlockActionTypes["GET_CONFIGURATIONS"] = "GET CONFIGURATIONS";
})(BlockActionTypes || (BlockActionTypes = {}));
export var blockReducer = function (state, action) {
    switch (action.type) {
        case BlockActionTypes.GET_CONFIGURATIONS:
            return __assign(__assign({}, state), { configurations: __assign({}, action.payload) });
        default:
            return state;
    }
};
export var createBlockStore = function (colors, fonts, block_uuid) {
    return createStore(blockReducer, {
        colors: colors,
        fonts: fonts,
        block_uuid: block_uuid,
    });
};
export var blockContext = createContext({});
export var useBlockSelector = createSelectorHook(blockContext);
