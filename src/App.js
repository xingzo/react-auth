import React, { Component } from 'react';
import './styles/App.css';
import {
    Redirect,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import axios from 'axios';

import About from './components/About';
import Login from './components/Login';
import Profile from './components/Profile';

// https://www.sitepoint.com/react-router-v4-complete-guide/
const AuthRoute = ({ component: Component, isAuthorized}) => {
    return (
        <Route render={(props) => isAuthorized ? <Component {...props} /> : <Redirect to={{pathname: '/login'}}/>} />
    )
};

const token = localStorage.getItem('logged-in');

class App extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: token,
            isAuthorized: false,
            token_val: token
        };

        // if (token === "true") {
        //   console.log("token is true");
        //   this.setState({ isAuthenticated: true });
        // }
        // else{
        //   console.log("token is false");
        //
        // }
        this.authenticate = this.authenticate.bind(this);
    }

    authorize() {
        // Sends a request for authorization ...
        // Test it. Switch between true and false
        return false
        // You can use this for site permissions!
    }

    authenticate(user) {
        // SAMPLE ONLY -- You should insert the logic for your unique app here to request authentication!
        let url = 'http://localhost:3001/login';
        axios.post(url, user)
            .then((res) => {
                console.log(res);
                console.log(res);
                let authenticated = res.data.user ? true : false;
                console.log(authenticated);
                this.setState({ isAuthenticated: authenticated });
                localStorage.setItem('logged-in', "true");

            });
        // Testing only. In prod we would let the request above update the state
        // this.setState({ isAuthenticated: true, isAuthorized:true })
    }

    render() {
        return (
            <header>
               <h1>Learn Routing</h1>
               <nav>
                   {/* Create our nav bar links using the Link element from react router */}
                   <ul>
                       <li><Link to="/about">About</Link></li>
                       { this.state.isAuthorized
                           ? <li><Link to="/profile">Profile</Link></li>
                           : <li><Link to="/login">Login</Link></li>

                       }
                   </ul>
               </nav>

                {/* Create the routes. This will not appear on the page. */}
               <div className="main">
                   <Switch>
                       <Route path="/about" component={ About } />
                       { /* Create a custom route that will check this.state.isAuthorized */ }
                       <AuthRoute path="/profile" component={ Profile } />
                       <Route path="/login" render={ () => <Login authenticate={ this.authenticate } /> } />
                   </Switch>
               </div>
           </header>
        );
    }
}

export default App;
