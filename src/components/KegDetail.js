import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {

  const { keg } = props;
  console.log(keg);
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
       <h3>{keg.name}</h3>
      <p>{keg.brand}</p>
      <p>{keg.alcoholContent}</p>
      <p>{keg.description}</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;