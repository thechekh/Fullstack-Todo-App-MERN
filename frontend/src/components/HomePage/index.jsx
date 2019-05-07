
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Todo from '../Todo'

class HomePage extends React.Component {


    render() {
        const { user } = this.props;
 
        return (
            <div className="col-md-12 ">
                <p>Firstname:{user.firstName} <br/>
                    Last name:{user.lastName} <br/>
                    Login:{user.login} <br/>

                    <Link to="/login">Logout</Link>
                </p>
                <Todo />
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage }; 
