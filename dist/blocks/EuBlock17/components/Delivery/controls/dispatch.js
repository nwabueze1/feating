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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { dispatchSchema } from "./schema";
import { usePickupControls } from "./pickup";
import { usePickupConfig } from "./pickup";
import { useDeliveryStyles } from "../styles";
import { handleInputChange, handleInputBlur } from "../../../../../components";
import { useCreateAddress, useUpdateGuest } from "../hooks";
export var useDispatchConfig = function () {
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var getPickupConfig = usePickupConfig();
    var updateGuest = useUpdateGuest();
    var createAddress = useCreateAddress();
    return function (onSuccess) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        return {
            initialValues: __assign(__assign({}, getPickupConfig().initialValues), { addressline1: (_c = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.addressline1) !== null && _c !== void 0 ? _c : "", city: (_f = (_e = (_d = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _d === void 0 ? void 0 : _d.address) === null || _e === void 0 ? void 0 : _e.city) !== null && _f !== void 0 ? _f : "", state: (_j = (_h = (_g = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _g === void 0 ? void 0 : _g.address) === null || _h === void 0 ? void 0 : _h.state) !== null && _j !== void 0 ? _j : "", country: (_m = (_l = (_k = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _k === void 0 ? void 0 : _k.address) === null || _l === void 0 ? void 0 : _l.country) !== null && _m !== void 0 ? _m : "", postcode: (_q = (_p = (_o = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _o === void 0 ? void 0 : _o.address) === null || _p === void 0 ? void 0 : _p.postcode) !== null && _q !== void 0 ? _q : "" }),
            validationSchema: dispatchSchema,
            onSubmit: function (variables) { return __awaiter(void 0, void 0, void 0, function () {
                var email, firstname, lastname, phone, rest, guest, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            email = variables.email, firstname = variables.firstname, lastname = variables.lastname, phone = variables.phone, rest = __rest(variables, ["email", "firstname", "lastname", "phone"]);
                            return [4 /*yield*/, updateGuest({ email: email, firstname: firstname, lastname: lastname, phone: phone })];
                        case 1:
                            guest = _b.sent();
                            _a = guest;
                            if (!_a) return [3 /*break*/, 3];
                            return [4 /*yield*/, createAddress(__assign({}, rest), guest, onSuccess)];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3:
                            _a;
                            return [2 /*return*/];
                    }
                });
            }); },
        };
    };
};
export var useDispatchControls = function () {
    var getPickupControls = usePickupControls();
    var classes = useDeliveryStyles();
    return function (formik) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        var pickupControls = getPickupControls(formik);
        return __spreadArray(__spreadArray([], __read(pickupControls), false), [
            {
                type: "grouped",
                properties: {
                    name: _jsx("p", { className: classes.deliveryFormGroupHeading, children: "SHIPPING INFO" }),
                    controls: [
                        {
                            type: "text",
                            properties: {
                                name: "addressline1",
                                type: "text",
                                placeholder: "Address",
                                label: "Address",
                                value: (_a = formik.values) === null || _a === void 0 ? void 0 : _a.addressline1,
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "addressline1", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "addressline1");
                                },
                                required: true,
                                isError: ((_b = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _b === void 0 ? void 0 : _b.addressline1) && Boolean((_c = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _c === void 0 ? void 0 : _c.addressline1),
                                helperText: ((_d = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _d === void 0 ? void 0 : _d.addressline1) && ((_e = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _e === void 0 ? void 0 : _e.addressline1) ? formik.errors.addressline1 : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "city",
                                type: "text",
                                placeholder: "City",
                                label: "City",
                                value: (_f = formik.values) === null || _f === void 0 ? void 0 : _f.city,
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "city", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "city");
                                },
                                required: true,
                                isError: ((_g = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _g === void 0 ? void 0 : _g.city) && Boolean((_h = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _h === void 0 ? void 0 : _h.city),
                                helperText: ((_j = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _j === void 0 ? void 0 : _j.city) && ((_k = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _k === void 0 ? void 0 : _k.city) ? formik.errors.city : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "state",
                                type: "text",
                                placeholder: "State",
                                label: "State",
                                value: (_l = formik.values) === null || _l === void 0 ? void 0 : _l.state,
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "state", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "state");
                                },
                                required: true,
                                isError: ((_m = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _m === void 0 ? void 0 : _m.state) && Boolean((_o = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _o === void 0 ? void 0 : _o.state),
                                helperText: ((_p = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _p === void 0 ? void 0 : _p.state) && ((_q = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _q === void 0 ? void 0 : _q.state) ? formik.errors.state : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "country",
                                type: "text",
                                placeholder: "Country",
                                label: "Country",
                                value: (_r = formik.values) === null || _r === void 0 ? void 0 : _r.country,
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "country", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "country");
                                },
                                required: true,
                                isError: ((_s = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _s === void 0 ? void 0 : _s.country) && Boolean((_t = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _t === void 0 ? void 0 : _t.country),
                                helperText: ((_u = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _u === void 0 ? void 0 : _u.country) && ((_v = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _v === void 0 ? void 0 : _v.country) ? formik.errors.country : undefined,
                            },
                        },
                        {
                            type: "text",
                            properties: {
                                name: "postcode",
                                type: "text",
                                placeholder: "Post Code",
                                label: "Post Code",
                                value: (_w = formik.values) === null || _w === void 0 ? void 0 : _w.postcode,
                                onChange: function (_a) {
                                    var value = _a.value;
                                    return handleInputChange(formik, "postcode", value);
                                },
                                onBlur: function () {
                                    handleInputBlur(formik, "postcode");
                                },
                                required: true,
                                isError: ((_x = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _x === void 0 ? void 0 : _x.postcode) && Boolean((_y = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _y === void 0 ? void 0 : _y.postcode),
                                helperText: ((_z = formik === null || formik === void 0 ? void 0 : formik.touched) === null || _z === void 0 ? void 0 : _z.postcode) && ((_0 = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _0 === void 0 ? void 0 : _0.postcode) ? formik.errors.country : undefined,
                            },
                        },
                    ],
                },
            },
        ], false);
    };
};
