export const namesReducer = (state = [], action) => {
  switch (action.type) {
    case 'initialiseChart':
      return [...state, action.name];
    default:
      return state;
  }
};

export const pointsReducer = (state = [], action) => {
  switch (action.type) {
    case 'initialiseChart':
      return [...state, action.points];
    case 'addChartPoint': {
      const [first, ...remainder] = state[action.idx];
      return [...state, [...remainder, action.point]];
    }
    default:
      return state;
  }
};

export const coloursReducer = (state = [], action) => {
  switch (action.type) {
    case 'initialiseChart':
      return [...state, action.colour];
    default:
      return state;
  }
};

export const activeStatusReducer = (state = [], action) => {
  switch (action.type) {
    case 'initialiseChart':
      return [...state, true];
    case 'toggleChart':
      return state.map((enabled, index) =>
        index === action.id ? action.enabled : enabled
      );
    default:
      return state;
  }
};
