import "./teaching.sass";

import React, { Component } from "react";
import parse from "html-react-parser";
import { Card } from "react-bootstrap";

import { instructorRoles } from "../../DATA/infoTeaching"
//import OrderFellowship from "./OrderFellowship"

import { nanoid } from "nanoid"
import TeachingCard from "./TeachingCard"
import TeachingAssistant from "./TeachingAssistant"

import { Fade } from "react-reveal";
import CollapseHook from "../timeline_files/CollapseHook"

import OrderFellowship from './OrderFellowship'



export default class TeachingExperience extends Component {


    state = {
        teachingDetails: true,
        schools: ["emory", "oxford", "gsu", "agnes"],
    }


    showDetails = () => {
        this.state.teachingDetails === false ? this.setState({ teachingDetails: true }) : this.setState({ teachingDetails: false })
    }



    render() {

        const infoTeaching = instructorRoles()
        var TeachingCards = infoTeaching.map((item) => {

            var muie = item.semesters

            var Muie1 = muie.map((s) => {
                return (
                    <TeachingCard
                        institution={s.institution}
                        institution1={s.institution1}

                        semester={s.semester}
                        sectionSize={s.sectionSize}
                        sections={s.sections}
                        teachingDetails={this.state.teachingDetails}
                        schools={this.state.schools}
                        schoolCode={s.schoolCode}
                        role={s.role}

                    />
                )
            })




            return (
                <Card
                    text={"Dark".toLowerCase() === 'light' ? 'dark' : 'white'}
                    className="card"
                    key={nanoid()}
                >

                    <Fade>
                        <Card.Title
                            className="title"
                            style={{
                                marginBottom: '5px',

                            }}

                        >
                            {parse(item.name)}

                        </Card.Title>
                    </Fade>


                    {Muie1}

                </Card>)
        }
        )


        return (

            <div id='teachingSection'>

                <div
                    style={{
                        width: '350px',
                        height: "fit-content",
                        marginRight: "75px",
                        // display: "flex",
                        // flexDirection: "row",
                    }}
                >

                    <TeachingAssistant />

                    <OrderFellowship />

                </div>




                <div
                    style={{
                        width: "fit-content",
                        marginBottom: "0px",
                        maxWidth: '350px',
                    }}
                >

                    <div className='sub-section-header'  >


                        {/* <h1 className="title"
                            style={{
                                width: 'fit-content',
                                textAlign: 'left',
                            }}
                        >
                            INSTRUCTOR
                        </h1>
                        <h1 className="title"
                            style={{
                                width: 'fit-content',
                                textAlign: 'left',
                                color: '#19f8e2',
                            }}
                        >
                            2013 - 2018
                        </h1> */}




                        <h1 className="title" >   {'INSTRUCTOR'}  </h1>
                        <h2 className="years" >  {'2013 - 2018'}  </h2>


                    </div>


                    <div className="teachingCards"   >
                        {TeachingCards}
                    </div>






                </div>




            </div>


        )
    }
}

