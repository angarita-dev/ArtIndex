import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { title, maker, imgUrl } = props;

  const noImgComponent = (
    <div className='result-error-image'>
      No Image available
    </div>
  );

  const imgComponent = (
    <img 
      src={imgUrl}
      alt={title}
      className='result-image'/>
  );

  const displayImage = imgUrl === '' ? noImgComponent : imgComponent;

  return(
    <div className="result">
      {displayImage}
      <h1 className="result-title">{title}</h1>
      <h3 className="result-maker">{maker}</h3>
    </div>
  );
}

Result.defaultProps = {
  imgUrl: ''
}

Result.propTypes = {
  imgUrl: PropTypes.string,
}

export default Result;
