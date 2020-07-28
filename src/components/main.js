import React from "react";
import Banner_Home from "./main/Banner_home";
import O_que_e from "./main/Por_que";
import Por_que from "./main/O_que_e";
import Contato from "./main/Contato";



export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Banner_Home />
                <Por_que />
                <O_que_e />
                <Contato />
            </div>
        )
    }
}