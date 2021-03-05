import React, { Component } from 'react';
import data from '../myData';
import '../styles/contact.css';
import {Button} from 'react-bootstrap';
import '../styles/common_styles.css'

class Contact extends Component {
 
    goToLink = (e) => {
        e.preventDefault()
        let a = e.currentTarget.name
        window.open(a, '_blank')
      }


    render() {
        return (

                <div id='Contact'>
                    <h1 className='section_title'>Connect</h1>


                    <div className='section_column'>
                        <label className='lbl_email'>andrei.popa.dev@gmail.com</label>

                        <button className='btn_email' onClick={() => navigator.clipboard.writeText('andrei.popa.dev@gmail.com').then(() => alert('Copied to clipboard. Use it only for good.'))}>Copy address</button>
                    </div>

                    <div className='section_row' style={{ flexWrap: 'wrap' }}>
                        {data.links.map((link, index) => (

                            <Button
                                //target='blank'
                                //as={"link"}
                                name={link.url}
                                title={link.url}
                                size={"lg"}
                                className='link_google'
                                style={{ width: '25%' }}
                                onClick={this.goToLink}
                                key={index}
                            >{link.name}</Button>

                        ))}

                    </div>

                </div>
          
        );
    }
}

export default Contact;