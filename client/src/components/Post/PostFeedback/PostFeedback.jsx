import React, {useState} from 'react';
import classes from './PostFeedback.module.css'
import repost from './../../../icons/repost.png'
import comments from './../../../icons/comments.png'
import likes from './../../../icons/likes.png'
import { useDispatch } from 'react-redux';

const PostFeedback = () => {

    const dispatch = useDispatch();

    const isCommentsActive = () => {
        dispatch({type: 'true'})
    }

    const [like, setLike] = useState(0);

    const addLike = (e) => {
      e.preventDefault(e)
      setLike(like+1)
    }

    return (
        <div className={classes.feedbackAll}>
            <div className={classes.feedback}>
                <div onClick={addLike} className={classes.likes}><img className={classes.img} src={likes}/><div style={{padding: '0 5px'}}>{like}</div></div>
                <div onClick={isCommentsActive} className={classes.likes}><img className={classes.img} src={comments}/><div style={{padding: '0 5px'}}>3</div></div>
                <div className={classes.likes}><img className={classes.img} src={repost}/><div style={{padding: '0 5px'}}>1</div></div>
            </div>
            <div className={classes.views}>
                <img style={{backgroundColor: '#595959',width:'25px', height:'25px'}} src="https://cdn-icons-png.flaticon.com/512/709/709612.png"/><div style={{backgroundColor: '#595959', padding: '0 5px', display: 'flex', alignItems: 'center'}}>102</div>
            </div>
        </div>
    );
};

export default PostFeedback;