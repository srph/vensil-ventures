require('babel/polyfill');
import React from 'react';
import Home from './handlers/Home';
import About from './handlers/About';
import Work from './handlers/Work';
import Contact from './handlers/Contact';

import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

React.render(<App />, document.body);
