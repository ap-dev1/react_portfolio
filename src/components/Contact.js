import React, { Component } from 'react';
//import Fade from 'react-reveal/Fade';
import data from '../myData';
import '../styles/contact.css';
//import { Link } from 'react-router-dom';
//import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Contact extends Component {
 
    goToLink = (e) => {
        e.preventDefault()
        //window.location.replace(`https://${this.url}`)
        let a = e.currentTarget.name

        console.log("e.currentTarget.name: ", a)

        // let b = a.name
        // console.log("destination: ", b)
        //window.location.href = (a, "_blank")
        window.open(a, '_blank')
        //window.location.href = `/${this.props.match.params.user}/${this.props.match.params.sessionId}
      }


    render() {
        return (


            
                <div className='Section background_color'>
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