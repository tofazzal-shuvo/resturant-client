import gql from "graphql-tag";
import {
  MENU_FRAGMENT,
  MENU_ITEM_FRAGMENT,
  RESTAURANT_FRAGMENT,
} from "../fragments";

export const FETCH_MENU_BY_RESTAURANT = gql`
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

export const FETCH_MENU_ITEM = gql`
  query FetchMenuItemByCustomer($id: ID!, $lang: String) {
    FetchMenuItemByCustomer(id: $id, lang: $lang) {
      message
      success
      item {
        ...MenuItemType
      }
    }
  }
  ${MENU_ITEM_FRAGMENT}
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

export const FETCH_RESTAURANT = gql`
  query FetchRestaurant($restaurantId: ID) {
    FetchRestaurant(id: $restaurantId) {
      code
      message
      success
      restaurant {
        ...RestaurantType
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;
