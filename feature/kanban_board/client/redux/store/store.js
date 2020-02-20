import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import testReducer from '../reducers/test';

const rootreducer = combineReducers({testReducer});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
