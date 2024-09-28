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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { useState } from "react";
import { useMenuListStyles } from "./styles";
import { MenuListItem } from "./MenuListItem/MenuListItem";
import clx from "classnames";
import { SwipeAble } from "../";
import { useMediaQuery, useTheme } from "@mui/material";
import { useBlockSelector } from "../../helpers";
export var MenuList = function (_a) {
    var props = __rest(_a, []);
    var config = useBlockSelector(function (store) { return store; });
    var classes = useMenuListStyles(config);
    var _b = __read(useState(0), 2), current = _b[0], setCurrent = _b[1];
    var theme = useTheme();
    var lg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
    var isMobile = useMediaQuery(theme.breakpoints.down("md"));
    var renderMenu = function () { var _a; return (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.map(function (item, i) { return _createElement(MenuListItem, __assign({}, props, { title: item.title, image: item.image, key: i, onClick: function () { return handleMenuClick(item, i); }, active: i === current })); }); };
    var handleMenuClick = function (item, index) {
        setCurrent(index);
        props.onSelectMenu(item);
    };
    var renderWebMenu = function () {
        var _a;
        return (_jsx("div", { className: clx(classes.root, props.showMobile && "mobile"), children: (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.map(function (item, i) {
                return _createElement(MenuListItem, __assign({}, props, { title: item === null || item === void 0 ? void 0 : item.title, image: item === null || item === void 0 ? void 0 : item.image, key: i, onClick: function () { return handleMenuClick(item, i); }, active: i === current }));
            }) }));
    };
    if (props.showMobile || isMobile)
        return (_jsx("div", { className: classes.mobileContainer, style: { borderRadius: props.noLeftBorderRadius ? "36px 0px 0px 36px" : "36px" }, children: lg ? (_jsx(SwipeAble, { styles: { justifyContent: lg ? "center" : undefined }, gap: props === null || props === void 0 ? void 0 : props.gap, children: renderMenu() })) : (_jsx(SwipeAble, { gap: props.gap, children: renderMenu() })) }));
    return _jsx("div", { className: clx(classes.container, props.showMobile && "mobile"), children: props.noScroll ? _jsx("div", { children: renderWebMenu() }) : _jsx(SwipeAble, { gap: props.gap, children: renderWebMenu() }) });
};
