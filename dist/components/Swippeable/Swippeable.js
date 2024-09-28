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
import { useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import { useSwipeAble } from "./styles";
import clx from "classnames";
export var SwipeAble = forwardRef(function (_a, ref) {
    var children = _a.children, gap = _a.gap, styles = _a.styles, classNames = _a.classNames;
    var containerRef = useRef(null);
    var _b = __read(useState(false), 2), isDragging = _b[0], setIsDragging = _b[1];
    var _c = __read(useState(false), 2), smooth = _c[0], setSmooth = _c[1];
    var _d = __read(useState(0), 2), lastX = _d[0], setLastX = _d[1];
    var _e = __read(useState(false), 2), isEndReached = _e[0], setIsEndReached = _e[1];
    var _f = __read(useState(true), 2), isStartReached = _f[0], setIsStartReached = _f[1];
    var classes = useSwipeAble();
    var theme = useTheme();
    var xs = useMediaQuery(theme.breakpoints.down("lg"));
    var handleMouseDown = useCallback(function (e) {
        e.preventDefault();
        setIsDragging(true);
        setLastX(e.clientX);
        e.currentTarget.style.cursor = "grabbing";
        setIsStartReached(false);
        setIsEndReached(false);
    }, []);
    var handleMouseMove = useCallback(function (e) {
        setSmooth(false);
        e.preventDefault();
        if (isDragging && containerRef.current) {
            var delta = e.clientX - lastX;
            containerRef.current.scrollLeft -= delta;
            setLastX(e.clientX);
        }
        if (!containerRef.current)
            return;
        var _a = containerRef.current, scrollLeft = _a.scrollLeft, clientWidth = _a.clientWidth, scrollWidth = _a.scrollWidth, offsetWidth = _a.offsetWidth;
        setIsStartReached(scrollLeft === 0);
        setIsEndReached(scrollLeft + clientWidth >= scrollWidth - offsetWidth);
    }, [isDragging, lastX]);
    var handleMouseUp = useCallback(function (e) {
        setSmooth(false);
        e.preventDefault();
        setIsDragging(false);
        e.currentTarget.style.removeProperty("cursor");
        if (!containerRef.current)
            return;
        var _a = containerRef.current, scrollLeft = _a.scrollLeft, clientWidth = _a.clientWidth, scrollWidth = _a.scrollWidth, offsetWidth = _a.offsetWidth;
        setIsStartReached(scrollLeft === 0);
        setIsEndReached(scrollLeft + clientWidth >= scrollWidth - offsetWidth);
    }, []);
    var handleScroll = function (delta) {
        delta > 0 ? setIsStartReached(false) : setIsEndReached(false);
        setSmooth(true);
        var container = containerRef.current;
        if (!container) {
            return;
        }
        var scrollAmount = xs ? 200 : container.clientWidth - 400;
        container.scrollLeft += delta * scrollAmount;
        var scrollLeft = container.scrollLeft, clientWidth = container.clientWidth, scrollWidth = container.scrollWidth;
        setIsStartReached(scrollLeft === 0);
        setIsEndReached(scrollLeft + clientWidth >= scrollWidth);
    };
    useImperativeHandle(ref, function () { return ({
        handleScroll: handleScroll,
        setSmooth: setSmooth,
        smooth: smooth,
        isEndReached: isEndReached,
        isStartReached: isStartReached,
    }); });
    return (_jsx("div", { className: clx(classes.container, classNames), ref: containerRef, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, style: __assign({ gap: gap, scrollBehavior: smooth ? "smooth" : "revert-layer" }, styles), children: children }));
});
SwipeAble.displayName = "SwipeAble";
