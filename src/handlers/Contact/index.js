import React from 'react';

import Map from './Map';
import Info from './Info';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact__row">
          <Map />
          <Info />
        </div>
      </div>
    );
  }
}
