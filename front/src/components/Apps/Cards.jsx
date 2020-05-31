import React, { useRef, useState } from 'react';
import PropsType from 'prop-types';
import Image from 'react-bootstrap/Image';
import { CardWrapper, CardFooter, ImageWrapper } from './styles';
import { DropdownSplit } from '../Dropdown';
import { Popover } from '../Popover';
import graphic from '../../assets/images/graphic.png';


export const AppsCard = ({ name, appKey, text, options }) => {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const [showChart, setShowChart] = useState(false);
  return (
    <CardWrapper ref={containerRef}>
      <div className="h-75 d-flex flex-column align-items-center justify-content-center" ref={targetRef} onClick={() => setShowChart(true)}>
        <ImageWrapper>
          <Image src={`src/assets/images/${appKey}.png`} rounded width="92px" />
        </ImageWrapper>
        <h4>{name}</h4>
      </div>

      <Popover
        show={showChart}
        title={name}
        target={targetRef.current}
        container={containerRef.current}
        placement="right-start"
        onClose={() => {
          setShowChart(false);
        }}
        width="500px"
      >
        <Image src={graphic} width="500px" />

      </Popover>
      <CardFooter>
        <div className="w-100 d-flex flex-column justify-content-center text-white px-3">
          <DropdownSplit title={text} options={options} />
        </div>
      </CardFooter>
    </CardWrapper>
  );
};

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
