import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import reducer, { DEFAULT_STATE } from './actions/reducers/index';

const middlewares = [ thunk ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configStore() {
  const store = createStore(
    reducer,
    DEFAULT_STATE,
    composeEnhancers(
      applyMiddleware(
        ...middlewares
      )
    ),
  );
  return store;
}
