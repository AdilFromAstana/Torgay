import React, { useState } from 'react';
import Form from '../Form/Form';
import PostList from '../PostList/PostList';
import classes from './Main.module.css'

const Main = () => {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({author: 'Adil', content: ''});

    const addNewPost =(e)=> {
        if (post.content === ''){
        e.preventDefault()
        }else{
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({author: 'Adil', content: ''})
        }
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className={classes.content}>
            <div className={classes.posts}>
                <Form addNewPost={addNewPost} setPost={setPost} post={post}/>
                <PostList posts={posts} removePost={removePost}/>
            </div>
            <div className={classes.linksList}>
                <div className={classes.a} >Новости</div>
                <div className={classes.a} >Рекомендации</div>
                <div className={classes.a} >Поиск</div>
                <div className={classes.a} >Реакции</div>
                <div className={classes.a} >Обновления</div>
                <div className={classes.a} >Комментарии</div>
            </div>
        </div>
    );
};

export default Main;