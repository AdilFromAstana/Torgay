import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import profile from './../../icons/profile.png';
import posts from './../../icons/posts.png';
import group from './../../icons/group.png';

const Navbar = () => {
    return (
            <div className={classes.navbar}>
                <Link className={classes.link} to='/profile'><img className={classes.img} src={profile} alt="" /><span className={classes.linkText}>Мой профиль</span></Link>
                <Link className={classes.link} to='/main'><img className={classes.img} src={posts} alt="" /><span className={classes.linkText}>Новости</span></Link>
                <Link className={classes.link} to='/group'><img className={classes.img} src={group} alt="" /><span className={classes.linkText}>Сообщества</span></Link>
            </div>
    );
};

export default Navbar;