import "./about.sass"

import React, { Component } from 'react'
import data from '../../DATA/myData'
import parse from 'html-react-parser'
import { nanoid } from 'nanoid'
import infoSkills from "../../DATA/infoSkills"



class About extends Component {


    render() {

        var Skills = infoSkills.skills.map((item) => {
            return (
                <label key={nanoid()}  >
                    {item.name}
                </label >
            )
        })


        return (

            <div id='About' key={nanoid()} >

                <h1 key={nanoid()}>About me</h1>

                <div className='about-wrapper' key={nanoid()} >

                    <div className='div-picture' key={nanoid()}  >
                        {
                            data.ShowAboutImage ?
                                <img
                                    src={data.aboutImage}
                                    alt='Dr. Andrei Popa'
                                >
                                </img> : null
                        }
                    </div>

                    <div className='about-column'>
                        {
                            data.aboutText.map((item) => {
                                return (
                                    <p className='narrative' >
                                        {item}
                                    </p>
                                )
                            })
                        }

                        <div className='div-tech' >
                            {Skills}
                        </div>

                    </div>


                </div>

            </div>



        );
    }
}

export default About;