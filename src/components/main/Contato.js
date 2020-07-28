import React from "react";
import RedeSocial from "../Redesocial";

export default class Contato extends React.Component {
  render() {
    return (
      <div className="box_4" id="contato">
        <h2 className="global_title contato" data-aos="fade-up">
          Contato
        </h2>
        <div className="flex" data-aos="fade-up">
          <RedeSocial />
        </div>
      </div>
    );
  }
}
