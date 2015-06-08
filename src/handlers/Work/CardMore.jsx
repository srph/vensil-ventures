import React from 'react';

/**
 * Used in CardColumnBeta
 */
export default class CardMore extends React.Component {
  render() {
    return (
      <li className="work__card-normal work__card-normal--mobile">
        <div className="work__card-normal__more-btn-container">
          <div className="work__card-normal__more-btn-container__inner">
            <a href="//facebook.com/vensilsventuresPHOTOBOOTH/photos_stream?tab=photos_albums" className="work__card-normal__more-btn">
              More Photos
            </a>
          </div>
        </div>
      </li>
    );
  }
}
