import React from 'react';
import classes from './PostContent.module.css';

const PostContent = (props) => {
    return (
        <div className={classes.content}>
            {props.post.content}
        </div>
    );
};

export default PostContent;