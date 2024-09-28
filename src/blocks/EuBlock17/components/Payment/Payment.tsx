import { FC } from "react";
import { useSelector } from "react-redux";
import { EuState, useBlockSelector } from "../../../../helpers";
import { BlockProviderType } from "../../../../types";
import { usePaymentStyles } from "./styles";
import { getCurrency } from "../../../../helpers";
import { calculateCartSubTotal } from "../../helper";
import { CoreCartFields } from "../../../../models";
import { PaymentProps } from "./types";
// import { PaymentUI } from "@wazobia-tech/wazcom/dist/core";

export const Payment: FC<PaymentProps> = ({}) => {
  const { restaurant } = useSelector<EuState, EuState>((store) => store);
  const { colors, fonts } = useBlockSelector<BlockProviderType, BlockProviderType>((store) => store);
  const classes = usePaymentStyles({ colors, fonts });
  const cart = restaurant?.cart;

  const currency = getCurrency(cart?.restaurant?.bank_info?.currency ?? "");
  const subTotal = calculateCartSubTotal(cart as CoreCartFields);
  const deliveryFee = !cart?.guest?.firstname ? Number(cart?.restaurant?.bank_info?.delivery_fee) : cart?.guest?.address?.uuid ? Number(cart?.restaurant?.bank_info?.delivery_fee) : 0;
  const total = subTotal + deliveryFee;

  return (
    <div className={classes.root}>
      <p className={classes.paymentHeading}>Payment options</p>
      <p className={classes.paymentDescription}>Please select your preferred method of payment</p>
      <p className={classes.paymentAmount}>
        Amount to be paid: {currency}
        {total}
      </p>

      {/* <PaymentUI
        displayButton={true}
        onSuccess={onSuccess}
        classNames={{
          paymentHeading: classes.paymentComponentHeading,
          paymentSubheading: classes.paymentComponentSubheading,
          paymentOption: classes.paymentComponentOption,
          button: classes.paymentComponentButton,
        }}
      /> */}
    </div>
  );
};
