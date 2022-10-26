
import "./header.sass";
import { Fade } from "react-reveal"
import { nanoid } from "nanoid"
import React, { Component } from "react";

import NavMain from "./NavMain";


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
            <div
                id='Header'
                key={nanoid()}
            >

                <div className='div-inset' key={nanoid()}>

                    <p className='inset-title' key={nanoid()} >
                        Hi, I'm Dr. Andrei Popa.
                    </p>

                    <p className='inset-subtitle' key={nanoid()}  >
                        Psychologist. Web developer. Puzzle enthusiast.
                    </p>

                    <div
                        role='button'
                        className='btn-cnt'
                        key={nanoid()}
                        onClick={this.scrollToProfile}
                    >
                        Continue
                    </div>

                </div>


                {/* <div id="columnHeader">
                    <p>
                        Hi, I'm <span style={{ color: "#45a085" }}>Dr. Andrei Popa.</span>
                    </p>
                    <p>I do research and development.</p>
                    <p>
                        <button onClick={this.scrollToProfile}>Continue</button>
                    </p>
                </div> */}



                <NavMain />



            </div>
        );
    }
}

export default HeaderSection;
