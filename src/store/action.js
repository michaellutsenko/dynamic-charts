import { fetchPoints } from '../api';
import moment from 'moment';

export const initialiseChart = (name, colour) => async (dispatch) => {
  try {
    const response = await fetchPoints();
    dispatch({
      type: 'initialiseChart',
      payload: {
        name,
        colour,
        points: response.data,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getPoint = (name) => async (dispatch) => {
  try {
    const response = await fetchPoints();
    dispatch({
      type: 'initialiseChart',
      payload: {
        name,
        point: response.data[0],
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const toggleChart = (name, enabled) => {
  return {
    type: 'toggleChart',
    payload: {
      name,
      enabled,
    },
  };
};
