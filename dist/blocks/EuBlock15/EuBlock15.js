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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useEuBlock18Styles, Card } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { SwipeAble } from "../../components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useMediaQuery, useTheme } from "@mui/material";
import { decodeText } from "../../helpers/decodeText";
export var EuBlock15 = function (_a) {
    var content = _a.content, _b = _a.mode, mode = _b === void 0 ? "view" : _b, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var layout = useSelectedLayout(props.layouts);
    var getMappedColor = useGetColor().getMappedColor;
    var isLayout2or3 = ["layout-2", "layout-3"].includes(layout);
    var getConfiguration = useGetConfiguration();
    var blockConfiguration = getConfiguration(props.configuration, "main", getMappedColor);
    var classes = useEuBlock18Styles(blockConfiguration);
    var swipeAbleRef = useRef(null);
    var _c = __read(useState(false), 2), hasReachedEnd = _c[0], setHasReachedEnd = _c[1];
    var _d = __read(useState(true), 2), hasReachedStart = _d[0], setHasReachedStart = _d[1];
    var theme = useTheme();
    var lg = useMediaQuery(theme.breakpoints.down("lg"));
    var sm = useMediaQuery(theme.breakpoints.down("sm"));
    var key = "blocks." + String(index);
    var handleNextClick = function () {
        var _a, _b, _c;
        (_a = swipeAbleRef.current) === null || _a === void 0 ? void 0 : _a.setSmooth(true);
        setHasReachedStart(false);
        if ((_b = swipeAbleRef.current) === null || _b === void 0 ? void 0 : _b.isEndReached)
            return setHasReachedEnd(true);
        (_c = swipeAbleRef.current) === null || _c === void 0 ? void 0 : _c.handleScroll(1);
    };
    var handlePreviousClick = function () {
        var _a, _b, _c;
        (_a = swipeAbleRef.current) === null || _a === void 0 ? void 0 : _a.setSmooth(true);
        setHasReachedEnd(false);
        if ((_b = swipeAbleRef.current) === null || _b === void 0 ? void 0 : _b.isStartReached)
            return setHasReachedStart(true);
        (_c = swipeAbleRef.current) === null || _c === void 0 ? void 0 : _c.handleScroll(-1);
    };
    var renderBlogPosts = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.posts) === null || _a === void 0 ? void 0 : _a.map(function (cardContent, index) { return (_jsx("div", { className: clx(classes.cardContainer, layout), children: _jsx(Card, __assign({}, cardContent, { layout: layout !== null && layout !== void 0 ? layout : "default", slug: cardContent === null || cardContent === void 0 ? void 0 : cardContent.slug, mode: mode })) }, index)); });
    };
    return (_jsx(BlockProvider, __assign({}, blockConfiguration, { children: _jsx("section", { className: clx(layout, mode === "edit" && key === activeElement && classes.block15ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: _jsxs("div", { className: classes.container, children: [_jsx("h4", { className: clx(classes.blockHeader, layout), children: decodeText(content === null || content === void 0 ? void 0 : content.text) }), !isLayout2or3 ? (_jsx(SwipeAble, { gap: lg ? "20px" : sm ? "10px" : "30px", ref: swipeAbleRef, styles: { scrollBehavior: "smooth" }, children: renderBlogPosts() })) : (_jsx("div", { className: classes.block, children: renderBlogPosts() })), !isLayout2or3 && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: handlePreviousClick, className: clx(classes.scrollButton, "left"), disabled: hasReachedStart, children: _jsx(BsChevronLeft, {}) }), _jsx("button", { onClick: handleNextClick, className: classes.scrollButton, disabled: hasReachedEnd, children: _jsx(BsChevronRight, {}) })] }))] }) }) })));
};
