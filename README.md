# vensils-ventures [![Build Status](https://travis-ci.org/srph/vensils-ventures.svg?branch=master)](https://travis-ci.org/srph/vensils-ventures?branch=master) [![Dependencies Status](https://david-dm.org/srph/vensils-ventures.svg)](https://david-dm.org/srph/vensils-ventures.svg) [![devDependency Status](https://david-dm.org/srph/vensils-ventures/dev-status.svg)](https://david-dm.org/cdnjs/cdnjs#info=devDependencies)

Website for Vensil's Ventures Photobooth, built with ReactJS.

## Contribution

Feel free to [submit an issue](https://github.com/srph/vensils-ventures/issues/) regarding any question, inquiry, or suggestion.

### Building

**Requirements**:
- Node.js
- npm

Simply clone the repository, and install the dependencies.

```bash
$ git clone https://github.com/srph/vensils-ventures && cd vensils-ventures
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

**vensils-ventures** © 2015+, Kier Borromeo (srph) and [Vensil's Ventures Photo Booth](https://www.facebook.com/vensilsventuresPHOTOBOOTH).

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
> Twitter [@spidermaen](https://twitter.com/spidermaen)

\ Thanks to **[ReactJS](https://facebook.github.io/react)**, **[Radium](https://github.com/FormidableLabs/radium)**, **[Babel](https://babeljs.io)**, and **[Webpack](https://webpack.github.io)**.
