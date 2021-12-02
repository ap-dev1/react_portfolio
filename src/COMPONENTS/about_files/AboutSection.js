import React, { Component } from 'react'
import data from '../../DATA/myData'
//import parse from 'html-react-parser'

import infoSkills from "../../DATA/infoSkills"

import "./about.sass";


class About extends Component {


    render() {

        var Skills = infoSkills.skills.map((item) => {
            return (
                <label
                    style={{ background: item.color, opacity: item.opacity }}
                    key={item.name + Math.random()}
                >
                    { item.name}
                </label >
            )
        })


        return (

            <div id='About' className='fullscreen darker'
                style={{
                    marginBottom: "0rem",
                    // backgroundColor: "#233D46",
                    backgroundColor: "#1d2731", // ivory black

                }}
            >

                <h1 >Profile</h1>

                <div className='AboutRow'>

                    <div id="divProfilePic" className='AboutColumn'>
                        {data.ShowAboutImage ? <img src={data.aboutImage} alt='Dr. Andrei Popa'
                            height='400px' style={{ borderRadius: ".5rem" }}
                        ></img> : null}
                    </div>



                    <div className='AboutColumn'>

                        <p className='narrative' >{data.aboutText}</p>

                        <div className='divSkills' >
                            {Skills}
                        </div>

                        <div className="wrapperEducation">

                            <table id="tableEducation" >
                                <tbody>
                                    <tr>
                                        <td>2003</td>
                                        <td>B.A. in Psychology</td>
                                        <td>Alexandru Ioan Cuza University, Iasi, Romania</td>
                                    </tr>

                                    <tr>
                                        <td>2009</td>
                                        <td>M.A. in Psychology</td>
                                        <td>Emory University, Atlanta, GA, USA</td>
                                    </tr>

                                    <tr>
                                        <td>2013</td>
                                        <td>Ph.D. in Psychology</td>
                                        <td>Emory University, Atlanta, GA, USA</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>





                </div>




            </div>



        );
    }
}

export default About;