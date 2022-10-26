import "./navbar.sass";
import React, { Component } from "react";
import parse from "html-react-parser";


import infoNav from "../../DATA/infoNav";
import NavAcronyms from "./NavAcronyms";
import NavCollapse from './NavCollapse';

// import { Collapse, Button } from 'react-bootstrap'
// import CollapseHook from "../timeline_files/CollapseHook";


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
            );
        });


        return (
            <div id="nav1">
                <NavAcronyms />

                <NavCollapse
                    collapsedTitle={"Nav Menu"}

                    collapsedText={

                        < div className="nav-buttons"  >
                            {NavButtons}
                        </div>
                    }
                />



            </div >
        );
    }
}

export default NavMain;
