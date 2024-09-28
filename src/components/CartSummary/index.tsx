import { FC } from "react";
import { useCartSummaryStyles } from "./styles";
import { CartSummaryTypes } from "./types";
import { EuState, getCurrency, useBlockSelector } from "../../helpers";
import { BlockStoreType } from "../../types";
import { Button } from "../Button";
import { BlockProvider } from "../../BlockProvider";
import { useSelector } from "react-redux";

export const CartSummary: FC<CartSummaryTypes> = ({ buttonConfig, total, cartLength, handleProgress, type }) => {
  const { restaurant } = useSelector<EuState, EuState>((store) => store);
  const blockConfiguration = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const classes = useCartSummaryStyles(blockConfiguration);
  const currency = restaurant?.cart?.restaurant?.bank_info?.currency;
  const arrayOfData = [{ "Total number of order": cartLength }, { Subtotal: `${getCurrency(currency as string)}${total}` }];

  const displaySubtotal = () => {
    return arrayOfData?.map((data, index: number) => (
      <div key={index} className={classes.subtotal}>
        <p>{Object.keys(data)}:</p>
        <p className={classes.subtotalValue}>{Object.values(data)}</p>
      </div>
    ));
  };
  return (
    <article className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>Order Summary</div>
        {displaySubtotal()}
        <BlockProvider {...buttonConfig}>
          <div className={classes.buttonContainer} onClick={() => handleProgress(type)}>
            <Button variant={"contained"} size={"large"} fullWidth={true}>
              <p className={classes.buttonText}>{type}</p>
            </Button>
          </div>
        </BlockProvider>
      </div>
    </article>
  );
};
