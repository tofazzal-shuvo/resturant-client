import React from "react";
import SingleMenuItem from "./SingleMenuItem";

const MenuCategory = ({ name, items, subcategory, translation }) => {
  return (
    <div className="p-2">
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "25px 0 15px",
          fontWeight: "800",
        }}
      >
        {name}
      </h2>
      {Array.isArray(items) &&
        items.length > 0 &&
        items.map((item) => <SingleMenuItem item={item} key={item._id} />)}
      {Array.isArray(subcategory) &&
        subcategory.length > 0 &&
        subcategory.map(({ name, items, _id }) => (
          <div className="mt-3 mb-3 d-inline-block w-100" key={_id}>
            <h2
              style={{
                border: "1px solid #000000",
                borderLeft: "none",
                color: "#000000",
                fontSize: "23px",
                padding: "10px",
                fontWeight: "600",
              }}
            >
              {name}
            </h2>
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
