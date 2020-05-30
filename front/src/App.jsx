import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './styles/GlobalStyles';
import reducers from './reducers';
import getStore from './store/getStore';


const { store } = getStore({ reducers });

export default () => (
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyles />
      <Routes />
    </Suspense>
  </Provider>
);
