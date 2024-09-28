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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavListItemStyles } from "./";
import clx from "classnames";
import { useBlockSelector, useRecordLinkClick } from "../../../../helpers";
export var NavListItem = function (props) {
    var blockConfig = useBlockSelector(function (state) { return state; });
    var classes = useNavListItemStyles(blockConfig);
    var _a = __read(useState(false), 2), active = _a[0], setActive = _a[1];
    var recordLinkClick = useRecordLinkClick();
    var handleClick = function () {
        var _a;
        props.mode === "view" && recordLinkClick(String(props.children), (_a = props.href) !== null && _a !== void 0 ? _a : "", blockConfig.block_uuid);
    };
    useEffect(function () {
        var active = window.location.pathname.includes(props.href);
        setActive(active);
    }, []);
    return (_jsx("li", { className: classes.navListItem, children: _jsx("a", { href: (props === null || props === void 0 ? void 0 : props.mode) === "view" ? props.href : undefined, className: clx(classes.navLink, active && "active"), onClick: handleClick, children: props.children }) }));
};
