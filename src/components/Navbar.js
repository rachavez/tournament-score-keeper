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
                        <a className="navbar-brand" href="#">Score Keeper</a>
                    </div>
                </div> <!-- end of div "container-fluid" in nav bar -->
            </nav>
        );
    }
}

Navbar.propTypes = propTypes