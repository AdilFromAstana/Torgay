import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './DropModal.module.css';

const DropModal = ({modal, setModal}) => {

    const dispatch = useDispatch();

    const isFalse = () => {
        dispatch({type: 'false'})
    }

    const login = (e) => {
        e.preventDefault();
        isFalse()
    }

    const cancel = (e) => {
        e.preventDefault();
        setModal(!modal)
    }

    if(modal){
        return(
            <div></div>
        )
    }else{
        return (
            <div className={classes.modal}>
                <div className={classes.content}>
                    Хотите выйти из учетной записи?
                    <div className={classes.option}>
                        <button className={classes.exit} onClick={login}>Да, хочу выйти</button>
                        <button className={classes.cancel} onClick={cancel}>Нет, останусь</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default DropModal;