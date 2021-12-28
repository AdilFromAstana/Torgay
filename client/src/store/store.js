import {createStore} from 'redux';
import { combineReducers } from 'redux';
import { isAuth } from './isAuth';
import { userInfo } from './userInfo';
import {commentsCount} from './commentsCount';

const rootReducers = combineReducers({
    userInfo: userInfo,
    isAuth: isAuth,
    commentsCount: commentsCount,
})

export const store = createStore(rootReducers);