import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

export const store = configureStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);