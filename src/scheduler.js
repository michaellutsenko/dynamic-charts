import { addEmptyPoint, getPoint } from './store/actions';

const scheduleRequest = (store) => () => {
  const { activeStatus } = store.getState();

  if (activeStatus.length) {
    activeStatus.forEach((status, idx) => {
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
