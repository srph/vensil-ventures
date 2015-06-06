import React from 'react';
import config from '../../config';

export default class Info extends React.Component {
  render() {

    return (
      <div className="contact__info">
        <div className="contact__info__heading">
          <div className="contact__info__heading__title">Contact Us</div>
          <div className="contact__info__heading__sub">Want us to be part of your next event?</div>
        </div>

        <section className="contact__info__content">
          <div className="contact__info__content__heading">Office</div>
          <a href="https://goo.gl/maps/IhHLG" className="contact__info__highlight">
            {config.address}
          </a>
        </section>

        <section className="contact__info__content">
          <div className="contact__info__content__heading">Email</div>
          <a href={`emailto:${config.email}`} className="contact__info__highlight">{config.email}</a>

          <div className="contact__info__email-btn-container">
            <a href={`emailto:${config.email}`} className="contact__info__email-btn"> Send us an email! </a>
          </div>
        </section>

        <section className="contact__info__content">
          <div className="contact__info__content__heading">Phone</div>
          <span className="contact__info__highlight">{config.phone}</span>
        </section>
      </div>
    );
  }
}
