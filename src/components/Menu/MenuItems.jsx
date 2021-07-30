import React from "react";
import { useSelector } from "react-redux";
import { Banner } from "../Shared";
import MenuCategory from "./MenuCategory";
import SingleMenuItem from "./SingleMenuItem";

const MenuItems = () => {
  const {
    category,
    menuItems,
    isMenuItem,
    menuName,
    resTemplate,
    menuImageLink,
  } = useSelector((state) => state?.info || {});

  const bannerProps = {
    text: menuName,
    menuImageLink: resTemplate?.menuImage ? menuImageLink : null,
  };

  return (
    <div>
      <Banner {...bannerProps} showBookIcon={true} />
      {!isMenuItem
        ? category.map((item) => <MenuCategory {...item} key={item._id} />)
        : Array.isArray(menuItems) &&
          menuItems.length > 0 &&
          menuItems.map((item) => (
            <SingleMenuItem item={item} key={item._id} />
          ))}
    </div>
  );
};

export default MenuItems;
