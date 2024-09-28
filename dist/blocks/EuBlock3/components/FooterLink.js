import { jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { useBlock3ComponentStyes } from "./";
import { useBlockSelector, useRecordLinkClick } from "../../../helpers";
export var FooterLink = function (_a) {
    var children = _a.children, layout = _a.layout, _b = _a.href, href = _b === void 0 ? "" : _b, mode = _a.mode;
    var classes = useBlock3ComponentStyes();
    var config = useBlockSelector(function (state) { return state; });
    var recordLinkClick = useRecordLinkClick();
    var handleClick = function () {
        mode === "view" && recordLinkClick(String(children), href !== null && href !== void 0 ? href : "", config.block_uuid);
    };
    return (_jsx("a", { href: mode === "view" ? href : undefined, className: clx(classes.footerListItemLink, layout), onClick: handleClick, children: children }));
};
