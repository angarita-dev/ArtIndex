import { CHANGE_QUERY_INPUT, DELETE_QUERY_INPUT } from '../index';

const queryInput = (state = '', action) => {
  switch (action.type) {
    case CHANGE_QUERY_INPUT:
      return action.input;
    case DELETE_QUERY_INPUT:
      return action.input
    default:
      return state;
  }
};

export default queryInput;
