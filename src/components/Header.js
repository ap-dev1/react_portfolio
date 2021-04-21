
import React, { Component } from "react"
import data from '../myData.js'
import "../styles/header.sass";



class Header extends Component {

    scrollToProfile = (e) => {
        e.preventDefault()
        document.getElementById('About').scrollIntoView({ block: 'end', behavior: 'smooth' })
    };

    render() {
        return (
            <div id='myHeader'>
                <div id='columnHeader'>
                    <p> Hi, I'm <span style={{ color: '#02aab0' }}>Andrei Popa</span> </p>
                    <p> {data.headerTagline[1]} </p>
                    <p> <button onClick={this.scrollToProfile}>Continue</button> </p>
                </div>
            </div>

        );
    }
}

export default Header;