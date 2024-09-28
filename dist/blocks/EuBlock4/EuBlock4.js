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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useSelectedLayout } from "../../hooks";
import { useEuBlock4Styles } from "./styles.ts";
import clx from "classnames";
import { List } from "../../components/List";
import { Block4Layouts } from "./data/useBlock4Layout";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEuBlock4ListStyles } from "./blockListStyles";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration, createImageSrcset, imageSizes, createResponsiveImage } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { decodeText } from "../../helpers/decodeText";
export var EuBlock4 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var content = _a.content, configuration = _a.configuration, _m = _a.mode, mode = _m === void 0 ? "view" : _m, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "configuration", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockStyleConfig = getConfiguration(configuration, "main", getMappedColor);
    var classes = useEuBlock4Styles(blockStyleConfig);
    var listClasses = useEuBlock4ListStyles(__assign({}, blockStyleConfig));
    var layout = useSelectedLayout(props.layouts);
    var isLayout5 = layout === Block4Layouts.layout5;
    var isLayout4 = layout === Block4Layouts.layout4;
    var theme = useTheme();
    var md = useMediaQuery(theme.breakpoints.down("lg"));
    var key = "blocks." + String(index);
    var renderListContent = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.list) === null || _a === void 0 ? void 0 : _a.map(function (c, index) { return (_jsx(List, { screenSize: props === null || props === void 0 ? void 0 : props.screenSize, heading: c === null || c === void 0 ? void 0 : c.heading, image: c === null || c === void 0 ? void 0 : c.image, body: c === null || c === void 0 ? void 0 : c.body, reverseItems: isLayout4 }, index)); });
    };
    return (_jsx(BlockProvider, { colors: blockStyleConfig.colors, fonts: blockStyleConfig.fonts, children: _jsxs("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block4ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: [_jsx("div", { className: clx(classes.redBackground, layout) }), _jsx("div", { className: clx(classes.goldBackground, layout) }), _jsx("div", { className: classes.container, children: (isLayout5 && md) || !isLayout5 ? (_jsxs(_Fragment, { children: [_jsxs("article", { className: clx(classes.sectionHead, layout), children: [_jsxs("div", { className: clx(classes.sectionContent, layout), children: [_jsx("p", { className: clx(classes.blockOverline, layout), children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.overline) }), _jsx("h4", { className: clx(classes.blockHeading, layout), children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.title) }), _jsx("p", { className: clx(classes.blockCaption, layout), children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.subtitle) })] }), _jsx("div", { className: clx(classes.sectionContent, layout), children: _jsxs("div", { className: clx(classes.backgroundContainer, layout), children: [_jsx("img", { src: (_e = content === null || content === void 0 ? void 0 : content.backgroundImage) === null || _e === void 0 ? void 0 : _e.src, className: classes.backgroundImage }), _jsx("img", { src: (_f = content === null || content === void 0 ? void 0 : content.backgroundImage) === null || _f === void 0 ? void 0 : _f.src, className: clx(classes.backgroundImage, classes.backgroundImageLeft) })] }) })] }), _jsxs("article", { className: clx(classes.block, layout), children: [_jsx("div", { className: classes.blockContent, children: _jsx("div", { className: listClasses.blockList, children: renderListContent() }) }), _jsxs("div", { className: clx(classes.blockContent, "img"), children: [createResponsiveImage(content === null || content === void 0 ? void 0 : content.image, {
                                                className: clx(listClasses.blockImage, layout),
                                                screenSize: props === null || props === void 0 ? void 0 : props.screenSize,
                                                styles: {
                                                    picture: {
                                                        height: "100%",
                                                        width: "100%",
                                                    },
                                                },
                                            }), _jsx("div", { className: clx(listClasses.imageOverlay, layout) })] })] })] })) : (_jsxs("div", { className: clx(listClasses.layout5Container, layout), children: [_jsxs("div", { className: clx(classes.blockContent, "img"), children: [_jsx("img", { srcSet: createImageSrcset(content === null || content === void 0 ? void 0 : content.image), src: (_g = content === null || content === void 0 ? void 0 : content.image) === null || _g === void 0 ? void 0 : _g.src, sizes: imageSizes, alt: (_h = content === null || content === void 0 ? void 0 : content.image) === null || _h === void 0 ? void 0 : _h.alternative_text, className: clx(listClasses.blockImage, layout) }), _jsx("div", { className: clx(listClasses.imageOverlay, layout) })] }), _jsxs("div", { className: listClasses.layout5Content, children: [_jsx("p", { className: clx(classes.blockOverline, layout), children: decodeText((_j = content === null || content === void 0 ? void 0 : content.text) === null || _j === void 0 ? void 0 : _j.overline) }), _jsx("h4", { className: clx(classes.blockHeading, layout), children: decodeText((_k = content === null || content === void 0 ? void 0 : content.text) === null || _k === void 0 ? void 0 : _k.title) }), _jsx("p", { className: clx(classes.blockCaption, layout), children: decodeText((_l = content === null || content === void 0 ? void 0 : content.text) === null || _l === void 0 ? void 0 : _l.subtitle) }), _jsx("div", { className: listClasses.blockList, children: renderListContent() })] })] })) })] }) }));
};
