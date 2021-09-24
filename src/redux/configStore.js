import { createStore, combineReducers } from 'redux';
import user from './modules/user';
import quiz from './modules/quiz';

const roootReducer = combineReducers({ user, quiz });

const store = createStore(roootReducer);

export default store;
