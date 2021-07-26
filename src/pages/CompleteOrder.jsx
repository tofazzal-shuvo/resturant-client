import { useMutation } from "@apollo/react-hooks";
import { Button, Spin } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Banner } from "../components/Shared";
import { CALL_WEITER } from "../graphql/modules";
import { showNotification } from "../util";

const CallWAITER = () => {
  const history = useHistory();
  const defaultColor = useSelector(
    (state) => state?.info?.resTemplate?.general?.defaultColor || ""
  );
  const tableId = useSelector((state) => state?.info?.tableId || "");

  const [onCallWeiter, { loading: callLoader }] = useMutation(CALL_WEITER);
  const waiterCall = async () => {
    try {
      const {
        data: { CallWaiter },
      } = await onCallWeiter({
        variables: {
          tableId,
        },
      });
      showNotification(CallWaiter);
      if (CallWaiter.success) {
        history.push("/ask-for-waiter");
      }
    } catch (error) {}
  };

  const redirectToOrder = () => history.push("/menu");

  const buttonStyle = {
    border: "none",
    paddingLeft: 0,
    paddingRight: 0,
    display: "block",
    margin: "auto",
    marginBottom: "30px",
    fontSize: "1.5rem",
    color: defaultColor,
    background: "transparent",
  };

  return (
    <Spin spinning={callLoader}>
      <Banner text={<FormattedMessage id="APP.BANNER.ORDER_PLACED" />} />

      <div className="text-center pl-2 pr-2">
        <div className="mt-5">
          <Button
            style={{
              ...buttonStyle,
              color: defaultColor || "#656464",
              height: "auto",
            }}
          >
            <FormattedMessage id="APP.COMPLETE_ORDER.TEXT-1" />
            <br />
            <FormattedMessage id="APP.COMPLETE_ORDER.TEXT-2" />
          </Button>
          <Button style={buttonStyle} onClick={redirectToOrder}>
            <FormattedMessage id="APP.COMPLETE_ORDER.BUTTON" />
          </Button>
          <Button style={buttonStyle} onClick={waiterCall}>
            <FormattedMessage id="APP.WAITER.CALL_WAITER" />
          </Button>
        </div>
      </div>
    </Spin>
  );
};

export default CallWAITER;
