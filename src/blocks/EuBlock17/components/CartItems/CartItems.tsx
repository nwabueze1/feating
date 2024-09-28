import { useSelector } from "react-redux";
import { EuState } from "../../../../helpers";
import { DishCards } from "../DishCards";
import { useCartItemsStyles } from "./styles";

export const CartItems = () => {
  const { restaurant } = useSelector<EuState, EuState>((state) => state);
  const cart = restaurant?.cart;
  const classes = useCartItemsStyles();

  const displayCardItems = () =>
    (cart?.cartItems ?? []).map((item, index: number) => {
      return <DishCards cartItem={item} key={index} />;
    });

  return <div className={classes.root}>{displayCardItems()}</div>;
};
