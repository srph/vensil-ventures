import React from 'react';
import ServiceItem from './ServiceItem';

export default class ServiceList extends React.Component {
  render() {
    return (
      <div className="services__list">
        <ServiceItem title={'Photo Booth'}>Make wonderful, memorable photos within a click!</ServiceItem>
        <ServiceItem title={'Photo Booth'}>Make wonderful, memorable photos within a click!</ServiceItem>
        <ServiceItem title={'Photo Booth'}>Make wonderful, memorable photos within a click!</ServiceItem>
      </div>
    );
  }
}
