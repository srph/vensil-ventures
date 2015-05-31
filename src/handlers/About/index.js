import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__container">
          <div className="about__container__inner">
            <div className="about__card">
              <header className="about__card__info">
                <div className="about__card__info__heading">Kier's 18th Birthday</div>
                <div className="about__card__info__date">May 18, 2015</div>
              </header>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
