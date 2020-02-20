import React from 'react';
import {Link, withRouter} from 'react-router-dom';
function Nav() {
    const navLink={
        color:"white",
    };
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <Link style={navLink} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navLink} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navLink} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;