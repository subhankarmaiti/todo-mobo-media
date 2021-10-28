import { applyMiddleware, createStore } from 'redux';

import Config from 'react-native-config';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
export default createStore(
  rootReducer,
  Config.ENVIRONMENT === 'development'
    ? composeWithDevTools(middleware)
    : middleware,
);
