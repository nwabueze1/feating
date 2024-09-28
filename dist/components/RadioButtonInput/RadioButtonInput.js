import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBlockSelector } from "../../helpers";
import { useRadioButtonInputStyles } from "./styles";
import { Radio, InputLabel } from "@mui/material";
import clx from "classnames";
export var RadioButtonInput = function (_a) {
    var className = _a.className, label = _a.label, name = _a.name, value = _a.value, onChange = _a.onChange;
    var _b = useBlockSelector(function (store) { return store; }), colors = _b.colors, fonts = _b.fonts;
    var classes = useRadioButtonInputStyles({ colors: colors, fonts: fonts });
    var handleChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: event.target.checked });
    };
    return (_jsxs("div", { className: clx(classes.root, className), children: [label && _jsx(InputLabel, { htmlFor: name, children: label }), _jsx(Radio, { className: classes.radio, checked: value, onChange: handleChange })] }));
};
