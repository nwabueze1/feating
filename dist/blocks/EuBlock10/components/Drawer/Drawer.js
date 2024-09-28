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
import { useDrawerStyles } from ".";
import clx from "classnames";
import { BiShoppingBag } from "react-icons/bi";
import { useNavActionStyles } from "../../";
import { useBlockSelector } from "../../../../helpers";
import { IoMdClose } from "react-icons/io";
export var Drawer = function (_a) {
    var links = _a.links, mode = _a.mode, open = _a.open, onClose = _a.onClose, layout = _a.layout, props = __rest(_a, ["links", "mode", "open", "onClose", "layout"]);
    var config = useBlockSelector(function (store) { return store; });
    var classes = useDrawerStyles(config);
    var actionClass = useNavActionStyles(config);
    var renderNavLinks = function () {
        return links.map(function (link, index) { return (_jsx("li", { className: classes.navListItem, onClick: onClose, children: mode === "view" ? (_jsx("a", { href: link === null || link === void 0 ? void 0 : link.url, className: classes.navLink, children: link === null || link === void 0 ? void 0 : link.text })) : (_jsx("p", { className: classes.navLink, children: link === null || link === void 0 ? void 0 : link.text })) }, index)); });
    };
    return open ? (_jsx("div", { className: clx(classes.root, open && "active", layout), children: _jsxs("div", { className: classes.container, children: [_jsx("div", { className: classes.navCloseParent, onClick: onClose, children: _jsx(IoMdClose, { className: "close-icon" }) }), _jsxs("ul", { className: classes.navList, children: [layout === "layout-3" && (_jsx("li", { className: classes.navListItem, children: _jsxs("a", { href: "/cart", className: clx(actionClass.cartButton, layout, "drawer"), children: [_jsxs("div", { className: actionClass.cartIconContainer, children: [_jsx(BiShoppingBag, { className: actionClass.cartIcon }), _jsx("span", { className: actionClass.badge, children: props.numberOfItemsInCart })] }), _jsx("span", { children: "Cart" })] }) })), renderNavLinks()] })] }) })) : null;
};
