import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import icon_top from "./image/icon_top.svg";

export default class Footer extends React.Component {
  render() {
    window.onscroll = () => {
      var btn_to_top = window.scrollY;
      var icon_top = document.querySelector(".icon_top");
      if (btn_to_top > 100) {
        icon_top.classList.add("active");
      } else {
        icon_top.classList.remove("active");
      }
    };
    return (
      <>
        <div className="footer"></div>
        <AnchorLink href="#home" className="icon_top">
          <img src={icon_top}></img>
        </AnchorLink>
      </>
    );
  }
}
