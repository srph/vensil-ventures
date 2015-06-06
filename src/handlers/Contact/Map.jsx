import React from 'react';

export default class Map extends React.Component {
  render() {
    return (
      <div className="contact__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6212861279337!2d121.007388!3d14.620637000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b616f6b7ef33%3A0x4f0a71e17f39e7fe!2sVensils+Ventures!5e0!3m2!1sen!2sph!4v1433589967110"
          className="contact__map__element" frameBorder="0">
        </iframe>
      </div>
    );
  }
}
