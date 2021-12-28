import React from 'react';
import classes from './PostComments.module.css';
import { useState } from 'react';
import AnyComment from './AnyComment/AnyComment';
import FormComment from './FormComment/FormComment';
import { useDispatch } from 'react-redux';

const PostComments = () => {
    
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({ text: ''});

    const addNewComment = (e) => {
        if (comment.text === '') {
            e.preventDefault();
        } else {
            e.preventDefault();
            setComments([...comments, { ...comment, id: Date.now() }]);
            setComment({ text: '' });
            dispatch({ type: 'addCount', payload: 1 });
        }
    }

    const removeCom = (comment) => {
        setComments(comments.filter(p => p.id !== comment.id))
        dispatch({type: 'removeCount', payload: 1})
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.commentList}>
                {
                    comments.map((comment,index)=>
                        <AnyComment comment={comment} remove={removeCom} key={index}/>
                    )
                }
            </div>
            <FormComment addNewComment={addNewComment} setComment={setComment} comment={comment}/>
        </div>
    )
};

export default PostComments;