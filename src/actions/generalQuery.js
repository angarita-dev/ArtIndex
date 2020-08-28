import axios from 'axios';
import {
  generalQuerySuccess,
  generalQueryPending,
  generalQueryError,
} from './index';

const generalQuery = () => {
  return (dispatch, getState) => {
    const { queryInput, filter } = getState();
    const key = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;

    dispatch(generalQueryPending());
    axios.get(baseUrl, {
      params: {
        key,
        q: queryInput,
        s: filter
      }
     })
      .then(res => {
        dispatch(generalQuerySuccess(res.data));
      })
      .catch(error => {
        dispatch(generalQueryError(error));
      })
  }
}

export default generalQuery;
