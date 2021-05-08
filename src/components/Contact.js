import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import data from '../myData';

import '../styles/contact.sass';
import '../App.sass'

class Contact extends Component {

    goToLink = (e) => {
        e.preventDefault()
        let a = e.currentTarget.name
        window.open(a, '_blank')
    }


    render() {
        return (

            <div id='Contact' className='fullscreen dark darker'>

                <h1 className='section_title'>Connect</h1>

                <div className='section_column'>
                    <label className='lbl_email'>andrei.popa.dev@gmail.com</label>

                    <button className='btn_email' onClick={() => navigator.clipboard.writeText('andrei.popa.dev@gmail.com').then(() => alert('Copied to clipboard. Use it only for good.'))}>Copy address</button>
                </div>

                <div className='section_row' style={{ flexWrap: 'wrap', maxWidth: '80%', margin: 'auto' }}>
                    {data.links.map((link, index) => (

                        <Button
                            //target='blank'
                            //as={"link"}
                            name={link.url}
                            title={link.url}
                            size={"md"}
                            className='link_google'
                            //style={{ width: '15%' }}
                            onClick={this.goToLink}
                            key={index}
                        >{link.name}</Button>

                    ))}
                </div>


                <div
                    className='footer'
                    fixed="bottom"
                >
                    <span>End of site.<br />Made with React and ❤ (but mostly React) | Andrei Popa 2020</span>
                </div>

            </div>

        );
    }
}

export default Contact;