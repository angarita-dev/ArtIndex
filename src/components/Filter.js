import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Filter(props) {
  const { availableFilters } = props;

  const [openFilter, setOpenFilter] = useState(false);

  const filterOptions = availableFilters.map(filter => (<option key={filter}>{filter}</option>));

  const handleFilterChange = event => {
    const { value } = event.target;

    console.log(`set state to ${value}`);
  };

  const handleFilterIconClick = () => {
    setOpenFilter(!openFilter);
  };

  const filterSelect = openFilter
    ? (
      <select
        id="filter-select"
        defaultValue={availableFilters[0]}
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
};

export default Filter;
