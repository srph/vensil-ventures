import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__container">
          <div className="about__container__inner">
            <ul className="about__card-container about__card-container--full">
              <li className="about__card"></li>
            </ul>

            <ul className="about__card-container about__card-container--half">
              <li className="about__card"></li>
              <li className="about__card"></li>
            </ul>

            <ul className="about__card-container about__card-container">
              <li className="about__card"></li>
              <li className="about__card"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
