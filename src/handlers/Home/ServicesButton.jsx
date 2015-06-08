import React from 'react';

export default class ServicesButton extends React.Component {
  render() {
    return (
      <a className="home__service-btn" href="#" onClick={this._handleClick}>
        Check Our Work
        <span className="home__service-btn__caret">
          <i className="fa fa-caret-right"></i>
        </span>
      </a>
    );
  }

  _handleClick() {
    // animate to somewhere
  }
}
