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
      // Go through all collections of points
      return state.map((points, idx) => {
        // Check if the current collection is under the index we expect
        // If so, return a new collection (drop the first element, append the new point)
        // Otherwise, do nothing, just return the old collection
        if (idx === action.idx) {
          const [first, ...remainder] = points;
          return [...remainder, action.point];
        } else {
          return points;
        }
      });
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
      // Same logic as in pointsReducer
      // Go through the entire collection
      return state.map((enabled, index) =>
        // When we hit the index we want, return the value from the action
        // Otherwise, return the old value
        index === action.idx ? action.enabled : enabled
      );
    default:
      return state;
  }
};
