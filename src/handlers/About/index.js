import React from 'react';
import AboutCard from './AboutCard';
import events from './data';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__container">
          <div className="about__container__inner">
            {events.map((event, i) => <AboutCard data={event} key={i} />)}
          </div>
        </div>
      </div>
    );
  }
}
