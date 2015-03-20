# vensil-ventures [![Build Status](https://travis-ci.org/srph/vensil-ventures.svg?branch=master)](https://travis-ci.org/srph/vensil-ventures?branch=master) [![Dependencies Status](https://david-dm.org/srph/vensil-ventures.svg)](https://david-dm.org/srph/vensil-ventures.svg) [![devDependency Status](https://david-dm.org/srph/vensil-ventures/dev-status.svg)](https://david-dm.org/cdnjs/cdnjs#info=devDependencies)

Website for Vensil Ventures, built with ReactJS.

## Contribution

Feel free to [submit an issue](https://github.com/srph/vensil-ventures/issues/) regarding any question, inquiry, or suggestion.

### Building

**Requirements**:
- Node.js
- npm

Simply clone the repository, and install the dependencies.

```bash
$ git clone https://github.com/srph/vensil-ventures && cd vensil-ventures
$ npm install
```

### Automation

Ensure that you are in the project root directory.

```bash
$ npm test # run the tests
$ npm run build # build the scripts
$ npm run watch # watch for file changes (builds each time)
$ npm run prod # build the scripts for production (minification)
# starts a built-in web server (serving on http://0.0.0.0:8080)
# to customize options (port used, etc), check `indexzero/http-server`
# https://github.com/indexzero/http-server. feel free to use your own.
$ npm run serve
$ npm run start # for development. runs `watch` and `serve`
```

## Acknowledgement

**vensil-ventures** © 2015+, Kier Borromeo (srph) and [Vensil Ventures Photo Booth](https://www.facebook.com/vensilsventuresPHOTOBOOTH).

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)

\ Thanks to **[ReactJS](https://facebook.github.io/react)**, **[Radium](https://github.com/FormidableLabs/radium)**, **[Babel](https://babeljs.io)**, and **[Webpack](https://webpack.github.io)**.