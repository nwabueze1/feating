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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { EuBlock11Layout3or4or5, useEuBlock11Styles } from ".";
import { BlockProvider } from "../../BlockProvider";
import { Button } from "../../components";
import { BlockLayouts, getCurrency, useGetConfiguration } from "../../helpers";
import { useGetColor, useSelectedLayout } from "../../hooks";
import block11 from "../../mappings/block11";
import { decodeText } from "../../helpers/decodeText";
var BLOCK_UUID = block11.uuid;
export var EuBlock11 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var content = _a.content, _m = _a.mode, mode = _m === void 0 ? "view" : _m, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var buttonConfig = getConfiguration(props.configuration, "button", getMappedColor);
    var config = getConfiguration(props.configuration, "main", getMappedColor);
    var classes = useEuBlock11Styles(config);
    var layout = useSelectedLayout(props.layouts);
    var blockProps = __assign({ content: content, mode: mode, index: index, activeElement: activeElement, handleSelect: handleSelect }, props);
    var key = "blocks." + String(index);
    var isLayout3or4or5 = [BlockLayouts.LAYOUT_3, BlockLayouts.LAYOUT_4, BlockLayouts.LAYOUT_5].includes(layout);
    var renderButton = function () {
        var _a;
        return (_jsx(BlockProvider, { colors: buttonConfig.colors, fonts: buttonConfig.fonts, block_uuid: BLOCK_UUID, children: _jsx(Button, { href: mode === "view" ? (_a = content === null || content === void 0 ? void 0 : content.menu_item) === null || _a === void 0 ? void 0 : _a.slug : undefined, variant: "contained", size: "medium", style: { margin: 0, whiteSpace: "nowrap" }, children: "Order now" }) }));
    };
    if (isLayout3or4or5)
        return _jsx(EuBlock11Layout3or4or5, __assign({}, blockProps));
    return (_jsxs("section", { className: clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block11ActiveElement), onClick: function () {
            mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
        }, style: { backgroundImage: "url(\"".concat((_c = (_b = content === null || content === void 0 ? void 0 : content.menu_item) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.src, "\")") }, children: [_jsx("div", { className: clx(classes.container, layout), children: _jsxs("article", { className: clx(classes.block, layout, "block-content"), children: [_jsx("p", { className: classes.blockOverline, children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.overline) }), _jsx("h4", { className: classes.blockHeading, children: decodeText((_e = content === null || content === void 0 ? void 0 : content.menu_item) === null || _e === void 0 ? void 0 : _e.name) }), _jsx("p", { className: classes.blockSubtitle, children: decodeText((_f = content === null || content === void 0 ? void 0 : content.menu_item) === null || _f === void 0 ? void 0 : _f.description) }), _jsxs("h6", { className: classes.price, children: [_jsx("span", { className: classes.currency, children: getCurrency((_k = (_j = (_h = (_g = content === null || content === void 0 ? void 0 : content.menu_item) === null || _g === void 0 ? void 0 : _g.menu) === null || _h === void 0 ? void 0 : _h.restaurant) === null || _j === void 0 ? void 0 : _j.bank_info) === null || _k === void 0 ? void 0 : _k.currency) }), " ", (_l = content === null || content === void 0 ? void 0 : content.menu_item) === null || _l === void 0 ? void 0 : _l.price] }), _jsx("div", { className: clx(classes.buttonContainer, layout), children: renderButton() })] }) }), _jsx("div", { className: clx(classes.overlay, layout) })] }));
};
