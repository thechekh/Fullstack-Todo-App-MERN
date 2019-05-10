
import React from 'react';
import { Link } from 'react-router-dom';
import Todo from '../Todo'

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Todo />
                <Link to="/login" onClick="{history.push('/')}" className="register-button">Logout</Link>
                
            </div>
        );
    }
}



