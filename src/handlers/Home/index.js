import React from 'react';
import Navigation from '../../components/Navigation';
import ServicesButton from './ServicesButton';
import ContactButton from './ContactButton';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__outer">
          <div className="home__inner">
            <div className="home__container">
              <div className="home__heading"> Let's make awesome memories! </div>
              <ContactButton />
              <ServicesButton />
            </div>
          </div>
        </div>

        <Navigation />
      </div>
    );
  }
}
