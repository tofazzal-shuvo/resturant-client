import { useQuery } from "@apollo/react-hooks";
import { Button, Spin } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { FETCH_LANGUAGES } from "../graphql/modules";

const Welcome = () => {
  const { data, loading } = useQuery(FETCH_LANGUAGES, {
    variables: {
      restaurant: "5f72b1281ffe10001acab3ba",
      active: true,
    },
  });
  const lenguages = data?.FetchLanguagesByRestaurant?.result || [];
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
            {lenguages.map((item) => (
              <SingleBtn key={item.key} txt={item.name} symble={item.key} />
            ))}
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Welcome;


const SingleBtn = ({ txt, symble }) => {
  const history = useHistory();
  return (
    <Button
      className="mb-4"
      onClick={() => history.push(`/menu-items?lang=${symble}`)}
    >
      {txt}
    </Button>
  );
};
