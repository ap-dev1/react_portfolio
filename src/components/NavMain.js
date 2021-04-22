
import React, { Component } from "react"
import "../styles/navbar.sass";


class NavMain extends Component {

    toAbout = (e) => {
        e.preventDefault()
        document.getElementById('About').scrollIntoView({ block: 'end', behavior: 'smooth' })
    };

    toRecent = (e) => {
        e.preventDefault()
        document.getElementById('RecentProjects').scrollIntoView({ block: 'start', behavior: 'smooth' })
    };

    toTimeline = (e) => {
        e.preventDefault()
        document.getElementById('MyTimeline').scrollIntoView({ block: 'start', behavior: 'smooth' })
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
                    
            </div>
        );
    }
}

export default NavMain;