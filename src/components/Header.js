import React, { Component } from 'react';
import data from '../myData.js'
import '../styles/header.css'

class Header extends Component {

    scrollTo = (e) => {
        e.preventDefault()
        document.getElementById('About').scrollIntoView({ block: 'end',  behavior: 'smooth' })
    };


    render() {
        return (


            <div className='Section' style={{marginTop: '0'}}>

               
                    <div className='section_column'>

                        <p className='header-title'>
                            Hi, I'm <span style={{ color: '#02aab0' }}>Andrei Popa</span>
                        </p>


                        <p className='header-title'>
                            {data.headerTagline[1]}
                        </p>

                        <p className='header-title'>
                            <button onClick={this.scrollTo}>Continue</button>
                        </p>

                    </div>



            </div>
        );
    }
}

export default Header;