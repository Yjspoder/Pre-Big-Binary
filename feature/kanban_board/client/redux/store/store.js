import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import columnReducer from '../reducers/columnReducer';
import noteReducer from '../reducers/noteReducer';

const rootreducer = combineReducers({columnReducer , noteReducer});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
