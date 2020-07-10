import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingBuyPint} = props;
  console.log(keg);
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
       <h3>{keg.name}</h3>
      <p>{keg.brand}</p>
      <p>{keg.alcoholContent}</p>
      <p>{keg.description}</p>
      <p>{keg.pint}</p>
      <button onClick={() => onClickingBuyPint(keg.id)}>Buy a pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingBuyPint: PropTypes.func
};

export default KegDetail;