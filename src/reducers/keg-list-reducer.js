export default (state = {}, action) => {
  const { name, brand, alcoholContent, description, pint = 124, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          alcoholContent: alcoholContent,
          description: description,
          pint: pint,
          id: id
      
        }
      });
    // case 'BUY_PINT_FROM_KEG':
    //   // if (newState[id]) {
    //     //   newState[id].pint - 1;
    //     // }
    //   return Object.assign({}, state, {
    //     [id]: {
    //       name: name,
    //       brand: brand,
    //       alcoholContent: alcoholContent,
    //       description: description,
    //       pint: pint - 1,
    //       id: id
    //     }
    //   });
  default:
    return state;
  }
};
