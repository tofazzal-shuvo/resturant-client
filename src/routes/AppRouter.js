/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, useHistory, useLocation, Redirect } from 'react-router-dom';

// Index Routes
import { Public } from './Router';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageContext, NavbarContext, NavbarProvider } from '../context';
import { Select } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_RESTAURANT } from '../graphql/modules';
import { addInfo } from '../store/modules';
import { Welcome } from '../pages';

// Components
export const history = createBrowserHistory();

const AppRouter = () => {
  const info = useSelector((state) => state?.info);

  const { tableId: tabId, restaurantId: resId } = info;

  const query = new URLSearchParams(history?.location?.search);
  const restaurantId = query.get('restaurant') || resId; // || "60e9e589304bea001a6a3a95";
  const tableId = query.get('table') || tabId; // || "60e9e734304bea001a6a3a99";
  console.log(query);
  if (!restaurantId || !tableId) return <Welcome history={history} />;
  else {
    return (
      <Router history={history}>
        <NavbarProvider>
          <CustomRouter restaurantId={restaurantId} tableId={tableId} />
        </NavbarProvider>
      </Router>
    );
  }
};

export default AppRouter;

const CustomRouter = ({ restaurantId, tableId }) => {
  const { locale, onChangeLang } = useContext(LanguageContext);
  const info = useSelector((state) => state?.info);

  const background = info?.resTemplate?.general?.background;

  const dispatch = useDispatch();
  const { data } = useQuery(FETCH_RESTAURANT, {
    variables: {
      restaurantId,
    },
  });
  const restaurant = data?.FetchRestaurant?.restaurant || {};

  useEffect(() => {
    if (Object.keys(restaurant).length !== 0) {
      const { template, ...resInfo } = restaurant;
      dispatch(addInfo({ tableId, restaurantId, resTemplate: template, resInfo }));
    }
  }, [restaurant]);

  useEffect(() => {
    document.body.style.backgroundColor = background;
  });

  const { showOrderBtn } = useContext(NavbarContext);

  return (
    <div
      style={{
        paddingBottom: showOrderBtn ? '140px' : '91px',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'auto',
      }}
      id="container"
    >
      <div className="language-selector">
        <Select onChange={onChangeLang} value={locale}>
          <Select.Option value="en">English</Select.Option>
          <Select.Option value="bn">Bangali</Select.Option>
        </Select>
        <i
          className="fa fa-language"
          aria-hidden="true"
          style={{
            background: '#fff',
            padding: '6.5px 4px',
            fontSize: '18px',
            borderRadius: '50%',
            marginLeft: '5px',
          }}
        ></i>
      </div>
      <Switch>
        {Public.map((R, k) => {
          return <Route key={k} {...R} />;
        })}
      </Switch>
    </div>
  );
};
