import { combineReducers } from 'redux';
import filter from './filter';

export const DEFAULT_STATE = {
  filter: 'Relevant',
};

export default combineReducers({ filter });
