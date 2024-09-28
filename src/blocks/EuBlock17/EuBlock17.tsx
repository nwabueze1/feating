import { FC, useState, useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { BlockConfigType } from "../../types";
import { useGetColor } from "../../hooks";
import { EuState, useGetConfiguration } from "../../helpers";
import { useEuBlockStyles17 } from "./styles";
import { BlockProvider } from "../../BlockProvider";
import { CartItems, Delivery, EmptyState, OrderSummary, Payment, OrderDetails, usePickupConfig, useDispatchConfig } from "./components";
import block17 from "../../mappings/block17";
import { useFormik } from "formik";
import { IoArrowBack } from "react-icons/io5";
import Cookies from "universal-cookie";
import { CircularProgress } from "@mui/material";
// import { useVerifyGlobalPayments } from "@wazobia-tech/wazcom/dist/core/PaymentUI/globalPayment";

const { uuid: BLOCK_UUID } = block17;

export const EuBlock17: FC<BlockConfigType> = ({ content, configuration }) => {
  const { getMappedColor } = useGetColor();
  const { restaurant } = useSelector<EuState, EuState>((store) => store);
  const getConfiguration = useGetConfiguration();
  const blockConfiguration = getConfiguration(configuration, "main", getMappedColor);
  const classes = useEuBlockStyles17(blockConfiguration);
  const [activeStep, setActiveStep] = useState(1);
  const [loading, setLoading] = useState(content?.loading !== undefined ? content?.loading : true);
  const getDeliveryPickupConfig = usePickupConfig();
  const getDeliveryDispatchConfig = useDispatchConfig();
  const deliveryPickupFormik = useFormik({
    ...getDeliveryPickupConfig(() => {
      setActiveStep(3);
    }),
  });
  const deliveryDispatchFormik = useFormik({
    ...getDeliveryDispatchConfig(() => {
      setActiveStep(3);
    }),
  });
  const cookies = new Cookies();
  const cartCookie = useMemo(() => cookies.get("cart"), []);
  const cart = restaurant?.cart;
  const site_uuid = cart?.restaurant?.site?.uuid as string;
  const isCartEmpty = !cart?.cartItems || cart?.cartItems?.length === 0;
  const cartRef = useRef<any>();
  // const verifyGlobalPayments = useVerifyGlobalPayments();

  useEffect(() => {
    cartRef?.current?.scrollIntoView();

    if (!cartCookie || !cartCookie[site_uuid]) {
      setLoading(false);
      return;
    }
  }, []);

  // useEffect(() => {
  //   handleOrderConfirmation();
  // }, []);

  // const handleOrderConfirmation = async () => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   if (queryParams.get("hivedeck_payment_type") && cartCookie[site_uuid])
  //     await verifyGlobalPayments(
  //       BLOCK_UUID,
  //       () => {
  //         setLoading(false);
  //         setActiveStep(4);
  //       },
  //       () => {
  //         window.history.pushState({}, "", "/cart");
  //         setLoading(false);
  //       }
  //     );
  //   else setLoading(false);
  // };

  const handleStepProceed = () => {
    if (activeStep > 2) return setActiveStep(1);
    if (activeStep === 1) return setActiveStep(activeStep + 1);

    if ((deliveryPickupFormik as any).values?.is_active) deliveryPickupFormik.handleSubmit();
    else if ((deliveryDispatchFormik as any).values?.is_active) deliveryDispatchFormik.handleSubmit();
  };

  const handleBack = () => {
    if (activeStep === 1) return;

    setActiveStep(activeStep - 1);
  };

  const renderCheckoutStep = () => {
    switch (activeStep) {
      case 1:
        return <CartItems />;
      case 2:
      case 3:
        return <Delivery step={activeStep} pickupFormik={deliveryPickupFormik} dispatchFormik={deliveryDispatchFormik} />;
      case 4:
        return <CartItems />;
      default:
        return <div />;
    }
  };

  const renderCheckoutSidebar = () => {
    switch (activeStep) {
      case 1:
      case 2:
        return <OrderSummary step={activeStep} handleClick={handleStepProceed} />;
      case 3:
        return (
          <Payment
            onSuccess={() => {
              setActiveStep(4);
            }}
          />
        );
      case 4:
        return <OrderDetails />;
      default:
        return <div />;
    }
  };

  if (loading)
    return (
      <div className={classes.cartLoaderContainer} style={{ color: blockConfiguration?.colors?.[300] }}>
        <CircularProgress size="20px" color="inherit" />
      </div>
    );

  return (
    <BlockProvider {...blockConfiguration} block_uuid={BLOCK_UUID}>
      <section className={classes.root} ref={cartRef}>
        <div className={classes.cartContainer}>
          {activeStep > 1 && activeStep < 4 && (
            <div className={classes.cartContainerBack} onClick={handleBack}>
              <IoArrowBack />
              <p>Back</p>
            </div>
          )}
          <h1 className={classes.cartHeader}>{content?.text?.header}</h1>
          {!isCartEmpty ? (
            <div className={classes.cartContent}>
              <div className={classes.cartCheckout}>{renderCheckoutStep()}</div>
              <div className={classes.cartSidebar}>{renderCheckoutSidebar()}</div>
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
