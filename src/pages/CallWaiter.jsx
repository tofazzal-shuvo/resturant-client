import { useMutation } from "@apollo/react-hooks";
import { Button, Spin } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";
import { ASK_FOR_BILL, CALL_WEITER } from "../graphql/modules";
import { showNotification } from "../util";

const CallWAITER = () => {
  const history = useHistory();
  const defaultColor = useSelector(
    (state) => state?.info?.resTemplate?.general?.defaultColor || ""
  );
  const orderId = useSelector((state) => state?.info?.tableId || "");

  const [onCallWeiter, { loading: callLoader }] = useMutation(CALL_WEITER);
  const waiterCall = async () => {
    try {
      const {
        data: { CallWaiter },
      } = await onCallWeiter({
        variables: {
          orderId,
        },
      });
      showNotification(CallWaiter);
      if (CallWaiter.success) {
        history.push("/ask-for-waiter");
      }
    } catch (error) {}
  };
  const [onAskForBill, { loading: askLoader }] = useMutation(ASK_FOR_BILL);
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

  const btnStyle = {
    border: "none",
    color: defaultColor,
    paddingLeft: 0,
    paddingRight: 0,
    display: "block",
    margin: "auto",
    fontSize: "1.5rem",
    background: "transparent",
    textTransform: "uppercase",
  };

  return (
    <Spin spinning={askLoader || callLoader} style={{minHeight:"100vh"}}>
      <Banner />
      <div className="text-center pl-2 pr-2">
        <div style={{ marginTop: "45%" }}>
          <Button
            style={{ ...btnStyle, marginBottom: "30px" }}
            onClick={waiterCall}
          >
            <FormattedMessage id="APP.WAITER.CALL_WAITER" />
          </Button>
          <Button style={btnStyle} onClick={askFoBill}>
            <FormattedMessage id="APP.WAITER.ASK_FOR_BILL" />
          </Button>
        </div>
      </div>
    </Spin>
  );
};
export default CallWAITER;
