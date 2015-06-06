import React from 'react';

export default class Info extends React.Component {
  render() {
    return (
      <div className="contact__info">
        <div className="contact__info__heading">Contact Us</div>
        <section className="contact__info__content">
          <div className="contact__info__content__heading">Office</div>
          <span className="contact__info__highlight">28 Cordillera Street, Galas, 1113, Quezon City, Metro Manila, Philippines</span>
        </section>

        <section className="contact__info__content">
          <div className="contact__info__content__heading">Email</div>
          <span className="contact__info__highlight">hello@vensils.com</span>
        </section>

        <section className="contact__info__content">
          <div className="contact__info__content__heading">Mobile</div>
          <span className="contact__info__highlight">09164417383</span>,{' '}
          <span className="contact__info__highlight">09164417383</span>,{' '}
          <span className="contact__info__highlight">09164417383</span>.
        </section>

        <a href="#" className="contact__info__email-btn">
          Send us an email!
        </a>
      </div>
    );
  }
}
