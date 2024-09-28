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
import { useMenuListItem } from "./styles";
import clx from "classnames";
import { useBlockSelector, createImageSrcset, imageSizes } from "../../../helpers";
export var MenuListItem = function (_a) {
    var _b, _c, _d, _e;
    var _f = _a.active, active = _f === void 0 ? false : _f, title = _a.title, onClick = _a.onClick, showMobile = _a.showMobile, props = __rest(_a, ["active", "title", "onClick", "showMobile"]);
    var configuration = useBlockSelector(function (store) { return store; });
    var classes = useMenuListItem(configuration);
    var activeClass = active ? "active" : "";
    return (_jsxs("div", { className: clx(classes.container, active && activeClass, showMobile && "mobile"), onClick: onClick, children: [_jsx("div", { className: clx(classes.image_container), children: props.image && _jsx("img", { srcSet: createImageSrcset(props === null || props === void 0 ? void 0 : props.image), src: (_b = props === null || props === void 0 ? void 0 : props.image) === null || _b === void 0 ? void 0 : _b.src, sizes: imageSizes, className: classes.image }) }), _jsx("p", { className: clx(classes.title, activeClass), children: ((_c = (title !== null && title !== void 0 ? title : "").charAt(0)) === null || _c === void 0 ? void 0 : _c.toUpperCase()) + ((_e = (_d = (title !== null && title !== void 0 ? title : "")) === null || _d === void 0 ? void 0 : _d.slice(1)) === null || _e === void 0 ? void 0 : _e.toLowerCase()) })] }));
};
