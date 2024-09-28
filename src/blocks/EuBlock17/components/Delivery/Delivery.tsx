import { FC, useState, useEffect } from "react";
import { RadioButtonInput, resetFormTouched } from "../../../../components";
import { useDeliveryStyles } from "./styles";
import { deliveryTypes } from "./helpers";
import { RxCaretUp } from "react-icons/rx";
import { useDispatchControls, usePickupControls } from "./controls";
import { Form } from "../../../../components";
import clx from "classnames";
import { DeliveryProps } from "./types";

export const Delivery: FC<DeliveryProps> = ({ step, pickupFormik, dispatchFormik }) => {
  const [selectedDelivery, setSelectedDelivery] = useState<"pickup" | "dispatch">("pickup");
  const classes = useDeliveryStyles();
  const getPickupControls = usePickupControls();
  const getDispatchControls = useDispatchControls();
  const pickupControls = getPickupControls(pickupFormik);
  const dispatchControls = getDispatchControls(dispatchFormik);

  useEffect(() => {
    resetFormTouched(pickupFormik);
    resetFormTouched(dispatchFormik);

    if (selectedDelivery === "pickup") {
      pickupFormik.setFieldValue("is_active", true);
      dispatchFormik.setFieldValue("is_active", false);
    } else {
      pickupFormik.setFieldValue("is_active", false);
      dispatchFormik.setFieldValue("is_active", true);
    }
  }, [selectedDelivery]);

  const renderDeliveryTypes = () =>
    deliveryTypes.map(({ name, heading, description }, index: number) => (
      <div key={index}>
        <div className={classes.deliveryTypeAccordion} onClick={() => step !== 3 && setSelectedDelivery(name as unknown as "pickup" | "dispatch")}>
          <div className={classes.deliveryTypeAccordionContent}>
            <RadioButtonInput name={name} value={selectedDelivery === name} onChange={() => {}} />
            <div className="content">
              <p className="heading">{heading}</p>
              <p className="description">{description}</p>
            </div>
          </div>
          <RxCaretUp className={clx(classes.deliveryTypeAccordionIcon, selectedDelivery === name && classes.deliveryTypeAccordionIconActive)} />
        </div>

        {selectedDelivery === name && (
          <div className={classes.deliveryForm}>
            <Form controls={name === "pickup" ? pickupControls : dispatchControls} />
          </div>
        )}
      </div>
    ));

  return <div className={classes.root}>{renderDeliveryTypes()}</div>;
};
