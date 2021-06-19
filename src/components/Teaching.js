import React, { Component } from "react";
import "./sassy/teaching.sass";

import parse from "html-react-parser";
import {
    CardDeck,
    Card,

} from "react-bootstrap";

import infoTeaching from "../data/infoTeaching"
//import TeachingForces from "./TeachingForces"


class TeachingExperience extends Component {

    render() {


        return (
            <div id="teachingSection" className="fullscreen darker" style={{ paddingTop: "0rem" }}>

                <div id="divTeachingCards" className="divTeaching">

                    <span className="title1">Teaching experience</span>

                    <span className="subtitle">2007 - 2018</span>

                    <div className="divTeachingCards">

                        {
                            infoTeaching.map((item) => {
                                return (
                                    <Card
                                        bg={"Dark".toLowerCase()}
                                        text={"Dark".toLowerCase() === 'light' ? 'dark' : 'white'}
                                        style={{ width: '17rem', height: '20rem', fontFamily: "Roboto", fontWeight: "300", color: "#777", paddingTop: "1rem", margin: "1rem", }}
                                        className="m-2"
                                    >

                                        <Card.Title
                                            style={{
                                                height: "40%",
                                                //border: "1px solid #6a6969",
                                                padding: "1rem",
                                                marginTop: "1.5rem",
                                                fontFamily: "Roboto",
                                                fontWeight: "300",
                                                fontSize: "1.5rem",
                                                //color: "#eaeaea",
                                                color: "#fff",

                                                lineHeight: "3rem"

                                            }}
                                        >{parse(item.name)}</Card.Title>

                                    </Card>)
                            }
                                // <div className="teachingCard" key={item.name}>
                                //     <p> {parse(item.name)} </p>

                                //     {/* <p> {item.question} </p>
                                //     <p> {parse(item.info)} </p>
                                //     <p> {parse(item.notes)} </p>
                                //     <p> {item.school}, {item.years} </p> */}
                                // </div>
                            )
                        }
                    </div>


                </div>

                {/* <table className="table_teaching">
                    {infoTeaching.map((item) => {
                        return (
                            <tr>
                                <td> {item.name} </td>
                                <td> {parse(item.notes)} </td>
                                <td> {item.school}, {item.years} </td>

                            </tr>
                        );
                    })}
                </table> */}

            </div>
        )
    }
}

export default TeachingExperience;
