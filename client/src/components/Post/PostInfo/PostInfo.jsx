import React from 'react';
import { useSelector } from 'react-redux';
import classes from './PostInfo.module.css'

const PostInfo = ({post, remove}) => {

const userInfo = useSelector(state=>state.userInfo);

    return (
        <div className={classes.postInfo}>
            <img 
                src={userInfo.photo} 
                className={classes.postImage}
            />
            <div className={classes.postText}>
                <strong className={classes.postBG}>{userInfo.name} {userInfo.surname}</strong><br/>
                <div className={classes.postBG}>Сегодня в 22:00</div>
            </div>
            <button className={classes.button} onClick={()=>remove(post)}>
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                    alt="" 
                    className={classes.ellipsis}
                    />
            </button>
        </div>
    );
};

export default PostInfo;