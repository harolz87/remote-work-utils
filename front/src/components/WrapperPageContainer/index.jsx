import React from 'react';
import PropsType from 'prop-types';
import { Wrapper } from './styles';

export const WrapperPageContainer = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

WrapperPageContainer.propTypes = {
  children: PropsType.node.isRequired,
};
