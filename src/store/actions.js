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

export const getPoint = (name) => async (dispatch, getState) => {
  const response = await fetchPoints(1);
  const idx = getState().names.findIndex((x) => x === name);

  dispatch({
    type: 'addChartPoint',
    idx,
    point: response.data[0],
  });
};

export const addEmptyPoint = (name) => (dispatch, getState) => {
  const idx = getState().names.findIndex((x) => x === name);
  dispatch({
    type: 'addChartPoint',
    idx,
    point: null,
  });
};

export const toggleChart = (name, enabled) => (dispatch, getState) => {
  const idx = getState().names.findIndex((x) => x === name);
  return {
    type: 'toggleChart',
    idx,
    enabled,
  };
};
