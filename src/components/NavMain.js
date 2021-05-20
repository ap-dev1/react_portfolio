import React, { Component } from "react";
import NavAcronyms from "./NavAcronyms.js";
import "../styles/navbar.sass";

import parse from "html-react-parser";

import {
  Popover,
  Button,
  OverlayTrigger,
  Navbar,
  NavDropdown,
  Nav,
} from "react-bootstrap";

var infoSections = [
  {
    id: "About",
    name: "Profile",
    color: "#fff",
    background: "#000000",
    borderRadius: "5px",
    padding: "1rem 1.7rem",
    info: "about",
  },
  {
    id: "ch1",
    name: "2007 - 2010",
    color: "#f9f9f9",
    background: "#000000",
    borderRadius: "25px",
    padding: ".5rem 1.2rem",
    info: "ETBD, Hamming Distances, Changeover Delay, Masters Thesis",
  },
  {
    id: "ch2",
    name: "2011 - 2013",
    color: "#f9f9f9",
    background: "#000000",
    borderRadius: "25px",
    padding: ".5rem 1.2rem",
    info: "Mutation, DMN, ADHD, Fast Matching, Dissertation",
  },
  {
    id: "ch3",
    name: "2014 - 2018",
    //color: "#45a085",
    color: "#f9f9f9",
    background: "#000000",
    borderRadius: "25px",
    padding: ".5rem 1.2rem",
    info: "Beyond positive reinforcement: aversive conditioning, stimulus control",
  },
  {
    id: "ch4",
    name: "2018 - 2019",
    color: "#f9f9f9",
    background: "#000000",
    borderRadius: "25px",
    info: "The dynamics of human development",
    padding: ".5rem 1.2rem",
  },
  {
    id: "RecentProjects",
    name: "Recent projects",
    color: "#fff",
    background: "#000000",
    borderRadius: "5px",
    padding: "1rem 1.7rem",
    info: "React, Node, Python, web sockets, etc..",
  },
  //{ id: "Courses", name: "Courses", color: "#fff", info: "info" },
  {
    id: "Contact",
    name: "Contact",
    color: "#fff",
    background: "#000000",
    borderRadius: "5px",
    //info: "online ",
    padding: "1rem 1.7rem",
  },
];

class NavMain extends Component {
  navigateToSection(e) {
    e.preventDefault();
    var mySection = e.currentTarget.name;
    document
      .getElementById(mySection)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }

  render() {
    var NavButtons = infoSections.map((item) => {
      return (
        <button
          onClick={this.navigateToSection}
          name={item.id}
          title={item.info}
          style={{
            //borderRadius: item.borderRadius,
            color: item.color,
            //backgroundColor: item.background,
            backgroundColor: "#070c0a",
          }}
        >
          {item.name}
        </button>
      );
    });

    return (
      <div id="nav1">
        <NavAcronyms />
        {NavButtons}
      </div>
    );
  }
}

export default NavMain;
