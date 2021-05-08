import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";

const AskForBill = () => {
  const history = useHistory();
  const redirect = () => history.push("/ask-for-waiter");
  return (
    <>
      <Banner text="Restaurant" />
      <div className="pl-2 pr-2 text-center">
        <div style={{ marginTop: "40%" }}>
          <Button style={buttonStyle} className="not-active">
            Your bill is on his way
          </Button>
          <ClockCircleOutlined
            style={{ color: "#6d9d62", marginBottom: "15px", fontSize: "30px" }}
          />
          <Button
            style={{
              ...buttonStyle,
              color: "#4B4B4B",
              // fontSize: "2rem",
              textTransform: "uppercase",
            }}
            onClick={redirect}
          >
            Call Waiter
          </Button>
        </div>
      </div>
    </>
  );
};
export default AskForBill;

const buttonStyle = {
  border: "none",
  color: "#4B4B4B",
  paddingLeft: 0,
  paddingRight: 0,
  display: "block",
  margin: "auto",
  marginBottom: "15px",
  fontSize: "1.5rem",
};
