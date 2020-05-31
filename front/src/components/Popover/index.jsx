import React from 'react';
import PropTypes from 'prop-types';
import Overlay from 'react-bootstrap/Overlay';
import PopoverBst from 'react-bootstrap/Popover';
import { Icon } from '../IconAwesome';
import {
  BLACK_COLOR,
} from '../../config/colors';

export const Popover = ({
  show,
  target,
  placement,
  container,
  title,
  children,
  onClose,
  width,
}) => (
  <Overlay
    show={show}
    target={target}
    placement={placement}
    container={container}
  >
    <PopoverBst style={{ minWidth: width }}>
      <PopoverBst.Title as="h3" className="d-flex flex-row bd-highlight mb-3">
        {title}
        <Icon
          name="times-circle"
          onClick={onClose}
          color={BLACK_COLOR}
        />
      </PopoverBst.Title>
      <PopoverBst.Content>
        {children}
      </PopoverBst.Content>
    </PopoverBst>
  </Overlay>
);

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  placement: PropTypes.string,
  target: PropTypes.node.isRequired,
  container: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.string,
};


Popover.defaultProps = {
  placement: 'bottom',
  width: '200px',
};
