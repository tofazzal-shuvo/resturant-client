import React, { useState } from "react";
import { Spin, Button } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_MENU_BY_RESTAURANT } from "../../graphql/modules";
import { useDispatch, useSelector } from "react-redux";
import CategoryModal from "./CategoryModal";
import { Banner, Layout } from "../Shared";
import { useHistory } from "react-router";
import { addInfo } from "../../store/modules";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [visible, setVisible] = useState(false);
  const { restaurantId, lang } = useSelector((state) => state.info);
  const history = useHistory();
  const dispatch = useDispatch();
  // query
  const { data, loading } = useQuery(FETCH_MENU_BY_RESTAURANT, {
    variables: {
      limit: 100,
      offset: 0,
      resId: restaurantId,
      lang,
    },
    fetchPolicy: "no-cache",
  });
  const menu = data?.FetchMenuByRestaurant?.result || [];
  // console.log({ menu });
  // functions
  const onClose = () => setVisible(false);

  const redirectToMenuitemPage = (data) => {
    console.log(data);
    if (Array.isArray(data.items) && data.items.length > 0) {
      dispatch(
        addInfo({
          menuItems: data.items,
          menuName: data.name,
          isMenuItem: true,
        })
      );
      history.push("/menu/items");
    } else {
      dispatch(addInfo({ menuName: data.name }));
      setSelectedMenu(data);
      setVisible(true);
    }
  };

  return (
    <Spin spinning={loading}>
      <div className="welcome text-center">
        <Banner text="Menu" />
        <Layout>
          {menu.map((item) => (
            <Button
              className="mb-2"
              key={item._id}
              onClick={() => redirectToMenuitemPage(item)}
            >
              {item.name}
            </Button>
          ))}
        </Layout>
        {/* Category modal */}
        <CategoryModal
          visible={visible}
          onClose={onClose}
          menu={selectedMenu}
        />
      </div>
    </Spin>
  );
};

export default Menu;

