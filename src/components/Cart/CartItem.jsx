import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCardItem, updateCardItemQnt } from "../../store/modules";
import { IncDecBtn } from "../Shared";
import InnerItemOfMenuItem from "./InnerItemOfMenuItem";
import Recommendation from "./Recommendation";

const Items = (props) => {
  const dispatch = useDispatch();
  const {
    name,
    price,
    dropdowns,
    sizing,
    extras,
    note,
    recommendation,
    quantity,
    item,
    idx
  } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  const onChangeQnt = (quantity) =>
    dispatch(updateCardItemQnt({ idx, quantity }));
  const beforSetZero = () => {
    Modal.confirm({
      title: "By setting quantity zero, the cart item will be delete.",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        dispatch(deleteCardItem({ item }));
      },
      okButtonProps:{
        style:{
          background:"red"
        }
      }
    });
  };

  useEffect(() => {
    let temp = +price;
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
            color: "black",
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: "28px",
          }}
        >
          {name}
        </h3>
        <InnerItemOfMenuItem title="Options" options={dropdowns} />
        <InnerItemOfMenuItem title="Sizing" options={sizing} />
        <InnerItemOfMenuItem title="Extras" options={extras} from="extra" />
        {note && (
          <p style={{ fontSize: "16px" }}>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>Note: </span>
            {note}
          </p>
        )}
        <Recommendation {...recommendation} />
      </div>
      <div>
        <p style={{ fontSize: "1rem" }}>
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
