
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
                        Hi, I'm
                        <span
                        // style={{ color: "#45a085" }}
                        // style={{ color: "#007bff", opacity: ".5" }}

                        > Dr. Andrei Popa
                        </span>
                    </p>


                    <p className='inset-subtitle' key={nanoid()}  >
                        Researcher, puzzle enthusiast, and temporary  <br /> survivor of <a href='https://en.wikipedia.org/wiki/Factitious_disorder_imposed_on_another'
                        >Munchausen Syndrome by Proxy</a>
                    </p>

                    <p className='inset-subtitle1' key={nanoid()}  >
                        More about my backstory at<br /> <a href='https://ap-dev1.github.io/andreipopa515/'
                        >https://ap-dev1.github.io/andreipopa515</a>
                    </p>


                    <div
                        role='button'
                        className='btn-cnt'
                        key={nanoid()}
                        onClick={this.scrollToProfile}
                    >
                        About me
                    </div>

                </div>


                <NavMain />



            </div>
        );
    }
}

export default HeaderSection;
