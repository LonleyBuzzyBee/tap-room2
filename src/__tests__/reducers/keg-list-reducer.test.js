import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

  const currentState = {
    "1": {
      name: "Poma-cran",
      brand: "Loney Orchards",
      alcoholContent: "%16",
      description: "this is good stuff",
      pint: 124,
      id: "1"
    },
    "2": {
      name: "Poma-cran2",
      brand: "Loney Orchards2",
      alcoholContent: "%12",
      description: "this is good stuff2",
      pint: 124,
      id: "2"
    }
  }

  const kegData = {
      name: "such cider",
      brand: "OG Cider",
      alcoholContent: "%10",
      description: "the best cider",
      pint: 124,
      id: "1"
  };

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterkegList', () => {
    const { name, brand, alcoholContent, description, pint = 124, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      description: description,
      pint: pint,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      description: description,
      pint: pint,
      id: id
      }
    });
  });

  test('should decrement a pint', () => {
    action = {
      type: 'BUY_PINT_FROM_KEG',
      id: "1"
    };
 
    expect(kegListReducer(currentState["1"], action)).toEqual({
      
        name: "Poma-cran",
        brand: "Loney Orchards",
        alcoholContent: "%16",
        description: "this is good stuff",
        pint: 123,
        id: "1"
  
    });
  });

});

