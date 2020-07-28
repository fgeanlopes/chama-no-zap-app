import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="navbar">
                <AnchorLink href='#oquee'><p>O que é?</p></AnchorLink>
                <AnchorLink href='#porque'><p>Porque?</p></AnchorLink>
                <AnchorLink href='#contato'><p>Contato</p></AnchorLink>
            </div>
        )
    }
}