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
import { useState } from "react";
import { useInputStyles } from "./styles";
import clx from "classnames";
export var Input = function (_a) {
    var type = _a.type, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, required = _a.required, name = _a.name, label = _a.label, isError = _a.isError, helperText = _a.helperText;
    var classes = useInputStyles();
    var _b = __read(useState(false), 2), active = _b[0], setActive = _b[1];
    var toggleActive = function () { return setActive(!active); };
    var handleChange = function (e) {
        var _a;
        if (type === "tel") {
            var phoneNumberRegexp = /^\+?[0-9]*$/; //validate if value can pass as a phone number
            if (!phoneNumberRegexp.test((_a = e.target) === null || _a === void 0 ? void 0 : _a.value)) {
                return;
            }
        }
        if (type === "number") {
            var regex = /^[0-9+-]*$/;
            if (!regex.test(e.target.value))
                return;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: e.target.value });
    };
    return (_jsxs("div", { className: clx(classes.inputContainer, "input"), children: [_jsx("input", { type: type === "number" ? "text" : type, className: isError ? classes.inputError : "", name: name, value: value, required: required, onChange: handleChange, onBlur: onBlur, onFocus: toggleActive }), label && (_jsxs("label", { className: clx(classes.inputLabel, (active || value) && classes.activeLabel), children: [label, required && _jsx("span", { className: classes.inputStar, children: "*" })] })), helperText && _jsx("span", { className: clx(classes.helperTextDefault, isError && classes.helperTextError), children: helperText })] }));
};
