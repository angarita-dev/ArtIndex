import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Result(props) {
  const { title, maker, imgUrl, wide } = props;

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
    <Link to='/display'>
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
}

export default Result;
