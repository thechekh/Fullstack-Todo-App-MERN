import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './login_actions'
import { logout } from './login_actions'
import './style.css';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.logout();

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { login, password } = this.state;

        if (login && password) {
            this.props.login(login, password)
        }
    }

    render() {

        const { login, password, submitted } = this.state;
        return (
            <div className="auth-block">

                <form name="auth-form" className="auth-form" onSubmit={this.handleSubmit}>
                    <h2>Login  Form</h2>
                    <div className="login-block">
                        <label>Login</label>
                        <input className="login-field" type="text" name="login" value={login} onChange={this.handleChange} />
                        {submitted && !login &&
                            <div>Login is required</div>
                        }
                    </div>
                    <div className="password-block">
                        <label>Password</label>
                        <input type="password" className="password-field" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div>Password is required</div>
                        }
                    </div>
                    <div>
                        <button className="login-button">Login</button>

                        <Link to="/register" className="register-button">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}



const connectedLoginPage = connect(null, { login, logout })(LoginPage);
export { connectedLoginPage as LoginPage };



