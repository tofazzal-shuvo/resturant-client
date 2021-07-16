import React, { useState } from "react";
import { Collapse } from "antd";
import { getTranslation, groupExtrasItems } from "../../util";
import { RightCircleOutlined } from "@ant-design/icons";
import { IncDecBtn } from "../Shared";
import { useSelector } from "react-redux";

const ExtraInput = ({
  extras: defaultExtras,
  selectExtras,
  setExtras,
  defaultColor,
}) => {
  const [activeKey, setActiveKey] = useState("");
  const onChange = (key) => setActiveKey(key);
  const { Panel } = Collapse;
  const currency = useSelector(
    (state) => state?.info?.resInfo?.currency || "$"
  );
  const extras = defaultExtras?.filter((item) => item.category) || [];
  const groupedExtras = groupExtrasItems(extras);
  const onChangeQuantity = ({ extra, quantity, name, price, translation }) => {
    let data = selectExtras,
      isFound = false;
    if (quantity === 0) {
      data = selectExtras.filter((item) => extra !== item.extra);
      setExtras(data);
      return;
    }

    data.map((item) => {
      if (item.extra === extra) {
        item.quantity = quantity;
        item.price = price;
        isFound = true;
      }
    });

    if (!isFound) data.push({ extra, quantity, name, price, translation });
    setExtras([...data]);
  };
  if (!extras.length) return null;
  return (
    <>
      <h2 style={{ fontSize: "18px", marginTop: "8px", color: defaultColor }}>
        Extras
      </h2>
      <Collapse accordion activeKey={activeKey} onChange={onChange}>
        {Object.keys(groupedExtras).map((key) => {
          const data = groupedExtras[key];
          return (
            <Panel
              showArrow={false}
              header={
                <div className="d-flex align-items-center">
                  <h2 style={{ minWidth: "max-content", fontSize: "14px" }}>
                    {getTranslation(data[0]?.category)}
                  </h2>
                  <RightCircleOutlined
                    style={{ ...iconStyle }}
                    rotate={activeKey === key ? 90 : 0}
                  />

                  <div
                    style={{
                      height: "2px",
                      background: "#727272",
                      width: "-webkit-fill-available",
                    }}
                  ></div>
                </div>
              }
              key={key}
            >
              {data.map(({ name, _id, menuItem, price, translation }) => (
                <div
                  className="d-flex justify-content-between align-items-center mt-1"
                  key={_id}
                >
                  <div className="d-flex align-items-center">
                    <IncDecBtn
                      onChange={(quantity) =>
                        onChangeQuantity({
                          extra: _id,
                          quantity,
                          name: menuItem?.name || name,
                          translation: menuItem
                            ? menuItem.transition
                            : translation,
                          price: menuItem?.price || price,
                        })
                      }
                    />
                    <p style={{ marginLeft: "10px" }}>
                      {menuItem
                        ? getTranslation(menuItem)
                        : getTranslation({ name, translation })}
                    </p>
                  </div>
                  <p>
                    {currency}
                    {Number(menuItem?.price || price || 0).toFixed()}
                  </p>
                </div>
              ))}
            </Panel>
          );
        })}
      </Collapse>
    </>
  );
};

export default ExtraInput;

const iconStyle = {
  color: "#727272",
  borderRadius: "50%",
  padding: "0px 3px",
  margin: "0 5px 0 0px",
  fontSize: "13px",
  transition: "all 2s",
};
