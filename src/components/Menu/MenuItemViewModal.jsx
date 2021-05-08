import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import SizingInput from "./SizingInput";
import DropdownInput from "./DropdownInput";
import ExtraInput from "./ExtraInput";
import RecommendationsInput from "./RecommendationsInput";
import { IncDecBtn } from "../Shared";
import { CheckOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/modules";

const MenuItemViewModal = ({
  visible,
  name,
  price,
  onCancel,
  recommendations,
  sizings,
  extras,
  dropdowns,
  image,
  desc,
  _id,
}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ quantity: 1 });
  const [totalPrice, setTotalPrice] = useState(price);
  const [selectExtras, setExtras] = useState([]);
  const [selectSizing, setSizing] = useState([]);
  const [selectDropdown, setDropdown] = useState([]);
  const [selectRecommendaton, setRecommendaton] = useState({
    dropdowns: [],
    sizing: [],
  });

  const onChangeQuantity = (quantity) => setState({ ...state, quantity });
  const onChangeNote = (e) => setState({ ...state, note: e.target.value });

  useEffect(() => {
    let temp = +price;
    selectDropdown.map(({ price }) => (temp += +price));
    selectExtras.map(({ price, quantity }) => (temp += +price * +quantity));
    selectSizing.map(({ price }) => (temp += +price));
    setTotalPrice(temp);
  }, [selectDropdown, selectExtras, selectSizing]);

  // useEffect(() => {
  //   dispatch({
  //     type: "CLEAR_ITEM",
  //   });
  // }, []);

  const onAddToCard = () => {
    const addedItem = {
      item: _id,
      name,
      price,
      ...state,
      extras: selectExtras,
      dropdowns: selectDropdown,
      sizing: selectSizing,
      recommendation: selectRecommendaton,
    };
    dispatch(addCart(addedItem));
    onCancel();
  };
  useEffect(() => {
    setTotalPrice(0);
  }, [visible]);

  return (
    <Modal
      visible={visible === "view"}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ padding: "0", paddingBottom: "30px" }}
      className="custom-positioning-modal"
    >
      <div
        style={{
          paddingTop: "20vh",
          backgroundImage: `url(https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          style={{
            backgroundColor: "rgba(255, 255, 255, .6)",
            padding: "3px 7px",
          }}
        >
          {name}
        </h2>
      </div>
      <div style={{ padding: "0 7px" }}>
        <p
          className="desc"
          style={{
            fontSize: "18px",
            color: "#656464",
            marginTop: "25px",
          }}
        >
          {desc}
          <span className="d-block text-right">${price}</span>
        </p>
        <div
          style={{
            borderBottom: "1px solid #D8D8D8",
          }}
        ></div>
        <SizingInput
          options={sizings}
          selectSizing={selectSizing}
          setSizing={setSizing}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <DropdownInput
          options={dropdowns}
          selectDropdown={selectDropdown}
          setDropdown={setDropdown}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <ExtraInput
          extras={extras}
          selectExtras={selectExtras}
          setExtras={setExtras}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <RecommendationsInput
          recommendations={recommendations}
          selectRecommendaton={selectRecommendaton}
          setRecommendaton={setRecommendaton}
        />
        <h2 style={{ fontSize: "18px", marginTop: "8px" }}>Note</h2>
        <textarea rows="5" style={{ width: "100%" }} onChange={onChangeNote} />
        <div className="d-flex align-items-center justify-content-between mb-5 mt-3">
          <IncDecBtn value={1} onChange={onChangeQuantity} />
          <button
            style={{
              border: "none",
              backgroundColor: "#fff",
              marginLeft: "-35px",
              cursor: "pointer",
            }}
            onClick={onAddToCard}
            disabled={!state.quantity}
          >
            <span
              style={{
                padding: "9px 9px",
                backgroundColor: "#B6B7B6",
                fontSize: "20px",
                borderRadius: "4px",
                display: "inline-flex",
                color: "#fff",
              }}
            >
              <CheckOutlined />
            </span>

            <p>ADD TO ORDER</p>
          </button>
          <p style={{ color: "#848383", fontSize: "22px" }}>${totalPrice}</p>
        </div>
      </div>
    </Modal>
  );
};

export default MenuItemViewModal;
