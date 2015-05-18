import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__copyright">Vensils Ventures 2015+.</div>

            <div className="footer__social-media">
              <a className="footer__social-media__icon footer__social-media__icon--fb" href="">
                <i className="fa fa-facebook" />
              </a>

              <a className="footer__social-media__icon footer__social-media__icon--tw" href="">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
