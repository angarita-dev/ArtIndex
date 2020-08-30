import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import {
  getDetailsQueryPending,
  getDetailsQuerySuccess,
  getDetailsQueryError
} from '../actions/reducers/detailsQuery';
import { getDisplayValues } from '../actions/reducers/display';

import detailsQuery from '../actions/detailsQuery';

function ArtDisplay(props) {
  const [description, setDescription] = useState('');
  const [colors, setColors] = useState([]);

  const {
    title,
    subTitle,
    scLabelLine,
    imgUrl,
    fetchDetails,
  } = props;

  useEffect(() => {
    fetchDetails();
  },[]);

  const colorSwatch = colors.map(color => (
    <div key={color} className='color-item' style={{backgroundColor:color}}/>));

  const mainColors = colors === [] ? 
    null :
    <div className="main-colors">{colorSwatch}</div>;

  return (
    <div className="art-display">
      <div className="image-container" 
        style={{backgroundImage:`url(${imgUrl})`}}
      >
        <a 
          className="img-link"
          href={imgUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          See full image
        </a>
      </div>
      <div className="info-container">
        <h1 className="long-title">{title}</h1>
        <div className="general-data-container">
          <div className="specific-info-container">
            <div className="material-container">
              <div className="text-info">
                <p>
                  <i className="material-icons md-light">palette</i>
                  {subTitle}
                </p>
                <p>
                  <i className="material-icons md-light">straighten</i>
                  {scLabelLine}
                </p>
              </div>
            </div>
            <div className="description-container">
              <p className="description">{description}</p>
              {mainColors}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ArtDisplay.defaultProps = {
};

const mapStateToProps = state => ({
  ...getDisplayValues(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDetails: detailsQuery,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtDisplay);
