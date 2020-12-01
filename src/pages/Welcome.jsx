import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search);
  const restaurantId = query.get("restaurant");
  const tableId = query.get("table");

  const redirect = () =>
    // history.push(`/language?table=${tableId}&restaurant=${restaurantId}`);
    history.push(
      `/language?table=5f8aa725168d67001a15c7f8&restaurant=5f72b1281ffe10001acab3ba`
    );
  useEffect(() => {
    redirect();
    if (tableId && restaurantId) {
      redirect();
    }
  }, [tableId, restaurantId]);
  return (
    <div className="container qrCode">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="/img/logo.png" alt="logo" className="img-fluid mt-5 mb-5" />
          <h2 className="mb-5">Scan to see menu :)</h2>
          <div className="scanner-wrapper">
            <img
              src="/img/custom-scanner.png"
              className="img-fluid"
              // onClick={redirect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
