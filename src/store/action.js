import { fetchPoints } from '../api';
import moment from 'moment';

export const initialiseChart = (name, colour) => async (dispatch) => {
  try {
    const response = await fetchPoints();
    const points = response.data.map((value) => ({ value }));
    dispatch({
      type: 'initialiseChart',
      payload: {
        name,
        colour,
        points,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getPoint = (name) => async (dispatch) => {
  try {
    const response = await fetchPoints();
    const point = {
      value: response.data[0],
      timestamp: moment().format('H:mm:ss'),
    };
    dispatch({
      type: 'initialiseChart',
      payload: {
        name,
        point,
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
