import React from 'react';

export default class SeeServicesButton extends React.Component {
  render() {
    return (
      <a className="home__contact-btn" href="#contact" onClick={this._handleClick}>
        Contact Us
      </a>
    );
  }

  _handleClick() {
    // animate to somewhere
  }
}
