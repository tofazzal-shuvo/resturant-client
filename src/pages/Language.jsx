import { useQuery } from "@apollo/react-hooks";
import { Button, Spin } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Banner, Layout } from "../components/Shared";
import { FETCH_LANGUAGES } from "../graphql/modules";
import { addInfo } from "../store/modules";

const Language = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search);
  const restaurantId = query.get("restaurant") || "6043515b45cbda7b7d23d625";
  const tableId = query.get("table") || "606d56ab45cbda7b7d23d704";
// console.log()
  const { data, loading } = useQuery(FETCH_LANGUAGES, {
    variables: {
      restaurant: restaurantId,
      active: true,
    },
  });
  const lenguages = data?.FetchLanguagesByRestaurant?.result || [];

  const onSelectLanguage = (lang) => {
    dispatch(addInfo({ tableId, restaurantId, lang }));
    history.push(`/menu`);
  };

  return (
    <Spin spinning={loading}>
      <div className="welcome text-center">
        <Banner text="Reastaurant" />
        <Layout>
          <Button className="mb-2" onClick={() => onSelectLanguage("")}>
            English
          </Button>
          {lenguages.map(({ name, key }) => (
            <Button
              className="mb-2"
              onClick={() => onSelectLanguage(key)}
              key={key}
            >
              {name}
            </Button>
          ))}
        </Layout>
      </div>
    </Spin>
  );
};

export default Language;
