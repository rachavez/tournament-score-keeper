import React from 'react';

const propTypes = {

};

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="./index.html">Score Keeper</a>
                    </div>
                </div> 
            </nav>
        );
    }
}

Navbar.propTypes = propTypes