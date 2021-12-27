import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HeaderEntry.module.css'

const HeaderEntry = () => {

    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <Link to='/login'className={classes.logo}>
                    <img className={classes.imgLogo} src="https://cdn-icons-png.flaticon.com/512/789/789530.png" alt="" />
                    <span className={classes.logoText}>торғай</span>
                </Link>
            </div>
        </div>
    );
};

export default HeaderEntry;