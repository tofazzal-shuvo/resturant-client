import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTranslation } from "../../util";
import SingleMenuItem from "./SingleMenuItem";
import { animateScroll } from "react-scroll";

const MenuCategory = ({ items, subcategory, ...rest }) => {
  const { subcategoryColor, categoryColor } = useSelector(
    (state) => state?.info?.resTemplate?.general || {}
  );
  const targetId = useSelector((state) => state?.info?.targetId);

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
    fontWeight: "800",
    color: categoryColor,
  };

  useEffect(() => {
    if (targetId && animateScroll) {
      const offsetTop = document.getElementById(targetId)?.offsetTop;
      animateScroll.scrollTo(offsetTop - document.body.scrollTop);
    }
  }, []);

  const shouldRender = () => {
    if (Array.isArray(items) && items.length !== 0) return true;
    if (!Array.isArray(subcategory)) return false;
    let flag = false;
    subcategory.map((item) => {
      const { items } = item || {};
      if (Array.isArray(items) && items.length !== 0) flag = true;
      else flag = false;
    });

    return flag;
  };

  if (!shouldRender()) return null;
  return (
    <div className="pt-4 pl-2 pr-2 pb-0" id={rest._id}>
      <h2 style={categoryStyle}>{getTranslation(rest)}</h2>
      {Array.isArray(items) &&
        items.length > 0 &&
        items.map((item) => <SingleMenuItem item={item} key={item._id} />)}
      {Array.isArray(subcategory) &&
        subcategory.length > 0 &&
        subcategory.map(({ items, _id, ...rest }) => {
          if (Array.isArray(items) && items.length === 0) return null;
          return (
            <div id={_id} key={_id}>
              <div className="mt-3 mb-3 d-inline-block w-100" key={_id}>
                <h2 style={subcategoryStyle}>{getTranslation(rest)}</h2>
                {Array.isArray(items) &&
                  items.length > 0 &&
                  items.map((item) => (
                    <SingleMenuItem item={item} key={item._id} />
                  ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuCategory;
