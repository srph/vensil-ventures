import React from 'react';
import ServiceList from './ServiceList';

export default class Services extends React.Component {
  render() {
    return (
      <div className="services">
        <div className="services__container">
          <div className="services__heading">
            Services
            <small>Check out what awesomeness we can contribute to your parties!</small>
          </div>

          <ServiceList />
        </div>
      </div>
    );
  }
}
