import React, { useEffect, useState } from "react";
import { Modal, Spin } from "antd";
import SizingInput from "./SizingInput";
import DropdownInput from "./DropdownInput";
import ExtraInput from "./ExtraInput";
import RecommendationsInput from "./RecommendationsInput";
import { IncDecBtn } from "../Shared";
import { CheckOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/modules";
import { FETCH_MENU_ITEM } from "../../graphql/modules";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { getImage, getTranslation } from "../../util";
import { useRef } from "react";

const MenuItemViewModal = ({ visible, onCancel, _id }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state?.info?.lang || undefined);
  const { background, defaultColor } = useSelector(
    (state) => state?.info?.resTemplate?.general
  );

  // query
  const [fetchmenuItem, { data, loading }] = useLazyQuery(FETCH_MENU_ITEM, {
    variables: {
      id: _id,
      lang,
    },
    fetchPolicy: "no-cache",
  });

  const {
    name,
    price,
    recommendations = [],
    sizings = [],
    extras = [],
    dropdowns = [],
    image,
    desc,
    translation,
    fixedPrice,
  } = data?.FetchMenuItem?.item || {};

  // state
  const [state, setState] = useState({ quantity: 1, note: "" });
  const [totalPrice, setTotalPrice] = useState(price);
  const [selectExtras, setExtras] = useState([]);
  const [selectSizing, setSizing] = useState([]);
  const [selectDropdown, setDropdown] = useState([]);
  const [selectRecommendaton, setRecommendaton] = useState(defaultRecom);

  const onChangeQuantity = (quantity) => setState({ ...state, quantity });
  const onChangeNote = (e) => setState({ ...state, note: e.target.value });
  const onModalClose = () => {
    onCancel();
    setTotalPrice(0);
    setSizing([]);
    setExtras([]);
    setDropdown([]);
    setRecommendaton(defaultRecom);
  };
  useEffect(() => {
    let temp = fixedPrice ? +price : 0;
    selectDropdown.map(({ price }) => (temp += +price));
    selectExtras.map(({ price, quantity }) => (temp += +price * +quantity));
    selectSizing.map(({ price }) => (temp += +price));
    temp += selectRecommendaton.totalPrice || 0;
    setTotalPrice(temp);
  }, [
    selectDropdown,
    selectExtras,
    selectSizing,
    selectRecommendaton,
    fixedPrice,
  ]);

  const onAddToCard = () => {
    const addedItem = {
      item: _id,
      name,
      translation,
      price,
      fixedPrice,
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
    if (visible === "view") fetchmenuItem();
    setState({ quantity: 1, note: "" });
  }, [visible]);

  const modalBodyStyle = {
    height: "100vh",
    overflowY: "scroll",
    padding: 0,
    background,
  };

  const translationObj =
    (Array.isArray(translation) && translation.length) > 0
      ? translation[0]
      : {};
  return (
    <Modal
      visible={visible === "view"}
      onCancel={onModalClose}
      footer={null}
      bodyStyle={{ padding: "0" }}
      style={modalStyle}
      bodyStyle={modalBodyStyle}
      className="custom-positioning-modal"
    >
      <Spin spinning={loading}>
        <div
          style={{
            paddingTop: "20vh",
            backgroundImage: `url(${getImage(image)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2
            style={{
              backgroundColor: "rgba(255, 255, 255, .6)",
              padding: "3px 7px",
              color: defaultColor,
            }}
          >
            {getTranslation({ name, translation })}
          </h2>
        </div>
        <div style={{ padding: "0 7px" }}>
          <p
            className="desc"
            style={{
              fontSize: "18px",
              color: "#656464",
              marginTop: "25px",
              color: defaultColor,
            }}
          >
            {translationObj.desc || desc}
            <span className="d-block text-right">${price}</span>
          </p>
          <div
            style={{
              borderBottom: "1px solid #D8D8D8",
            }}
          ></div>
          {!fixedPrice && (
            <SizingInput
              options={sizings}
              selectSizing={selectSizing}
              setSizing={setSizing}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              defaultColor={defaultColor}
            />
          )}
          <DropdownInput
            options={dropdowns}
            selectDropdown={selectDropdown}
            setDropdown={setDropdown}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            defaultColor={defaultColor}
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
          <h2
            style={{ fontSize: "18px", marginTop: "8px", color: defaultColor }}
          >
            Note
          </h2>
          <textarea
            rows="5"
            value={state.note}
            style={{ width: "100%" }}
            onChange={onChangeNote}
          />
          <div className="d-flex align-items-center justify-content-between pb-3 mt-3">
            <IncDecBtn value={1} onChange={onChangeQuantity} />
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                marginLeft: "-35px",
                cursor: "pointer",
                color: "#656565",
              }}
              onClick={onAddToCard}
              disabled={!state.quantity}
            >
              <span
                style={{
                  padding: "9px 9px",
                  backgroundColor: "#656565",
                  fontSize: "20px",
                  borderRadius: "4px",
                  display: "inline-flex",
                  color: defaultColor,
                }}
              >
                <CheckOutlined />
              </span>

              <p style={{ color: defaultColor }}>ADD TO ORDER</p>
            </button>
            <p
              style={{
                color: "#848383",
                fontSize: "22px",
                color: defaultColor,
              }}
            >
              ${totalPrice}
            </p>
          </div>
        </div>
      </Spin>
    </Modal>
  );
};

export default MenuItemViewModal;

const modalStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  top: 0,
};

const defaultRecom = {
  dropdowns: [],
  sizing: [],
};
