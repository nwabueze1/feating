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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useCartSummaryStyles } from "./styles";
import { getCurrency, useBlockSelector } from "../../helpers";
import { Button } from "../Button";
import { BlockProvider } from "../../BlockProvider";
import { useSelector } from "react-redux";
export var CartSummary = function (_a) {
    var _b, _c, _d;
    var buttonConfig = _a.buttonConfig, total = _a.total, cartLength = _a.cartLength, handleProgress = _a.handleProgress, type = _a.type;
    var restaurant = useSelector(function (store) { return store; }).restaurant;
    var blockConfiguration = useBlockSelector(function (state) { return state; });
    var classes = useCartSummaryStyles(blockConfiguration);
    var currency = (_d = (_c = (_b = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart) === null || _b === void 0 ? void 0 : _b.restaurant) === null || _c === void 0 ? void 0 : _c.bank_info) === null || _d === void 0 ? void 0 : _d.currency;
    var arrayOfData = [{ "Total number of order": cartLength }, { Subtotal: "".concat(getCurrency(currency)).concat(total) }];
    var displaySubtotal = function () {
        return arrayOfData === null || arrayOfData === void 0 ? void 0 : arrayOfData.map(function (data, index) { return (_jsxs("div", { className: classes.subtotal, children: [_jsxs("p", { children: [Object.keys(data), ":"] }), _jsx("p", { className: classes.subtotalValue, children: Object.values(data) })] }, index)); });
    };
    return (_jsx("article", { className: classes.root, children: _jsxs("div", { className: classes.container, children: [_jsx("div", { className: classes.header, children: "Order Summary" }), displaySubtotal(), _jsx(BlockProvider, __assign({}, buttonConfig, { children: _jsx("div", { className: classes.buttonContainer, onClick: function () { return handleProgress(type); }, children: _jsx(Button, { variant: "contained", size: "large", fullWidth: true, children: _jsx("p", { className: classes.buttonText, children: type }) }) }) }))] }) }));
};
