import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MyButton from './../../UI/MyButton/MyButton';
import MyInput from './../../UI/MyInput/MyInput';
import classes from './Form.module.css'

const Form = ({post, setPost, addNewPost}) => {

const userInfo = useSelector(state=>state.userInfo)

    return (
        <form className={classes.form}>
            <div className={classes.content}>
                <Link to='/profile'>
                    <img 
                        src={userInfo.photo}
                        className={classes.authorImage}
                        alt="profile photo"
                    />
                </Link>
                <MyInput 
                    type='text'
                    value={post.content}
                    onChange={e=>setPost({...post, content: e.target.value})}
                    placeholder='Что у вас нового?'
                />
                </div>
            <hr style={{border: 'none' ,height: '1px', background: 'gray'}}/>
            <MyButton 
                onClick={addNewPost}
            >
                Опубликовать
            </MyButton>
      </form>
    );
};

export default Form;