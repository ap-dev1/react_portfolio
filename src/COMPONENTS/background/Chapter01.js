import "./chapters.sass"

import React, { Component } from "react";
import parse from "html-react-parser";
import { nanoid } from "nanoid"

import MatchingDemo from "../matching/MatchingDemo.js";
//import ETBD from "../etbd/ETBD.js"





class Chapter01 extends Component {

    render() {

        var skills = [
            "Excel/VBA",
            "syntethic data",
            "research design",
            "hypothesis testing",
            "exploratory analysis",
            "model selection",
            "ensemble fitting",
            "residual analysis",
            "regression analysis",
        ];


        var Skills = skills.map((s) => {
            return <label key={s}>{s}</label>;
        });


        return (
            <div
                id="ChoiceDemo"
                className="chapter"
                style={{
                    //backgroundColor: "#1D2731", 
                    minHeight: "100vh",
                    //backgroundColor: "#bdd4e7",
                    //backgroundImage: "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)",
                    //backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
                    //backgroundColor: "#7f5a83",
                    //backgroundImage: "linear-gradient(315deg, #7f5a83  0%, #0d324d 74%)",
                    backgroundColor: "#17171b",
                    backgroundColor: "#0d324d",  //1d2731
                    backgroundColor: "#1d2731",

                }}
            >

                <div className="chapterRow">
                    <div className="chapterCol">







                        <h2
                            className="chapter-title"
                            style={{
                                fontSize: "16px",
                                margin: "2rem 0rem 1rem 0rem",
                                fontFamily: "Montserrat"

                            }}
                        >
                            Experience the magic!

                        </h2>


                        <p
                            // id="ch01_p3"
                            className="p-left"
                            style={{
                                fontSize: "14px",
                                fontFamily: "Montserrat"
                            }}
                        >
                            The demo simulates the procedure I designed to verify if synthetic data can predict human behavior (Popa, 2013; Popa & McDowell, 2016).
                        </p>


                        <p
                            // id="ch01_p3"
                            className="p-left matching-instructions"
                            style={{
                                fontSize: "12px",
                                fontStyle: "italic",
                                fontFamily: "mono",
                                width: "350px",
                                fontWeight: 500,
                                padding: "14px 20px",
                                margin: "10px auto",
                                color: "#333",
                                backgroundColor: "#ccc",
                                borderRadius: "5px",


                            }}
                        >
                            Clicking inside the marked regions may result in points. Obtain as many as you can. You have 15 seconds. When ready, click START.
                        </p>

                        <h2
                            className="chapter-title"
                            style={{
                                fontSize: "14px",
                                margin: "2rem 0rem 1rem 0rem",
                                fontFamily: "Montserrat"

                            }}
                        >
                            Modelling behavior

                        </h2>


                        <p
                            // id="ch01_p3"
                            className="p-left"
                            style={{
                                fontSize: "14px",
                                fontFamily: "Montserrat"

                            }}
                        >
                            Computational theories implement agents, experimental environments, and theoretical principles proposed to explain their interaction.
                        </p>

                        <p
                            // id="ch01_p3"
                            className="p-left"
                            style={{
                                fontSize: "14px",
                                fontFamily: "Montserrat"

                            }}
                        >
                            The harder it is to tell the difference between synthetic and live data, the better the theory.
                        </p>


                        {/* <h2
                            className="chapter-title"
                            style={{
                                fontSize: "16px",
                                margin: "2rem 0rem 1rem 0rem"
                            }}
                        >
                            Computational ETBDs
                        </h2> */}


                        {/* <p
                            id="ch01_p3"
                            className="p-left"
                            style={{
                                fontSize: "16px"
                            }}
                        >
                            Behavioral repertoires are represented by a range integers. Target classes are sub-ranges, equivalent to lever presses or mouse clicks. A naive agent is a population of integers chosen at random from this range.
                        </p> */}




                        {/* <p
                            className="p-left"
                            style={{
                                fontSize: "16px"
                            }}
                        >
                            Learning is represented by a set of Darwinian rules that transform this population into a new one, again and again.

                            A skinner box is a functional representation of the real world. A computational theory is a functional representation of a skinner box.

                            ... ....  Behaviors are represented by a range of integers, response classes are sub-ranges, and 'agents' are populations of integers that are transformed, generation after generation, by Darwinian rules of <span style={{ color: 'yellow' }} >selection</span>, <span style={{ color: 'yellow' }} >recombination</span>, and <span style={{ color: 'yellow' }} >mutation</span>.
                        </p> */}



                        {/* <div className="chapterSkills">{Skills}</div> */}


                    </div>



                    <div className="chapterCol">

                        <div className="projectColumnImagesMatching">

                            <MatchingDemo />

                            {/* <ETBD /> */}

                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Chapter01;
