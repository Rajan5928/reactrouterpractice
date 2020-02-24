import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: "white",
        }
    }
    render() {
        return (
            <nav>
                <h3>Logo</h3>
                <ul>
                    <Link style={{color: this.state.color}} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={{color: this.state.color}} to="/about">
                        <li>About</li>
                    </Link>
                    <Link style={{color: this.state.color}} to="/shop">
                        <li>Shop</li>
                    </Link>
                    {
                        this.props.loggedInStatus ? <button>LOGOUT</button> : 
                            <Link style={{ color: this.state.color }} to="/login">
                                <li>LOGIN</li>
                            </Link>
                    }
                </ul>
            </nav>
        );
    }
}

export default Nav;