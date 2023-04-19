import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
    <div>   
        <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/affirmations">Affirmations</Link>
            </li>
            <li>
                <Link to = "/news">Explore</Link>
            </li>
            <li>
                <Link to="/calender">Calender</Link>
            </li>
            <li>
                <Link to = "/forum">Forum</Link>
            </li>
            

        </ul>
    </div>
    )
}

export default NavBar