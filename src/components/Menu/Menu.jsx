import React, { useState } from "react";
import { Spin, Button } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_MENU_BY_RESTAURANT } from "../../graphql/modules";
import { useDispatch, useSelector } from "react-redux";
import CategoryModal from "./CategoryModal";
import { Banner, Layout } from "../Shared";
import { useHistory } from "react-router";
import { addInfo } from "../../store/modules";
import { getTranslation } from "../../util";
import { FormattedMessage } from "react-intl";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [visible, setVisible] = useState(false);
  const { restaurantId, lang, resTemplate } = useSelector(
    (state) => state.info
  );
  const history = useHistory();
  const dispatch = useDispatch();
  // query
  const { data, loading } = useQuery(FETCH_MENU_BY_RESTAURANT, {
    variables: {
      limit: 100,
      offset: 0,
      resId: restaurantId,
      lang,
    },
    fetchPolicy: "no-cache",
  });
  const menu = data?.FetchMenuByRestaurant?.result || [];

  // functions
  const onClose = () => setVisible(false);

  const redirectToMenuitemPage = (data) => {
    if (Array.isArray(data.items) && data.items.length > 0) {
      dispatch(
        addInfo({
          menuItems: data.items,
          menuName: getTranslation(data),
          isMenuItem: true,
        })
      );
      history.push("/menu/items");
    } else {
      dispatch(addInfo({ menuName: getTranslation(data) }));
      setSelectedMenu(data);
      setVisible(true);
    }
  };

  return (
    <Spin spinning={loading} >
      <div className="welcome text-center" style={{height:"100vh"}}>
        <Banner text={<FormattedMessage id="APP.BANNER.MENU"/>} />
        <Layout>
          {menu.map((item) => (
            <Button
              className="mb-2"
              key={item._id}
              onClick={() => redirectToMenuitemPage(item)}
              style={{
                background: "transparent",
                color: resTemplate?.general?.menuColor,
              }}
            >
              {getTranslation(item)}
            </Button>
          ))}
        </Layout>
        {/* Category modal */}
        <CategoryModal
          visible={visible}
          onClose={onClose}
          menu={selectedMenu}
          resTemplate={resTemplate}
        />
      </div>
    </Spin>
  );
};

export default Menu;