import { jsx as _jsx } from "react/jsx-runtime";
import { usePointerStyles } from './';
export var Pointer = function (_a) {
    var _b, _c;
    var pointerCount = _a.pointerCount, currentSlide = _a.currentSlide, onClick = _a.onClick, lg = _a.lg;
    var classes = usePointerStyles();
    return lg ? (_jsx("div", { className: classes.pointers, children: (_c = (_b = Array(pointerCount)) === null || _b === void 0 ? void 0 : _b.fill(0)) === null || _c === void 0 ? void 0 : _c.map(function (i) {
            return i !== currentSlide ? (_jsx("img", { src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Ellipse+7.svg', onClick: function () { return onClick(i); }, className: classes.pointerImg }, i)) : (_jsx("img", { src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+8.svg', onClick: function () { return onClick(i); }, className: classes.pointerImgActive }, i));
        }) })) : null;
};
