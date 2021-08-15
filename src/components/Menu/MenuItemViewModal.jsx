import React, { useEffect, useState } from "react";
import { Modal, Spin } from "antd";
import SizingInput from "./SizingInput";
import DropdownInput from "./DropdownInput";
import ExtraInput from "./ExtraInput";
import RecommendationsInput from "./RecommendationsInput";
import { IncDecBtn } from "../Shared";
import { CheckOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/modules";
import { FETCH_MENU_ITEM } from "../../graphql/modules";
import { useLazyQuery } from "@apollo/react-hooks";
import { getImage, getTranslation } from "../../util";

const MenuItemViewModal = ({ visible, onCancel, _id }) => {
  const dispatch = useDispatch();
  const { resTemplate, lang, isMenuDisabled } = useSelector(
    (state) => state?.info
  );
  const { iconColor, textColor } = useSelector(
    (state) => state?.info?.resTemplate?.bottomNavigation || {}
  );
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
    enableNote,
    recommendations = [],
    sizings = [],
    extras = [],
    dropdowns = [],
    image,
    desc,
    translation,
    fixedPrice,
  } = data?.FetchMenuItemByCustomer?.item || {};

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
  const [sizingPrice, setSizingPrice] = useState(0);
  useEffect(() => {
    let temp = fixedPrice ? +price : 0;
    selectDropdown.map(({ price }) => (temp += +price));
    selectExtras.map(({ price, quantity }) => (temp += +price * +quantity));
    if (!fixedPrice) {
      let data = 0;
      selectSizing.map(({ price }) => {
        temp += +price;
        data += +price;
      });
      setSizingPrice(data);
    }
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

  const backgroundStyle =
    !resTemplate?.lightboxItemImage || !image
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
      closeIcon={
        <CloseCircleOutlined
          style={{ color: defaultColor || "#000", fontSize: "28px" }}
        />
      }
    >
      <Spin spinning={loading}>
        <div style={backgroundStyle}>
          <h2
            style={{
              backgroundColor: "rgba(255, 255, 255, .6)",
              padding: "3px 7px",
              color: defaultColor,
              textShadow: " 2px 2px 2px rgba(0, 0, 0, 0.4)",
            }}
          >
            {getTranslation({ name, translation })}
          </h2>
        </div>
        <div
          style={{
            padding: "0 7px",
            paddingBottom: "90px",
          }}
        >
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
              {Number(fixedPrice ? price : sizingPrice || 0).toFixed(2)}
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
              defaultColor={defaultColor}
            />
          )}
          {dropdowns?.length !== 0 && (
            <DropdownInput
              options={dropdowns}
              selectDropdown={selectDropdown}
              setDropdown={setDropdown}
              defaultColor={defaultColor}
            />
          )}
          {extras?.length !== 0 && (
            <ExtraInput
              extras={extras}
              selectExtras={selectExtras}
              setExtras={setExtras}
              defaultColor={defaultColor}
            />
          )}
          {recommendations?.length !== 0 && (
            <RecommendationsInput
              recommendations={recommendations}
              selectRecommendaton={selectRecommendaton}
              setRecommendaton={setRecommendaton}
              defaultColor={defaultColor}
            />
          )}
          {enableNote && (
            <>
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
            </>
          )}
        </div>
      </Spin>

      <div
        className="d-flex align-items-center justify-content-between p-2 w-100 position-fixed"
        style={{ bottom: "-1px", backgroundColor: background || "#fff" }}
      >
        <IncDecBtn
          value={1}
          onChange={onChangeQuantity}
          disabled={isMenuDisabled}
        />
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            marginLeft: "-35px",
            cursor: "pointer",
            color: "#656565",
          }}
          onClick={onAddToCard}
          disabled={!state.quantity || loading || isMenuDisabled}
        >
          <span
            style={{
              fontSize: "28px",
              borderRadius: "4px",
              display: "inline-flex",
              color: iconColor,
            }}
          >
            {/* <CheckOutlined /> */}
            <i className="fas fa-check-square"></i>
          </span>

          <p style={{ color: textColor }}>ADD TO ORDER</p>
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
