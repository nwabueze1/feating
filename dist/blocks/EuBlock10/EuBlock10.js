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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useEuBlock10Styles } from ".";
import { BiMenu, BiShoppingBag } from "react-icons/bi";
import clx from "classnames";
import { useSelectedLayout } from "../../hooks";
import { Drawer, NavLogo, SearchBar, NavListItem, NavButtonContainer } from "./components";
import { useNavActionStyles } from "./iconStyles";
import { useGetConfiguration } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { useGetColor } from "../../hooks";
import { useMediaQuery, useTheme } from "@mui/material";
import block10 from "../../mappings/block10";
var BLOCK_UUID = block10.uuid;
export var EuBlock10 = function (_a) {
    var _b, _c, _d, _e;
    var content = _a.content, _f = _a.mode, mode = _f === void 0 ? "view" : _f, index = _a.index, handleSelect = _a.handleSelect, activeElement = _a.activeElement, configuration = _a.configuration, screenSize = _a.screenSize, props = __rest(_a, ["content", "mode", "index", "handleSelect", "activeElement", "configuration", "screenSize"]);
    var restaurant = useSelector(function (store) { return store; }).restaurant;
    var layout = useSelectedLayout(props.layouts);
    var _g = __read(useState(false), 2), openDrawer = _g[0], setOpenDrawer = _g[1];
    var searchRef = useRef(null);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfig = getConfiguration(configuration, "main", getMappedColor);
    var actionClass = useNavActionStyles(blockConfig);
    var classes = useEuBlock10Styles(blockConfig);
    var key = "blocks." + String(index);
    var cartItemCount = (restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart) ? (_c = (_b = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart) === null || _b === void 0 ? void 0 : _b.cartItems) === null || _c === void 0 ? void 0 : _c.length : (restaurant === null || restaurant === void 0 ? void 0 : restaurant.cartItemCount) !== undefined ? restaurant === null || restaurant === void 0 ? void 0 : restaurant.cartItemCount : 0;
    var theme = useTheme();
    var isLayout1Or3 = ["layout-1", "layout-3"].includes(layout);
    var _h = __read(useState(isLayout1Or3), 2), openSearch = _h[0], setOpenSearch = _h[1];
    var lg = useMediaQuery(theme.breakpoints.up("lg"));
    var toggleSearch = function () {
        var _a;
        if (mode === "edit" || !((_a = searchRef === null || searchRef === void 0 ? void 0 : searchRef.current) === null || _a === void 0 ? void 0 : _a.value))
            return;
        window.location.href = "/search?query=".concat(searchRef.current.value);
    };
    var toggleSearchDisplay = function () {
        if (isLayout1Or3)
            return;
        setOpenSearch(!openSearch);
    };
    var toggleScroll = function () {
        if (!window)
            return;
        document.body.style.overflow = openDrawer ? "auto" : "hidden";
    };
    var toggleDrawer = function () {
        toggleScroll();
        setOpenDrawer(!openDrawer);
    };
    var handleClose = function () {
        toggleScroll();
        setOpenDrawer(false);
    };
    var renderNavLinks = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.links) === null || _a === void 0 ? void 0 : _a.map(function (link, index) { return (_jsx(NavListItem, { href: link === null || link === void 0 ? void 0 : link.url, mode: mode, children: link === null || link === void 0 ? void 0 : link.text }, index)); });
    };
    if (typeof window !== undefined) {
        if (openDrawer && lg) {
            document.body.style.overflow = "auto";
            setOpenDrawer(false);
        }
    }
    return (_jsx(BlockProvider, { colors: blockConfig.colors, fonts: blockConfig.fonts, block_uuid: BLOCK_UUID, children: _jsxs("div", { className: clx(mode === "edit" && activeElement === key && classes.block10ActiveElement, classes.base), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: [_jsxs("div", { className: clx(classes.block), children: [_jsx("div", { className: classes.root, children: _jsx("div", { className: classes.container, children: _jsxs("nav", { className: clx(classes.navBar, layout), children: [_jsx(NavLogo, { layout: layout, screenSize: screenSize, image: content === null || content === void 0 ? void 0 : content.image, text: (_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.main, url: mode === "view" ? "/" : undefined }), _jsx("ul", { className: clx(classes.navList, layout), children: renderNavLinks() }), _jsx("button", { className: clx(actionClass.toggleButton, layout), onClick: toggleDrawer, children: _jsx(BiMenu, { className: actionClass.toggleIcon }) }), _jsx(SearchBar, { ref: searchRef, layout: layout, openSearch: openSearch, toggleSearch: toggleSearch, toggleSearchDisplay: toggleSearchDisplay }), _jsx(NavButtonContainer, { layout: layout, children: _jsxs("a", { href: mode === "view" ? "/cart" : undefined, className: clx(actionClass.cartButton, layout), children: [_jsxs("span", { className: actionClass.cartIconContainer, children: [_jsx(BiShoppingBag, { className: actionClass.cartIcon }), _jsx("span", { className: actionClass.badge, children: cartItemCount })] }), _jsx("span", { children: "Cart" })] }) })] }) }) }), _jsx("div", { className: clx(actionClass.overlay, openDrawer && "active"), onClick: handleClose })] }), _jsx(Drawer, { open: openDrawer, links: content === null || content === void 0 ? void 0 : content.links, onClose: handleClose, layout: layout, numberOfItemsInCart: (_e = content === null || content === void 0 ? void 0 : content.cart) === null || _e === void 0 ? void 0 : _e.numberOfItems, mode: mode })] }) }));
};
