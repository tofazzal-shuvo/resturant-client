import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCardItem, updateCardItemQnt } from "../../store/modules";
import { getTranslation } from "../../util";
import { IncDecBtn } from "../Shared";
import InnerItemOfMenuItem from "./InnerItemOfMenuItem";
import Recommendation from "./Recommendation";

const Items = (props) => {
  const dispatch = useDispatch();
  const {
    price,
    dropdowns,
    sizing,
    extras,
    note,
    recommendation,
    quantity,
    idx,
    defaultColor,
    fixedPrice,
  } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  const onChangeQnt = (quantity) =>
    dispatch(updateCardItemQnt({ idx, quantity }));
  const beforSetZero = () => {
    Modal.confirm({
      title: "By setting quantity zero, the cart item will be delete.",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        dispatch(deleteCardItem({ idx }));
      },
      okButtonProps: {
        style: {
          background: "red",
        },
      },
    });
  };

  useEffect(() => {
    let temp = fixedPrice ? +price : 0;
    dropdowns.map(({ price }) => (temp += +price));
    extras.map(({ price, quantity }) => (temp += +price * +quantity));
    sizing.map(({ price }) => (temp += +price));
    temp = temp * quantity;
    setTotalPrice(temp);
  }, [dropdowns, extras, sizing, quantity]);

  return (
    <div className="d-flex justify-content-between pl-2 pr-2 mt-5">
      <div style={{ width: "65%" }}>
        <h3
          style={{
            color: defaultColor || "black",
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: "28px",
          }}
        >
          {getTranslation(props)}
        </h3>
        <InnerItemOfMenuItem
          title="Options"
          options={dropdowns}
          defaultColor={defaultColor}
        />
        <InnerItemOfMenuItem
          title="Sizing"
          options={sizing}
          defaultColor={defaultColor}
        />
        <InnerItemOfMenuItem
          title="Extras"
          options={extras}
          from="extra"
          defaultColor={defaultColor}
        />
        {note && (
          <p style={{ fontSize: "16px", color: defaultColor }}>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>Note: </span>
            {note}
          </p>
        )}
        <Recommendation {...recommendation} defaultColor={defaultColor} />
      </div>
      <div>
        <p style={{ fontSize: "1rem", color: defaultColor }}>
          $ {Number(totalPrice || 0).toFixed(2)}
        </p>
        <IncDecBtn
          onChange={onChangeQnt}
          value={quantity}
          beforSetZero={beforSetZero}
        />
      </div>
    </div>
  );
};
export default Items;

const initialStyle = { color: "#6d9d62", fontSize: "1.3rem" };
