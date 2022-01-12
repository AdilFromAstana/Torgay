import React from 'react';
import classes from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';
import About from './About/About';

const Login = () => {

    return (
        <div className={classes.content}>
            <About/>
            <LoginForm/>
        </div>
    );
};

export default Login;