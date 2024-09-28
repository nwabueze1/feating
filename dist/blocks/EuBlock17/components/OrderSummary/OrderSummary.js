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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { getCurrency, useBlockSelector } from "../../../../helpers";
import { calculateCartSubTotal } from "../../helper";
import { useOrderSummaryStyles } from "./styles";
import clx from "classnames";
import { Button } from "../../../../components";
export var OrderSummary = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var step = _a.step, handleClick = _a.handleClick;
    var _p = useSelector(function (state) { return state; }), restaurant = _p.restaurant, loading = _p.loading, networkOperation = _p.networkOperation;
    var blockConfig = useBlockSelector(function (state) { return state; });
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var classes = useOrderSummaryStyles(__assign({}, blockConfig));
    var currency = getCurrency((_d = (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "");
    var subTotal = calculateCartSubTotal(cart);
    var deliveryFee = !((_e = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _e === void 0 ? void 0 : _e.firstname) ? Number((_g = (_f = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _f === void 0 ? void 0 : _f.bank_info) === null || _g === void 0 ? void 0 : _g.delivery_fee) : ((_j = (_h = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _h === void 0 ? void 0 : _h.address) === null || _j === void 0 ? void 0 : _j.uuid) ? Number((_l = (_k = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _k === void 0 ? void 0 : _k.bank_info) === null || _l === void 0 ? void 0 : _l.delivery_fee) : 0;
    var total = subTotal + deliveryFee;
    var getButtonText = function () {
        switch (step) {
            case 1:
                return "Checkout";
            case 2:
                return "Proceed to payment";
            default:
                return "";
        }
    };
    var getButtonLoading = function () {
        switch (step) {
            case 1:
                return false;
            case 2:
                return loading && (networkOperation === "set.delivery.pickup" || networkOperation === "set.delivery.dispatch");
            default:
                return false;
        }
    };
    return (_jsxs("div", { className: classes.root, children: [_jsx("p", { className: classes.summaryHeading, children: "Order Summary" }), _jsxs("div", { className: classes.summaryParent, children: [_jsxs("div", { className: classes.summary, children: [_jsx("p", { children: "Total number of dishes:" }), _jsx("p", { className: classes.summaryItemBold, children: (_o = (_m = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _m === void 0 ? void 0 : _m.length) !== null && _o !== void 0 ? _o : 0 })] }), _jsxs("div", { className: classes.summary, children: [_jsx("p", { children: "Subtotal:" }), _jsxs("p", { className: classes.summaryItemBold, children: [currency, subTotal] })] }), _jsxs("div", { className: classes.summary, children: [_jsx("p", { children: "Delivery fee:" }), _jsxs("p", { className: classes.summaryItemBold, children: [currency, deliveryFee] })] }), _jsxs("div", { className: clx(classes.summary, classes.summaryItemBold, classes.summaryTotal), children: [_jsx("p", { children: "Total:" }), _jsxs("p", { children: [currency, total] })] }), _jsx(Button, { variant: "contained", size: "medium", onClick: handleClick, isLoading: getButtonLoading(), className: classes.summaryButton, children: getButtonText() })] })] }));
};
