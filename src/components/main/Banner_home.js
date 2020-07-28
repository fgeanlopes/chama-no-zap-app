import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import RedeSocial from "../Redesocial";

const AppAndroid =
  "https://play.google.com/store/apps/details?id=com.unidesenvlvimento.chamanozap";

export default class Banner_home extends React.Component {
  render() {
    return (
      <div className="box_1" id="home">
        <div className="sideBar">
          <Router>
            <Link to={{ pathname: AppAndroid }} target="_blank">
              <img
                className="logo_vertical"
                src={"./img/logo_vertical.svg"}
                alt="Chama no zap!"
              />
            </Link>
          </Router>
          <div className="rede_social">
            <RedeSocial />
          </div>
        </div>
        <img
          className="logo_banner"
          data-aos="fade-up"
          src={"./img/logo.svg"}
          alt="Chama no zap!, Desenvolvido por Gean Lopes"
        />
      </div>
    );
  }
}
