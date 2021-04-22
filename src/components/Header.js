
import React, { Component } from "react"
import data from '../myData.js'
import NavMain from "./NavMain"
import "../styles/header.sass"
import "../styles/navbar.sass";



class Header extends Component {

    scrollToProfile = (e) => {
        e.preventDefault()
        document.getElementById('About').scrollIntoView({ block: 'end', behavior: 'smooth' })
        document.getElementById('nav1').style.opacity = .9
    };
    

    render() {
        return (
            <div id='myHeader'>
                <div id='columnHeader'>
                    <p> Hi, I'm <span style={{ color: '#02aab0' }}>Andrei Popa</span> </p>
                    <p> {data.headerTagline[1]} </p>
                    <p> <button onClick={this.scrollToProfile}>Continue</button> </p>
                </div>

                <NavMain/>
                {/* <div className='navbarDiv' id="nav1">
                    <button title="About">About</button>
                    <button title="Projects">Projects</button>
                    <button title="Timeline">Timeline</button>
                </div> */}

            </div>

        );
    }
}

export default Header;