import React from 'react';
import PostFeedback from './PostFeedback/PostFeedback';
import PostContent from './PostContent/PostContent';
import PostInfo from './PostInfo/PostInfo';
import classes from './Post.module.css';
import PostComments from './PostComments/PostComments';

const Post = ({post, removePost}) => {

    return (
            <div className={classes.post}>
                <PostInfo post={post} remove={removePost}/>
                <PostContent post={post}/>
                <PostFeedback/>
                <PostComments/>
            </div>
        
    );
};

export default Post;