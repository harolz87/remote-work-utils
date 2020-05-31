import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './styles/GlobalStyles';
import reducers from './reducers';
import getStore from './store/getStore';
import { Alert } from './containers/Alert';
import { Load } from './containers/Load';


const { store, persistor } = getStore({ reducers });

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyles />
        <Routes />
        <Alert />
        <Load />
      </Suspense>
    </PersistGate>

  </Provider>
);
