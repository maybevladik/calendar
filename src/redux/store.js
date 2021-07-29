import { createStore, combineReducers } from 'redux';
import AddEventReducer from './reducer/AddEventReducer';
import ChecksReducer from './reducer/ChecksReducer';

let reducers = combineReducers({
    check: ChecksReducer,
    addEvent: AddEventReducer 
});

let store = createStore(reducers);

window.store = store;

export default store;