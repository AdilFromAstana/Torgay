import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import Title from '../Titile/Title';
import classes from './Login.module.css'

const Login = () => {

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
        <div className={classes.content}>
            <div className={classes.about}>
                <Title/>
                <div className={classes.bgImg}>
                    <img 
                        className={classes.img}
                        src='https://cdn-icons-png.flaticon.com/512/789/789530.png'
                        alt="" 
                    />
                </div>
            </div>
            <div className={classes.login}>
                <div className={classes.formContent}>
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
                </div>
            </div>
        </div>
    );
};

export default Login;