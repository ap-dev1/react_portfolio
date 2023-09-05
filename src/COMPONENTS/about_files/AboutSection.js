import "./about.sass"
import profilePic from "./346474668_741310824362862_2634772592078921806_n.jpg"
import React, { Component } from 'react'
import data from '../../DATA/myData'
import parse from 'html-react-parser'
import { nanoid } from 'nanoid'
import infoSkills from "../../DATA/infoSkills"



class About extends Component {


    render() {

        // var Skills = infoSkills.skills.map((item) => {
        //     return (
        //         <label key={nanoid()}  >
        //             {item.name}
        //         </label >
        //     )
        // })


        return (

            <div id='About' key={nanoid()} >

                {/* <h1 key={nanoid()}>There are beautiful things ahead</h1> */}
                <h1 key={nanoid()}>About</h1>




                <div className='about-wrapper' key={nanoid()} >

                    <div className='div-picture' key={nanoid()}  >
                        {
                            data.ShowAboutImage ?
                                <img
                                    // src={data.aboutImage}
                                    src={profilePic}
                                    alt='Dr. Andrei Popa'
                                >
                                </img> : null
                        }

                        <table>
                            <tr>
                                <th title="Bachelor of Arts">B.A., 2003</th>
                                <td>Alexandru Ioan Cuza University, Iasi, Romania</td>
                            </tr>
                            <tr >
                                <th title="Master of Arts">
                                    <a
                                        title="https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en"
                                        href="https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en">M.A., 2009
                                    </a>
                                </th>
                                <td title="https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en">
                                    Emory University, Atlanta, GA
                                </td>
                            </tr>
                            <tr >
                                <th title="Doctor of Philosophy">

                                    <a title="https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en"
                                        href="https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en">Ph.D., 2013
                                    </a>

                                </th>
                                <td>Emory University, Atlanta, GA</td>
                            </tr>

                        </table>


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




                        {/* <div className='div-tech' >
                            {Skills}
                        </div> */}

                    </div>


                </div>

            </div >



        );
    }
}

export default About;