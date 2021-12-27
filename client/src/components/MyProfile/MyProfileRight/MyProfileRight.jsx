import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../../Form/Form';
import PostList from '../../PostList/PostList';
import './MyProfileRight.css';

const MyProfileRight = () => {

    const userInfo = useSelector(state=>state.userInfo)
    
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({author: userInfo.name +' '+ userInfo.surname, content: ''});

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
        <div className='content'>
            <div className='info'>
                <div className='mainInfo'>
                    <h1>{userInfo.name} {userInfo.surname}</h1>
                    <span className='status'>online</span>
                </div>
                <hr style={{border: 'none', height: '1px', backgroundColor: 'white'}}/>
                <div className='otherInfo'>
                    <div className='oneOfInfo'>
                        <div className='question'>Родной город</div>
                        <div className='answear'>Степногорск</div>
                    </div>
                    <div className='oneOfInfo'>
                        <div className='question'>Родной язык</div>
                        <div className='answear'>Русский язык</div>
                    </div>
                </div>
                <hr style={{border: 'none', height: '1px', backgroundColor: 'white', margin: '10px 0'}}/>
                <div className='countInfo'>
                    <div className='countI'>
                        <div className='postsCount'>{posts.length}</div>
                        <div>Постов</div>
                    </div>
                    <div className='countI'>
                        <div className='photoCount'>1</div>
                        <div>Фото</div>
                    </div>
                    <div className='countI'>
                        <div className='groupCount'>5</div>
                        <div>Группы</div>
                    </div>
                </div>
            </div>
            <div className='photoInfo'>
                <div className='photoCount'>
                    <div className='countP'>Мои фото 1</div>
                    <div className='allP'>Показать все</div>
                </div>
            </div>
            <Form post={post} setPost={setPost} addNewPost={addNewPost}/>           
            <PostList posts={posts} removePost={removePost}/>
        </div>
    );
};

export default MyProfileRight;