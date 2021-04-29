import React, { Component } from 'react';
import '../styles/footer.sass';


class Footer extends Component {
    //state = {}

    render() {
        return (

            <div className='footer' fixed="bottom">
                    <span>End of site.<br/>Made with React JS and ❤ (but mostly React) | Andrei Popa 2020</span>
            </div>
        );
    }
}

export default Footer;