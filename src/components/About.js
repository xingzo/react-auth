import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {

  handleLogout (e) {
    e.preventDefault();

    // SAMPLE ONLY -- You should insert the logic for your unique app here to request authentication!
    let url = 'http://localhost:3001/logout';
    axios.get(url)
        .then((res) => {
            console.log(res);
            console.log(res);
            let authenticated = res.data.user ? true : false;
            console.log(authenticated);
            // this.setState({ isAuthenticated: authenticated });
            localStorage.setItem('logged-in', "false");
        });

  }
    render () {
        return (
            <div>
                All about stocks. Read it here, folks!
                    <h1>Sign Out</h1>
                    <form onSubmit={ this.handleLogout }>
                        <input type="submit" value="Sign Out"/>
                    </form>
            </div>
        )
    }
}

export default About;
