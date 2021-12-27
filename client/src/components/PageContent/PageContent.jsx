import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import MyProfile from './../MyProfile/MyProfile';
import Main from './../Main/Main';
import Navbar from './../Navbar/Navbar';
import classes from './PageContent.module.css';
import Group from './../Group/Group';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import Login from '../Login/Login';
import HeaderIn from '../HeaderIn/HeaderIn';
import HeaderEntry from '../HeaderEntry/HeaderEntry';
import { useSelector } from 'react-redux';

const PageContent = () => {

const isAuth = useSelector(state=>state.isAuth)

    return (
        isAuth
        ?
        <div className={classes.content}>
            <HeaderIn/>
            <Navbar/>
            <Routes>
                <Route path='/main' element={<Main/>}/>
                <Route path='/group' element={<Group/>}/>
                <Route path='/profile' element={<MyProfile/>}/>
                <Route path='*' element={<Navigate to='/main'/>}/>
                <Route path='/profileSettings' element={<ProfileSettings/>}/>
            </Routes>
        </div>
        :
        <div className={classes.contentLogin}>
            <HeaderEntry/>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<Navigate to='/login'/>}/>
            </Routes>
        </div>
    );
};

export default PageContent;