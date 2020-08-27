import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Filter from '../components/Filter';

function NavBar(props) {
  const availableFilters = ['Relevant', 'Chronic'];
  
  const [openSearch, setOpenSearch] = useState(false);
  const { displayBackArrow, onBack } = props;

  const handleBackClick = (e) => {
    onBack();
  }

  const handleSearchClick = (e) => {
    openSearch ?
      console.log('query search') :
      setOpenSearch(true);
  }

  const handleCloseSearchBarClick = (e) => {
    setOpenSearch(false);
  }

  let navBarClass = 'nav-bar';

  if (openSearch) navBarClass += ' display-search-bar';
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
        <Filter availableFilters={availableFilters}/>
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
