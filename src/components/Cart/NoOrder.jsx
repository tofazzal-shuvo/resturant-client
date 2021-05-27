import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Banner } from "../Shared";

const NoOrder = ({ general }) => {
  return (
    <div className="text-center">
      <Banner text={<FormattedMessage id="APP.BANNER.NO_ORDER" />} />
      <h3
        style={{
          color: general?.defaultColor || "#656464",
          fontWeight: "400",
          fontSize: "28px",
          marginTop: "2.5em",
          lineHeight: "1.5",
        }}
      >
        <FormattedMessage id="APP.NO_ORDER.TEXT-1" />
        <br />
        <Link
          to="/menu"
          style={{
            color: general?.defaultColor || "#656464",
          }}
        >
          <FormattedMessage id="APP.NO_ORDER.TEXT-2" />
        </Link>
      </h3>
      <i
        className="fas fa-utensils"
        aria-hidden="true"
        style={{
          color: general?.defaultColor || "#707070",
          marginTop: ".5em",
          fontSize: "6em",
        }}
      ></i>
    </div>
  );
};

export default NoOrder;
