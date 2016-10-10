import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Placeholder from './Placeholder'
import Navbar from './Navbar'
import Footer from './Footer'

const propType = {

};

const Container = (props) => <div>
    <Navbar />
    <div className="container-fluid">
        {props.children}
    </div>
    <Footer />
</div>

const NotFound = () => <h1>404. This page is not found! </h1>

export default class MainView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={hashHistory} >
                <Route path='/' component={Container}>
                    <IndexRoute component={Placeholder} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}