# ArtIndex

Web application using the Rijksmuseum rich and [freely accessible content.](https://www.rijksmuseum.nl/en/data/policy)

### Requirements

Here is a list of requirements for the project to work:

* [npm](https://www.npmjs.com/) is required to install packages and dependencies.
* Internet connection to fetch the data from Rijksmuseum rich and [freely accessible content.](https://www.rijksmuseum.nl/en/data/policy)

The Rijksmuseum's API requires an `API_KEY` this is setted up locally using a `.env` file, please, do not commit this file, if you want to run the app locally you can read more about how to connect to the Rijksmuseum API and how it works [here.](https://data.rijksmuseum.nl/object-metadata/api/)

### Available Commands

In the project directory, you can run:

| Command | Definition |
|---------|------------|
| `npm start` | Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm run lint` | Runs [ESlinter]() and [Stylelint]() |
| `npm run lint-fix` | Runs [ESLint](https://eslint.org/) and [stylelint](https://stylelint.io/) with `--fix` flag |

### Technologies used

* [React](https://en.reactjs.org/)
* [Redux](https://redux.js.org/)
* Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

### How to contribute

#### Features

Please open a pull request to the `dev` branch, with an explanation of the added features. For the code to be merged all tests must pass.

#### Hot-fixes

Please open a pull request to the needed branch, with an explanation of the fixed issues. For the code to be merged all tests must pass.
