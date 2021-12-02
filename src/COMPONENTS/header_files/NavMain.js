import React, { Component } from "react";

import parse from "html-react-parser";

import "./navbar.sass";

import infoNav from "../../DATA/infoNav";

import NavAcronyms from "./NavAcronyms.js";

//console.log(infoNav)


class NavMain extends Component {


    navigateToSection(e) {
        e.preventDefault();

        if (document.getElementsByClassName("currentView").length > 0) {
            document.getElementsByClassName("currentView")[0].classList.remove("currentView")
        }

        // set class:
        e.currentTarget.classList.add("currentView")

        // navigate:
        var mySection = e.currentTarget.name;

        document
            .getElementById(mySection)
            .scrollIntoView({ block: "start", behavior: "smooth" })
    }



    // navigate to target element sectionName
    highlightSectionTab(sectionNode) {
        if (document.getElementsById("currentView").length > 0) {
            document.getElementsByClassName("currentView")[0].classList.remove("currentView")
        }
        sectionNode.classList.add("currentView")
    }


    detectScrollLocation = () => {
        document.onscroll = (event) => {
            console.log(window.scrollY)
        }
    }

    render() {

        var NavButtons = infoNav.map((item) => {

            return (
                <button
                    onClick={this.navigateToSection}
                    id={"btn" + item.sectionID}
                    key={item.info} // definetely different
                    name={item.sectionID}
                    title={item.info}
                    className={item.btnClass}
                >
                    {parse(item.btnText)}
                </button>


                // <button
                //     onClick={this.navigateToSection}
                //     id={"btn" + item.id}
                //     key={"btn" + item.id}
                //     name={item.id}
                //     title={item.info}
                //     className={item.class}
                // >
                //     {parse(item.name)}
                // </button>
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
