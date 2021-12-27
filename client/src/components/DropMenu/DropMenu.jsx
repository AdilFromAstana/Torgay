import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './DropMenu.css'

const DropMenu = ({active}) => {

    const dispatch = useDispatch();

    const isFalse = () => {
        dispatch({type: 'false'})
    }

    const login = (event) => {
        event.preventDefault();
        isFalse()
    }

    return (
        <div className={active ? "menuDownActive" : "menuDown"}>
            <Link to='/profileSettings' className='menuSettings'>Личные данные</Link>
            <button className='menuOut' onClick={login}>Выйти</button>
        </div>
    );
};

export default DropMenu;