import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addInfo } from "../../store/modules";
import { getTranslation } from "../../util";

const SingleCategory = ({ category, resTemplate }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { items, subcategory, name } = category;

  const redirectToMenuItems = () => {
    dispatch(addInfo({ category, isMenuItem: false }));
    history.push("/menu/items");
  };

  const onClickCategory = () => {
    if (Array.isArray(items) && items.length > 0) {
      redirectToMenuItems();
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <Button
        className="mb-2"
        style={{
          background: "transparent",
          color: resTemplate?.general?.categoryColor,
          borderBottom: show === true ? "1px solid #707070" : "none",
        }}
        onClick={onClickCategory}
      >
        {getTranslation(category)}
      </Button>
      {show &&
        subcategory.map((item) => (
          <Button
            onClick={redirectToMenuItems}
            style={{
              background: "transparent",
              color: resTemplate?.general?.subcategoryColor,
              fontSize: ".9rem",
            }}
          >
            {getTranslation(item)}
          </Button>
        ))}
    </>
  );
};

export default SingleCategory;
