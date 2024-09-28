import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { useBlockSelector } from "../../../../helpers";
import { usePaymentStyles } from "./styles";
import { getCurrency } from "../../../../helpers";
import { calculateCartSubTotal } from "../../helper";
// import { PaymentUI } from "@wazobia-tech/wazcom/dist/core";
export var Payment = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var restaurant = useSelector(function (store) { return store; }).restaurant;
    var _m = useBlockSelector(function (store) { return store; }), colors = _m.colors, fonts = _m.fonts;
    var classes = usePaymentStyles({ colors: colors, fonts: fonts });
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var currency = getCurrency((_d = (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "");
    var subTotal = calculateCartSubTotal(cart);
    var deliveryFee = !((_e = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _e === void 0 ? void 0 : _e.firstname) ? Number((_g = (_f = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _f === void 0 ? void 0 : _f.bank_info) === null || _g === void 0 ? void 0 : _g.delivery_fee) : ((_j = (_h = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _h === void 0 ? void 0 : _h.address) === null || _j === void 0 ? void 0 : _j.uuid) ? Number((_l = (_k = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _k === void 0 ? void 0 : _k.bank_info) === null || _l === void 0 ? void 0 : _l.delivery_fee) : 0;
    var total = subTotal + deliveryFee;
    return (_jsxs("div", { className: classes.root, children: [_jsx("p", { className: classes.paymentHeading, children: "Payment options" }), _jsx("p", { className: classes.paymentDescription, children: "Please select your preferred method of payment" }), _jsxs("p", { className: classes.paymentAmount, children: ["Amount to be paid: ", currency, total] })] }));
};
