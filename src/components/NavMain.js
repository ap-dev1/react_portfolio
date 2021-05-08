
import React, { Component } from "react"
//import NavMainInfo from "./NavMainInfo.js"
import "../styles/navbar.sass"
import infoOrange from "../assets/info-orange.png"
import acronyms from "../assets/acronyms.png"

import parse from 'html-react-parser'
import { Popover, Button, OverlayTrigger, Navbar, NavDropdown, Nav } from "react-bootstrap"

var nav_main_info = "<b>ABAI</b>: Association for Behavior Analysis International<br/> <b>C&D</b>: Cognition and Development<br/> <b>WCALB</b>: Winter Conference of Learning and Behavior<br/>  <b>Emory ETD</b>: Emory Theses and Disertations<br/>"


class NavMain extends Component {

    toAbout = (e) => {
        e.preventDefault()
        document.getElementById('About').scrollIntoView({ block: 'start', behavior: 'smooth' })
    };

    toRecent = (e) => {
        e.preventDefault()
        document.getElementById('RecentProjects').scrollIntoView({ block: 'start', behavior: 'smooth' })
    };

    toParkour = (e) => {
        e.preventDefault()
        document.getElementById('Parkour').scrollIntoView({ block: 'start', behavior: 'smooth' })
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

        const popover1 = (
            <Popover id="popover-basic" style={{ width: 'auto', opacity: .8 }}>
                <Popover.Title as="h3"></Popover.Title>
                <Popover.Content>

                    <table style={{ fontSize: '.8rem' }}>


                        <tr style={{ margin: '.2rem' }}>
                            <td style={{ margin: '.2rem' }}><b>ETD</b></td>
                            <td style={{ textAlign: 'left', overflowWrap: true, width: 'fit-content' }}>Emory Theses and Dissertations</td>
                        </tr>


                        <tr style={{ margin: '.2rem' }}>
                            <td style={{ margin: '.2rem' }}><b>C&D</b></td>
                            <td style={{ textAlign: 'left', overflowWrap: true }}>Cognition & Development</td>
                        </tr>


                        <tr style={{ margin: '.2rem' }}>
                            <td style={{ margin: '.2rem' }}><b>ABAI</b></td>
                            <td style={{ textAlign: 'left', wordWrap: true }}>Association for Behavior Analysis International</td>
                        </tr>

                        <tr style={{ margin: '.2rem' }}>
                            <td style={{ margin: '.2rem' }}><b>WCALB</b></td>
                            <td style={{ textAlign: 'left', overflowWrap: true }}>Winter Conference of Learning and Behavior</td>
                        </tr>

                    </table>

                </Popover.Content>
            </Popover>
        );

        var ExampleImg = () => (
            <OverlayTrigger trigger="click" placement="left" overlay={popover1}>
                <img
                    id='navInfo'
                    src={infoOrange}
                //src={acronyms}

                />

                {/* <Button variant="info">WHAAAT</Button> */}

            </OverlayTrigger>
        )


        return (
            <div id='nav1'>

                {/* <img id='navInfo' src={infoOrange}
                    title={parse(info)} /> */}


                <ExampleImg />

                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse> */}
                
                <button id='btnAbout'
                    onClick={this.toAbout}
                    title="Skills, overview">About</button>

                <button id='btnRecent'
                    onClick={this.toRecent}
                    title="current projects">Current</button>

                <button id='btnParkour'
                    onClick={this.toParkour}
                    title="Background">PARKOUR!</button>

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