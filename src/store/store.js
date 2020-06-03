import { createStore, applyMiddleware, combineReducers } from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

const initialState = {
  from: '上海',
  to: '北京',
  // isCitySelectorVisible: false,
};

export default createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(thunk)
);
