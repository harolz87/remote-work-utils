/* eslint-disable object-curly-newline */
import React from 'react';
import PropsType from 'prop-types';
import Image from 'react-bootstrap/Image';
import { CardWrapper, CardFooter, ImageWrapper } from './styles';

export const UserCards = ({ name, title, schedule, disabled }) => (
  <CardWrapper>
    <div className="h-75 d-flex flex-column align-items-center justify-content-center">
      <ImageWrapper disabled={disabled}>
        <Image src="src/assets/images/user-icon.svg" rounded />
      </ImageWrapper>
      <h5>{name}</h5>
      <p>{title}</p>
    </div>
    <CardFooter disabled={disabled}>
      <div className="d-flex flex-column justify-content-center text-white px-3">
        <h5>Schedule</h5>
        <p className="p-0">{schedule}</p>
      </div>
      <div className="d-flex flex-column justify-content-center text-white">
        <h5>Apps</h5>
        <p>.</p>
      </div>
    </CardFooter>
  </CardWrapper>
);

UserCards.propTypes = {
  name: PropsType.string,
  title: PropsType.string,
  schedule: PropsType.string,
  disabled: PropsType.bool,
};

UserCards.defaultProps = {
  name: 'Name',
  title: 'Title',
  schedule: '12:00pm to 5:00pm',
  disabled: false,
};
