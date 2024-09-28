import { FC } from "react";
import { useSelector } from "react-redux";
import { EuState, getCurrency, useBlockSelector } from "../../../../helpers";
import { calculateCartSubTotal } from "../../helper";
import { CoreCartFields } from "../../../../models";
import { useOrderSummaryStyles } from "./styles";
import { OrderSummaryProps } from "./types";
import clx from "classnames";
import { Button } from "../../../../components";
import { BlockStoreType } from "../../../../types";

export const OrderSummary: FC<OrderSummaryProps> = ({ step, handleClick }) => {
  const { restaurant, loading, networkOperation } = useSelector<EuState, EuState>((state) => state);
  const blockConfig = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const cart = restaurant?.cart;
  const classes = useOrderSummaryStyles({ ...blockConfig });

  const currency = getCurrency(cart?.restaurant?.bank_info?.currency ?? "");
  const subTotal = calculateCartSubTotal(cart as CoreCartFields);
  const deliveryFee = !cart?.guest?.firstname ? Number(cart?.restaurant?.bank_info?.delivery_fee) : cart?.guest?.address?.uuid ? Number(cart?.restaurant?.bank_info?.delivery_fee) : 0;
  const total = subTotal + deliveryFee;

  const getButtonText = () => {
    switch (step) {
      case 1:
        return "Checkout";
      case 2:
        return "Proceed to payment";
      default:
        return "";
    }
  };

  const getButtonLoading = () => {
    switch (step) {
      case 1:
        return false;
      case 2:
        return loading && (networkOperation === "set.delivery.pickup" || networkOperation === "set.delivery.dispatch");
      default:
        return false;
    }
  };

  return (
    <div className={classes.root}>
      <p className={classes.summaryHeading}>Order Summary</p>

      <div className={classes.summaryParent}>
        <div className={classes.summary}>
          <p>Total number of dishes:</p>
          <p className={classes.summaryItemBold}>{cart?.cartItems?.length ?? 0}</p>
        </div>
        <div className={classes.summary}>
          <p>Subtotal:</p>
          <p className={classes.summaryItemBold}>
            {currency}
            {subTotal}
          </p>
        </div>
        <div className={classes.summary}>
          <p>Delivery fee:</p>
          <p className={classes.summaryItemBold}>
            {currency}
            {deliveryFee}
          </p>
        </div>
        <div className={clx(classes.summary, classes.summaryItemBold, classes.summaryTotal)}>
          <p>Total:</p>
          <p>
            {currency}
            {total}
          </p>
        </div>
        <Button variant="contained" size="medium" onClick={handleClick} isLoading={getButtonLoading()} className={classes.summaryButton}>
          {getButtonText()}
        </Button>
      </div>
    </div>
  );
};
