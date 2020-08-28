import { GENERAL_QUERY_PENDING, GENERAL_QUERY_SUCCESS, GENERAL_QUERY_ERROR } from '../index';

const generalQuery = (state = {}, action) => {
  switch(action.type) {
    case GENERAL_QUERY_PENDING:
      return {
        ...state,
        pending: true,
      }
    case GENERAL_QUERY_SUCCESS:
      return {
        ...state,
        pending: false,
        results: action.generalQueryResults,
      }
    case GENERAL_QUERY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export const getGeneralQueryResult = state => state.generalQuery.results;
export const getGeneralQueryPending = state => state.generalQuery.pending;
export const getGeneralQueryError = state => state.generalQuery.error;

export default generalQuery;
