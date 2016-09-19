import React from 'react';

const propTypes = {

};

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p className="text-muted">This website for entertainment purposes only. &copy; 2016 Chavez Designs</p>
                </div>
            </footer>
        );
    }
} 

Footer.propTypes = propTypes