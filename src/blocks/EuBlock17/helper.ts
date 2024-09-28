import { SelectionProps } from "../../blocks/EuBlock18/types";
import { CoreCartFields, CoreCartItemFields } from "../../models";

export const getTotal = (cartItems: CoreCartItemFields[]) => {
  return cartItems
    ?.map((cart) => {
      return (
        (JSON.parse(cart?.options)
          ?.selectionOption?.map((option: { price: number }) => {
            return option?.price;
          })
          ?.reduce((a: number, b: number) => {
            return a + b;
          }, 0) +
          JSON.parse(cart?.options)?.price) *
        cart?.quantity
      );
    })
    ?.reduce((a, b) => {
      return a + b;
    }, 0);
};

export const calculateCartSubTotal = (cart: CoreCartFields, uuid?: string) => {
  let cartItems = [...(cart?.cartItems ?? [])];

  if (uuid) cartItems = cartItems.filter((item) => item.uuid === uuid);

  let subTotal = 0;
  cartItems.forEach((item) => {
    const itemTotal = Number(item?.quantity) * item?.menuItem?.price;
    subTotal += itemTotal;
    if (item.options) {
      const optionsTotal = calculateOptionsTotal(JSON.parse(item.options) as SelectionProps[], Number(item?.quantity));
      subTotal += optionsTotal;
    }
  });
  return subTotal;
};

export const calculateOptionsTotal = (options: any[], quantity: number) => {
  if (!options || options.length === 0) return 0;
  let additions: any = options.filter((option) => option.type !== "deselection").map((option) => option.selectedChoices.map((choice: any) => Number(choice.amount)));
  let subtractions: any = options.filter((option) => option.type === "deselection").map((option) => option.selectedChoices.map((choice: any) => Number(choice.amount)));
  additions = [].concat.apply([], additions);
  subtractions = [].concat.apply([], subtractions);
  additions = additions.reduce((sum: number, num: number) => sum + num, 0);
  subtractions = subtractions.reduce((sum: number, num: number) => sum - num, 0);
  return quantity * (additions + subtractions);
};

export const getTotalChargeAmount = (cart: CoreCartFields) => {
  const subTotal = calculateCartSubTotal(cart);
  const deliveryFee = !cart?.guest?.firstname
      ? Number(cart?.restaurant?.bank_info?.delivery_fee)
      : cart?.guest?.address?.uuid
      ? Number(cart?.restaurant?.bank_info?.delivery_fee)
      : 0;

  return subTotal + deliveryFee;
};
