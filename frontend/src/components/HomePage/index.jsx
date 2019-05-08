
import React from 'react';
import { Link } from 'react-router-dom';
import Todo from '../Todo'

export default class HomePage extends React.Component {


    render() {
        return (
            <div>
                <p>

                    <Link to="/login">Logout</Link>
                </p>
                <Todo />
            </div>
        );
    }
}



