require('babel/polyfill');
import React from 'react';
import Home from './handlers/Home';
import About from './handlers/About';
import Gallery from './handlers/Gallery';
import Services from './handlers/Services';
import Contact from './handlers/Contact';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </div>
    );
  }
}

React.render(<App />, document.body);
