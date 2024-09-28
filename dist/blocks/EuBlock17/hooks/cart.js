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
import { createApolloClient, notify } from "../../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { GET_CART_BY_UUID } from "../graphQl";
import Cookies from "universal-cookie";
import { UPDATE_CART_ITEM } from "../graphQl";
export var useGetCart = function () {
    var gatewayUrl = useSelector(function (store) { return store; }).gatewayUrl;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    var cookies = new Cookies();
    return function (siteUuid) { return __awaiter(void 0, void 0, void 0, function () {
        var cartItem, _a, data, errors, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    cartItem = cookies.get("cart");
                    return [4 /*yield*/, client.query({
                            query: GET_CART_BY_UUID,
                            variables: { uuid: cartItem[siteUuid] },
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, data];
                case 2:
                    error_1 = _b.sent();
                    //TODO: log this sentry
                    return [2 /*return*/, undefined];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
export var useUpdateCartItemQuantity = function () {
    var _a = useSelector(function (state) { return state; }), restaurant = _a.restaurant, gatewayUrl = _a.gatewayUrl;
    var dispatch = useDispatch();
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    var updateCartCount = useUpdateCartCount();
    return function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, errors, error, cartItem, error_2;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    dispatch({ type: "SET_LOADING", payload: true });
                    dispatch({
                        type: "SET_NETWORK_OPERATION",
                        payload: "update.cart-item.".concat(variables.uuid),
                    });
                    return [4 /*yield*/, client.mutate({
                            mutation: UPDATE_CART_ITEM,
                            variables: variables,
                        })];
                case 1:
                    _a = _c.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors) {
                        error = new Error("We could not complete that operation");
                        throw error;
                    }
                    cartItem = (_b = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _b === void 0 ? void 0 : _b.find(function (_a) {
                        var uuid = _a.uuid;
                        return uuid === (variables === null || variables === void 0 ? void 0 : variables.uuid);
                    });
                    notify("success", variables.quantity === 0 ? "Item deleted successfully" : "Item updated successfully");
                    variables.quantity === 0
                        ? dispatch({ type: "DELETE_CART_ITEM", payload: cartItem })
                        : dispatch({
                            type: "UPDATE_CART_ITEM",
                            payload: __assign(__assign({}, cartItem), { quantity: variables.quantity }),
                        });
                    variables.quantity === 0 && updateCartCount();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _c.sent();
                    notify("error", "We could not complete that operation");
                    return [3 /*break*/, 3];
                case 3:
                    dispatch({ type: "SET_LOADING", payload: false });
                    dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
                    return [2 /*return*/];
            }
        });
    }); };
};
var useUpdateCartCount = function () {
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var dispatch = useDispatch();
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var cookies = new Cookies();
    return function () {
        var _a, _b;
        var cartItemCountCookie = cookies.get("cartItemCount");
        var siteUuid = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _a === void 0 ? void 0 : _a.site) === null || _b === void 0 ? void 0 : _b.uuid;
        var updatedCount = cartItemCountCookie[siteUuid] - 1;
        cartItemCountCookie[siteUuid] = updatedCount;
        dispatch({ type: "SET_CART_ITEM_COUNT", payload: updatedCount });
        cookies.set("cartItemCount", cartItemCountCookie, {
            path: "/",
            expires: new Date(Date.now() + 86400000),
        });
    };
};
