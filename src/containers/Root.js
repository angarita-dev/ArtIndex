import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Styling
import '../style/main.scss';

// Components
import App from './App';

function Root({ store }) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;
