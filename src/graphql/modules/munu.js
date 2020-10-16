import gql from "graphql-tag";

export const FETCH_MEUNU = gql`
  query FetchMenuByRestaurantId(
    $limit: Int
    $offset: Int
    $lang: String
    $resId: ID!
  ) {
    FetchMenuByRestaurantId(
      limit: $limit
      offset: $offset
      lang: $lang
      resId: $resId
    ) {
      code
      message
      count
      success
      restaurant {
        menuStyle {
          color
          fontFamily
          fontSize
          backgroundColor
        }
      }
      result {
        _id
        category
        owner
        lang
        active
        translation {
          lang
          name
          price
          method
        }
        submenu {
          _id
          active
          category
          translation {
            lang
            name
            price
            desc
          }
          items {
            _id
            name
            active
            desc
            price
            translation {
              lang
              name
              price
              desc
            }
          }
        }
        items {
          _id
          name
          active
          desc
          price
          translation {
            lang
            name
            price
            desc
          }
        }
      }
    }
  }
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
