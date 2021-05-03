import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import ButtonGroup from "antd/lib/button/button-group";

const IncDecBtn = ({ style, onChange }) => {
  const [quantity, setQuantity] = useState(0);
  const setData = (data) => {
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
      <ButtonGroup style={style}>
        <Button
          onClick={decrease}
          style={{
            padding: "4px 6px",
            borderRight: "none",
            display: "flex",
            alignItems: "center",
            color: "red",
          }}
        >
          <MinusOutlined />
        </Button>
        <Input
          value={quantity}
          onChange={onValueChange}
          type="number"
          style={{
            borderRight: "none",
            borderLeft: "none",
            textAlign: "center",
            padding: 0,
            maxWidth: "20px",
          }}
        />
        <Button
          onClick={increase}
          style={{
            padding: "4px 6px",
            borderLeft: "none",
            display: "flex",
            alignItems: "center",
            color: "green",
          }}
        >
          <PlusOutlined />
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
