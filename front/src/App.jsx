import React, { Suspense } from 'react';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './styles/GlobalStyles';

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <GlobalStyles />
    <Routes />
  </Suspense>
);
