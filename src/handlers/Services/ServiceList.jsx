import React from 'react';
import ServiceItem from './ServiceItem';
import data from './data';

export default class ServiceList extends React.Component {
  render() {
    return (
      <div className="services__list">
        {data.map((service, index) => {
          return <ServiceItem
            key={index}
            title={service.title}
            thumbnail={service.thumbnail}>
              {service.description}
          </ServiceItem>
        })}
      </div>
    );
  }
}
