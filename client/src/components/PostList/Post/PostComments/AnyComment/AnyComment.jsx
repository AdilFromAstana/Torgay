import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './AnyComment.module.css';
import cross from './../../../../../icons/cross.png';

const AnyComment = ({comment, remove}) => {

const userInfo = useSelector(state=>state.userInfo);

    return (
        <div className={classes.content}>
            <Link to='/profile'>
                <img
                    className={classes.commentAuthorPhoto} 
                    src={userInfo.photo} 
                    alt={userInfo.name}
                />
            </Link>
            <div className={classes.commentAuthor}>
                <Link to='/profile' className={classes.commentAuthorName}>{userInfo.name + ' ' + userInfo.surname}</Link>
                <div className={classes.commentAuthorText}>{comment.text}</div>
            </div>
            <img src={cross} alt="" className={classes.removeBtn} onClick={()=>remove(comment)}/>
        </div>
    );
};

export default AnyComment;