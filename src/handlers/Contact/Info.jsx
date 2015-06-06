import React from 'react';

export default class Info extends React.Component {
  render() {
    return (
      <div className="contact__info">
        <div className="contact__info__heading">Contact Us</div>

        <div className="contact__info__content">
          <p>
            Our office is located at <span className="contact__info__highlight">28 Cordillera Street, Galas, 1113, Quezon City</span>.
            Feel free to drop by our email to say hello, <span className="contact__info__highlight">hello@vensils.com</span>.
          </p>

          <p>
            If you prefer, you can also contact us through phone with any of the following numbers:{' '}
            <span className="contact__info__highlight">09164417383</span>,{' '}
            <span className="contact__info__highlight">09164417383</span>,{' '}
            <span className="contact__info__highlight">09164417383</span>.
          </p>
        </div>
      </div>
    );
  }
}
