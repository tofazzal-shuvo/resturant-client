import { ClockCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/react-hooks";
import { Button, Spin } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";
import { CALL_WEITER } from "../graphql/modules";
import { showNotification, warnNotify } from "../util";

const AskForBill = () => {
  const history = useHistory();
  const defaultColor = useSelector(
    (state) => state?.info?.resTemplate?.general?.defaultColor || ""
  );
  const tableId = useSelector((state) => state?.info?.tableId || "");

  const [onCallWeiter, { loading }] = useMutation(CALL_WEITER);
  const waiterCall = async () => {
    try {
      const {
        data: { CallWaiter },
      } = await onCallWeiter({
        variables: {
          tableId,
        },
      });
      if (CallWaiter.success) {
        history.push("/ask-for-waiter");
      } else {
        warnNotify(CallWaiter.message);
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
            <FormattedMessage id="APP.WAITER.YOUR_BILL_ON_HIS_WAY" />
          </Button>
          <ClockCircleOutlined
            style={{
              color: defaultColor || "#6d9d62",
              marginBottom: "15px",
              fontSize: "30px",
            }}
          />
          <Button
            style={{
              ...buttonStyle,
              textTransform: "uppercase",
            }}
            onClick={waiterCall}
          >
            <FormattedMessage id="APP.WAITER.CALL_WAITER" />
          </Button>
        </div>
      </div>
    </Spin>
  );
};
export default AskForBill;
