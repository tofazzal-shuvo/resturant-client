import { useQuery } from "@apollo/react-hooks";
import { Button, Spin } from "antd";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Banner, Layout } from "../components/Shared";
import { LanguageContext } from "../context";
import { FETCH_LANGUAGES, FETCH_RESTAURANT } from "../graphql/modules";
import { addInfo } from "../store/modules";

const Language = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { locale, onChangeLang } = useContext(LanguageContext);

  const query = new URLSearchParams(location.search);
  const restaurantId = query.get("restaurant") || "6043515b45cbda7b7d23d625";
  const tableId =
    query.get("table") ||
    // "6073463037f157001ad3d0cd";
    "606d56ab45cbda7b7d23d704";
  const defaultColor = useSelector(
    (state) => state?.info?.resTemplate?.general?.defaultColor
  );

  const { data, loading } = useQuery(FETCH_LANGUAGES, {
    variables: {
      restaurant: restaurantId,
      active: true,
    },
  });
  const lenguages = data?.FetchLanguagesByRestaurant?.result || [];

  const { data: resData, loading: resLoading } = useQuery(FETCH_RESTAURANT, {
    variables: {
      restaurantId,
    },
  });
  const restaurant = resData?.FetchRestaurant?.restaurant || {};
  // console.log({ restaurant });
  useEffect(() => {
    if (restaurant) {
      const { template, ...resInfo } = restaurant;
      dispatch(
        addInfo({ tableId, restaurantId, resTemplate: template, resInfo })
      );
    }
  }, [restaurant]);

  const onSelectLanguage = (lang) => {
    dispatch(addInfo({ lang }));
    if (!lang) onChangeLang("en");
    else if (lang === "bn") onChangeLang("bn");
    history.push(`/menu`);
  };

  return (
    <Spin spinning={loading || resLoading}>
      <div className="welcome text-center">
        <Banner />
        <Layout>
          <Button
            className="mb-2"
            style={{
              background: "transparent",
              color: defaultColor,
            }}
            onClick={() => onSelectLanguage("")}
          >
            English
          </Button>
          {lenguages.map(({ name, key }) => (
            <Button
              className="mb-2"
              style={{
                background: "transparent",
                color: defaultColor,
              }}
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
