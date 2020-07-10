import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";


function KegList(props){

  return (
    <React.Fragment>
      
      {Object.values(props.kegList).map((keg) => {
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          description={keg.description}
          alcoholContent={keg.alcoholContent}
          id={keg.id}
          key={keg.id}
        />
      })}
  </React.Fragment>
  );
}
 KegList.propTypes = {
   kegList: PropTypes.object,
   onKegSelection: PropTypes.func
};1

export default KegList;