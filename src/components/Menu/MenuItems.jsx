import React from "react";
import { useSelector } from "react-redux";
import { Banner } from "../Shared";
import MenuCategory from "./MenuCategory";
import SingleMenuItem from "./SingleMenuItem";

const MenuItems = () => {
  const info = useSelector((state) => state?.info || {});
  const { category, menuItems, isMenuItem, menuName } = info;
  return (
    <div>
      <Banner text={menuName} />
      {!isMenuItem ? (
        <MenuCategory {...category} />
      ) : (
        Array.isArray(menuItems) &&
        menuItems.length > 0 &&
        menuItems.map((item) => <SingleMenuItem item={item} key={item._id} />)
      )}
    </div>
  );
};

export default MenuItems;
