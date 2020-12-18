import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '.../myData';
import '../styles/contact.css';


class Contact extends Component {
    state = {}

    render() {
        return (


            <Fade bottom cascade>
                <div className='Section background_color'>
                    <h1 className='section_title'>Connect</h1>


                    <div className='section_column'>
                        <label className='lbl_email'>andrei.popa.dev@gmail.com</label>

                        <button className='btn_email' onClick={() => navigator.clipboard.writeText('andrei.popa.dev@gmail.com').then(() => alert('Copied to clipboard. Use it only for good.'))}>Copy address</button>
                    </div>

                    <div className='section_row' style={{ flexWrap: 'wrap' }}>
                        {data.links.map((link, index) => (

                            <a
                                target='blank'
                                href={link.url}
                                className='link_google'
                                style={{ width: '25%' }}
                            >
                                {link.name}

                            </a>
                        ))}

                    </div>

                </div>
            </Fade>
        );
    }
}

export default Contact;