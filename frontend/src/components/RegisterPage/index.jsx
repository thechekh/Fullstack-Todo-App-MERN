//LogPage
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginPage extends React.Component {


    render() {

        return (
            <div style={{marginLeft:'100px'}}>
                <h2>Register Page</h2>
<form action="">
<h6>Login</h6>
<input type="text"/>
<h6>password</h6>
<input type="password"/>
</form>
<ul>Navigation
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
            </div>

            
        )
    }
}






export default LoginPage 