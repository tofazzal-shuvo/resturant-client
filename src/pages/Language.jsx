import { useQuery } from "@apollo/react-hooks";
import { Button, Spin } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { FETCH_LANGUAGES } from "../graphql/modules";
import { addInfo } from "../store/modules";

const Language = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search);
  const restaurantId = query.get("restaurant");
  const tableId = query.get("table");

  const { data, loading } = useQuery(FETCH_LANGUAGES, {
    variables: {
      restaurant: restaurantId,
      active: true,
    },
  });
  const lenguages = data?.FetchLanguagesByRestaurant?.result || [];

  const onSelectLanguage = (lang) => {
    dispatch(addInfo({ tableId, restaurantId, lang }));
    history.push(`/menu-items`);
  };

  return (
    <Spin spinning={loading}>
      <div className="container welcome">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              src="/img/logo.png"
              alt="logo"
              className="img-fluid mt-5 mb-5"
            />

            <h2 className="mb-5">Welcome</h2>
            <Button className="mb-4" onClick={() => onSelectLanguage("")}>
              English
            </Button>
            {lenguages.map(({ name, key }) => (
              <Button
                className="mb-4"
                onClick={() => onSelectLanguage(key)}
                key={key}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Language;
