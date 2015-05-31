import React from 'react';
import AboutCardList from './AboutCardList';
import set from './data';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__container">
          <div className="about__container__inner">
            {set.map((list, i) => (
              // Anything other than the 2nd column (there are 3 columns) is half.
              // Check `./data.json` for reference.
              <AboutCardList list={list} key={i} half={i!==1} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
