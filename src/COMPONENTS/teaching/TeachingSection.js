import React, { Component } from "react";
import "./teaching.sass";

import parse from "html-react-parser";
import { Card } from "react-bootstrap";

import infoTeaching from "../../DATA/infoTeaching"

//import OrderFellowship from "./OrderFellowship"

class TeachingExperience extends Component {

    render() {


        return (
            <div id="teachingSection">


                {/* <OrderFellowship /> */}


                <div className="col1">

                    <div className="divIntro">
                        <h1 className="title">Teaching experience</h1>
                        <span className="subtitle">2007 - 2018 | Atlanta, GA</span>

                    </div>

                    <div className="divSchools">
                        <button>Emory University</button>
                        <button>Georgia State University</button>
                        <button>Agnes Scott College</button>
                        <button>Oxford College <br />of Emory University</button>
                    </div>
                </div>



                <div className="col2">
                    <div className="teachingCards">
                        {
                            infoTeaching.map((item) => {
                                return (
                                    <Card
                                        bg={"Dark".toLowerCase()}
                                        text={"Dark".toLowerCase() === 'light' ? 'dark' : 'white'}
                                        className="card"
                                        key={item.question}
                                    >

                                        <Card.Title className="title">{parse(item.name)}</Card.Title>

                                    </Card>)
                            }
                            )
                        }
                    </div>

                </div>






            </div >
        )
    }
}

export default TeachingExperience;
