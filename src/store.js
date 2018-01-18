import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger'

import reducer from './reducers';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') return applyMiddleware(thunkMiddleware)
    // Enable additional logging in non-production environments.
  return applyMiddleware(thunkMiddleware)
}

export default store = createStore(reducer, composeWithDevTools(getMiddleware()))
