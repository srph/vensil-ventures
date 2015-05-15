import React from 'react';

export default class SeeServicesButton extends React.Component {
  render() {
    return (
      <a className="home__service-btn" href="#" onClick={this._handleClick}>
        See Services
      </a>
    );
  }

  _handleClick() {
    // animate to somewhere
  }
}