const data = {
  _id: "60436ceb45cbda7b7d23d626",
  name: "Lunch",
  image: null,
  active: true,
  position: 2,
  translation: [],
  items: [],
  category: [
    {
      _id: "6044bbb445cbda7b7d23d65c",
      name: "Snacks",
      position: 0,
      active: true,
      translation: [],
      items: [
        {
          _id: "6047b7ab45cbda7b7d23d691",
          name: "test",
          price: "0",
          active: false,
          desc: "test",
          ingredient: "43434",
          allergens: ["6044ef1845cbda7b7d23d660", "6044ef1845cbda7b7d23d661"],
          image: null,
          position: 0,
          fixedPrice: true,
          subcategory: null,
          category: "6044bbb445cbda7b7d23d65c",
          menu: "60436ceb45cbda7b7d23d626",
          translation: [],
          extras: [],
          sizings: [
            {
              _id: "6047b7ca45cbda7b7d23d692",
              name: "drpdown-1 E",
              items: [
                {
                  _id: "6047b7ca45cbda7b7d23d693",
                  price: 0,
                  default: false,
                  item: {
                    _id: "6045c4ef45cbda7b7d23d66a",
                    name: "asdfasdf",
                    active: true,
                    position: 0,
                    sizing: "6045c4c345cbda7b7d23d664",
                    __typename: "SizingItem",
                  },
                  __typename: "MenuSizingItemType",
                },
                {
                  _id: "6047b7ca45cbda7b7d23d694",
                  price: 0,
                  default: false,
                  item: {
                    _id: "6045c4f445cbda7b7d23d66b",
                    name: "asdfas",
                    active: true,
                    position: 1,
                    sizing: "6045c4c345cbda7b7d23d664",
                    __typename: "SizingItem",
                  },
                  __typename: "MenuSizingItemType",
                },
                {
                  _id: "6047b7ca45cbda7b7d23d695",
                  price: 0,
                  default: false,
                  item: {
                    _id: "6045c4f745cbda7b7d23d66c",
                    name: "qwer",
                    active: true,
                    position: 2,
                    sizing: "6045c4c345cbda7b7d23d664",
                    __typename: "SizingItem",
                  },
                  __typename: "MenuSizingItemType",
                },
                {
                  _id: "6047b7ca45cbda7b7d23d696",
                  price: 0,
                  default: false,
                  item: {
                    _id: "6045c4fd45cbda7b7d23d66d",
                    name: "qwerasdf",
                    active: true,
                    position: 3,
                    sizing: "6045c4c345cbda7b7d23d664",
                    __typename: "SizingItem",
                  },
                  __typename: "MenuSizingItemType",
                },
              ],
              __typename: "MenuSizingType",
            },
            {
              _id: "6047b7ce45cbda7b7d23d697",
              name: "dropdown-1 r",
              items: [
                {
                  _id: "6047b7ce45cbda7b7d23d698",
                  price: 0,
                  default: false,
                  item: {
                    _id: "6045c4d945cbda7b7d23d666",
                    name: "sdfsadf",
                    active: true,
                    position: 1,
                    sizing: "6045c4d245cbda7b7d23d665",
                    __typename: "SizingItem",
                  },
                  __typename: "MenuSizingItemType",
                },
                {
                  _id: "6047b7ce45cbda7b7d23d699",
                  price: 0,
                  default: false,
                  item: {
                    _id: "6045c4dd45cbda7b7d23d667",
                    name: "sdf",
                    active: true,
                    position: 0,
                    sizing: "6045c4d245cbda7b7d23d665",
                    __typename: "SizingItem",
                  },
                  __typename: "MenuSizingItemType",
                },
                {
                  _id: "6047b7ce45cbda7b7d23d69a",
                  price: 0,
                  default: false,
                  item: {
                    _id: "6045c4e045cbda7b7d23d668",
                    name: "asdf",
                    active: true,
                    position: 2,
                    sizing: "6045c4d245cbda7b7d23d665",
                    __typename: "SizingItem",
                  },
                  __typename: "MenuSizingItemType",
                },
                {
                  _id: "6047b7ce45cbda7b7d23d69b",
                  price: 0,
                  default: false,
                  item: {
                    _id: "6045c4ea45cbda7b7d23d669",
                    name: "asdfasd",
                    active: true,
                    position: 3,
                    sizing: "6045c4d245cbda7b7d23d665",
                    __typename: "SizingItem",
                  },
                  __typename: "MenuSizingItemType",
                },
              ],
              __typename: "MenuSizingType",
            },
          ],
          dropdowns: [],
          recommendations: [],
          createdAt: "1615312811212",
          updatedAt: "1616154613228",
          __typename: "MenuItem",
        },
      ],
      subcategory: [],
      __typename: "Category",
    },
    {
      _id: "6044bba645cbda7b7d23d65b",
      name: "Heavy Food",
      position: 1,
      active: true,
      translation: [],
      items: [],
      subcategory: [
        {
          _id: "6044bfce45cbda7b7d23d65e",
          name: "subcategory - 2",
          position: 0,
          active: true,
          translation: [],
          items: [],
          __typename: "SubCategory",
        },
        {
          _id: "6044bfad45cbda7b7d23d65d",
          name: "subcategory - 1",
          position: 1,
          active: false,
          translation: [],
          items: [
            {
              _id: "6044bfea45cbda7b7d23d65f",
              name: "family pack",
              price: "0",
              active: false,
              desc: "this is test item",
              ingredient: "asdf asd fsadf sdaf",
              allergens: [
                "6044ef1845cbda7b7d23d660",
                "6044ef1845cbda7b7d23d661",
              ],
              image: null,
              position: 0,
              fixedPrice: false,
              subcategory: "6044bfad45cbda7b7d23d65d",
              category: "6044bba645cbda7b7d23d65b",
              menu: "60436ceb45cbda7b7d23d626",
              translation: [],
              extras: [
                {
                  _id: "6045c55045cbda7b7d23d671",
                  name: "extra-item-1",
                  price: 40,
                  active: true,
                  position: 0,
                  category: {
                    _id: "6045c50f45cbda7b7d23d66e",
                    name: "extra-category-1",
                    __typename: "ExtraCategory",
                  },
                  menuItem: null,
                  allergens: [
                    "6044ef1845cbda7b7d23d660",
                    "6044ef1845cbda7b7d23d661",
                  ],
                  __typename: "Extra",
                },
                {
                  _id: "6045c57e45cbda7b7d23d673",
                  name: "extra-item-2",
                  price: 45,
                  active: true,
                  position: 2,
                  category: {
                    _id: "6045c50f45cbda7b7d23d66e",
                    name: "extra-category-1",
                    __typename: "ExtraCategory",
                  },
                  menuItem: null,
                  allergens: [],
                  __typename: "Extra",
                },
              ],
              sizings: [
                {
                  _id: "6045f92945cbda7b7d23d679",
                  name: "drpdown-1",
                  items: [
                    {
                      _id: "6045f92945cbda7b7d23d67a",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4ef45cbda7b7d23d66a",
                        name: "asdfasdf",
                        active: true,
                        position: 0,
                        sizing: "6045c4c345cbda7b7d23d664",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "6045f92945cbda7b7d23d67b",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4f445cbda7b7d23d66b",
                        name: "asdfas",
                        active: true,
                        position: 1,
                        sizing: "6045c4c345cbda7b7d23d664",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "6045f92945cbda7b7d23d67c",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4f745cbda7b7d23d66c",
                        name: "qwer",
                        active: true,
                        position: 2,
                        sizing: "6045c4c345cbda7b7d23d664",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "6045f92945cbda7b7d23d67d",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4fd45cbda7b7d23d66d",
                        name: "qwerasdf",
                        active: true,
                        position: 3,
                        sizing: "6045c4c345cbda7b7d23d664",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                  ],
                  __typename: "MenuSizingType",
                },
                {
                  _id: "6045f92e45cbda7b7d23d67e",
                  name: "dropdown-1",
                  items: [
                    {
                      _id: "6045f92e45cbda7b7d23d67f",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4d945cbda7b7d23d666",
                        name: "sdfsadf",
                        active: true,
                        position: 1,
                        sizing: "6045c4d245cbda7b7d23d665",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "6045f92e45cbda7b7d23d680",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4dd45cbda7b7d23d667",
                        name: "sdf",
                        active: true,
                        position: 0,
                        sizing: "6045c4d245cbda7b7d23d665",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "6045f92e45cbda7b7d23d681",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4e045cbda7b7d23d668",
                        name: "asdf",
                        active: true,
                        position: 2,
                        sizing: "6045c4d245cbda7b7d23d665",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "6045f92e45cbda7b7d23d682",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4ea45cbda7b7d23d669",
                        name: "asdfasd",
                        active: true,
                        position: 3,
                        sizing: "6045c4d245cbda7b7d23d665",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                  ],
                  __typename: "MenuSizingType",
                },
                {
                  _id: "606f08a045cbda7b7d23d733",
                  name: "drpdown-1 E",
                  items: [
                    {
                      _id: "606f08a045cbda7b7d23d734",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4ef45cbda7b7d23d66a",
                        name: "asdfasdf",
                        active: true,
                        position: 0,
                        sizing: "6045c4c345cbda7b7d23d664",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "606f08a045cbda7b7d23d735",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4f445cbda7b7d23d66b",
                        name: "asdfas",
                        active: true,
                        position: 1,
                        sizing: "6045c4c345cbda7b7d23d664",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "606f08a045cbda7b7d23d736",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4f745cbda7b7d23d66c",
                        name: "qwer",
                        active: true,
                        position: 2,
                        sizing: "6045c4c345cbda7b7d23d664",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                    {
                      _id: "606f08a045cbda7b7d23d737",
                      price: 0,
                      default: false,
                      item: {
                        _id: "6045c4fd45cbda7b7d23d66d",
                        name: "qwerasdf",
                        active: true,
                        position: 3,
                        sizing: "6045c4c345cbda7b7d23d664",
                        __typename: "SizingItem",
                      },
                      __typename: "MenuSizingItemType",
                    },
                  ],
                  __typename: "MenuSizingType",
                },
              ],
              dropdowns: [
                {
                  _id: "6045f93845cbda7b7d23d683",
                  name: "dropdown-item-1",
                  isFree: false,
                  dropdown: {
                    _id: "6045f8c145cbda7b7d23d677",
                    name: "dropdown-item-1",
                    active: true,
                    position: 0,
                    category: "6045f8a245cbda7b7d23d675",
                    __typename: "Dropdown",
                  },
                  __typename: "MenuDropdownType",
                },
              ],
              recommendations: [
                {
                  _id: "6044bfea45cbda7b7d23d65f",
                  name: "family pack",
                  price: "0",
                  active: false,
                  desc: "this is test item",
                  ingredient: "asdf asd fsadf sdaf",
                  image: null,
                  position: 0,
                  fixedPrice: false,
                  subcategory: "6044bfad45cbda7b7d23d65d",
                  category: "6044bba645cbda7b7d23d65b",
                  menu: "60436ceb45cbda7b7d23d626",
                  translation: [],
                  extras: [
                    {
                      _id: "6045c55045cbda7b7d23d671",
                      name: null,
                      price: null,
                      active: null,
                      position: null,
                      category: null,
                      menuItem: null,
                      allergens: null,
                      __typename: "Extra",
                    },
                    {
                      _id: "6045c57e45cbda7b7d23d673",
                      name: null,
                      price: null,
                      active: null,
                      position: null,
                      category: null,
                      menuItem: null,
                      allergens: null,
                      __typename: "Extra",
                    },
                  ],
                  sizings: [
                    {
                      _id: "6045f92945cbda7b7d23d679",
                      name: null,
                      items: null,
                      __typename: "MenuSizingType",
                    },
                    {
                      _id: "6045f92e45cbda7b7d23d67e",
                      name: null,
                      items: null,
                      __typename: "MenuSizingType",
                    },
                    {
                      _id: "606f08a045cbda7b7d23d733",
                      name: null,
                      items: null,
                      __typename: "MenuSizingType",
                    },
                  ],
                  dropdowns: [
                    {
                      _id: "6045f93845cbda7b7d23d683",
                      name: null,
                      isFree: null,
                      dropdown: null,
                      __typename: "MenuDropdownType",
                    },
                  ],
                  createdAt: "1615118314953",
                  updatedAt: "1617889535587",
                  __typename: "MenuItem",
                },
              ],
              createdAt: "1615118314953",
              updatedAt: "1617889535587",
              __typename: "MenuItem",
            },
          ],
          __typename: "SubCategory",
        },
      ],
      __typename: "Category",
    },
    {
      _id: "60773600820f41001a013654",
      name: "asdfasdf",
      position: 2,
      active: false,
      translation: [],
      items: [],
      subcategory: [
        {
          _id: "60773624820f41001a013655",
          name: "ABC",
          position: 0,
          active: false,
          translation: [],
          items: [
            {
              _id: "60773648820f41001a013656",
              name: "Rasdasd",
              price: "0",
              active: false,
              desc: null,
              ingredient: null,
              allergens: [],
              image: null,
              position: 0,
              fixedPrice: true,
              subcategory: "60773624820f41001a013655",
              category: "60773600820f41001a013654",
              menu: "60436ceb45cbda7b7d23d626",
              translation: [],
              extras: [],
              sizings: [],
              dropdowns: [],
              recommendations: [],
              createdAt: "1618425416111",
              updatedAt: "1618425416111",
              __typename: "MenuItem",
            },
          ],
          __typename: "SubCategory",
        },
      ],
      __typename: "Category",
    },
  ],
  schedule: [
    {
      _id: "60436ceb45cbda7b7d23d627",
      day: "monday",
      from: "08:00",
      to: "23:59",
      active: true,
      menu: "60436ceb45cbda7b7d23d626",
      __typename: "MenuSchedule",
    },
    {
      _id: "60436ceb45cbda7b7d23d628",
      day: "tuesday",
      from: "08:00",
      to: "23:59",
      active: true,
      menu: "60436ceb45cbda7b7d23d626",
      __typename: "MenuSchedule",
    },
    {
      _id: "60436ceb45cbda7b7d23d629",
      day: "wednesday",
      from: "08:00",
      to: "23:59",
      active: true,
      menu: "60436ceb45cbda7b7d23d626",
      __typename: "MenuSchedule",
    },
    {
      _id: "60436ceb45cbda7b7d23d62a",
      day: "thursday",
      from: "08:00",
      to: "23:59",
      active: true,
      menu: "60436ceb45cbda7b7d23d626",
      __typename: "MenuSchedule",
    },
    {
      _id: "60436ceb45cbda7b7d23d62b",
      day: "friday",
      from: "08:00",
      to: "23:59",
      active: true,
      menu: "60436ceb45cbda7b7d23d626",
      __typename: "MenuSchedule",
    },
    {
      _id: "60436ceb45cbda7b7d23d62c",
      day: "saturday",
      from: "08:00",
      to: "23:59",
      active: true,
      menu: "60436ceb45cbda7b7d23d626",
      __typename: "MenuSchedule",
    },
    {
      _id: "60436ceb45cbda7b7d23d62d",
      day: "sunday",
      from: "08:00",
      to: "23:59",
      active: true,
      menu: "60436ceb45cbda7b7d23d626",
      __typename: "MenuSchedule",
    },
  ],
  __typename: "Menu",
};
