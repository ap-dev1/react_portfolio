import React, { Component } from "react";
import NavMain from "./NavMain";

import "./header.sass";
import "./navbar.sass";



class HeaderSection extends Component {


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
                        Hi, I'm <span style={{ color: "#45a085" }}>Andrei Popa</span>
                    </p>
                    <p>I do research and development</p>
                    <p>

                        <button onClick={this.scrollToProfile}>Continue</button>
                    </p>
                </div>

                <NavMain />

            </div>
        );
    }
}

export default HeaderSection;
