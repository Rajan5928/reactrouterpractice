import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Login from './Login';
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends React.Component {
  state={
    userLoggedIn:false,
  }
  onUserLoggedIn = () => {
  this.setState({ userLoggedIn: true});
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav loggedInStatus={this.state.userLoggedIn}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/login" render={() => <Login loggedInStatus={this.state.userLoggedIn} 
            onUserLoginSuccess={this.onUserLoggedIn}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
