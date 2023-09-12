import React, { Component } from "react";
import { nanoid } from "nanoid";

import "./_research-demo.sass";
import MatchingDemo from "../matching/MatchingDemo.jsx";


export default class ResearchDemo extends Component {
    render() {
        return (
            <div id='research-demo' key={nanoid()}>

                <div key={nanoid()}
                    style={{
                        color: "#ddd",
                        // border: "1px solid white",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",

                    }}
                >


                    <p
                        style={{
                            width: "350px",
                            margin: "1rem auto",
                            fontSize: "13px"
                        }}
                    >Essentially, I program virtual agents animated by a dynamic theory of learning, like the one instantiated here (Popa, 2019).
                    </p>

                    <p
                        style={{
                            width: "350px",
                            margin: "1rem auto",
                            fontSize: "13px"
                        }}
                    >I compare the emergent behavior to live data using experimental interfaces like the one bellow (Popa, 2013; Popa et al, 2016; Popa, 2018).
                    </p>

                    <div>



                        {/* <p
                            key={nanoid()}
                            style={{
                                fontSize: "13px",
                                maxWidth: "400px",
                                border: "1px solid grey",
                                marginRight: "1rem",
                                marginTop: "1rem",

                            }}
                        >
                            I have considerable experience with human research but note that my main line of work is computational. 

                            I used live research for two reasons: to verify computational predictions (Popa, 2013; scroll to

                            <span
                                className="span-scroll"
                                style={{
                                    color: "orange",
                                }}
                                onClick={(() => document.getElementById('FastMatching').scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                }))}
                            >
                                {' Fast Matching'}
                            </span>

                            {'), '}

                            and to create challenging new benchmarks (
                            <span
                                className="span-scroll"
                                style={{
                                    color: "orange",
                                }}
                                onClick={(() => document.getElementById('Sparc').scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                }))}
                            >
                                {' SpARC 2016 '}
                            </span>


                            <span
                                className="span-scroll"
                                style={{
                                    color: "orange",
                                }}
                                onClick={(() => document.getElementById('Triangles').scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                }))}
                            >
                                {' Triangles! '}
                            </span>
                        </p> */}



                    </div>















































                    <p key={nanoid()}
                        style={{
                            fontSize: "13px",
                            maxWidth: "400px",
                            marginLeft: "1rem",
                            marginTop: "1rem",

                        }}

                    >
                        {/* Essentially, I program virtual agents to act by a set of rules and I compare their behavior with those of live agents. */}

                        {/* <span
                            className="span-scroll"
                            style={{ color: "orange",}}
                            onClick={(() => document.getElementById('AgreementMatching').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            }))}
                        >
                            {' Agreement with mathematical models, '}
                        </span>

                        <span
                            className="span-scroll"
                            style={{
                                color: "orange",
                            }}
                            onClick={(() => document.getElementById('divHammingOgive').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            }))}
                        >
                            {' Hamming Distances, '}
                        </span>

                        <span
                            className="span-scroll"
                            style={{
                                color: "orange",
                            }}
                            onClick={(() => document.getElementById('MutationADHD').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            }))}
                        >
                            {' Mutation rate and impulsivity, '}
                        </span>

                        <span
                            className="span-scroll"
                            style={{
                                color: "orange",
                            }}
                            onClick={(() => document.getElementById('Dissertation').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            }))}
                        >
                            {' or the emergence of ADHD. '}
                        </span> */}
                    </p>









                </div>


                <MatchingDemo />


            </div>
        );
    }
}


