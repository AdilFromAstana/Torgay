import React, {useState} from 'react';
import classes from './PostComments.module.css';
import AnyComment from './AnyComment/AnyComment';
import FormComment from './FormComment/FormComment';

const PostComments = ({comCount, setComCount, comShow}) => {
    
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({ text: ''});

    const addNewComment = (e) => {
        if (comment.text === '') {
            e.preventDefault();
        } else {
            e.preventDefault();
            setComments([...comments, { ...comment, id: Date.now() }]);
            setComment({ text: '' });
            setComCount(comCount+1)
        }
    }

    const removeCom = (comment) => {
        setComments(comments.filter(p => p.id !== comment.id))
        setComCount(comCount-1)
    }

    if(comShow === true){
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
    }else{
        return(
            <div></div>
        )
    }
};

export default PostComments;