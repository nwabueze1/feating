import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { blockContext, createBlockStore } from "./helpers/blockStore";
export var BlockProvider = function (_a) {
    var colors = _a.colors, children = _a.children, fonts = _a.fonts, block_uuid = _a.block_uuid;
    var store = createBlockStore(colors, fonts, block_uuid);
    return (_jsx(Provider, { store: store, context: blockContext, children: children }));
};
