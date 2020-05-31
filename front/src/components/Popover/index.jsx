import React from 'react';
import PropTypes from 'prop-types';
import Overlay from 'react-bootstrap/Overlay';
import PopoverBst from 'react-bootstrap/Popover';
import { Icon } from '../IconAwesome';
import {
  WHITE_COLOR,
} from '../../config/colors';

export const Popover = ({
  show,
  target,
  placement,
  container,
  title,
  children,
  onClose,
}) => (
  <Overlay
    show={show}
    target={target}
    placement={placement}
    container={container}
  >
    <PopoverBst>
      <PopoverBst.Title as="h3" className="d-flex align-items-center justify-content-between bd-highlight bg-primary text-white">
        {title}
        <Icon
          name="times-circle"
          onClick={onClose}
          color={WHITE_COLOR}
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
};


Popover.defaultProps = {
  placement: 'bottom',
};
