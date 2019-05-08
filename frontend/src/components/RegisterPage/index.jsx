import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from './register_actions'


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        login: '',
        firstName: '',
        lastName: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
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
      <div>
        <h2>Register</h2>
        <form name="register-form" onSubmit={this.handleSubmit}>
   

          <div>
            <label >Login</label>
            <input type="text" name="login" value={user.login} onChange={this.handleChange} />
            {submitted && !user.login &&
              <div>Login is required</div>
            }
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={user.password} onChange={this.handleChange} />
            {submitted && !user.password &&
              <div>Password is required</div>
            }
          </div>
          <div>
            <button>Register</button>

            <Link to="/login">Cancel</Link>
       
           
          </div>
        </form>
      </div>
    );
  }
}



const connectedRegisterPage = connect(null,{register})(RegisterPage);
export { connectedRegisterPage as RegisterPage };

