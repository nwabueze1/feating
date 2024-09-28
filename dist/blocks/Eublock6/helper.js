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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var transformMenu = function (menu) {
    var _a;
    return __assign(__assign({}, menu), { menuCategories: (_a = menu === null || menu === void 0 ? void 0 : menu.menuCategories) === null || _a === void 0 ? void 0 : _a.map(function (category) {
            var _a, _b, _c;
            return (__assign(__assign({}, category), { image: (_b = (_a = category === null || category === void 0 ? void 0 : category.menuItems) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.image, menuItems: (_c = category === null || category === void 0 ? void 0 : category.menuItems) === null || _c === void 0 ? void 0 : _c.map(function (menuItem) { return (__assign(__assign({}, menuItem), { url: "/products?product_uuid=".concat(menuItem === null || menuItem === void 0 ? void 0 : menuItem.uuid) })); }) }));
        }) });
};
export var mapMenuCategory = function (menu) { return __spreadArray([], __read(menu.menuCategories.map(function (category) {
    var _a, _b;
    return (__assign(__assign({}, category), { image: (_b = (_a = category.menuItems) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.image }));
})), false); };
export function getItemToDisplay(items, show3rows) {
    var content = [];
    var getNumberOfItems = show3rows ? 6 : 8;
    for (var i = 0; i < getNumberOfItems; i++) {
        if (!items[i])
            return content;
        content.push(items[i]);
    }
    return content;
}
