import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './PostInfo.module.css';
import trash from './../../../../icons/trash.png';

const PostInfo = ({ post, remove }) => {

    const userInfo = useSelector(state => state.userInfo);

    return (
        <div className={classes.postInfo}>
            <Link to='/profile'>
                <img
                    src={userInfo.photo}
                    className={classes.postImage} 
                />
            </Link>
            <div className={classes.postText}>
                <Link to='/profile' className={classes.link}>
                    <strong className={classes.postBG}>{userInfo.name} {userInfo.surname}</strong>
                    <br/> 
                </Link>
                <div className={classes.postBG}>Сегодня в 22:00</div>
            </div>
            <button className={classes.button} onClick={() => remove(post)}>
                <img
                    src={trash}
                    alt="trash"
                    className={classes.ellipsis} 
                />
            </button>
        </div>
    );
}

export default PostInfo;