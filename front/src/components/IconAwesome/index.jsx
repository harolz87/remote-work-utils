import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUser,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import {
  WHITE_COLOR,
} from '../../config/colors';
import {
  Wrapper,
} from './styles';

library.add(faEnvelope);
library.add(faUser);
library.add(faKey);

export const Icon = ({
  name,
  size,
  onClick,
  color,
}) => (
  <Wrapper>
    <FontAwesomeIcon
      icon={name}
      size={size}
      onClick={onClick}
      color={color}
      style={{
        cursor: onClick !== null ? 'pointer' : 'default',
      }}
    />
  </Wrapper>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};


Icon.defaultProps = {
  size: 'xs',
  onClick: null,
  color: WHITE_COLOR,
};
