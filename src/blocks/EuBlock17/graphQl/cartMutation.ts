import { gql } from '@apollo/client';
import { CORE_CART_ITEM_FIELDS } from '../../../models';
import { CORE_ADDRESS_FIELDS } from "../../../models";
import { CORE_GUEST_FIELDS } from "../../../models";

export const UPDATE_CART_ITEM = gql`
  ${CORE_CART_ITEM_FIELDS}
  mutation gqlUpdateCartItem($uuid: ID, $quantity: Int!, $options: String) {
    updateCartItem(input: { uuid: $uuid, quantity: $quantity, options: $options }) {
      ...CoreCartItemFields
    }
  }
`;

export const CREATE_ADDRESS = gql`
  ${CORE_ADDRESS_FIELDS}
  mutation GqlCreateAddress(
    $guest_uuid: ID!
    $addressline1: String!
    $city: String!
    $state: String!
    $postcode: String!
    $country: String
  ) {
    createAddress(
      input: {
        guest_uuid: $guest_uuid
        addressline1: $addressline1
        city: $city
        state: $state
        postcode: $postcode
        country: $country
      }
    ) {
      ...CoreAddressFields
    }
  }
`;

export const UPDATE_GUEST = gql`
  ${CORE_GUEST_FIELDS}
  mutation GqlUpdateGuest(
    $cart_uuid: ID
    $email: String!
    $firstname: String!
    $lastname: String!
    $phone: String!
  ) {
    updateGuest(
      input: {
        cart_uuid: $cart_uuid
        email: $email
        firstname: $firstname
        lastname: $lastname
        phone: $phone
      }
    ) {
      ...CoreGuestFields
    }
  }
`;
