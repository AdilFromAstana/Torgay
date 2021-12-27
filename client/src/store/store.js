import {createStore} from 'redux';
import { combineReducers } from 'redux';
import { isAuth } from './isAuth';
import { isComments } from './isComments';
import { userInfo } from './userInfo';

const rootReducers = combineReducers({
    userInfo: userInfo,
    isAuth: isAuth,
    isComments: isComments
})

export const store = createStore(rootReducers);