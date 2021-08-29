import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { apollo } from '../graphql';
import { store } from '../store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import '../styles/index.scss';
import AppRouter from '../routes';
import { LanguageProvider } from '../context';

import packageJson from '../../package.json';

const APP_VERSION = packageJson.version;

console.log(APP_VERSION, process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  if (
    typeof localStorage.APP_VERSION === 'undefined' ||
    localStorage.APP_VERSION === null
  ) {
    localStorage.setItem('APP_VERSION', APP_VERSION);
  }
  if (localStorage.APP_VERSION !== APP_VERSION) {
    localStorage.clear();
    localStorage.setItem('APP_VERSION', APP_VERSION);
  }
}

const CustomApp = () => {
  return (
    <ApolloProvider client={apollo}>
      <Provider store={store}>
        <LanguageProvider>
          <AppRouter />
        </LanguageProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default CustomApp;
