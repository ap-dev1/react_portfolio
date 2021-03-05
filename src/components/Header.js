import React, { Component } from 'react';
import data from '../myData.js'
import '../styles/header.css'

class Header extends Component {

    scrollToProfile = (e) => {
        e.preventDefault()
        document.getElementById('About').scrollIntoView({ block: 'end', behavior: 'smooth' })
    };



    render() {
        return (

            <div id='myHeader'>

                <div className='section_column'>

                    <p className='header-title'>
                        Hi, I'm <span style={{ color: '#02aab0' }}>Andrei Popa</span>
                    </p>


                    <p className='header-title'>
                        {data.headerTagline[1]}
                    </p>

                    <br></br>

                    {/* <p className='header-title'>
                        <label onClick={this.scrollToProfile}>Continue in {this.props.secLeft}</label>
                    </p> */}

                    <p className='header-title'>
                        <button onClick={this.scrollToProfile}>Continue</button>
                    </p>

                </div>

            </div>

        );
    }
}

export default Header;