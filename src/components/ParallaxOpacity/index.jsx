import React from 'react';
import parallax from './parallax';

let PARALLAX_PROP = Symbol();

export default class ParallaxOpacity extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this[PARALLAX_PROP] = parallax(React.findDOMNode(this));
  }

  componentDidUnmount() {
    // Remove parallax evt listener
    this[PARALLAX_PROP]();
  }

  render() {
    return this.props.children;
  }
}
