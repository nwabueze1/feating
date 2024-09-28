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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAddToCart } from "./hooks";
import { useGetColor, useSelectedLayout } from "../../hooks";
import { useEuBlockStyles18 } from "./styles";
import { useGetConfiguration, getCurrency, notify, createResponsiveImage } from "../../helpers";
import { Button } from "../../components";
import { BlockProvider } from "../../BlockProvider";
import { Modal } from "../../components";
import { OptionConfigCard } from "./components";
import clx from "classnames";
import { RelatedDishes } from "./components";
// import { calculateCartItemOptionsTotal } from "@wazobia-tech/wazcom/dist/utilities";
import { useRecordMenuItemView } from "../../helpers";
import block18 from "../../mappings/block18";
var BLOCK_UUID = block18.uuid;
export var EuBlock18 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var content = _a.content, configuration = _a.configuration, layouts = _a.layouts, _q = _a.mode, mode = _q === void 0 ? "view" : _q, screenSize = _a.screenSize, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect;
    var layout = useSelectedLayout(layouts);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfiguration = getConfiguration(configuration, "main", getMappedColor);
    var buttonConfiguration = getConfiguration(configuration, "button", getMappedColor);
    var classes = useEuBlockStyles18(blockConfiguration);
    var _r = __read(useState(1), 2), quantity = _r[0], setQuantity = _r[1];
    var _s = __read(useState(false), 2), isOpen = _s[0], setIsOpen = _s[1];
    var _t = __read(useState(false), 2), loading = _t[0], setLoading = _t[1];
    var menuItemData = content === null || content === void 0 ? void 0 : content.menu_item;
    var _u = __read(useState([]), 2), selectionOption = _u[0], setSelectionOption = _u[1];
    var dispatch = useDispatch();
    var key = "blocks." + String(index);
    var recordMenuItemView = useRecordMenuItemView();
    var currency = (_f = (_e = (_d = (_c = (_b = content === null || content === void 0 ? void 0 : content.menu_item) === null || _b === void 0 ? void 0 : _b.menu) === null || _c === void 0 ? void 0 : _c.restaurant) === null || _d === void 0 ? void 0 : _d.bank_info) === null || _e === void 0 ? void 0 : _e.currency) !== null && _f !== void 0 ? _f : "";
    var handleSelectionOption = function (newOption) {
        var index = selectionOption.findIndex(function (option) { return option.name.toString() === newOption.name.toString(); });
        var newOptions = __spreadArray([], __read(selectionOption), false);
        if (index === -1)
            newOptions.push(newOption);
        else if (newOption.selectedChoices.length === 0)
            newOptions = newOptions.filter(function (option) { return option.name.toString() !== newOption.name.toString(); });
        else
            newOptions[index] = newOption;
        setSelectionOption(newOptions);
    };
    useEffect(function () {
        dispatch({ type: "GET_MENU_ITEMS", payload: [content === null || content === void 0 ? void 0 : content.menu_item] });
        recordMenuItemView(menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.uuid);
    }, []);
    // const calculateDishTotal = useCallback(() => {
    //   const stringifiedOptions = JSON.stringify(selectionOption);
    //   // const result = (menuItemData?.price + calculateCartItemOptionsTotal(stringifiedOptions)) * quantity;
    //   return result.toFixed(2);
    // }, [quantity, selectionOption]);
    var handleAddQuantity = function (add) {
        setQuantity(add ? quantity + 1 : quantity > 1 ? quantity - 1 : 1);
    };
    var handleCloseModal = function () {
        setIsOpen(false);
    };
    var handleOpenModal = function () {
        var _a;
        if ((menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.options) && ((_a = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.options) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            setIsOpen(true);
        }
        else {
            handleAddToCart();
        }
    };
    var getNotification = function (type) {
        var successMessage = "Awesome, product successfully added to cart";
        var errorMessage = "Sorry, please try again";
        return type === "success" ? notify("success", successMessage) : notify("error", errorMessage);
    };
    var selectedItem = {
        menu_item_uuid: (_g = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.uuid) !== null && _g !== void 0 ? _g : "",
        quantity: quantity,
        detail: menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.description,
        options: selectionOption.length > 0 ? JSON.stringify(selectionOption) : undefined,
    };
    var addToCart = useAddToCart();
    var handleAddToCart = function () { return __awaiter(void 0, void 0, void 0, function () {
        var getCart;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if ((menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.options) && ((_a = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.options) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        if (selectionOption.length !== ((_b = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.options) === null || _b === void 0 ? void 0 : _b.length))
                            return [2 /*return*/, notify("error", "Please select a choice from all options")];
                    }
                    setLoading(true);
                    return [4 /*yield*/, addToCart(selectedItem)];
                case 1:
                    getCart = _c.sent();
                    setLoading(false);
                    setIsOpen(false);
                    getCart ? getNotification("success") : getNotification("error");
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(BlockProvider, __assign({}, blockConfiguration, { block_uuid: BLOCK_UUID, children: _jsxs("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block18ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: [_jsxs("div", { className: clx(classes.container, layout), children: [createResponsiveImage(menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.image, {
                            className: clx(classes.containerLeftSideImage, layout),
                            classNames: {
                                picture: clx(classes.containerLeftSide, layout),
                            },
                            screenSize: screenSize,
                        }), _jsxs("div", { className: clx(classes.containerRightSide, layout), children: [_jsx("h1", { className: classes.header, children: menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.name }), _jsx("p", { className: classes.textSubHeader, children: (_h = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.menuCategory) === null || _h === void 0 ? void 0 : _h.title }), _jsx("p", { className: classes.textPrice, children: _jsx("span", { className: classes.textCurrency, children: getCurrency((_m = (_l = (_k = (_j = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.menu) === null || _j === void 0 ? void 0 : _j.restaurant) === null || _k === void 0 ? void 0 : _k.bank_info) === null || _l === void 0 ? void 0 : _l.currency) !== null && _m !== void 0 ? _m : "") }) }), _jsxs("div", { className: classes.descriptionContainer, children: [_jsx("p", { className: classes.descriptionHeader, children: "Description" }), _jsx("p", { children: menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.description })] }), _jsxs("div", { className: classes.addToCartContainer, children: [_jsxs("div", { className: classes.addQuantity, children: [_jsx("p", { className: classes.quantitySign, onClick: function () { return handleAddQuantity(false); }, children: "-" }), _jsx("p", { className: classes.quantity, children: quantity }), _jsx("p", { className: classes.quantitySign, onClick: function () { return handleAddQuantity(true); }, children: "+" })] }), _jsx(BlockProvider, __assign({}, buttonConfiguration, { block_uuid: BLOCK_UUID, children: _jsx(Button, { variant: "contained", size: "large", fullWidth: true, onClick: handleOpenModal, children: loading ? _jsx("span", { className: classes.spinner }) : "Add to Cart" }) }))] })] })] }), _jsx(RelatedDishes, { title: (_o = content === null || content === void 0 ? void 0 : content.text) === null || _o === void 0 ? void 0 : _o.subHeader, currency: currency, relatedMenuData: (_p = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.related_menu_items) !== null && _p !== void 0 ? _p : [] }), _jsx(Modal, { isOpen: isOpen, hasClose: false, onClose: handleCloseModal, children: _jsx(OptionConfigCard, { loading: loading, handleCloseModal: handleCloseModal, menuItemData: menuItemData, handleSelectionOption: handleSelectionOption, selectionOption: selectionOption, buttonConfiguration: buttonConfiguration, handleAddToOrder: handleAddToCart, currency: currency }) })] }) })));
};
