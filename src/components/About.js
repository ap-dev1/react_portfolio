import React, { Component } from 'react'
import data from '../myData'
//import parse from 'html-react-parser'

import infoSkills from "../data/infoSkills"
import "../styles/about.sass";


class About extends Component {

    // state={
    //     gDrive: 'https://drive.google.com/drive/folders/1d6QlunZ_zh-mTXB1H2u0C5DQC7Vjmq5U'
    // };

    // scrollToTimeline = (e) => {
    //     e.preventDefault()
    //     document.getElementById('MyTimeline').scrollIntoView({ block: 'start', behavior: 'smooth' })
    // };

    // goToCredentials = (e) => {
    //     e.preventDefault()
    //     let gDrive = this.state.gDrive
    //     window.open(gDrive, '_blank')
    // };

    
    render() {

        var Skills = infoSkills.skills.map((item) => {
            return (
                <label style={{ background: item.color, opacity: item.opacity }}>{item.name}</label >
            )
        })


        return (

            <div id='About'  className='fullscreen dark'>

                <h1 >About me</h1>

                <div className='AboutRow'>

                    <div className='AboutColumn'>
                        {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge' height='400px'></img> : null}
                    </div>


                    <div className='AboutColumn'>
                        <p className='narrative' >{data.aboutText}</p>

                        <div className='divSkills'>
                            {Skills}
                        </div>

                        {/* <div className='AboutButtons'>
                            <button onClick={this.goToCredentials}
                            title={this.state.gDrive}>go to credentials</button>
                        </div> */}

                    </div>

                </div>

                

            </div>

        );
    }
}

export default About;