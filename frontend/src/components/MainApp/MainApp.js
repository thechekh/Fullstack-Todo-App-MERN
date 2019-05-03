import React from 'react';
import { Router, Route } from 'react-router-dom';
import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import RegisterPage from '../RegisterPage'
import { connect } from 'react-redux';
class MainApp extends React.Component {

    render() {
        const { alert } = this.props;
        return (
           
                   
                        <Router >
                            <div>
                                <Route exact path="/"  component={HomePage}  />
                                <Route path="/login" component={LoginPage } />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
         
        );
    }
}


export default  MainApp 