import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '.../myData.js'
import {Link} from 'react-scroll'

import '../styles/header.css'

import '../styles/common_styles.css'
import '../styles/buttons.css'

class Header extends Component {
    state = {}

    render() {
        return (


            <div className='Section' style={{ marginTop: '10em' }}>

                <Fade bottom>
                    <div className='section_column'>

                        <p className='header-title'>
                            Hi, I'm <span style={{ color: '#02aab0' }}>Andrei Popa</span>
                        </p>


                        <p className='header-title'>
                            {data.headerTagline[1]}
                        </p>


                        <p className='header-title'>
                            <Link 
                                to='about'
                                spy={true}
                                activeClass='active'
                                smooth={true}
                                className='fake_button'
                                >Continue</Link>
                        </p>


                    </div>
                </Fade>
            </div>





        );
    }
}

export default Header;