import gql from "graphql-tag";
import { MENU_FRAGMENT } from "../fragments";

export const FETCH_MEUNU = gql`
  query FetchMenuByRestaurant(
    $limit: Int
    $offset: Int
    $lang: String
    $resId: ID!
  ) {
    FetchMenuByRestaurant(
      limit: $limit
      offset: $offset
      lang: $lang
      resId: $resId
    ) {
      code
      message
      result {
        ...MenuType
      }
      code
      success
    }
  }
  ${MENU_FRAGMENT}
`;
export const CREATE_ORDER = gql`
  mutation CreateOrder($orderData: OrderInput) {
    CreateOrder(orderData: $orderData) {
      code
      success
      message
    }
  }
`;

export const FETCH_LANGUAGES = gql`
  query FetchLanguagesByRestaurant($restaurant: ID!, $active: Boolean!) {
    FetchLanguagesByRestaurant(restaurant: $restaurant, active: $active) {
      code
      message
      count
      result {
        _id
        key
        name
        active
        restaurant
      }
    }
  }
`;
