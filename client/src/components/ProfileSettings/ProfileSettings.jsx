import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './ProfileSettings.module.css'

const ProfileSettings = () => {

const userInfo = useSelector(state=>state.userInfo);
const dispatch = useDispatch();

const editInfo = (userInfo) => {
    const addInfo = {
        name: userInfo.name,
        surname: userInfo.surname
    }
    dispatch({type: 'editInfo', payload: addInfo})
}

    return (
        <div className={classes.content}>
            <h1 className={classes.h1}>Личные данные</h1>
            <div className={classes.profile}>
                <img src={userInfo.photo} alt="" className={classes.profilePhoto}/>
                <div className={classes.profileText}>
                    <div>{userInfo.name}</div>
                    <div>{userInfo.surname}</div>
                </div>
            </div>
            <form>
                <input 
                    type="text" 
                    value={userInfo.name}
                    onChange={(e)=>editInfo({...userInfo, name: e.target.value})}
                />
                <input 
                    type="text" 
                    value={userInfo.surname}
                    onChange={(e)=>editInfo({...userInfo, surname: e.target.value})}
                />
                <button> 
                    Сохранить
                </button>
            </form>
        </div>
    );
};

export default ProfileSettings;