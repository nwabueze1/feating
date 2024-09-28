import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { BlockProviderType } from "../../../../types";
import { useBlockSelector } from "../../../../helpers";
import { EuState, getCurrency } from "../../../../helpers";
import { useOrderDetailsStyles } from "./styles";
import { calculateCartSubTotal } from "../../helper";
import { CoreCartFields } from "../../../../models";

export const OrderDetails = () => {
  const { restaurant } = useSelector<EuState, EuState>(
    (state) => state
  );
  const { colors } = useBlockSelector<BlockProviderType, BlockProviderType>((store) => store);
  const cart = restaurant?.cart;
  const currency = getCurrency(cart?.restaurant?.bank_info?.currency ?? "");
  const subTotal = calculateCartSubTotal(cart as CoreCartFields);
  const deliveryFee =
    cart?.order?.order_type === "pickup"
      ? 0
      : (cart?.restaurant?.bank_info?.delivery_fee as number);
  const order_type = cart?.order?.order_type ?? "";
  const classes = useOrderDetailsStyles();
  const detailsRef = useRef<any>();

  useEffect(() => {
    detailsRef?.current?.scrollIntoView();
  }, [])

  const getPaymentMethod = () => {
    const paymentMethod = (cart?.order?.payment_type ?? "")
      .toLowerCase()
      ?.replace(/_/g, " ");
    return (
      paymentMethod.charAt(0).toUpperCase() +
      paymentMethod.slice(1).toLowerCase()
    );
  };

  return (
    <div className={classes.root} ref={detailsRef}>
      <p className={classes.heading}>Order Details</p>

      <div className={classes.detailsParent}>
        <div className={classes.details}>
          <p>Order ID</p>
          <p className={classes.detailsInfo}>
            {cart?.order?.uuid?.slice(0, 13)}
          </p>
        </div>
        <div className={classes.details}>
          <p>Total number of dishes</p>
          <p className={classes.detailsInfo}>{cart?.cartItems?.length}</p>
        </div>
        <div className={classes.details}>
          <p>Sub total</p>
          <p className={classes.detailsInfo}>
            {currency}
            {subTotal}
          </p>
        </div>
        <div className={classes.details}>
          <p>Delivery Fee</p>
          <p className={classes.detailsInfo}>
            {currency}
            {deliveryFee}
          </p>
        </div>
        <div className={classes.details}>
          <p className={classes.detailsInfo}>Total</p>
          <p className={classes.detailsInfo}>
            {currency}
            {subTotal + deliveryFee}
          </p>
        </div>
      </div>

      <div className={classes.detailsParent}>
        <div className={classes.details}>
          <p>Delivery method</p>
          <p className={classes.detailsInfo} style={{ color: colors?.[300] }}>
            {order_type.charAt(0).toUpperCase() +
              order_type.slice(1).toLowerCase()}
          </p>
        </div>
        <div className={classes.details}>
          <p>Contact Name</p>
          <p
            className={classes.detailsInfo}
          >{`${cart?.guest?.firstname} ${cart?.guest?.lastname}`}</p>
        </div>
        <div className={classes.details}>
          <p>Contact Phone</p>
          <p className={classes.detailsInfo}>{cart?.guest?.phone}</p>
        </div>
        {order_type === "dispatch" && cart?.guest?.address && (
          <div className={classes.details}>
            <p>Address</p>
            <p>{cart?.guest?.address?.addressline1}</p>
          </div>
        )}
      </div>

      <div>
        <div className={classes.details}>
          <p style={{ fontWeight: "bold" }}>Payment Method</p>
          <p className={classes.detailsInfo} style={{ color: colors?.[300] }}>
            {getPaymentMethod()}
          </p>
        </div>
        <div className={classes.detailsNotification}>
          <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup_envelope.svg" alt="Order placed successfully" />
          <p>Your order has been placed successfully</p>
        </div>
      </div>
    </div>
  );
};
