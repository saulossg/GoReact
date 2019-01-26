import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const createAppStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppStore(reducers, compose(applyMiddleware(...[])));

export default store;
