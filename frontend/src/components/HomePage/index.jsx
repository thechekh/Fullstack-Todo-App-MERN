
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Todo from '../Todo'

class HomePage extends React.Component {
  

    render() {
      /*   const { user} = this.props; */
        return (
            <div className="col-md-12 ">
                <p>First name  Last name  Login</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <Todo />
            </div>
        );
    }
}
/* 
 function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
} 

 const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };  */
export default HomePage