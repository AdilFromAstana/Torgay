import React from 'react';
import emptyPostsList from './../../icons/emptyPostsList.png';
import classes from './EmptyPostList.module.css';

const EmptyPostList = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.content}>
                <img src={emptyPostsList} alt="" className={classes.img}/>
                <div className={classes.text}>Посты не найдены</div>
            </div>
        </div>
    );
};

export default EmptyPostList;