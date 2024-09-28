import { gql } from '@apollo/client';

export const GET_CART_BY_UUID = gql`
  query GqlGetCart($uuid: ID!) {
    getCart(uuid: $uuid) {
      cartItems {
        menuItem {
          image
        }
        uuid
        options
        quantity
      }
      currency
      uuid
    }
  }
`;
