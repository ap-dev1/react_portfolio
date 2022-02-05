import React, { Component } from "react";
import "./teaching.sass";

import parse from "html-react-parser";
import { Card } from "react-bootstrap";

import { instructorRoles } from "../../DATA/infoTeaching"

//import OrderFellowship from "./OrderFellowship"


import { nanoid } from "nanoid"

import TeachingCard from "./TeachingCard"
import TeachingAssistant from "./TeachingAssistant"

export default class TeachingExperience extends Component {


    state = {
        teachingDetails: false,
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

                    <Card.Title
                        className="title"
                        style={{
                            fontFamily: 'Architects Daughter, cursive',
                            // fontFamily: 'Annie Use Your Telescope, cursive',
                            fontSize: "16px",
                        }}
                    >
                        {parse(item.name)}

                    </Card.Title>

                    {Muie1}

                </Card>)
        }
        )


        return (

            <div id="teachingSection" >



                <div className="teachingCards">


                    {TeachingCards}

                    <button
                        id='teachingDetails'
                        onClick={this.showDetails}
                    >
                        DETAILS
                        </button>

                </div>



            </div>


        )
    }
}

