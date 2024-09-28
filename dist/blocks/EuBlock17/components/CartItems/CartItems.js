import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { DishCards } from "../DishCards";
import { useCartItemsStyles } from "./styles";
export var CartItems = function () {
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var classes = useCartItemsStyles();
    var displayCardItems = function () {
        var _a;
        return ((_a = cart === null || cart === void 0 ? void 0 : cart.cartItems) !== null && _a !== void 0 ? _a : []).map(function (item, index) {
            return _jsx(DishCards, { cartItem: item }, index);
        });
    };
    return _jsx("div", { className: classes.root, children: displayCardItems() });
};
