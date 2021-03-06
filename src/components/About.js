import React, { Component } from 'react';
import data from '../myData';
import '../styles/sassStyles.sass';
import parse from 'html-react-parser';
import "../App.css"

class About extends Component {

    state={
        gDrive: 'https://drive.google.com/drive/folders/1d6QlunZ_zh-mTXB1H2u0C5DQC7Vjmq5U'
    };

    scrollToProjects = (e) => {
        e.preventDefault()
        document.getElementById('Projects').scrollIntoView({ block: 'start',  behavior: 'smooth' })
    };

    goToCredentials = (e) => {
        e.preventDefault()
        let gDrive = this.state.gDrive
        window.open(gDrive, '_blank')
    };

    render() {
        
        return (

            <div id='About'>

                <h1 >About me</h1>

                <div className='AboutRow'>

                    <div className='AboutColumn'>
                        {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge' height='400px'></img> : null}
                    </div>

                    <div className='AboutColumn'>

                        <p className='narrative' >{data.aboutText}</p>
                        <br></br>
                        
                        <p className='skills'>{parse(data.aboutTech)}</p>
                        <br></br>

                        <div className='AboutButtons'>
                            <button onClick={this.goToCredentials}
                            title={this.state.gDrive}>go to credentials</button>
                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default About;