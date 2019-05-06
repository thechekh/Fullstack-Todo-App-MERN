import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


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
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { login, password } = this.state;
        const { dispatch } = this.props;
        if (login && password) {
          /*   dispatch action login */
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { login, password, submitted } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form name="login-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Login</label>
                        <input type="text"  name="login" value={login} onChange={this.handleChange} />
                        {submitted && !login &&
                            <div>Login is required</div>
                        }
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div>Password is required</div>
                        }
                    </div>
                    <div>
                        <button>Login</button>
                  
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}
/* 
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export defalt { connectedLoginPage as LoginPage };  */
export default LoginPage 

