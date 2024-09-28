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
import { useBlockSelector } from "../../../../helpers";
import { useRelatedDishes } from "./styles";
import { useState } from "react";
import { Arrow, Card, Carousel } from "../../../../components";
import { useMediaQuery, useTheme } from "@mui/material";
export var RelatedDishes = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, title = _a.title, currency = _a.currency, relatedMenuData = _a.relatedMenuData;
    var mainConfig = useBlockSelector(function (state) { return state; });
    var classes = useRelatedDishes(mainConfig);
    var _c = __read(useState(0), 2), currentSlide = _c[0], setCurrentSlide = _c[1];
    var theme = useTheme();
    var lg = useMediaQuery(theme.breakpoints.down("lg"));
    var sm = useMediaQuery(theme.breakpoints.down("sm"));
    var slidesCount = sm ? 2 : lg ? 3 : 4;
    var handleChange = function (data) {
        setCurrentSlide(data);
    };
    var getDishes = function () {
        return relatedMenuData === null || relatedMenuData === void 0 ? void 0 : relatedMenuData.map(function (item, index) {
            var _a;
            return (_jsx(Card, { title: item === null || item === void 0 ? void 0 : item.name, price: item === null || item === void 0 ? void 0 : item.price, image: item === null || item === void 0 ? void 0 : item.image, subtitle: item === null || item === void 0 ? void 0 : item.description, numberOfLines: 2, mode: mode, currency: currency, action: {
                    title: "View",
                    href: (_a = item === null || item === void 0 ? void 0 : item.slug) !== null && _a !== void 0 ? _a : "",
                } }, index));
        });
    };
    return (_jsxs("article", { className: classes.root, children: [_jsxs("div", { className: classes.headerContainer, children: [_jsx("h1", { className: classes.header, children: title }), _jsx("div", { children: _jsx(Arrow, { onChange: handleChange, itemsPerSlide: slidesCount, itemsToSlide: 1, cards: getDishes(), currentSlider: currentSlide }) })] }), _jsx(Carousel, { cards: getDishes(), itemsPerSlide: slidesCount, itemsToSlide: 1, currentSlider: currentSlide, arrow: false, onChange: handleChange, hasPointer: false })] }));
};
