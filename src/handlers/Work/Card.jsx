import React from 'react';

export default class Card extends React.Component {
  static propTypes = {
    /**
     * Thumbnail data
     */
    data: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let { title, date, thumbnail, set } = this.props.data;

    return (
      <li className="work__card">
        <img className="work__card__thumbnail" src={`/img/work-cards/${thumbnail}.jpg`} />
        <header className="work__card__info">
          <div className="work__card__info__heading">{title}</div>
          <div className="work__card__info__date">{date}</div>
          <a href={`//facebook.com/media/set/?set=${set}`} className="work__card__info__more-btn">More Photos</a>
        </header>
      </li>
    );
  }
}
