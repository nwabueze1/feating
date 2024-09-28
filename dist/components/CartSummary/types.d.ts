import { BlockStoreType } from "../../types";
export type CheckoutDialogBox = "cart" | "checkout" | "payment";
export type CartSummaryTypes = {
    buttonConfig: BlockStoreType;
    total: number;
    cartLength: number;
    handleProgress: (type: CheckoutDialogBox) => void;
    type: "cart" | "checkout" | "payment";
};
