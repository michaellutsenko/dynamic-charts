import { fetchPoints } from '../api';

export const initialiseChart = (name, colour) => async (dispatch) => {
  const response = await fetchPoints(10);
  dispatch({
    type: 'initialiseChart',
    name,
    colour,
    points: response.data,
  });
};

export const getPoint = (name) => async (dispatch) => {
  const response = await fetchPoints(1);
  dispatch({
    type: 'addChartPoint',
    name,
    point: response.data[0],
  });
};

export const addEmptyPoint = (name) => {
  return {
    type: 'addChartPoint',
    name,
    point: null,
  };
};

export const toggleChart = (name, enabled) => {
  return {
    type: 'toggleChart',
    name,
    enabled,
  };
};
