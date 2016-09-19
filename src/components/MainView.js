import React from 'react'
import Header from './Header-static'
import Navbar from './Navbar'

const propTypes = {

};

export default class MainView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <Header />
                </div>
            </div>
        );
    }
}

MainView.propTypes = propTypes;
