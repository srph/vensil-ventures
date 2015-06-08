import React from 'react';

import set from './data';
import Card from './Card';

export default class CardColumnAlpha extends React.Component {
  render() {
    return (
      <ul className="work__card-container work__card-container--half">
        {set.alpha.map((event, i) => {
          return <Card data={event} key={i} />
        })}
      </ul>
    );
  }
}
