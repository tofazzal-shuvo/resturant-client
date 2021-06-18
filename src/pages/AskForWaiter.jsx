import { ClockCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/react-hooks";
import { Button, Spin } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";
import { ASK_FOR_BILL, CALL_WEITER } from "../graphql/modules";
import { showNotification } from "../util";

const AskForWaiter = () => {
  const history = useHistory();
  const defaultColor = useSelector(
    (state) => state?.info?.resTemplate?.general?.defaultColor || ""
  );
  const orderId = useSelector((state) => state?.info?.tableId || "");

  const [onAskForBill, { loading }] = useMutation(ASK_FOR_BILL);
  const askFoBill = async () => {
    try {
      const {
        data: { AskForBill },
      } = await onAskForBill({
        variables: {
          orderId,
        },
      });
      showNotification(AskForBill);
      if (AskForBill.success) {
        history.push("/ask-for-bill");
      }
    } catch (error) {}
  };
  const buttonStyle = {
    border: "none",
    color: defaultColor || "#4B4B4B",
    paddingLeft: 0,
    paddingRight: 0,
    display: "block",
    margin: "auto",
    marginBottom: "15px",
    fontSize: "1.5rem",
    background: "transparent",
  };

  return (
    <Spin spinning={loading}>
      <Banner />
      <div className="pl-2 pr-2 text-center">
        <div style={{ marginTop: "40%" }}>
          <Button style={buttonStyle} className="not-active">
            <FormattedMessage id="APP.WAITER.YOUR_WAITER_ON_HIS_WAY" />
          </Button>
          <ClockCircleOutlined
            style={{ color: "#6d9d62", marginBottom: "15px", fontSize: "30px" }}
          />
          <Button
            style={{
              ...buttonStyle,
              color: defaultColor || "#4B4B4B",
              textTransform: "uppercase",
            }}
            onClick={askFoBill}
          >
            <FormattedMessage id="APP.WAITER.ASK_FOR_BILL" />
          </Button>
        </div>
      </div>
    </Spin>
  );
};
export default AskForWaiter;
