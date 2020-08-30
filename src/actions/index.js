// ----- Action types -----
// Filter
export const CHANGE_FILTER = 'CHANGE_FILTER';

// Query Input
export const CHANGE_QUERY_INPUT = 'CHANGE_QUERY_INPUT';
export const DELETE_QUERY_INPUT = 'DELETE_QUERY_INPUT';

// General query
export const GENERAL_QUERY_PENDING = 'GENERAL_QUERY_PENDING';
export const GENERAL_QUERY_SUCCESS = 'GENERAL_QUERY_SUCCESS';
export const GENERAL_QUERY_ERROR = 'GENERAL_QUERY_ERROR';

// Display
export const CHANGE_DISPLAY_VALUES = 'CHANGE_DISPLAY_VALUES';

// Details query
export const DETAILS_QUERY_PENDING = 'DETAILS_QUERY_PENDING';
export const DETAILS_QUERY_SUCCESS = 'DETAILS_QUERY_SUCCESS';
export const DETAILS_QUERY_ERROR = 'DETAILS_QUERY_ERROR';

// ----- Actions -----
// filter
export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

// Query Input
export const changeQueryInput = input => ({
  type: CHANGE_QUERY_INPUT,
  input,
});

export const deleteQueryInput = () => ({
  type: DELETE_QUERY_INPUT,
  input: '',
});

// General Query
export const generalQueryPending = () => ({
  type: GENERAL_QUERY_PENDING,
});

export const generalQuerySuccess = results => {
  const imgUrl = (result) => {
    return result.hasImage && result.showImage && result.permitDownload ?
      result.webImage.url :
      '';
  };

  const id = (result) => result.id.replace('en-','');

  const parsedData = results.artObjects.map(result => {
    return {
      id: id(result),
      title: result.title,
      maker: result.principalOrFirstMaker,
      longTitle: result.longTitle,
      imgUrl: imgUrl(result),
    }
  });

  return {
    type: GENERAL_QUERY_SUCCESS,
    generalQueryResults: parsedData,
  }
};

export const generalQueryError = error => ({
  type: GENERAL_QUERY_ERROR,
  error: error,
});

// Display
export const changeDisplayValues = display => ({
  type: CHANGE_DISPLAY_VALUES,
  display, 
});

// Details query
export const detailsQueryPending = () => ({
  type: DETAILS_QUERY_PENDING,
});

export const detailsQuerySuccess = results => {
  const parsedData = results.artObjects.map(result => {
    return {
      colors: result.colors,
      description: result.plaqueDescriptionEnglish,
    }
  });

  return {
    type: DETAILS_QUERY_SUCCESS,
    detailsQueryResult: parsedData,
  }
};

export const detailsQueryError = error => ({
  type: DETAILS_QUERY_ERROR,
  error: error,
});


