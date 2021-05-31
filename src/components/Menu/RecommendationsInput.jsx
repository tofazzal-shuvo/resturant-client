import React, { useState } from "react";
import { Collapse } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import SingleRecommendation from "./SingleRecommendation";

const RecommendationsInput = ({
  recommendations,
  selectRecommendaton,
  setRecommendaton,
}) => {
  const [activeKey, setActiveKey] = useState("");
  const onChange = (key) => setActiveKey(key);
  const { Panel } = Collapse;
  // console.log({ recommendations });
  const defaultSelected = [];

  return (
    <Collapse
      accordion
      activeKey={activeKey}
      onChange={onChange}
      style={{ marginTop: "15px" }}
    >
      <Panel
        showArrow={false}
        header={<CollapseHeader activeKey={activeKey} />}
        key={"key"}
      >
        {recommendations.map((item) => (
          <SingleRecommendation
            {...item}
            key={item._id}
            // defaultSelected={defaultSelected}
            selectRecommendaton={selectRecommendaton}
            setRecommendaton={setRecommendaton}
          />
        ))}
      </Panel>
    </Collapse>
  );
};

export default RecommendationsInput;

const CollapseHeader = ({ activeKey }) => (
  <div className="d-flex align-items-center">
    <h2 style={{ minWidth: "max-content", fontSize: "18px" }}>
      Recommendations
    </h2>
    <RightCircleOutlined
      style={{ ...iconStyle }}
      rotate={activeKey === "key" ? 90 : 0}
    />

    <div
      style={{
        height: "2px",
        background: "#727272",
        width: "-webkit-fill-available",
      }}
    ></div>
  </div>
);

const iconStyle = {
  color: "#727272",
  borderRadius: "50%",
  padding: "0px 3px",
  margin: "0 5px 0 0px",
  fontSize: "13px",
  transition: "all 2s",
};
