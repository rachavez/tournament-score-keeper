import React from 'react'

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
            <footer class="footer">
                <div class="container">
                    <p class="text-muted">This website for entertainment purposes only. &copy; 2016 Chavez Designs</p>
                </div>
            </footer>
        );
    }
} 

Navbar.propTypes = propTypes