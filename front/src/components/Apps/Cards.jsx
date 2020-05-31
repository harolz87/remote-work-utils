import React from 'react';
import PropsType from 'prop-types';
import Image from 'react-bootstrap/Image';
import { CardWrapper, CardFooter, ImageWrapper } from './styles';
import { DropdownSplit } from '../Dropdown';

export const AppsCard = ({ name, appKey, text, options }) => (
  <CardWrapper>
    <div className="h-75 d-flex flex-column align-items-center justify-content-center">
      <ImageWrapper>
        <Image src={`src/assets/images/${appKey}.png`} rounded width="92px" />
      </ImageWrapper>
      <h4>{name}</h4>
    </div>
    <CardFooter>
      <div className="w-100 d-flex flex-column justify-content-center text-white px-3">
        <DropdownSplit title={text} options={options} />
      </div>
    </CardFooter>
  </CardWrapper>
);

AppsCard.propTypes = {
  name: PropsType.string,
  appKey: PropsType.string,
  text: PropsType.string,
  options: PropsType.arrayOf(PropsType.string),
};

AppsCard.defaultProps = {
  name: 'Name',
  appKey: '',
  text: '',
  options: [],
};
