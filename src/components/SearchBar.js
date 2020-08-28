import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { changeQueryInput, deleteQueryInput } from '../actions/index';
import { getGeneralQueryPending } from '../actions/reducers/generalQuery';
import generalQuery from '../actions/generalQuery';

// Component
function SearchBar(props) {
  const {
    currentInput,
    changeQueryInput,
    deleteQueryInput,
    fetchGeneralQuery,
    pending,
  } = props;

  const [openSearch, setOpenSearch] = useState(false);

  const handleCloseSearchBarClick = () => {
    deleteQueryInput();
    setOpenSearch(false);
  };

  const handleSearchChange = event => {
    const { value } = event.target

    changeQueryInput(value);
  };

  const handleSearchClick = () => {
    if (pending) return;
    if (openSearch) {
      if (currentInput === '' || !currentInput.replace(/\s/g, '').length) return;
      fetchGeneralQuery();
    }

    setOpenSearch(!openSearch);
  };

  const searchBar = openSearch
    ? (
      <input
        className="search-input"
        type="text"
        onChange={handleSearchChange}
        value={currentInput}
        id="search-bar"
      />
    ) : null;

  const clearIcon = openSearch
    ? (
      <i
        id="clear-icon"
        className="material-icons md-light"
        role="button"
        tabIndex={0}
        onKeyPress={handleCloseSearchBarClick}
        onClick={handleCloseSearchBarClick}
      >
        clear
      </i>
    ) : null;

  return (
    <div className="search-container">
      <div className="bar-container">
        {searchBar}
      </div>
      {clearIcon}
      <i
        id="search-icon"
        className="material-icons md-light"
        role="button"
        tabIndex={0}
        onKeyPress={handleSearchClick}
        onClick={handleSearchClick}
      >
        search
      </i>
    </div>
  );
}

SearchBar.propTypes = {
  currentInput: PropTypes.string.isRequired,
  changeQueryInput: PropTypes.func.isRequired,
  deleteQueryInput: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  currentInput: state.queryInput,
  pending: getGeneralQueryPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeQueryInput,
  deleteQueryInput,
  fetchGeneralQuery: generalQuery,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
