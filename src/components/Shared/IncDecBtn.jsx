import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import ButtonGroup from "antd/lib/button/button-group";

const IncDecBtn = ({ style, onChange, value, beforSetZero }) => {
  const [quantity, setQuantity] = useState(value || 0);
  const setData = (data) => {
    if (typeof beforSetZero === "function" && data === 0) {
      beforSetZero();
      return;
    }
    setQuantity(data);
    onChange(data);
  };
  const increase = () => {
    const data = quantity + 1;
    setData(data);
  };
  const decrease = () => {
    let data = quantity - 1;
    if (data < 0) data = 0;
    setData(data);
  };
  const onValueChange = (e) => {
    let value = e.target.value;
    if (!value) {
      value = 0;
    }
    setData(value);
  };
  return (
    <div>
      <ButtonGroup style={style} className="inc-desc-btn">
        <Button
          onClick={decrease}
          style={{
            borderRight: "none",
            color: "red",
          }}
        >
          {/* <MinusOutlined /> */}
          <i className="fas fa-minus"></i>
        </Button>
        <Input
          value={quantity}
          onChange={onValueChange}
          type="number"
          style={{
            borderRight: "none",
            borderLeft: "none",
          }}
        />
        <Button
          onClick={increase}
          style={{
            borderLeft: "none",
            color: "green",
          }}
        >
          {/* <PlusOutlined /> */}
          <i className="fas fa-plus"></i>
        </Button>
      </ButtonGroup>
      {/* {fromCard && (
        <DeleteOutlined
          style={{ color: "red", marginLeft: "10px" }}
          onClick={onDelete}
        />
      )} */}
    </div>
  );
};

export default IncDecBtn;
