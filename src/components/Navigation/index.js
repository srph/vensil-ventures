import React from 'react';
import bean from 'bean';
import classnames from 'classnames';

// Allowance to `fix` the navbar
// 50 == navbar height. check the css file in the same directory.
const ALLOWANCE = 50;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    bean.on(window, 'scroll', this._handleScroll.bind(this));
    // Recalculate when a resize occurs.
    bean.on(window, 'resize', this._handleScroll.bind(this));
  }

  componentWillUnmount() {
    bean.off(window, 'scroll', this._handleScroll.bind(this));
    bean.off(window, 'resize', this._handleScroll.bind(this));
  }

  render() {
    let { fixed } = this.state;

    let classname = classnames('nav', {
      'nav--sticky': fixed,
      'nav--static-bottom': !fixed
    });

    let menu = classnames(
      'c-dropdown__menu',
      'c-dropdown__menu--right',
      { 'c-dropdown__menu--dropup': !fixed }
    );

    return (
      <nav className={classname} role="navigation">
        <div className="nav__container">
          <div className="nav__heading">
            <a href="#">Vensil's Ventures</a>
          </div>
          <ul className="nav__navbar nav__navbar--screen">
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

          <ul className="nav__navbar nav__navbar--screen nav__navbar--right">
            <li>
              <a href="#">
                <i className="fa fa-thumbs-o-up" /> Like Us On Facebook
              </a>
            </li>
          </ul>

          <ul className="nav__navbar nav__navbar--mobile nav__navbar--right">
            <li className="c-dropdown nav__navbar__item--no-border">
              <a href="#">More</a>
              <ul className={menu}>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  _handleScroll() {
    // Set navbar to fixed if it has exceeded .home
    this.setState({ fixed: window.scrollY + ALLOWANCE >= window.innerHeight });
  }
}
