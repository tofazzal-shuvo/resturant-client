import React from "react";
import { useSelector } from "react-redux";
import { getTranslation } from "../../util";
import SingleMenuItem from "./SingleMenuItem";

const MenuCategory = ({ items, subcategory, ...rest }) => {
  const { subcategoryColor, categoryColor } = useSelector(
    (state) => state?.info?.resTemplate?.general || {}
  );

  const subcategoryStyle = {
    border: "1px solid #000000",
    borderLeft: "none",
    color: subcategoryColor || "#000000",
    fontSize: "23px",
    padding: "10px",
    fontWeight: "600",
  };

  const categoryStyle = {
    textAlign: "center",
    fontSize: "30px",
    margin: "25px 0 15px",
    fontWeight: "800",
    color: categoryColor,
  };

  return (
    <div className="p-2">
      <h2 style={categoryStyle}>{getTranslation(rest)}</h2>
      {Array.isArray(items) &&
        items.length > 0 &&
        items.map((item) => <SingleMenuItem item={item} key={item._id} />)}
      {Array.isArray(subcategory) &&
        subcategory.length > 0 &&
        subcategory.map(({ items, _id, ...rest }) => (
          <div className="mt-3 mb-3 d-inline-block w-100" key={_id}>
            <h2 style={subcategoryStyle}>{getTranslation(rest)}</h2>
            {Array.isArray(items) &&
              items.length > 0 &&
              items.map((item) => (
                <SingleMenuItem item={item} key={item._id} />
              ))}
          </div>
        ))}
    </div>
  );
};

export default MenuCategory;
