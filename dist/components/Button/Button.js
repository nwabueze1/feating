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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import clx from "classnames";
import { useButtonStyles } from "./styles";
import { useBlockSelector, useRecordLinkClick } from "../../helpers";
import { CircularProgress } from "@mui/material";
export var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "contained" : _b, children = _a.children, _c = _a.size, size = _c === void 0 ? "medium" : _c, startIcon = _a.startIcon, endIcon = _a.endIcon, fullWidth = _a.fullWidth, mode = _a.mode, isLoading = _a.isLoading, props = __rest(_a, ["variant", "children", "size", "startIcon", "endIcon", "fullWidth", "mode", "isLoading"]);
    var config = useBlockSelector(function (state) { return state; });
    var classes = useButtonStyles(config);
    var recordLinkClick = useRecordLinkClick();
    var handleClick = function () {
        var _a;
        mode === "view" && recordLinkClick(String(children), (_a = props.href) !== null && _a !== void 0 ? _a : "", config.block_uuid);
    };
    return props.href ? (_jsxs("a", __assign({ href: mode === "view" ? props.href : undefined }, props, { onClick: handleClick, className: clx(classes.button, variant, size, props === null || props === void 0 ? void 0 : props.className), style: __assign({ width: fullWidth ? "100%" : "" }, props.style), children: [startIcon, " ", children, " ", endIcon] }))) : (_jsx("button", __assign({}, props, { className: clx(classes.button, variant, size, props === null || props === void 0 ? void 0 : props.className), style: __assign({ width: fullWidth ? "100%" : "" }, props.style), children: isLoading ? (_jsx("div", { style: { color: "white" }, children: _jsx(CircularProgress, { color: "inherit", size: 14 }) })) : (_jsxs(_Fragment, { children: [" ", startIcon, " ", children, " ", endIcon, " "] })) })));
};
