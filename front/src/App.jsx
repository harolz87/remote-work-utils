import React, { Suspense } from 'react';
import { Routes } from './routes';

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes />
  </Suspense>
);
