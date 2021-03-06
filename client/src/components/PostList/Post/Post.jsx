import React from 'react';
import PostFeedback from './PostFeedback/PostFeedback';
import PostContent from './PostContent/PostContent';
import PostInfo from './PostInfo/PostInfo';
import classes from './Post.module.css';
import PostComments from './PostComments/PostComments';
import { useState } from 'react';

const Post = ({post, removePost}) => {

    const [comCount, setComCount] = useState(0);
    const [comShow, setComShow] = useState(false);

    return (
            <div className={classes.post}>
                <PostInfo post={post} remove={removePost}/>
                <PostContent post={post}/>
                <PostFeedback comCount={comCount} comShow={comShow} setComShow={setComShow}/>
                <PostComments comCount={comCount} setComCount={setComCount} comShow={comShow}/>
            </div>
        
    );
};

export default Post;