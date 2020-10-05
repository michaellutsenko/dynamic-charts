import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  activeChartsReducer,
  chartColoursReducer,
  chartPointsReducer,
} from './reducers';

const rootReducer = combineReducers({
  activeCharts: activeChartsReducer,
  chartColours: chartColoursReducer,
  chartData: chartPointsReducer,
});

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
