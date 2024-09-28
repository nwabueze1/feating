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
import { useEuBlock14Styles } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { BlockLayouts, useGetConfiguration } from "../../helpers";
import { decodeText } from "../../helpers/decodeText";
export var EuBlock14 = function (_a) {
    var _b, _c;
    var content = _a.content, _d = _a.mode, mode = _d === void 0 ? "view" : _d, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfig = getConfiguration(props.configuration, "main", getMappedColor);
    var classes = useEuBlock14Styles(blockConfig);
    var layout = useSelectedLayout(props.layouts);
    var isLayout5 = layout === BlockLayouts.LAYOUT_5;
    var key = "blocks." + String(index);
    var renderHeading = function () {
        var _a, _b;
        return (_jsxs(_Fragment, { children: [_jsx("p", { className: clx(classes.blockOverline, layout), children: decodeText((_a = content === null || content === void 0 ? void 0 : content.text) === null || _a === void 0 ? void 0 : _a.overline) }), _jsx("h4", { className: clx(classes.blockTitle, layout), children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.main) })] }));
    };
    return (_jsx("section", { className: clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block14ActiveElement), onClick: function () {
            mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
        }, children: _jsxs("div", { className: classes.container, children: [isLayout5 && renderHeading(), _jsxs("div", { className: clx(classes.block, layout), children: [_jsx("aside", { className: clx(classes.blockContent, "image", layout, classes.blockImage), style: {
                                background: "url('".concat((_b = content === null || content === void 0 ? void 0 : content.image) === null || _b === void 0 ? void 0 : _b.src, "')"),
                            } }), _jsxs("article", { className: clx(classes.blockContent, "text", layout), children: [!isLayout5 && renderHeading(), _jsx("p", { className: clx(classes.blockBody, layout), children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.body) })] })] })] }) }));
};
