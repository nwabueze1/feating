var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var GET_CART_BY_UUID = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GqlGetCart($uuid: ID!) {\n    getCart(uuid: $uuid) {\n      cartItems {\n        menuItem {\n          image\n        }\n        uuid\n        options\n        quantity\n      }\n      currency\n      uuid\n    }\n  }\n"], ["\n  query GqlGetCart($uuid: ID!) {\n    getCart(uuid: $uuid) {\n      cartItems {\n        menuItem {\n          image\n        }\n        uuid\n        options\n        quantity\n      }\n      currency\n      uuid\n    }\n  }\n"])));
var templateObject_1;
