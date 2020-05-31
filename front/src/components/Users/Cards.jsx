import React from 'react';
import PropsType from 'prop-types';
import Image from 'react-bootstrap/Image';
import { CardWrapper, CardFooter, ImageWrapper, Paragraph, ParagraphTitle, AppsCircles } from './styles';

export const UserCards = ({ name, title, schedule, disabled, apps, index }) => (
  <CardWrapper>
    <div className="h-75 d-flex flex-column align-items-center justify-content-center">
      <ImageWrapper disabled={disabled}>
        <Image src={`src/assets/images/user-pics/${index > 10 ? index - 10 : index}.jpg`} width="92px" />
      </ImageWrapper>
      <ParagraphTitle>{name}</ParagraphTitle>
      <p>{title}</p>
    </div>
    <CardFooter disabled={disabled}>
      <div className="d-flex flex-column justify-content-center text-white px-3">
        <Paragraph>Schedule</Paragraph>
        <p className="p-0">{schedule}</p>
      </div>
      <div className="d-flex flex-column justify-content-center text-white">
        <Paragraph>Apps</Paragraph>
        <div className=" d-flex  justify-content-between">
          <AppsCircles disabled={disabled || apps.includes('trello')}>
            <Image src="src/assets/images/trello.png" width="22px" />
          </AppsCircles>
          <AppsCircles disabled={disabled || apps.includes('slack')}>
            <Image src="src/assets/images/slack.png" width="22px" />
          </AppsCircles>
          <AppsCircles disabled={disabled || apps.includes('github')}>
            <Image src="src/assets/images/github.png" width="22px" />
          </AppsCircles>
          <AppsCircles disabled={disabled || apps.includes('zoom')}>
            <Image src="src/assets/images/zoom.png" width="22px" />
          </AppsCircles>

        </div>
      </div>
    </CardFooter>
  </CardWrapper>
);

UserCards.propTypes = {
  name: PropsType.string,
  title: PropsType.string,
  schedule: PropsType.string,
  disabled: PropsType.bool,
  apps: PropsType.arrayOf(PropsType.string),
  index: PropsType.number,
};

UserCards.defaultProps = {
  name: 'Name',
  title: 'Title',
  schedule: '12:00pm to 5:00pm',
  disabled: false,
  apps: [],
  index: 0,
};
