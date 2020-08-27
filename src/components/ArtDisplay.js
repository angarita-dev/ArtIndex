import React from 'react';

function ArtDisplay(props) {
  const { title, subTitle, scLabelLine, imgUrl, colors, description } = props;

  const colorSwatch = colors.map(color => (
    <div key={color} className='color-item' style={{backgroundColor:color}}/>));

  const mainColors = colors === [] ? 
    null :
    <div className="main-colors">{colorSwatch}</div>;

  return (
    <div className="art-display">
      <div className="image-container" 
        style={{backgroundImage:`url(${imgUrl})`}}/>
      <div className="info-container">
        <h1 className="long-title">{title}</h1>
        <div className="general-data-container">
          <div className="specific-info-container">
            <div className="material-container">
              <p>
                <i className="material-icons md-light">palette</i>
                {subTitle}
              </p>
              <p>
                <i className="material-icons md-light">straighten</i>
                {scLabelLine}
              </p>
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
  colors: ['#ff0000', 'yellow', 'green', 'white', 'blue'],
  title: "Self-portrait",
  subTitle: "h 22.6cm × w 18.7cm",
  scLabelLine: "oil on panel, c. 1628",
  imgUrl: "https://lh3.googleusercontent.com/7qzT0pbclLB7y3fdS1GxzMnV7m3gD3gWnhlquhFaJSn6gNOvMmTUAX3wVlTzhMXIs8kM9IH8AsjHNVTs8em3XQI6uMY=s0",
  description: "Despite his lack of experience, the young Rembrandt was not afraid to experiment. In this early self portrait the light brushes past his right cheek. The rest of the face is cloaked in shadow. It takes a moment to realise that the artist is staring intently, directly at the viewer. Rembrandt used the back of his brush to scratch in the wet paint, to accentuate the curls of his wild, unkempt hair."
};
export default ArtDisplay;
