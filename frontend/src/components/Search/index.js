import React, { Component } from 'react';
import {searchTask} from '../../AC'
import {connect} from 'react-redux'
import SearchIco from './ico-search.svg';
import './style.css';

class Search extends Component {

     state = {
         searchText: ''
    }

     
    
    

    handleChange = ev => {

        this.setState({
            searchText: ev.target.value
        },() => {
            const {searchTask} = this.props
            searchTask(this.state.searchText)
        })
    }

    handleKeyPress = ev => {
        if (ev.key === 'Enter') {
            ev.preventDefault()
        }
    }

    render() {
        return (
            <div className="search">
                <form className="search__form">
                    <img src={SearchIco} className="search__ico" alt="search"/>
                    <input className="search__input" type="search"
                           placeholder="Search task"
                           autoComplete="off" autoCorrect="off" autoCapitalize="off"
                           spellCheck="false" required=""
                           value={this.state.searchText}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress}
                    />
                </form>
            </div>
        );
    }
}

export default connect(null, {searchTask})(Search);