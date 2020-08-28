import { CHANGE_DISPLAY_VALUES } from '../index';

const display = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_DISPLAY_VALUES:
      return {
        ...state,
        ...action.display,
      };
    default:
      return state
  }
}

export default display;

export const getDisplayValues = state => state.display;
