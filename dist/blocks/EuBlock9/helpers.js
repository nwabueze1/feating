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
import { useSelector } from "react-redux";
export var useGetMenuItems = function () {
    var _a;
    var store = useSelector(function (store) { return store; });
    var menuCategories = (_a = store.menu) === null || _a === void 0 ? void 0 : _a.activeMenuCategories;
    return menuCategories.map(function (category) { return (__assign(__assign({}, category), { menuItems: [] })); });
};
export var mapMenuCategory = function (menu, content) {
    return __spreadArray([], __read(menu.menuCategories.map(function (category) {
        var _a, _b, _c, _d;
        return (__assign(__assign({}, category), { image: (_b = (_a = category.menuItems) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.image, ctas: [
                {
                    text: (_c = content === null || content === void 0 ? void 0 : content.button) === null || _c === void 0 ? void 0 : _c.text,
                    url: "".concat((_d = content === null || content === void 0 ? void 0 : content.button) === null || _d === void 0 ? void 0 : _d.url, "?category_uuid=").concat(category.uuid, "#menu"),
                },
            ] }));
    })), false);
};
