import { createStore, combineReducers } from 'redux';
import user from './modules/user';
import quiz from './modules/quiz';
import rank from './modules/rank';

const roootReducer = combineReducers({ user, quiz, rank });

const store = createStore(roootReducer);

export default store;
