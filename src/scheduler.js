import { addEmptyPoint, getPoint } from './store/actions';

const scheduleRequest = (store) => () => {
  // Get the collection of statuses
  const { activeStatus } = store.getState();

  // Only do something if the collection isn't empty
  if (activeStatus.length) {
    activeStatus.forEach((status, idx) => {
      // If the status is active, request a new point
      // Otherwise, add an empty point
      if (status) {
        store.dispatch(getPoint(idx));
      } else {
        store.dispatch(addEmptyPoint(idx));
      }
    });
  }
};

export const setScheduler = (store) => {
  setInterval(scheduleRequest(store), 1000);
};
