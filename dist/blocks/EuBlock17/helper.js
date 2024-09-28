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
export var getTotal = function (cartItems) {
    var _a;
    return (_a = cartItems === null || cartItems === void 0 ? void 0 : cartItems.map(function (cart) {
        var _a, _b, _c, _d;
        return ((((_c = (_b = (_a = JSON.parse(cart === null || cart === void 0 ? void 0 : cart.options)) === null || _a === void 0 ? void 0 : _a.selectionOption) === null || _b === void 0 ? void 0 : _b.map(function (option) {
            return option === null || option === void 0 ? void 0 : option.price;
        })) === null || _c === void 0 ? void 0 : _c.reduce(function (a, b) {
            return a + b;
        }, 0)) +
            ((_d = JSON.parse(cart === null || cart === void 0 ? void 0 : cart.options)) === null || _d === void 0 ? void 0 : _d.price)) *
            (cart === null || cart === void 0 ? void 0 : cart.quantity));
    })) === null || _a === void 0 ? void 0 : _a.reduce(function (a, b) {
        return a + b;
    }, 0);
};
export var calculateCartSubTotal = function (cart, uuid) {
    var _a;
    var cartItems = __spreadArray([], __read(((_a = cart === null || cart === void 0 ? void 0 : cart.cartItems) !== null && _a !== void 0 ? _a : [])), false);
    if (uuid)
        cartItems = cartItems.filter(function (item) { return item.uuid === uuid; });
    var subTotal = 0;
    cartItems.forEach(function (item) {
        var _a;
        var itemTotal = Number(item === null || item === void 0 ? void 0 : item.quantity) * ((_a = item === null || item === void 0 ? void 0 : item.menuItem) === null || _a === void 0 ? void 0 : _a.price);
        subTotal += itemTotal;
        if (item.options) {
            var optionsTotal = calculateOptionsTotal(JSON.parse(item.options), Number(item === null || item === void 0 ? void 0 : item.quantity));
            subTotal += optionsTotal;
        }
    });
    return subTotal;
};
export var calculateOptionsTotal = function (options, quantity) {
    if (!options || options.length === 0)
        return 0;
    var additions = options.filter(function (option) { return option.type !== "deselection"; }).map(function (option) { return option.selectedChoices.map(function (choice) { return Number(choice.amount); }); });
    var subtractions = options.filter(function (option) { return option.type === "deselection"; }).map(function (option) { return option.selectedChoices.map(function (choice) { return Number(choice.amount); }); });
    additions = [].concat.apply([], additions);
    subtractions = [].concat.apply([], subtractions);
    additions = additions.reduce(function (sum, num) { return sum + num; }, 0);
    subtractions = subtractions.reduce(function (sum, num) { return sum - num; }, 0);
    return quantity * (additions + subtractions);
};
export var getTotalChargeAmount = function (cart) {
    var _a, _b, _c, _d, _e, _f, _g;
    var subTotal = calculateCartSubTotal(cart);
    var deliveryFee = !((_a = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _a === void 0 ? void 0 : _a.firstname)
        ? Number((_c = (_b = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.delivery_fee)
        : ((_e = (_d = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _d === void 0 ? void 0 : _d.address) === null || _e === void 0 ? void 0 : _e.uuid)
            ? Number((_g = (_f = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _f === void 0 ? void 0 : _f.bank_info) === null || _g === void 0 ? void 0 : _g.delivery_fee)
            : 0;
    return subTotal + deliveryFee;
};
