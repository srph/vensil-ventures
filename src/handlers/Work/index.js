import React from 'react';
import CardList from './CardList';
import set from './data';

export default class Work extends React.Component {
  render() {
    return (
      <div className="work">
        <div className="work__heading">
          <div className="work__heading__title">Work</div>
        </div>

        <div className="work__container">
          <div className="work__container__inner">
            {set.map((list, i) => (
              // Anything other than the 2nd column (there are 3 columns) is half.
              // Check `./data.json` for reference.
              <CardList list={list} key={i} half={i!==1} />
            ))}
          </div>
        </div>
        <div className="work__more-btn-container">
          <a href="//facebook.com/vensilsventuresPHOTOBOOTH/photos_stream?tab=photos_albums" className="work__more-btn">
            More of our work
          </a>
        </div>
      </div>
    );
  }
}
