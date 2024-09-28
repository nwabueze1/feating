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
import { useSelector } from "react-redux";
export var useGetConfiguration = function () {
    var getFonts = useGetFonts();
    return function (config, paletteSelector, getMapped) {
        var _a;
        return ({
            fonts: getFonts(config),
            colors: getMapped((_a = config === null || config === void 0 ? void 0 : config.colors) === null || _a === void 0 ? void 0 : _a[paletteSelector]),
        });
    };
};
export var useGetFonts = function () {
    var fonts = useSelector(function (store) { return store; }).fonts;
    return function (configuration) {
        if (!fonts || !(configuration === null || configuration === void 0 ? void 0 : configuration.fonts))
            return {};
        var parsedFonts = {};
        Object.entries(configuration === null || configuration === void 0 ? void 0 : configuration.fonts).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var font;
            if (!value.includes("font"))
                font = value;
            else {
                var _c = __read(value.split("."), 2), fontKey = _c[1];
                font = fonts[fontKey];
            }
            parsedFonts[key] = font;
        });
        return parsedFonts;
    };
};
export var BlockLayouts;
(function (BlockLayouts) {
    BlockLayouts["LAYOUT_1"] = "layout-1";
    BlockLayouts["LAYOUT_2"] = "layout-2";
    BlockLayouts["LAYOUT_3"] = "layout-3";
    BlockLayouts["LAYOUT_4"] = "layout-4";
    BlockLayouts["LAYOUT_5"] = "layout-5";
})(BlockLayouts || (BlockLayouts = {}));
export var transformMenu = function (menu) {
    var _a;
    return (__assign(__assign({}, menu), { activeMenuCategories: (_a = menu === null || menu === void 0 ? void 0 : menu.activeMenuCategories) === null || _a === void 0 ? void 0 : _a.map(function (item) {
            var _a;
            return (__assign(__assign({}, item), { image: (_a = item.menuItems[0]) === null || _a === void 0 ? void 0 : _a.image, menuItems: item.menuItems.map(function (content) { return (__assign(__assign({}, content), { url: "/products?product_uuid=".concat(content === null || content === void 0 ? void 0 : content.uuid) })); }) }));
        }) }));
};
export var defaultButtonColor = {
    "100": "primary.main",
    "200": "primary.400",
    "300": "neutral.100",
    "400": "neutral.200",
};
export var getDateDuration = function (dateStr) {
    var _a;
    var currentDate = new Date();
    var date = new Date(dateStr);
    var timestamp = date.getTime() + ((_a = new Date().getTimezoneOffset()) !== null && _a !== void 0 ? _a : 0) * -1 * 60 * 1000;
    var givenDate = new Date(timestamp);
    var timeDiffMs = currentDate.getTime() - givenDate.getTime();
    var timeDiffSeconds = Math.floor(timeDiffMs / 1000);
    var timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
    var timeDiffHours = Math.floor(timeDiffMinutes / 60);
    var timeDiffDays = Math.floor(timeDiffHours / 24);
    var timeDiffWeeks = Math.floor(timeDiffDays / 7);
    var timeDiffMonths = Math.floor(timeDiffDays / 30);
    var timeDiffYears = Math.floor(timeDiffDays / 365);
    if (timeDiffYears > 0) {
        return "".concat(timeDiffYears, " year").concat(timeDiffYears === 1 ? "" : "s", " ago");
    }
    else if (timeDiffMonths > 0) {
        return "".concat(timeDiffMonths, " month").concat(timeDiffMonths === 1 ? "" : "s", " ago");
    }
    else if (timeDiffWeeks > 0) {
        return "".concat(timeDiffWeeks, " week").concat(timeDiffWeeks === 1 ? "" : "s", " ago");
    }
    else if (timeDiffDays > 0) {
        return "".concat(timeDiffDays, " day").concat(timeDiffDays === 1 ? "" : "s", " ago");
    }
    else if (timeDiffHours > 0) {
        return "".concat(timeDiffHours, " hour").concat(timeDiffHours === 1 ? "" : "s", " ago");
    }
    else if (timeDiffMinutes > 0) {
        return "".concat(timeDiffMinutes, " minute").concat(timeDiffMinutes === 1 ? "" : "s", " ago");
    }
    else {
        return "".concat(timeDiffSeconds, " second").concat(timeDiffSeconds === 1 ? "" : "s", " ago");
    }
};
