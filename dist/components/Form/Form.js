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
import { FormControl } from "./FormControl";
import { useFormStyles } from "./styles";
export var Form = function (_a) {
    var controls = _a.controls;
    var classes = useFormStyles();
    var displayControls = function () { return controls.map(function (control, index) { return _jsx(FormControl, __assign({}, control), index); }); };
    return _jsx("div", { className: classes.root, children: displayControls() });
};
