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
import { useEuBlock7Styles } from "./styles";
import { useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { Card } from "../../components/Card";
import { useMediaQuery, useTheme } from "@mui/material";
import { BlockProvider } from "../../BlockProvider";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration } from "../../helpers";
import { Button } from "../../components";
import block7 from "../../mappings/block7";
import { decodeText } from "../../helpers/decodeText";
var BLOCK_UUID = block7.uuid;
export var EuBlock7 = function (_a) {
    var _b, _c, _d;
    var configuration = _a.configuration, _e = _a.mode, mode = _e === void 0 ? "view" : _e, index = _a.index, screenSize = _a.screenSize, activeElement = _a.activeElement, handleSelect = _a.handleSelect, content = _a.content, props = __rest(_a, ["configuration", "mode", "index", "screenSize", "activeElement", "handleSelect", "content"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfig = getConfiguration(configuration, "main", getMappedColor);
    var buttonConfig = getConfiguration(configuration, "button", getMappedColor);
    var classes = useEuBlock7Styles(blockConfig);
    var layout = useSelectedLayout(props.layouts);
    var theme = useTheme();
    var xl = useMediaQuery(theme.breakpoints.down("xl"));
    var key = "blocks." + String(index);
    var renderButton = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.buttons) === null || _a === void 0 ? void 0 : _a.map(function (button, index) { return (_jsx(Button, { mode: mode, variant: "contained", size: "large", className: classes.listButtonContainer, href: mode === "view" ? button === null || button === void 0 ? void 0 : button.url : undefined, children: button === null || button === void 0 ? void 0 : button.text }, index)); });
    };
    var renderProducts = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.menu_items) === null || _a === void 0 ? void 0 : _a.map(function (product, index) {
            var _a, _b, _c, _d, _e, _f, _g;
            return xl && index > 5 ? null : (_jsx("div", { className: classes.cardContent, children: _jsx(Card, { screenSize: screenSize, title: product === null || product === void 0 ? void 0 : product.name, image: product === null || product === void 0 ? void 0 : product.image, rating: 4, subtitle: product === null || product === void 0 ? void 0 : product.description, price: product === null || product === void 0 ? void 0 : product.price, mode: mode, currency: (_d = (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.menu) === null || _a === void 0 ? void 0 : _a.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "", colors: { currency: (_e = blockConfig === null || blockConfig === void 0 ? void 0 : blockConfig.colors) === null || _e === void 0 ? void 0 : _e[200], action: { color: (_f = buttonConfig === null || buttonConfig === void 0 ? void 0 : buttonConfig.colors) === null || _f === void 0 ? void 0 : _f[100], background: (_g = buttonConfig === null || buttonConfig === void 0 ? void 0 : buttonConfig.colors) === null || _g === void 0 ? void 0 : _g[300] } }, action: {
                        title: "View",
                        href: product === null || product === void 0 ? void 0 : product.slug,
                    } }, index) }, index));
        });
    };
    return (_jsx(BlockProvider, { fonts: buttonConfig.fonts, colors: buttonConfig.colors, block_uuid: BLOCK_UUID, children: _jsx("section", { className: clx(classes.rootParent, mode === "edit" && key === activeElement && classes.block7ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: _jsx("div", { className: clx(classes.root), children: _jsxs("div", { className: classes.blockContainer, children: [_jsxs("header", { className: clx(classes.blockHeader, layout), children: [_jsx("p", { className: classes.blockOverline, children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.overline) }), _jsx("h4", { className: classes.blockHeading, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.title) }), _jsx("p", { className: classes.blockCaption, children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.subtitle) })] }), _jsx("div", { className: classes.productBlock, children: renderProducts() }), _jsx("div", { className: classes.buttonContainer, children: renderButton() })] }) }) }) }));
};
