import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

// Actions
import {
  getGeneralQueryResult,
  getGeneralQueryPending,
} from '../actions/reducers/generalQuery'

// External components
import Result from '../components/Result';

// Helpers
function splitToArrays(data, count) {
  const splited = [];
  data.forEach((element, index) => {
    const arrayIndex = index % count;
    const arrayContent = splited[arrayIndex];

    if (arrayContent === undefined) {
      splited[arrayIndex] = [element];
    } else {
      splited[arrayIndex].push(element);
    }
  });

  return splited;
}

// Component
function ResultsList(props) {
  const { results, pending } = props;

  const shouldRenderComponent = () => !pending;

  const isBigScreen = useMediaQuery({ query: '(min-width: 1300px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 1000px)' });
  const isSmallScreen = useMediaQuery({ query: '(min-width: 700px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 699px)' });

  let containerClass = 'result-container';
  if (isMobile) {
    containerClass += ' wide-mode';
  }

  let columnsCount = 1;
  if (isSmallScreen) columnsCount = 2;
  if (isMediumScreen) columnsCount = 3;
  if (isBigScreen) columnsCount = 4;

  const dataComponents = results.map(data => <Result key={data.id} {...data}/> );
  const splitedElements = splitToArrays(dataComponents, columnsCount);
  const columns = splitedElements.map((content,index) => {
    const key = `col${index}`;
    return (
      <div className='result-column' key={key}>{content}</div>
    );
  });

  return(
    <div className={containerClass}>
      {columns}
    </div>
  );
}

ResultsList.propTypes = {
  results: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.object,
}

const mapStateToProps = state => ({
  results: getGeneralQueryResult(state),
  pending: getGeneralQueryPending(state),
});

export default connect(mapStateToProps)(ResultsList);
