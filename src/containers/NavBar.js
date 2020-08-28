import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// Components
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';

function NavBar(props) {
  const availableFilters = ['Relevant', 'Chronic'];

  const { displayBackArrow, onBack } = props;

  const handleBackClick = () => {
    onBack();
  };

  let navBarClass = 'nav-bar';

  if (displayBackArrow) navBarClass += ' display-back-arrow';

  return (
    <div className={navBarClass}>
      <h1 className="title">
        <Link to='/'>
          ArtIndex
        </Link>
      </h1>
      <div className="right-icons-container">
        <Filter availableFilters={availableFilters} />
        <SearchBar />
      </div>
    </div>
  );
}

NavBar.defaultProps = {
  displayBackArrow: false,
  onBack: () => { console.log('BACK'); },
};

NavBar.propTypes = {
  displayBackArrow: PropTypes.bool,
  onBack: PropTypes.func,
};

export default NavBar;
