import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav" role="navigation">
        <ul className="nav__navbar">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
}
