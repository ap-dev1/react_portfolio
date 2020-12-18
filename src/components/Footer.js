import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../styles/footer.css';


class Footer extends Component {
    //state = {}

    render() {
        return (

            <div className='footer'>

                <Fade bottom>

                    <span>End of site.<br/>Made with React JS and ❤ (but mostly React) | Andrei Popa 2020</span>

                </Fade>

    
            </div>
        );
    }
}

export default Footer;