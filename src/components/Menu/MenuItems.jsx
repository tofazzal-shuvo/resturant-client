import React from "react";
import { useSelector } from "react-redux";
import { Banner } from "../Shared";
import MenuCategory from "./MenuCategory";

const MenuItems = () => {
  const info = useSelector((state) => state?.info || {});
  const { category, menuItems, isMenuItem, menuName } = info;
  return (
    <div>
      <Banner text={menuName} />
      <MenuCategory {...category} />
    </div>
  );
};

export default MenuItems;
