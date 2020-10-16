import React from "react";
import Items from "./Items";

const Submenu = ({ subMenu = {}, menuStyle }) => {
  const submenuName =
    subMenu?.translation?.length === 0
      ? subMenu?.category
      : Array.isArray(subMenu?.translation) && subMenu?.translation[0].name;
  return (
    <div className="mb-3">
      <h3
        style={{
          color: menuStyle.color || "#6d9d62",
          marginBottom: "30px",
          fontFamily: menuStyle.fontFamily || "inherit",
        }}
      >
        Subcategory &gt; {submenuName}
      </h3>
      {subMenu?.items.map((item) => (
        <Items
          item={item}
          fromCard={false}
          key={item._id}
          menuStyle={menuStyle}
        />
      ))}
    </div>
  );
};
export default Submenu;
