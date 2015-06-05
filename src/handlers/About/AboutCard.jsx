import React from 'react';

export default class AboutCard extends React.Component {
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
      <li className="about__card">
        <img className="about__card__thumbnail" src={`/img/about/${thumbnail}.jpg`} />
        <header className="about__card__info">
          <div className="about__card__info__heading">{title}</div>
          <div className="about__card__info__date">{date}</div>
          <a href={`//facebook.com/media/set/?set=${set}`} className="about__card__info__more-btn">More Photos</a>
        </header>
      </li>
    );
  }
}
