import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from './register_actions'
import './style.css'

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        login: '',
        email: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleChangeEmail(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }



  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;

    if (user.login && user.password) {
      this.props.register(this.state.user)
    }
  }

  render() {
    const { user, submitted } = this.state;
    return (
      <div className="register-block">

        <form name="register-form" className="register-form" onSubmit={this.handleSubmit}>



          <h2>Register</h2>
          <div className="login-block">
            <label >Login</label>
            <input type="text" className="login-field" name="login" value={user.login} onChange={this.handleChange} />
            {submitted && !user.login &&
              <div>Login is required</div>
            }
          </div>
          <div className="login-block">
            <label >Email</label>
            <input type="text" className="login-field" name="email" value={user.email} onChange={this.handleChangeEmail} />
            {submitted && !user.email &&
              <div>Email is required</div>
            }
          </div>
          <div className="password-block">
            <label>Password</label>
            <input type="password" className="password-field" name="password" value={user.password} onChange={this.handleChange} />
            {submitted && !user.password &&
              <div>Password is required</div>
            }
          </div>
          <div>

            <Link to="/login" className="cancel-button">Cancel</Link>
            <button className="register-button">Register</button>




          </div>
        </form>
      </div>
    );
  }
}



const connectedRegisterPage = connect(null, { register })(RegisterPage);
export { connectedRegisterPage as RegisterPage };

