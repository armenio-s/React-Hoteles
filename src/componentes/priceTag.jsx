import React from 'react';

const PriceTag = (props) => {
  const { price } = props
  let icons = []

  for (let index = 0; index < price; index++) {
    icons.push( <i key={index} className="fas fa-dollar-sign" style={{margin: "0 .125em"}}></i> )
  }

  for (let index = price; index < 4; index++) {
    icons.push( <i key={index} className="fas fa-dollar-sign" style={{margin: "0 .125em", opacity: ".25"}}></i> )
  }
  
  return (
    <div className="control">
      <div className="tags">
        <span className="tag is-medium is-info">{ icons }</span>
      </div>
    </div>
    )
  }

export default PriceTag;
