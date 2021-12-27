import React from 'react';
import PostFeedback from './PostFeedback/PostFeedback';
import PostContent from './PostContent/PostContent';
import PostInfo from './PostInfo/PostInfo';
import classes from './Post.module.css';

const Post = (props) => {
    return (
            <div className={classes.post}>
                <PostInfo post={props.post} remove={props.removePost}/>
                <PostContent post={props.post}/>
                <PostFeedback/>
            </div>
        
    );
};

export default Post;