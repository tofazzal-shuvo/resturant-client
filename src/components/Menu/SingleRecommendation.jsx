import { InfoCircleOutlined } from "@ant-design/icons";
import { Collapse, Radio } from "antd";
import React from "react";
import { StopPropagation } from "../Shared";

const SingleRecommendation = ({
  name,
  price,
  dropdowns,
  ingredient,
  sizings,
}) => {
  console.log({ dropdowns, ingredient, sizings });
  const { Panel } = Collapse;
  return (
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
                />
              </StopPropagation>
            </div>
            <div>
              ${price}
              <StopPropagation>
                <Radio className="ml-1" />
              </StopPropagation>
            </div>
          </div>
        }
        key={"key"}
      >
        sldfkjsldfj
      </Panel>
    </Collapse>
  );
};

export default SingleRecommendation;
