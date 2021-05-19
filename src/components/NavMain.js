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

var infoAcronyms = [
  {
    term: "ETBD",
    meaning: "evolutionary theory of behavior dynamics",
    link: "www",
  },
  { term: "COD", meaning: "Changeover Delay", link: "www" },
  {
    term: "Hamming Distance",
    meaning:
      "The number of diferences between two bit strings of equal length; in strings 1110 and 0011 one bit is the same and three are different, so the Hamming Distance = 3.",
    link: "https://en.wikipedia.org/wiki/Hamming_distance",
  },
  {
    term: "ABAI",
    meaning: "Association for Behavior Analysis International",
    link: "https://www.abainternational.org/welcome.aspx",
  },
  // {
  //   term: "SQAB",
  //   meaning: "Society for Quantitative Analysis of Behavior",
  //   link: "https://www.sqab.org/",
  // },
  {
    term: "IRB",
    meaning: "Institutional Review Board",
    link: "http://www.irb.emory.edu/",
  },

  {
    term: "ETD",
    meaning: "Emory Theses and Disertations",
    link: "https://etd.library.emory.edu/",
  },

  {
    term: "WCALB",
    meaning: "Winter Conference of Learning and Behavior",
    link: "WWWWWWW",
  },
];

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
      .getElementById("ch1")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toChapter2 = (e) => {
    e.preventDefault();
    document
      .getElementById("ch2")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toChapter3 = (e) => {
    e.preventDefault();
    document
      .getElementById("ch3")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  toChapter4 = (e) => {
    e.preventDefault();
    document
      .getElementById("ch4")
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
      <Popover id="popover-basic" className="pop-over">
        <Popover.Content>
          <table className="table_acronyms">
            {infoAcronyms.map((item) => {
              return (
                <tr>
                  <td>
                    <b>{item.term}</b>
                  </td>
                  <td> {item.meaning} </td>
                </tr>
              );
            })}
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
          {"acronyms"}
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
          title="one"
          style={{ borderRadius: "25px" }}
        >
          2007 - 2010
        </button>
        <button
          onClick={this.toChapter2}
          title="two"
          style={{ borderRadius: "25px" }}
        >
          2011 - 2013
        </button>
        <button
          onClick={this.toChapter3}
          title="three"
          style={{ borderRadius: "25px" }}
        >
          2014 - 2018
        </button>
        <button
          onClick={this.toChapter4}
          title="four"
          style={{ borderRadius: "25px" }}
        >
          2018 - 2019
        </button>
        <button
          onClick={this.toRecent}
          title="current projects"
          style={{ borderRadius: "5px" }}
        >
          Current projects
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
