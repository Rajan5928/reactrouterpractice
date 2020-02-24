import React from 'react';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            log: "Login",
            heading: "Login Page",
        }
    }
    render(){
    return (
        <div>
            <h1>{this.state.heading}</h1>
            {
                this.props.loggedInStatus ? <h2>"Hello"</h2> : 
                    <button onClick={this.props.onUserLoginSuccess}>{this.state.log}</button>
            }
        </div>
    );
    }
}

export default Login;