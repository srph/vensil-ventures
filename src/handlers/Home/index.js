import React from 'react';
import ServicesButton from './ServicesButton';
import ContactButton from './ContactButton';

import Navigation from '../../components/Navigation';
import ParallaxOpacity from '../../components/ParallaxOpacity';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="home__outer">
          <div className="home__inner">
            <ParallaxOpacity>
              <div className="home__container">
                <div className="home__heading"> Let's make awesome memories! </div>
                <ContactButton />
                <ServicesButton />
              </div>
            </ParallaxOpacity>
          </div>
        </div>

        <Navigation />
      </div>
    );
  }
}
