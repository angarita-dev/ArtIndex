import axios from 'axios';
import {
  detailsQuerySuccess,
  detailsQueryPending,
  detailsQueryError,
} from './index';

const detailsQuery = () => {
  const axiosInstance = axios.create({
    headers: { 'Access-Control-Allow-Origin': '' }
  });
  return (dispatch, getState) => {
    const { display } = getState();
    const { id } = display;
    const key = process.env.REACT_APP_API_KEY;
    const baseUrl = `${process.env.REACT_APP_BASE_URL}/${id}`;

    console.log(baseUrl);
    dispatch(detailsQueryPending());
    axiosInstance.get(baseUrl, { key })
      .then(res => {
        dispatch(detailsQuerySuccess(res.data));
      })
      .catch(error => {
        dispatch(detailsQueryError(error));
      })
  }
}

export default detailsQuery;
