import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  namesReducer,
  activeStatusReducer,
  coloursReducer,
  pointsReducer,
} from './reducers';

const rootReducer = combineReducers({
  names: namesReducer,
  points: pointsReducer,
  colours: coloursReducer,
  activeStatus: activeStatusReducer,
});

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
