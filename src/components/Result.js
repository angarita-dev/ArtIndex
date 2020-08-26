import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { title, maker, imgUrl, wide } = props;

  const noImgComponent = (
    <div className='result-error-image'>
      No Image available
    </div>
  );

  const imgComponent = wide ?
    (<div 
      style={{backgroundImage:`url(${imgUrl})`}}
      className='result-image' />) :
    (<img 
        src={imgUrl}
        alt={title}
        className='result-image' />);

  const displayImage = imgUrl === '' ? noImgComponent : imgComponent;

  const resultClass = wide ? 'result wide' : 'result';

  return(
    <div className={resultClass}>
      {displayImage}
      <div className='result-info'>
        <h1 className="result-title">{title}</h1>
        <h3 className="result-maker">{maker}</h3>
      </div>
    </div>
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
