import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addInfo } from "../../store/modules";

const SingleCategory = ({ category }) => {
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
        style={show === true ? { borderBottom: "1px solid #707070" } : {}}
        onClick={onClickCategory}
      >
        {name}
      </Button>
      {show &&
        subcategory.map((item) => (
          <Button
            style={{ color: "#A2A2A2", fontSize: ".9rem" }}
            onClick={redirectToMenuItems}
          >
            {item.name}
          </Button>
        ))}
    </>
  );
};

export default SingleCategory;
