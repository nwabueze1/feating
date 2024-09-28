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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useRelatedPostStyles } from "./styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { SwipeAble, Button } from "../../../../components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import clx from "classnames";
import { BlockProvider } from "../../../../BlockProvider";
import { useBlockSelector, useRecordLinkClick } from "../../../../helpers";
export var RelatedPostThumbnail = function (_a) {
    var header = _a.header, content = _a.content, layout = _a.layout, mode = _a.mode, buttonConfiguration = _a.buttonConfiguration;
    var configuration = useBlockSelector(function (store) { return store; });
    var classes = useRelatedPostStyles(configuration);
    var swipeAbleRef = useRef(null);
    var theme = useTheme();
    var _b = __read(useState(false), 2), hasReachedEnd = _b[0], setHasReachedEnd = _b[1];
    var _c = __read(useState(true), 2), hasReachedStart = _c[0], setHasReachedStart = _c[1];
    var lg = useMediaQuery(theme.breakpoints.down("lg"));
    var recordLinkClick = useRecordLinkClick();
    var handleClick = function (title, href) {
        mode === "view" && recordLinkClick(title, href, configuration.block_uuid);
    };
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
    function getRelatedPostsThumbnail(content) {
        return content === null || content === void 0 ? void 0 : content.map(function (item, index) {
            var _a;
            return (_jsx("a", { href: item === null || item === void 0 ? void 0 : item.slug, onClick: function () { return handleClick(item === null || item === void 0 ? void 0 : item.title, item === null || item === void 0 ? void 0 : item.slug); }, children: _jsxs("div", { className: clx(classes.cardContent, layout), children: [_jsx("div", { style: { backgroundImage: "url('".concat((_a = item === null || item === void 0 ? void 0 : item.featured_image) === null || _a === void 0 ? void 0 : _a.src, "')") }, className: clx(classes.backgroundImage, layout) }), _jsx("div", { className: classes.categoryContainer, children: _jsx("h5", { className: classes.category, children: item === null || item === void 0 ? void 0 : item.category_name }) }), _jsx("div", { className: classes.title, children: item === null || item === void 0 ? void 0 : item.title }), layout === "layout-3" && (_jsx(BlockProvider, __assign({}, buttonConfiguration, { children: _jsx(Button, { size: "small", variant: "outlined", className: classes.button, children: "Read article" }) })))] }) }, index));
        });
    }
    return (_jsx("div", { className: classes.root, children: _jsxs("div", { className: classes.container, children: [_jsx("div", { className: classes.latestArticleHeading, children: header }), _jsxs("div", { className: classes.thumbnailContainer, children: [(content === null || content === void 0 ? void 0 : content.length) > 0 ? (_jsx(SwipeAble, { ref: swipeAbleRef, styles: { scrollBehavior: "smooth", display: lg ? "flex" : "unset" }, children: getRelatedPostsThumbnail(content) })) : (_jsx("div", { className: classes.noPost, children: "No Related Post" })), lg && layout !== "layout-3" && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: handlePreviousClick, className: clx(classes.scrollButton, "left"), disabled: hasReachedStart, children: _jsx(BsChevronLeft, {}) }), _jsx("button", { onClick: handleNextClick, className: classes.scrollButton, disabled: hasReachedEnd, children: _jsx(BsChevronRight, {}) })] }))] })] }) }));
};
