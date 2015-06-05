import React from 'react';

export default class AboutCard extends React.Component {
  static propTypes = { data: React.PropTypes.object };

  constructor(props) {
    super(props);
  }

  render() {
    let { title, date, thumbnail } = this.props.data;

    return (
      <li className="about__card">
        <img className="about__card__thumbnail" src={`/img/about/${thumbnail}.jpg`} />
        <header className="about__card__info">
          <div className="about__card__info__heading">{title}</div>
          <div className="about__card__info__date">{date}</div>
          <a href="#" className="about__card__info__more-btn">More Photos</a>
        </header>
      </li>
    );
  }
}
