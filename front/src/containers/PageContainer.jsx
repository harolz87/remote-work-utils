import React from 'react';
import PropsType from 'prop-types';
import { useSelector } from 'react-redux';
import { WrapperPageContainer } from '../components/WrapperPageContainer';
import { Header } from './Header';
import { Footer } from '../components/Footer';

export const PageContainer = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.global.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <WrapperPageContainer>
        <div />
        {children}
        <div />
      </WrapperPageContainer>
    );
  }

  return (
    <WrapperPageContainer>
      <Header />
      {children}
      <Footer />
    </WrapperPageContainer>
  );
};

PageContainer.propTypes = {
  children: PropsType.node.isRequired,
};
