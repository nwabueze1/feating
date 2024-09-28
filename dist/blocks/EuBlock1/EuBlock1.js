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
import { useEffect, useMemo, useState } from "react";
import { useEuBlock1Styles } from "./styles";
import clx from "classnames";
import { euBlock1Layouts } from "./data/euBlock1Layout";
import { Button } from "../../components/Button";
import { useSelectedLayout } from "../../hooks/useSelectedLayout";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration, createResponsiveImage } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { decodeText } from "../../helpers/decodeText";
export var EuBlock1 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var content = _a.content, _k = _a.mode, mode = _k === void 0 ? "view" : _k, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, configuration = _a.configuration, screenSize = _a.screenSize, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect", "configuration", "screenSize"]);
    var activeLayout = useSelectedLayout(props.layouts);
    var variationClassName = getVariationClassName(activeLayout);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var buttonConfig = getConfiguration(configuration, "button", getMappedColor);
    var classes = useEuBlock1Styles(getConfiguration(configuration, "main", getMappedColor));
    var isLayout4 = activeLayout === euBlock1Layouts.layout4;
    var isLayout5 = activeLayout === euBlock1Layouts.layout5;
    var key = "blocks." + String(index);
    var animatedTexts = useMemo(function () {
        var _a, _b, _c;
        return (_c = ((_b = (_a = content === null || content === void 0 ? void 0 : content.text) === null || _a === void 0 ? void 0 : _a.animated) !== null && _b !== void 0 ? _b : "").split(",")) !== null && _c !== void 0 ? _c : [];
    }, [(_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.animated]);
    var _l = __read(useState(0), 2), activeIndex = _l[0], setActiveIndex = _l[1];
    var lastIndex = animatedTexts.length - 1;
    var renderButtons = function () {
        var _a;
        return (_jsx("div", { className: clx(classes.buttonContainer, variationClassName), children: (_a = content === null || content === void 0 ? void 0 : content.buttons) === null || _a === void 0 ? void 0 : _a.map(function (button, index) { return (_jsx(Button, { size: "large", variant: (button === null || button === void 0 ? void 0 : button.variant) === "primary" ? "contained" : "outlined", mode: mode, children: button === null || button === void 0 ? void 0 : button.text }, index)); }) }));
    };
    useEffect(function () {
        var _a, _b, _c;
        if (!((_a = content === null || content === void 0 ? void 0 : content.text) === null || _a === void 0 ? void 0 : _a.animated) || ((_c = (_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.animated) === null || _c === void 0 ? void 0 : _c.length) === 0)
            return setActiveIndex(0);
        var interval = setInterval(function () {
            setActiveIndex(function (prev) { return (activeIndex === lastIndex ? 0 : prev + 1); });
        }, 3000);
        return function () { return clearInterval(interval); };
    }, [activeIndex, (_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.animated]);
    return (_jsx(BlockProvider, { colors: buttonConfig.colors, fonts: buttonConfig.fonts, children: _jsx("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block1ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: _jsx("div", { className: classes.container, children: _jsxs("div", { className: clx(classes.items_container, variationClassName), children: [_jsxs("article", { className: clx(classes.blockSection, variationClassName), children: [!isLayout5 && (_jsx("div", { className: clx(classes.overlineContainer, variationClassName), children: _jsx("p", { className: classes.overline, children: (_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.overline }) })), _jsxs("h1", { className: clx(classes.title, variationClassName), children: [decodeText((_e = content === null || content === void 0 ? void 0 : content.text) === null || _e === void 0 ? void 0 : _e.main), " ", ((_f = content === null || content === void 0 ? void 0 : content.text) === null || _f === void 0 ? void 0 : _f.animated) && _jsx("span", { className: classes.animatedTitle, children: animatedTexts[activeIndex] })] }), !isLayout4 && _jsx("p", { className: classes.subTitle, children: decodeText((_g = content === null || content === void 0 ? void 0 : content.text) === null || _g === void 0 ? void 0 : _g.sub) }), !isLayout4 && renderButtons()] }), _jsxs("article", { className: clx(classes.blockSection, "image-container", variationClassName), children: [createResponsiveImage(content === null || content === void 0 ? void 0 : content.image, {
                                    className: clx(classes.image, variationClassName),
                                    screenSize: screenSize,
                                    styles: {
                                        picture: { width: "100%", height: "100%" },
                                    },
                                }), isLayout4 && _jsx("p", { className: clx(classes.subTitle, variationClassName), children: decodeText((_h = content === null || content === void 0 ? void 0 : content.text) === null || _h === void 0 ? void 0 : _h.sub) }), isLayout4 && renderButtons(), isLayout5 && (_jsx("div", { className: clx(classes.overlineContainer, "overline-5", variationClassName), children: _jsx("p", { className: classes.overline, children: (_j = content === null || content === void 0 ? void 0 : content.text) === null || _j === void 0 ? void 0 : _j.overline }) }))] })] }) }) }) }));
};
var getVariationClassName = function (queryParam) {
    return queryParam === euBlock1Layouts.layout2
        ? "variation-b"
        : queryParam === euBlock1Layouts.layout3
            ? "variation-c"
            : queryParam === euBlock1Layouts.layout4
                ? "variation-d"
                : queryParam === euBlock1Layouts.layout5
                    ? "variation-e"
                    : "";
};
