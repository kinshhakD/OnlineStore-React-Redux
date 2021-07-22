import { combineReducers } from 'redux';
import { shopReducer as shop } from './Shopping/shopping-reducer';

const rootReducer = combineReducers({ shop });

export default rootReducer;
