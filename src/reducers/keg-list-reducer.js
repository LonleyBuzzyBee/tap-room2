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
    case 'BUY_PINT_FROM_KEG':
      const keg = Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          alcoholContent: alcoholContent,
          description: description,
          pint: pint,
          id: id
      
        },
      })

    const newState = { ...keg };
    
      return newState.pint - 1;
    
  default:
    return state;
  }
};