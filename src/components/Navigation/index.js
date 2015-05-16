import React from 'react';
import bean from 'bean';
import classnames from 'classnames';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    bean.on(window, 'scroll', this._handleScroll.bind(this));
  }

  componentWillUnmount() {
   bean.on(window, 'scroll', this._handleScroll.bind(this));
  }

  render() {
    let classname = classnames('nav', { 'nav--sticky': this.state.fixed });

    return (
      <nav className={classname} role="navigation">
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

  _handleScroll() {
    // Set navbar to fixed if it has exceeded .home
    this.setState({ fixed: window.scrollY >= window.innerHeight });
  }
}
