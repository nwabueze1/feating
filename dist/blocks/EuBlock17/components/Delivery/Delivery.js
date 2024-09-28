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
import { useState, useEffect } from "react";
import { RadioButtonInput, resetFormTouched } from "../../../../components";
import { useDeliveryStyles } from "./styles";
import { deliveryTypes } from "./helpers";
import { RxCaretUp } from "react-icons/rx";
import { useDispatchControls, usePickupControls } from "./controls";
import { Form } from "../../../../components";
import clx from "classnames";
export var Delivery = function (_a) {
    var step = _a.step, pickupFormik = _a.pickupFormik, dispatchFormik = _a.dispatchFormik;
    var _b = __read(useState("pickup"), 2), selectedDelivery = _b[0], setSelectedDelivery = _b[1];
    var classes = useDeliveryStyles();
    var getPickupControls = usePickupControls();
    var getDispatchControls = useDispatchControls();
    var pickupControls = getPickupControls(pickupFormik);
    var dispatchControls = getDispatchControls(dispatchFormik);
    useEffect(function () {
        resetFormTouched(pickupFormik);
        resetFormTouched(dispatchFormik);
        if (selectedDelivery === "pickup") {
            pickupFormik.setFieldValue("is_active", true);
            dispatchFormik.setFieldValue("is_active", false);
        }
        else {
            pickupFormik.setFieldValue("is_active", false);
            dispatchFormik.setFieldValue("is_active", true);
        }
    }, [selectedDelivery]);
    var renderDeliveryTypes = function () {
        return deliveryTypes.map(function (_a, index) {
            var name = _a.name, heading = _a.heading, description = _a.description;
            return (_jsxs("div", { children: [_jsxs("div", { className: classes.deliveryTypeAccordion, onClick: function () { return step !== 3 && setSelectedDelivery(name); }, children: [_jsxs("div", { className: classes.deliveryTypeAccordionContent, children: [_jsx(RadioButtonInput, { name: name, value: selectedDelivery === name, onChange: function () { } }), _jsxs("div", { className: "content", children: [_jsx("p", { className: "heading", children: heading }), _jsx("p", { className: "description", children: description })] })] }), _jsx(RxCaretUp, { className: clx(classes.deliveryTypeAccordionIcon, selectedDelivery === name && classes.deliveryTypeAccordionIconActive) })] }), selectedDelivery === name && (_jsx("div", { className: classes.deliveryForm, children: _jsx(Form, { controls: name === "pickup" ? pickupControls : dispatchControls }) }))] }, index));
        });
    };
    return _jsx("div", { className: classes.root, children: renderDeliveryTypes() });
};
