import React from 'react';

import set from './data';
import Card from './Card';
import CardTitle from './CardTitle';

export default class CardColumnBeta extends React.Component {
  render() {
    return (
      <ul className="work__card-container">
        <CardTitle />
        {set.beta.map((event, i) => {
          return <Card data={event} key={i} />
        })}
      </ul>
    );
  }
}
