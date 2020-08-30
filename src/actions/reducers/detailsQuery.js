import { DETAILS_QUERY_PENDING, DETAILS_QUERY_SUCCESS, DETAILS_QUERY_ERROR } from '../index';

const detailsQuery = (state = {}, action) => {
  switch(action.type) {
    case DETAILS_QUERY_PENDING:
      return {
        ...state,
        pending: true,
      }
    case DETAILS_QUERY_SUCCESS:
      return {
        ...state,
        pending: false,
        result: action.detailsQueryResults,
      }
    case DETAILS_QUERY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export const getDetailslQueryResult = state => state.detailsQuery.result;
export const getDetailslQueryPending = state => state.detailsQuery.pending;
export const getDetailslQueryError = state => state.detailsQuery.error;

export default detailsQuery;
