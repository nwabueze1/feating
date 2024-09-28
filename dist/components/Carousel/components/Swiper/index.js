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
import { jsx as _jsx } from "react/jsx-runtime";
export var Swiper = function (_a) {
    var dimension = _a.dimension, currentSlide = _a.currentSlide, isMoved = _a.isMoved, handleSlide = _a.handleSlide, isDragging = _a.isDragging, cards = _a.cards, imageWidth = _a.imageWidth, setIsMoved = _a.setIsMoved, setIsDragging = _a.setIsDragging, handleDrag = _a.handleDrag;
    var onMouseMoveMent = dimension &&
        (dimension === null || dimension === void 0 ? void 0 : dimension.width) * currentSlide -
            (isMoved.move === 0 ? 0 : isMoved.move - isMoved.down);
    return (_jsx("div", { draggable: false, onClick: handleSlide, style: {
            display: 'grid',
            cursor: isDragging ? 'grabbing' : 'pointer',
            width: "100%",
            gridTemplateColumns: "repeat(".concat(cards === null || cards === void 0 ? void 0 : cards.length, ", ").concat(imageWidth, "%)"),
            gridTemplateRows: "100%",
        }, onMouseUp: function (e) {
            setIsMoved(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a['up'] = e.clientX, _a)));
            });
            setIsDragging(false);
            handleSlide();
        }, onMouseMove: handleDrag, onMouseDown: function (e) {
            setIsDragging(true);
            setIsMoved(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a['down'] = e.clientX, _a)));
            });
        }, onMouseLeave: function () {
            setIsDragging(false);
        }, onDrag: function () {
            setIsDragging(false);
        }, children: cards === null || cards === void 0 ? void 0 : cards.map(function (item, index) {
            return (_jsx("div", { id: "carousel_1", style: {
                    width: '100%',
                    height: '100%',
                    transition: 'transform .8s ease',
                    transform: "translateX(".concat(onMouseMoveMent && -onMouseMoveMent, "px)"),
                    padding: '2%',
                    boxSizing: 'border-box',
                }, draggable: false, children: item }, index));
        }) }));
};
