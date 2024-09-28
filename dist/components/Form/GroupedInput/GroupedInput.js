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
import { FormControl } from "../FormControl";
import { useGroupedInputStyles } from "./styles";
export var GroupedInput = function (_a) {
    var name = _a.name, controls = _a.controls;
    var classes = useGroupedInputStyles();
    var displayControls = function () { return controls.map(function (control, index) { return _jsx(FormControl, __assign({}, control), index); }); };
    return (_jsxs("div", { children: [name, _jsx("div", { className: classes.inputs, children: displayControls() })] }));
};
