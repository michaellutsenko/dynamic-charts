export const chartPointsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'initialiseChart':
      return {
        ...state,
        [payload.name]: payload.points,
      };
    case 'addChartPoint': {
      const [first, ...remainder] = state[payload.name];
      return {
        ...state,
        [payload.name]: [...remainder, payload.point],
      };
    }
    default:
      return state;
  }
};

export const chartColoursReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'initialiseChart':
      return {
        ...state,
        [payload.name]: payload.colour,
      };
    default:
      return state;
  }
};

export const activeChartsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'initialiseChart':
      return {
        ...state,
        [payload.name]: true,
      };
    case 'toggleChart':
      return {
        ...state,
        [payload.name]: payload.enabled,
      };
    default:
      return state;
  }
};
