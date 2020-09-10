import React from 'react'
import logo from './logo.svg';

const Header = () => {

    const headerLinks = ["Profile", "Numbers", "F1 Cars", "Store", "GoPro"];

    return (
        <div className='header-nav'>
            
            <ul className='header-list'>
            <img src={logo} className="nav-logo" alt="logo" />
                {headerLinks.map((item) => (
                <li key={item}>
                   <a href={item}>{item}</a> 
                </li>
                    ))}
            </ul>
        </div>
    )
}

export default Header
