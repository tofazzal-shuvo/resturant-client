import React from "react";
import ButtonGroup from "antd/lib/button/button-group";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard } from "../../store/modules";

const IncDecBtn = ({ fromCard, id, name, price }) => {
  const count = useSelector((state) => state?.card[id]?.quantity);
  const dispatch = useDispatch();

  const increase = () =>
    dispatch(addCard({ id, name, price, quantity: (count || 0) + 1 }));

  const decrease = () => {
    let quantity = count - 1;
    if (quantity < 0) quantity = 0;
    dispatch(addCard({ id, quantity, name, price }));
  };
  const onValueChange = (e) => {
    let value = e.target.value;
    if (!value) {
      value = 0;
    }
    dispatch(addCard({ id, quantity: parseInt(value), name, price }));
  };
  const onDelete = () => dispatch(deleteCard({ id }));
  return (
    <div>
      <ButtonGroup style={{ maxWidth: "100px", marginLeft: "30px" }}>
        <Button onClick={decrease} style={{ padding: "4px 10px" }}>
          <MinusOutlined />
        </Button>
        <Input
          value={count || 0}
          onChange={onValueChange}
          style={{
            borderRight: "none",
            borderLeft: "none",
            textAlign: "center",
            padding: 0,
            minWidth: "32px",
          }}
        />
        <Button onClick={increase} style={{ padding: "4px 10px" }}>
          <PlusOutlined />
        </Button>
      </ButtonGroup>
      {fromCard && (
        <DeleteOutlined
          style={{ color: "red", marginLeft: "10px" }}
          onClick={onDelete}
        />
      )}
    </div>
  );
};

export default IncDecBtn;
