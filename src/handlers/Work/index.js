import React from 'react';
import CardColumnAlpha from './CardColumnAlpha';
import CardColumnBeta from './CardColumnBeta';
import CardColumnIota from './CardColumnIota';

export default class Work extends React.Component {
  render() {
    return (
      <div className="work">
        <div className="work__heading">
          <div className="work__heading__title">Work</div>
        </div>

        <div className="work__container">
          <div className="work__container__inner">
            <CardColumnAlpha />
            <CardColumnBeta />
            <CardColumnIota />
          </div>
        </div>
      </div>
    );
  }
}
