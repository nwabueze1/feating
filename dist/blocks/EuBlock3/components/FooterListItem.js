import { jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { useBlock3ComponentStyes } from "./";
export var FooterListItem = function (_a) {
    var children = _a.children, layout = _a.layout;
    var classes = useBlock3ComponentStyes();
    return _jsx("li", { className: clx(classes.footerListItem, layout), children: children });
};
