import React, { useState } from 'react';

function SearchBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleCloseSearchBarClick = () => {
    setSearchInput('');
    setOpenSearch(false);
  };

  const handleSearchChange = event => {
    const { value } = event.target;

    setSearchInput(value);
  };

  const handleSearchClick = () => {
    if (openSearch) {
      if (searchInput === '' || !searchInput.replace(/\s/g, '').length) return;
      setSearchInput('');
      console.log(`query for ${searchInput}`);
    }

    setOpenSearch(!openSearch);
  };

  const searchBar = openSearch
    ? (
      <input
        className="search-input"
        type="text"
        onChange={handleSearchChange}
        value={searchInput}
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

export default SearchBar;
