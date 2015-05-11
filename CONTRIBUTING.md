# Contribution

## Coding Style

We use [EditorConfig](editorconfig.org) for basics and encourage you to install its plugin on your text editor of choice. This will get you 25% of the way there.

### CSS

- Keep variables at the **base** level and simple.
- We will follow [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

### JS

Just following the current style (check the files), and you'll be fine. Note that we are writing in ES6. We loosely follow the [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript/tree/es6) with a few notable exceptions.

In summary,

- Use semicolons;
- Commas last,
- 2 spaces for indentation (no tabs)
- Prefer `'` over `"`
- 80 character line length
- "Attractive"
- Do not use the optional parameters of setTimeout and setInterval

### Building
You are required to install **npm** and **node.js** to deploy locally. Simply clone the repository, and install the dependencies, and you should be good to go!
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
```
