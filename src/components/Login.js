import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin (e) {
      e.preventDefault();

      // Event.preventDefault();
        let formData = {
            username: "test",
            password: "123"
        };
        this.props.authenticate(formData);
        alert("Hello! I am an alert box!!");
    }

    render () {
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={ this.handleLogin }>
                    <input type="text" ref="username" placeholder="Username"/>
                    <input type="password" ref="password" placeholder="Password"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Login;
