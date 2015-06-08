import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__heading">
          <div className="about__heading__title">About Us</div>
        </div>

        <div className="about__container">
          <div className="about__container__inner">
            <ul className="about__card-container about__card-container">
              <li className="about__card about__card--main">
                <div className="about__card__heading about__card__heading--screen"> About Us </div>
                <div className="about__card__info">
                  Vensil's Ventures is a photo booth service based on Manila. Although, we also offer other services; &nbsp;
                  Interested? Then read on!
                </div>
              </li>

              <li className="about__card about__card--lighter">
                <div className="about__card__heading"> Photography </div>
                <div className="about__card__info">
                  Besides photo booths, we also offer high-grade photographs for school pictorials, toga pictures, and etc.
                </div>
              </li>
            </ul>

            <ul className="about__card-container about__card-container--half">
              <li className="about__card">
                <div className="about__card__heading"> Editing </div>
                <div className="about__card__info">
                  We also provide digital editing to improve any raw photos.
                </div>
              </li>

              <li className="about__card about__card--gray">
                <div className="about__card__heading"> Video </div>
                <div className="about__card__info">
                  Tangina di ko na alam sasabihin ko.
                </div>
              </li>
            </ul>

            <ul className="about__card-container about__card-container--full">
              <li className="about__card about__card--sub">
                <div className="about__card__heading"> Photo Booth </div>
                <div className="about__card__info">
                  This service is our forte.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
