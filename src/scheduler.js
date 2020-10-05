import { addEmptyPoint, getPoint } from './store/actions';

const scheduleRequest = (store) => () => {
  const activeCharts = store.getState().activeCharts;
  const chartNames = Object.keys(activeCharts);
  if (!!chartNames) {
    chartNames.forEach((name) => {
      if (activeCharts[name]) {
        store.dispatch(getPoint(name));
      } else {
        store.dispatch(addEmptyPoint(name));
      }
    });
  }
};

export const setScheduler = (store) => {
  setInterval(scheduleRequest(store), 1000);
};
