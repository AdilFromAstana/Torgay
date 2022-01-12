import {createStore} from 'redux';
import { combineReducers } from 'redux';
import { isAuth } from './isAuth';
import { userInfo } from './userInfo';
import { userList } from './userList';

const rootReducers = combineReducers({
    userInfo: userInfo,
    userList: userList,
    isAuth: isAuth,
})

export const store = createStore(rootReducers);