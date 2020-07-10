import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      alcoholContent: event.target.alcoholContent.value,
      description: event.target.description.value,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='name' />
        <input
          type='text'
          name='brand'
          placeholder='brand' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='alcoholContent' />
        <textarea
          name='description'
          placeholder='Description' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;