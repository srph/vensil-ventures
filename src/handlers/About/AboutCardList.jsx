import React from 'react';
import classnames from 'classnames';

import AboutCard from './AboutCard';

export default class AboutCardList extends React.Component {
  static propTypes = {
    /**
     * Set of events in this column
     */
    list: React.PropTypes.arrayOf(React.PropTypes.object),

    /**
     * Append `--half` modifier class to the element
     * (about__card-container--half)
     */
    half: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    let { list, half } = this.props;

    let className = classnames('about__card-container', {
      'about__card-container--half': half
    });

    return (
      <ul className={className}>
        {list.map((event, i) => <AboutCard data={event} key={i} />)}
      </ul>
    );
  }
}
