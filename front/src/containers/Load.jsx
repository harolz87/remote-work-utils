import React from 'react';
import { useSelector } from 'react-redux';
import { Load as Loadmp } from '../components/Load';

export const Load = () => {
  const show = useSelector((state) => state.load.show);
  return (
    <Loadmp show={show} />
  );
};
