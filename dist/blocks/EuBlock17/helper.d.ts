import { CoreCartFields, CoreCartItemFields } from "../../models";
export declare const getTotal: (cartItems: CoreCartItemFields[]) => number;
export declare const calculateCartSubTotal: (cart: CoreCartFields, uuid?: string) => number;
export declare const calculateOptionsTotal: (options: any[], quantity: number) => number;
export declare const getTotalChargeAmount: (cart: CoreCartFields) => number;
