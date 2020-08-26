import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NavBar(props) {
  const filters = ['Relevant', 'Desc'];
  const filterOptions = filters.map(filter => {
    return (<option key={filter}>{filter}</option>);
  });

  const [openSearch, setOpenSearch] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const { displayBackArrow, onBack } = props;

  const handleBackClick = (e) => {
    onBack();
  }

  const handleSearchClick = (e) => {
    openSearch ?
      console.log('query search') :
      setOpenSearch(true);
  }

  const handleFilterChange = (e) => {
    console.log('set redux filter');
  }

  const handleFilterClick = (e) => {
    setOpenFilter(!openFilter);
  }

  const handleCloseSearchBarClick = (e) => {
    setOpenSearch(false);
  }

  let navBarClass = 'nav-bar';

  if (openSearch) navBarClass += ' display-search-bar';
  if (openFilter) navBarClass += ' display-filter';
  if (displayBackArrow) navBarClass += ' display-back-arrow';

  return (
    <div className={navBarClass}>
      <div className='left-icons-container'>
        <i 
          id='back-icon'
          className="material-icons md-light invisible"
          onClick={handleBackClick}
        >
          arrow_back_ios
        </i>
      </div>
      <h1 className='title'>ArtIndex</h1>
      <div className='right-icons-container'>
        <select
          id='filter-select'
          defaultValue={filters[0]}
          className='invisible'
          onChange={handleFilterChange}
        >
          {filterOptions}
        </select>
        <i 
          id='filter-icon'
          className="material-icons md-light"
          onClick={handleFilterClick}
        >
          filter_alt
        </i>
        <div className="search-container invisible">
          <div className="bar-container">
            <input className="search-input" type="text" id="search-bar" />
          </div>
          <i 
            id='clear-icon'
            className="material-icons md-light"
            onClick={handleCloseSearchBarClick}
          >
            clear
          </i>
        </div>
        <i
          id='search-icon'
          className="material-icons md-light"
          onClick={handleSearchClick}
        >
          search
        </i>
      </div>
    </div>
  );
}

NavBar.defaultProps = {
  displayBackArrow: false,
  onBack: () => { console.log('BACK') },
}

NavBar.propTypes =  {
  displayBackArrow: PropTypes.bool,
  onBack: PropTypes.func,
}

export default NavBar;
