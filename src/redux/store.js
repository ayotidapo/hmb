import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunk];

const initialState = {};
let devTools = applyMiddleware(...middlewares);
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  devTools = composeWithDevTools(applyMiddleware(...middlewares));
}

// const devTools =
//   process.env.NODE_ENV === 'production'
//     ? applyMiddleware(...middlewares)
//     : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, initialState, devTools);

export default store;
