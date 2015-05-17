import React from 'react';
import ServiceList from './ServiceList';

export default class Services extends React.Component {
  render() {
    return (
      <div className="services">
        <div className="services__container">
          <div className="services__heading">
            <div className="services__heading__title">Services</div>
            <div className="services__heading__description">Check out what awesomeness we can contribute to your parties!</div>
          </div>

          <ServiceList />
        </div>
      </div>
    );
  }
}
