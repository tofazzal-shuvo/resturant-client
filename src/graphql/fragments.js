import gql from "graphql-tag";

export const DROPDOWN_CATEGORY_FRAGMENT = gql`
  fragment DropdownCategoryType on DropdownCategory {
    _id
    name
    position
    active
    restaurant
  }
`;

export const TABLE_FRAGMENT = gql`
  fragment TableType on Table {
    _id
    name
    active
  }
`;

export const MENU_SCHEDULE_FRAGMENT = gql`
  fragment MenuScheduleType on MenuSchedule {
    _id
    day
    from
    to
    active
    menu
  }
`;

export const TRANSLATION_FRAGMENT = gql`
  fragment TranslationType on Translation {
    lang
    name
    desc
    method
  }
`;

export const MENU_EXTRAS_FRAGMENT = gql`
  fragment MenuExtraType on Extra {
    _id
    name
    price
    active
    position
    translation {
      ...TranslationType
    }
    category {
      _id
      name
    }
    menuItem {
      _id
      name
      price
    }
    allergens
  }
  ${TRANSLATION_FRAGMENT}
`;
export const SIZING_ITEM_FRAGMENT = gql`
  fragment SizingItemType on SizingItem {
    _id
    name
    position
    sizing
    translation {
      ...TranslationType
    }
  }
  ${TRANSLATION_FRAGMENT}
`;
export const MENU_SIZING_ITEM_FRAGMENT = gql`
  fragment MenuSizingItemType on MenuSizingItemType {
    _id
    price
    default
    price
    item {
      ...SizingItemType
    }
  }
  ${SIZING_ITEM_FRAGMENT}
`;
export const MENU_SIZING_FRAGMENT = gql`
  fragment MenuSizingType on MenuSizingType {
    _id
    name
    active
    items {
      ...MenuSizingItemType
    }
    translation {
      ...TranslationType
    }
  }
  ${MENU_SIZING_ITEM_FRAGMENT}
  ${TRANSLATION_FRAGMENT}
`;
export const DROPDOWN_FRAGMENT = gql`
  fragment DropdownType on Dropdown {
    _id
    name
    active
    position
    category
    extras {
      ...MenuExtraType
    }
  }
  ${MENU_EXTRAS_FRAGMENT}
`;

export const MENU_DROPDOWN_FRAGMENT = gql`
  fragment MenuDropdownType on MenuDropdownType {
    _id
    name
    isFree
    dropdown {
      ...DropdownType
    }
    translation {
      ...TranslationType
    }
  }
  ${DROPDOWN_FRAGMENT}
  ${TRANSLATION_FRAGMENT}
`;
export const ALLERGENS_FRAGMENT = gql`
  fragment AllergenType on AllergenType {
    _id
    name
    active
  }
`;
export const MENU_ITEM_RECOMMENDATION_FRAGMENT = gql`
  fragment MenuItemRecommendationType on MenuItem {
    _id
    name
    price
    active
    desc
    ingredient
    image
    position
    fixedPrice
    subcategory
    category
    menu
    allergens {
      ...AllergenType
    }
    translation {
      ...TranslationType
    }
    extras {
      ...MenuExtraType
    }
    sizings {
      ...MenuSizingType
    }
    dropdowns {
      ...MenuDropdownType
    }
    createdAt
    updatedAt
  }

  ${MENU_DROPDOWN_FRAGMENT}
  ${TRANSLATION_FRAGMENT}
  ${MENU_EXTRAS_FRAGMENT}
  ${MENU_SIZING_FRAGMENT}
  ${ALLERGENS_FRAGMENT}
`;

export const MENU_ITEM_FRAGMENT = gql`
  fragment MenuItemType on MenuItem {
    _id
    name
    price
    active
    desc
    ingredient
    image
    position
    fixedPrice
    subcategory
    category
    enableNote
    menu
    allergens {
      ...AllergenType
    }
    translation {
      ...TranslationType
    }
    extras {
      ...MenuExtraType
    }
    sizings {
      ...MenuSizingType
    }
    dropdowns {
      ...MenuDropdownType
    }
    recommendations {
      ...MenuItemRecommendationType
    }
    createdAt
    updatedAt
  }
  ${MENU_ITEM_RECOMMENDATION_FRAGMENT}
  ${MENU_DROPDOWN_FRAGMENT}
  ${TRANSLATION_FRAGMENT}
  ${MENU_EXTRAS_FRAGMENT}
  ${MENU_SIZING_FRAGMENT}
  ${ALLERGENS_FRAGMENT}
`;

export const EXTRAS_FRAGMENT = gql`
  fragment ExtraType on Extra {
    _id
    name
    price
    active
    position
    translation {
      ...TranslationType
    }
    category {
      _id
      name
    }
    allergens
    menuItem {
      ...MenuItemType
    }
  }
  ${MENU_ITEM_FRAGMENT}
`;

