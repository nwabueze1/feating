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
import clx from 'classnames';
import { useCarouselStyles } from '../../styles';
import { useCallback, useEffect, useState } from 'react';
import { useBlockSelector } from '../../../../helpers';
export var Arrow = function (_a) {
    var _b;
    var onChange = _a.onChange, itemsPerSlide = _a.itemsPerSlide, itemsToSlide = _a.itemsToSlide, cards = _a.cards, currentSlider = _a.currentSlider, _c = _a.hasArrow, hasArrow = _c === void 0 ? true : _c;
    var mainConfig = useBlockSelector(function (state) { return state; });
    var classesCarousel = useCarouselStyles(mainConfig);
    var _d = __read(useState(0), 2), currentSlide = _d[0], setCurrentSlide = _d[1];
    useEffect(function () {
        setCurrentSlide(currentSlider !== null && currentSlider !== void 0 ? currentSlider : 0);
    }, [currentSlider]);
    var endNext = currentSlide + (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0) - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0) >=
        ((_b = cards === null || cards === void 0 ? void 0 : cards.length) !== null && _b !== void 0 ? _b : 0) - 1;
    var endPrev = currentSlide + (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0) - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0) <=
        (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0) - (itemsToSlide !== null && itemsToSlide !== void 0 ? itemsToSlide : 0);
    var prevSlide = useCallback(function () {
        var index = currentSlide + itemsPerSlide - itemsToSlide <=
            itemsPerSlide - itemsToSlide
            ? (cards === null || cards === void 0 ? void 0 : cards.length) - itemsPerSlide
            : currentSlide - itemsToSlide;
        setCurrentSlide(index);
        onChange(index);
    }, [setCurrentSlide, currentSlide, itemsPerSlide, itemsToSlide]);
    var nextSlide = useCallback(function () {
        var index = currentSlide + itemsPerSlide - itemsToSlide >= (cards === null || cards === void 0 ? void 0 : cards.length) - 1
            ? 0
            : currentSlide + itemsToSlide;
        setCurrentSlide(index);
        onChange(index);
    }, [setCurrentSlide, currentSlide, itemsPerSlide, itemsToSlide]);
    return (_jsxs("div", { className: clx(classesCarousel.arrowContainer, { hasArrow: hasArrow }), children: [_jsx("div", { className: clx(classesCarousel.carouselPrevious), onClick: prevSlide, children: !endPrev && (_jsx("div", { className: clx(classesCarousel.arrow), children: _jsx("div", { className: clx(classesCarousel.buttonArrow, 'prev') }) })) }), _jsx("div", { className: clx(classesCarousel.carouselNext), children: !endNext && (_jsx("div", { className: clx(classesCarousel.arrow), onClick: nextSlide, children: _jsx("div", { className: classesCarousel.buttonArrow }) })) })] }));
};
