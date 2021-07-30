import React from "react";
import { useState } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  // const query = new URLSearchParams(history.location.search);
  // const restaurantId = query.get("restaurant");
  // const tableId = query.get("table");

  // const redirect = () => {
  //   history.push(`/language?table=${tableId}&restaurant=${restaurantId}`);
  // };

  // useEffect(() => {
  //   if (tableId && restaurantId) {
  //     // redirect();
  //   }
  // }, [tableId, restaurantId]);

  const handleScan = (data) => {
    if (data) {
      history.push(data);
    }
  };
  const onclickScanner = () => setShow(true);
  return (
    <div className="container qrCode">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="/img/logo.png" alt="logo" className="img-fluid mt-5 mb-5" />
          {!show ? (
            <span onClick={onclickScanner}>
              <h2 className="mb-5">Scan to see menu :)</h2>
              <div className="scanner-wrapper">
                <img src="/img/custom-scanner.png" className="img-fluid" />
              </div>
            </span>
          ) : (
            <QrReader
              delay={300}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
