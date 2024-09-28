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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getCurrency, useBlockSelector } from "../../../../helpers";
import clx from "classnames";
import { IoCloseOutline } from "react-icons/io5";
import { BlockProvider } from "../../../../BlockProvider";
import { Button } from "../../../../components";
import { useOptionConfigStyles } from "./styles";
export var OptionConfigCard = function (_a) {
    var _b;
    var loading = _a.loading, currency = _a.currency, handleCloseModal = _a.handleCloseModal, menuItemData = _a.menuItemData, handleSelectionOption = _a.handleSelectionOption, selectionOption = _a.selectionOption, buttonConfiguration = _a.buttonConfiguration, handleAddToOrder = _a.handleAddToOrder;
    var blockConfiguration = useBlockSelector(function (state) { return state; });
    var classes = useOptionConfigStyles(blockConfiguration);
    return (_jsxs("div", { className: classes.modalContainer, children: [_jsxs("div", { className: classes.successModal, children: [_jsx("div", { className: clx(classes.successModalText, "options"), children: "Available options" }), _jsx("div", { className: classes.close, onClick: handleCloseModal, children: _jsx(IoCloseOutline, { size: 24, color: "black" }) })] }), _jsx("div", { className: classes.divisionLine }), _jsx("div", { className: classes.optionStyles, children: (_b = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.options) === null || _b === void 0 ? void 0 : _b.map(function (item, index) {
                    var _a, _b, _c, _d;
                    var option_config = (_b = (_a = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.menu) === null || _a === void 0 ? void 0 : _a.options_config) === null || _b === void 0 ? void 0 : _b.filter(function (option) {
                        return (option === null || option === void 0 ? void 0 : option.uuid) === item;
                    })[0];
                    return (_jsxs("div", { className: classes.option, children: [_jsx("p", { className: classes.optionHeader, children: option_config === null || option_config === void 0 ? void 0 : option_config.name }), _jsx("div", { className: classes.optionSubHeader, children: (_d = Object.entries((_c = option_config === null || option_config === void 0 ? void 0 : option_config.options) !== null && _c !== void 0 ? _c : [])) === null || _d === void 0 ? void 0 : _d.map(function (_a, index) {
                                    var _b;
                                    var _c = __read(_a, 2), keys = _c[0], values = _c[1];
                                    return (((_b = values === null || values === void 0 ? void 0 : values[0]) === null || _b === void 0 ? void 0 : _b.name) && (_jsxs("div", { children: [_jsx("p", { className: classes.optionsDescription, children: keys === "selection"
                                                    ? "Select your preferred choice option(s), you can only select one option here"
                                                    : keys === "extras"
                                                        ? "Select your preferred choice option(s), you can select more than one options here"
                                                        : "De-select from the list below, of option(s) to remove from your order." }), _jsx("div", { children: values === null || values === void 0 ? void 0 : values.map(function (value, index) {
                                                    var _a, _b, _c, _d, _e;
                                                    var isSelection = keys === "selection";
                                                    var isDeselection = keys === "deselection";
                                                    var isChecked = Boolean((_a = selectionOption === null || selectionOption === void 0 ? void 0 : selectionOption.filter(function (obj) {
                                                        var _a, _b;
                                                        return (obj === null || obj === void 0 ? void 0 : obj.name) === (option_config === null || option_config === void 0 ? void 0 : option_config.name) && ((_b = (_a = obj === null || obj === void 0 ? void 0 : obj.selectedChoices) === null || _a === void 0 ? void 0 : _a.filter(function (choice) { return (choice === null || choice === void 0 ? void 0 : choice.name) === (value === null || value === void 0 ? void 0 : value.name); })) === null || _b === void 0 ? void 0 : _b[0]);
                                                    })) === null || _a === void 0 ? void 0 : _a[0]);
                                                    var selectedChoices;
                                                    var currentChoice = {
                                                        name: value === null || value === void 0 ? void 0 : value.name,
                                                        amount: String(value === null || value === void 0 ? void 0 : value.amount),
                                                    };
                                                    if (!isChecked && isSelection)
                                                        selectedChoices = [currentChoice];
                                                    if (isChecked && isSelection)
                                                        selectedChoices = [];
                                                    if (!isChecked && !isSelection)
                                                        selectedChoices = __spreadArray(__spreadArray([], __read(((_c = (_b = selectionOption.find(function (option) { return (option === null || option === void 0 ? void 0 : option.name) === (option_config === null || option_config === void 0 ? void 0 : option_config.name); })) === null || _b === void 0 ? void 0 : _b.selectedChoices) !== null && _c !== void 0 ? _c : [])), false), [currentChoice], false);
                                                    if (isChecked && !isSelection)
                                                        selectedChoices = ((_e = (_d = selectionOption.find(function (option) { return (option === null || option === void 0 ? void 0 : option.name) === (option_config === null || option_config === void 0 ? void 0 : option_config.name); })) === null || _d === void 0 ? void 0 : _d.selectedChoices) !== null && _e !== void 0 ? _e : []).filter(function (_a) {
                                                            var name = _a.name;
                                                            return name !== (value === null || value === void 0 ? void 0 : value.name);
                                                        });
                                                    return (_jsxs("div", { className: classes.optionsTypes, children: [_jsx("input", { type: isSelection ? "radio" : "checkbox", checked: isChecked, onChange: function () {
                                                                    var _a;
                                                                    return handleSelectionOption({
                                                                        type: keys,
                                                                        name: (_a = option_config === null || option_config === void 0 ? void 0 : option_config.name) !== null && _a !== void 0 ? _a : "",
                                                                        selectedChoices: selectedChoices,
                                                                    });
                                                                } }), _jsxs("div", { className: classes.optionPriceBox, children: [_jsx("p", { className: classes.optionsTypesName, children: value === null || value === void 0 ? void 0 : value.name }), _jsxs("p", { children: [isDeselection ? "-" : "+", getCurrency(currency), value === null || value === void 0 ? void 0 : value.amount] })] })] }, index));
                                                }) })] }, index)));
                                }) })] }, index));
                }) }), _jsx("div", { className: classes.divisionLine }), _jsx("div", { className: classes.optionsButtonContainer, children: _jsx(BlockProvider, __assign({}, buttonConfiguration, { children: _jsx(Button, { variant: "contained", size: "medium", fullWidth: true, onClick: handleAddToOrder, children: loading ? _jsx("span", { className: classes.spinner }) : "Add to Order" }) })) })] }));
};
