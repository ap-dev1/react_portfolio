import React, { Component } from "react";
import NavAcronyms from "../NavAcronyms.js";
import NavMainIndicator from "./NavMainIndicator";

import "../styles/navbar.sass";

import parse from "html-react-parser";
import infoNav from "../../data/infoNav"



class NavMainMiniMap extends Component {

    navigateToSection(e) {
        e.preventDefault();
        var mySection = e.currentTarget.name;
        document
            .getElementById(mySection)
            .scrollIntoView({ block: "start", behavior: "smooth" })

    }

    render() {

        var NavButtons = infoNav.map((item) => {
            return (
                <button
                    onClick={this.navigateToSection}
                    id={"btn" + item.id}
                    key={"btn" + item.id}
                    name={item.id}
                    title={item.info}
                    className={item.class}
                >
                    {parse(item.name)}
                </button>
            );
        });


        return (
            <div id="nav11">
                <NavAcronyms />
                <NavMainIndicator />
                {NavButtons}
            </div>
        );
    }
}

export default NavMainMiniMap;
