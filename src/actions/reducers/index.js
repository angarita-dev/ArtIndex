import { combineReducers } from 'redux';
import filter from './filter';
import queryInput from './queryInput';

export const DEFAULT_STATE = {};

export default combineReducers({ filter, queryInput });
