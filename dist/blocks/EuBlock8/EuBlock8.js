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
import { useCallback, useRef, useState } from "react";
import { useEuBlock9Styles } from "./styles";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import clx from "classnames";
import { AvatarCard } from "./components/AvatarCard/AvatarCard";
import { useMediaQuery, useTheme } from "@mui/material";
import { getScrollAmount } from "./index";
import { useSelectedLayout, useGetColor } from "../../hooks";
import { useGetConfiguration, createResponsiveImage } from "../../helpers";
import { useTestimonyStyles } from "./testimonyStyles";
import { useBlockStyles } from "./blockStyles";
import { Comment } from "./components";
import { BlockProvider } from "../../BlockProvider";
import { decodeText } from "../../helpers/decodeText";
export var EuBlock8 = function (_a) {
    var _b, _c;
    var layouts = _a.layouts, content = _a.content, _d = _a.mode, mode = _d === void 0 ? "view" : _d, index = _a.index, screenSize = _a.screenSize, activeElement = _a.activeElement, handleSelect = _a.handleSelect, configuration = _a.configuration;
    var horizontalViewRef = useRef(null);
    var layout = useSelectedLayout(layouts);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var customConfig = getConfiguration(configuration, "main", getMappedColor);
    var classes = useEuBlock9Styles(customConfig);
    var testimonyClass = useTestimonyStyles();
    var blockClass = useBlockStyles();
    var isLayout1or2 = layout === "layout-1" || layout === "layout-2";
    var theme = useTheme();
    var onlyLg = useMediaQuery(theme.breakpoints.only("lg"));
    var md = useMediaQuery(theme.breakpoints.down("lg"));
    var sm = useMediaQuery(theme.breakpoints.down("sm"));
    var downXl = useMediaQuery(theme.breakpoints.down("xl"));
    var isLayout4or5 = layout === "layout-4" || layout === "layout-5";
    var isLayout5 = layout === "layout-5";
    var _e = __read(useState(false), 2), isDragging = _e[0], setIsDragging = _e[1];
    var _f = __read(useState(0), 2), lastDivInScrollView = _f[0], setLastDivInScrollView = _f[1];
    var key = "blocks." + String(index);
    var handleMouseDown = useCallback(function (e) {
        e.preventDefault();
        setIsDragging(true);
        setLastDivInScrollView(e.clientX);
        e.currentTarget.style.cursor = "grabbing";
    }, []);
    var handleMouseMove = useCallback(function (e) {
        e.preventDefault();
        if (isDragging && horizontalViewRef.current) {
            var delta = e.clientX - lastDivInScrollView;
            horizontalViewRef.current.scrollLeft -= delta;
            setLastDivInScrollView(e.clientX);
        }
    }, [isDragging, lastDivInScrollView]);
    var handleMouseUp = useCallback(function (e) {
        e.preventDefault();
        setIsDragging(false);
        e.currentTarget.style.removeProperty("cursor");
    }, []);
    var handleScroll = function (delta) {
        var container = horizontalViewRef.current;
        if (!container)
            return;
        var scrollAmount = getScrollAmount(container, layout, md, sm, onlyLg);
        container.scrollLeft += delta * scrollAmount;
    };
    var getAvatarImage = function () {
        var _a;
        var images = (_a = content === null || content === void 0 ? void 0 : content.comments) === null || _a === void 0 ? void 0 : _a.map(function (comment) { return comment === null || comment === void 0 ? void 0 : comment.image; });
        if (images.length === 0)
            return [];
        return images;
    };
    var Heading = function () {
        var _a, _b;
        return (_jsxs(_Fragment, { children: [_jsx("p", { className: clx(classes.blockOverline, layout), children: decodeText((_a = content === null || content === void 0 ? void 0 : content.text) === null || _a === void 0 ? void 0 : _a.overline) }), _jsx("h4", { className: clx(classes.blockHeading, layout), children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.title) })] }));
    };
    var renderComments = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.comments) === null || _a === void 0 ? void 0 : _a.map(function (comment, index) { return (_jsx(Comment, { comment: comment === null || comment === void 0 ? void 0 : comment.comment, user: { name: comment === null || comment === void 0 ? void 0 : comment.name, tag: comment === null || comment === void 0 ? void 0 : comment.tag, image: comment === null || comment === void 0 ? void 0 : comment.image }, isLayout4or5: isLayout4or5, layout: layout }, index)); });
    };
    var ScrollButton = function () { return (_jsxs("div", { className: clx(testimonyClass.buttonContainer), children: [_jsx("button", { title: "prev-button", onClick: function () { return handleScroll(-1); }, className: clx(classes.scrollButton, "outlined", "left", layout), children: _jsx(BsChevronLeft, {}) }), _jsx("button", { title: "next-button", onClick: function () { return handleScroll(1); }, className: clx(classes.scrollButton, layout), children: _jsx(BsChevronRight, {}) })] })); };
    if (isLayout4or5)
        return (_jsx(BlockProvider, { fonts: customConfig.fonts, colors: customConfig.colors, children: _jsxs("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block8ActiveElement), onClick: function (e) {
                    e.stopPropagation();
                    mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
                }, children: [isLayout5 && !downXl && _jsx(ScrollButton, {}), _jsxs("div", { className: blockClass.container, children: [_jsx(Heading, {}), _jsx("article", { className: clx(blockClass.block, layout), children: _jsx("div", { className: clx(classes.blockContent, layout), children: _jsxs("article", { className: clx(blockClass.testimonyContainer, layout), children: [_jsx("div", { className: testimonyClass.menuContent, children: _jsx("div", { className: clx(testimonyClass.testimonyContent, layout), ref: horizontalViewRef, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, children: renderComments() }) }), (isLayout5 && downXl) || isLayout4or5 ? isLayout5 && !downXl ? null : _jsx(ScrollButton, {}) : null] }) }) })] })] }) }));
    return (_jsx(BlockProvider, { fonts: customConfig.fonts, colors: customConfig.colors, children: _jsx("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block8ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: _jsxs("div", { className: blockClass.container, children: [layout && !isLayout1or2 && _jsx(Heading, {}), _jsxs("article", { className: clx(blockClass.block, layout), children: [_jsxs("div", { className: clx(classes.blockContent, layout, "image-container"), children: [createResponsiveImage(content === null || content === void 0 ? void 0 : content.image, {
                                        className: clx(blockClass.blockImage, layout),
                                        screenSize: screenSize,
                                    }), _jsx("div", { className: clx(testimonyClass.avatarCardContainer, layout), children: _jsx(AvatarCard, { title: (_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.avatarTitle, secondaryText: (_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.secondaryText, layout: layout, images: getAvatarImage() }) })] }), _jsxs("div", { className: clx(classes.blockContent, layout), children: [(isLayout1or2 || !layout) && _jsx(Heading, {}), _jsxs("article", { className: blockClass.testimonyContainer, children: [_jsx("div", { className: testimonyClass.menuContent, children: _jsx("div", { className: testimonyClass.testimonyContent, ref: horizontalViewRef, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, children: renderComments() }) }), _jsx(ScrollButton, {})] })] })] })] }) }) }));
};
