import React from 'react';
import bean from 'bean';
import classnames from 'classnames';
import cloneWithProps from 'react/lib/cloneWithProps';

const ESC_KEY = 27;
const TRIGGER_REF = Symbol();

// Dropdown specific for our case.
// Unfortunately, our `render` function returns the `li`
// because React doesn't support returning of multiple components.
// http://stackoverflow.com/q/22287957/2698227
export default class Dropdown extends React.Component {
  static propTypes = {
    /**
     * The element used to trigger the open state
     */
    trigger: React.PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  // Register click and keydown event listeners
  componentDidMount() {
    bean.on(window, 'click', this._handleClick.bind(this));
    bean.on(window, 'keydown', this._handleEsc.bind(this));
  }

  // Unregister all event listeners
  componentWillUnmount() {
    bean.off(window, 'click', this._handleClick);
    bean.off(window, 'keydown', this._handleEsc);
  }

  render() {
    let { open } = this.state;
    let { trigger, children } = this.props;
    let className = classnames({ 'c-dropdown__menu--open': open });

    return (
      <li className="c-dropdown nav__navbar__item--no-border">
        {cloneWithProps(trigger, { ref: TRIGGER_REF })}
        {cloneWithProps(children, { className: className })}
      </li>
    );
  }

  _handleEsc(evt) {
    if ( this.state.open && evt.keyCode === ESC_KEY ) {
      this.setState({ open: false });
    }
  }

  _handleClick(evt) {
    let { open } = this.state;
    let triggerNode = React.findDOMNode(this.refs[TRIGGER_REF]);

    if ( open && evt.target !== triggerNode ) {
      this.setState({ open: false });
    } else if ( evt.target === triggerNode ) {
      evt.stop();
      this.setState({ open: !open });
    }
  }
}
