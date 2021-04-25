
import React, { Component } from "react"
import "../styles/navbar.sass";


class NavMain extends Component {

    toAbout = (e) => {
        e.preventDefault()
        document.getElementById('About').scrollIntoView({ block: 'start', behavior: 'smooth' })
    };

    toRecent = (e) => {
        e.preventDefault()
        document.getElementById('RecentProjects').scrollIntoView({ block: 'start', behavior: 'smooth' })
    };

    toTimeline = (e) => {
        e.preventDefault()
        document.getElementById('MyTimeline').scrollIntoView({ block: 'start', behavior: 'smooth' })
    };

    toContact = (e) => {
        e.preventDefault()
        document.getElementById('Contact').scrollIntoView({ block: 'start', behavior: 'smooth' })
    };

    render() {
        return (
            <div id='nav1'>

                <button id='btnAbout'
                    onClick={this.toAbout}
                    title="Skills, overview">About</button>

                <button id='btnRecent'
                    onClick={this.toRecent}
                    title="Recent projects, continuous education">Recent</button>

                <button id='btnTimeline'
                    onClick={this.toTimeline}
                    title="Professional trajectory">Timeline</button>

                <button id='btnContact'
                    onClick={this.toContact}
                    title="Contact info">Contact</button>


            </div>
        );
    }
}

export default NavMain;