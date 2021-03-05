import React, { Component } from 'react';
//import Fade from 'react-reveal/Fade';
import data from '../myData';
import '../styles/sassStyles.sass'

class About extends Component {


    scrollToProjects = (e) => {
        e.preventDefault()
        document.getElementById('Projects').scrollIntoView({ block: 'start',  behavior: 'smooth' })
    };

    goToCredentials = (e) => {
        e.preventDefault()
        let gDrive = 'https://drive.google.com/drive/folders/1d6QlunZ_zh-mTXB1H2u0C5DQC7Vjmq5U'
        window.open(gDrive, '_blank')
    }

    render() {


        return (

            <div id='About'>

                <h1 >About me</h1>

                <div className='AboutRow'>


                    <div className='AboutColumn'>
                        {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge' height='400px'></img> : null}
                    </div>



                    <div className='AboutColumn'>
                        <p >{data.aboutText}</p>
                        <p >{data.aboutTech}</p>

                        <div className='AboutButtons'>

                            <button onClick={this.scrollToProjects}>continue</button>
                            
                            <button onClick={this.goToCredentials}>go to credentials</button>
                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default About;