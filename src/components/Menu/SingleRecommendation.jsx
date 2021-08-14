import React, { useEffect, useState } from "react";
import { CaretRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Collapse, Radio } from "antd";
import { ExpandedIcon, StopPropagation } from "../Shared";
import MenuItemInfoModal from "./MenuItemInfoModal";
import SizingInput from "./SizingInput";
import DropdownInput from "./DropdownInput";
import { getTranslation } from "../../util";
import { useSelector } from "react-redux";

const SingleRecommendation = ({
  name,
  _id,
  price,
  dropdowns,
  ingredient,
  sizings,
  allergens,
  fixedPrice,
  selectRecommendaton,
  setRecommendaton,
  translation,
  // defaultSelected
}) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [visible, setVisible] = useState("");
  const [selectSizing, setSizing] = useState([]);
  const [selectDropdown, setDropdown] = useState([]);
  const [activeCollapse, setActiveCollapse] = useState(null);
  const currency = useSelector(
    (state) => state?.info?.resInfo?.currency || "$"
  );
  // console.log( selectRecommendaton );
  const onChangeRadio = (e) => {
    setRecommendaton({
      item: _id,
      name,
      dropdowns: selectDropdown,
      sizing: selectSizing,
      totalPrice,
    });
  };
  const onCancel = () => setVisible("");
  const onClickInfo = () => setVisible("info");

  useEffect(() => {
    let temp = fixedPrice ? +price : 0;
    selectDropdown.map(({ price }) => (temp += +price));
    if (!fixedPrice) selectSizing.map(({ price }) => (temp += +price));
    if (selectRecommendaton.item === _id) {
      setRecommendaton({
        item: _id,
        name,
        dropdowns: selectDropdown,
        sizing: selectSizing,
        totalPrice: temp,
      });
    }
    setTotalPrice(temp);
  }, [selectDropdown, selectSizing]);

  useEffect(() => {
    const defaultSelected = [];
    if (Array.isArray(sizings)) {
      sizings.map(({ items }) => {
        items.map(({ _id, default: isDefaultValue, item, price }) => {
          if (isDefaultValue) {
            let temp = {
              // menuSizing,
              size: _id,
              name,
              translation,
              sizingItemName: item.name,
              price,
            };
            defaultSelected.push(temp);
          }
        });
      });
      setSizing(defaultSelected);
    }
  }, [sizings]);

  const { Panel } = Collapse;

  const shouldCollapsible = () => {
    const shouldRender = dropdowns.find(
      (data) => !!(data?.dropdown && data?.dropdown?.extras?.length)
    );
    const shouldRender1 = sizings.find((data) => !!data?.items?.length);
    if (!shouldRender && !shouldRender1) return "disabled";
    else return "header";
  };
  return (
    <>
      <Collapse
        accordion
        style={{ marginTop: "15px" }}
        collapsible={shouldCollapsible()}
        onChange={(id) => setActiveCollapse(id)}
        activeKey={activeCollapse}
      >
        <Panel
          showArrow={false}
          header={
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <ExpandedIcon isActive={activeCollapse}/>
                <h2 style={{ display: "inline-block", fontSize: "16px" }}>
                  {getTranslation({ name, translation })}
                </h2>
                <StopPropagation style={{ marginTop: "-5px" }}>
                  <InfoCircleOutlined
                    style={{ marginLeft: "5px", fontSize: "13px" }}
                    onClick={onClickInfo}
                  />
                </StopPropagation>
              </div>
              <div style={{ color: "rgba(0,0,0,.85)" }}>
                {currency}
                {Number(totalPrice || 0).toFixed(2)}
                <StopPropagation>
                  <Radio
                    className="ml-1"
                    checked={selectRecommendaton.item === _id}
                    onChange={onChangeRadio}
                  />
                </StopPropagation>
              </div>
            </div>
          }
          key={"key"}
        >
          {!fixedPrice && (
            <SizingInput
              selectSizing={selectSizing}
              setSizing={setSizing}
              options={sizings}
            />
          )}
          <DropdownInput
            setDropdown={setDropdown}
            selectDropdown={selectDropdown}
            options={dropdowns}
          />
        </Panel>
      </Collapse>
      <MenuItemInfoModal
        visible={visible}
        onCancel={onCancel}
        name={name}
        allergens={allergens}
        ingredient={ingredient}
      />
    </>
  );
};

export default SingleRecommendation;
