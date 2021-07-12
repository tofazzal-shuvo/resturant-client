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
import { useLazyQuery } from "@apollo/react-hooks";
import { getImage, getTranslation } from "../../util";

const MenuItemViewModal = ({ visible, onCancel, _id }) => {
  const dispatch = useDispatch();
  const { resTemplate, lang } = useSelector((state) => state?.info);
  const currency = useSelector(
    (state) => state?.info?.resInfo?.currency || "$"
  );
  const { background, defaultColor } = resTemplate?.general || {};
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
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectExtras, setExtras] = useState([]);
  const [selectSizing, setSizing] = useState([]);
  const [selectDropdown, setDropdown] = useState([]);
  const [selectRecommendaton, setRecommendaton] = useState(defaultRecom);

  const onChangeQuantity = (quantity) => {
    setState({ ...state, quantity });
  };
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
    if (!fixedPrice) selectSizing.map(({ price }) => (temp += +price));
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
      itemTotal: totalPrice,
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

  const backgroundStyle = !resTemplate?.lightboxItemImage
    ? { marginTop: "50px" }
    : {
        paddingTop: "20vh",
        backgroundImage: `url(${getImage(image)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

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
        <div style={backgroundStyle}>
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
        <div
          style={{
            padding: "0 7px",
            position: "relative",
            minHeight: "52vh",
            marginBottom: "90px",
          }}
        >
          <div>
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
              <span className="d-block text-right">
                {currency}
                {Number(price || 0).toFixed(2)}
              </span>
            </p>
            <div
              style={{
                borderBottom: "1px solid #D8D8D8",
              }}
            ></div>
            {!fixedPrice && sizings?.length !== 0 && (
              <SizingInput
                options={sizings}
                selectSizing={selectSizing}
                setSizing={setSizing}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                defaultColor={defaultColor}
              />
            )}
            {dropdowns?.length !== 0 && (
              <DropdownInput
                options={dropdowns}
                selectDropdown={selectDropdown}
                setDropdown={setDropdown}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                defaultColor={defaultColor}
              />
            )}
            {extras?.length !== 0 && (
              <ExtraInput
                extras={extras}
                selectExtras={selectExtras}
                setExtras={setExtras}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            )}
            {recommendations?.length !== 0 && (
              <RecommendationsInput
                recommendations={recommendations}
                selectRecommendaton={selectRecommendaton}
                setRecommendaton={setRecommendaton}
              />
            )}
            <h2
              style={{
                fontSize: "18px",
                marginTop: "8px",
                color: defaultColor,
              }}
            >
              Note
            </h2>
            <textarea
              rows="5"
              value={state.note}
              style={{ width: "100%" }}
              onChange={onChangeNote}
            />
          </div>
          <div
            className="d-flex align-items-center justify-content-between pb-3 position-absolute"
            style={{ width: "96%", bottom: "-105px" }}
          >
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
              {currency}
              {Number(totalPrice * state.quantity).toFixed(2)}
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
