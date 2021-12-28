import React from 'react';
import EmptyPostList from '../EmptyPostList/EmptyPostList';
import Post from '../Post/Post';

const PostList = ({posts, removePost}) => {
    if (posts.length == 0){
        return(
            <EmptyPostList/>
        )
    }else{
        return (
            <div>
                {
                    posts.map(post=>
                        <Post post={post} removePost={removePost}></Post>
                    )
                } 
            </div>
        )
    }
};

export default PostList;