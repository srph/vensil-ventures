import React from 'react';
import Navigation from '../../components/Navigation';
import SeeServicesButton from './SeeServicesButton';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__outer">
          <div className="home__inner">
            <div className="home__container">
              <img src="" className="home__logo" />
              <h5> Vensils Ventures is a photobooth services on Metro Manila </h5>
              <SeeServicesButton />
            </div>
          </div>
        </div>

        <Navigation />
      </div>
    );
  }
}
