import { createApolloClient, notify } from "../../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { GET_CART_BY_UUID } from "../graphQl";
import { EuState } from "../../../helpers";
import { CoreCartFields, CoreCartItemFields } from "../../../models";
import Cookies from "universal-cookie";
import { TUpdateCartItemQuantityVariables } from "./types";
import { UPDATE_CART_ITEM } from "../graphQl";

export const useGetCart = () => {
  const { gatewayUrl } = useSelector<EuState, EuState>((store) => store);
  const client = createApolloClient(gatewayUrl ?? "");
  const cookies = new Cookies();
  return async (siteUuid: string) => {
    try {
      const cartItem = cookies.get("cart");
      const { data, errors } = await client.query({
        query: GET_CART_BY_UUID,
        variables: { uuid: cartItem[siteUuid] },
      });

      if (!data || errors) {
        return undefined;
      }

      return data;
    } catch (error) {
      //TODO: log this sentry
      return undefined;
    }
  };
};

export const useUpdateCartItemQuantity = () => {
  const { restaurant, gatewayUrl } = useSelector<EuState, EuState>((state) => state);
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const client = createApolloClient(gatewayUrl ?? "");
  const updateCartCount = useUpdateCartCount();

  return async (variables: TUpdateCartItemQuantityVariables) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({
        type: "SET_NETWORK_OPERATION",
        payload: `update.cart-item.${variables.uuid}`,
      });

      const { data, errors } = await client.mutate({
        mutation: UPDATE_CART_ITEM,
        variables,
      });

      if (!data || errors) {
        const error = new Error("We could not complete that operation");
        throw error;
      }

      const cartItem = cart?.cartItems?.find(({ uuid }) => uuid === variables?.uuid) as CoreCartItemFields;

      notify("success", variables.quantity === 0 ? "Item deleted successfully" : "Item updated successfully");
      variables.quantity === 0
        ? dispatch({ type: "DELETE_CART_ITEM", payload: cartItem })
        : dispatch({
            type: "UPDATE_CART_ITEM",
            payload: { ...cartItem, quantity: variables.quantity },
          });
      variables.quantity === 0 && updateCartCount();
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
  };
};

const useUpdateCartCount = () => {
  const { restaurant } = useSelector<EuState, EuState>((state) => state);
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const cookies = new Cookies();

  return () => {
    const cartItemCountCookie = cookies.get("cartItemCount");
    const siteUuid = cart?.restaurant?.site?.uuid as string;
    const updatedCount = cartItemCountCookie[siteUuid] - 1;
    cartItemCountCookie[siteUuid] = updatedCount;
    dispatch({ type: "SET_CART_ITEM_COUNT", payload: updatedCount });

    cookies.set("cartItemCount", cartItemCountCookie, {
      path: "/",
      expires: new Date(Date.now() + 86400000),
    });
  };
};
