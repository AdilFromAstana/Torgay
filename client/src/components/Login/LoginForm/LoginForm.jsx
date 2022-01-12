import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './LoginForm.module.css';

const LoginForm = () => {
    
    const dispatch = useDispatch();
    const isTrue = () => {
        dispatch({type: 'true'})
    }
 
    const login = event => {
        if (accountEntry.loginEntry === account.login && accountEntry.loginEntry === account.login) {
            event.preventDefault();
            isTrue();
        } else {
            event.preventDefault();
            setAccountEntry({loginEntry:'', passEntry:''});
            
        }
    }

    const account = {login:'Adil', pass:'123'}
    const [accountEntry, setAccountEntry] = useState({loginEntry:'', passEntry:''});

    return (
        <div className={classes.login}>
            <div className={classes.loginTitle}>Войти в систему</div>
            <form className={classes.form} onSubmit={login}>
                <input 
                    className={classes.input}
                    type="text"
                    value={accountEntry.loginEntry}
                    onChange={(e)=>setAccountEntry({...accountEntry, loginEntry: e.target.value})}
                />
                <input 
                    className={classes.input}
                    type="password"
                    value={accountEntry.passEntry}
                    onChange={(e)=>setAccountEntry({...accountEntry, passEntry: e.target.value})}
                />
                <button className={classes.button}>Войти</button>
            </form>
            <div className={classes.registration}>
                <div className={classes.registrationTitle}>Нет аккаунта в Торғай?</div>
                <Link to='/registration' className={classes.registrationLink}>Создать аккаунт</Link>
            </div>
        </div>
    );
};

export default LoginForm;