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
import { useEuBlock22Styles } from "./styles";
import { useGetColor } from "../../hooks";
import { useGetConfiguration } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
export var EuBlock22 = function (_a) {
    var content = _a.content, _b = _a.mode, mode = _b === void 0 ? "view" : _b, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfiguration = getConfiguration(props.configuration, "main", getMappedColor);
    var classes = useEuBlock22Styles(blockConfiguration);
    return (_jsx(BlockProvider, __assign({}, blockConfiguration, { children: _jsxs("div", { className: classes.container, children: [_jsxs("div", { className: classes.leftSection, children: [_jsx("h1", { children: "Oops, we couldn\u2019t find this page" }), _jsx("p", { children: "Sorry the page you\u2019re looking for does not exist or has been moved, try refreshing the page or go back home" })] }), _jsx("div", { className: classes.rightSection, children: _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/Frame+8829.png", alt: "404" }) })] }) })));
};
