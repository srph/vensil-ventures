/**
 * This file was named `CardColumnIota` instead of `CardColumnGamma`
 * (the correct sequence) because the word "Gamma" sucks.
 */
import React from 'react';

import set from './data';
import Card from './Card';
import CardMore from './CardMore';

export default class CardColumnIota extends React.Component {
  render() {
    return (
      <ul className="work__card-container work__card-container--half">
        {set.iota.map((event, i) => {
          return <Card data={event} key={i} />
        })}
        <CardMore />
      </ul>
    );
  }
}

