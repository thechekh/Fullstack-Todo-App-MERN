
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Todo from '../Todo'

class HomePage extends React.Component {
    
    render() {
     
        const active=this.props.active;
        console.log("USER ACTIVE",active);
        return (

            <div>
                <Todo />
                {active ?  <p>Ваша запись активирована</p>: <p>Активируйте вашу учетную запись</p>}
                <Link to="/login" onClick="{history.push('/')}" className="register-button">Logout</Link>
                
            </div>
        );
    }


  
}
function mapStateToProps(state) {
    const { active} = state.authentication.user;
    return {
        active
    };
}

export default connect( mapStateToProps)(HomePage);



