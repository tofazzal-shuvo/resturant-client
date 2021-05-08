import React, { useEffect, useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Collapse, Radio } from "antd";
import { StopPropagation } from "../Shared";
import MenuItemInfoModal from "./MenuItemInfoModal";
import SizingInput from "./SizingInput";
import DropdownInput from "./DropdownInput";

const SingleRecommendation = ({
  name,
  _id,
  price,
  dropdowns,
  ingredient,
  sizings,
  allergens,
  selectRecommendaton,
  setRecommendaton,
}) => {
  const [visible, setVisible] = useState("");
  const [selectSizing, setSizing] = useState([]);
  const [selectDropdown, setDropdown] = useState([]);

  // console.log( selectRecommendaton );
  const onChangeRadio = (e) => {
    setRecommendaton({
      item: _id,
      name,
      dropdowns: selectDropdown,
      sizing: selectSizing,
    });
  };
  const onCancel = () => setVisible("");
  const onClickInfo = () => setVisible("info");

  useEffect(() => {
    if (selectRecommendaton.item === _id) {
      setRecommendaton({
        item: _id,
        name,
        dropdowns: selectDropdown,
        sizing: selectSizing,
      });
    }
  }, [selectSizing, selectDropdown]);

  // console.log({ dropdowns, ingredient, sizings, allergens });
  const { Panel } = Collapse;
  return (
    <>
      <Collapse accordion style={{ marginTop: "15px" }}>
        <Panel
          showArrow={false}
          header={
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h2 style={{ display: "inline-block", fontSize: "16px" }}>
                  {name}
                </h2>
                <StopPropagation>
                  <InfoCircleOutlined
                    style={{ marginLeft: "5px", fontSize: "13px" }}
                    onClick={onClickInfo}
                  />
                </StopPropagation>
              </div>
              <div>
                ${price}
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
          <SizingInput
            selectSizing={selectSizing}
            setSizing={setSizing}
            options={sizings}
          />
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
