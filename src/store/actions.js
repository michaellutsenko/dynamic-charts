import { fetchPoints } from '../api';

export const initialiseChart = (name, colour) => async (dispatch) => {
  const points = await fetchPoints(10);
  dispatch({
    type: 'initialiseChart',
    name,
    colour,
    points,
  });
};

export const getPoint = (idx) => async (dispatch) => {
  const points = await fetchPoints(1);

  dispatch({
    type: 'addChartPoint',
    idx,
    point: points[0],
  });
};

export const addEmptyPoint = (idx) => {
  return {
    type: 'addChartPoint',
    idx,
    point: null,
  };
};

export const toggleChart = (idx, enabled) => {
  return {
    type: 'toggleChart',
    idx,
    enabled,
  };
};
