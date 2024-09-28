import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useBlockSelector } from "../../../../helpers";
import { getCurrency } from "../../../../helpers";
import { useOrderDetailsStyles } from "./styles";
import { calculateCartSubTotal } from "../../helper";
export var OrderDetails = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var colors = useBlockSelector(function (store) { return store; }).colors;
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var currency = getCurrency((_c = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _a === void 0 ? void 0 : _a.bank_info) === null || _b === void 0 ? void 0 : _b.currency) !== null && _c !== void 0 ? _c : "");
    var subTotal = calculateCartSubTotal(cart);
    var deliveryFee = ((_d = cart === null || cart === void 0 ? void 0 : cart.order) === null || _d === void 0 ? void 0 : _d.order_type) === "pickup"
        ? 0
        : (_f = (_e = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _e === void 0 ? void 0 : _e.bank_info) === null || _f === void 0 ? void 0 : _f.delivery_fee;
    var order_type = (_h = (_g = cart === null || cart === void 0 ? void 0 : cart.order) === null || _g === void 0 ? void 0 : _g.order_type) !== null && _h !== void 0 ? _h : "";
    var classes = useOrderDetailsStyles();
    var detailsRef = useRef();
    useEffect(function () {
        var _a;
        (_a = detailsRef === null || detailsRef === void 0 ? void 0 : detailsRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    }, []);
    var getPaymentMethod = function () {
        var _a, _b, _c;
        var paymentMethod = (_c = ((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.order) === null || _a === void 0 ? void 0 : _a.payment_type) !== null && _b !== void 0 ? _b : "")
            .toLowerCase()) === null || _c === void 0 ? void 0 : _c.replace(/_/g, " ");
        return (paymentMethod.charAt(0).toUpperCase() +
            paymentMethod.slice(1).toLowerCase());
    };
    return (_jsxs("div", { className: classes.root, ref: detailsRef, children: [_jsx("p", { className: classes.heading, children: "Order Details" }), _jsxs("div", { className: classes.detailsParent, children: [_jsxs("div", { className: classes.details, children: [_jsx("p", { children: "Order ID" }), _jsx("p", { className: classes.detailsInfo, children: (_k = (_j = cart === null || cart === void 0 ? void 0 : cart.order) === null || _j === void 0 ? void 0 : _j.uuid) === null || _k === void 0 ? void 0 : _k.slice(0, 13) })] }), _jsxs("div", { className: classes.details, children: [_jsx("p", { children: "Total number of dishes" }), _jsx("p", { className: classes.detailsInfo, children: (_l = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _l === void 0 ? void 0 : _l.length })] }), _jsxs("div", { className: classes.details, children: [_jsx("p", { children: "Sub total" }), _jsxs("p", { className: classes.detailsInfo, children: [currency, subTotal] })] }), _jsxs("div", { className: classes.details, children: [_jsx("p", { children: "Delivery Fee" }), _jsxs("p", { className: classes.detailsInfo, children: [currency, deliveryFee] })] }), _jsxs("div", { className: classes.details, children: [_jsx("p", { className: classes.detailsInfo, children: "Total" }), _jsxs("p", { className: classes.detailsInfo, children: [currency, subTotal + deliveryFee] })] })] }), _jsxs("div", { className: classes.detailsParent, children: [_jsxs("div", { className: classes.details, children: [_jsx("p", { children: "Delivery method" }), _jsx("p", { className: classes.detailsInfo, style: { color: colors === null || colors === void 0 ? void 0 : colors[300] }, children: order_type.charAt(0).toUpperCase() +
                                    order_type.slice(1).toLowerCase() })] }), _jsxs("div", { className: classes.details, children: [_jsx("p", { children: "Contact Name" }), _jsx("p", { className: classes.detailsInfo, children: "".concat((_m = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _m === void 0 ? void 0 : _m.firstname, " ").concat((_o = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _o === void 0 ? void 0 : _o.lastname) })] }), _jsxs("div", { className: classes.details, children: [_jsx("p", { children: "Contact Phone" }), _jsx("p", { className: classes.detailsInfo, children: (_p = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _p === void 0 ? void 0 : _p.phone })] }), order_type === "dispatch" && ((_q = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _q === void 0 ? void 0 : _q.address) && (_jsxs("div", { className: classes.details, children: [_jsx("p", { children: "Address" }), _jsx("p", { children: (_s = (_r = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _r === void 0 ? void 0 : _r.address) === null || _s === void 0 ? void 0 : _s.addressline1 })] }))] }), _jsxs("div", { children: [_jsxs("div", { className: classes.details, children: [_jsx("p", { style: { fontWeight: "bold" }, children: "Payment Method" }), _jsx("p", { className: classes.detailsInfo, style: { color: colors === null || colors === void 0 ? void 0 : colors[300] }, children: getPaymentMethod() })] }), _jsxs("div", { className: classes.detailsNotification, children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup_envelope.svg", alt: "Order placed successfully" }), _jsx("p", { children: "Your order has been placed successfully" })] })] })] }));
};
