import { combineReducers } from 'redux';
import filter from './filter';
import queryInput from './queryInput';
import generalQuery from './generalQuery';

export const DEFAULT_STATE = {
  generalQuery: {
    pending: false,
    results: [
      {
        id: '124',
        title: 'Title1',
        maker: 'artist',
        imgUrl: "https://lh3.googleusercontent.com/7qzT0pbclLB7y3fdS1GxzMnV7m3gD3gWnhlquhFaJSn6gNOvMmTUAX3wVlTzhMXIs8kM9IH8AsjHNVTs8em3XQI6uMY=s0",
        imgHeight: 2562,
        imgWidth: 2034,
      },
      {
        id: '12442',
        title: 'Title2',
        maker: 'artist',
        imgHeight: 1200,
        imgWidth: 800,
      },
      {
        id: '13242',
        title: 'Title3',
        maker: 'artist',
        imgHeight: 1200,
        imgWidth: 800,
      },
      {
        id: '13542',
        title: 'Title',
        maker: 'artist',
        imgHeight: 1200,
        imgWidth: 800,
      },
      {
        id: '13244',
        title: 'Title',
        maker: 'artist',
        imgHeight: 1200,
        imgWidth: 800,
      },
      {
        id: '18242',
        title: 'Title',
        maker: 'artist',
        imgHeight: 1200,
        imgWidth: 800,
      }
    ]
  },
};

export default combineReducers({ filter, queryInput, generalQuery });
