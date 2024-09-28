import { useBlockSelector } from "../../../../helpers/blockStore";
import { FC } from "react";
import { BlockStoreType } from "../../../../types";
import { useCartCardStyles } from "./styles";
import { MdDelete } from "react-icons/md";
import clx from "classnames";
import { getCurrency, createImageSrcset, imageSizes, EuState } from "../../../../helpers";
import { parseOptionString } from "./helper";
import { calculateCartSubTotal } from "../../../../blocks/EuBlock17/helper";
import { useSelector } from "react-redux";
import { CoreCartFields } from "models";
import { useUpdateCartItemQuantity } from "../../hooks";
import { CircularProgress } from "@mui/material";
import { DishCardProps } from "./types";

export const DishCards: FC<DishCardProps> = ({ cartItem }) => {
  const blockConfiguration = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const classes = useCartCardStyles(blockConfiguration);

  const { restaurant, networkOperation } = useSelector<EuState, EuState>((state) => state);
  const cart = restaurant?.cart;
  const currency = getCurrency(cart?.restaurant?.bank_info?.currency ?? "");
  const updateCartItemQuantity = useUpdateCartItemQuantity();

  const removeQuantity = (options: string) => updateCartItemQuantity({ uuid: cartItem?.uuid ?? "", quantity: cartItem?.quantity === 1 ? 1 : cartItem?.quantity - 1, options });

  const addQuantity = (options: string) => updateCartItemQuantity({ uuid: cartItem?.uuid ?? "", quantity: cartItem?.quantity + 1, options });

  const deleteQuantity = () => updateCartItemQuantity({ uuid: cartItem?.uuid ?? "", quantity: 0, options: "" });

  return (
    <article className={classes.root}>
      {
        <div className={classes.container}>
          <div>
            <img
              srcSet={createImageSrcset(cartItem?.menuItem?.image)}
              src={cartItem?.menuItem?.image?.src}
              sizes={imageSizes}
              alt={cartItem?.menuItem?.image?.alternative_text}
              className={classes.cartCardImage}
            />
            <MdDelete className={classes.removalMobile} onClick={() => deleteQuantity()} />
          </div>
          <div className={classes.textContainer}>
            <h5 className={classes.textName}>
              {cartItem?.menuItem.name}
              {networkOperation === `update.cart-item.${cartItem?.uuid}` && (
                <div className={classes.dishSpinnerParent}>
                  <CircularProgress color="inherit" size="15px" />
                </div>
              )}
            </h5>
            {cartItem?.options && (
              <div className={classes.optionContainer}>
                <p className={classes.optionText}>OPTIONS:</p>
                <div className={classes.optionList}>
                  <span className={classes.optionName}>{parseOptionString(JSON.parse(cartItem.options))}</span>
                </div>
              </div>
            )}

            <div className={classes.priceWrapper}>
              <div className={classes.priceContainer}>
                <span className={classes.currency}>{currency}</span>
                <span> {calculateCartSubTotal(restaurant?.cart as CoreCartFields, cartItem.uuid)}</span>
              </div>
              {!cart?.order && (
                <div className={clx(classes.addQuantity, "mobile")}>
                  <p className={classes.quantitySign}>-</p>
                  <p className={classes.quantity}>{cartItem?.quantity}</p>
                  <p className={classes.quantitySign}>+</p>
                </div>
              )}
            </div>
          </div>
          {!cart?.order && (
            <div className={classes.addQuantityContainer}>
              <div className={classes.addQuantity}>
                <p className={classes.quantitySign} onClick={() => removeQuantity(cartItem?.options)}>
                  -
                </p>
                <p className={classes.quantity}>{cartItem?.quantity}</p>
                <p className={classes.quantitySign} onClick={() => addQuantity(cartItem?.options)}>
                  +
                </p>
              </div>
              <div className={classes.removal} onClick={() => deleteQuantity()}>
                <span>Remove</span> <MdDelete className="icon" />
              </div>
            </div>
          )}
        </div>
      }
    </article>
  );
};
