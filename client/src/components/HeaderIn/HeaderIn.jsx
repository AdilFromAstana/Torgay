import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropMenu from '../DropMenu/DropMenu';
import classes from './HeaderIn.module.css'

const HeaderIn = () => {

const [active, setActive] = useState(false);

    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <Link to='/main'className={classes.logo}>
                    <img className={classes.imgLogo} src="https://cdn-icons-png.flaticon.com/512/789/789530.png" alt="" />
                    <span className={classes.logoText}>торғай</span>
                </Link>
                <button className={classes.profile} onClick={()=>setActive(!active)}>
                    <img src="https://sun9-37.userapi.com/impg/joCfadqds9WjVIE4INT6Xixasyo1q3W1mdstdg/zImzBOKdumg.jpg?size=604x604&quality=95&sign=16667085e7f9326e723480e75f223f28&type=album" alt="" className={classes.profileImg} />                
                    <img src="https://cdn-icons.flaticon.com/png/512/656/premium/656979.png?token=exp=1640104324~hmac=5edbcbde7c27bcc96d55438e592945b8" alt="" className={classes.profileMore}/>
                </button>
                <DropMenu active={active}/>
            </div>
        </div>
    );
};

export default HeaderIn;