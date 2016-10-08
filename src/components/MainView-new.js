import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class MainView extends Component {
    render() {
        return (
            <Router history={hashHistory} >
                <Route path='/' component={Home} />
                <Route path='/address' component={Address} />
            </Router>
        )
    }
}