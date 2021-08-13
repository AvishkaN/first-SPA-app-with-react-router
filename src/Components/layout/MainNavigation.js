import React from 'react'
import {NavLink} from 'react-router-dom'

import Clasess  from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={Clasess.header}>
            <div className={Clasess.logo}>Great Quotes</div>
            <nav className={Clasess.nav}>
                <ul>
                    <li><NavLink to='/quotes' activeClassName={Clasess.active}>All quotes</NavLink></li>
                    <li><NavLink to='/new-quote' activeClassName={Clasess.active}>Add quotes</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
