import React from 'react';

/**
 * Used in CardColumnBeta
 */
export default class CardTitle extends React.Component {
  render() {
    return (
      <li className="work__card-normal work__card-normal--screen">
        <div className="work__card-normal__heading">Work</div>
        <div className="work__card-normal__sub">Photos from our recent clients</div>
      </li>
    );
  }
}
