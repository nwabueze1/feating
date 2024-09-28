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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEuBlock11Styles, useLayoutStyles } from ".";
import { Button } from "../../components";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { BlockLayouts, useGetConfiguration, createImageSrcset, imageSizes, getCurrency } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { useMediaQuery, useTheme } from "@mui/material";
import block11 from "../../mappings/block11";
var BLOCK_UUID = block11.uuid;
export var EuBlock11Layout3or4or5 = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var content = _a.content, _h = _a.mode, mode = _h === void 0 ? "view" : _h, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var buttonConfig = getConfiguration(props.configuration, "button", getMappedColor);
    var config = getConfiguration(props.configuration, "main", getMappedColor);
    var classes = useEuBlock11Styles(config);
    var layoutClass = useLayoutStyles(config);
    var layout = useSelectedLayout(props.layouts);
    var theme = useTheme();
    var sm = useMediaQuery(theme.breakpoints.down("sm"));
    var menuItem = content === null || content === void 0 ? void 0 : content.menu_item;
    var key = "blocks." + String(index);
    var isLayout3or4 = layout === BlockLayouts.LAYOUT_3 || layout === BlockLayouts.LAYOUT_4;
    var renderButton = function () { return (_jsx(BlockProvider, { colors: buttonConfig.colors, fonts: buttonConfig.fonts, block_uuid: BLOCK_UUID, children: _jsx(Button, { mode: mode, href: "".concat(content === null || content === void 0 ? void 0 : content.url, "/menu/menu-items?uuid="), variant: "contained", size: "medium", style: { marginRight: 0, whiteSpace: "nowrap" }, children: "Order now" }) })); };
    return (_jsxs("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block11ActiveElement), onClick: function () {
            mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
        }, children: [_jsx("div", { className: classes.container, children: _jsxs("article", { className: clx(classes.block, layoutClass.block, layout), children: [_jsxs("div", { className: clx(layoutClass.textContainer, layout, "block-content"), children: [_jsx("header", { className: clx(layoutClass.header, layout), children: _jsxs("div", { className: layoutClass.blockHeading, children: [_jsx("p", { className: clx(classes.blockOverline, layoutClass.blockOverline, layout), children: (_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.overline }), _jsx("h4", { className: clx(classes.blockHeading, layoutClass.heading, layout), children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.name }), _jsx("p", { className: clx(classes.blockSubtitle, layoutClass.blockSub, layout), children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.description })] }) }), _jsxs("div", { className: clx(layoutClass.blockAction, layout), children: [_jsxs("h6", { className: clx(classes.price, layoutClass.price), children: [_jsx("span", { className: classes.currency, children: getCurrency((_e = (_d = (_c = menuItem === null || menuItem === void 0 ? void 0 : menuItem.menu) === null || _c === void 0 ? void 0 : _c.restaurant) === null || _d === void 0 ? void 0 : _d.bank_info) === null || _e === void 0 ? void 0 : _e.currency) }), " ", menuItem === null || menuItem === void 0 ? void 0 : menuItem.price] }), _jsx("div", { className: clx(classes.buttonContainer, layout), children: renderButton() })] })] }), isLayout3or4 && sm ? null : (_jsx("img", { srcSet: createImageSrcset(menuItem === null || menuItem === void 0 ? void 0 : menuItem.image), src: (_f = menuItem === null || menuItem === void 0 ? void 0 : menuItem.image) === null || _f === void 0 ? void 0 : _f.src, sizes: imageSizes, alt: menuItem === null || menuItem === void 0 ? void 0 : menuItem.alternative_text, className: clx(layoutClass.image, layout) }))] }) }), isLayout3or4 && sm && _jsx("div", { style: { backgroundImage: "url(\"".concat((_g = menuItem === null || menuItem === void 0 ? void 0 : menuItem.image) === null || _g === void 0 ? void 0 : _g.src, "\")") }, className: clx(classes.imageBackground, layout) })] }));
};
