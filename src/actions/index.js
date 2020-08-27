// Action types
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_QUERY_INPUT = 'CHANGE_QUERY_INPUT';
export const DELETE_QUERY_INPUT = 'DELETE_QUERY_INPUT';

// Actions
export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export const changeQueryInput = input => ({
  type: CHANGE_QUERY_INPUT,
  input,
});

export const deleteQueryInput = () => ({
  type: DELETE_QUERY_INPUT,
  input: '',
});