export const EXTRA_CATEGORY_FRAGMENT = gql`
  fragment ExtraCategoryType on ExtraCategory {
    _id
    name
    active
    position
    restaurant
    translation {
      ...TranslationType
    }
    extras {
      ...ExtraType
    }
  }
  ${EXTRAS_FRAGMENT}
  ${TRANSLATION_FRAGMENT}
`;

export const SUBCATEGORY_FRAGMENT = gql`
  fragment SubCategoryType on SubCategory {
    _id
    name
    position
    active
    translation {
      ...TranslationType
    }
    items {
      ...MenuItemType
    }
  }
  ${TRANSLATION_FRAGMENT}
  ${MENU_ITEM_FRAGMENT}
`;

export const CATEGORY_FRAGMENT = gql`
  fragment CategoryType on Category {
    _id
    name
    position
    active
    translation {
      ...TranslationType
    }
    items {
      ...MenuItemType
    }
    subcategory {
      ...SubCategoryType
    }
  }

  ${TRANSLATION_FRAGMENT}
  ${MENU_ITEM_FRAGMENT}
  ${SUBCATEGORY_FRAGMENT}
`;

export const MENU_FRAGMENT = gql`
  fragment MenuType on Menu {
    _id
    name
    image
    active
    position
    translation {
      ...TranslationType
    }
    items {
      _id
      name
      price
      active
      desc
      ingredient
      image
      fixedPrice
      allergens {
        ...AllergenType
      }
      translation {
        ...TranslationType
      }
    }
    category {
      ...CategoryType
    }
    schedule {
      ...MenuScheduleType
    }
  }
  ${ALLERGENS_FRAGMENT}
  ${CATEGORY_FRAGMENT}
  ${MENU_SCHEDULE_FRAGMENT}
`;

export const STAFF_FRAGMENT = gql`
  fragment StaffType on Staff {
    _id
    firstname
    lastname
    email
    phone
  }
`;

export const ORDER_ITEM_FRAGMENT = gql`
  fragment OrderItemType on OrderItem {
    item {
      ...MenuItemType
    }
    quantity
  }
  ${MENU_ITEM_FRAGMENT}
`;

export const ORDER_FRAGMENT = gql`
  fragment OrderType on Order {
    _id
    createdAt
    updatedAt
    currency
    total
    status
    paymentMethod
    paymentStatus
    restaurant
    note
  }
`;
export const SIZING_FRAGMENT = gql`
  fragment SizingType on Sizing {
    _id
    name
    active
    position
    category
    items {
      ...SizingItemType
    }
  }
  ${SIZING_ITEM_FRAGMENT}
`;
export const SIZING_CATEGORY_FRAGMENT = gql`
  fragment SizingCategoryType on SizingCategory {
    _id
    name
    position
    active
    restaurant
    sizings {
      ...SizingType
    }
  }
  ${SIZING_FRAGMENT}
`;

export const MENU_TEXT_BG_FRAGMENT = gql`
  fragment MenuTextBackgroundType on MenuTextBackgroundType {
    enabled
    backgroundColor
  }
`;

export const GENERAL_FRAGMENT = gql`
  fragment GeneralType on GeneralType {
    background
    menuBackground
    menuColor
    defaultColor
    categoryColor
    subcategoryColor
    itemColor
  }
`;

export const BOTTOM_NAVIGATION_FRAGMENT = gql`
  fragment BottomNavigationType on BottomNavigationType {
    background
    iconColor
    badgeColor
    textColor
  }
`;

export const TEMPLATE_HEADER_FRAGMENT = gql`
  fragment HeaderType on TemplateHeaderType {
    title
    fontFamily
    color
    fontSize
    backgroundColor
    backgroundPattern
    backgroundSelected
    headerSelected
  }
`;
export const RESTAURANT_FRAGMENT = gql`
  fragment RestaurantType on Restaurant {
    _id
    name
    city
    address
    isAssignedTable
    zip
    country
    promotional
    phone
    logo
    language
    currency
    orderPriorityTime
    template {
      _id
      name
      general {
        ...GeneralType
      }
      bottomNavigation {
        ...BottomNavigationType
      }
      header {
        ...HeaderType
      }
      itemImage
      menuImage
      menuTextBackground {
        ...MenuTextBackgroundType
      }
      lightboxItemImage
    }
  }
  ${MENU_TEXT_BG_FRAGMENT}
  ${GENERAL_FRAGMENT}
  ${BOTTOM_NAVIGATION_FRAGMENT}
  ${TEMPLATE_HEADER_FRAGMENT}
`;
