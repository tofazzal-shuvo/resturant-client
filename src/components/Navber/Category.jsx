import React from "react";
import Items from "./Items";
import Submenu from "./Submenu";

const Category = ({ category, menuStyle }) => {
  const submenu = category?.submenu || [];
  const items = category?.items || [];

  return (
    <>
      {submenu.map((item) => (
        <Submenu subMenu={item} key={item._id} menuStyle={menuStyle} />
      ))}
      {items.map((item) => (
        <Items
          item={item}
          key={item._id}
          menuStyle={menuStyle}
          fromCard={false}
        />
      ))}
    </>
  );
};

export default Category;
