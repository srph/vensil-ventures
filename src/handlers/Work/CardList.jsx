import React from 'react';
import classnames from 'classnames';

import Card from './Card';

export default class CardList extends React.Component {
  static propTypes = {
    /**
     * Set of events in this column
     */
    list: React.PropTypes.arrayOf(React.PropTypes.object),

    /**
     * Append `--half` modifier class to the element
     * (work__card-container--half)
     */
    half: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    let { list, half } = this.props;

    let className = classnames('work__card-container', {
      'work__card-container--half': half
    });

    return (
      <ul className={className}>
        {list.map((event, i) => <Card data={event} key={i} />)}
      </ul>
    );
  }
}
