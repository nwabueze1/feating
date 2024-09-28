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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { Swiper, useCarouselStyles } from './';
import clx from 'classnames';
import { onSlide } from './helper';
import { useBlockSelector } from '../../helpers';
export var Carousel = function (_a) {
    var _b;
    var cards = _a.cards, itemsPerSlide = _a.itemsPerSlide, currentSlider = _a.currentSlider, itemsToSlide = _a.itemsToSlide, arrow = _a.arrow, onChange = _a.onChange, _c = _a.hasPointer, hasPointer = _c === void 0 ? true : _c;
    var mainConfig = useBlockSelector(function (state) { return state; });
    var classes = useCarouselStyles(mainConfig);
    var imageWidth = itemsPerSlide && 100 / itemsPerSlide;
    var pointerValue = cards && itemsPerSlide && Math.floor(cards.length / itemsPerSlide);
    var pointerCount = cards &&
        itemsPerSlide &&
        itemsToSlide &&
        cards.length - itemsPerSlide + itemsToSlide;
    var _d = __read(useState(0), 2), currentSlide = _d[0], setCurrentSlide = _d[1];
    var _e = __read(useState(true), 2), endNext = _e[0], setEndNext = _e[1];
    var _f = __read(useState(false), 2), endPrev = _f[0], setEndPrev = _f[1];
    var _g = __read(useState(), 2), dimension = _g[0], setDimension = _g[1];
    useEffect(function () {
        if (!dimension) {
            var box = document.querySelector('#carousel_1');
            setDimension(box === null || box === void 0 ? void 0 : box.getBoundingClientRect());
        }
        setCurrentSlide(currentSlider);
    }, [currentSlider]);
    useEffect(function () {
        onChange(currentSlide);
    }, [currentSlide]);
    useEffect(function () {
        var _a;
        setEndNext(currentSlide + (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0) - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0) >=
            ((_a = cards === null || cards === void 0 ? void 0 : cards.length) !== null && _a !== void 0 ? _a : 0) - 1);
        setEndPrev(currentSlide + (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0) - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0) <=
            (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0) - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0));
    }, [currentSlide, currentSlider]);
    var prevSlide = useCallback(function () {
        var _a;
        var index = currentSlide + (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0) - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0) <= 2
            ? ((_a = cards === null || cards === void 0 ? void 0 : cards.length) !== null && _a !== void 0 ? _a : 0) - (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0)
            : currentSlide - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0);
        setCurrentSlide(index);
    }, [setCurrentSlide, currentSlide, itemsPerSlide, itemsPerSlide]);
    var nextSlide = useCallback(function () {
        var index = cards &&
            currentSlide + (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0) - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0) >=
                cards.length - 1
            ? 0
            : currentSlide + (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0);
        setCurrentSlide(index);
    }, [setCurrentSlide, currentSlide, itemsPerSlide, itemsPerSlide]);
    var _h = __read(useState({ move: 0, up: 0, down: 0 }), 2), isMoved = _h[0], setIsMoved = _h[1];
    var _j = __read(useState(false), 2), isDragging = _j[0], setIsDragging = _j[1];
    var handleSlide = onSlide({
        dimension: dimension,
        isMoved: isMoved,
        setCurrentSlide: setCurrentSlide,
        currentSlide: currentSlide,
        setIsMoved: setIsMoved,
        cards: cards,
        itemsPerSlide: itemsPerSlide,
    });
    var handleDrag = useCallback(function (e) {
        isDragging && setIsMoved(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a['move'] = e.clientX, _a)));
        });
    }, [isDragging, setIsMoved]);
    var handlePointer = function (i) { return setCurrentSlide(i); };
    return (_jsxs("div", { className: clx(classes.carouselContainer, 'carousels'), children: [_jsxs("div", { className: clx(classes.carouselImage, {
                    arrow: arrow,
                }), children: [arrow && (_jsx("div", { className: clx(classes.carouselPrevious), children: !endPrev && (_jsx("div", { className: clx(classes.arrow), onClick: prevSlide, children: _jsx("div", { className: clx(classes.buttonArrow, 'prev') }) })) })), _jsx("div", { className: clx(classes.carouselRender), children: _jsx(Swiper, { dimension: dimension, currentSlide: currentSlide, isMoved: isMoved, handleSlide: handleSlide, isDragging: isDragging, cards: cards, imageWidth: imageWidth, setIsMoved: setIsMoved, setIsDragging: setIsDragging, handleDrag: handleDrag }) }), arrow && !endNext && (_jsx("div", { className: clx(classes.carouselNext), onClick: nextSlide, children: _jsx("div", { className: clx(classes.arrow), children: _jsx("div", { className: classes.buttonArrow }) }) }))] }), hasPointer && pointerValue && itemsPerSlide !== 0 && (_jsx("div", { className: classes.pointers, children: (_b = Array(pointerCount)
                    .fill(0)) === null || _b === void 0 ? void 0 : _b.map(function (_, i) {
                    return i !== currentSlide ? (_jsx("img", { src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Ellipse+7.svg', onClick: function () { return handlePointer(i); }, className: classes.pointerImg }, i)) : (_jsx("img", { src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+8.svg', onClick: function () { return handlePointer(i); }, className: classes.pointerImgActive }, i));
                }) }))] }));
};
