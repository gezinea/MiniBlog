import React from 'react'
import { Link } from 'react-router-dom'

import style from './style/navBar.module.css'

const NavBar = () => {

    return(
        <>
        <nav>
            <Link to="/">Mini<span>Blog</span></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        </>

    );
}

export default NavBar;