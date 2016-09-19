import React from 'react'
import Header from './Header-static'

const propTypes = {

}

export default class MainView extends React.Component {

    constructor(prop) {
        super(props);
    }

    render() {
        return (
            <Header />
        )
    }
}