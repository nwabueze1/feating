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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetColor } from "../../hooks";
import { useGetConfiguration } from "../../helpers";
import { useEuBlockStyles17 } from "./styles";
import { BlockProvider } from "../../BlockProvider";
import { CartItems, Delivery, EmptyState, OrderSummary, Payment, OrderDetails, usePickupConfig, useDispatchConfig } from "./components";
import block17 from "../../mappings/block17";
import { useFormik } from "formik";
import { IoArrowBack } from "react-icons/io5";
import Cookies from "universal-cookie";
import { CircularProgress } from "@mui/material";
// import { useVerifyGlobalPayments } from "@wazobia-tech/wazcom/dist/core/PaymentUI/globalPayment";
var BLOCK_UUID = block17.uuid;
export var EuBlock17 = function (_a) {
    var _b, _c, _d, _e, _f;
    var content = _a.content, configuration = _a.configuration;
    var getMappedColor = useGetColor().getMappedColor;
    var restaurant = useSelector(function (store) { return store; }).restaurant;
    var getConfiguration = useGetConfiguration();
    var blockConfiguration = getConfiguration(configuration, "main", getMappedColor);
    var classes = useEuBlockStyles17(blockConfiguration);
    var _g = __read(useState(1), 2), activeStep = _g[0], setActiveStep = _g[1];
    var _h = __read(useState((content === null || content === void 0 ? void 0 : content.loading) !== undefined ? content === null || content === void 0 ? void 0 : content.loading : true), 2), loading = _h[0], setLoading = _h[1];
    var getDeliveryPickupConfig = usePickupConfig();
    var getDeliveryDispatchConfig = useDispatchConfig();
    var deliveryPickupFormik = useFormik(__assign({}, getDeliveryPickupConfig(function () {
        setActiveStep(3);
    })));
    var deliveryDispatchFormik = useFormik(__assign({}, getDeliveryDispatchConfig(function () {
        setActiveStep(3);
    })));
    var cookies = new Cookies();
    var cartCookie = useMemo(function () { return cookies.get("cart"); }, []);
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var site_uuid = (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _b === void 0 ? void 0 : _b.site) === null || _c === void 0 ? void 0 : _c.uuid;
    var isCartEmpty = !(cart === null || cart === void 0 ? void 0 : cart.cartItems) || ((_d = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _d === void 0 ? void 0 : _d.length) === 0;
    var cartRef = useRef();
    // const verifyGlobalPayments = useVerifyGlobalPayments();
    useEffect(function () {
        var _a;
        (_a = cartRef === null || cartRef === void 0 ? void 0 : cartRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        if (!cartCookie || !cartCookie[site_uuid]) {
            setLoading(false);
            return;
        }
    }, []);
    // useEffect(() => {
    //   handleOrderConfirmation();
    // }, []);
    // const handleOrderConfirmation = async () => {
    //   const queryParams = new URLSearchParams(window.location.search);
    //   if (queryParams.get("hivedeck_payment_type") && cartCookie[site_uuid])
    //     await verifyGlobalPayments(
    //       BLOCK_UUID,
    //       () => {
    //         setLoading(false);
    //         setActiveStep(4);
    //       },
    //       () => {
    //         window.history.pushState({}, "", "/cart");
    //         setLoading(false);
    //       }
    //     );
    //   else setLoading(false);
    // };
    var handleStepProceed = function () {
        var _a, _b;
        if (activeStep > 2)
            return setActiveStep(1);
        if (activeStep === 1)
            return setActiveStep(activeStep + 1);
        if ((_a = deliveryPickupFormik.values) === null || _a === void 0 ? void 0 : _a.is_active)
            deliveryPickupFormik.handleSubmit();
        else if ((_b = deliveryDispatchFormik.values) === null || _b === void 0 ? void 0 : _b.is_active)
            deliveryDispatchFormik.handleSubmit();
    };
    var handleBack = function () {
        if (activeStep === 1)
            return;
        setActiveStep(activeStep - 1);
    };
    var renderCheckoutStep = function () {
        switch (activeStep) {
            case 1:
                return _jsx(CartItems, {});
            case 2:
            case 3:
                return _jsx(Delivery, { step: activeStep, pickupFormik: deliveryPickupFormik, dispatchFormik: deliveryDispatchFormik });
            case 4:
                return _jsx(CartItems, {});
            default:
                return _jsx("div", {});
        }
    };
    var renderCheckoutSidebar = function () {
        switch (activeStep) {
            case 1:
            case 2:
                return _jsx(OrderSummary, { step: activeStep, handleClick: handleStepProceed });
            case 3:
                return (_jsx(Payment, { onSuccess: function () {
                        setActiveStep(4);
                    } }));
            case 4:
                return _jsx(OrderDetails, {});
            default:
                return _jsx("div", {});
        }
    };
    if (loading)
        return (_jsx("div", { className: classes.cartLoaderContainer, style: { color: (_e = blockConfiguration === null || blockConfiguration === void 0 ? void 0 : blockConfiguration.colors) === null || _e === void 0 ? void 0 : _e[300] }, children: _jsx(CircularProgress, { size: "20px", color: "inherit" }) }));
    return (_jsx(BlockProvider, __assign({}, blockConfiguration, { block_uuid: BLOCK_UUID, children: _jsx("section", { className: classes.root, ref: cartRef, children: _jsxs("div", { className: classes.cartContainer, children: [activeStep > 1 && activeStep < 4 && (_jsxs("div", { className: classes.cartContainerBack, onClick: handleBack, children: [_jsx(IoArrowBack, {}), _jsx("p", { children: "Back" })] })), _jsx("h1", { className: classes.cartHeader, children: (_f = content === null || content === void 0 ? void 0 : content.text) === null || _f === void 0 ? void 0 : _f.header }), !isCartEmpty ? (_jsxs("div", { className: classes.cartContent, children: [_jsx("div", { className: classes.cartCheckout, children: renderCheckoutStep() }), _jsx("div", { className: classes.cartSidebar, children: renderCheckoutSidebar() })] })) : (_jsx(EmptyState, {}))] }) }) })));
};
