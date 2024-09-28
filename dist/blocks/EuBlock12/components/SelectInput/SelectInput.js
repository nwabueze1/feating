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
import { useSelectInputStyles } from ".";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
export var SelectInput = function (_a) {
    var onChange = _a.onChange, options = _a.options, label = _a.label;
    var classes = useSelectInputStyles();
    var _b = __read(useState(false), 2), isOpen = _b[0], setIsOpen = _b[1];
    var _c = __read(useState(""), 2), selectedLabel = _c[0], setSelectedLabel = _c[1];
    var handleToggleDropdown = function () {
        setIsOpen(!isOpen);
    };
    var handleOptionSelect = function (option) {
        setIsOpen(false);
        setSelectedLabel(option.label);
        onChange(option);
    };
    return (_jsxs("div", { className: classes.customSelect, children: [_jsxs("div", { className: classes.select, onClick: handleToggleDropdown, children: [selectedLabel || label, isOpen ? _jsx(MdArrowDropUp, { className: classes.selectIcon }) : _jsx(MdArrowDropDown, { className: classes.selectIcon })] }), isOpen && (_jsx("div", { className: classes.dropdownContainer, children: options.map(function (option, index) { return (_jsx("div", { className: classes.dropdownItem, onClick: function () { return handleOptionSelect(option); }, children: option === null || option === void 0 ? void 0 : option.label }, index)); }) }))] }));
};
