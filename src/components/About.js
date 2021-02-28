import React, { Component } from 'react';
//import Fade from 'react-reveal/Fade';
import data from '../myData';
import '../styles/about.css';

import '../styles/common_styles.css'
import '../styles/buttons.css'


class About extends Component {
    state = {}

    render() {


        return (

           
                <div className='Section background_color' id='about'>

                    <h1 className='section_title'>About me</h1>



                    <div className='section_row'>


                        <div className='section_column'>
                            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge' height='400px'></img> : null}
                        </div>



                        <div className='section_column'>

                            <p className='about_paragraph'>{data.aboutText}</p>

                            <p className='about_paragraph'>{data.aboutTech}</p>

                            <div className='button_row'>
                                <a
                                    href="https://drive.google.com/drive/folders/1d6QlunZ_zh-mTXB1H2u0C5DQC7Vjmq5U"
                                    target='blank'
                                    className="link_google black_border"
                                ><span className='spanDrive'>gDrive</span> <br />(resume, transcript)
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
           
        );
    }
}

export default About;