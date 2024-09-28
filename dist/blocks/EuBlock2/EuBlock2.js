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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useBlog2BlockStyles } from "./styles";
import { Button } from "../../components/Button";
import { useSelectedLayout, useResponsive } from "../../hooks";
import clx from "classnames";
import { EuBlock2Layout } from "./data/useEuBlock2Layout";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration, createResponsiveImage } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import block2 from "../../mappings/block2";
import { decodeText } from "../../helpers/decodeText";
var BLOCK_UUID = block2.uuid;
export var EuBlock2 = function (_a) {
    var _b, _c, _d, _e, _f;
    var content = _a.content, configuration = _a.configuration, _g = _a.mode, mode = _g === void 0 ? "view" : _g, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "configuration", "mode", "index", "activeElement", "handleSelect"]);
    var _h = useResponsive(), md = _h.md, sm = _h.sm;
    var layout = useSelectedLayout(props.layouts);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfig = getConfiguration(configuration, "main", getMappedColor);
    var buttonConfig = getConfiguration(configuration, "button", getMappedColor);
    var classes = useBlog2BlockStyles(blockConfig);
    var isLayout5 = layout === EuBlock2Layout.layout5;
    var key = "blocks." + index;
    var renderButtons = function () {
        var _a;
        return (_jsx(_Fragment, { children: (_a = content === null || content === void 0 ? void 0 : content.buttons) === null || _a === void 0 ? void 0 : _a.map(function (button, index) {
                var _a, _b;
                return (_jsx(Button, { mode: mode, size: "large", variant: button.variant === "primary" ? "contained" : "outlined", href: mode === "view" ? (index === ((_a = content === null || content === void 0 ? void 0 : content.buttons) === null || _a === void 0 ? void 0 : _a.length) - 1 ? button === null || button === void 0 ? void 0 : button.url : (_b = content === null || content === void 0 ? void 0 : content.post) === null || _b === void 0 ? void 0 : _b.slug) : undefined, children: button === null || button === void 0 ? void 0 : button.text }, index));
            }) }));
    };
    var GetTextAndActions = function () {
        var _a;
        return (_jsxs("div", { children: [_jsx("div", { className: classes.blogBody, dangerouslySetInnerHTML: { __html: (_a = content === null || content === void 0 ? void 0 : content.post) === null || _a === void 0 ? void 0 : _a.excerpt } }), _jsx("div", { className: classes.buttonContainer, children: renderButtons() })] }));
    };
    return (_jsx(BlockProvider, { colors: buttonConfig.colors, fonts: blockConfig.fonts, block_uuid: BLOCK_UUID, children: _jsx("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block2ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: _jsxs("div", { className: classes.container, children: [layout === "layout-5" && (_jsxs("header", { className: clx(classes.layout5Text, layout), children: [_jsx("p", { className: classes.blogOverline, children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.overline) }), _jsx("h4", { className: clx(classes.blogTitle, layout), children: decodeText((_c = content === null || content === void 0 ? void 0 : content.post) === null || _c === void 0 ? void 0 : _c.title) })] })), _jsxs("article", { className: clx(classes.blogContainer, layout), children: [_jsxs("div", { className: classes.blockContent, children: [!isLayout5 && (_jsxs(_Fragment, { children: [_jsx("p", { className: clx(classes.blogOverline, layout), children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.overline) }), _jsx("h4", { className: classes.blogTitle, children: decodeText((_e = content === null || content === void 0 ? void 0 : content.post) === null || _e === void 0 ? void 0 : _e.title) })] })), !md && !sm && _jsx(GetTextAndActions, {})] }), _jsxs("div", { className: classes.blockContent, children: [_jsx("div", { className: clx(classes.blogImageContainer, layout), children: createResponsiveImage((_f = content === null || content === void 0 ? void 0 : content.post) === null || _f === void 0 ? void 0 : _f.featured_image, {
                                            className: clx(classes.blogImage, layout),
                                            screenSize: props === null || props === void 0 ? void 0 : props.screenSize,
                                            styles: {
                                                picture: {
                                                    height: "100%",
                                                    width: "100%",
                                                },
                                            },
                                        }) }), (md || sm) && _jsx(GetTextAndActions, {})] })] })] }) }) }));
};
