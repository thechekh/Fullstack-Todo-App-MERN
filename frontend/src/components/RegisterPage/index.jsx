import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


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
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
      /*       dispatch(userActions.register(user)); */
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div>
                <h2>Register</h2>
                <form name="register-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input type="text"name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div>First Name is required</div>
                        }
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div>Last Name is required</div>
                        }
                    </div>
                    <div>
                        <label >Username</label>
                        <input type="text"  name="login" value={user.login} onChange={this.handleChange} />
                        {submitted && !user.login &&
                            <div>Username is required</div>
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
                        <br/>
                        <Link to="/">Home(TODO)</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default RegisterPage
/* function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage }; */

