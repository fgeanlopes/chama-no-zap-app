import React from 'react';
import Nav from "./header/Nav";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Nav />
            </div >
        )
    }
}