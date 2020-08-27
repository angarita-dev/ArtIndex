import { CHANGE_FILTER } from '../index';

const filter = (state = 'Relevant', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
