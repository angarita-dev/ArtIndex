import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

// Actions
import { changeDisplayValues } from '../actions/index';

// Component
function Result(props) {
  const {
    id,
    title,
    longTitle,
    maker,
    imgUrl,
    wide,
    changeDisplayValues
  } = props;

  const handleLinkClick = () => {
    changeDisplayValues({
      id,
      title,
      longTitle,
      maker,
      imgUrl,
    });
  };

  const noImgComponent = (
    <div className='result-error-image'>
      No Image available
    </div>
  );

  const imgComponent = (<img 
    src={imgUrl}
    alt={title}
    className='result-image' />);

  const displayImage = imgUrl === '' ? noImgComponent : imgComponent;

  const resultClass = wide ? 'result wide' : 'result';

  return(
    <Link 
      to='/display'
      onClick={handleLinkClick}
    >
      <div className={resultClass}>
        {displayImage}
        <div className='result-info'>
          <h1 className="result-title">{title}</h1>
          <h3 className="result-maker">{maker}</h3>
        </div>
      </div>
    </Link>
  );
}

Result.defaultProps = {
  imgUrl: '',
  wideMode: false,
}

Result.propTypes = {
  imgUrl: PropTypes.string,
  wideMode: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  longTitle: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  changeDisplayValues: PropTypes.func.isRequired,
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { changeDisplayValues })(Result);
