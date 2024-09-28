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
import { useEuBlock16AnimationStyles, useEuBlock16Styles, ImageDisplay } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration } from "../../helpers";
import { useMediaQuery, useTheme } from "@mui/material";
import { decodeText } from "../../helpers/decodeText";
export var EuBlock16 = function (_a) {
    var _b;
    var content = _a.content, _c = _a.mode, mode = _c === void 0 ? "view" : _c, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var configuration = getConfiguration(props.configuration, "main", getMappedColor);
    var classes = useEuBlock16Styles(configuration);
    var animationClass = useEuBlock16AnimationStyles();
    var layout = useSelectedLayout(props.layouts);
    var isLayout4or5 = layout === "layout-4" || layout === "layout-5";
    var theme = useTheme();
    var lg = useMediaQuery(theme.breakpoints.down("lg"));
    var key = "blocks." + String(index);
    var Heading = function () {
        var _a, _b;
        return (_jsxs(_Fragment, { children: [_jsx("p", { className: classes.overline, children: decodeText((_a = content === null || content === void 0 ? void 0 : content.text) === null || _a === void 0 ? void 0 : _a.overline) }), _jsx("h2", { className: clx(classes.heading, layout), children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.main) })] }));
    };
    return (_jsx("section", { className: clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block16ActiveElement), onClick: function () {
            mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
        }, children: _jsxs("div", { className: classes.container, children: [lg && isLayout4or5 && _jsx(Heading, {}), _jsxs("div", { className: clx(classes.block, layout), children: [_jsx("div", { className: clx(classes.blockContent, classes.blockImageContainer, layout, animationClass.base), children: _jsx(ImageDisplay, { image: content === null || content === void 0 ? void 0 : content.image, layout: layout }) }), _jsxs("div", { className: clx(classes.blockContent, layout, animationClass.base), style: { animationDuration: "2s" }, children: [lg && isLayout4or5 ? null : _jsx(Heading, {}), _jsx("p", { className: classes.body, children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.body) })] })] })] }) }));
};
