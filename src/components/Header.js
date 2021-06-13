import React, { Component } from "react";
import data from "../myData.js";
import NavMain from "./NavMain";

import "../styles/header.sass";
import "../styles/navbar.sass";
// #02AAB0 - Andrei Popa color, the light-ush cyan.
// #1B4D3E - The brain is not a computational machine



class Header extends Component {


    scrollToProfile = (e) => {
        e.preventDefault();
        document
            .getElementById("About")
            .scrollIntoView({ block: "end", behavior: "smooth" });
        document.getElementById("nav1").style.opacity = 0.9;
    };



    render() {
        return (
            <div id="myHeader" className="fullscreen light">
                <div id="columnHeader">
                    <p>
                        {" "}
            Hi, I'm <span style={{ color: "#45a085" }}>Andrei Popa</span>{" "}
                    </p>
                    <p> {data.headerTagline[1]} </p>
                    <p>
                        {" "}
                        <button onClick={this.scrollToProfile}>Continue</button>{" "}
                    </p>
                </div>

                <NavMain />

            </div>
        );
    }
}

export default Header;
