import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {HomePage} from '../HomePage'
import {LoginPage} from '../LoginPage'
import {RegisterPage} from '../RegisterPage'
import {Private} from '../Private'

class MainApp extends React.Component {

    render() {
        return (


            <Router >
                <div>
                <Private exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />

                </div>
            </Router>

        );
    }
}


export default MainApp 