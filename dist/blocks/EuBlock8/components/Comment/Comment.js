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
import { useSelector } from "react-redux";
import { useCommentStyles } from "./";
import clx from "classnames";
import { createImageSrcset, imageSizes } from "../../../../helpers";
import { decodeText } from "../../../../helpers/decodeText";
export var Comment = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var isLayout4or5 = _a.isLayout4or5, layout = _a.layout, comment = __rest(_a, ["isLayout4or5", "layout"]);
    var store = useSelector(function (state) { return state; });
    var classes = useCommentStyles(store);
    return (_jsxs("div", { className: isLayout4or5 ? clx(classes.testament, layout, "item") : "".concat(classes.testamentItem, " item"), children: [_jsx("header", { className: clx(classes.testimonyHeader, layout), children: _jsxs("div", { className: classes.titleContainer, children: [_jsx("div", { className: classes.avatarContainer, children: _jsx("img", { className: classes.avatar, srcSet: createImageSrcset((_b = comment === null || comment === void 0 ? void 0 : comment.user) === null || _b === void 0 ? void 0 : _b.image), src: (_d = (_c = comment === null || comment === void 0 ? void 0 : comment.user) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.src, sizes: imageSizes, alt: (_f = (_e = comment === null || comment === void 0 ? void 0 : comment.user) === null || _e === void 0 ? void 0 : _e.image) === null || _f === void 0 ? void 0 : _f.alternative_text }) }), _jsx("div", { className: clx(classes.titleHeading, layout), children: _jsxs("div", { children: [_jsxs("h6", { className: classes.testimonyTitle, children: [decodeText((_g = comment === null || comment === void 0 ? void 0 : comment.user) === null || _g === void 0 ? void 0 : _g.name), " "] }), _jsx("p", { className: classes.testimonySub, children: decodeText((_h = comment === null || comment === void 0 ? void 0 : comment.user) === null || _h === void 0 ? void 0 : _h.tag) })] }) })] }) }), _jsx("p", { className: classes.testimony, children: comment.comment })] }));
};
