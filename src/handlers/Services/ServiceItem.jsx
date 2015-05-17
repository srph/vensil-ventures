import React from 'react';

export default class ServiceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, children } = this.props;

    return (
      <article className="services__item">
        <div className="services__item__outer">
          <div className="services__item__inner">
            <div className="services__item__heading">{title}</div>
            <div className="services__item__description">{children}</div>
          </div>
        </div>
      </article>
    );
  }
}

// I really don't like how I can't use ES7 Property Initializers yet, but oh well...
ServiceItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
};
