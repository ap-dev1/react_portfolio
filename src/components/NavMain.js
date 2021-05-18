import React, { Component } from "react";
//import NavMainInfo from "./NavMainInfo.js"
import "../styles/navbar.sass";

import infoOrange from "../assets/info-orange.png";
import infoGreen from "../assets/info_green.png";

import parse from "html-react-parser";
import {
  Popover,
  Button,
  OverlayTrigger,
  Navbar,
  NavDropdown,
  Nav,
} from "react-bootstrap";

var nav_main_info =
  "<b>ABAI</b>: Association for Behavior Analysis International<br/> <b>C&D</b>: Cognition and Development<br/> <b>WCALB</b>: Winter Conference of Learning and Behavior<br/>  <b>Emory ETD</b>: Emory Theses and Disertations<br/>";

var headers = [
  "About",
  "RecentProjects",
  "Chapter1",
  "Chapter2",
  "Chapter3",
  "Chapter4",
  "Contact",
];

class NavMain extends Component {
  toAbout = (e) => {
    e.preventDefault();

    document
      .getElementById("About")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toRecent = (e) => {
    e.preventDefault();
    document
      .getElementById("RecentProjects")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toChapter1 = (e) => {
    e.preventDefault();
    document
      .getElementById("Chapter1")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toChapter2 = (e) => {
    e.preventDefault();
    document
      .getElementById("Chapter2")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toChapter3 = (e) => {
    e.preventDefault();
    document
      .getElementById("Chapter3")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toChapter4 = (e) => {
    e.preventDefault();
    document
      .getElementById("Chapter4")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toContact = (e) => {
    e.preventDefault();
    document
      .getElementById("Contact")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const popover1 = (
      <Popover id="popover-basic" style={{ width: "auto", opacity: 0.8 }}>
        {/* <Popover.Title as="h3"></Popover.Title> */}
        <Popover.Content>
          <table style={{ fontSize: ".8rem" }}>
            <tr style={{ margin: ".2rem" }}>
              <td style={{ margin: ".2rem" }}>
                <b>ETD</b>
              </td>
              <td
                style={{
                  textAlign: "left",
                  overflowWrap: true,
                  width: "fit-content",
                }}
              >
                Emory Theses and Dissertations
              </td>
            </tr>

            <tr style={{ margin: ".2rem" }}>
              <td style={{ margin: ".2rem" }}>
                <b>IRB</b>
              </td>
              <td style={{ textAlign: "left", overflowWrap: true }}>
                Institutional Review Board
              </td>
            </tr>

            <tr style={{ margin: ".2rem" }}>
              <td style={{ margin: ".2rem" }}>
                <b>C&D</b>
              </td>
              <td style={{ textAlign: "left", overflowWrap: true }}>
                Cognition & Development
              </td>
            </tr>

            <tr style={{ margin: ".2rem" }}>
              <td style={{ margin: ".2rem" }}>
                <b>ABAI</b>
              </td>
              <td style={{ textAlign: "left", wordWrap: true }}>
                Association for Behavior Analysis International
              </td>
            </tr>

            <tr style={{ margin: ".2rem" }}>
              <td style={{ margin: ".2rem" }}>
                <b>WCALB</b>
              </td>
              <td style={{ textAlign: "left", overflowWrap: true }}>
                Winter Conference of Learning and Behavior
              </td>
            </tr>
          </table>
        </Popover.Content>
      </Popover>
    );

    var ExampleImg = () => (
      <OverlayTrigger trigger="click" placement="left" overlay={popover1}>
        <button
          id="navInfo"
          style={{
            fontSize: "16px",
            width: "100%",
            marginBottom: "35px",
            fontFamily: "Roboto",
            background: "#023638",
            color: "#78f8a2",
            opacity: 0.9,
          }}
        >
          {" "}
          acronyms
          {/* <img
            src={infoOrange}
            style={{
              width: "25px",
              marginLeft: "10px",
              transform: "scale(.75)",
            }}
          /> */}
        </button>
      </OverlayTrigger>
    );

    return (
      <div id="nav1">
        <ExampleImg />

        <button
          onClick={this.toAbout}
          title="Skills, overview"
          name="About"
          style={{ borderRadius: "5px" }}
        >
          About
        </button>

        <button
          onClick={this.toChapter1}
          title="Chapter 1"
          //style={{ color: "#FFFF00" }}
          style={{ borderRadius: "25px" }}
        >
          2007 - 2010
          <br />
          Hamming COD
        </button>
        <button
          onClick={this.toChapter2}
          title="Chapter 2"
          //style={{ color: "#FFFF00" }}
          style={{ borderRadius: "25px" }}
        >
          2011 - 2013
          <br />
          Computational ADHD
        </button>
        <button
          onClick={this.toChapter3}
          title="Chapter 3"
          //style={{ color: "#4be63d" }}
          style={{ borderRadius: "25px" }}
        >
          2014 - 2017
        </button>
        <button
          onClick={this.toChapter4}
          title="Chapter 4"
          style={{ borderRadius: "25px" }}
        >
          2018 - 2019
        </button>
        <button
          onClick={this.toRecent}
          title="current projects"
          //style={{ color: "#4be63d" }}
          style={{ borderRadius: "5px" }}
        >
          Current work
        </button>
        <button
          id="btnContact"
          onClick={this.toContact}
          title="Contact info"
          style={{ borderRadius: "5px" }}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default NavMain;
