import React from "react";
import PropTypes from "prop-types";


function Keg(props){

  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Brand: <em>{props.brand}</em></p>
        <p>Alcohol Content: <em>{props.alcoholContent}</em></p>    
        <p>Description: <em>{props.description}</em></p>    
        <hr />
      </div>
    </React.Fragment>
  );
}


Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;