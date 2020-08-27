import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { changeFilter } from '../actions/index';

function Filter(props) {
  const { availableFilters, changeFilter, currentFilter } = props;

  const [openFilter, setOpenFilter] = useState(false);

  const filterOptions = availableFilters.map(filter => (<option key={filter}>{filter}</option>));

  const handleFilterChange = event => {
    const { value } = event.target;

    changeFilter(value);
  };

  const handleFilterIconClick = () => {
    setOpenFilter(!openFilter);
  };

  const filterSelect = openFilter
    ? (
      <select
        id="filter-select"
        value={currentFilter}
        onChange={handleFilterChange}
      >
        {filterOptions}
      </select>
    ) : null;

  return (
    <div className="filter-container">
      {filterSelect}
      <i
        id="filter-icon"
        className="material-icons md-light"
        role="button"
        tabIndex={0}
        onKeyPress={handleFilterIconClick}
        onClick={handleFilterIconClick}
      >
        filter_alt
      </i>
    </div>
  );
}

Filter.propTypes = {
  availableFilters: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentFilter: state.filter,
});

export default connect(mapStateToProps, { changeFilter })(Filter);
