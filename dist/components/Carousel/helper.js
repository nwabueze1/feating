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
export function onSlide(_a) {
    var dimension = _a.dimension, isMoved = _a.isMoved, setCurrentSlide = _a.setCurrentSlide, setIsMoved = _a.setIsMoved, cards = _a.cards, currentSlide = _a.currentSlide, itemsPerSlide = _a.itemsPerSlide;
    return function () {
        if (dimension) {
            if (isMoved.move === 0) {
                setCurrentSlide(currentSlide);
            }
            else if (isMoved.up > isMoved.down) {
                setIsMoved(function (prev) {
                    var _a;
                    return (__assign(__assign({}, prev), (_a = {}, _a['move'] = 0, _a)));
                });
                var index = cards && currentSlide === 0 ? currentSlide - 0 : currentSlide - 1;
                setCurrentSlide(index);
                setIsMoved(function (prev) {
                    var _a;
                    return (__assign(__assign({}, prev), (_a = {}, _a['move'] = 0, _a['up'] = 0, _a['down'] = 0, _a)));
                });
            }
            else if (isMoved.up < isMoved.down && isMoved.up !== 0) {
                setIsMoved(function (prev) {
                    var _a;
                    return (__assign(__assign({}, prev), (_a = {}, _a['move'] = 0, _a)));
                });
                var index = cards && currentSlide === cards.length - (itemsPerSlide !== null && itemsPerSlide !== void 0 ? itemsPerSlide : 0)
                    ? currentSlide + 0
                    : currentSlide + 1;
                setCurrentSlide(index);
                setIsMoved(function (prev) {
                    var _a;
                    return (__assign(__assign({}, prev), (_a = {}, _a['move'] = 0, _a['up'] = 0, _a['down'] = 0, _a)));
                });
            }
            else {
                setCurrentSlide(currentSlide);
            }
        }
    };
}
